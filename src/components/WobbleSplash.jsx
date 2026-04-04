export default function WobbleSplash() {
  return (
    <svg viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <defs>
        <style>{`@font-face { font-family: 'Wobble'; src: url('/Wobble_11719.ttf') format('truetype'); font-weight: 400; }`}</style>
      </defs>
      <rect width="400" height="240" fill="#1a1a2e"/>
      {[80,160,240,320].map(x => (
        <line key={x} x1={x} y1="0" x2={x} y2="240" stroke="white" strokeWidth="0.3" opacity="0.04"/>
      ))}
      {/* Wobble wordmark rendered in live font */}
      <text
        x="200" y="148"
        textAnchor="middle"
        fontFamily="'Wobble', Georgia, serif"
        fontWeight="400"
        fontSize="88"
        fill="#f7ebd8"
        letterSpacing="-1"
      >
        Wobble
      </text>
      <text
        x="200" y="210"
        textAnchor="middle"
        fontFamily="'Courier New', monospace"
        fontSize="7"
        fill="white"
        opacity="0.3"
        letterSpacing="3"
      >
        TYPE DESIGN
      </text>
      <path
        d="M 24 175 Q 48 165 72 175 Q 96 185 120 175 Q 144 165 168 175 Q 192 185 216 175 Q 240 165 264 175 Q 288 185 312 175 Q 336 165 360 175"
        stroke="#f9c414" strokeWidth="1.2" fill="none" opacity="0.5"
      />
    </svg>
  )
}
