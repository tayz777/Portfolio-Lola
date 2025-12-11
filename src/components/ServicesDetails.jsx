import './Services.css'
import IphoneMockup from './IphoneMockup'

export default function ServicesDetails() {
  return (
    <div className="section services-details">
      <div className="services-details__container">
        
        {/* Community Management */}
        <div className="service-block service-block--cm">
          <div className="service-block__content">
            <h3 className="service-block__title">Community Management</h3>
            <ul className="service-block__list">
              <li>Story — <span>10 €</span></li>
              <li>Post — <span>20 €</span></li>
              <li>Reel — <span>40 €</span></li>
            </ul>
          </div>
          <div className="service-block__image">
            <IphoneMockup src="/img.jpg" alt="Feed Instagram" />
          </div>
        </div>

        {/* Consulting & Shooting */}
        <div className="service-row">
          <div className="service-block service-block--small">
            <h3 className="service-block__title">Consulting Réseaux<br/>& Stratégie</h3>
            <ul className="service-block__list">
              <li>Consulting réseaux sociaux — <span>80 €</span></li>
              <li>Suivi mensuel — <span>+40€ / mois</span></li>
            </ul>
          </div>
          
          <div className="service-block service-block--small">
            <h3 className="service-block__title">Shooting & Création<br/>de contenu</h3>
            <ul className="service-block__list">
              <li>Starter — <span>à partir de 30 €</span></li>
            </ul>
            <p className="service-block__note">
              <em>(Tarif ajusté selon le type et la quantité de contenu à réaliser)</em>
            </p>
          </div>
          
        </div>

        {/* Créations graphiques */}
        <div className="service-block service-block--graphic">
          <div className="service-block__content2">
            <h3 className="service-block__title service-block__title--underline">Grille tarifaire</h3>
            <ul className="service-block__list">
              <li>Flyers — <span>55 €</span></li>
              <li>Présentation de services — <span>60 €</span></li>
              <li>Menu — <span>80 €</span></li>
              <li>Charte graphique — <span>90 €</span></li>
              <li>Carte de visite — <span>50 €</span></li>
            </ul>
            <p className="service-block__note">
              <em>(Pour toutes les créations graphiques, vous disposez d'une modification gratuite après le résultat final.)</em>
            </p>
          </div>
          <div className="service-block__image service-block__image--cards">
            <div className="cards-stack">
              <img src="/card-for-clients.png" alt="Carte Facello" />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

