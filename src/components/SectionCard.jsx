import './SectionCard.css'

export default function SectionCard({ children, autoHeight = false }) {
  return (
    <div className={`section-card-container ${autoHeight ? 'section-card-container--auto' : ''}`}>
      <div className="section-card">
        {children}
      </div>
    </div>
  )
}

