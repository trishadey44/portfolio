import s from './HearthMobileMockup.module.css'

// Three phone screens shown side by side: Life View, Card Detail, AI Assist

function PhoneShell({ label, children }) {
  return (
    <div className={s.phoneWrap}>
      <div className={s.phone}>
        <div className={s.notch} />
        <div className={s.screen}>{children}</div>
        <div className={s.homeBar} />
      </div>
      <p className={s.phoneLabel}>{label}</p>
    </div>
  )
}

function LifeViewPhone() {
  const areas = [
    { label: 'Work',     color: '#27567b', pct: 0.38, cards: 8 },
    { label: 'Health',   color: '#6B8F6E', pct: 0.60, cards: 5 },
    { label: 'Home',     color: '#C17F3E', pct: 0.72, cards: 6 },
    { label: 'Creative', color: '#7B6FA0', pct: 0.20, cards: 4 },
  ]
  return (
    <div className={s.phoneContent}>
      <div className={s.mHeader}>
        <span className={s.mLogoText}>hearth</span>
        <span className={s.mAddBtn}>+</span>
      </div>
      <p className={s.mSubtitle}>Your life at a glance</p>
      <div className={s.mAreaGrid}>
        {areas.map(a => (
          <div key={a.label} className={s.mAreaCard} style={{ borderTopColor: a.color }}>
            <div className={s.mAreaTop}>
              <span className={s.mAreaLabel}>{a.label}</span>
              <span className={s.mAreaCount} style={{ color: a.color }}>{a.cards}</span>
            </div>
            <div className={s.mProgressBar}>
              <div className={s.mProgressFill} style={{ width: `${a.pct * 100}%`, background: a.color }} />
            </div>
          </div>
        ))}
      </div>
      <div className={s.mAiNudge}>
        <span className={s.mAiStar}>✦</span>
        <p className={s.mAiText}>Work and Personal Goals share 3 tasks</p>
      </div>
    </div>
  )
}

function CardDetailPhone() {
  return (
    <div className={s.phoneContent}>
      <div className={s.mCardHeader}>
        <span className={s.mBack}>‹</span>
        <span className={s.mCardTitle}>Card Detail</span>
      </div>
      <div className={s.mCardBody}>
        <span className={s.mCardArea} style={{ color: '#27567b', background: '#27567b18' }}>Work</span>
        <h3 className={s.mCardName}>Figma component audit</h3>
        <div className={s.mCardMeta}>
          <span className={s.mCardGoal}>◎ Ship design system v2</span>
          <span className={s.mCardStatus} style={{ color: '#27567b', background: '#27567b18' }}>In Progress</span>
        </div>
        <div className={s.mTabs}>
          {['Notes', 'Subtasks', 'AI Plan'].map((t, i) => (
            <span key={t} className={`${s.mTab} ${i === 2 ? s.mTabActive : ''}`}>{t}</span>
          ))}
        </div>
        <div className={s.mAiPlan}>
          <p className={s.mAiPlanHead}>✦ Hearth suggests</p>
          {[
            { n: '1', t: 'Timebox to 2 days. Start with navigation only.' },
            { n: '2', t: 'Fix the 20% of patterns causing 80% of issues first.' },
            { n: '3', t: 'This audit could become a portfolio case study.' },
          ].map(step => (
            <div key={step.n} className={s.mAiStep}>
              <span className={s.mAiStepNum}>{step.n}</span>
              <p className={s.mAiStepText}>{step.t}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function QuickAddPhone() {
  return (
    <div className={s.phoneContent}>
      <div className={s.mCardHeader}>
        <span className={s.mBack}>✕</span>
        <span className={s.mCardTitle}>Add a card</span>
      </div>
      <div className={s.mQuickAdd}>
        <input
          className={s.mQAInput}
          readOnly
          defaultValue="Plan Yosemite trip for September"
        />
        <div className={s.mQARow}>
          <div className={s.mQAField}>
            <span className={s.mQALabel}>Area</span>
            <span className={s.mQAValue} style={{ color: '#b63b3b' }}>Personal Goals</span>
          </div>
          <div className={s.mQAField}>
            <span className={s.mQALabel}>Priority</span>
            <span className={s.mQAValue} style={{ color: '#C17F3E' }}>Medium</span>
          </div>
        </div>
        <div className={s.mQARow}>
          <div className={s.mQAField}>
            <span className={s.mQALabel}>Linked goal</span>
            <span className={s.mQAValue} style={{ color: '#b63b3b' }}>3 outdoor adventures</span>
          </div>
          <div className={s.mQAField}>
            <span className={s.mQALabel}>Due date</span>
            <span className={s.mQAValue}>Aug 15</span>
          </div>
        </div>
        <div className={s.mQAAi}>
          <span style={{ color: '#C17F3E', fontSize: '0.7rem' }}>✦</span>
          <span className={s.mQAAiText}>Want Hearth to suggest subtasks?</span>
          <span className={s.mQAAiLink}>Yes</span>
        </div>
        <button className={s.mQASave}>Add to board</button>
      </div>

      {/* Bottom nav */}
      <div className={s.mBottomNav}>
        {['⊞ Life', '▤ Boards', '◎ Goals', '✦ AI'].map((item, i) => (
          <span key={item} className={`${s.mBnItem} ${i === 0 ? s.mBnActive : ''}`}>{item}</span>
        ))}
      </div>
    </div>
  )
}

export default function HearthMobileMockup() {
  return (
    <div className={s.wrapper}>
      <PhoneShell label="Life View"><LifeViewPhone /></PhoneShell>
      <PhoneShell label="Card Detail"><CardDetailPhone /></PhoneShell>
      <PhoneShell label="Quick Add"><QuickAddPhone /></PhoneShell>
    </div>
  )
}
