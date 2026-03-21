import { useEffect, useRef, useState } from 'react'
import styles from './Hero.module.css'

const ROLES = ['UX Designer', 'UI Designer', 'Software Engineer', 'Creative Thinker']
const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

function useScramble(target) {
  const [display, setDisplay] = useState(target)

  useEffect(() => {
    let iteration = 0
    const len = target.length
    const interval = setInterval(() => {
      setDisplay(
        target
          .split('')
          .map((char, i) => {
            if (char === ' ') return ' '
            if (i < iteration) return target[i]
            return CHARS[Math.floor(Math.random() * CHARS.length)]
          })
          .join('')
      )
      iteration += 0.7
      if (iteration >= len) clearInterval(interval)
    }, 30)
    return () => clearInterval(interval)
  }, [target])

  return display
}

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const scrambled = useScramble(ROLES[roleIndex])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const id = setInterval(() => {
      setRoleIndex(i => (i + 1) % ROLES.length)
    }, 2000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className={styles.hero}>
      <div className={`${styles.inner} container`}>
        <div className={`${styles.tag} label ${mounted ? styles.visible : ''}`}>
          Available for work · Based in the Bay Area
        </div>

        <h1 className={`${styles.headline} ${mounted ? styles.visible : ''}`}>
          Hi, I'm <em>Trisha</em>—<br />
          <span className={styles.roleWrap}>
            <span className={styles.role}>{scrambled}</span>
          </span>
        </h1>

        <p className={`${styles.sub} ${mounted ? styles.visible : ''}`}>
          I design and build digital products that feel as good as they look.
          Bridging the gap between beautiful interfaces and clean code.
        </p>

        <div className={`${styles.ctas} ${mounted ? styles.visible : ''}`}>
          <a href="#projects" className={styles.ctaPrimary} data-hover>
            View my work
            <span className={styles.arrow}>↓</span>
          </a>
          <a href="#contact" className={styles.ctaSecondary} data-hover>
            Let's talk
          </a>
        </div>
      </div>

      <div className={styles.bgDeco} aria-hidden>
        <div className={styles.blob1} />
        <div className={styles.blob2} />
        <div className={styles.blob3} />
        <div className={styles.blob4} />
      </div>
    </section>
  )
}
