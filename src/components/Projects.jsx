import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import { HearthSplash, BARTSplash, SimmerSplash } from './CardSplash'
import styles from './Projects.module.css'

const SPLASH_MAP = {
  'hearth':        HearthSplash,
  'bart-redesign': BARTSplash,
  'simmer':        SimmerSplash,
}

export default function Projects() {
  const useSlider = projects.length > 3
  const trackRef = useRef(null)
  const [dragging, setDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  const onMouseDown = (e) => {
    setDragging(true)
    setStartX(e.pageX - trackRef.current.offsetLeft)
    setScrollLeft(trackRef.current.scrollLeft)
  }
  const onMouseMove = (e) => {
    if (!dragging) return
    e.preventDefault()
    const x = e.pageX - trackRef.current.offsetLeft
    trackRef.current.scrollLeft = scrollLeft - (x - startX)
  }
  const onMouseUp = () => setDragging(false)

  const onTouchStart = (e) => {
    setStartX(e.touches[0].pageX - trackRef.current.offsetLeft)
    setScrollLeft(trackRef.current.scrollLeft)
  }
  const onTouchMove = (e) => {
    const x = e.touches[0].pageX - trackRef.current.offsetLeft
    trackRef.current.scrollLeft = scrollLeft - (x - startX)
  }

  return (
    <section className={`${styles.section} section`} id="projects">
      <div className="container">
        <div className={`${styles.header} reveal`}>
          <span className="label">Selected Work</span>
          <h2 className={styles.title}>Things I've built<br />and designed</h2>
        </div>
      </div>

      {useSlider ? (
        <div className={styles.sliderWrap}>
          <div className={styles.sliderFadeLeft} />
          <ul
            ref={trackRef}
            className={`${styles.sliderTrack} ${dragging ? styles.grabbing : ''}`}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseUp}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
          >
            {projects.map((project, i) => (
              <li key={project.slug} className={styles.sliderCard}>
                <ProjectCard project={project} i={i} />
              </li>
            ))}
          </ul>
          <div className={styles.sliderFadeRight} />
          <p className={styles.sliderHint}>← drag to explore →</p>
        </div>
      ) : (
        <div className="container">
          <ul className={styles.grid}>
            {projects.map((project, i) => (
              <li key={project.slug} className={`${styles.card} reveal`} style={{ transitionDelay: `${i * 0.1}s` }}>
                <ProjectCard project={project} i={i} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  )
}

function ProjectCard({ project, i }) {
  const Splash = SPLASH_MAP[project.slug]
  return (
    <Link to={`/case-study/${project.slug}`} data-hover>
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
          <span className={styles.viewLabel}>View Case Study →</span>
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
