import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import { HearthSplash, BARTSplash, SimmerSplash } from './CardSplash'
import styles from './Projects.module.css'

const SPLASH_MAP = {
  'hearth':        HearthSplash,
  'bart-redesign': BARTSplash,
  'simmer':        SimmerSplash,
}

// Always show exactly 3. If more projects exist, they live at /all-projects.
const FEATURED = projects.slice(0, 3)

export default function Projects() {
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

        <div className={styles.featuredGrid}>
          {FEATURED.map((project, i) => (
            <div key={project.slug} className={`${styles.featuredCard} reveal`}
              style={{ transitionDelay: `${i * 0.08}s` }}>
              <ProjectCard project={project} i={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, i }) {
  const Splash = SPLASH_MAP[project.slug]
  const dest = project.externalPage || `/case-study/${project.slug}`
  return (
    <Link to={dest} data-hover className={styles.cardLink}>
      <div className={styles.cardThumb} style={{ '--card-color': project.color }}>
        {Splash ? (
          <div className={styles.cardSplash}><Splash /></div>
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
