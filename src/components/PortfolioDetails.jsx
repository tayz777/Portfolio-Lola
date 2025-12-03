import './Portfolio.css'
import IphoneMockup from './IphoneMockup'

export default function PortfolioDetails() {
  return (
    <div className="section portfolio-details">
      <div className="portfolio-details__container">
        
        {/* Projet 1 - Vigneron */}
        <div className="project-block">
          <h3 className="project-block__title">
            Recommandation de feed<br/>
            pour vigneron indépendant
          </h3>
          <div className="project-block__content">
            <div className="project-block__images">
              <img src="/img.jpg" alt="Feed vigneron" className="project-img" />
            </div>
            <p className="project-block__description">
              Création de stratégie de contenu et organisation visuelle du feed.
            </p>
          </div>
        </div>

        {/* Projet 2 - Joseph Charte graphique */}
        <div className="project-block">
          <h3 className="project-block__title">
            Réalisation d'une charte graphique estivale<br/>
            et de ses cartes pour Joseph, Cap 3000
          </h3>
          <div className="project-block__content">
            <div className="project-block__images project-block__images--row">
              <img src="/pink-card.jpg" alt="Carte rose Joseph" className="project-img" />
              <img src="/blue-cardjpg.jpg" alt="Carte bleue Joseph" className="project-img" />
            </div>
            <p className="project-block__description">
              Création d'une identité visuelle estivale et conception des cartes 
              pour la saison été.
            </p>
          </div>
        </div>

        {/* Projet 3 - Menus Joseph */}
        <div className="project-block">
          <h3 className="project-block__title">
            Réalisation des menus plats et boissons du<br/>
            restaurant Joseph, Cap 3000
          </h3>
          <div className="project-block__content">
            <div className="project-block__images project-block__images--row">
              <img src="/card-joseph.jpg" alt="Menu Joseph" className="project-img project-img--large" />
            </div>
            <p className="project-block__description">
              Création graphique des menus pour une présentation claire et 
              attractive des plats et boissons.
            </p>
          </div>
        </div>

        {/* Projet 4 - Posts réseaux */}
        <div className="project-block">
          <h3 className="project-block__title">
            Réalisation de posts (photos et vidéos reels)<br/>
            pour les réseaux du restaurant Joseph, Cap 3000
          </h3>
          <div className="project-block__content">
            <div className="project-block__images project-block__images--grid">
              <img src="/glacon.jpg" alt="Post 1" className="project-img project-img--small" />
              <img src="/sofa.jpg" alt="Post 2" className="project-img project-img--small" />
              <img src="/joseph.jpg" alt="Post 3" className="project-img project-img--small" />
            </div>
            <div className="project-block__reel">
              <div className="project-block__phone">
                <IphoneMockup src="/joseph.jpg" alt="Reel Joseph" />
              </div>
              <a href="#" target="_blank" rel="noopener noreferrer" className="project-block__reel-link">
                Cliquez ici pour accéder au reel
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
