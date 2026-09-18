import { useEffect } from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import ServicesDetails from './components/ServicesDetails'
import PackSection from './components/PackSection'
import PortfolioHeader from './components/PortfolioHeader'
import PortfolioDetails from './components/PortfolioDetails'
import ContactSection from './components/ContactSection'
import './App.css'

const pageTitles = {
  '/': 'Lola Facello | Communication & créations visuelles',
  '/tarifs': 'Tarifs | Lola Facello',
  '/projets': 'Projets | Lola Facello',
  '/contact': 'Contact | Lola Facello',
}

function HomePage() {
  return (
    <main>
      <Navbar showBrand={false} />
      <Hero />
    </main>
  )
}

function ServicesPage() {
  return (
    <>
      <Navbar tone="dark" />
      <main>
        <ServicesDetails />
        <PackSection />
      </main>
    </>
  )
}

function ProjectsPage() {
  return (
    <>
      <Navbar tone="dark" />
      <main>
        <PortfolioHeader />
        <PortfolioDetails />
      </main>
    </>
  )
}

function ContactPage() {
  return (
    <>
      <Navbar tone="dark" />
      <main>
        <ContactSection />
      </main>
    </>
  )
}

function App() {
  const path = window.location.pathname.replace(/\/$/, '') || '/'
  document.title = pageTitles[path] || pageTitles['/']

  useEffect(() => {
    if (!window.location.hash) return

    const target = document.getElementById(window.location.hash.slice(1))
    target?.scrollIntoView({ behavior: 'instant', block: 'start' })
  }, [path])

  if (path === '/tarifs') return <ServicesPage />
  if (path === '/projets') return <ProjectsPage />
  if (path === '/contact') return <ContactPage />
  return <HomePage />
}

export default App
