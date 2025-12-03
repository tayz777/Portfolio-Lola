import SectionCard from './components/SectionCard'
import Hero from './components/Hero'
import About from './components/About'
import ServicesHeader from './components/ServicesHeader'
import ServicesDetails from './components/ServicesDetails'
import PackSection from './components/PackSection'
import PortfolioHeader from './components/PortfolioHeader'
import PortfolioDetails from './components/PortfolioDetails'
import Contact from './components/Contact'
import './App.css'

// Liste des sections pour le mapping
// autoHeight: true pour les sections avec beaucoup de contenu
const sections = [
  { id: 'hero', Component: Hero },
  { id: 'about', Component: About },
  { id: 'services-header', Component: ServicesHeader },
  { id: 'services-details', Component: ServicesDetails, autoHeight: true },
  { id: 'pack', Component: PackSection },
  { id: 'portfolio-header', Component: PortfolioHeader },
  { id: 'portfolio-details', Component: PortfolioDetails, autoHeight: true },
  { id: 'contact', Component: Contact },
]

function App() {
  return (
    <div className="app">
      <main className="portfolio-container">
        {sections.map((section) => (
          <SectionCard key={section.id} autoHeight={section.autoHeight}>
            <section.Component />
          </SectionCard>
        ))}
      </main>
    </div>
  )
}

export default App
