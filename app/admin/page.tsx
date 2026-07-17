"use client";

import { useEffect, useMemo, useState } from "react";
import { supabase } from "@/lib/supabase-browser";
import "./admin.css";

type Slot = {
  key: "hero" | "furniture" | "gate" | "hospitality" | "decorative" | "craftsmanship";
  title: string;
  subtitle: string;
  ratio: string;
  minimum: string;
  minWidth: number;
  minHeight: number;
  current: string;
};

const slots: Slot[] = [
  { key: "hero", title: "Hero Image", subtitle: "Signature Adonis Statement Piece", ratio: "16:10 landscape", minimum: "2000 × 1250 px", minWidth: 2000, minHeight: 1250, current: "/images/portfolio/adonis-hero-signature-table.png" },
  { key: "furniture", title: "Furniture Collection", subtitle: "Table, desk and seating family", ratio: "4:5 vertical", minimum: "1600 × 2000 px", minWidth: 1600, minHeight: 2000, current: "/images/portfolio/adonis-collection-furniture.png" },
  { key: "gate", title: "Architectural Metalwork", subtitle: "Gate, fence and entry systems", ratio: "4:5 vertical", minimum: "1600 × 2000 px", minWidth: 1600, minHeight: 2000, current: "/images/portfolio/adonis-architectural-gate.png" },
  { key: "hospitality", title: "Hospitality", subtitle: "Reception and commercial installation", ratio: "3:2 landscape", minimum: "2000 × 1333 px", minWidth: 2000, minHeight: 1333, current: "/images/portfolio/adonis-hospitality-reception.png" },
  { key: "decorative", title: "Decorative Object", subtitle: "Wine display and collectible objects", ratio: "4:5 vertical", minimum: "1600 × 2000 px", minWidth: 1600, minHeight: 2000, current: "/images/portfolio/adonis-decorative-object.png" },
  { key: "craftsmanship", title: "Craftsmanship", subtitle: "Workshop and fabrication process", ratio: "3:2 landscape", minimum: "2000 × 1333 px", minWidth: 2000, minHeight: 1333, current: "/images/portfolio/adonis-workshop-craftsmanship.png" },
];

const ADMIN_EMAIL = "gokmen1313@gmail.com";

function getImageDimensions(file: File): Promise<{ width: number; height: number }> {
  return new Promise((resolve, reject) => {
    const image = new Image();
    const objectUrl = URL.createObjectURL(file);
    image.onload = () => {
      resolve({ width: image.naturalWidth, height: image.naturalHeight });
      URL.revokeObjectURL(objectUrl);
    };
    image.onerror = () => {
      URL.revokeObjectURL(objectUrl);
      reject(new Error("The selected file is not a readable image."));
    };
    image.src = objectUrl;
  });
}

