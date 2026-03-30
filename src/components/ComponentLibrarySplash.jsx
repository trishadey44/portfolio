export default function ComponentLibrarySplash() {
  return (
    <svg viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <rect width="400" height="240" fill="#F7EBD8"/>

      {/* Grid lines - subtle */}
      {[80,160,240,320].map(x => <line key={x} x1={x} y1="0" x2={x} y2="240" stroke="#DDD3BE" strokeWidth="0.5"/>)}
      {[80,160].map(y => <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="#DDD3BE" strokeWidth="0.5"/>)}

      {/* ── Row 1: Buttons (top-left quadrant) ── */}
      {/* Primary button */}
      <rect x="24" y="24" width="72" height="24" rx="6" fill="#2b2b2b"/>
      <rect x="33" y="31" width="54" height="10" rx="3" fill="white" opacity="0.35"/>
      {/* Secondary button */}
      <rect x="104" y="24" width="60" height="24" rx="6" fill="none" stroke="#DDD3BE" strokeWidth="1.5"/>
      <rect x="113" y="31" width="42" height="10" rx="3" fill="#7a6e62" opacity="0.4"/>
      {/* Ghost button */}
      <rect x="172" y="24" width="52" height="24" rx="6" fill="none" stroke="#DDD3BE" strokeWidth="1.5"/>
      <rect x="181" y="31" width="34" height="10" rx="3" fill="#7a6e62" opacity="0.3"/>
      {/* Danger chip */}
      <rect x="232" y="24" width="60" height="24" rx="6" fill="#FEE2E2"/>
      <rect x="241" y="31" width="42" height="10" rx="3" fill="#991B1B" opacity="0.4"/>
      {/* Disabled */}
      <rect x="300" y="24" width="72" height="24" rx="6" fill="#2b2b2b" opacity="0.25"/>
      <rect x="309" y="31" width="54" height="10" rx="3" fill="#2b2b2b" opacity="0.15"/>

      {/* ── Row 1: Toggle strip (top-right area) ── */}
      {[0,1,2].map(i => (
        <g key={i}>
          <rect x="246" y={i*22 + 60} width="18" height="10" rx="5" fill={i < 2 ? '#C17F3E' : '#DDD3BE'}/>
          <circle cx={i < 2 ? 258 : 252} cy={i*22 + 65} r="4" fill="white"/>
          <rect x="270" y={i*22 + 61} width="36" height="8" rx="3" fill="#2b2b2b" opacity="0.2"/>
        </g>
      ))}

      {/* ── Row 2: Input fields ── */}
      <rect x="24" y="60" width="110" height="26" rx="7" fill="white" stroke="#DDD3BE" strokeWidth="1.2"/>
      <rect x="32" y="69" width="50" height="8" rx="3" fill="#2b2b2b" opacity="0.15"/>
      <rect x="24" y="56" width="30" height="5" rx="2" fill="#7a6e62" opacity="0.4"/>

      <rect x="144" y="60" width="90" height="26" rx="7" fill="white" stroke="#C17F3E" strokeWidth="1.5"/>
      <rect x="152" y="69" width="62" height="8" rx="3" fill="#2b2b2b" opacity="0.15"/>
      <rect x="144" y="56" width="28" height="5" rx="2" fill="#7a6e62" opacity="0.4"/>

      {/* ── Row 2: Badges ── */}
      <rect x="24" y="96" width="44" height="16" rx="8" fill="#DCFCE7"/>
      <rect x="33" y="102" width="26" height="4" rx="2" fill="#166534" opacity="0.6"/>
      <rect x="76" y="96" width="44" height="16" rx="8" fill="#FEF9C3"/>
      <rect x="85" y="102" width="26" height="4" rx="2" fill="#854D0E" opacity="0.6"/>
      <rect x="128" y="96" width="44" height="16" rx="8" fill="#FEE2E2"/>
      <rect x="137" y="102" width="26" height="4" rx="2" fill="#991B1B" opacity="0.6"/>
      <rect x="180" y="96" width="44" height="16" rx="8" fill="#DBEAFE"/>
      <rect x="189" y="102" width="26" height="4" rx="2" fill="#1E40AF" opacity="0.6"/>

      {/* ── Row 3: BART departure rows ── */}
      {[
        { y: 126, line: '#ED1C24', w: 80 },
        { y: 148, line: '#F5A623', w: 60 },
        { y: 170, line: '#0099CD', w: 95 },
      ].map((d, i) => (
        <g key={i}>
          <rect x="24" y={d.y} width="210" height="18" rx="5" fill="white" stroke="#DDD3BE" strokeWidth="0.8"/>
          <rect x="28" y={d.y + 3} width="3" height="12" rx="1.5" fill={d.line}/>
          <rect x="38" y={d.y + 4} width={d.w} height="5" rx="2" fill="#2b2b2b" opacity="0.25"/>
          <rect x="38" y={d.y + 11} width={d.w * 0.55} height="4" rx="2" fill="#7a6e62" opacity="0.2"/>
          <rect x="210" y={d.y + 5} width="18" height="8" rx="3" fill="#EFE3CA"/>
        </g>
      ))}

      {/* ── Right panel: Cards ── */}
      {[0, 1].map(i => (
        <g key={i}>
          <rect x="248" y={i * 70 + 100} width="130" height="60" rx="10" fill="white" stroke="#DDD3BE" strokeWidth="1"/>
          <rect x="258" y={i * 70 + 111} width="35" height="5" rx="2.5" fill="#C17F3E" opacity="0.7"/>
          <rect x="258" y={i * 70 + 120} width="90" height="7" rx="3" fill="#2b2b2b" opacity="0.3"/>
          <rect x="258" y={i * 70 + 132} width="100" height="4" rx="2" fill="#7a6e62" opacity="0.25"/>
          <rect x="258" y={i * 70 + 139} width="75" height="4" rx="2" fill="#7a6e62" opacity="0.2"/>
          {/* bookmark icon */}
          <rect x="360" y={i * 70 + 109} width="10" height="12" rx="2" fill="none" stroke="#DDD3BE" strokeWidth="1.2"/>
          <polyline points={`360,${i*70+119} 365,${i*70+115} 370,${i*70+119}`} fill="none" stroke="#DDD3BE" strokeWidth="1.2"/>
        </g>
      ))}

      {/* ── Bottom row: Progress + filter chips ── */}
      {/* Progress bar */}
      <rect x="24" y="196" width="200" height="7" rx="3.5" fill="#E8DFD0"/>
      <rect x="24" y="196" width="138" height="7" rx="3.5" fill="#C17F3E"/>
      {/* Chips */}
      {[
        { x: 24,  w: 64, on: true  },
        { x: 96,  w: 50, on: false },
        { x: 154, w: 56, on: true  },
        { x: 218, w: 44, on: false },
      ].map((c, i) => (
        <g key={i}>
          <rect x={c.x} y="214" width={c.w} height="18" rx="9" fill={c.on ? '#2b2b2b' : 'white'} stroke={c.on ? '#2b2b2b' : '#DDD3BE'} strokeWidth="1.2"/>
          <rect x={c.x + 10} y="220" width={c.w - 20} height="6" rx="3" fill={c.on ? 'white' : '#7a6e62'} opacity={c.on ? 0.35 : 0.3}/>
        </g>
      ))}

      {/* ── Label top-right ── */}
      <text x="376" y="18" textAnchor="end" fontFamily="'Courier New', monospace" fontSize="8" fill="#7a6e62" opacity="0.6" letterSpacing="1">COMPONENT LIBRARY</text>
    </svg>
  )
}

