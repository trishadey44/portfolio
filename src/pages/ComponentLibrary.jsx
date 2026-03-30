import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import s from './ComponentLibrary.module.css'

function Section({ id, label, note, children }) {
  return (
    <div className={s.section} id={id}>
      <div className={s.sectionMeta}>
        <span className={s.sectionLabel}>{label}</span>
        {note && <p className={s.sectionNote}>{note}</p>}
      </div>
      <div className={s.canvas}>{children}</div>
    </div>
  )
}

function Buttons() {
  const [loading, setLoading] = useState(false)
  const fire = () => { setLoading(true); setTimeout(() => setLoading(false), 1800) }
  return (
    <Section id="buttons" label="Buttons" note="Click 'Save changes' to see the loading state.">
      <div className={s.group}>
        <p className={s.groupLabel}>Variants</p>
        <div className={s.row}>
          <button className={`${s.btn} ${s.btnPrimary}`}>Primary</button>
          <button className={`${s.btn} ${s.btnSecondary}`}>Secondary</button>
          <button className={`${s.btn} ${s.btnGhost}`}>Ghost</button>
          <button className={`${s.btn} ${s.btnDanger}`}>Destructive</button>
        </div>
      </div>
      <div className={s.divider} />
      <div className={s.group}>
        <p className={s.groupLabel}>States</p>
        <div className={s.row}>
          <button className={`${s.btn} ${s.btnPrimary} ${loading ? s.btnLoading : ''}`} onClick={fire} disabled={loading}>
            {loading ? <><span className={s.spinner} />Saving...</> : 'Save changes'}
          </button>
          <button className={`${s.btn} ${s.btnPrimary}`} disabled>Disabled</button>
          <button className={`${s.btn} ${s.btnSecondary} ${s.btnSm}`}>Small</button>
          <button className={`${s.btn} ${s.btnPrimary} ${s.btnLg}`}>Large</button>
        </div>
      </div>
    </Section>
  )
}

function Inputs() {
  const [email, setEmail] = useState('')
  const [touched, setTouched] = useState(false)
  const hasError = touched && email.length > 0 && !email.includes('@')
  return (
    <Section id="inputs" label="Form inputs" note="Email validates on blur.">
      <div className={s.formCol}>
        <div className={s.field}>
          <label className={s.fieldLabel}>Name</label>
          <input className={s.input} type="text" placeholder="Trisha Dey" />
        </div>
        <div className={s.field}>
          <label className={s.fieldLabel}>Email</label>
          <input className={`${s.input} ${hasError ? s.inputError : ''}`} type="email" placeholder="you@example.com" value={email} onChange={e => setEmail(e.target.value)} onBlur={() => setTouched(true)} />
          {hasError && <span className={s.errorMsg}>Enter a valid email address.</span>}
        </div>
        <div className={s.field}>
          <label className={s.fieldLabel}>Message</label>
          <textarea className={s.textarea} placeholder="What is on your mind?" rows={3} />
        </div>
        <div className={s.field}>
          <label className={s.fieldLabel}>Role type</label>
          <select className={s.select}>
            <option>Full-time</option><option>Contract</option><option>Freelance</option>
          </select>
        </div>
      </div>
    </Section>
  )
}

function Tabs() {
  const [active, setActive] = useState(0)
  const tabs = ['Overview', 'Schedules', 'Elevators', 'Map']
  const content = [
    'Live departure times, station amenities, and connecting transit options.',
    'Full timetable with northbound and southbound filtering.',
    'Real-time elevator status for every level of the station.',
    'Interactive station map with platform locations and exit routes.',
  ]
  return (
    <Section id="tabs" label="Tabs" note="Pulled from the BART station detail screen.">
      <div className={s.tabBar}>
        {tabs.map((t, i) => (
          <button key={t} className={`${s.tabBtn} ${active === i ? s.tabBtnOn : ''}`} onClick={() => setActive(i)}>{t}</button>
        ))}
      </div>
      <div className={s.tabPanel}>{content[active]}</div>
    </Section>
  )
}

