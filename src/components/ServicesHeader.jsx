import './Services.css'

export default function ServicesHeader() {
  return (
    <div className="section services-header">
      <div className="services-header__bg">
        <img src="/sofa.jpg" alt="" className="services-header__bg-image" />
        <div className="services-header__overlay"></div>
      </div>
      <div className="services-header__content">
        <h2 className="services-header__title">Services</h2>
      </div>
    </div>
  )
}

