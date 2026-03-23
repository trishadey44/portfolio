import { Link } from 'react-router-dom'
import styles from './Playground.module.css'

// ─────────────────────────────────────────────────────────────────────────
//  Edit this array to add your real work.
//
//  Each item has:
//    title       — name of the piece
//    description — one sentence, what it is or why you made it
//    tag         — category label (UI, Brand, Illustration, Motion, etc.)
//    color       — background color for the placeholder
//    size        — 'square' | 'wide' | 'tall' — controls the grid layout
//    image       — optional: '/your-image.png' — drop images in /public
//    link        — optional: external URL (Figma, live demo, etc.)
// ─────────────────────────────────────────────────────────────────────────
const items = [
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
    description: 'Building a muted, warm palette system from scratch. No grays — all warm neutrals.',
    tag: 'UI',
    color: '#EFE3CA',
    textColor: '#3D2009',
    size: 'tall',
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
    size: 'square',
    image: null,
    link: null,
  },
]

function PlaygroundCard({ item }) {
  const inner = (
    <div
      className={`${styles.card} ${styles[item.size]}`}
      style={{ '--card-bg': item.color, '--card-text': item.textColor }}
    >
      {item.image ? (
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
        {item.link && <span className={styles.cardLink}>View ↗</span>}
      </div>
    </div>
  )

  return item.link ? (
    <a href={item.link} target="_blank" rel="noopener noreferrer" className={styles.cardAnchor} data-hover>
      {inner}
    </a>
  ) : (
    <div className={styles.cardAnchor}>{inner}</div>
  )
}

export default function Playground({ preview = false }) {
  const visibleItems = preview ? items.slice(0, 3) : items

  return (
    <section className={`${styles.section} section`} id="playground">
      <div className="container">
        <div className={`${styles.header} reveal`}>
          <span className="label">Playground</span>
          <h2 className={styles.title}>Smaller work, side projects,<br />and things made just for fun</h2>
          <p className={styles.sub}>Not every project needs a case study. These are explorations, experiments, and work that does not fit anywhere else.</p>
        </div>

        <div className={styles.mosaic}>
          {visibleItems.map((item, i) => (
            <div
              key={item.title}
              className={`${styles.mosaicItem} ${styles[`item${i}`]} reveal`}
              style={{ transitionDelay: `${i * 0.07}s` }}
            >
              <PlaygroundCard item={item} />
            </div>
          ))}
        </div>

        {preview && (
          <div className={`${styles.viewAllWrap} reveal`}>
            <Link to="/playground" className={styles.viewAllBtn}>
              See all side projects →
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
