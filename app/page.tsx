"use client";

import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useLocale } from "@/components/LocaleProvider";
import { collections, featuredProjects, flagshipProducts, materials } from "@/content/site";

const collectionImages = [
  "/images/portfolio/adonis-furniture.webp",
  "/images/portfolio/adonis-gate.webp",
  "/images/portfolio/adonis-hospitality.webp",
  "/images/portfolio/adonis-decorative.webp",
];

const productImages = [
  "/images/portfolio/adonis-hero.webp",
  "/images/portfolio/adonis-furniture.webp",
  "/images/portfolio/adonis-gate.webp",
  "/images/portfolio/adonis-hospitality.webp",
  "/images/portfolio/adonis-decorative.webp",
  "/images/portfolio/adonis-workshop.webp",
];

const projectImages = [
  "/images/portfolio/adonis-hospitality.webp",
  "/images/portfolio/adonis-gate.webp",
  "/images/portfolio/adonis-furniture.webp",
];

const copy = {
  tr: {
    enter: "Adonis'e Gir ↓", eyebrow: "İNCE METAL İŞÇİLİĞİ • ÖZEL ÜRETİM", heroTitle: "Metal, sanata yükselir.", heroText: "Adonis; evler, oteller, ofisler ve seçkin kamusal alanlar için zarif mobilyalar, mimari metal işleri ve işlevsel objeler üretir.", explore: "İmza Parçalarını Keşfet", commission: "Özel Tasarım Talep Et →", made: "Siparişe özel", madeText: "Özel ölçüler, yüzeyler ve malzemeler", install: "Tasarımdan montaja", installText: "Tek ve disiplinli üretim süreci", contract: "Konut + ticari", contractText: "Tekil parçalar ve bütün koleksiyonlar", signature: "İmza Parçası 01", table: "Adonis İmza Masası", collections: "01 / KOLEKSİYONLAR", collectionsTitle: "Mimari kalıcılığa sahip objeler.", products: "02 / İMZA PARÇALARI", productsTitle: "Adonis portföyünün ilk koleksiyonu.", intro: "Karartılmış çelik, bronz, ceviz, kireçtaşı ve füme camdan oluşan bütüncül bir koleksiyon.", requestDesign: "Bu tasarımı talep et →", work: "03 / SEÇİLMİŞ İŞLER", workTitle: "Mekân, amaç ve insan için tasarlandı.", custom: "04 / ÖZEL TASARIM", customTitle: "İlk eskizden son montaja.", customText: "Her siparişte oran, malzeme, strüktür, yüzey, bütçe ve teslimat dengelenir.", steps: ["Tasarım özeti", "Konsept ve ön fiyat", "İmalat çizimleri", "Üretim", "Yüzey işlemleri", "Teslimat ve montaj"], begin: "Bir proje başlat →", material: "05 / MALZEME DİLİ", materialTitle: "Metal; ahşap, taş ve camla diyalog içinde.", materialText: "Projeye özel kalite, doku ve koruyucu yüzey seçenekleriyle sunulur.", statement: "Her proje bir çizgiyle başlar. Her çizgi strüktüre dönüşür. Her tamamlanmış parça mimarinin bir parçası olur.", about: "06 / ADONİS HAKKINDA", aboutTitle: "Metal işçiliğinin tasarıma dönüştüğü yer.", about1: "Adonis Architectural Metal, sanatsal niyet ile üretim disiplinini bir araya getirir. Özgünlük, dayanıklılık ve hassas uygulamaya değer veren müşteriler için siparişe özel mobilyalar, mimari sistemler ve işlevsel objeler üretir.", about2: "Konut projeleri, otel koleksiyonları, ofis mobilyaları ve dış mekân mimari işleri tek bir koordineli tasarım ve üretim süreciyle geliştirilir.", start: "PROJE BAŞLAT", startTitle: "Bize odayı, çizimi ya da yalnızca fikri getirin.", startText: "İlk proje özetinizi gönderin. Çizimler, ölçüler, ilham görselleri ve ticari programlar proje incelemesi sırasında eklenebilir.", name: "Ad Soyad", email: "E-posta", type: "Proje türü", select: "Seçiniz", details: "Proje detayları", submit: "Proje Talebini Gönder", contact: "Doğrudan İletişim", sales: "Satış Müdürü", developer: "Geliştirici"
  },
  en: {
    enter: "Enter Adonis ↓", eyebrow: "FINE METALWORK • CUSTOM MANUFACTURING", heroTitle: "Metal, elevated into art.", heroText: "Adonis creates refined furniture, architectural metalwork and functional objects for homes, hotels, offices and distinctive public environments.", explore: "Explore Signature Pieces", commission: "Commission a Custom Design →", made: "Made to order", madeText: "Custom dimensions, finishes and materials", install: "Design to installation", installText: "One disciplined fabrication workflow", contract: "Residential + contract", contractText: "Individual pieces and complete collections", signature: "Signature Piece 01", table: "Adonis Statement Table", collections: "01 / COLLECTIONS", collectionsTitle: "Objects with architectural permanence.", products: "02 / SIGNATURE PIECES", productsTitle: "A first collection for the Adonis portfolio.", intro: "A unified collection in blackened steel, bronze, walnut, limestone and smoked glass.", requestDesign: "Request this design →", work: "03 / SELECTED WORK", workTitle: "Designed for place, purpose and people.", custom: "04 / CUSTOM DESIGN", customTitle: "From first sketch to final installation.", customText: "Every commission balances proportion, material, structure, finish, budget and delivery.", steps: ["Design brief", "Concept & estimate", "Shop drawings", "Fabrication", "Finishing", "Delivery & installation"], begin: "Begin a commission →", material: "05 / MATERIAL LANGUAGE", materialTitle: "Metal in dialogue with wood, stone and glass.", materialText: "Available in project-specific grades, textures and protective finishes.", statement: "Every project begins with a line. Every line becomes structure. Every finished piece becomes part of the architecture.", about: "06 / ABOUT ADONIS", aboutTitle: "Where metalwork becomes design.", about1: "Adonis Architectural Metal brings artistic intention and manufacturing discipline together. The company creates made-to-order furniture, architectural systems and functional objects for clients who value originality, durability and precise execution.", about2: "Residential commissions, hospitality collections, office furniture and exterior architectural work are developed through one coordinated design-and-fabrication process.", start: "START A PROJECT", startTitle: "Bring us the room, the drawing or simply the idea.", startText: "Submit an initial brief. Drawings, dimensions, inspiration images and commercial schedules can be added during project review.", name: "Name", email: "Email", type: "Project type", select: "Select one", details: "Project details", submit: "Submit Project Inquiry", contact: "Direct Contact", sales: "Sales Manager", developer: "Developer"
  },
  de: {
    enter: "Adonis betreten ↓", eyebrow: "FEINE METALLARBEIT • SONDERANFERTIGUNG", heroTitle: "Metall, zur Kunst erhoben.", heroText: "Adonis fertigt edle Möbel, Architekturmetallbau und funktionale Objekte für Wohnhäuser, Hotels, Büros und besondere öffentliche Räume.", explore: "Signaturstücke entdecken", commission: "Sonderanfertigung anfragen →", made: "Auf Bestellung", madeText: "Individuelle Maße, Oberflächen und Materialien", install: "Von Entwurf bis Montage", installText: "Ein disziplinierter Fertigungsablauf", contract: "Wohnen + Objekt", contractText: "Einzelstücke und komplette Kollektionen", signature: "Signaturstück 01", table: "Adonis Statement-Tisch", collections: "01 / KOLLEKTIONEN", collectionsTitle: "Objekte mit architektonischer Beständigkeit.", products: "02 / SIGNATURSTÜCKE", productsTitle: "Die erste Kollektion für das Adonis-Portfolio.", intro: "Eine einheitliche Kollektion aus geschwärztem Stahl, Bronze, Walnuss, Kalkstein und Rauchglas.", requestDesign: "Dieses Design anfragen →", work: "03 / AUSGEWÄHLTE ARBEITEN", workTitle: "Für Ort, Zweck und Menschen gestaltet.", custom: "04 / SONDERANFERTIGUNG", customTitle: "Von der ersten Skizze bis zur Montage.", customText: "Jeder Auftrag verbindet Proportion, Material, Struktur, Oberfläche, Budget und Lieferung.", steps: ["Designbrief", "Konzept und Kostenschätzung", "Werkstattzeichnungen", "Fertigung", "Oberflächenbearbeitung", "Lieferung und Montage"], begin: "Projekt beginnen →", material: "05 / MATERIALSPRACHE", materialTitle: "Metall im Dialog mit Holz, Stein und Glas.", materialText: "Erhältlich in projektspezifischen Qualitäten, Texturen und Schutzoberflächen.", statement: "Jedes Projekt beginnt mit einer Linie. Jede Linie wird zur Struktur. Jedes fertige Stück wird Teil der Architektur.", about: "06 / ÜBER ADONIS", aboutTitle: "Wo Metallarbeit zu Design wird.", about1: "Adonis Architectural Metal verbindet künstlerische Absicht mit Fertigungsdisziplin und produziert maßgefertigte Möbel, Architektursysteme und funktionale Objekte.", about2: "Wohnprojekte, Hotelkollektionen, Büromöbel und Außenarbeiten entstehen in einem koordinierten Entwurfs- und Fertigungsprozess.", start: "PROJEKT STARTEN", startTitle: "Bringen Sie uns den Raum, die Zeichnung oder einfach die Idee.", startText: "Senden Sie eine erste Projektbeschreibung. Zeichnungen, Maße und Referenzbilder können später ergänzt werden.", name: "Name", email: "E-Mail", type: "Projekttyp", select: "Bitte wählen", details: "Projektdetails", submit: "Projektanfrage senden", contact: "Direkter Kontakt", sales: "Vertriebsleiter", developer: "Entwickler"
  },
  ru: {
    enter: "Войти в Adonis ↓", eyebrow: "ТОНКАЯ РАБОТА ПО МЕТАЛЛУ • ИНДИВИДУАЛЬНОЕ ПРОИЗВОДСТВО", heroTitle: "Металл, возведённый в искусство.", heroText: "Adonis создаёт изысканную мебель, архитектурные металлические конструкции и функциональные объекты для домов, отелей, офисов и общественных пространств.", explore: "Посмотреть фирменные изделия", commission: "Заказать индивидуальный дизайн →", made: "На заказ", madeText: "Индивидуальные размеры, отделка и материалы", install: "От дизайна до монтажа", installText: "Единый дисциплинированный производственный процесс", contract: "Жилые + коммерческие", contractText: "Отдельные изделия и полные коллекции", signature: "Фирменное изделие 01", table: "Стол Adonis Statement", collections: "01 / КОЛЛЕКЦИИ", collectionsTitle: "Объекты с архитектурной долговечностью.", products: "02 / ФИРМЕННЫЕ ИЗДЕЛИЯ", productsTitle: "Первая коллекция портфолио Adonis.", intro: "Единая коллекция из чернёной стали, бронзы, ореха, известняка и дымчатого стекла.", requestDesign: "Запросить этот дизайн →", work: "03 / ИЗБРАННЫЕ РАБОТЫ", workTitle: "Создано для места, цели и людей.", custom: "04 / ИНДИВИДУАЛЬНЫЙ ДИЗАЙН", customTitle: "От первого эскиза до финального монтажа.", customText: "Каждый заказ объединяет пропорции, материал, конструкцию, отделку, бюджет и доставку.", steps: ["Техническое задание", "Концепция и оценка", "Рабочие чертежи", "Изготовление", "Отделка", "Доставка и монтаж"], begin: "Начать проект →", material: "05 / ЯЗЫК МАТЕРИАЛОВ", materialTitle: "Металл в диалоге с деревом, камнем и стеклом.", materialText: "Доступны проектные марки, текстуры и защитные покрытия.", statement: "Каждый проект начинается с линии. Каждая линия становится конструкцией. Каждое готовое изделие становится частью архитектуры.", about: "06 / ОБ ADONIS", aboutTitle: "Где работа с металлом становится дизайном.", about1: "Adonis Architectural Metal объединяет художественный замысел и производственную дисциплину, создавая мебель на заказ, архитектурные системы и функциональные объекты.", about2: "Жилые проекты, гостиничные коллекции, офисная мебель и наружные конструкции создаются в едином процессе проектирования и производства.", start: "НАЧАТЬ ПРОЕКТ", startTitle: "Покажите нам помещение, чертёж или просто идею.", startText: "Отправьте первоначальное описание. Чертежи, размеры и референсы можно добавить при рассмотрении проекта.", name: "Имя", email: "Эл. почта", type: "Тип проекта", select: "Выберите", details: "Детали проекта", submit: "Отправить запрос", contact: "Прямой контакт", sales: "Менеджер по продажам", developer: "Разработчик"
  }
} as const;

