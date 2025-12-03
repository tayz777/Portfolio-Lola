import './About.css'

export default function About() {
  return (
    <div className="section about">
      <div className="about__container">
        <div className="about__content">
          <h2 className="about__title">
            Bonjour, je suis Lola
          </h2>
          
          <div className="about__text">
            <p>
              <strong>Passionnée par la communication et la création visuelle,</strong> je vous 
              accompagne pour donner vie à vos idées et <strong>créer des solutions</strong> qui 
              vous ressemblent.
            </p>
            
            <p>
              À l'écoute et créative, je <strong>construis chaque projet avec soin et 
              attention,</strong> en m'adaptant à vos besoins. Prenons le temps 
              d'échanger pour définir ensemble les solutions qui vous conviennent 
              le mieux.
            </p>
            
            <p>
              <strong>Explorez mes services</strong> et découvrez comment nous pouvons 
              <strong> concrétiser vos projets</strong> avec impact et harmonie.
            </p>
          </div>
        </div>
        
        <div className="about__image">
          <img 
            src="/lola.png" 
            alt="Lola Facello" 
          />
        </div>
      </div>
    </div>
  )
}

