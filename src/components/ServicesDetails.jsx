import './Services.css'
import IphoneMockup from './IphoneMockup'

export default function ServicesDetails() {
  return (
    <div className="section services-details">
      <div className="services-details__container">

        <h3 className="services-details__main-title">Tarifs</h3>

        {/* Community Management */}
        <div className="service-block service-block--cm">
          <div className="service-block__content">
            <h3 className="service-block__title">Community Management</h3>
            <div className="price-table">
              <div className="price-row">
                <span className="price-row__name">Story (Création et mise en forme)</span>
                <span className="price-row__dots"></span>
                <span className="price-row__amount">15€</span>
              </div>
              <div className="price-row">
                <span className="price-row__name">Post simple (Création + Caption) </span>
                <span className="price-row__dots"></span>
                <span className="price-row__amount">25€</span>
              </div>
              <div className="price-row price-row--multiline">
                <span className="price-row__name">Reel ou carrousel (Montage vidéo ou création + caption) </span>
                <span className="price-row__dots"></span>
                <span className="price-row__amount">45&nbsp;€</span>
              </div>
              <div className="price-row">
                <span className="price-row__name">Shooting photo/vidéo </span>
                <span className="price-row__dots"></span>
                <span className="price-row__amount">à partir de 50€</span>
              </div>
              <p className="service-block__note">
                  <em></em>
                </p>
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
                <span className="price-row__name">Flyers (Design complet, prêt à imprimé)</span>
                <span className="price-row__dots"></span>
                <span className="price-row__amount">60 €</span>
              </div>
              <div className="price-row">
                <span className="price-row__name">Grille tarifaire (Design complet, prêt à imprimé)</span>
                <span className="price-row__dots"></span>
                <span className="price-row__amount">50 €</span>
              </div>
              <div className="price-row">
                <span className="price-row__name">Charte graphique (Design complet, prêt à imprimé)</span>
                <span className="price-row__dots"></span>
                <span className="price-row__amount">70 €</span>
              </div>
              <div className="price-row">
                <span className="price-row__name">Carte de visite (Design complet, prêt à imprimé)</span>
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

