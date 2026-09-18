import './Portfolio.css'

export default function PortfolioHeader() {
  return (
    <header className="portfolio-header">
      <div className="portfolio-header__content">
        <h1 className="portfolio-header__title">Projets récents</h1>
        <div className="portfolio-header__rule" aria-hidden="true" />
      </div>
    </header>
  )
}

