import { useState } from 'react'
import './ContactSection.css'

const ENDPOINT = 'https://formsubmit.co/ajax/lolafacello@gmail.com'
const INSTAGRAM_URL =
  'https://www.instagram.com/facello_?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw=='

export default function ContactSection() {
  const [status, setStatus] = useState('idle')

  async function handleSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    setStatus('sending')

    try {
      const response = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      })
      if (!response.ok) throw new Error('send failed')
      form.reset()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="contact-section">
      <div className="contact-section__container">
        <header className="contact-section__header">
          <span className="section-eyebrow">Un projet en tête ?</span>
          <h1 className="contact-section__title">Contact</h1>
          <p className="contact-section__intro">
            Parlez-moi de votre projet, je reviens vers vous très vite.
          </p>
        </header>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="hidden" name="_subject" value="Nouveau message depuis le portfolio" />
          <input type="hidden" name="_template" value="table" />
          <input type="text" name="_honey" className="contact-form__honey" tabIndex="-1" autoComplete="off" aria-hidden="true" />

          <label className="contact-form__field">
            <span>Nom</span>
            <input type="text" name="name" required autoComplete="name" />
          </label>
          <label className="contact-form__field">
            <span>Email</span>
            <input type="email" name="email" required autoComplete="email" />
          </label>
          <label className="contact-form__field">
            <span>Message</span>
            <textarea name="message" rows="6" required />
          </label>

          <button className="contact-form__submit" type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Envoi…' : 'Envoyer'}
          </button>

          <p className="contact-form__status" role="status" aria-live="polite">
            {status === 'success' && 'Merci ! Votre message a bien été envoyé.'}
            {status === 'error' && "Oups, l'envoi a échoué. Réessayez ou écrivez-moi sur Instagram."}
          </p>
        </form>

        <a
          className="contact-section__instagram"
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram de Lola Facello"
        >
          <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4.2" />
            <circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" />
          </svg>
          <span>@facello_</span>
        </a>
      </div>
    </section>
  )
}
