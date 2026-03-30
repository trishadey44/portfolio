import { useState } from 'react'
import s from './HearthMockup.module.css'

const SCREENS = ['Life View', 'Kanban', 'Card Detail', 'Life Planning', 'AI Assist', 'Quick Add']

const LIFE_AREAS = [
  { id: 'work',     label: 'Work',           color: '#27567b', icon: '💼', cards: 8,  done: 3 },
  { id: 'health',   label: 'Health',         color: '#6B8F6E', icon: '🏃', cards: 5,  done: 2 },
  { id: 'home',     label: 'Home',           color: '#C17F3E', icon: '🏠', cards: 6,  done: 4 },
  { id: 'creative', label: 'Creative',       color: '#7B6FA0', icon: '🎨', cards: 4,  done: 1 },
  { id: 'personal', label: 'Personal Goals', color: '#b63b3b', icon: '⭐', cards: 7,  done: 2 },
]

const KANBAN_CARDS = {
  todo: [
    { id: 1, title: 'Redesign portfolio case studies', area: 'Work', areaColor: '#27567b', goal: 'Get new job by Q3', priority: 'High' },
    { id: 2, title: 'Plan Yosemite climbing trip', area: 'Personal Goals', areaColor: '#b63b3b', goal: 'Do 3 outdoor adventures', priority: 'Medium' },
    { id: 3, title: 'Replace kitchen faucet', area: 'Home', areaColor: '#C17F3E', goal: 'Home improvements', priority: 'Low' },
  ],
  inProgress: [
    { id: 4, title: 'Figma component audit', area: 'Work', areaColor: '#27567b', goal: 'Ship design system v2', priority: 'High' },
    { id: 5, title: 'Run 3x per week', area: 'Health', areaColor: '#6B8F6E', goal: 'Half marathon in October', priority: 'High' },
  ],
  done: [
    { id: 6, title: 'Update LinkedIn profile', area: 'Work', areaColor: '#27567b', goal: 'Get new job by Q3', priority: 'Medium' },
    { id: 7, title: 'Meal prep Sundays', area: 'Health', areaColor: '#6B8F6E', goal: 'Eat better', priority: 'Low' },
  ],
}

