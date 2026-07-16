const links = ["Collections", "Projects", "Custom Design", "Capabilities", "About"];

export function Header() {
  return (
    <header className="siteHeader">
      <a className="brand" href="#top" aria-label="Adonis Architectural Metal home">
        <span className="brandMark">A</span>
        <span><strong>ADONIS</strong><small>ARCHITECTURAL METAL</small></span>
      </a>
      <nav aria-label="Main navigation">
        {links.map((link) => <a key={link} href={`#${link.toLowerCase().replaceAll(" ", "-")}`}>{link}</a>)}
      </nav>
      <a className="button buttonSmall" href="#contact">Request a Quote</a>
    </header>
  );
}
