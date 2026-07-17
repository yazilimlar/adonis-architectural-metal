"use client";

import { useLocale, type Locale } from "@/components/LocaleProvider";

const labels = {
  tr: { collections: "Koleksiyonlar", projects: "Projeler", custom: "Özel Tasarım", capabilities: "Yetkinlikler", about: "Hakkımızda", quote: "Teklif İste" },
  en: { collections: "Collections", projects: "Projects", custom: "Custom Design", capabilities: "Capabilities", about: "About", quote: "Request a Quote" },
  de: { collections: "Kollektionen", projects: "Projekte", custom: "Sonderanfertigung", capabilities: "Kompetenzen", about: "Über uns", quote: "Angebot anfragen" },
  ru: { collections: "Коллекции", projects: "Проекты", custom: "Индивидуальный дизайн", capabilities: "Возможности", about: "О нас", quote: "Запросить предложение" }
} as const;

const languageOptions: Array<{ value: Locale; label: string }> = [
  { value: "tr", label: "🇹🇷 Türkçe" },
  { value: "en", label: "🇬🇧 English" },
  { value: "de", label: "🇩🇪 Deutsch" },
  { value: "ru", label: "🇷🇺 Русский" }
];

export function Header() {
  const { locale, setLocale } = useLocale();
  const t = labels[locale];
  const links = [
    [t.collections, "collections"],
    [t.projects, "projects"],
    [t.custom, "custom-design"],
    [t.capabilities, "materials"],
    [t.about, "about"]
  ] as const;

  return (
    <header className="siteHeader">
      <a className="brand" href="#top" aria-label="Adonis Architectural Metal">
        <span className="brandMark">A</span>
        <span><strong>ADONIS</strong><small>ARCHITECTURAL METAL</small></span>
      </a>
      <nav aria-label="Main navigation">
        {links.map(([label, target]) => <a key={target} href={`#${target}`}>{label}</a>)}
      </nav>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <select
          aria-label="Language"
          value={locale}
          onChange={(event) => setLocale(event.target.value as Locale)}
          style={{ border: "1px solid rgba(24,23,19,.2)", background: "transparent", padding: "9px 8px", fontSize: 12 }}
        >
          {languageOptions.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
        </select>
        <a className="button buttonSmall" href="#contact">{t.quote}</a>
      </div>
    </header>
  );
}
