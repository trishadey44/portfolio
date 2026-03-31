import { useState } from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import { HearthSplash, BARTSplash, SimmerSplash, ComponentLibrarySplash } from './CardSplash'
import VeloursSplash from './VeloursSplash'
import styles from './Projects.module.css'

const SPLASH_MAP = {
  'hearth':        HearthSplash,
  'bart-redesign': BARTSplash,
  'simmer':        SimmerSplash,
  'velours':       VeloursSplash,
}

export default function Projects() {
  const [index, setIndex] = useState(0)
  const [animDir, setAnimDir] = useState(null)
  const [animating, setAnimating] = useState(false)
  const total = projects.length

  const go = (dir) => {
    if (animating) return
    setAnimDir(dir)
    setAnimating(true)
    setTimeout(() => {
      setIndex(i => dir === 'right' ? (i + 1) % total : (i - 1 + total) % total)
      setAnimating(false)
      setAnimDir(null)
    }, 320)
  }

  // Always render 3 cards — CSS handles showing 1 on mobile
  const visible = [0, 1, 2].map(offset => projects[(index + offset) % total])

  return (
    <section className={`${styles.section} section`} id="projects">
      <div className="container">
        <div className={`${styles.header} reveal`}>
          <div>
            <span className="label">Selected Work</span>
            <h2 className={styles.title}>Things I've built<br />and designed</h2>
          </div>
          <Link to="/all-projects" className={styles.allLink}>All projects →</Link>
        </div>
      </div>

      <div className={styles.sliderWrap}>
        {/* Desktop arrows — hidden on mobile via CSS */}
        <button className={`${styles.scrollBtn} ${styles.scrollBtnLeft} ${styles.desktopOnly}`} onClick={() => go('left')} aria-label="Previous">‹</button>

        <div className={styles.sliderClip}>
          <ul className={`${styles.sliderTrack} ${animating ? (animDir === 'right' ? styles.slideOutLeft : styles.slideOutRight) : ''}`}>
            {visible.map((project, i) => (
              <li key={`${project.slug}-${index}-${i}`} className={styles.sliderCard}>
                <ProjectCard project={project} i={projects.indexOf(project)} />
              </li>
            ))}
          </ul>
        </div>

        <button className={`${styles.scrollBtn} ${styles.scrollBtnRight} ${styles.desktopOnly}`} onClick={() => go('right')} aria-label="Next">›</button>

        {/* Mobile arrows + dots — shown only on mobile via CSS */}
        <div className={styles.mobileArrows}>
          <button className={styles.mobileArrowBtn} onClick={() => go('left')} aria-label="Previous">‹</button>
          <span className={styles.mobileDots}>
            {projects.map((_, i) => (
              <span key={i} className={`${styles.mobileDot} ${i === index ? styles.mobileDotActive : ''}`} />
            ))}
          </span>
          <button className={styles.mobileArrowBtn} onClick={() => go('right')} aria-label="Next">›</button>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, i }) {
  const Splash = SPLASH_MAP[project.slug]
  const dest = project.externalPage || `/case-study/${project.slug}`
  return (
    <Link to={dest} data-hover>
      <div className={styles.cardThumb} style={{ '--card-color': project.color }}>
        {Splash ? (
          <div className={styles.cardSplash}>
            <Splash />
          </div>
        ) : (
          <div className={styles.cardPlaceholder}>
            <span className={styles.cardIndex}>0{i + 1}</span>
          </div>
        )}
        <div className={styles.cardOverlay}>
          <span className={styles.viewLabel}>{project.externalPage ? 'View Project →' : 'View Case Study →'}</span>
        </div>
      </div>
      <div className={styles.cardBody}>
        <div className={styles.cardMeta}>
          <span className="label">{project.category}</span>
          <span className={`${styles.year} label`}>{project.year}</span>
        </div>
        <h3 className={styles.cardTitle}>{project.title}</h3>
        <p className={styles.cardTagline}>{project.tagline}</p>
        <div className={styles.cardTags}>
          {project.tags.map(tag => (
            <span key={tag} className={styles.tag}>{tag}</span>
          ))}
        </div>
      </div>
    </Link>
  )
}
