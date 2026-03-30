export default function VeloursSplash() {
  return (
    <svg viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <rect width="400" height="240" fill="#FAF7F2"/>

      {/* Outer sleeve - wider box so VELOURS fits fully */}
      <rect x="110" y="16" width="180" height="208" rx="3" fill="#3D4F3B"/>

      <line x1="126" y1="38" x2="274" y2="38" stroke="#C8D4C6" strokeWidth="0.5" opacity="0.7"/>

      <text x="200" y="58" textAnchor="middle"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="6" fill="#C8D4C6" letterSpacing="3.5" opacity="0.85">
        ATELIER LAURENT
      </text>

      {/* Brand name - tighter letter-spacing so it stays inside the box */}
      <text x="200" y="108" textAnchor="middle"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="32" fontWeight="400" fill="#FAF7F2" letterSpacing="8">
        VELOURS
      </text>

      <line x1="126" y1="118" x2="274" y2="118" stroke="#C8D4C6" strokeWidth="0.5" opacity="0.5"/>

      <text x="200" y="136" textAnchor="middle"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="8" fontStyle="italic" fill="#C8D4C6" letterSpacing="0.5" opacity="0.9">
        To begin each day in softness.
      </text>

      <text x="200" y="160" textAnchor="middle"
        fontFamily="Georgia, serif"
        fontSize="6" fill="#C8D4C6" letterSpacing="2.5" opacity="0.55">
        NORDIC PULP · TRIPLE PLY
      </text>
      <text x="200" y="172" textAnchor="middle"
        fontFamily="Georgia, serif"
        fontSize="6" fill="#C8D4C6" letterSpacing="2.5" opacity="0.55">
        INDIVIDUALLY WRAPPED
      </text>

      <text x="200" y="194" textAnchor="middle"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="11" fill="#FAF7F2" letterSpacing="1" opacity="0.5">
        4
      </text>
      <text x="200" y="205" textAnchor="middle"
        fontFamily="Georgia, serif"
        fontSize="6" fill="#C8D4C6" letterSpacing="3" opacity="0.5">
        ROULEAUX
      </text>

      <line x1="126" y1="214" x2="274" y2="214" stroke="#C8D4C6" strokeWidth="0.5" opacity="0.4"/>

      <text x="80" y="128" textAnchor="middle"
        fontFamily="Georgia, serif" fontSize="5.5" fill="#C8D4C6" letterSpacing="2.5"
        transform="rotate(-90, 80, 128)" opacity="0.35">
        PACKAGING REDESIGN
      </text>
      <text x="320" y="125" textAnchor="middle"
        fontFamily="Georgia, serif" fontSize="5.5" fill="#3D4F3B" letterSpacing="2"
        transform="rotate(90, 320, 125)" opacity="0.45">
        BRANDING · PRINT
      </text>
    </svg>
  )
}
