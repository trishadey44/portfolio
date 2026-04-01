import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './Nav.module.css'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on route change
  useEffect(() => { setOpen(false) }, [location])

  // Lock body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.width = '100%'
    } else {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
    }
    return () => {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
    }
  }, [open])

  const links = [
    { label: 'Work',       to: '/#projects' },
    { label: 'Playground', to: '/playground' },
    { label: 'About',      to: '/#about' },
    { label: 'Skills',     to: '/#skills' },
    { label: 'Contact',    to: '/#contact' },
  ]

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <Link to="/" className={styles.logo}>
          <img src="/avatar.svg" alt="Trisha" className={styles.logoAvatar} />
        </Link>

        {/* Mobile fullscreen menu */}
        <ul className={`${styles.links} ${open ? styles.open : ''}`}>
          {/* Close button inside menu */}
          <button
            className={styles.closeBtn}
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>

          {links.map(l => (
            <li key={l.label}>
              <Link to={l.to} className={styles.link} onClick={() => setOpen(false)}>{l.label}</Link>
            </li>
          ))}
          <li>
            <Link to="/resume" className={styles.resumeBtn} onClick={() => setOpen(false)}>
              Resume ↗
            </Link>
          </li>
        </ul>

        {/* Hamburger — only visible on mobile */}
        <button
          className={`${styles.burger} ${open ? styles.burgerOpen : ''}`}
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}
