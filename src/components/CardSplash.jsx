// App splash screens - branded launch screens

export function HearthSplash() {
  return (
    <svg viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <defs>
        <radialGradient id="h-bg" cx="50%" cy="40%" r="80%">
          <stop offset="0%" stopColor="#FDF5E8"/>
          <stop offset="100%" stopColor="#F0E0C0"/>
        </radialGradient>
      </defs>
      <rect width="400" height="240" fill="url(#h-bg)"/>
      <circle cx="200" cy="240" r="90"  fill="none" stroke="#C17F3E" strokeWidth="0.8" opacity="0.15"/>
      <circle cx="200" cy="240" r="130" fill="none" stroke="#C17F3E" strokeWidth="0.8" opacity="0.12"/>
      <circle cx="200" cy="240" r="170" fill="none" stroke="#C17F3E" strokeWidth="0.8" opacity="0.09"/>
      <circle cx="200" cy="240" r="210" fill="none" stroke="#C17F3E" strokeWidth="0.8" opacity="0.07"/>
      <line x1="148" y1="88" x2="252" y2="88" stroke="#C17F3E" strokeWidth="0.8" opacity="0.5"/>
      <text x="200" y="122" textAnchor="middle" fontFamily="Georgia, 'Times New Roman', serif" fontSize="46" fontWeight="900" fontStyle="italic" fill="#3D2009" letterSpacing="-1">Hearth</text>
      <line x1="148" y1="132" x2="252" y2="132" stroke="#C17F3E" strokeWidth="0.8" opacity="0.5"/>
      <text x="200" y="152" textAnchor="middle" fontFamily="'Courier New', monospace" fontSize="8" fill="#C17F3E" opacity="0.9" letterSpacing="3">A KANBAN FOR YOUR LIFE</text>
      <circle cx="200" cy="174" r="3.5" fill="#C17F3E" opacity="0.7"/>
    </svg>
  )
}

export function BARTSplash() {
  return (
    <svg viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <defs>
        <linearGradient id="b-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0A1628"/>
          <stop offset="100%" stopColor="#0D1F38"/>
        </linearGradient>
        <radialGradient id="b-glow" cx="50%" cy="55%" r="45%">
          <stop offset="0%" stopColor="#0099CD" stopOpacity="0.2"/>
          <stop offset="100%" stopColor="#0099CD" stopOpacity="0"/>
        </radialGradient>
      </defs>
      <rect width="400" height="240" fill="url(#b-bg)"/>
      <rect width="400" height="240" fill="url(#b-glow)"/>
      <path d="M0 190 Q100 185 160 120 Q200 70 260 60 Q320 50 400 30"     stroke="#ED1C24" strokeWidth="2.5" fill="none" opacity="0.35"/>
      <path d="M0 210 Q80 200 150 140 Q200 95 280 80 Q350 68 400 55"      stroke="#F5A623" strokeWidth="2.5" fill="none" opacity="0.3"/>
      <path d="M0 230 Q60 215 120 180 Q175 145 230 130 Q310 110 400 90"   stroke="#FFD520" strokeWidth="2.5" fill="none" opacity="0.28"/>
      <path d="M60 240 Q130 210 190 175 Q240 148 310 140 Q360 135 400 130" stroke="#4DB848" strokeWidth="2.5" fill="none" opacity="0.25"/>
      <path d="M120 240 Q200 220 260 195 Q320 170 380 165 Q400 162 400 162" stroke="#0099CD" strokeWidth="2.5" fill="none" opacity="0.3"/>
      <text x="200" y="105" textAnchor="middle" fontFamily="Georgia, serif" fontSize="52" fontWeight="900" fontStyle="italic" letterSpacing="-1">
        <tspan fill="#FFFFFF">b</tspan><tspan fill="#0099CD">a</tspan>
      </text>
      <text x="200" y="130" textAnchor="middle" fontFamily="'Courier New', monospace" fontSize="11" fill="#FFFFFF" opacity="0.5" letterSpacing="6">BART</text>
      <text x="200" y="152" textAnchor="middle" fontFamily="'Courier New', monospace" fontSize="8" fill="#0099CD" opacity="0.8" letterSpacing="2">BAY AREA RAPID TRANSIT</text>
      {[155, 172, 189, 206, 223].map((x, i) => (
        <circle key={x} cx={x + 11} cy="172" r="4.5" fill={['#ED1C24','#F5A623','#FFD520','#4DB848','#0099CD'][i]} opacity="0.85"/>
      ))}
    </svg>
  )
}

