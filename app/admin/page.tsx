import "./admin.css";

const slots = [
  { key: "hero", title: "Hero Image", subtitle: "Signature Adonis Statement Piece", ratio: "16:10 landscape", minimum: "2000 × 1250 px", current: "/images/portfolio/adonis-hero-signature-table.png" },
  { key: "furniture", title: "Furniture Collection", subtitle: "Table, desk and seating family", ratio: "4:5 vertical", minimum: "1600 × 2000 px", current: "/images/portfolio/adonis-collection-furniture.png" },
  { key: "gate", title: "Architectural Metalwork", subtitle: "Gate, fence and entry systems", ratio: "4:5 vertical", minimum: "1600 × 2000 px", current: "/images/portfolio/adonis-architectural-gate.png" },
  { key: "hospitality", title: "Hospitality", subtitle: "Reception and commercial installation", ratio: "3:2 landscape", minimum: "2000 × 1333 px", current: "/images/portfolio/adonis-hospitality-reception.png" },
  { key: "decorative", title: "Decorative Object", subtitle: "Wine display and collectible objects", ratio: "4:5 vertical", minimum: "1600 × 2000 px", current: "/images/portfolio/adonis-decorative-object.png" },
  { key: "craftsmanship", title: "Craftsmanship", subtitle: "Workshop and fabrication process", ratio: "3:2 landscape", minimum: "2000 × 1333 px", current: "/images/portfolio/adonis-workshop-craftsmanship.png" },
] as const;

export default function AdminPage() {
  return (
    <main className="adminShell">
      <header className="adminHeader">
        <div>
          <p className="adminKicker">ADONIS STUDIO</p>
          <h1>Visual Asset Control</h1>
          <p className="adminLead">Six fixed publishing slots. Upload, validate, preview and publish without changing website code.</p>
        </div>
        <div className="adminStatus"><span className="statusDot" /> Foundation mode</div>
      </header>

      <section className="adminNotice" aria-label="Foundation status">
        <strong>Safe preview:</strong> publishing controls remain disabled until Supabase Auth, database policies and media storage are connected.
      </section>

      <section className="assetGrid" aria-label="Adonis visual asset slots">
        {slots.map((slot, index) => (
          <article className="assetCard" key={slot.key}>
            <div className="assetNumber">{String(index + 1).padStart(2, "0")}</div>
            <div className="assetPreview">
              <img src={slot.current} alt={`${slot.title} current preview`} />
              <span>Current published asset</span>
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
                <span>Select replacement</span>
                <input type="file" accept="image/png,image/jpeg,image/webp,image/avif" disabled />
              </label>
              <div className="assetActions">
                <button type="button" disabled>Preview</button>
                <button type="button" className="primary" disabled>Publish</button>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="brandLock">
        <div><p className="adminKicker">LOCKED BRAND ASSETS</p><h2>Logo and logo-film protection</h2></div>
        <p>The approved logo and opening MP4 remain read-only and outside the ordinary editorial workflow.</p>
      </section>
    </main>
  );
}
