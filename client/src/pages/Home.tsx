/* Terracotta Atelier: asymmetrical editorial salon page with tactile warmth, practical contact CTAs, and calm motion. */
import { ArrowUpRight, Clock3, Instagram, MapPin, MessageCircle, Phone, Scissors, Sparkles } from "lucide-react";

const heroImage = "/manus-storage/luce-hero_260c5392.jpg";
const textureImage = "/manus-storage/luce-texture_08e469d4.jpg";
const interiorImage = "/manus-storage/luce-interior_0a100e12.jpg";
const markImage = "/manus-storage/luce-mark_600dddc9.png";

const services = [
  { no: "01", name: "Taglio & forma", note: "Tagli pensati per vivere bene ogni giorno" },
  { no: "02", name: "Colore su misura", note: "Toni luminosi, naturali, completamente tuoi" },
  { no: "03", name: "Piega & styling", note: "Una finitura speciale, anche per un momento" },
];

export default function Home() {
  return (
    <main className="site-shell">
      <div className="demo-ribbon">DEMO CONCEPT · dettagli da confermare con il salone</div>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Luce dei Capelli home">
          <img src={markImage} alt="" className="brand-mark" />
          <span><strong>LUCE</strong><small>DEI CAPELLI</small></span>
        </a>
        <nav className="desktop-nav" aria-label="Navigazione principale">
          <a href="#servizi">Servizi</a><a href="#studio">Lo studio</a><a href="#contatti">Contatti</a>
        </nav>
        <a className="header-cta" href="https://wa.me/393331562813" target="_blank" rel="noreferrer">Prenota <ArrowUpRight size={16} /></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-dot" /> Hair studio · Castel San Giovanni</p>
          <h1>Il tuo stile,<br /><em>nella sua luce.</em></h1>
          <p className="hero-lede">Tagli, colore e styling costruiti intorno a te. Un appuntamento alla volta, con cura.</p>
          <div className="hero-actions"><a className="button button-dark" href="#contatti">Parliamone <ArrowUpRight size={17} /></a><a className="text-link" href="#servizi">Scopri i servizi <span>↘</span></a></div>
          <div className="hero-footnote"><span>01</span><span className="rule" /><span>Via Giuseppe Mazzini 10<br />Castel San Giovanni, PC</span></div>
        </div>
        <div className="hero-visual"><div className="hero-sun" /><img src={heroImage} alt="Ritratto editoriale di una cliente con capelli castani luminosi" /><div className="hero-caption"><span>Una bellezza<br />che ti somiglia.</span><span className="caption-arrow">↗</span></div></div>
      </section>

      <section className="intro-band" id="studio">
        <div className="intro-marker">L / 01</div><div className="intro-statement">Non cerchiamo il look perfetto.<br /><em>Cerchiamo quello giusto per te.</em></div>
        <p className="intro-detail">Luce dei Capelli è uno spazio raccolto per chi desidera sentirsi bene nei propri capelli, con un risultato naturale, preciso e facile da portare.</p>
      </section>

      <section className="services-section" id="servizi">
        <div className="section-head"><div><p className="eyebrow">La nostra mano</p><h2>Servizi<br /><em>con intenzione.</em></h2></div><p className="section-aside">Ogni servizio inizia da una conversazione. I dettagli e i prezzi vengono definiti insieme al salone.</p></div>
        <div className="service-list">{services.map((service) => <article className="service-row" key={service.no}><span className="service-no">{service.no}</span><h3>{service.name}</h3><p>{service.note}</p><ArrowUpRight className="service-arrow" size={22} /></article>)}</div>
      </section>

      <section className="visual-story">
        <div className="story-image story-texture"><img src={textureImage} alt="Dettaglio di capelli mossi con riflessi caldi" /><span className="image-tag">Texture / 02</span></div>
        <div className="story-copy"><Sparkles size={19} /><p className="eyebrow">Il dettaglio conta</p><h2>La tua luce<br /><em>è diversa.</em></h2><p>Una buona forma, il tono giusto, una piega che resta. Lavoriamo sui dettagli che fanno la differenza quando esci dal salone e torni alla tua vita.</p><a className="text-link dark-link" href="#contatti">Raccontaci cosa desideri <span>↗</span></a></div>
        <div className="story-image story-interior"><img src={interiorImage} alt="Dettaglio caldo e minimalista dell'interno dello studio" /><span className="image-tag">Studio / 03</span></div>
      </section>

      <section className="contact-section" id="contatti">
        <div className="contact-main"><p className="eyebrow">Facciamo spazio</p><h2>Pronta a<br /><em>cambiare luce?</em></h2><p>Scrivici per una prima idea, una domanda o per trovare l'appuntamento giusto.</p><div className="contact-actions"><a className="button button-terracotta" href="https://wa.me/393331562813" target="_blank" rel="noreferrer"><MessageCircle size={18} /> Scrivi su WhatsApp</a><a className="button button-outline" href="tel:+393311562813"><Phone size={17} /> Chiama</a></div></div>
        <div className="contact-info"><div className="info-block"><MapPin size={18} /><div><strong>Vieni a trovarci</strong><span>Via Giuseppe Mazzini 10<br />29015 Castel San Giovanni (PC)</span><a href="https://www.google.com/maps/search/?api=1&query=Via+Giuseppe+Mazzini+10+Castel+San+Giovanni+PC" target="_blank" rel="noreferrer">Apri in Maps ↗</a></div></div><div className="info-block"><Clock3 size={18} /><div><strong>Orari</strong><span>Gli orari aggiornati sono da confermare<br />direttamente con il salone.</span></div></div><div className="social-line"><a href="https://www.instagram.com/lucedeicapelli/" target="_blank" rel="noreferrer"><Instagram size={17} /> Instagram</a><span>·</span><a href="https://www.facebook.com/lucedeicapelli/" target="_blank" rel="noreferrer">Facebook</a></div></div>
      </section>

      <footer className="site-footer"><div className="footer-brand"><img src={markImage} alt="" className="brand-mark" /><span>LUCE DEI CAPELLI</span></div><span>Una pagina demo per il progetto di presenza digitale.</span><span>© 2026</span></footer>
      <div className="mobile-actions"><a href="https://wa.me/393331562813" target="_blank" rel="noreferrer"><MessageCircle size={17} /> WhatsApp</a><a href="tel:+393311562813"><Phone size={17} /> Chiama</a></div>
    </main>
  );
}