function FilterChips() {
  const [selected, setSelected] = useState(['Under 30 min'])
  const chips = ['Under 20 min', 'Under 30 min', 'Under 1 hr', 'Vegan', 'Vegetarian', 'Dairy-free', 'Use my pantry', 'Quick', 'Weeknight']
  const toggle = c => setSelected(s => s.includes(c) ? s.filter(x => x !== c) : [...s, c])
  return (
    <Section id="chips" label="Filter chips" note="Multi-select pattern from Simmer.">
      <div className={s.chipRow}>
        {chips.map(c => (
          <button key={c} className={`${s.chip} ${selected.includes(c) ? s.chipOn : ''}`} onClick={() => toggle(c)}>{c}</button>
        ))}
      </div>
      <p className={s.chipCount}>{selected.length} filter{selected.length !== 1 ? 's' : ''} selected</p>
    </Section>
  )
}

function Toggles() {
  const [settings, setSettings] = useState({ contrast: true, notifications: false, autosave: true })
  const [checks, setChecks] = useState([true, false, true])
  const toggleSetting = k => setSettings(prev => ({ ...prev, [k]: !prev[k] }))
  const toggleCheck = i => setChecks(c => c.map((v, j) => j === i ? !v : v))
  return (
    <Section id="toggles" label="Toggles and checkboxes">
      <div className={s.twoCol}>
        <div>
          <p className={s.groupLabel}>Toggles</p>
          {[{ key:'contrast', label:'High contrast' }, { key:'notifications', label:'Email notifications' }, { key:'autosave', label:'Auto-save' }].map(t => (
            <div key={t.key} className={s.toggleRow}>
              <span className={s.toggleLabel}>{t.label}</span>
              <button className={`${s.toggle} ${settings[t.key] ? s.toggleOn : ''}`} onClick={() => toggleSetting(t.key)}>
                <span className={s.toggleThumb} />
              </button>
            </div>
          ))}
        </div>
        <div>
          <p className={s.groupLabel}>Checkboxes</p>
          {['UX Research', 'Visual Design', 'Prototyping'].map((l, i) => (
            <label key={l} className={s.checkRow}>
              <span className={`${s.checkbox} ${checks[i] ? s.checkboxOn : ''}`}>
                {checks[i] && <svg width="10" height="8" viewBox="0 0 10 8"><polyline points="1,4 4,7 9,1" stroke="white" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>}
              </span>
              <input type="checkbox" checked={checks[i]} onChange={() => toggleCheck(i)} className={s.hiddenInput} />
              {l}
            </label>
          ))}
        </div>
      </div>
    </Section>
  )
}

function Badges() {
  return (
    <Section id="badges" label="Badges and tags">
      <div className={s.group}>
        <p className={s.groupLabel}>Status badges</p>
        <div className={s.row}>
          {[['badgeDefault','Default'],['badgeSuccess','Success'],['badgeWarning','Warning'],['badgeDanger','Error'],['badgeInfo','Info']].map(([cls, label]) => (
            <span key={label} className={`${s.badge} ${s[cls]}`}>{label}</span>
          ))}
        </div>
      </div>
      <div className={s.divider} />
      <div className={s.group}>
        <p className={s.groupLabel}>Pill tags</p>
        <div className={s.row}>
          {['UX Research','Figma','Prototyping','Visual Design','Accessibility','React'].map(t => (
            <span key={t} className={s.tag}>{t}</span>
          ))}
        </div>
      </div>
    </Section>
  )
}

const LINE = { Red:'#ED1C24', Orange:'#F5A623', Yellow:'#FFD520', Green:'#4DB848', Blue:'#0099CD' }

