import './Services.css'

export default function ServicesHeader() {
  return (
    <section className="section services-header">
      <div className="services-header__decoration" aria-hidden="true">S</div>
      <div className="services-header__content">
        <p className="page-kicker">Communication · Graphisme · Contenu</p>
        <h1 className="services-header__title">Tarfis</h1>
        <a className="page-scroll-link" href="#services-list">Découvrir les prestations ↓</a>
      </div>
    </section>
  )
}