export default function AdminPage() {
  const [email, setEmail] = useState(ADMIN_EMAIL);
  const [otp, setOtp] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [message, setMessage] = useState("Checking administrator session…");
  const [busyKey, setBusyKey] = useState<string | null>(null);
  const [drafts, setDrafts] = useState<Record<string, { id: string; url: string }>>({});
  const [published, setPublished] = useState<Record<string, string>>({});

  const visibleSlots = useMemo(
    () => slots.map((slot) => ({ ...slot, current: published[slot.key] || slot.current })),
    [published],
  );

  useEffect(() => {
    async function initialize() {
      const { data } = await supabase.auth.getUser();
      const isAdmin = data.user?.email === ADMIN_EMAIL;
      setAuthenticated(isAdmin);
      setMessage(isAdmin ? "Administrator authenticated." : "Sign in with the authorized administrator email.");
      await loadPublished();
    }

    initialize();

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      const isAdmin = session?.user.email === ADMIN_EMAIL;
      setAuthenticated(isAdmin);
    });

    return () => listener.subscription.unsubscribe();
  }, []);

  async function loadPublished() {
    const { data } = await supabase
      .from("asset_slots")
      .select("slot_key, active_version_id, asset_versions!asset_slots_active_version_id_fkey(storage_url)");

    if (!data) return;

    const next: Record<string, string> = {};
    for (const row of data as Array<{ slot_key: string; asset_versions: { storage_url: string } | null }>) {
      if (row.asset_versions?.storage_url) next[row.slot_key] = row.asset_versions.storage_url;
    }
    setPublished(next);
  }

  async function sendOtp() {
    if (email.trim().toLowerCase() !== ADMIN_EMAIL) {
      setMessage("This email is not authorized for Adonis Studio.");
      return;
    }

    setMessage("Sending one-time code…");
    const { error } = await supabase.auth.signInWithOtp({
      email: ADMIN_EMAIL,
      options: { shouldCreateUser: true },
    });
    setMessage(error ? error.message : "Check your email for the six-digit login code.");
  }

  async function verifyOtp() {
    setMessage("Verifying code…");
    const { data, error } = await supabase.auth.verifyOtp({ email: ADMIN_EMAIL, token: otp, type: "email" });
    const isAdmin = data.user?.email === ADMIN_EMAIL;
    setAuthenticated(isAdmin);
    setMessage(error ? error.message : isAdmin ? "Administrator authenticated." : "Authentication failed.");
  }

  async function signOut() {
    await supabase.auth.signOut();
    setAuthenticated(false);
    setMessage("Signed out.");
  }

  async function uploadDraft(slot: Slot, file: File | undefined) {
    if (!file) return;
    if (!authenticated) {
      setMessage("Authenticate before uploading.");
      return;
    }
    if (!file.type.match(/^image\/(jpeg|png|webp|avif)$/)) {
      setMessage("Use JPG, PNG, WebP or AVIF.");
      return;
    }
    if (file.size > 20 * 1024 * 1024) {
      setMessage("The file exceeds the 20 MB limit.");
      return;
    }

    setBusyKey(slot.key);
    try {
      const dimensions = await getImageDimensions(file);
      if (dimensions.width < slot.minWidth || dimensions.height < slot.minHeight) {
        throw new Error(`Image is ${dimensions.width} × ${dimensions.height}; minimum is ${slot.minimum}.`);
      }

      const extension = file.name.split(".").pop()?.toLowerCase() || "jpg";
      const path = `${slot.key}/${Date.now()}-${crypto.randomUUID()}.${extension}`;
      const { error: uploadError } = await supabase.storage.from("adonis-media").upload(path, file, {
        cacheControl: "31536000",
        upsert: false,
      });
      if (uploadError) throw uploadError;

      const { data: publicUrl } = supabase.storage.from("adonis-media").getPublicUrl(path);
      const { data: userData } = await supabase.auth.getUser();
      const { data: version, error: versionError } = await supabase
        .from("asset_versions")
        .insert({
          slot_key: slot.key,
          storage_url: publicUrl.publicUrl,
          original_filename: file.name,
          mime_type: file.type,
          file_size: file.size,
          width: dimensions.width,
          height: dimensions.height,
          alt_text: slot.subtitle,
          status: "draft",
          uploaded_by: userData.user?.id,
        })
        .select("id, storage_url")
        .single();
      if (versionError) throw versionError;

      await supabase.from("asset_activity").insert({ action: "uploaded", slot_key: slot.key, version_id: version.id, user_id: userData.user?.id });
      setDrafts((current) => ({ ...current, [slot.key]: { id: version.id, url: version.storage_url } }));
      setMessage(`${slot.title} draft uploaded. Review it, then press Publish.`);
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Upload failed.");
    } finally {
      setBusyKey(null);
    }
  }

  async function publishDraft(slot: Slot) {
    const draft = drafts[slot.key];
    if (!draft) return;
    setBusyKey(slot.key);
    setMessage(`Publishing ${slot.title}…`);

    try {
      const { data: userData } = await supabase.auth.getUser();
      const { data: existing } = await supabase.from("asset_slots").select("active_version_id").eq("slot_key", slot.key).single();

      if (existing?.active_version_id) {
        await supabase.from("asset_versions").update({ status: "archived" }).eq("id", existing.active_version_id);
      }

      const publishedAt = new Date().toISOString();
      const { error: publishError } = await supabase
        .from("asset_versions")
        .update({ status: "published", published_at: publishedAt })
        .eq("id", draft.id);
      if (publishError) throw publishError;

      const { error: slotError } = await supabase
        .from("asset_slots")
        .update({ active_version_id: draft.id, updated_at: publishedAt })
        .eq("slot_key", slot.key);
      if (slotError) throw slotError;

      await supabase.from("asset_activity").insert({ action: "published", slot_key: slot.key, version_id: draft.id, user_id: userData.user?.id });
      setPublished((current) => ({ ...current, [slot.key]: draft.url }));
      setDrafts((current) => {
        const next = { ...current };
        delete next[slot.key];
        return next;
      });
      setMessage(`${slot.title} published successfully. The previous version remains archived.`);
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Publish failed.");
    } finally {
      setBusyKey(null);
    }
  }

  return (
    <main className="adminShell">
      <header className="adminHeader">
        <div>
          <p className="adminKicker">ADONIS STUDIO</p>
          <h1>Visual Asset Control</h1>
          <p className="adminLead">Six governed publishing slots with validation, drafts and controlled publication.</p>
        </div>
        <div className="adminStatus"><span className="statusDot" /> {authenticated ? "Authenticated" : "Locked"}</div>
      </header>

      <section className="adminNotice" aria-live="polite">
        <strong>Status:</strong> {message}
      </section>

      {!authenticated && (
        <section className="brandLock" aria-label="Administrator login">
          <div>
            <p className="adminKicker">SECURE ACCESS</p>
            <h2>Email one-time code</h2>
          </div>
          <div style={{ display: "grid", gap: 12, minWidth: 280 }}>
            <input value={email} onChange={(event) => setEmail(event.target.value)} type="email" aria-label="Administrator email" />
            <button type="button" onClick={sendOtp}>Send code</button>
            <input value={otp} onChange={(event) => setOtp(event.target.value)} inputMode="numeric" placeholder="Six-digit code" aria-label="One-time code" />
            <button type="button" className="primary" onClick={verifyOtp}>Verify and enter</button>
          </div>
        </section>
      )}

      {authenticated && (
        <>
          <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 20 }}><button type="button" onClick={signOut}>Sign out</button></div>
          <section className="assetGrid" aria-label="Adonis visual asset slots">
            {visibleSlots.map((slot, index) => {
              const draft = drafts[slot.key];
              return (
                <article className="assetCard" key={slot.key}>
                  <div className="assetNumber">{String(index + 1).padStart(2, "0")}</div>
                  <div className="assetPreview">
                    <img src={draft?.url || slot.current} alt={`${slot.title} ${draft ? "draft" : "published"} preview`} />
                    <span>{draft ? "Draft preview — not live" : "Current published asset"}</span>
                  </div>
                  <div className="assetBody">
                    <p className="assetKey">{slot.key}</p>
                    <h2>{slot.title}</h2>
                    <p>{slot.subtitle}</p>
                    <dl>
                      <div><dt>Format</dt><dd>{slot.ratio}</dd></div>
                      <div><dt>Minimum</dt><dd>{slot.minimum}</dd></div>
                    </dl>
                    <label className="uploadField">
                      <span>{busyKey === slot.key ? "Processing…" : "Select replacement"}</span>
                      <input
                        type="file"
                        accept="image/png,image/jpeg,image/webp,image/avif"
                        disabled={busyKey !== null}
                        onChange={(event) => uploadDraft(slot, event.target.files?.[0])}
                      />
                    </label>
                    <div className="assetActions">
                      <button type="button" disabled={!draft}>Preview ready</button>
                      <button type="button" className="primary" disabled={!draft || busyKey !== null} onClick={() => publishDraft(slot)}>Publish</button>
                    </div>
                  </div>
                </article>
              );
            })}
          </section>
        </>
      )}

      <section className="brandLock">
        <div><p className="adminKicker">LOCKED BRAND ASSETS</p><h2>Logo and logo-film protection</h2></div>
        <p>The approved logo and opening MP4 remain read-only and outside the ordinary editorial workflow.</p>
      </section>
    </main>
  );
}
