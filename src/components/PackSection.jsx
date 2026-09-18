import './Services.css'
import IphoneMockup from './IphoneMockup'

export default function PackSection() {
  return (
    <section className="section pack-section">
      <div className="pack-section__container">
        <div className="pack-section__content">
          <span className="service-block__index"></span>
          <h3 className="pack-section__title">Pack Stratégie & Contenu</h3>
          <p className="pack-section__price">À partir de <strong>120 €</strong></p>
          
          <div className="pack-section__details">
            <p>
              <strong>Je définis avec vous une stratégie de contenu, je réalise le shooting photo/vidéo et vous accompagne pour ajuster le volume de publication et la durée selon vos besoins.</strong>
            </p>
          </div>
        </div>
        
        <div className="pack-section__image">
          <IphoneMockup src="/joseph.jpg" alt="Shooting photo" />
        </div>
      </div>
    </section>
  )
}

