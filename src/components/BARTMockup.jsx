import { useState } from 'react'
import s from './BARTMockup.module.css'

const SCREENS = ['Home', 'Stations', 'Station Detail', 'Plan a Trip', 'Trip Results', 'Accessibility']

const LINE = {
  Red:    '#ED1C24',
  Orange: '#F5A623',
  Yellow: '#FFD520',
  Green:  '#4DB848',
  Blue:   '#0099CD',
  Beige:  '#C4A47C',
}

const STATIONS = [
  { name: 'Downtown Berkeley',    lines: ['Orange','Red'],           elevator: 'OK',  dist: '0.2 mi' },
  { name: 'MacArthur',           lines: ['Orange','Yellow','Red'],  elevator: 'OK',  dist: '1.1 mi' },
  { name: '12th St. Oakland',    lines: ['Orange','Yellow','Red'],  elevator: 'OK',  dist: '2.4 mi' },
  { name: '16th St. Mission',    lines: ['Yellow','Green','Blue','Red'], elevator: 'OUT', dist: '5.8 mi' },
  { name: 'Balboa Park',         lines: ['Yellow','Green','Blue','Red'], elevator: 'OUT', dist: '8.1 mi' },
  { name: 'Montgomery St.',      lines: ['Yellow','Green','Blue','Red'], elevator: 'OK',  dist: '6.2 mi' },
  { name: 'Powell St.',          lines: ['Yellow','Green','Blue','Red'], elevator: 'OUT', dist: '6.5 mi' },
  { name: 'South San Francisco', lines: ['Yellow','Red'],           elevator: 'OK',  dist: '9.2 mi' },
  { name: 'West Oakland',        lines: ['Yellow','Green','Blue','Red'], elevator: 'OK',  dist: '3.3 mi' },
]

function LineDot({ line, small }) {
  return <span className={small ? s.dotSmall : s.dot} style={{ background: LINE[line] }} />
}

function ElevStatus({ status }) {
  return (
    <span className={s.elevStatus} style={{ color: status === 'OK' ? LINE.Green : LINE.Red }}>
      {status === 'OK' ? '↑ Elevator OK' : '⚠ Elevator Out'}
    </span>
  )
}

// ── Bottom Nav ────────────────────────────────────────────────
function BottomNav({ active, onNav }) {
  const tabs = [
    { id: 'Home',        icon: '⌂',  label: 'Home' },
    { id: 'Stations',    icon: '◉',  label: 'Stations' },
    { id: 'Plan a Trip', icon: '↗',  label: 'Plan' },
    { id: 'Accessibility', icon: '♿', label: 'Access' },
  ]
  return (
    <div className={s.bottomNav}>
      {tabs.map(t => (
        <button key={t.id} className={`${s.bnItem} ${active === t.id ? s.bnActive : ''}`} onClick={() => onNav(t.id)}>
          <span className={s.bnIcon}>{t.icon}</span>
          <span className={s.bnLabel}>{t.label}</span>
        </button>
      ))}
    </div>
  )
}

