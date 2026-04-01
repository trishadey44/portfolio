import { Link } from 'react-router-dom'
import styles from './Playground.module.css'
import { ComponentLibrarySplash, WobbleSplash } from './CardSplash'

export const items = [
  {
    title: 'Component Library',
    description: 'An interactive UI component system - buttons, inputs, toggles, cards, notifications, and more. All states are live.',
    tag: 'UI',
    color: '#2b2b2b',
    textColor: '#ffffff',
    size: 'tall',
    image: null,
    link: null,
    internalLink: '/components',
    splash: 'component-lib',
  },
  {
    title: 'Wobble',
    description: 'A humanist sans-serif with an intentional shake. Three weights - Regular, Bold, Italic. Drawn in Calligrapher, refined in Figma, built in FontForge.',
    tag: 'Type',
    color: '#1a1a2e',
    textColor: '#f9c414',
    size: 'wide',
    image: null,
    link: null,
    internalLink: '/wobble',
    splash: 'wobble',
  },
]

export function PlaygroundCard({ item }) {
  const inner = (
    <div
      className={`${styles.card} ${styles[item.size]}`}
      style={{ '--card-bg': item.color, '--card-text': item.textColor }}
    >
      {item.splash === 'component-lib' ? (
        <div className={styles.cardSplash}><ComponentLibrarySplash /></div>
      ) : item.splash === 'wobble' ? (
        <div className={styles.cardSplash}><WobbleSplash /></div>
      ) : item.image ? (
        <img src={item.image} alt={item.title} className={styles.cardImage} />
      ) : (
        <div className={styles.cardBlank}>
          <span className={styles.cardBlankLabel}>Add image</span>
        </div>
      )}
      <div className={styles.cardInfo}>
        <span className={styles.cardTag}>{item.tag}</span>
        <h3 className={styles.cardTitle}>{item.title}</h3>
        <p className={styles.cardDesc}>{item.description}</p>
        {(item.link || item.internalLink) && <span className={styles.cardLink}>View ↗</span>}
      </div>
    </div>
  )

  if (item.internalLink) return (
    <Link to={item.internalLink} className={styles.cardAnchor} data-hover>{inner}</Link>
  )
  return item.link ? (
    <a href={item.link} target="_blank" rel="noopener noreferrer" className={styles.cardAnchor} data-hover>
      {inner}
    </a>
  ) : (
    <div className={styles.cardAnchor}>{inner}</div>
  )
}

export default function Playground() {
  return (
    <section className={`${styles.section} section`} id="playground">
      <div className="container">
        <div className={`${styles.header} reveal`}>
          <div className={styles.headerTop}>
            <div>
              <span className="label">Playground</span>
              <h2 className={styles.title}>Smaller work and<br />side experiments</h2>
            </div>
          </div>
          <p className={styles.sub}>Not everything needs a case study. These are explorations, quick experiments, and work that does not fit anywhere else.</p>
        </div>

        <div className={`${styles.mosaic} ${styles.mosaicPreview}`}>
          {items.map((item, i) => (
            <div
              key={item.title}
              className={`${styles.mosaicItem} ${styles[`preview${i}`]} reveal`}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <PlaygroundCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
