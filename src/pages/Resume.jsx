import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Resume.module.css'

const data = {
  name: 'Trisha Dey',
  title: 'UX/UI Designer · Program Manager · Software Developer',
  about: 'Skilled UX/UI designer, program manager, and software developer with experience in big tech, startups, and education, specializing in managing cross-functional projects that deliver user-centered solutions and responsive design to create seamless user experiences.',
  availability: 'Open to in-office and remote roles in the Bay Area',
  experience: [
    {
      role: 'Climbing Programs Manager',
      org: 'UC Berkeley',
      location: 'Berkeley',
      period: 'Feb 2023 — Present',
      bullets: [
        'Led and trained student staff at the UC Berkeley climbing wall, emphasizing safety, inclusivity, and reducing barriers for new climbers.',
        'Developed accessibility programs with user-centered design to provide students and underrepresented communities opportunities to engage with climbing, fostering an inclusive environment through partnerships.',
        'Led all marketing-related projects using Figma as a main tool.',
      ],
    },
    {
      role: 'UX Design Program Course',
      org: 'CareerFoundry',
      location: 'Online',
      period: 'Jun 2023 — Dec 2023',
      bullets: [
        'Designed several health app prototypes focusing on intuitive tracking and user guidance.',
        'Conducted user research and applied responsive design principles using Figma, Sketch, and Adobe Creative Suite, producing an end-to-end UX experience.',
      ],
    },
    {
      role: 'Senior Front End Software Developer',
      org: 'Salesforce',
      location: 'San Francisco',
      period: 'Jun 2016 — Mar 2023',
      bullets: [
        'Worked on building out Salesforce Essentials, Salesforce\'s only solution directed towards small to medium-sized businesses.',
        'Designed user interfaces that supported complex CRM workflows while ensuring usability for small-business owners using Javascript and Figma.',
        'Led a Trailhead team in building out the Salesforce Side Panel and associated features.',
      ],
    },
  ],
  volunteering: [
    {
      role: 'CAFA Mentor Program',
      org: 'FLY',
      location: 'Oakland',
      period: 'Aug 2021 — Present',
      bullets: [
        'Mentored and served as a court-appointed advocate, attending proceedings and submitting strength-based reports, contributing to positive outcomes and reduced recidivism.',
        'Applied empathy and communication to better understand unique needs — principles I bring to user research and inclusive design.',
      ],
    },
  ],
  education: [
    {
      degree: 'Bachelor of Science',
      org: 'Cornell University',
      location: 'Ithaca',
      period: 'Aug 2012 — May 2016',
      bullets: [
        'Major: Electrical and Computer Engineering (ECE)',
        'Minor: Dyson Business Minor for Engineering Students',
      ],
    },
  ],
  skills: ['UX Research', 'Interaction Design', 'Visual Design', 'Design Systems', 'Prototyping', 'Figma', 'Sketch', 'Adobe Creative Suite', 'React', 'JavaScript', 'TypeScript', 'Node.js', 'Program Management', 'Agile / Scrum'],
  hobbies: ['Rock Climbing', 'Sauntering', 'Visual and Digital Arts'],
}

function Section({ label, children, delay = 0 }) {
  return (
    <div className={`${styles.section} reveal`} style={{ transitionDelay: `${delay}s` }}>
      <div className={styles.sectionLabelWrap}>
        <span className={styles.sectionLabel}>{label}</span>
        <div className={styles.sectionLine} />
      </div>
      {children}
    </div>
  )
}

function Entry({ item }) {
  return (
    <div className={styles.entry}>
      <div className={styles.entryHeader}>
        <div className={styles.entryLeft}>
          <h3 className={styles.entryRole}>{item.role}</h3>
          <p className={styles.entryOrg}>{item.org} · {item.location}</p>
        </div>
        <span className={styles.entryPeriod}>{item.period}</span>
      </div>
      <ul className={styles.entryBullets}>
        {item.bullets.map((b, i) => (
          <li key={i} className={styles.entryBullet}>
            <span className={styles.bulletDot} />
            {b}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Resume() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.08 }
    )
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <main className={styles.page}>
      {/* ── Top bar ── */}
      <div className={styles.topBar}>
        <Link to="/" className={styles.backLink}>← Back</Link>
        <a href="/resume.pdf" download className={styles.downloadBtn} data-hover>
          Download PDF ↓
        </a>
      </div>

      <div className={styles.inner}>
        {/* ── Header ── */}
        <header className={`${styles.header} ${mounted ? styles.headerVisible : ''}`}>
          <div className={styles.headerLeft}>
            <h1 className={styles.name}>{data.name}</h1>
            <p className={styles.titleLine}>{data.title}</p>
          </div>
          <div className={styles.headerRight}>
            <a href="mailto:tdey13@gmail.com" className={styles.contactLink}>tdey13@gmail.com</a>
            <a href="https://www.linkedin.com/in/trishadey/" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>linkedin.com/in/trishadey</a>
            <span className={styles.availBadge}>● {data.availability}</span>
          </div>
        </header>

        <div className={styles.divider} />

        {/* ── About ── */}
        <Section label="About" delay={0.1}>
          <p className={styles.about}>{data.about}</p>
        </Section>

        {/* ── Skills ── */}
        <Section label="Skills" delay={0.15}>
          <div className={styles.skillsWrap}>
            {data.skills.map(s => (
              <span key={s} className={styles.skillChip}>{s}</span>
            ))}
          </div>
        </Section>

        {/* ── Experience ── */}
        <Section label="Experience" delay={0.2}>
          {data.experience.map((item, i) => <Entry key={i} item={item} />)}
        </Section>

        {/* ── Volunteering ── */}
        <Section label="Volunteering" delay={0.25}>
          {data.volunteering.map((item, i) => <Entry key={i} item={item} />)}
        </Section>

        {/* ── Education ── */}
        <Section label="Education" delay={0.3}>
          {data.education.map((item, i) => <Entry key={i} item={item} />)}
        </Section>

        {/* ── Hobbies ── */}
        <Section label="Outside of Work" delay={0.35}>
          <div className={styles.hobbiesWrap}>
            {data.hobbies.map(h => (
              <span key={h} className={styles.hobbyChip}>{h}</span>
            ))}
          </div>
          <p className={styles.references}>References available upon request</p>
        </Section>
      </div>
    </main>
  )
}
