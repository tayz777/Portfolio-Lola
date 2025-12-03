import './IphoneMockup.css'

export default function IphoneMockup({ src, alt = "" }) {
  return (
    <div className="iphone-mockup">
      <div className="iphone-mockup__frame">
        <div className="iphone-mockup__notch"></div>
        <div className="iphone-mockup__screen">
          <img src={src} alt={alt} />
        </div>
      </div>
    </div>
  )
}