export function SimmerSplash() {
  return (
    <svg viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <defs>
        <radialGradient id="sim-bg" cx="50%" cy="30%" r="80%">
          <stop offset="0%" stopColor="#2D1A0E"/>
          <stop offset="100%" stopColor="#1A0C05"/>
        </radialGradient>
        <radialGradient id="sim-glow" cx="50%" cy="70%" r="50%">
          <stop offset="0%" stopColor="#FF6B35" stopOpacity="0.18"/>
          <stop offset="100%" stopColor="#FF6B35" stopOpacity="0"/>
        </radialGradient>
      </defs>
      {/* Background */}
      <rect width="400" height="240" fill="url(#sim-bg)"/>
      <rect width="400" height="240" fill="url(#sim-glow)"/>
      {/* Subtle grain texture lines */}
      <line x1="0" y1="60" x2="400" y2="60" stroke="#FF6B35" strokeWidth="0.3" opacity="0.08"/>
      <line x1="0" y1="120" x2="400" y2="120" stroke="#FF6B35" strokeWidth="0.3" opacity="0.06"/>
      <line x1="0" y1="180" x2="400" y2="180" stroke="#FF6B35" strokeWidth="0.3" opacity="0.04"/>
      {/* Steam wisps */}
      <path d="M160 148 Q158 136 162 124 Q166 112 164 100" stroke="#FF6B35" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.3"/>
      <path d="M180 152 Q177 138 181 124 Q185 110 183 96" stroke="#FF6B35" strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.22"/>
      <path d="M200 150 Q197 136 201 122 Q205 108 203 94" stroke="#FF6B35" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.28"/>
      <path d="M220 152 Q217 138 221 125 Q225 112 223 99" stroke="#FF6B35" strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.2"/>
      <path d="M240 148 Q238 136 242 124 Q246 112 244 100" stroke="#FF6B35" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.25"/>
      {/* Bowl shape */}
      <path d="M140 170 Q145 200 200 205 Q255 200 260 170" fill="#FF6B35" opacity="0.12"/>
      <path d="M140 170 Q145 200 200 205 Q255 200 260 170" fill="none" stroke="#FF6B35" strokeWidth="1.2" opacity="0.4"/>
      <path d="M150 165 Q200 175 250 165" fill="none" stroke="#FF6B35" strokeWidth="0.8" opacity="0.3"/>
      {/* Spoon */}
      <line x1="262" y1="158" x2="290" y2="130" stroke="#FF6B35" strokeWidth="1.8" strokeLinecap="round" opacity="0.5"/>
      <ellipse cx="256" cy="163" rx="7" ry="5" fill="none" stroke="#FF6B35" strokeWidth="1.4" opacity="0.5"/>
      {/* Title */}
      <text x="200" y="80" textAnchor="middle" fontFamily="Georgia, 'Times New Roman', serif" fontSize="44" fontWeight="900" fontStyle="italic" fill="#FF6B35" letterSpacing="-1" opacity="0.95">simmer</text>
      {/* Rule lines around title */}
      <line x1="72" y1="58" x2="118" y2="58" stroke="#FF6B35" strokeWidth="0.7" opacity="0.35"/>
      <line x1="282" y1="58" x2="328" y2="58" stroke="#FF6B35" strokeWidth="0.7" opacity="0.35"/>
      {/* Subtitle */}
      <text x="200" y="222" textAnchor="middle" fontFamily="'Courier New', monospace" fontSize="7.5" fill="#FF6B35" letterSpacing="3.5" opacity="0.6">COOK WHAT YOU HAVE</text>
    </svg>
  )
}


export { default as ComponentLibrarySplash } from './ComponentLibrarySplash'
export { default as CocktailSplash } from './CocktailSplash'
export { default as VeloursSplash } from './VeloursSplash'
export { default as WobbleSplash } from './WobbleSplash'