// Shared sidebar
function Sidebar({ active, onNav }) {
  const navItems = [
    { id: 'Life View',     icon: '⊞', label: 'Life View' },
    { id: 'Kanban',        icon: '▤',  label: 'Boards' },
    { id: 'Life Planning', icon: '◎',  label: 'Goals' },
    { id: 'AI Assist',     icon: '✦',  label: 'AI Assist' },
  ]
  return (
    <div className={s.sidebar}>
      <div className={s.sidebarLogo}>
        <span className={s.logoFlame}>🔥</span>
        <span className={s.logoName}>hearth</span>
      </div>
      <nav className={s.sidebarNav}>
        {navItems.map(n => (
          <button key={n.id} className={`${s.navItem} ${active === n.id ? s.navActive : ''}`} onClick={() => onNav(n.id)}>
            <span className={s.navIcon}>{n.icon}</span>
            <span className={s.navLabel}>{n.label}</span>
          </button>
        ))}
      </nav>
      <div className={s.sidebarAreas}>
        <span className={s.sidebarSectionLabel}>My Areas</span>
        {LIFE_AREAS.map(a => (
          <button key={a.id} className={s.areaItem} onClick={() => onNav('Kanban')}>
            <span className={s.areaIcon}>{a.icon}</span>
            <span className={s.areaLabel}>{a.label}</span>
            <span className={s.areaBadge} style={{ background: a.color + '22', color: a.color }}>{a.cards}</span>
          </button>
        ))}
      </div>
      <div className={s.sidebarBottom}>
        <div className={s.userRow}>
          <div className={s.userAvatar}>T</div>
          <div className={s.userInfo}>
            <span className={s.userName}>Trisha</span>
            <span className={s.userPlan}>Pro</span>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Life View ─────────────────────────────────────────────────
function LifeView({ onNav }) {
  return (
    <div className={s.screen}>
      <div className={s.screenHeader}>
        <div>
          <h2 className={s.screenTitle}>Your Life at a Glance</h2>
          <p className={s.screenSub}>Wednesday, March 19 · 30 open cards across 5 areas</p>
        </div>
        <button className={s.addBtn} onClick={() => onNav('Quick Add')}>+ Add card</button>
      </div>
      <div className={s.lifeGrid}>
        {LIFE_AREAS.map(area => (
          <div key={area.id} className={s.areaCard} onClick={() => onNav('Kanban')} style={{ '--area-color': area.color }}>
            <div className={s.areaCardHeader}>
              <span className={s.areaCardIcon}>{area.icon}</span>
              <span className={s.areaCardLabel}>{area.label}</span>
              <span className={s.areaCardCount} style={{ color: area.color }}>{area.cards} cards</span>
            </div>
            <div className={s.areaProgress}>
              <div className={s.areaProgressBar}>
                <div className={s.areaProgressFill} style={{ width: `${(area.done / area.cards) * 100}%`, background: area.color }} />
              </div>
              <span className={s.areaProgressLabel}>{area.done}/{area.cards} done</span>
            </div>
            <div className={s.areaCardTasks}>
              {KANBAN_CARDS.inProgress.filter(c => c.area === area.label || c.areaColor === area.color).slice(0, 1).map(c => (
                <div key={c.id} className={s.areaTaskRow}>
                  <span className={s.areaTaskDot} style={{ background: area.color }} />
                  <span className={s.areaTaskTitle}>{c.title}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
        {/* AI nudge card */}
        <div className={s.aiNudgeCard} onClick={() => onNav('AI Assist')}>
          <span className={s.aiNudgeIcon}>✦</span>
          <p className={s.aiNudgeText}>Your <strong>Work</strong> and <strong>Personal Goals</strong> areas share 3 cards. Hearth has a suggested plan.</p>
          <span className={s.aiNudgeLink}>See AI plan →</span>
        </div>
      </div>
    </div>
  )
}

// ── Kanban Board ──────────────────────────────────────────────
function Kanban({ onNav }) {
  const cols = [
    { id: 'todo',       label: 'To Do',       cards: KANBAN_CARDS.todo },
    { id: 'inProgress', label: 'In Progress', cards: KANBAN_CARDS.inProgress },
    { id: 'done',       label: 'Done',        cards: KANBAN_CARDS.done },
  ]
  return (
    <div className={s.screen}>
      <div className={s.screenHeader}>
        <div>
          <h2 className={s.screenTitle}>All Boards</h2>
          <p className={s.screenSub}>Showing all areas · 15 cards</p>
        </div>
        <div className={s.boardFilters}>
          {LIFE_AREAS.slice(0, 3).map(a => (
            <span key={a.id} className={s.filterChip} style={{ background: a.color + '18', color: a.color }}>{a.icon} {a.label}</span>
          ))}
          <span className={s.filterChip} style={{ background: 'var(--h-hover)', color: 'var(--h-muted)' }}>+2 more</span>
        </div>
      </div>
      <div className={s.kanbanBoard}>
        {cols.map(col => (
          <div key={col.id} className={s.kanbanCol}>
            <div className={s.colHeader}>
              <span className={s.colTitle}>{col.label}</span>
              <span className={s.colCount}>{col.cards.length}</span>
            </div>
            <div className={s.cardStack}>
              {col.cards.map(card => (
                <div key={card.id} className={s.kanbanCard} onClick={() => onNav('Card Detail')}>
                  <div className={s.kanbanCardTop}>
                    <span className={s.kanbanCardArea} style={{ background: card.areaColor + '18', color: card.areaColor }}>{card.area}</span>
                    <span className={s.kanbanCardPriority} style={{ color: card.priority === 'High' ? '#b63b3b' : card.priority === 'Medium' ? '#C17F3E' : '#6B8F6E' }}>
                      {card.priority}
                    </span>
                  </div>
                  <p className={s.kanbanCardTitle}>{card.title}</p>
                  <div className={s.kanbanCardGoal}>
                    <span className={s.goalIcon}>◎</span>
                    <span className={s.goalText}>{card.goal}</span>
                  </div>
                </div>
              ))}
              <button className={s.addCardBtn}>+ Add card</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── Card Detail ───────────────────────────────────────────────
function CardDetail({ onNav }) {
  const [tab, setTab] = useState('notes')
  return (
    <div className={s.screen}>
      <div className={s.cardDetailLayout}>
        <div className={s.cardDetailMain}>
          <div className={s.cardDetailHeader}>
            <button className={s.backBtn} onClick={() => onNav('Kanban')}>← Back to board</button>
            <div className={s.cardDetailStatus}>
              <span className={s.statusPill} style={{ background: '#27567b18', color: '#27567b' }}>In Progress</span>
              <span className={s.statusPill} style={{ background: '#f9c41418', color: '#C17F3E' }}>High priority</span>
            </div>
          </div>
          <h2 className={s.cardDetailTitle}>Figma component audit</h2>
          <div className={s.cardDetailMeta}>
            <span className={s.metaChip} style={{ background: '#27567b18', color: '#27567b' }}>💼 Work</span>
            <span className={s.metaChip} style={{ background: '#6B8F6E18', color: '#6B8F6E' }}>◎ Ship design system v2</span>
          </div>

          {/* Tabs */}
          <div className={s.cardTabs}>
            {['notes', 'subtasks', 'ai plan'].map(t => (
              <button key={t} className={`${s.cardTab} ${tab === t ? s.cardTabActive : ''}`} onClick={() => setTab(t)}>
                {t === 'ai plan' ? '✦ AI Plan' : t.charAt(0).toUpperCase() + t.slice(1)}
              </button>
            ))}
          </div>

          {tab === 'notes' && (
            <div className={s.cardNotes}>
              <p className={s.noteText}>Audit all components in the current Figma library. Goal is to identify duplicates, outdated patterns, and anything not in the token system yet.</p>
              <p className={s.noteText}>Start with navigation components - those are the most inconsistent across the 4 product areas.</p>
              <div className={s.noteTag}>Last edited 2 hours ago</div>
            </div>
          )}

          {tab === 'subtasks' && (
            <div className={s.subtasks}>
              {[
                { done: true,  text: 'Export all components from Figma' },
                { done: true,  text: 'Build comparison spreadsheet' },
                { done: false, text: 'Identify duplicate patterns (est. 40+)' },
                { done: false, text: 'Map components to token system' },
                { done: false, text: 'Write deprecation recommendations' },
                { done: false, text: 'Present findings to team' },
              ].map((t, i) => (
                <div key={i} className={s.subtaskRow}>
                  <span className={`${s.subtaskCheck} ${t.done ? s.subtaskDone : ''}`}>{t.done ? '✓' : ''}</span>
                  <span className={s.subtaskText} style={{ opacity: t.done ? 0.45 : 1, textDecoration: t.done ? 'line-through' : 'none' }}>{t.text}</span>
                </div>
              ))}
            </div>
          )}

          {tab === 'ai plan' && (
            <div className={s.aiPlanTab}>
              <div className={s.aiPlanHeader}>
                <span className={s.aiPlanIcon}>✦</span>
                <span className={s.aiPlanLabel}>Hearth suggests</span>
              </div>
              <p className={s.aiPlanIntro}>Based on your goal to ship design system v2, here is a suggested approach for this audit:</p>
              {[
                { step: '1', text: 'Timebox the audit to 2 days max - start with navigation and forms only', tag: 'Focus' },
                { step: '2', text: 'Use the 80/20 rule: fix the 20% of patterns causing 80% of inconsistency', tag: 'Strategy' },
                { step: '3', text: 'This connects to your "Portfolio case studies" card - the audit findings could be a case study', tag: 'Connection' },
              ].map((s2, i) => (
                <div key={i} className={s.aiSuggestion}>
                  <span className={s.aiStepNum}>{s2.step}</span>
                  <div className={s.aiSuggestionBody}>
                    <p className={s.aiSuggestionText}>{s2.text}</p>
                    <span className={s.aiSuggestionTag}>{s2.tag}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right sidebar */}
        <div className={s.cardDetailSidebar}>
          <div className={s.sidebarSection}>
            <span className={s.sidebarSectionLabel}>Linked Goal</span>
            <div className={s.linkedGoal}>
              <span className={s.linkedGoalIcon} style={{ color: '#27567b' }}>◎</span>
              <span className={s.linkedGoalText}>Ship design system v2</span>
            </div>
          </div>
          <div className={s.sidebarSection}>
            <span className={s.sidebarSectionLabel}>Due date</span>
            <span className={s.sidebarValue}>April 15, 2025</span>
          </div>
          <div className={s.sidebarSection}>
            <span className={s.sidebarSectionLabel}>Area</span>
            <span className={s.sidebarValue} style={{ color: '#27567b' }}>💼 Work</span>
          </div>
          <div className={s.sidebarSection}>
            <span className={s.sidebarSectionLabel}>Related cards</span>
            <div className={s.relatedCards}>
              {['Redesign portfolio case studies', 'Update LinkedIn profile'].map((t, i) => (
                <div key={i} className={s.relatedCard}>{t}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Life Planning (Goals) ─────────────────────────────────────
function LifePlanning({ onNav }) {
  const goals = [
    { title: 'Get new job by Q3 2025', area: 'Work', color: '#27567b', icon: '💼', progress: 35, cards: 4 },
    { title: 'Run a half marathon in October', area: 'Health', color: '#6B8F6E', icon: '🏃', progress: 60, cards: 3 },
    { title: 'Do 3 outdoor adventures this year', area: 'Personal', color: '#b63b3b', icon: '⭐', progress: 33, cards: 2 },
    { title: 'Ship design system v2', area: 'Work', color: '#27567b', icon: '💼', progress: 50, cards: 5 },
    { title: 'Learn to cook 10 new recipes', area: 'Home', color: '#C17F3E', icon: '🏠', progress: 20, cards: 2 },
  ]
  return (
    <div className={s.screen}>
      <div className={s.screenHeader}>
        <div>
          <h2 className={s.screenTitle}>Goals and Planning</h2>
          <p className={s.screenSub}>5 active goals · 2025</p>
        </div>
        <button className={s.addBtn}>+ New goal</button>
      </div>
      <div className={s.goalsList}>
        {goals.map((g, i) => (
          <div key={i} className={s.goalRow} onClick={() => onNav('Kanban')}>
            <div className={s.goalRowLeft}>
              <span className={s.goalAreaIcon}>{g.icon}</span>
              <div className={s.goalRowInfo}>
                <span className={s.goalRowTitle}>{g.title}</span>
                <span className={s.goalRowArea} style={{ color: g.color }}>{g.area}</span>
              </div>
            </div>
            <div className={s.goalRowRight}>
              <span className={s.goalCardCount}>{g.cards} cards</span>
              <div className={s.goalBarWrap}>
                <div className={s.goalBar}>
                  <div className={s.goalBarFill} style={{ width: `${g.progress}%`, background: g.color }} />
                </div>
                <span className={s.goalPercent} style={{ color: g.color }}>{g.progress}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={s.planningFooter} onClick={() => onNav('AI Assist')}>
        <span className={s.planningFooterIcon}>✦</span>
        <p className={s.planningFooterText}>Hearth can help you break any goal into a set of cards and a suggested timeline. Try it →</p>
      </div>
    </div>
  )
}

// ── AI Assist ─────────────────────────────────────────────────
function AIAssist({ onNav }) {
  const [expanded, setExpanded] = useState(null)
  const suggestions = [
    {
      id: 0,
      type: 'Plan',
      title: 'Break down "Get new job by Q3" into weekly actions',
      preview: 'You have a goal but only 4 cards. Hearth can generate a full 12-week plan.',
      detail: ['Week 1–2: Audit and update portfolio case studies', 'Week 3–4: Reach out to 10 people in target companies', 'Week 5–6: Apply to 15 roles with customised cover letters', 'Week 7+: Interview prep and follow-ups'],
    },
    {
      id: 1,
      type: 'Connection',
      title: 'Your Work and Personal Goals areas are more connected than you think',
      preview: '3 of your personal goal cards could double as portfolio pieces.',
      detail: ['Climbing trip → endurance and challenge narrative', 'Cooking project → creativity and learning mindset', 'Half marathon → discipline and long-term planning'],
    },
    {
      id: 2,
      type: 'Suggestion',
      title: 'You have 5 high-priority cards but no due dates',
      preview: 'Hearth recommends setting soft deadlines to create momentum.',
      detail: ['Figma component audit → suggest April 15', 'Portfolio case studies → suggest April 30', 'Yosemite planning → suggest May 1'],
    },
  ]
  return (
    <div className={s.screen}>
      <div className={s.screenHeader}>
        <div>
          <h2 className={s.screenTitle}>✦ AI Assist</h2>
          <p className={s.screenSub}>Hearth has 3 suggestions based on your boards</p>
        </div>
      </div>
      <div className={s.aiAssistList}>
        {suggestions.map(sg => (
          <div key={sg.id} className={s.aiAssistCard}>
            <div className={s.aiAssistCardTop} onClick={() => setExpanded(expanded === sg.id ? null : sg.id)}>
              <span className={s.aiAssistType} style={{ color: sg.type === 'Plan' ? '#27567b' : sg.type === 'Connection' ? '#6B8F6E' : '#C17F3E' }}>{sg.type}</span>
              <p className={s.aiAssistTitle}>{sg.title}</p>
              <p className={s.aiAssistPreview}>{sg.preview}</p>
              <span className={s.aiAssistToggle}>{expanded === sg.id ? '↑ Hide' : '↓ Show plan'}</span>
            </div>
            {expanded === sg.id && (
              <div className={s.aiAssistDetail}>
                {sg.detail.map((d, i) => (
                  <div key={i} className={s.aiDetailRow}>
                    <span className={s.aiDetailBullet}>→</span>
                    <span className={s.aiDetailText}>{d}</span>
                  </div>
                ))}
                <button className={s.aiAcceptBtn} onClick={() => onNav('Kanban')}>Add these as cards →</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

// ── Quick Add ─────────────────────────────────────────────────
function QuickAdd({ onNav }) {
  return (
    <div className={s.screen}>
      <div className={s.quickAddOverlay}>
        <div className={s.quickAddModal}>
          <div className={s.quickAddTop}>
            <span className={s.quickAddLabel}>Add a card</span>
            <span className={s.quickAddClose} onClick={() => onNav('Life View')}>✕</span>
          </div>
          <input className={s.quickAddInput} defaultValue="Plan Yosemite trip for September" />
          <div className={s.quickAddRow}>
            <div className={s.quickAddField}>
              <span className={s.quickAddFieldLabel}>Area</span>
              <span className={s.quickAddFieldValue} style={{ color: '#b63b3b' }}>⭐ Personal Goals</span>
            </div>
            <div className={s.quickAddField}>
              <span className={s.quickAddFieldLabel}>Priority</span>
              <span className={s.quickAddFieldValue} style={{ color: '#C17F3E' }}>Medium</span>
            </div>
          </div>
          <div className={s.quickAddRow}>
            <div className={s.quickAddField}>
              <span className={s.quickAddFieldLabel}>Linked goal</span>
              <span className={s.quickAddFieldValue} style={{ color: '#b63b3b' }}>◎ 3 outdoor adventures</span>
            </div>
            <div className={s.quickAddField}>
              <span className={s.quickAddFieldLabel}>Due date</span>
              <span className={s.quickAddFieldValue}>Aug 15</span>
            </div>
          </div>
          <div className={s.aiAutoSuggest}>
            <span className={s.aiAutoIcon}>✦</span>
            <span className={s.aiAutoText}>Hearth can break this into subtasks - want a suggested plan?</span>
            <span className={s.aiAutoLink}>Yes →</span>
          </div>
          <div className={s.quickAddFooter}>
            <button className={s.quickAddCancel} onClick={() => onNav('Life View')}>Cancel</button>
            <button className={s.quickAddSave} onClick={() => onNav('Kanban')}>Add to board →</button>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Main Mockup ───────────────────────────────────────────────
export default function HearthMockup() {
  const [active, setActive] = useState('Life View')

  const screenMap = {
    'Life View':     <LifeView     onNav={setActive} />,
    'Kanban':        <Kanban       onNav={setActive} />,
    'Card Detail':   <CardDetail   onNav={setActive} />,
    'Life Planning': <LifePlanning onNav={setActive} />,
    'AI Assist':     <AIAssist     onNav={setActive} />,
    'Quick Add':     <QuickAdd     onNav={setActive} />,
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
      <div className={s.window}>
        <div className={s.windowChrome}>
          <div className={s.trafficLights}>
            <span className={s.dot} style={{ background: '#FF5F57' }} />
            <span className={s.dot} style={{ background: '#FFBD2E' }} />
            <span className={s.dot} style={{ background: '#28CA41' }} />
          </div>
          <span className={s.windowTitle}>hearth - {active.toLowerCase()}</span>
          <div style={{ width: 52 }} />
        </div>
        <div className={s.app}>
          <Sidebar active={active} onNav={setActive} />
          <div className={s.mainArea}>{screenMap[active]}</div>
        </div>
      </div>
    </div>
  )
}
