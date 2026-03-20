import { useState } from 'react'
import s from './PullMockup.module.css'

const SCREENS = ['Onboarding', 'Your Grid', 'Submit', 'Discover', 'Profile']

// ── Shared nav bar ────────────────────────────────────────────
function NavBar({ active, onNav }) {
  return (
    <div className={s.navbar}>
      <span className={s.navLogo} onClick={() => onNav('Your Grid')}>pull</span>
      <div className={s.navLinks}>
        {[
          { id: 'Your Grid', icon: '⊞' },
          { id: 'Discover',  icon: '◎' },
          { id: 'Submit',    icon: '+' },
          { id: 'Profile',   icon: '○' },
        ].map(n => (
          <button
            key={n.id}
            className={`${s.navBtn} ${active === n.id ? s.navBtnActive : ''} ${n.id === 'Submit' ? s.navBtnSubmit : ''}`}
            onClick={() => onNav(n.id)}
          >
            {n.icon}
          </button>
        ))}
      </div>
    </div>
  )
}

// ── Fake image tiles using CSS gradients ──────────────────────
const PULLS = [
  { id: 1,  bg: 'linear-gradient(135deg,#c9b99a 0%,#a08060 100%)',          label: 'Concrete grain, overpass pillar',       tag: 'texture',  w: 1, h: 2, liked: true  },
  { id: 2,  bg: 'linear-gradient(160deg,#e8e0d4 30%,#bfb09a 100%)',         label: 'Shadow through venetian blind, 4pm',   tag: 'light',    w: 1, h: 1, liked: false },
  { id: 3,  bg: 'linear-gradient(180deg,#6b8a6e 0%,#3d5c40 100%)',          label: 'Specific green of old highway sign',   tag: 'color',    w: 1, h: 1, liked: true  },
  { id: 4,  bg: 'linear-gradient(120deg,#1a1a2e 0%,#3a3a5c 60%,#1a1a2e 100%)', label: 'Font on side of dry cleaning van', tag: 'type',     w: 1, h: 2, liked: false },
  { id: 5,  bg: 'linear-gradient(200deg,#d4c5b0 0%,#b8a898 100%)',          label: 'Worn edge of stone staircase',         tag: 'texture',  w: 1, h: 1, liked: false },
  { id: 6,  bg: 'linear-gradient(90deg,#e8d5b0 0%,#d4b896 50%,#c4a882 100%)', label: 'Afternoon light on plaster wall',   tag: 'light',    w: 2, h: 1, liked: true  },
  { id: 7,  bg: 'linear-gradient(45deg,#2c3e50 0%,#3d5a6e 100%)',           label: 'Reflection in rain puddle',            tag: 'color',    w: 1, h: 1, liked: false },
  { id: 8,  bg: 'linear-gradient(160deg,#c8b8a8 0%,#a09080 100%)',          label: 'Cracked asphalt near drain',           tag: 'texture',  w: 1, h: 1, liked: false },
  { id: 9,  bg: 'linear-gradient(180deg,#e8c87a 0%,#d4a840 100%)',          label: 'Yellow of construction tape',          tag: 'color',    w: 1, h: 2, liked: true  },
]

