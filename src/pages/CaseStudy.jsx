import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { projects } from '../data/projects'
import HearthMockup from '../components/HearthMockup'
import SimmerMockup from '../components/SimmerMockup'
import BARTMockup from '../components/BARTMockup'
import styles from './CaseStudy.module.css'

function ProblemSection({ section }) {
  return (
    <section className={`${styles.richBlock} reveal`}>
      <span className="label">{section.label}</span>
      <h2 className={styles.richHeadline}>{section.headline}</h2>
      {section.body.split('\n\n').map((para, i) => (
        <p key={i} className={styles.bodyText}>{para}</p>
      ))}
      {section.stats && (
        <div className={styles.statsRow}>
          {section.stats.map(s => (
            <div key={s.label} className={styles.statBox}>
              <span className={styles.statValue}>{s.value}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

function ResearchSection({ section, slug }) {
  const appName = slug === 'hearth' ? '🔥 Hearth' : slug === 'bart-redesign' ? '🚇 BART Redesign' : '🫧 Simmer'
  const appStrength = slug === 'hearth' ? 'Warm, intelligent, everyday' : slug === 'bart-redesign' ? 'Rider-first, accessible, real-time' : 'Smart filters, full cooking journey'
  return (
    <section className={`${styles.richBlock} reveal`}>
      <span className="label">{section.label}</span>
      <h2 className={styles.richHeadline}>{section.headline}</h2>
      <p className={styles.bodyText}>{section.body}</p>
      <div className={styles.quotesGrid}>
        {section.findings.map((f, i) => (
          <div key={i} className={styles.findingCard}>
            <p className={styles.findingQuote}>"{f.quote}"</p>
            <span className={styles.findingTheme}>{f.theme}</span>
          </div>
        ))}
      </div>
      <div className={`${styles.compTable} reveal`}>
        <span className="label" style={{ marginBottom: '16px', display: 'block' }}>Competitive Analysis</span>
        <div className={styles.compGrid}>
          <div className={styles.compHeader}>
            <span>Tool</span><span>Strength</span><span>Weakness</span><span>Target</span>
          </div>
          {section.competitors.map(c => (
            <div key={c.name} className={styles.compRow}>
              <span className={styles.compName}>{c.name}</span>
              <span className={styles.compCell}>{c.strength}</span>
              <span className={styles.compCell}>{c.weakness}</span>
              <span className={styles.compCell}>{c.target}</span>
            </div>
          ))}
          <div className={`${styles.compRow} ${styles.hearthRow}`}>
            <span className={styles.compName}>{appName}</span>
            <span className={styles.compCell}>{appStrength}</span>
            <span className={styles.compCell}>—</span>
            <span className={styles.compCell}>Everyone</span>
          </div>
        </div>
      </div>
      <blockquote className={styles.insightQuote}>{section.insight}</blockquote>
    </section>
  )
}

function DecisionsSection({ section }) {
  return (
    <section className={`${styles.richBlock} reveal`}>
      <span className="label">{section.label}</span>
      <h2 className={styles.richHeadline}>{section.headline}</h2>
      <div className={styles.decisionsGrid}>
        {section.decisions.map((d, i) => (
          <div key={i} className={`${styles.decisionCard} reveal`} style={{ transitionDelay: `${i * 0.07}s` }}>
            <span className={styles.decisionNumber}>{d.number}</span>
            <h3 className={styles.decisionTitle}>{d.title}</h3>
            <p className={styles.decisionBody}>{d.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function MockupSection({ section, slug }) {
  return (
    <section className={`${styles.richBlock} ${styles.mockupBlock} reveal`}>
      <span className="label">{section.label}</span>
      <h2 className={styles.richHeadline}>{section.headline}</h2>
      <p className={styles.bodyText}>{section.body}</p>
      <div className={styles.mockupWrap}>
        {slug === 'hearth' ? <HearthMockup /> : slug === 'bart-redesign' ? <BARTMockup /> : <SimmerMockup />}
      </div>
    </section>
  )
}

function OutcomesSection({ section }) {
  return (
    <section className={`${styles.richBlock} ${styles.outcomeRich} reveal`}>
      <span className="label">{section.label}</span>
      <h2 className={styles.richHeadline}>{section.headline}</h2>
      {section.body.split('\n\n').map((para, i) => (
        <p key={i} className={styles.bodyText}>{para}</p>
      ))}
      {section.stats && (
        <div className={styles.statsRow}>
          {section.stats.map(s => (
            <div key={s.label} className={styles.statBox}>
              <span className={styles.statValue}>{s.value}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

const SECTION_MAP = {
  problem:   ProblemSection,
  research:  ResearchSection,
  decisions: DecisionsSection,
  mockup:    MockupSection,
  outcomes:  OutcomesSection,
}

export default function CaseStudy() {
  const { slug } = useParams()
  const project = projects.find(p => p.slug === slug)
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible')
      }),
      { threshold: 0.08 }
    )
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [slug])

  if (!project) {
    return (
      <div className={styles.notFound}>
        <p>Project not found.</p>
        <Link to="/">← Back home</Link>
      </div>
    )
  }

  const currentIndex = projects.findIndex(p => p.slug === slug)
  const next = projects[(currentIndex + 1) % projects.length]

  return (
    <main className={styles.page}>
      <section
        className={`${styles.hero} ${mounted ? styles.heroVisible : ''}`}
        style={{ '--case-color': project.color }}
      >
        <div className={`${styles.heroInner} container`}>
          <Link to="/" className={styles.back} data-hover>← Back to work</Link>
          <div className={styles.heroMeta}>
            <span className="label">{project.category}</span>
            <span className={`${styles.year} label`}>{project.year}</span>
          </div>
          <h1 className={styles.heroTitle}>{project.title}</h1>
          <p className={styles.heroTagline}>{project.tagline}</p>
          <div className={styles.heroTags}>
            {project.tags.map(tag => (
              <span key={tag} className={styles.tag}>{tag}</span>
            ))}
          </div>
        </div>
        <div className={styles.heroBanner} style={{ background: project.color }}>
          <span className={styles.heroBannerText}>{project.title}</span>
        </div>
      </section>

      <div className="container">
        {project.richCaseStudy ? (
          <>
            <section className={`${styles.richBlock} ${styles.overviewBlock} reveal`}>
              <span className="label">Overview</span>
              <p className={styles.bodyText}>{project.description}</p>
            </section>
            {project.sections.map((section, i) => {
              const Renderer = SECTION_MAP[section.type]
              return Renderer ? <Renderer key={i} section={section} slug={slug} /> : null
            })}
          </>
        ) : (
          <div className={styles.content}>
            <section className={`${styles.block} reveal`}>
              <span className="label">Overview</span>
              <p className={styles.bodyText}>{project.description}</p>
            </section>
            <section className={`${styles.block} reveal`}>
              <span className="label">The Challenge</span>
              <blockquote className={styles.quote}>{project.challenge}</blockquote>
            </section>
            <section className={`${styles.block} reveal`}>
              <span className="label">Process</span>
              <p className={styles.bodyText}>{project.process}</p>
            </section>
            <section className={`${styles.block} ${styles.outcomeBlock} reveal`}>
              <span className="label">Outcome</span>
              <p className={styles.bodyText}>{project.outcome}</p>
            </section>
          </div>
        )}
      </div>

      <section className={styles.nextSection}>
        <div className="container">
          <div className={`${styles.nextInner} reveal`}>
            <span className="label">Next Project</span>
            <Link to={`/case-study/${next.slug}`} className={styles.nextLink} data-hover>
              <h2 className={styles.nextTitle}>{next.title}</h2>
              <span className={styles.nextArrow}>→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
