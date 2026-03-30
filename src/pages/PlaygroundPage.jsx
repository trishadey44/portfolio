import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { items, PlaygroundCard } from '../components/Playground'
import Footer from '../components/Footer'
import styles from '../components/Playground.module.css'
import pageStyles from './PlaygroundPage.module.css'

export default function PlaygroundPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.08 }
    )
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <main className={pageStyles.page}>
      <div className="container">
        <div className={`${pageStyles.header} reveal`}>
          <Link to="/" className={pageStyles.back}>← Back home</Link>
          <h1 className={pageStyles.title}>Playground</h1>
          <p className={pageStyles.sub}>Explorations, side projects, and work that does not fit a case study format. Updated as things get made.</p>
        </div>

        <div className={styles.mosaic}>
          {items.map((item, i) => (
            <div
              key={item.title}
              className={`${styles.mosaicItem} ${styles[`item${i}`]} reveal`}
              style={{ transitionDelay: `${i * 0.07}s` }}
            >
              <PlaygroundCard item={item} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  )
}
