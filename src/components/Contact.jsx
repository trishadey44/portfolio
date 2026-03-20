import { useState } from 'react'
import styles from './Contact.module.css'

// ─────────────────────────────────────────────────────────────────
//  TO ENABLE REAL EMAIL SENDING:
//  1. Go to https://web3forms.com
//  2. Enter tdey13@gmail.com and click "Create Access Key"
//  3. Check your Gmail inbox for the key
//  4. Paste it below replacing YOUR_ACCESS_KEY_HERE
// ─────────────────────────────────────────────────────────────────
const WEB3FORMS_KEY = 'YOUR_ACCESS_KEY_HERE'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)

  const update = (field) => (e) => setForm(f => ({ ...f, [field]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Portfolio message from ${form.name}`,
          from_name: form.name,
          replyto: form.email,
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      })
      const data = await res.json()
      setStatus(data.success ? 'sent' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className={`${styles.section} section`} id="contact">
      <div className="container">
        <div className={styles.inner}>
          <div className={`${styles.left} reveal`}>
            <span className="label">Get In Touch</span>
            <h2 className={styles.title}>
              Let's make<br />something great.
            </h2>
            <p className={styles.sub}>
              Open to full-time roles, freelance projects, and interesting conversations.
              Send me a message and I'll get back to you within a day or two.
            </p>
            <div className={styles.links}>
              <a href="mailto:tdey13@gmail.com" data-hover>tdey13@gmail.com</a>
              <a href="https://www.linkedin.com/in/trishadey/" target="_blank" rel="noopener noreferrer" data-hover>LinkedIn ↗</a>
              <a href="https://github.com/yourname" target="_blank" rel="noopener noreferrer" data-hover>GitHub ↗</a>
            </div>
          </div>

          <div className={`${styles.right} reveal`} style={{ transitionDelay: '0.15s' }}>
            {status === 'sent' ? (
              <div className={styles.success}>
                <span className={styles.successEmoji}>✦</span>
                <h3>Message received!</h3>
                <p>Thanks for reaching out. I'll be in touch soon.</p>
              </div>
            ) : status === 'error' ? (
              <div className={styles.error}>
                <h3>Oops, something went wrong.</h3>
                <p>Please email me directly at <a href="mailto:tdey13@gmail.com">tdey13@gmail.com</a></p>
                <button className={styles.submit} onClick={() => setStatus(null)}>Try again</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.field}>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={update('name')}
                    placeholder=" "
                    className={styles.input}
                  />
                  <label htmlFor="name" className={styles.floatLabel}>Your name</label>
                </div>

                <div className={styles.field}>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={update('email')}
                    placeholder=" "
                    className={styles.input}
                  />
                  <label htmlFor="email" className={styles.floatLabel}>Email address</label>
                </div>

                <div className={styles.field}>
                  <textarea
                    id="message"
                    required
                    value={form.message}
                    onChange={update('message')}
                    placeholder=" "
                    className={`${styles.input} ${styles.textarea}`}
                    rows={5}
                  />
                  <label htmlFor="message" className={styles.floatLabel}>Your message</label>
                </div>

                <button
                  type="submit"
                  className={styles.submit}
                  disabled={status === 'sending'}
                  data-hover
                >
                  {status === 'sending' ? 'Sending…' : 'Send message →'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
