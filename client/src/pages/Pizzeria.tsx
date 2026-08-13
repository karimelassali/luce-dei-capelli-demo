/* Pizzeria preview: bold Italian food-counter energy, menu-first structure, clear takeaway CTA, and public-detail confirmation notes. */
import { ArrowRight, Clock3, MapPin, Phone, QrCode } from "lucide-react";

const asset = (name: string) => `${import.meta.env.BASE_URL}assets/${name}`;
const signage = asset("pizzeria-signage.jpg");
const display = asset("pizza-display.jpg");
const tray = asset("pizza-tray.jpg");

const menu = [
  ["Focaccia classica", "Impasto sottile, olio buono, crosta dorata"],
  ["Pizza al taglio", "Scegli la tua fetta dal banco del giorno"],
  ["Specialità liguri", "Sapori regionali, preparati con semplicità"],
];

export default function Pizzeria() {
  return <main className="pizzeria-shell">
    <div className="pizza-demo-bar">DEMO CONCEPT · menu, prezzi e orari da confermare</div>
    <header className="pizza-header"><a className="pizza-logo" href="/pizzeria-castello"><span className="pizza-badge">PC</span><span>PIZZERIA<br /><b>& FOCACCERIA</b><small>CASTELLO</small></span></a><nav><a href="#menu">Menu</a><a href="#storia">La focaccia</a><a href="#dove">Dove siamo</a></nav><a className="pizza-order" href="tel:+390523881445"><Phone size={15} /> Ordina</a></header>

    <section className="pizza-hero"><div className="pizza-hero-copy"><p className="pizza-kicker">Specialità liguri · dal banco alla tavola</p><h1>Tagliata,<br /><em>calda, tua.</em></h1><p>Focaccia, pizza al taglio e sapori semplici da portare via o gustare con calma.</p><div className="pizza-hero-actions"><a className="pizza-button pizza-button-red" href="#menu">Guarda il menu <ArrowRight size={17} /></a><span className="pizza-note">Corso Giacomo Matteotti 77<br />Castel San Giovanni</span></div></div><div className="pizza-hero-image"><img src={signage} alt="Collage fotografico con focaccia e pizza al taglio" /><span className="pizza-stamp">Dal<br /><b>2015</b></span></div></section>

    <section className="pizza-intro" id="storia"><div className="pizza-intro-label">01 / IL BANCO</div><h2>Il profumo<br /><em>dice già tutto.</em></h2><p>Una pausa veloce, una cena improvvisata o quella fetta che avevi in mente da stamattina. Qui il menu vive al banco, cambia con la giornata e si ordina senza complicazioni.</p></section>

    <section className="pizza-menu" id="menu"><div className="pizza-section-head"><div><p className="pizza-kicker">Una prima idea di menu</p><h2>Prendi<br /><em>una fetta.</em></h2></div><div className="qr-box"><QrCode size={38} /><span>QR MENU<br /><small>da posizionare qui</small></span></div></div><div className="pizza-menu-list">{menu.map(([name, description], index) => <article className="pizza-menu-row" key={name}><span>0{index + 1}</span><div><h3>{name}</h3><p>{description}</p></div><ArrowRight size={19} /></article>)}</div><p className="pizza-confirmation">Concept demo: nomi, ingredienti, allergeni e prezzi saranno inseriti dopo la conferma del menu reale.</p></section>

    <section className="pizza-gallery"><div className="pizza-gallery-main"><img src={display} alt="Banco con pizze e focacce al taglio" /><span>Il banco / 02</span></div><div className="pizza-gallery-side"><img src={tray} alt="Selezione di pizze al taglio" /><span>Scelte del giorno / 03</span></div></section>

    <section className="pizza-contact" id="dove"><div><p className="pizza-kicker">Passa a trovarci</p><h2>La tua fetta<br /><em>è qui.</em></h2><a className="pizza-button pizza-button-cream" href="tel:+390523881445"><Phone size={16} /> Chiama per ordinare</a></div><div className="pizza-details"><div><MapPin size={18} /><p><b>Corso Giacomo Matteotti 77</b><br />29015 Castel San Giovanni (PC)<br /><a href="https://www.google.com/maps/search/?api=1&query=Corso+Giacomo+Matteotti+77+Castel+San+Giovanni+PC" target="_blank" rel="noreferrer">Apri in Maps ↗</a></p></div><div><Clock3 size={18} /><p><b>Orari e ordini</b><br />Da confermare con il locale<br />prima della pubblicazione.</p></div></div></section>

    <footer className="pizza-footer"><span>PIZZERIA & FOCACCERIA CASTELLO</span><span>Preview concept · 2026</span></footer><div className="pizza-mobile-cta"><a href="#menu">Menu</a><a href="tel:+390523881445">Chiama e ordina</a></div>
  </main>;
}
