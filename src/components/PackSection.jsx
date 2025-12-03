import './Services.css'
import IphoneMockup from './IphoneMockup'

export default function PackSection() {
  return (
    <div className="section pack-section">
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
    </div>
  )
}

