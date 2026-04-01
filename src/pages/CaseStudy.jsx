import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { projects } from '../data/projects'
import HearthMockup from '../components/HearthMockup'
import HearthMobileMockup from '../components/HearthMobileMockup'
import SimmerMockup from '../components/SimmerMockup'
import BARTMockup from '../components/BARTMockup'
import styles from './CaseStudy.module.css'

// ── Shared helpers ────────────────────────────────────────────
function StatBox({ stats }) {
  return (
    <div className={styles.statsRow}>
      {stats.map(s => (
        <div key={s.label} className={styles.statBox}>
          <span className={styles.statValue}>{s.value}</span>
          <span className={styles.statLabel}>{s.label}</span>
        </div>
      ))}
    </div>
  )
}

// ── Problem ───────────────────────────────────────────────────
function ProblemSection({ section }) {
  return (
    <section className={`${styles.richBlock} reveal`}>
      <span className="label">{section.label}</span>
      <h2 className={styles.richHeadline}>{section.headline}</h2>
      {section.body.split('\n\n').map((p, i) => <p key={i} className={styles.bodyText}>{p}</p>)}
      {section.stats && <StatBox stats={section.stats} />}
    </section>
  )
}

// ── Research Visual — stats rail + quote cards (Hearth) ───────
function ResearchVisualSection({ section }) {
  return (
    <section className={`${styles.richBlock} ${styles.researchVisual} reveal`}>
      <span className="label">{section.label}</span>
      <h2 className={styles.richHeadline}>{section.headline}</h2>

      {section.stats && (
        <div className={styles.researchStatsRail}>
          <div className={styles.researchStatsLine} />
          <div className={styles.researchStatsGrid}>
            {section.stats.map((s, i) => (
              <div key={i} className={styles.researchStatItem}>
                <div className={styles.researchStatDot} />
              <div className={`${styles.researchStatNumber} ${s.value.length > 4 ? styles.researchStatNumberSm : ''}`}>{s.value}</div>
                <div className={styles.researchStatLabel}>{s.label}</div>
                <div className={styles.researchStatDesc}>{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {section.findings && (
        <div className={styles.researchQuotesGrid}>
          {section.findings.map((f, i) => (
            <div key={i} className={styles.researchQuoteCard}>
              <p className={styles.researchQuoteText}>"{f.quote}"</p>
              <div className={styles.researchQuoteTheme}>{f.theme}</div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

// ── Research with comp table ──────────────────────────────────
function ResearchSection({ section, slug }) {
  const appRow = {
    'hearth':       { name: '🔥 Hearth',       str: 'Warm, intelligent, everyday' },
    'bart-redesign':{ name: '🚇 BART Redesign', str: 'Rider-first, accessible, real-time' },
    'simmer':       { name: '🫧 Simmer',         str: 'Smart filters, full cooking journey' },
  }[slug] || { name: 'This app', str: 'Purpose-built for real users' }

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
      {section.competitors && (
        <div className={`${styles.compTable} reveal`}>
          <span className="label" style={{ marginBottom: 16, display: 'block' }}>Competitive Analysis</span>
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
            <div className={`${styles.compRow} ${styles.highlightRow}`}>
              <span className={styles.compName}>{appRow.name}</span>
              <span className={styles.compCell}>{appRow.str}</span>
              <span className={styles.compCell}>-</span>
              <span className={styles.compCell}>Everyone</span>
            </div>
          </div>
        </div>
      )}
      <blockquote className={styles.insightQuote}>{section.insight}</blockquote>
    </section>
  )
}

// ── Research quotes only (Hearth - no comp table) ─────────────
function ResearchQuotesSection({ section }) {
  return (
    <section className={`${styles.richBlock} reveal`}>
      <span className="label">{section.label}</span>
      <h2 className={styles.richHeadline}>{section.headline}</h2>
      <p className={styles.bodyText}>{section.intro}</p>
      <div className={styles.quotesGrid}>
        {section.findings.map((f, i) => (
          <div key={i} className={styles.findingCard}>
            <p className={styles.findingQuote}>"{f.quote}"</p>
            <span className={styles.findingTheme}>{f.theme}</span>
          </div>
        ))}
      </div>
      <blockquote className={styles.insightQuote}>{section.insight}</blockquote>
    </section>
  )
}

// ── Before/After (BART) ───────────────────────────────────────
function BeforeAfterSection({ section }) {
  return (
    <section className={`${styles.richBlock} reveal`}>
      <span className="label">{section.label}</span>
      <h2 className={styles.richHeadline}>{section.headline}</h2>
      <div className={styles.beforeAfterGrid}>
        {section.pairs.map((pair, i) => (
          <div key={i} className={`${styles.baPair} reveal`} style={{ transitionDelay: `${i * 0.1}s` }}>
            <p className={styles.baPairLabel}>{pair.label}</p>
            <div className={styles.baColumns}>
              <div className={styles.baBefore}>
                <span className={styles.baTag}>Before</span>
                <p className={styles.baText}>{pair.before}</p>
              </div>
              <div className={styles.baAfter}>
                <span className={styles.baTagAfter}>After</span>
                <p className={styles.baText}>{pair.after}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

// ── Wireframes / IA (BART) ────────────────────────────────────
function WireframesSection({ section }) {
  return (
    <section className={`${styles.richBlock} reveal`}>
      <span className="label">{section.label}</span>
      <h2 className={styles.richHeadline}>{section.headline}</h2>
      <p className={styles.bodyText}>{section.body}</p>
      <div className={styles.flowsGrid}>
        {section.flows.map((flow, i) => (
          <div key={i} className={`${styles.flowCard} reveal`} style={{ transitionDelay: `${i * 0.08}s` }}>
            <p className={styles.flowTitle}>{flow.title}</p>
            <ol className={styles.flowSteps}>
              {flow.steps.map((step, j) => (
                <li key={j} className={styles.flowStep}>
                  <span className={styles.flowStepNum}>{j + 1}</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
      <div className={styles.iaNoteBox}>
        <span className={styles.iaNoteIcon}>ℹ</span>
        <p className={styles.iaNote}>{section.iaNote}</p>
      </div>
    </section>
  )
}

// ── Personas (Simmer) ─────────────────────────────────────────
function PersonasSection({ section }) {
  return (
    <section className={`${styles.richBlock} reveal`}>
      <span className="label">{section.label}</span>
      <h2 className={styles.richHeadline}>{section.headline}</h2>
      <div className={styles.personasGrid}>
        {section.personas.map((p, i) => (
          <div key={i} className={`${styles.personaCard} reveal`} style={{ transitionDelay: `${i * 0.1}s` }}>
            <div className={styles.personaTop}>
              <span className={styles.personaEmoji}>{p.emoji}</span>
              <div>
                <p className={styles.personaName}>{p.name}</p>
                <p className={styles.personaAge}>Age {p.age}</p>
              </div>
            </div>
            <blockquote className={styles.personaQuote}>"{p.quote}"</blockquote>
            <div className={styles.personaLists}>
              <div>
                <p className={styles.personaListLabel}>Goals</p>
                <ul className={styles.personaList}>
                  {p.goals.map(g => <li key={g}>{g}</li>)}
                </ul>
              </div>
              <div>
                <p className={styles.personaListLabel}>Frustrations</p>
                <ul className={`${styles.personaList} ${styles.personaListFrustrations}`}>
                  {p.frustrations.map(f => <li key={f}>{f}</li>)}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

// ── Decisions: Spotlight strip (Simmer) ──────────────────────
function DecisionsSpotlightSection({ section }) {
  return (
    <section className={`${styles.richBlock} reveal`}>
      <span className="label">{section.label}</span>
      {section.headline && <h2 className={styles.richHeadline}>{section.headline}</h2>}
      <div className={styles.spotlightList}>
        {section.decisions.map((d, i) => (
          <div key={i} className={`${styles.spotlightItem} ${i % 2 === 1 ? styles.spotlightAlt : ''} reveal`}
            style={{ transitionDelay: `${i * 0.06}s` }}>
            <div className={styles.spotlightNumWrap}>
              <span className={styles.spotlightDot} />
              <div className={styles.spotlightNum}>{d.number}</div>
            </div>
            <div className={styles.spotlightContent}>
              <h3 className={styles.spotlightTitle}>{d.title}</h3>
              <p className={styles.spotlightBody}>{d.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

// ── Decisions: grid (BART, Simmer) ───────────────────────────
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

// ── Decisions: editorial list (Hearth) ───────────────────────
function DecisionsListSection({ section }) {
  return (
    <section className={`${styles.richBlock} reveal`}>
      <span className="label">{section.label}</span>
      <h2 className={styles.richHeadline}>{section.headline}</h2>
      <div className={styles.decisionsList}>
        {section.decisions.map((d, i) => (
          <div key={i} className={`${styles.decisionsListItem} reveal`} style={{ transitionDelay: `${i * 0.06}s` }}>
            <span className={styles.decisionsListNum}>{d.number}</span>
            <div className={styles.decisionsListBody}>
              <h3 className={styles.decisionsListTitle}>{d.title}</h3>
              <p className={styles.decisionsListText}>{d.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

// ── Iteration / feedback (Simmer) ────────────────────────────
function IterationSection({ section }) {
  return (
    <section className={`${styles.richBlock} reveal`}>
      <span className="label">{section.label}</span>
      <h2 className={styles.richHeadline}>{section.headline}</h2>
      <div className={styles.iterationGrid}>
        {section.rounds.map((round, i) => (
          <div key={i} className={`${styles.iterationCard} reveal`} style={{ transitionDelay: `${i * 0.1}s` }}>
            <div className={styles.iterationHeader}>
              <span className={styles.iterationRound}>{round.round}</span>
              <span className={styles.iterationParticipants}>{round.participants} participants</span>
            </div>
            <div className={styles.iterationFinding}>
              <p className={styles.iterationFindingLabel}>Key Finding</p>
              <p className={styles.iterationFindingText}>{round.keyFinding}</p>
            </div>
            <div className={styles.iterationChanges}>
              <p className={styles.iterationChangesLabel}>What Changed</p>
              <ul className={styles.iterationChangesList}>
                {round.changes.map((c, j) => (
                  <li key={j} className={styles.iterationChange}>
                    <span className={styles.iterationChangeDot} />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

// ── Mockup mobile ─────────────────────────────────────────────
function MockupMobileSection({ section }) {
  return (
    <section className={`${styles.richBlock} ${styles.mockupBlock} reveal`}>
      <span className="label">{section.label}</span>
      <h2 className={styles.richHeadline}>{section.headline}</h2>
      <p className={styles.bodyText}>{section.body}</p>
      <HearthMobileMockup />
    </section>
  )
}

// ── Mockup ────────────────────────────────────────────────────
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

// ── Outcomes ──────────────────────────────────────────────────
function OutcomesSection({ section }) {
  return (
    <section className={`${styles.richBlock} ${styles.outcomeRich} reveal`}>
      <span className="label">{section.label}</span>
      <h2 className={styles.richHeadline}>{section.headline}</h2>
      {section.body.split('\n\n').map((p, i) => <p key={i} className={styles.bodyText}>{p}</p>)}
      {section.stats && <StatBox stats={section.stats} />}
    </section>
  )
}

// ── App Screenshots (BART - real app comparison) ──────────────
function AppScreenshotsSection({ section }) {
  return (
    <section className={`${styles.richBlock} reveal`}>
      <span className="label">{section.label}</span>
      <h2 className={styles.richHeadline}>{section.headline}</h2>
      <p className={styles.bodyText}>{section.body}</p>
      <div className={styles.screenshotsGrid}>
        {section.screenshots.map((s, i) => (
          <div key={i} className={`${styles.screenshotItem} reveal`} style={{ transitionDelay: `${i * 0.1}s` }}>
            <div className={styles.screenshotPhone}>
              <img src={s.src} alt={s.screen} className={styles.screenshotImg} />
            </div>
            <div className={styles.screenshotMeta}>
              <span className={styles.screenshotScreen}>{s.screen}</span>
              <p className={styles.screenshotAnnotation}>{s.annotation}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

// ── Design Outcomes (Simmer - no stat boxes, design principles) ──
function DesignOutcomesSection({ section }) {
  return (
    <section className={`${styles.richBlock} ${styles.outcomeRich} reveal`}>
      <span className="label">{section.label}</span>
      <h2 className={styles.richHeadline}>{section.headline}</h2>
      {section.body.split('\n\n').map((p, i) => <p key={i} className={styles.bodyText}>{p}</p>)}
      {section.principles && (
        <div className={styles.principlesGrid}>
          {section.principles.map((p, i) => (
            <div key={i} className={`${styles.principleCard} reveal`} style={{ transitionDelay: `${i * 0.08}s` }}>
              <span className={styles.principleIcon}>{p.icon}</span>
              <h3 className={styles.principleTitle}>{p.title}</h3>
              <p className={styles.principleBody}>{p.body}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

const SECTION_MAP = {
  'problem':          ProblemSection,
  'research':         ResearchSection,
  'research-quotes':  ResearchQuotesSection,
  'research-visual':  ResearchVisualSection,
  'app-screenshots':  AppScreenshotsSection,
  'before-after':     BeforeAfterSection,
  'wireframes':       WireframesSection,
  'personas':         PersonasSection,
  'decisions':            DecisionsSection,
  'decisions-list':       DecisionsListSection,
  'decisions-spotlight':  DecisionsSpotlightSection,
  'iteration':        IterationSection,
  'mockup':           MockupSection,
  'mockup-mobile':    MockupMobileSection,
  'outcomes':         OutcomesSection,
  'design-outcomes':  DesignOutcomesSection,
}

// ── Main page ─────────────────────────────────────────────────
export default function CaseStudy() {
  const { slug } = useParams()
  const project = projects.find(p => p.slug === slug)
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.08 }
    )
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [slug])

  if (!project) {
    return <div className={styles.notFound}><p>Project not found.</p><Link to="/">← Back home</Link></div>
  }

  const currentIndex = projects.findIndex(p => p.slug === slug)
  const next = projects[(currentIndex + 1) % projects.length]
  const prev = projects[(currentIndex - 1 + projects.length) % projects.length]
  const t = project.theme || {}
  const isDark = t.heroStyle === 'dark'
  const isBold = t.heroStyle === 'bold'

  const themeVars = {
    '--cs-accent':       t.accent       || 'var(--blue)',
    '--cs-accent-light': t.accentLight  || 'var(--bg-alt)',
    '--cs-accent-muted': t.accentMuted  || 'var(--border)',
    '--cs-bg':           isDark ? t.bg  : 'var(--bg)',
    '--cs-bg-alt':       isDark ? t.bgAlt : 'var(--bg-alt)',
    '--cs-dark':         t.dark         || 'var(--text)',
    '--cs-text':         isDark ? '#FFFFFF' : 'var(--text)',
    '--cs-muted':        isDark ? 'rgba(255,255,255,0.55)' : 'var(--muted)',
    '--cs-border':       isDark ? 'rgba(255,255,255,0.08)' : 'var(--border)',
    '--cs-card':         isDark ? t.bgAlt : 'var(--white)',
  }

  const pageClass = [
    styles.page,
    isDark ? styles.pageDark : '',
    isBold ? styles.pageBold : '',
  ].filter(Boolean).join(' ')

  return (
    <main className={pageClass} style={themeVars}>
      {/* ── Hero ───────────────────────────────────────── */}
      <section className={`${styles.hero} ${mounted ? styles.heroVisible : ''}`} style={{ '--case-color': project.color }}>
        <div className={`${styles.heroInner} container`}>
          <Link to="/" className={styles.back} data-hover>← Back to work</Link>
          <div className={styles.heroMeta}>
            <span className="label">{project.category}</span>
            <span className={`${styles.year} label`}>{project.year}</span>
          </div>
          <h1 className={styles.heroTitle}>{project.title}</h1>
          <p className={styles.heroTagline}>{project.tagline}</p>
          <div className={styles.heroTags}>
            {project.tags.map(tag => <span key={tag} className={styles.tag}>{tag}</span>)}
          </div>
        </div>
        <div className={styles.heroBanner} style={{ background: project.color }}>
          <span className={styles.heroBannerText}>{project.title}</span>
        </div>
      </section>

      {/* ── Content ─────────────────────────────────────── */}
      <div className={`${styles.contentArea} container`}>
        <section className={`${styles.richBlock} ${styles.overviewBlock} reveal`}>
          <span className="label">Overview</span>
          <p className={styles.bodyText}>{project.description}</p>
        </section>
        {project.sections.map((section, i) => {
          const Renderer = SECTION_MAP[section.type]
          return Renderer ? <Renderer key={i} section={section} slug={slug} /> : null
        })}
      </div>

      {/* ── Prev / Next ──────────────────────────────────── */}
      <section className={styles.nextSection}>
        <div className="container">
          <div className={`${styles.prevNextRow} reveal`}>
            <div className={styles.prevNextItem}>
              <span className="label">Previous Project</span>
              <Link to={`/case-study/${prev.slug}`} className={styles.nextLink} data-hover>
                <span className={styles.prevArrow}>←</span>
                <h2 className={styles.nextTitle}>{prev.title}</h2>
              </Link>
            </div>
            <div className={`${styles.prevNextItem} ${styles.prevNextRight}`}>
              <span className="label">Next Project</span>
              <Link to={`/case-study/${next.slug}`} className={styles.nextLink} data-hover>
                <h2 className={styles.nextTitle}>{next.title}</h2>
                <span className={styles.nextArrow}>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
