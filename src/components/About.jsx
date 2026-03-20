import styles from './About.module.css'

export default function About() {
  return (
    <section className={`${styles.section} section`} id="about">
      <div className="container">
        <div className={styles.grid}>
          <div className={`${styles.left} reveal`}>
            <span className="label">About Me</span>
            <h2 className={styles.title}>
              Designer who codes.<br />
              <em>Engineer who designs.</em>
            </h2>

            <p className={styles.body}>
              I'm <strong>Trisha</strong>, a designer, developer, and firm believer that good design should feel invisible. I work across UX research, visual design, and front-end engineering, which basically means I can take an idea from a messy napkin sketch to a product people actually enjoy using.
            </p>
            <p className={styles.body}>
              I spent time at Salesforce shipping features used by millions, but what really drives me is the small stuff: the interaction that feels just right, the copy that makes you smile, the detail nobody notices but everybody feels. When I'm not manipulating pixels, I'm climbing rocks, running trails, or volunteering — all different ways of solving problems with my whole self.
            </p>

            <div className={styles.facts}>
              {[
                { label: 'Years of experience', value: '10+' },
                { label: 'Ego', value: '0' },
                { label: 'Tabs open', value: '∞' },
              ].map(f => (
                <div key={f.label} className={styles.fact}>
                  <span className={styles.factValue}>{f.value}</span>
                  <span className="label">{f.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={`${styles.right} reveal`} style={{ transitionDelay: '0.15s' }}>
            <img src="/photo.jpg" alt="Trisha" className={styles.photo} />
            <div className={styles.photoDecor} />
          </div>
        </div>
      </div>
    </section>
  )
}
