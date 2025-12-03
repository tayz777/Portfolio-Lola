import './Services.css'
import IphoneMockup from './IphoneMockup'

export default function Services() {
  return (
    <>
      {/* Section titre Services avec image fond */}
      <section className="section section--sticky services-header">
        <div className="services-header__bg">
          <img src="/sofa.jpg" alt="" className="services-header__bg-image" />
          <div className="services-header__overlay"></div>
        </div>
        <div className="services-header__content">
          <h2 className="services-header__title">Services</h2>
        </div>
      </section>

      {/* Section détails des services */}
      <section className="section section--sticky services-details">
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
              <h3 className="service-block__title service-block__title--underline">Créations graphiques</h3>
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
      </section>

      {/* Pack Stratégie & Contenu */}
      <section className="section section--sticky pack-section">
        <div className="pack-section__container">
          <div className="pack-section__content">
            <h3 className="pack-section__title">Pack Stratégie & Contenu</h3>
            <p className="pack-section__price">Prix de départ <strong>120 €</strong></p>
            
            <div className="pack-section__details">
              <p><strong>Ce pack comprend :</strong></p>
              
              <p>
                <strong className="pack-highlight">Consulting réseaux :</strong> on définit ensemble votre stratégie et vos 
                idées de contenu
              </p>
              
              <p>
                <strong className="pack-highlight">Shooting photo/vidéo :</strong> on crée des visuels adaptés à votre univers 
                et à vos besoins
              </p>
              
              <p>
                <strong className="pack-highlight">Accompagnement personnalisé :</strong> nous évaluons ensemble le 
                volume de contenu et la durée de shooting pour que le prix final 
                corresponde exactement à ce dont vous avez besoin
              </p>
              
              <p className="pack-section__note">
                <em>(le prix peut évoluer selon le temps de shooting)</em>
              </p>
            </div>
          </div>
          
          <div className="pack-section__image">
            <IphoneMockup src="/joseph.jpg" alt="Shooting photo" />
          </div>
        </div>
      </section>
    </>
  )
}
