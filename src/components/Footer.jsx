import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={`${styles.inner} container`}>
        <div className={styles.left}>
          <span className={styles.logo}>Trisha</span>
          <p className={styles.copy}>© 2026 Trisha Dey</p>
        </div>
        <div className={styles.right}>
          {[
            { label: 'GitHub', href: 'https://github.com/yourname' },
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/trishadey/' },
            { label: 'Dribbble', href: 'https://dribbble.com/yourname' },
            { label: 'Email', href: 'mailto:tdey13@gmail.com' },
          ].map(l => (
            <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className={styles.link} data-hover>
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
