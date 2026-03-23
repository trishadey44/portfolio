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

  useEffect(() => { setOpen(false) }, [location])

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

        <ul className={`${styles.links} ${open ? styles.open : ''}`}>
          {links.map(l => (
            <li key={l.label}>
              <Link to={l.to} className={styles.link}>{l.label}</Link>
            </li>
          ))}
          <li>
            <Link
              to="/resume"
              className={styles.resumeBtn}
            >
              Resume ↗
            </Link>
          </li>
        </ul>

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
