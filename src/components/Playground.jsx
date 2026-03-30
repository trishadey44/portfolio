import { Link } from 'react-router-dom'
import styles from './Playground.module.css'
import { ComponentLibrarySplash, VeloursSplash, WobbleSplash } from './CardSplash'
import CoffeeStepsAnimation from './CoffeeStepsAnimation'

// ─────────────────────────────────────────────────────────────────────────
//  Edit this array to add your real work.
//  The first 3 items show on the homepage. All items show on /playground.
//
//  Each item:
//    title       - name of the piece
//    description - one sentence about it
//    tag         - Brand | Illustration | Motion | Photography | UI
//    color       - background color
//    textColor   - white for dark bg, dark for light bg
//    size        - 'square' | 'wide' | 'tall'
//    image       - optional: '/your-image.png' (drop file in /public)
//    link        - optional: external URL (Figma, live demo, etc.)
// ─────────────────────────────────────────────────────────────────────────
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
  {
    title: 'Wordmark exploration',
    description: 'A set of logotype treatments for a personal brand project. Tried 12 directions, kept 3.',
    tag: 'Brand',
    color: '#27567b',
    textColor: '#ffffff',
    size: 'wide',
    image: null,
    link: null,
  },
  {
    title: 'Icon set',
    description: 'A 24px system for a productivity app. Built in Figma with optical sizing adjustments.',
    tag: 'Illustration',
    color: '#F9EFE3',
    textColor: '#5C3D1E',
    size: 'square',
    image: null,
    link: null,
  },
  {
    title: 'Micro-interaction study',
    description: 'Button press states and loading patterns. Focused on timing and easing curves.',
    tag: 'Motion',
    color: '#FF6B35',
    textColor: '#ffffff',
    size: 'square',
    image: null,
    link: null,
  },
  {
    title: 'Color palette exploration',
    description: 'Building a muted, warm palette system from scratch. No grays - all warm neutrals.',
    tag: 'UI',
    color: '#EFE3CA',
    textColor: '#3D2009',
    size: 'wide',
    image: null,
    link: null,
  },
  {
    title: 'Rock climbing photography',
    description: 'Shot on a trip to Yosemite. Experimenting with composition and natural light.',
    tag: 'Photography',
    color: '#6B8F6E',
    textColor: '#ffffff',
    size: 'wide',
    image: '/photo.jpg',
    link: null,
  },
  {
    title: 'Dashboard UI kit',
    description: 'A reusable Figma component library for data-heavy interfaces. 40+ components.',
    tag: 'UI',
    color: '#7B6FA0',
    textColor: '#ffffff',
    size: 'wide',
    image: null,
    link: null,
  },
  {
    title: 'Coffee steps',
    description: 'A progress tracker micro-interaction built for a coffee-ordering flow. Each step completes into a checkmark as you go.',
    tag: 'Motion',
    color: '#C8874A',
    textColor: '#ffffff',
    size: 'wide',
    image: null,
    animated: 'coffee',
    link: null,
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
      ) : item.splash === 'velours' ? (
        <div className={styles.cardSplash}><VeloursSplash /></div>
      ) : item.splash === 'wobble' ? (
        <div className={styles.cardSplash}><WobbleSplash /></div>
      ) : item.animated === 'coffee' ? (
        <div className={styles.cardAnimated}>
          <CoffeeStepsAnimation />
        </div>
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

// ── Homepage teaser - first 3 items only ─────────────────────
export default function Playground() {
  const preview = items.slice(0, 3)

  return (
    <section className={`${styles.section} section`} id="playground">
      <div className="container">
        <div className={`${styles.header} reveal`}>
          <div className={styles.headerTop}>
            <div>
              <span className="label">Playground</span>
              <h2 className={styles.title}>Smaller work and<br />side experiments</h2>
            </div>
            <Link to="/playground" className={styles.seeAllBtn} data-hover>
              See all work →
            </Link>
          </div>
          <p className={styles.sub}>Not everything needs a case study. These are explorations, quick experiments, and work that does not fit anywhere else.</p>
        </div>

        <div className={`${styles.mosaic} ${styles.mosaicPreview}`}>
          {preview.map((item, i) => (
            <div
              key={item.title}
              className={`${styles.mosaicItem} ${styles[`preview${i}`]} reveal`}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <PlaygroundCard item={item} />
            </div>
          ))}
        </div>

        <div className={`${styles.viewAllRow} reveal`}>
          <Link to="/playground" className={styles.viewAllLink} data-hover>
            View all {items.length} projects →
          </Link>
        </div>
      </div>
    </section>
  )
}