function DepartureRows() {
  const deps = [
    { line:'Red',    dest:'Richmond',  plat:1, min:3  },
    { line:'Orange', dest:'Berryessa', plat:2, min:6  },
    { line:'Red',    dest:'Millbrae',  plat:1, min:12 },
    { line:'Yellow', dest:'Antioch',   plat:2, min:18 },
  ]
  return (
    <Section id="departures" label="Departure rows" note="Real-time transit row pattern from the BART redesign.">
      <div className={s.depList}>
        {deps.map(d => (
          <div key={d.dest} className={s.depRow}>
            <span className={s.depLine} style={{ background: LINE[d.line] }} />
            <div className={s.depInfo}>
              <span className={s.depRoute}>{d.line} to {d.dest}</span>
              <span className={s.depPlat}>Platform {d.plat}</span>
            </div>
            <span className={s.depMin} style={{ color: d.min <= 5 ? '#C17F3E' : 'var(--muted)' }}>{d.min} min</span>
          </div>
        ))}
      </div>
    </Section>
  )
}

function Cards() {
  const [saved, setSaved] = useState([false, false, false])
  const toggle = i => setSaved(prev => prev.map((v, j) => j === i ? !v : v))
  const cards = [
    { label:'UX Research', title:'Diary study: recipe apps', desc:'18 participants tracked every meal decision over a week.' },
    { label:'Visual Design', title:'Warm palette system', desc:'A color system with no true grays - every neutral has warmth.' },
    { label:'Brand', title:'Wordmark exploration', desc:'Twelve logotype directions. Set in four type families. Kept three.' },
  ]
  return (
    <Section id="cards" label="Cards" note="Hover to lift. Bookmark toggles saved state.">
      <div className={s.cardGrid}>
        {cards.map((c, i) => (
          <div key={c.title} className={s.card}>
            <div className={s.cardTop}>
              <span className={s.cardTagLabel}>{c.label}</span>
              <button className={`${s.bookmarkBtn} ${saved[i] ? s.bookmarkOn : ''}`} onClick={() => toggle(i)}>
                <svg width="13" height="15" viewBox="0 0 13 15"><path d="M1 1h11v12.5l-5.5-3.2L1 13.5V1z" stroke="currentColor" strokeWidth="1.5" fill={saved[i] ? 'currentColor' : 'none'} /></svg>
              </button>
            </div>
            <h3 className={s.cardTitle}>{c.title}</h3>
            <p className={s.cardDesc}>{c.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}

function Notifications() {
  const [toasts, setToasts] = useState([])
  const [count, setCount] = useState(0)
  const variants = [
    { type:'success', msg:'Changes saved.' },
    { type:'warning', msg:'This cannot be undone.' },
    { type:'error',   msg:'Something went wrong.' },
    { type:'info',    msg:'A new version is ready.' },
  ]
  const fire = v => {
    const id = count; setCount(c => c + 1)
    setToasts(t => [...t, { id, ...v }])
    setTimeout(() => setToasts(t => t.filter(x => x.id !== id)), 3000)
  }
  const icons = { success:'✓', warning:'⚠', error:'✕', info:'i' }
  return (
    <Section id="notifications" label="Notifications" note="Click to fire. Auto-dismisses after 3 seconds.">
      <div className={s.row}>
        {variants.map(v => (
          <button key={v.type} className={`${s.btn} ${s.btnGhost}`} onClick={() => fire(v)}>
            {v.type.charAt(0).toUpperCase() + v.type.slice(1)}
          </button>
        ))}
      </div>
      <div className={s.toastStack}>
        {toasts.map(t => (
          <div key={t.id} className={`${s.toast} ${s[`toast_${t.type}`]}`}>
            <span className={s.toastIcon}>{icons[t.type]}</span>
            <span className={s.toastMsg}>{t.msg}</span>
            <button className={s.toastClose} onClick={() => setToasts(ts => ts.filter(x => x.id !== t.id))}>✕</button>
          </div>
        ))}
      </div>
    </Section>
  )
}

function Avatars() {
  const colors = ['#C17F3E','#27567b','#6B8F6E','#7B6FA0','#b63b3b']
  const initials = ['TD','AB','JK','MR','SP']
  return (
    <Section id="avatars" label="Avatars">
      <div className={s.group}>
        <p className={s.groupLabel}>Size scale</p>
        <div className={s.row} style={{ alignItems:'center' }}>
          {['xl','lg','md','sm','xs'].map((sz, i) => (
            <div key={sz} className={`${s.avatar} ${s[`avatar_${sz}`]}`} style={{ background: colors[i] }}>TD</div>
          ))}
        </div>
      </div>
      <div className={s.divider} />
      <div className={s.group}>
        <p className={s.groupLabel}>Group with overflow</p>
        <div className={s.avatarGroup}>
          {initials.map((init, i) => (
            <div key={init} className={`${s.avatar} ${s.avatar_md} ${s.avatarOverlap}`} style={{ background: colors[i], zIndex: initials.length - i }}>{init}</div>
          ))}
          <div className={`${s.avatar} ${s.avatar_md} ${s.avatarOverlap} ${s.avatarMore}`}>+4</div>
        </div>
      </div>
    </Section>
  )
}

function Progress() {
  const [pct, setPct] = useState(62)
  return (
    <Section id="progress" label="Progress" note="Drag the slider to update both indicators live.">
      <div className={s.progressWrap}>
        <div className={s.progressTrack}><div className={s.progressFill} style={{ width:`${pct}%` }} /></div>
        <div className={s.row} style={{ alignItems:'center', gap:24, marginTop:20 }}>
          <svg width="56" height="56" viewBox="0 0 56 56" style={{ flexShrink:0 }}>
            <circle cx="28" cy="28" r="22" fill="none" stroke="#E8DFD0" strokeWidth="5"/>
            <circle cx="28" cy="28" r="22" fill="none" stroke="#C17F3E" strokeWidth="5"
              strokeDasharray={`${2*Math.PI*22}`}
              strokeDashoffset={`${2*Math.PI*22*(1-pct/100)}`}
              strokeLinecap="round" transform="rotate(-90 28 28)"
              style={{ transition:'stroke-dashoffset 0.25s' }}
            />
            <text x="28" y="33" textAnchor="middle" fontSize="11" fontWeight="700" fill="#2b2b2b" fontFamily="monospace">{pct}%</text>
          </svg>
          <input type="range" min={0} max={100} value={pct} onChange={e => setPct(Number(e.target.value))} className={s.slider} style={{ flex:1 }} />
        </div>
      </div>
    </Section>
  )
}

const NAV = [
  { id:'buttons',       label:'Buttons' },
  { id:'inputs',        label:'Form inputs' },
  { id:'tabs',          label:'Tabs' },
  { id:'chips',         label:'Filter chips' },
  { id:'toggles',       label:'Toggles' },
  { id:'badges',        label:'Badges' },
  { id:'departures',    label:'Departure rows' },
  { id:'cards',         label:'Cards' },
  { id:'notifications', label:'Notifications' },
  { id:'avatars',       label:'Avatars' },
  { id:'progress',      label:'Progress' },
]

function Sidebar({ active }) {
  const scrollTo = id => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior:'smooth', block:'start' })
  }
  return (
    <nav className={s.sidebar}>
      <p className={s.sidebarTitle}>Components</p>
      {NAV.map(n => (
        <button key={n.id} className={`${s.navItem} ${active === n.id ? s.navItemActive : ''}`} onClick={() => scrollTo(n.id)}>
          {n.label}
        </button>
      ))}
    </nav>
  )
}

export default function ComponentLibrary() {
  const [activeSection, setActiveSection] = useState('buttons')

  useEffect(() => {
    window.scrollTo(0, 0)
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id) }),
      { rootMargin:'-40% 0px -55% 0px' }
    )
    NAV.forEach(n => {
      const el = document.getElementById(n.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <main className={s.page}>
      <div className="container">
        <div className={s.pageHeader}>
          <Link to="/playground" className={s.back}>← Playground</Link>
          <h1 className={s.title}>Component Library</h1>
          <p className={s.sub}>Interactive UI components - all states are live. Includes patterns from previous case studies and designs.</p>
        </div>
        <div className={s.layout}>
          <Sidebar active={activeSection} />
          <div className={s.content}>
            <Buttons />
            <Inputs />
            <Tabs />
            <FilterChips />
            <Toggles />
            <Badges />
            <DepartureRows />
            <Cards />
            <Notifications />
            <Avatars />
            <Progress />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
