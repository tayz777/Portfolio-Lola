import './Hero.css'

export default function Hero() {
  return (
    <div className="section hero">
      <div className="hero__background">
        <img 
          src="/flower.jpg" 
          alt="" 
          className="hero__bg-image"
        />
      </div>
      
      <p className="hero__tagline">
        Communication & Créations visuelles
      </p>
      
      <div className="hero__center">
        <h1 className="hero__logo">
          Facello<span className="hero__logo-dot">.</span>
        </h1>
      </div>
      
      <a href="#contact" className="hero__cta">
        Travaillons<br/>ensemble
      </a>
    </div>
  )
}
