import './Services.css'
import IphoneMockup from './IphoneMockup'

export default function ServicesDetails() {
  return (
    <div className="section services-details">
      <div className="services-details__container">

        <h2 className="services-details__main-title">Mes services</h2>

        {/* Community Management */}
        <div className="service-block service-block--cm">
          <div className="service-block__content">
            <h3 className="service-block__title">Community Management</h3>
            <div className="price-table">
              <div className="price-row">
                <span className="price-row__name">Story</span>
                <span className="price-row__dots"></span>
                <span className="price-row__amount">10€</span>
              </div>
              <div className="price-row">
                <span className="price-row__name">Post</span>
                <span className="price-row__dots"></span>
                <span className="price-row__amount">20€</span>
              </div>
              <div className="price-row">
                <span className="price-row__name">Reel</span>
                <span className="price-row__dots"></span>
                <span className="price-row__amount">40€</span>
              </div>
            </div>
            <p className="service-block__note">
              <em>Nous créons une stratégie adaptée à vos besoins, avec le nombre de publications de votre choix, hebdomadaire ou mensuel.</em>
            </p>
          </div>
          <div className="service-block__image">
            <IphoneMockup src="/img.jpg" alt="Feed Instagram" />
          </div>
        </div>

        {/* Créations graphiques */}
        <div className="service-block service-block--graphic">
          <div className="service-block__content service-block__content--graphic">
            <h3 className="service-block__title">Créations graphiques</h3>
            <div className="price-table">
              <div className="price-row">
                <span className="price-row__name">Flyers</span>
                <span className="price-row__dots"></span>
                <span className="price-row__amount">55 €</span>
              </div>
              <div className="price-row">
                <span className="price-row__name">Grille tarifaire</span>
                <span className="price-row__dots"></span>
                <span className="price-row__amount">60 €</span>
              </div>
              <div className="price-row">
                <span className="price-row__name">Charte graphique</span>
                <span className="price-row__dots"></span>
                <span className="price-row__amount">70 €</span>
              </div>
              <div className="price-row">
                <span className="price-row__name">Carte de visite</span>
                <span className="price-row__dots"></span>
                <span className="price-row__amount">50 €</span>
              </div>
            </div>
            <p className="service-block__note">
              <em>(Pour toutes les créations graphiques, vous disposez d'une modification gratuite après le résultat final.)</em>
            </p>
          </div>
          <div className="service-block__image service-block__image--cards">
          </div>
        </div>

      </div>
    </div>
  )
}

