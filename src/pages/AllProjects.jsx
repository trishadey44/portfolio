import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import Footer from '../components/Footer'
import styles from '../components/Projects.module.css'
import page from './AllProjects.module.css'
import { HearthSplash, BARTSplash, SimmerSplash } from '../components/CardSplash'
import VeloursSplash from '../components/VeloursSplash'

const SPLASH = { hearth: HearthSplash, 'bart-redesign': BARTSplash, simmer: SimmerSplash, velours: VeloursSplash }

export default function AllProjects() {
  useEffect(() => { window.scrollTo(0, 0) }, [])
  return (
    <main className={page.page}>
      <div className="container">
        <div className={page.header}>
          <Link to="/" className={page.back}>← Back home</Link>
          <h1 className={page.title}>All Work</h1>
          <p className={page.sub}>Every project, case study, and design.</p>
        </div>
        <ul className={page.grid}>
          {projects.map((project, i) => {
            const Splash = SPLASH[project.slug]
            const dest = project.externalPage || `/case-study/${project.slug}`
            return (
              <li key={project.slug} className={page.card}>
                <Link to={dest} data-hover>
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
                  </div>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
      <Footer />
    </main>
  )
}
