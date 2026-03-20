import styles from './Skills.module.css'

const SKILLS = {
  'Design': ['UX Research', 'Interaction Design', 'Visual Design', 'Prototyping', 'Design Systems', 'Accessibility'],
  'Engineering': ['React / Next.js', 'TypeScript', 'Node.js', 'REST APIs', 'Git & CI/CD', 'Performance'],
  'Tools': ['Figma', 'Framer', 'Storybook', 'Webflow', 'VS Code', 'Notion'],
  'Professional Skills': ['Systems Thinking', 'Stakeholder Comms', 'Mentoring', 'Agile / Scrum'],
}

export default function Skills() {
  return (
    <section className={`${styles.section} section`} id="skills">
      <div className="container">
        <div className={`${styles.header} reveal`}>
          <span className="label">Capabilities</span>
          <h2 className={styles.title}>What I bring<br />to the table</h2>
        </div>

        <div className={styles.grid}>
          {Object.entries(SKILLS).map(([category, items], i) => (
            <div
              key={category}
              className={`${styles.group} reveal`}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <h3 className={styles.groupTitle}>{category}</h3>
              <ul className={styles.list}>
                {items.map(skill => (
                  <li key={skill} className={styles.item}>
                    <span className={styles.dot} />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