const DISCOVER_PULLS = [
  { id: 10, bg: 'linear-gradient(135deg,#8B7355 0%,#6B5A3E 100%)',  user: '@margot',   label: 'Rust pattern on fire escape',       tag: 'texture' },
  { id: 11, bg: 'linear-gradient(160deg,#4a6741 0%,#2d4028 100%)',  user: '@j.wolf',   label: 'Moss on north-facing wall',         tag: 'texture' },
  { id: 12, bg: 'linear-gradient(120deg,#c4d4e8 0%,#8aabcc 100%)',  user: '@pita_r',   label: 'Sky between buildings, 6am',        tag: 'light'   },
  { id: 13, bg: 'linear-gradient(45deg,#2d2d2d 0%,#1a1a1a 100%)',   user: '@anon_34',  label: 'Helvetica on utility box',          tag: 'type'    },
  { id: 14, bg: 'linear-gradient(200deg,#e8d0b8 0%,#c8a888 100%)',  user: '@margot',   label: 'Peeling paint, blue underneath',    tag: 'color'   },
  { id: 15, bg: 'linear-gradient(90deg,#a8c4b8 0%,#7aA090 100%)',   user: '@s.chen',   label: 'Specific teal of old tile',         tag: 'color'   },
  { id: 16, bg: 'linear-gradient(135deg,#e8e0d4 0%,#d0c8bc 100%)',  user: '@pita_r',   label: 'Shadow of a bicycle wheel',         tag: 'light'   },
  { id: 17, bg: 'linear-gradient(160deg,#3c3c5a 0%,#2a2a40 100%)',  user: '@j.wolf',   label: 'Neon reflection on wet street',     tag: 'color'   },
  { id: 18, bg: 'linear-gradient(90deg,#c8b090 0%,#b09070 100%)',   user: '@anon_34',  label: 'Worn grip tape on skateboard',      tag: 'texture' },
]

// ── Onboarding ────────────────────────────────────────────────
function Onboarding({ onNav }) {
  const [step, setStep] = useState(0)
  const steps = [
    {
      eyebrow: null,
      headline: 'pull',
      sub: 'Some things stop you for no reason.\nA texture. A shadow. A specific color.\nThis is where you put them.',
      cta: 'What is a pull?',
    },
    {
      eyebrow: 'A pull is not a like.',
      headline: 'It\'s an involuntary thing.',
      sub: 'The worn edge of a staircase. A font on the side of a van. The green of a highway sign at dusk. You didn\'t choose to notice. You just did.',
      examples: [
        { bg: 'linear-gradient(135deg,#c9b99a,#a08060)', cap: 'Concrete grain' },
        { bg: 'linear-gradient(160deg,#1a1a2e,#3a3a5c)', cap: 'Font on a van' },
        { bg: 'linear-gradient(180deg,#6b8a6e,#3d5c40)', cap: 'That green' },
      ],
      cta: 'Sounds right',
    },
    {
      eyebrow: 'Your grid is yours.',
      headline: 'Private by default.\nShared when you\'re ready.',
      sub: 'Nothing you add is public until you say so. No pressure to perform. Just a place to notice.',
      cta: 'Add my first pull →',
    },
  ]
  const current = steps[step]
  return (
    <div className={s.onboarding}>
      <div className={s.onboardingInner}>
        {current.eyebrow && <span className={s.onboardEyebrow}>{current.eyebrow}</span>}
        <h1 className={`${s.onboardHeadline} ${step === 0 ? s.onboardLogo : ''}`}>
          {current.headline}
        </h1>
        <p className={s.onboardSub}>{current.sub}</p>
        {current.examples && (
          <div className={s.onboardExamples}>
            {current.examples.map((e, i) => (
              <div key={i} className={s.onboardExample} style={{ background: e.bg }}>
                <span className={s.onboardExampleCap}>{e.cap}</span>
              </div>
            ))}
          </div>
        )}
        <button
          className={s.onboardCta}
          onClick={() => step < steps.length - 1 ? setStep(step + 1) : onNav('Your Grid')}
        >
          {current.cta}
        </button>
        <div className={s.onboardDots}>
          {steps.map((_, i) => (
            <span key={i} className={`${s.onboardDot} ${i === step ? s.onboardDotActive : ''}`} />
          ))}
        </div>
      </div>
    </div>
  )
}

