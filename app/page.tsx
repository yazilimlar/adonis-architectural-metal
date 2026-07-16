import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { collections, featuredProjects } from "@/content/site";

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <section className="hero">
          <div className="eyebrow">DESIGN • ENGINEERING • CRAFT</div>
          <h1>Metal, shaped into <em>character.</em></h1>
          <p>Custom furniture, architectural elements and artistic objects engineered for distinctive residential, hospitality and commercial spaces.</p>
          <div className="actions"><a className="button" href="#collections">Explore Our Work</a><a className="textLink" href="#contact">Commission a Custom Piece →</a></div>
          <div className="heroFrame" aria-label="Hero product image placeholder"><span>Flagship project photography</span></div>
        </section>

        <section id="collections" className="section">
          <div className="sectionHead"><span>01 / COLLECTIONS</span><h2>Objects with architectural permanence.</h2></div>
          <div className="grid collections">
            {collections.map((item, index) => <article key={item.slug}><div className="imagePlaceholder">0{index + 1}</div><h3>{item.title}</h3><p>{item.description}</p><small>{item.examples.join(" · ")}</small></article>)}
          </div>
        </section>

        <section id="projects" className="section darkSection">
          <div className="sectionHead"><span>02 / SELECTED WORK</span><h2>Designed for place, purpose and people.</h2></div>
          <div className="grid projects">
            {featuredProjects.map((project) => <article key={project.slug}><div className="projectVisual"></div><span>{project.sector}</span><h3>{project.title}</h3><p>{project.summary}</p><small>{project.materials.join(" + ")}</small></article>)}
          </div>
        </section>

        <section id="custom-design" className="section process">
          <div><span>03 / CUSTOM DESIGN</span><h2>From first sketch to final installation.</h2><p>Every commission is developed through a disciplined process balancing proportion, material, structure, finish, budget and delivery.</p></div>
          <ol>{["Design brief", "Concept & estimate", "Shop drawings", "Fabrication", "Finishing", "Delivery & installation"].map((step, i) => <li key={step}><b>{String(i + 1).padStart(2,"0")}</b>{step}</li>)}</ol>
        </section>

        <section id="capabilities" className="section statement"><p>Furniture is not decoration alone. It is structure, touch, movement and memory.</p></section>

        <section id="about" className="section split"><div><span>04 / ABOUT ADONIS</span><h2>Where metalwork becomes design.</h2></div><div><p>Adonis Architectural Metal brings artistic intention and manufacturing discipline together. The studio creates made-to-order furniture, architectural systems and functional objects for clients who value originality, durability and precise execution.</p><p className="muted">Replace this foundation copy with the client’s verified company history, location, capabilities and credentials.</p></div></section>

        <section id="contact" className="section contact">
          <div><span>START A PROJECT</span><h2>Bring us the room, the drawing or simply the idea.</h2></div>
          <form action="/api/inquiry" method="post">
            <label>Name<input name="name" required /></label><label>Email<input name="email" type="email" required /></label><label>Project type<select name="projectType" defaultValue=""><option value="" disabled>Select one</option><option>Custom furniture</option><option>Hospitality / commercial</option><option>Gate, fence or door</option><option>Decorative object</option><option>Other</option></select></label><label>Project details<textarea name="message" rows={5} required /></label><button className="button" type="submit">Submit Project Inquiry</button>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}
