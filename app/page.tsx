import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { collections, featuredProjects, flagshipProducts, materials } from "@/content/site";

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <section className="hero">
          <div className="heroCopy">
            <div className="eyebrow">ARTISTIC METALWORK • CUSTOM MANUFACTURING</div>
            <h1>Metal, elevated into <em>art.</em></h1>
            <p>Adonis creates refined furniture, architectural metalwork and functional objects for homes, hotels, offices and distinctive public environments.</p>
            <div className="actions">
              <a className="button" href="#products">Explore Signature Pieces</a>
              <a className="textLink" href="#contact">Commission a Custom Design →</a>
            </div>
            <dl className="heroFacts">
              <div><dt>Made to order</dt><dd>Custom dimensions, finishes and materials</dd></div>
              <div><dt>Design to installation</dt><dd>One disciplined fabrication workflow</dd></div>
              <div><dt>Residential + contract</dt><dd>Individual pieces and complete collections</dd></div>
            </dl>
          </div>
          <div className="heroIdentity">
            <div className="logoStage">
              <Image src="/brand/adonis-logo.webp" alt="Adonis Architectural Metal emblem" width={1200} height={1200} priority />
            </div>
            <p>Precision in structure. Character in every line.</p>
          </div>
        </section>

        <section className="marquee" aria-label="Adonis capabilities">
          <span>Furniture</span><b>◆</b><span>Gates</span><b>◆</b><span>Fences</span><b>◆</b><span>Doors</span><b>◆</b><span>Hospitality</span><b>◆</b><span>Decorative Objects</span>
        </section>

        <section id="collections" className="section">
          <div className="sectionHead"><span>01 / COLLECTIONS</span><h2>Objects with architectural permanence.</h2></div>
          <div className="grid collections">
            {collections.map((item, index) => (
              <article className="collectionCard" key={item.slug}>
                <div className={`collectionVisual collectionVisual${index + 1}`}><b>0{index + 1}</b><span>{item.title}</span></div>
                <h3>{item.title}</h3><p>{item.description}</p><small>{item.examples.join(" · ")}</small>
              </article>
            ))}
          </div>
        </section>

        <section id="products" className="section productsSection">
          <div className="sectionHead"><span>02 / SIGNATURE PIECES</span><h2>A first collection for the Adonis portfolio.</h2></div>
          <p className="sectionIntro">These initial product concepts establish the portfolio structure while verified photography, dimensions and pricing are collected from the workshop.</p>
          <div className="productGrid">
            {flagshipProducts.map((product, index) => (
              <article className="productCard" key={product.slug}>
                <div className={`productVisual productVisual${index + 1}`}>
                  <span>{product.code}</span><b>{String(index + 1).padStart(2, "0")}</b>
                </div>
                <div className="productMeta"><span>{product.category}</span><span>{product.availability}</span></div>
                <h3>{product.title}</h3><p>{product.statement}</p><small>{product.materials.join(" + ")}</small>
                <a className="cardLink" href="#contact">Request this design →</a>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section darkSection">
          <div className="sectionHead"><span>03 / SELECTED WORK</span><h2>Designed for place, purpose and people.</h2></div>
          <div className="grid projects">
            {featuredProjects.map((project, index) => (
              <article key={project.slug}>
                <div className={`projectVisual projectVisual${index + 1}`}><span>Project imagery pending</span></div>
                <span>{project.sector}</span><h3>{project.title}</h3><p>{project.summary}</p><small>{project.materials.join(" + ")}</small>
              </article>
            ))}
          </div>
        </section>

        <section id="custom-design" className="section process">
          <div><span>04 / CUSTOM DESIGN</span><h2>From first sketch to final installation.</h2><p>Every commission is developed through a disciplined process balancing proportion, material, structure, finish, budget and delivery.</p><a className="textLink" href="#contact">Begin a commission →</a></div>
          <ol>{["Design brief", "Concept & estimate", "Shop drawings", "Fabrication", "Finishing", "Delivery & installation"].map((step, i) => <li key={step}><b>{String(i + 1).padStart(2,"0")}</b>{step}</li>)}</ol>
        </section>

        <section id="materials" className="section materialsSection">
          <div className="sectionHead"><span>05 / MATERIAL LANGUAGE</span><h2>Metal in dialogue with wood, stone and glass.</h2></div>
          <div className="materialGrid">{materials.map((material, index) => <article key={material}><b>{String(index + 1).padStart(2, "0")}</b><h3>{material}</h3><p>Available in project-specific grades, textures and protective finishes.</p></article>)}</div>
        </section>

        <section className="section statement"><p>Every project begins with a line. Every line becomes structure. Every finished piece becomes part of the architecture.</p></section>

        <section id="about" className="section split">
          <div><span>06 / ABOUT ADONIS</span><h2>Where metalwork becomes design.</h2></div>
          <div><p>Adonis Architectural Metal brings artistic intention and manufacturing discipline together. The company creates made-to-order furniture, architectural systems and functional objects for clients who value originality, durability and precise execution.</p><p>Residential commissions, hospitality collections, office furniture and exterior architectural work are developed through one coordinated design-and-fabrication process.</p><p className="muted">Company history, workshop location, service territory and verified capabilities will be added during the client content interview.</p></div>
        </section>

        <section id="contact" className="section contact">
          <div><span>START A PROJECT</span><h2>Bring us the room, the drawing or simply the idea.</h2><p>Submit an initial brief. Drawings, dimensions, inspiration images and commercial schedules can be added during project review.</p></div>
          <form action="/api/inquiry" method="post">
            <label>Name<input name="name" required /></label>
            <label>Email<input name="email" type="email" required /></label>
            <label>Project type<select name="projectType" defaultValue=""><option value="" disabled>Select one</option><option>Custom furniture</option><option>Hospitality / commercial</option><option>Gate, fence or door</option><option>Decorative object</option><option>Other</option></select></label>
            <label>Project details<textarea name="message" rows={5} required /></label>
            <button className="button" type="submit">Submit Project Inquiry</button>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}
