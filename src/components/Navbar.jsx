import './Navbar.css'

const links = [
  { href: '/', label: 'Accueil' },
  { href: '/tarifs', label: 'Tarifs' },
  { href: '/projets', label: 'Projets' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar({ showBrand = true, tone = 'light' }) {
  const path = window.location.pathname.replace(/\/$/, '') || '/'

  return (
    <header className={`navbar navbar--${tone} ${showBrand ? '' : 'navbar--brandless'}`}>
      {showBrand && (
        <a className="navbar__brand" aria-label="">
        </a>
      )}
      <nav className="navbar__links" aria-label="Navigation principale">
        {links.map((link) => (
          <a
            key={link.href}
            className="navbar__link"
            href={link.href}
            aria-current={path === link.href ? 'page' : undefined}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  )
}