// ── Your Grid ─────────────────────────────────────────────────
function YourGrid({ onNav }) {
  const [filter, setFilter] = useState('all')
  const tags = ['all', 'texture', 'light', 'color', 'type']
  const filtered = filter === 'all' ? PULLS : PULLS.filter(p => p.tag === filter)

  return (
    <div className={s.screen}>
      <NavBar active="Your Grid" onNav={onNav} />
      <div className={s.gridHeader}>
        <div>
          <h2 className={s.gridTitle}>Your pulls</h2>
          <span className={s.gridCount}>{PULLS.length} things</span>
        </div>
        <div className={s.gridHeaderRight}>
          <span className={s.privateTag}>Private</span>
          <button className={s.shareBtn}>Share grid</button>
        </div>
      </div>
      <div className={s.filterRow}>
        {tags.map(t => (
          <button key={t} className={`${s.filterTag} ${filter === t ? s.filterTagActive : ''}`} onClick={() => setFilter(t)}>
            {t}
          </button>
        ))}
      </div>
      <div className={s.masonryGrid}>
        {filtered.map(pull => (
          <div
            key={pull.id}
            className={`${s.pullTile} ${pull.h === 2 ? s.pullTileTall : ''} ${pull.w === 2 ? s.pullTileWide : ''}`}
            style={{ background: pull.bg }}
          >
            {pull.liked && <div className={s.pullGlow} />}
            <div className={s.pullOverlay}>
              <span className={s.pullLabel}>{pull.label}</span>
              <span className={s.pullTag}>{pull.tag}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── Submit ────────────────────────────────────────────────────
function Submit({ onNav }) {
  const [step, setStep] = useState(0)
  const [tag, setTag] = useState(null)
  return (
    <div className={s.screen}>
      <NavBar active="Submit" onNav={onNav} />
      <div className={s.submitFlow}>
        {step === 0 && (
          <div className={s.submitStep}>
            <div className={s.uploadZone} onClick={() => setStep(1)}>
              <div className={s.uploadPreview} style={{ background: 'linear-gradient(135deg,#d4c5b0 0%,#b8a898 100%)' }}>
                <div className={s.uploadOverlayText}>
                  <span className={s.uploadIcon}>↑</span>
                  <span className={s.uploadLabel}>tap to add something</span>
                </div>
              </div>
            </div>
            <p className={s.submitHint}>What pulled you to this?</p>
          </div>
        )}
        {step === 1 && (
          <div className={s.submitStep}>
            <div className={s.uploadPreview} style={{ background: 'linear-gradient(135deg,#d4c5b0 0%,#b8a898 100%)', borderRadius: 12, marginBottom: 16 }} />
            <div className={s.submitField}>
              <label className={s.submitLabel}>What pulled you to this?</label>
              <input className={s.submitInput} placeholder="optional — even half a thought is fine" defaultValue="the way the worn part catches light differently" />
            </div>
            <div className={s.tagGrid}>
              {['texture', 'light', 'color', 'type', 'shape', 'other'].map(t => (
                <button
                  key={t}
                  className={`${s.tagBtn} ${tag === t ? s.tagBtnActive : ''}`}
                  onClick={() => setTag(t)}
                >{t}</button>
              ))}
            </div>
            <div className={s.submitFooter}>
              <span className={s.submitPrivacyNote}>Added privately · change in settings</span>
              <button className={s.submitCta} onClick={() => { setStep(2) }}>Add to grid →</button>
            </div>
          </div>
        )}
        {step === 2 && (
          <div className={s.submitSuccess}>
            <div className={s.successTile} style={{ background: 'linear-gradient(135deg,#d4c5b0 0%,#b8a898 100%)' }} />
            <p className={s.successText}>Added to your grid.</p>
            <span className={s.successSub}>152 pulls and counting.</span>
            <div className={s.successActions}>
              <button className={s.successBtn} onClick={() => onNav('Your Grid')}>See my grid</button>
              <button className={s.successBtnGhost} onClick={() => setStep(0)}>Add another</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

// ── Discover ──────────────────────────────────────────────────
function Discover({ onNav }) {
  const [filter, setFilter] = useState('all')
  const tags = ['all', 'texture', 'light', 'color', 'type']
  const filtered = filter === 'all' ? DISCOVER_PULLS : DISCOVER_PULLS.filter(p => p.tag === filter)

  return (
    <div className={s.screen}>
      <NavBar active="Discover" onNav={onNav} />
      <div className={s.discoverHeader}>
        <h2 className={s.gridTitle}>What\'s pulling people</h2>
        <p className={s.discoverSub}>From people you follow and beyond</p>
      </div>
      <div className={s.filterRow}>
        {tags.map(t => (
          <button key={t} className={`${s.filterTag} ${filter === t ? s.filterTagActive : ''}`} onClick={() => setFilter(t)}>
            {t}
          </button>
        ))}
      </div>
      <div className={s.discoverGrid}>
        {filtered.map(pull => (
          <div key={pull.id} className={s.discoverTile} style={{ background: pull.bg }} onClick={() => onNav('Profile')}>
            <div className={s.discoverOverlay}>
              <span className={s.discoverUser}>{pull.user}</span>
              <span className={s.discoverLabel}>{pull.label}</span>
              <span className={s.discoverTag}>{pull.tag}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── Profile ───────────────────────────────────────────────────
function Profile({ onNav }) {
  const profilePulls = DISCOVER_PULLS.filter(p => p.user === '@margot')
  return (
    <div className={s.screen}>
      <NavBar active="Profile" onNav={onNav} />
      <div className={s.profileHeader}>
        <div className={s.profileAvatar}>M</div>
        <div className={s.profileInfo}>
          <h2 className={s.profileName}>@margot</h2>
          <p className={s.profileBio}>noticing things since 2025</p>
        </div>
        <button className={s.followBtn}>Follow</button>
      </div>
      <div className={s.profileStats}>
        <div className={s.profileStat}>
          <span className={s.profileStatVal}>47</span>
          <span className={s.profileStatLabel}>pulls</span>
        </div>
        <div className={s.profileStat}>
          <span className={s.profileStatVal}>12</span>
          <span className={s.profileStatLabel}>followers</span>
        </div>
        <div className={s.profileStat}>
          <span className={s.profileStatVal}>texture</span>
          <span className={s.profileStatLabel}>most pulled</span>
        </div>
      </div>
      <div className={s.profileGrid}>
        {DISCOVER_PULLS.slice(0, 6).map(pull => (
          <div key={pull.id} className={s.profileTile} style={{ background: pull.bg }}>
            <div className={s.profileTileOverlay}>
              <span className={s.profileTileTag}>{pull.tag}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── Main mockup ───────────────────────────────────────────────
export default function PullMockup() {
  const [active, setActive] = useState('Onboarding')

  const screenMap = {
    'Onboarding': <Onboarding onNav={setActive} />,
    'Your Grid':  <YourGrid   onNav={setActive} />,
    'Submit':     <Submit     onNav={setActive} />,
    'Discover':   <Discover   onNav={setActive} />,
    'Profile':    <Profile    onNav={setActive} />,
  }

  return (
    <div className={s.wrapper}>
      <div className={s.screenTabs}>
        {SCREENS.map(sc => (
          <button key={sc} className={`${s.screenTab} ${active === sc ? s.screenTabActive : ''}`} onClick={() => setActive(sc)}>
            {sc}
          </button>
        ))}
      </div>
      <div className={s.browser}>
        <div className={s.browserChrome}>
          <div className={s.trafficLights}>
            <span className={s.dot} style={{ background: '#FF5F57' }} />
            <span className={s.dot} style={{ background: '#FFBD2E' }} />
            <span className={s.dot} style={{ background: '#28CA41' }} />
          </div>
          <div className={s.addressBar}>pull.app/{active === 'Your Grid' ? 'grid' : active === 'Submit' ? 'add' : active === 'Profile' ? '@margot' : active.toLowerCase()}</div>
          <div style={{ width: 52 }} />
        </div>
        <div className={s.browserBody}>
          {screenMap[active]}
        </div>
      </div>
    </div>
  )
}
