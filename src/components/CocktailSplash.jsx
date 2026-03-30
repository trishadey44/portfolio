export default function CocktailSplash() {
  const tubeColors = ['#E8834A','#27567b','#ED1C24','#6B8F6E','#FFD520','#7B6FA0','#F5A623','#4DB848']
  return (
    <svg viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      {/* Dark background */}
      <rect width="400" height="240" fill="#0F1117"/>
      {/* Subtle grid */}
      {[50,100,150,200,250,300,350].map(x=><line key={x} x1={x} y1="0" x2={x} y2="240" stroke="white" strokeWidth="0.3" opacity="0.04"/>)}
      {[60,120,180].map(y=><line key={y} x1="0" y1={y} x2="400" y2={y} stroke="white" strokeWidth="0.3" opacity="0.04"/>)}

      {/* ── Machine housing (3D printed box) ── */}
      <rect x="44" y="54" width="180" height="130" rx="10" fill="#1C1F2B" stroke="#2E3347" strokeWidth="1.5"/>
      {/* Front panel texture */}
      <rect x="52" y="62" width="164" height="4" rx="2" fill="#2E3347" opacity="0.6"/>
      {/* Arduino blue board */}
      <rect x="58" y="72" width="80" height="52" rx="5" fill="#006FAE" opacity="0.85"/>
      <rect x="62" y="76" width="72" height="2" rx="1" fill="#0099CD" opacity="0.5"/>
      {/* Arduino pin headers */}
      {[0,1,2,3,4,5,6,7,8,9,10,11,12].map(i=>(
        <rect key={i} x={63+i*5} y={80} width="3" height="5" rx="1" fill="#FFD520" opacity="0.7"/>
      ))}
      {/* Arduino chip */}
      <rect x="82" y="90" width="24" height="18" rx="3" fill="#1A1A1A"/>
      <rect x="85" y="93" width="18" height="12" rx="2" fill="#333" opacity="0.8"/>
      {/* USB port */}
      <rect x="62" y="108" width="12" height="8" rx="2" fill="#555"/>
      {/* Relay board */}
      <rect x="148" y="72" width="60" height="52" rx="5" fill="#1A2E1A" stroke="#2E472E" strokeWidth="1"/>
      {[0,1,2,3].map(i=>(
        <g key={i}>
          <rect x={152+i*13} y="78" width="10" height="14" rx="2" fill="#2E472E" stroke="#4DB848" strokeWidth="0.8"/>
          <circle cx={157+i*13} cy="85" r="3" fill={i<2?'#4DB848':'#2E472E'}/>
        </g>
      ))}
      {[0,1,2,3].map(i=>(
        <g key={i+4}>
          <rect x={152+i*13} y="96" width="10" height="14" rx="2" fill="#2E472E" stroke="#4DB848" strokeWidth="0.8"/>
          <circle cx={157+i*13} cy="103" r="3" fill={i<1?'#4DB848':'#2E472E'}/>
        </g>
      ))}
      {/* HC-05 Bluetooth module */}
      <rect x="60" y="130" width="38" height="22" rx="4" fill="#003080" stroke="#0055CC" strokeWidth="1"/>
      <rect x="64" y="134" width="30" height="5" rx="2" fill="#0055CC" opacity="0.5"/>
      <text x="79" y="146" textAnchor="middle" fontFamily="monospace" fontSize="5.5" fill="white" opacity="0.7">HC-05</text>

      {/* ── Peristaltic pump row ── */}
      {tubeColors.map((color, i) => (
        <g key={i}>
          <rect x={58+i*16} y="162" width="12" height="16" rx="3" fill="#1E1E2E" stroke="#333" strokeWidth="1"/>
          <circle cx={64+i*16} cy="170" r="4" fill={color} opacity="0.85"/>
        </g>
      ))}

      {/* ── Tubes flowing down ── */}
      {tubeColors.map((color, i) => (
        <path
          key={i}
          d={`M${64+i*16} 178 Q${64+i*16} 195 ${220+i*8} 220`}
          stroke={color} strokeWidth="2" fill="none" opacity="0.7" strokeLinecap="round"
        />
      ))}

      {/* ── Glass at bottom ── */}
      <path d="M246 205 L258 235 L286 235 L298 205 Z" fill="none" stroke="white" strokeWidth="1.5" opacity="0.25"/>
      {/* Liquid in glass - gradient layers */}
      <path d="M255 230 L258 235 L286 235 L289 230 Z" fill="#ED1C24" opacity="0.4"/>
      <path d="M252 222 L255 230 L289 230 L292 222 Z" fill="#F5A623" opacity="0.35"/>
      <path d="M249 214 L252 222 L292 222 L295 214 Z" fill="#FFD520" opacity="0.3"/>

      {/* ── Right side: app mockup ── */}
      <rect x="316" y="38" width="70" height="130" rx="8" fill="#1A1A2E" stroke="#2E2E4E" strokeWidth="1.2"/>
      <rect x="320" y="44" width="62" height="3" rx="1.5" fill="#2E2E4E"/>
      {/* App title */}
      <rect x="324" y="52" width="54" height="7" rx="3" fill="#E8834A" opacity="0.7"/>
      {/* Cocktail buttons */}
      {['Cosmo','Blue Moon','Lemon Drop','Vodka Sprite','Tom Collins'].map((name,i)=>(
        <g key={name}>
          <rect x="322" y={66+i*22} width="58" height="16" rx="4"
            fill={i===0?'#E8834A20':'#1E1E3E'}
            stroke={i===0?'#E8834A':'#2E2E4E'} strokeWidth="0.8"/>
          <rect x="327" y={70+i*22} width={30+Math.random()*15} height="5" rx="2"
            fill={i===0?'#E8834A':'white'} opacity={i===0?0.7:0.2}/>
        </g>
      ))}
      {/* Pour button */}
      <rect x="322" y="182" width="58" height="20" rx="6" fill="#E8834A"/>
      <rect x="332" y="188" width="38" height="8" rx="3" fill="white" opacity="0.35"/>

      {/* ── Labels ── */}
      <text x="20" y="235" fontFamily="'Courier New', monospace" fontSize="7" fill="#E8834A" opacity="0.8" letterSpacing="1">ARDUINO</text>
      <text x="20" y="244" fontFamily="'Courier New', monospace" fontSize="7" fill="white" opacity="0.35" letterSpacing="0.5">COCKTAIL MAKER</text>
    </svg>
  )
}
