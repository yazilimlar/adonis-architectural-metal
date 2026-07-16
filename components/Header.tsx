const links = [
  ["Collections", "collections"],
  ["Products", "products"],
  ["Projects", "projects"],
  ["Process", "custom-design"],
  ["Materials", "materials"],
  ["About", "about"]
] as const;

export function Header() {
  return (
    <header className="siteHeader">
      <a className="brand" href="#top" aria-label="Adonis Architectural Metal home">
        <span className="brandMark" aria-hidden="true">A</span>
        <span className="brandType"><strong>ADONIS</strong><small>ARCHITECTURAL METAL</small></span>
      </a>
      <nav aria-label="Main navigation">
        {links.map(([label, target]) => <a key={target} href={`#${target}`}>{label}</a>)}
      </nav>
      <a className="button buttonSmall" href="#contact">Request a Quote</a>
    </header>
  );
}