export default function Home() {
  const { locale } = useLocale();
  const t = copy[locale];

  return (
    <>
      <Header />
      <main id="top">
        <section className="brandFilm" aria-label="Adonis logo film">
          <video autoPlay muted playsInline loop poster="/brand/approved/v1.0/adonis-main-logo.png"><source src="/brand/approved/v1.0/adonis-logo-video.mp4" type="video/mp4" /></video>
          <a href="#hero" className="filmSkip">{t.enter}</a>
        </section>

        <section id="hero" className="hero heroWithPortfolio">
          <div className="heroCopy">
            <div className="eyebrow">{t.eyebrow}</div><h1>{t.heroTitle}</h1><p>{t.heroText}</p>
            <div className="actions"><a className="button" href="#products">{t.explore}</a><a className="textLink" href="#contact">{t.commission}</a></div>
            <dl className="heroFacts"><div><dt>{t.made}</dt><dd>{t.madeText}</dd></div><div><dt>{t.install}</dt><dd>{t.installText}</dd></div><div><dt>{t.contract}</dt><dd>{t.contractText}</dd></div></dl>
          </div>
          <div className="heroPortfolioImage"><Image src="/images/portfolio/adonis-hero.webp" alt={t.table} fill priority sizes="(max-width: 820px) 100vw, 46vw" /><div className="portfolioCaption"><span>{t.signature}</span><strong>{t.table}</strong></div></div>
        </section>

        <section className="marquee" aria-label="Adonis capabilities"><span>Furniture</span><b>◆</b><span>Gates</span><b>◆</b><span>Fences</span><b>◆</b><span>Doors</span><b>◆</b><span>Hospitality</span><b>◆</b><span>Decorative Objects</span></section>

        <section id="collections" className="section"><div className="sectionHead"><span>{t.collections}</span><h2>{t.collectionsTitle}</h2></div><div className="grid collections">{collections.map((item, index) => <article className="collectionCard" key={item.slug}><div className="collectionVisual portfolioVisual"><Image src={collectionImages[index % collectionImages.length]} alt={item.title} fill sizes="(max-width: 600px) 100vw, (max-width: 1100px) 50vw, 25vw" /><b>0{index + 1}</b><span>{item.title}</span></div><h3>{item.title}</h3><p>{item.description}</p><small>{item.examples.join(" · ")}</small></article>)}</div></section>

        <section id="products" className="section productsSection"><div className="sectionHead"><span>{t.products}</span><h2>{t.productsTitle}</h2></div><p className="sectionIntro">{t.intro}</p><div className="productGrid">{flagshipProducts.map((product, index) => <article className="productCard" key={product.slug}><div className="productVisual portfolioVisual"><Image src={productImages[index % productImages.length]} alt={product.title} fill sizes="(max-width: 600px) 100vw, (max-width: 1100px) 50vw, 33vw" /><span>{product.code}</span><b>{String(index + 1).padStart(2, "0")}</b></div><div className="productMeta"><span>{product.category}</span><span>{product.availability}</span></div><h3>{product.title}</h3><p>{product.statement}</p><small>{product.materials.join(" + ")}</small><a className="cardLink" href="#contact">{t.requestDesign}</a></article>)}</div></section>

        <section id="projects" className="section darkSection"><div className="sectionHead"><span>{t.work}</span><h2>{t.workTitle}</h2></div><div className="grid projects">{featuredProjects.map((project, index) => <article key={project.slug}><div className="projectVisual portfolioVisual"><Image src={projectImages[index % projectImages.length]} alt={project.title} fill sizes="(max-width: 820px) 100vw, 33vw" /></div><span>{project.sector}</span><h3>{project.title}</h3><p>{project.summary}</p><small>{project.materials.join(" + ")}</small></article>)}</div></section>

        <section id="custom-design" className="section process processPortfolio"><div className="workshopImage portfolioVisual"><Image src="/images/portfolio/adonis-workshop.webp" alt="Adonis craftsmanship" fill sizes="(max-width: 820px) 100vw, 48vw" /></div><div><span>{t.custom}</span><h2>{t.customTitle}</h2><p>{t.customText}</p><ol>{t.steps.map((step, i) => <li key={step}><b>{String(i + 1).padStart(2, "0")}</b>{step}</li>)}</ol><a className="textLink" href="#contact">{t.begin}</a></div></section>

        <section id="materials" className="section materialsSection"><div className="sectionHead"><span>{t.material}</span><h2>{t.materialTitle}</h2></div><div className="materialGrid">{materials.map((material, index) => <article key={material}><b>{String(index + 1).padStart(2, "0")}</b><h3>{material}</h3><p>{t.materialText}</p></article>)}</div></section>

        <section className="section statement"><p>{t.statement}</p></section>
        <section id="about" className="section split"><div><span>{t.about}</span><h2>{t.aboutTitle}</h2></div><div><p>{t.about1}</p><p>{t.about2}</p></div></section>

        <section id="contact" className="section contact">
          <div><span>{t.start}</span><h2>{t.startTitle}</h2><p>{t.startText}</p><div style={{ marginTop: 28, lineHeight: 1.9 }}><strong>{t.contact}</strong><br /><strong>{t.sales}:</strong> <a href="tel:+905366088778">+90 536 608 8778</a> · <a href="https://wa.me/905366088778" target="_blank" rel="noreferrer">WhatsApp</a><br /><strong>{t.developer}:</strong> <a href="tel:+15167324019">+1 516 732 4019</a> · <a href="https://wa.me/15167324019" target="_blank" rel="noreferrer">WhatsApp</a><br /><strong>{t.email}:</strong> <a href="mailto:georgeoktem@gmail.com">georgeoktem@gmail.com</a></div></div>
          <form action="/api/inquiry" method="post"><label>{t.name}<input name="name" required /></label><label>{t.email}<input name="email" type="email" required /></label><label>{t.type}<select name="projectType" defaultValue=""><option value="" disabled>{t.select}</option><option>Custom furniture</option><option>Hospitality / commercial</option><option>Gate, fence or door</option><option>Decorative object</option><option>Other</option></select></label><label>{t.details}<textarea name="message" rows={5} required /></label><button className="button" type="submit">{t.submit}</button></form>
        </section>
      </main>
      <Footer />
    </>
  );
}
