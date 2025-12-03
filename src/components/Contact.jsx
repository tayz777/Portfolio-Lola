import './Contact.css'

export default function Contact() {
  return (
    <div id="contact" className="section contact">
      <div className="contact__container">
        <div className="contact__content">
          <h2 className="contact__title">
            Travaillons<br/>
            <span className="contact__title--pink">ensemble</span>
          </h2>
          
          <div className="contact__info">
            <div className="contact__info-block">
              <span className="contact__label">TÉLÉPHONE</span>
              <a href="tel:0625367731" className="contact__link">06 25 36 17 31</a>
            </div>
            
            <div className="contact__info-block">
              <span className="contact__label">E-MAIL</span>
              <a href="mailto:lolafacello@gmail.com" className="contact__link">lolafacello@gmail.com</a>
            </div>
          </div>
          
          <div className="contact__actions">
            <a href="mailto:lolafacello@gmail.com" className="contact__btn">
              CONTACTEZ-MOI
            </a>
            <div className="contact__socials">
              <a href="mailto:lolafacello@gmail.com" className="contact__social" aria-label="Email">
                <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/lola-facello-03718a29b/" target="_blank" rel="noopener noreferrer" className="contact__social" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="contact__image">
          <img src="/lola2.jpg" alt="Lola Facello" />
        </div>
      </div>
      
      <footer className="contact__footer">
        <p>© 2025 Lola Facello. Tous droits réservés.</p>
      </footer>
    </div>
  )
}