// ── Home ──────────────────────────────────────────────────────
function HomeScreen({ onNav }) {
  const favs = [
    { name: 'Downtown Berkeley', lines: ['Orange','Red'], elevator: 'OK',
      deps: [{ line: 'Red', dest: 'Richmond', min: 3, plat: 1 }, { line: 'Orange', dest: 'Berryessa', min: 6, plat: 2 }, { line: 'Red', dest: 'Millbrae', min: 12, plat: 1 }] },
    { name: 'South San Francisco', lines: ['Yellow','Red'], elevator: 'OK',
      deps: [{ line: 'Yellow', dest: 'Antioch', min: 4, plat: 1 }, { line: 'Red', dest: 'Richmond', min: 9, plat: 2 }] },
  ]
  return (
    <div className={s.screen}>
      <div className={s.homeHeader}>
        <div>
          <p className={s.homeTime}>Thu 5:32 PM</p>
          <h2 className={s.homeTitle}>Good evening</h2>
        </div>
        <div className={s.bartLogo}>b<span>a</span></div>
      </div>

      {/* Alert banner */}
      <div className={s.alertBanner}>
        <span className={s.alertIcon}>⚠</span>
        <div>
          <p className={s.alertTitle}>Service Alert</p>
          <p className={s.alertBody}>Delays of up to 10 min on all lines</p>
        </div>
        <span className={s.alertChev}>›</span>
      </div>

      {/* Favorites */}
      <div className={s.section}>
        <div className={s.sectionHeader}>
          <span className={s.sectionLabel}>Favorites</span>
          <span className={s.sectionLink} onClick={() => onNav('Stations')}>Edit</span>
        </div>
        {favs.map((fav, i) => (
          <div key={i} className={s.favCard} onClick={() => onNav('Station Detail')}>
            <div className={s.favCardTop}>
              <div>
                <p className={s.favName}>{fav.name}</p>
                <div className={s.favLines}>
                  {fav.lines.map(l => <LineDot key={l} line={l} />)}
                  <ElevStatus status={fav.elevator} />
                </div>
              </div>
              <span className={s.favStar}>★</span>
            </div>
            <div className={s.depList}>
              {fav.deps.map((d, j) => (
                <div key={j} className={s.depRow}>
                  <LineDot line={d.line} small />
                  <span className={s.depText}>{d.line} → {d.dest}</span>
                  <span className={s.depMin} style={{ color: d.min <= 5 ? LINE.Yellow : 'rgba(255,255,255,0.7)' }}>
                    {d.min} min
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* BART map teaser */}
      <div className={s.section}>
        <div className={s.sectionHeader}>
          <span className={s.sectionLabel}>System Map</span>
          <span className={s.sectionLink}>Full map ›</span>
        </div>
        <div className={s.mapTeaser}>
          <svg viewBox="0 0 240 140" className={s.mapSvg}>
            {/* Simplified BART map paths */}
            <line x1="40"  y1="20"  x2="120" y2="70"  stroke={LINE.Red}    strokeWidth="3" strokeLinecap="round"/>
            <line x1="60"  y1="15"  x2="120" y2="70"  stroke={LINE.Orange} strokeWidth="3" strokeLinecap="round"/>
            <line x1="120" y1="70"  x2="200" y2="30"  stroke={LINE.Yellow} strokeWidth="3" strokeLinecap="round"/>
            <line x1="120" y1="70"  x2="200" y2="70"  stroke={LINE.Blue}   strokeWidth="3" strokeLinecap="round"/>
            <line x1="120" y1="70"  x2="180" y2="120" stroke={LINE.Green}  strokeWidth="3" strokeLinecap="round"/>
            <line x1="120" y1="70"  x2="50"  y2="120" stroke={LINE.Red}    strokeWidth="3" strokeLinecap="round"/>
            <circle cx="120" cy="70" r="5" fill="white" />
            <text x="126" y="74" fill="rgba(255,255,255,0.6)" fontSize="7" fontFamily="system-ui">Oakland</text>
            <text x="22"  y="22"  fill="rgba(255,255,255,0.5)" fontSize="6" fontFamily="system-ui">Richmond</text>
            <text x="196" y="26"  fill="rgba(255,255,255,0.5)" fontSize="6" fontFamily="system-ui">Antioch</text>
            <text x="194" y="68"  fill="rgba(255,255,255,0.5)" fontSize="6" fontFamily="system-ui">Dublin</text>
            <text x="160" y="125" fill="rgba(255,255,255,0.5)" fontSize="6" fontFamily="system-ui">Berryessa</text>
            <text x="20"  y="125" fill="rgba(255,255,255,0.5)" fontSize="6" fontFamily="system-ui">Millbrae</text>
          </svg>
          <div className={s.mapLegend}>
            {Object.entries(LINE).slice(0,5).map(([name, color]) => (
              <span key={name} className={s.mapLegendItem}>
                <span className={s.mapLegendDot} style={{ background: color }} />
                <span>{name}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Stations ──────────────────────────────────────────────────
function StationsScreen({ onNav }) {
  const [search, setSearch] = useState('')
  const [lineFilter, setLineFilter] = useState(null)
  const filtered = STATIONS.filter(st =>
    st.name.toLowerCase().includes(search.toLowerCase()) &&
    (!lineFilter || st.lines.includes(lineFilter))
  )
  return (
    <div className={s.screen}>
      <div className={s.pageHeader}>
        <h2 className={s.pageTitle}>Stations</h2>
      </div>
      <div className={s.searchBar}>
        <span className={s.searchIcon}>⌕</span>
        <input className={s.searchInput} placeholder="Search stations…" value={search} onChange={e => setSearch(e.target.value)} />
      </div>
      <div className={s.lineFilters}>
        {Object.entries(LINE).slice(0,5).map(([line, color]) => (
          <button key={line}
            className={`${s.lineChip} ${lineFilter === line ? s.lineChipOn : ''}`}
            style={{ '--lc': color }}
            onClick={() => setLineFilter(lineFilter === line ? null : line)}
          >{line}</button>
        ))}
      </div>
      {search === '' && !lineFilter && (
        <p className={s.stationGroupLabel}>Nearest</p>
      )}
      <div className={s.stationList}>
        {filtered.map((st, i) => (
          <div key={i} className={s.stationRow} onClick={() => onNav('Station Detail')}>
            <div className={s.stationRowLeft}>
              <div className={s.stationLines}>
                {st.lines.map(l => <LineDot key={l} line={l} small />)}
              </div>
              <div>
                <p className={s.stationName}>{st.name}</p>
                <ElevStatus status={st.elevator} />
              </div>
            </div>
            <div className={s.stationRowRight}>
              <span className={s.stationDist}>{st.dist}</span>
              <span className={s.stationArrow}>›</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── Station Detail ────────────────────────────────────────────
function StationDetailScreen({ onNav }) {
  const [tab, setTab] = useState('Overview')
  const tabs = ['Overview', 'Schedules', 'Elevators', 'Map']
  const deps = [
    { line: 'Red',    dest: 'Richmond',  plat: 1, time: '5:35 PM' },
    { line: 'Orange', dest: 'Berryessa', plat: 2, time: '5:41 PM' },
    { line: 'Red',    dest: 'Millbrae',  plat: 1, time: '5:47 PM' },
    { line: 'Orange', dest: 'Richmond',  plat: 2, time: '5:54 PM' },
    { line: 'Red',    dest: 'Millbrae',  plat: 1, time: '6:02 PM' },
  ]
  return (
    <div className={s.screen}>
      <div className={s.detailHero}>
        <button className={s.backBtn} onClick={() => onNav('Stations')}>‹ Back</button>
        <div className={s.detailHeroBody}>
          <div className={s.detailHeroTop}>
            <div className={s.detailLines}>
              {['Orange','Red'].map(l => <LineDot key={l} line={l} />)}
            </div>
            <ElevStatus status="OK" />
          </div>
          <h2 className={s.detailName}>Downtown Berkeley</h2>
          <p className={s.detailAddress}>2160 Shattuck Ave, Berkeley CA</p>
        </div>
      </div>

      <div className={s.tabBar}>
        {tabs.map(t => (
          <button key={t} className={`${s.tabBtn} ${tab === t ? s.tabBtnOn : ''}`} onClick={() => setTab(t)}>{t}</button>
        ))}
      </div>

      {tab === 'Overview' && (
        <div className={s.tabContent}>
          <p className={s.tabSectionLabel}>Live Departures</p>
          {deps.map((d, i) => (
            <div key={i} className={s.depCard} style={{ borderLeftColor: LINE[d.line] }}>
              <div>
                <p className={s.depCardLine}><LineDot line={d.line} small /> {d.line} → {d.dest}</p>
                <p className={s.depCardPlat}>Platform {d.plat}</p>
              </div>
              <span className={s.depCardTime}>{d.time}</span>
            </div>
          ))}
          <p className={s.tabSectionLabel} style={{ marginTop: 14 }}>Amenities</p>
          <div className={s.amenRow}>
            {['🚻 Bathrooms', '🎫 Ticketing', '📶 Wi-Fi', '🆘 Help'].map(a => (
              <span key={a} className={s.amenChip}>{a}</span>
            ))}
          </div>
        </div>
      )}

      {tab === 'Schedules' && (
        <div className={s.tabContent}>
          <div className={s.schedControls}>
            <span className={s.schedChipOn}>Northbound</span>
            <span className={s.schedChip}>Southbound</span>
          </div>
          <p className={s.schedNote}>Real-time · updates every 30s</p>
          {deps.concat(deps).slice(0,8).map((d, i) => (
            <div key={i} className={s.depCard} style={{ borderLeftColor: LINE[d.line] }}>
              <div>
                <p className={s.depCardLine}><LineDot line={d.line} small /> {d.line} → {d.dest}</p>
                <p className={s.depCardPlat}>Platform {d.plat}</p>
              </div>
              <span className={s.depCardTime}>{d.time}</span>
            </div>
          ))}
        </div>
      )}

      {tab === 'Elevators' && (
        <div className={s.tabContent}>
          <div className={`${s.elevCard} ${s.elevOK}`}>
            <span className={s.elevCardIcon}>↑</span>
            <div>
              <p className={s.elevCardTitle}>Street to Concourse</p>
              <p className={s.elevCardStatus}>Operational</p>
            </div>
            <span className={s.elevOKBadge}>OK</span>
          </div>
          <div className={`${s.elevCard} ${s.elevOK}`}>
            <span className={s.elevCardIcon}>↑</span>
            <div>
              <p className={s.elevCardTitle}>Concourse to Platform</p>
              <p className={s.elevCardStatus}>Operational</p>
            </div>
            <span className={s.elevOKBadge}>OK</span>
          </div>
          <div className={s.elevNote}>
            <span>ℹ</span>
            <span>Elevator status updates in real time. Last checked 2 min ago.</span>
          </div>
        </div>
      )}

      {tab === 'Map' && (
        <div className={s.tabContent}>
          <div className={s.mapPlaceholder}>
            <span>🗺</span>
            <p>Station map</p>
            <p className={s.mapPlaceholderSub}>2160 Shattuck Ave, Berkeley</p>
          </div>
          <button className={s.directionsBtn}>Get Directions →</button>
        </div>
      )}
    </div>
  )
}

// ── Plan a Trip ───────────────────────────────────────────────
function PlanScreen({ onNav }) {
  const [pref, setPref] = useState('Fastest')
  const prefs = ['Fastest', 'Fewest Transfers', 'Least Walking', 'Avoid Stairs']
  return (
    <div className={s.screen}>
      <div className={s.pageHeader}>
        <h2 className={s.pageTitle}>Plan a Trip</h2>
      </div>
      <div className={s.planCard}>
        <div className={s.planField}>
          <span className={s.planFieldLabel}>FROM</span>
          <span className={s.planFieldValue}>Downtown Berkeley</span>
        </div>
        <div className={s.planDivider}>
          <div className={s.planLine} />
          <button className={s.swapBtn}>⇅</button>
        </div>
        <div className={s.planField}>
          <span className={s.planFieldLabel}>TO</span>
          <span className={s.planFieldValue}>Montgomery St.</span>
        </div>
      </div>

      <div className={s.planTimeRow}>
        {['Depart Now', 'Depart At', 'Arrive By'].map((t, i) => (
          <button key={t} className={`${s.timeChip} ${i === 0 ? s.timeChipOn : ''}`}>{t}</button>
        ))}
      </div>

      <div className={s.prefSection}>
        <p className={s.planSectionLabel}>Preferences</p>
        <div className={s.prefGrid}>
          {prefs.map(p => (
            <button key={p} className={`${s.prefChip} ${pref === p ? s.prefChipOn : ''}`} onClick={() => setPref(p)}>{p}</button>
          ))}
        </div>
      </div>

      <button className={s.findTripsBtn} onClick={() => onNav('Trip Results')}>
        Find Trips →
      </button>

      <div className={s.recentSection}>
        <p className={s.planSectionLabel}>Recent</p>
        {[
          { from: 'Downtown Berkeley', to: 'Powell St.' },
          { from: 'MacArthur', to: 'Embarcadero' },
        ].map((r, i) => (
          <div key={i} className={s.recentRow} onClick={() => onNav('Trip Results')}>
            <span className={s.recentIcon}>↻</span>
            <span className={s.recentText}>{r.from} → {r.to}</span>
            <span className={s.recentArrow}>›</span>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── Trip Results ──────────────────────────────────────────────
function TripResultsScreen({ onNav }) {
  const [selected, setSelected] = useState(0)
  const trips = [
    { min: 28, fare: '$4.85', dep: '5:42 PM', arr: '6:10 PM', lines: ['Orange','Yellow'], transfers: 1, badge: 'Fastest', badgeColor: LINE.Green, itinerary: [
      { line: 'Orange', action: 'Board at Downtown Berkeley', detail: 'Departs 5:47 PM · Platform 2 · 3 stops' },
      { line: 'Yellow', action: 'Transfer at 12th St. Oakland', detail: 'Elevator near Car 3 · 1 min walk' },
      { line: 'Yellow', action: 'Board Yellow Line', detail: 'Departs 5:59 PM · Platform 2 · 5 stops' },
      { line: null, action: 'Arrive at Montgomery St.', detail: '6:10 PM · Exit via Market & 2nd' },
    ]},
    { min: 32, fare: '$4.85', dep: '5:47 PM', arr: '6:19 PM', lines: ['Red'], transfers: 0, badge: 'No transfer', badgeColor: LINE.Blue },
    { min: 36, fare: '$4.85', dep: '5:51 PM', arr: '6:27 PM', lines: ['Red','Blue'], transfers: 1, badge: 'Accessible', badgeColor: '#4DB848' },
  ]
  return (
    <div className={s.screen}>
      <div className={s.pageHeader}>
        <button className={s.backBtn} onClick={() => onNav('Plan a Trip')}>‹ Back</button>
        <h2 className={s.pageTitle}>Suggested Trips</h2>
      </div>
      <p className={s.tripRoute}>Downtown Berkeley → Montgomery St.</p>

      {trips.map((trip, i) => (
        <div key={i} className={`${s.tripCard} ${selected === i ? s.tripCardOn : ''}`} onClick={() => setSelected(i)}>
          <div className={s.tripCardTop}>
            <div className={s.tripCardLeft}>
              <span className={s.tripMin}>{trip.min} min</span>
              <span className={s.tripFare}>{trip.fare}</span>
            </div>
            <div className={s.tripCardMid}>
              <p className={s.tripTime}>{trip.dep} → {trip.arr}</p>
              <div className={s.tripLines}>
                {trip.lines.map(l => <LineDot key={l} line={l} />)}
                <span className={s.tripTransfers}>{trip.transfers === 0 ? 'No transfer' : `${trip.transfers} transfer`}</span>
              </div>
            </div>
            <span className={s.tripBadge} style={{ background: trip.badgeColor + '22', color: trip.badgeColor }}>{trip.badge}</span>
          </div>

          {selected === i && trip.itinerary && (
            <div className={s.itinerary}>
              {trip.itinerary.map((step, j) => (
                <div key={j} className={s.itinRow}>
                  <div className={s.itinDot} style={{ background: step.line ? LINE[step.line] : LINE.Green }} />
                  <div className={s.itinLine} style={{ background: j < trip.itinerary.length - 1 ? (step.line ? LINE[step.line] + '44' : 'transparent') : 'transparent' }} />
                  <div className={s.itinBody}>
                    <p className={s.itinAction}>{step.action}</p>
                    <p className={s.itinDetail}>{step.detail}</p>
                  </div>
                </div>
              ))}
              <div className={s.fareBreakdown}>
                <div className={s.fareRow}><span>Base fare</span><span>$4.05</span></div>
                <div className={s.fareRow}><span>Transfer</span><span>$0.80</span></div>
                <div className={`${s.fareRow} ${s.fareTotal}`}><span>Total</span><span>$4.85</span></div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

// ── Accessibility ─────────────────────────────────────────────
function AccessibilityScreen() {
  const [contrast, setContrast] = useState(true)
  const [stepFree, setStepFree] = useState(false)
  const [nearElev, setNearElev] = useState(true)
  const [motion, setMotion] = useState(true)
  const [textSize, setTextSize] = useState('Default')

  return (
    <div className={s.screen}>
      <div className={s.pageHeader}>
        <h2 className={s.pageTitle}>Accessibility</h2>
      </div>

      <div className={s.accTabs}>
        {['Overview', 'Alerts', 'Resources'].map((t, i) => (
          <button key={t} className={`${s.accTab} ${i === 0 ? s.accTabOn : ''}`}>{t}</button>
        ))}
      </div>

      <div className={s.accSection}>
        <p className={s.accSectionLabel}>Text Size</p>
        <div className={s.textSizeRow}>
          {['S', 'Default', 'L', 'XL'].map(sz => (
            <button key={sz} className={`${s.textSizeBtn} ${textSize === sz ? s.textSizeBtnOn : ''}`} onClick={() => setTextSize(sz)}>{sz}</button>
          ))}
        </div>
        <div className={s.textPreview}>
          <span style={{ fontSize: textSize === 'S' ? 10 : textSize === 'L' ? 16 : textSize === 'XL' ? 20 : 13 }}>
            Preview — "Live departures in 3 min"
          </span>
        </div>
      </div>

      <div className={s.accSection}>
        <p className={s.accSectionLabel}>Display</p>
        <div className={s.toggleRow}>
          <div>
            <p className={s.toggleLabel}>High Contrast Mode</p>
            <p className={s.toggleSub}>Increases contrast for all UI elements</p>
          </div>
          <button className={`${s.toggle} ${contrast ? s.toggleOn : ''}`} onClick={() => setContrast(c => !c)}>
            <span className={s.toggleThumb} />
          </button>
        </div>
        <div className={s.toggleRow}>
          <div>
            <p className={s.toggleLabel}>Reduce Motion</p>
            <p className={s.toggleSub}>Limit animations and autoscrolling</p>
          </div>
          <button className={`${s.toggle} ${motion ? s.toggleOn : ''}`} onClick={() => setMotion(m => !m)}>
            <span className={s.toggleThumb} />
          </button>
        </div>
      </div>

      <div className={s.accSection}>
        <p className={s.accSectionLabel}>My Preferences</p>
        {[
          { label: 'Step-free only', sub: 'Use elevators/escalators for all legs', val: stepFree, set: setStepFree },
          { label: 'Near elevators', sub: 'Board closer to elevator at each station', val: nearElev, set: setNearElev },
        ].map(item => (
          <div key={item.label} className={s.toggleRow}>
            <div>
              <p className={s.toggleLabel}>{item.label}</p>
              <p className={s.toggleSub}>{item.sub}</p>
            </div>
            <button className={`${s.toggle} ${item.val ? s.toggleOn : ''}`} onClick={() => item.set(v => !v)}>
              <span className={s.toggleThumb} />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── Main ──────────────────────────────────────────────────────
export default function BARTMockup() {
  const [active, setActive] = useState('Home')
  const map = {
    'Home':           <HomeScreen          onNav={setActive} />,
    'Stations':       <StationsScreen      onNav={setActive} />,
    'Station Detail': <StationDetailScreen onNav={setActive} />,
    'Plan a Trip':    <PlanScreen          onNav={setActive} />,
    'Trip Results':   <TripResultsScreen   onNav={setActive} />,
    'Accessibility':  <AccessibilityScreen />,
  }

  return (
    <div className={s.wrapper}>
      <div className={s.tabs}>
        {SCREENS.map(sc => (
          <button key={sc} className={`${s.tab} ${active === sc ? s.tabOn : ''}`} onClick={() => setActive(sc)}>{sc}</button>
        ))}
      </div>
      <div className={s.phoneWrap}>
        <div className={s.phone}>
          <div className={s.notch} />
          <div className={s.phoneInner}>
            <div className={s.content}>{map[active]}</div>
            <BottomNav active={active} onNav={setActive} />
          </div>
          <div className={s.homeBar} />
        </div>
      </div>
    </div>
  )
}
