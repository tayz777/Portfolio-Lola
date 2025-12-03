import './Portfolio.css'

export default function PortfolioHeader() {
  return (
    <div className="section portfolio-header">
      <div className="portfolio-header__bg">
        <img src="/plage.jpg" alt="" className="portfolio-header__bg-image" />
        <div className="portfolio-header__overlay"></div>
      </div>
      <div className="portfolio-header__content">
        <h2 className="portfolio-header__title">Projets récents</h2>
      </div>
    </div>
  )
}

