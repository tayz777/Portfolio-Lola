import './Portfolio.css'

const perfumePhotos = [
  {
    src: '/img-parfum/IMG_4404.jpeg',
    alt: 'Flacon de parfum posé sur un fond bleu profond',
    className: 'perfume-shot--opening',
  },
  {
    src: '/img-parfum/IMG_1827.jpeg',
    alt: 'Détail d’un flacon de parfum sur un fond rose poudré',
    className: 'perfume-shot--pink',
  },
  {
    src: '/img-parfum/IMG_1875.jpeg',
    alt: 'Flacon de parfum tenu à la main devant un ciel bleu',
    className: 'perfume-shot--sky',
  },
  {
    src: '/img-parfum/IMG_5595.jpeg',
    alt: 'Composition de parfum et viennoiseries sur une table',
    className: 'perfume-shot--table',
  },
  {
    src: '/img-parfum/IMG_4335.jpeg',
    alt: 'Flacon de parfum photographié sur un tissu rayé bleu',
    className: 'perfume-shot--fabric',
  },
  {
    src: '/img-parfum/IMG_5840.jpeg',
    alt: 'Flacon de parfum tenu face à la mer au coucher du soleil',
    className: 'perfume-shot--coast',
  },
  {
    src: '/img-parfum/IMG_5848.jpeg',
    alt: 'Portrait au bord de la mer avec un flacon de parfum',
    className: 'perfume-shot--portrait',
  },
  {
    src: '/img-parfum/IMG_5636.jpeg',
    alt: 'Table de petit-déjeuner avec une sélection de parfums',
    className: 'perfume-shot--closing',
  },
]

function ProjectImage({ src, alt, className = '' }) {
  return (
    <img
      src={src}
      alt={alt}
      className={`project-img ${className}`}
      loading="lazy"
      decoding="async"
    />
  )
}

export default function PortfolioDetails() {
  return (
    <section id="projects-list" className="section portfolio-details">
      <div className="portfolio-details__container">
        <article className="project-block project-block--social">
          <p className="project-block__number" aria-hidden="true"></p>
          <div className="project-block__heading">
            <p className="project-block__type">Photographie · Reels</p>
            <h3 className="project-block__title">
              Contenus réseaux Joseph, Cap 3000
            </h3>
          </div>
          <div className="project-block__visual project-block__visual--social">
            <figure><ProjectImage src="/glacon.jpg" alt="Création photo pour Joseph" /></figure>
            <figure><ProjectImage src="/thumbnail.png" alt="Couverture de contenu vidéo pour Joseph" /></figure>
            <figure><ProjectImage src="/joseph.jpg" alt="Création social media pour Joseph" /></figure>
          </div>
          <div className="project-block__description project-block__description--link">
            <p>Création de photos et de vidéos courtes pensées pour les réseaux sociaux.</p>
            <a
              href="https://www.instagram.com/p/DIB2H0hIxqo/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-block__reel-link"
            >
              Voir le reel ↗
            </a>
          </div>
        </article>

        <section className="perfume-project" aria-labelledby="perfume-project-title">
          <div className="perfume-project__opening">
            <header className="perfume-project__intro">
              <p className="perfume-project__index"></p>
              <p className="perfume-project__eyebrow">Direction artistique · Produit</p>
              <h2 id="perfume-project-title" className="perfume-project__title">
                Série parfum
              </h2>
              <p className="perfume-project__copy">
                Une série lumineuse pensée comme une campagne éditoriale : packshots,
                détails, art de vivre et mises en situation.
              </p>
            </header>

            <figure className={`perfume-shot ${perfumePhotos[0].className}`}>
              <img src={perfumePhotos[0].src} alt={perfumePhotos[0].alt} loading="lazy" decoding="async" />
              <figcaption>Couleur, matière et lumière.</figcaption>
            </figure>
          </div>

          <div className="perfume-gallery">
            {perfumePhotos.slice(1).map((photo) => (
              <figure className={`perfume-shot ${photo.className}`} key={photo.src}>
                <img src={photo.src} alt={photo.alt} loading="lazy" decoding="async" />
              </figure>
            ))}
          </div>
        </section>
      </div>
    </section>
  )
}
