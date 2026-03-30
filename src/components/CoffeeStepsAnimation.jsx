import { useState, useEffect, useRef } from 'react'
import s from './CoffeeStepsAnimation.module.css'

// ── Icons ──────────────────────────────────────────────────────
// Each renders at whatever size the container gives it

function CupIcon() {
  return (
    <svg viewBox="0 0 60 60" fill="none">
      <path d="M8 18 L8 42 Q8 48 14 48 L42 48 Q48 48 48 42 L48 18 Z"
        stroke="currentColor" strokeWidth="3" strokeLinejoin="round"/>
      <path d="M48 24 Q58 24 58 32 Q58 40 48 40"
        stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      <line x1="8" y1="18" x2="48" y2="18"
        stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
    </svg>
  )
}

function DripperIcon() {
  // V60 cone sitting on a cup - faithful to original
  return (
    <svg viewBox="0 0 60 60" fill="none">
      {/* Cup */}
      <path d="M12 36 L12 50 Q12 54 16 54 L44 54 Q48 54 48 50 L48 36 Z"
        stroke="currentColor" strokeWidth="2.8" strokeLinejoin="round"/>
      <path d="M48 40 Q56 40 56 44 Q56 48 48 48"
        stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      {/* V60 cone on top */}
      <path d="M14 10 L30 36 L46 10 Z"
        stroke="currentColor" strokeWidth="2.8" strokeLinejoin="round"/>
      {/* Ribs */}
      <line x1="22" y1="18" x2="25" y2="28" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity="0.7"/>
      <line x1="28" y1="14" x2="30" y2="28" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity="0.7"/>
      <line x1="35" y1="18" x2="37" y2="28" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity="0.7"/>
    </svg>
  )
}

function BagIcon() {
  return (
    <svg viewBox="0 0 60 60" fill="none">
      <path d="M14 20 Q14 10 20 10 L40 10 Q46 10 46 20 L46 52 Q46 54 44 54 L16 54 Q14 54 14 52 Z"
        stroke="currentColor" strokeWidth="2.8" strokeLinejoin="round"/>
      <path d="M14 20 Q30 26 46 20"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.65"/>
      {/* Bean 1 */}
      <ellipse cx="23" cy="36" rx="5" ry="7" stroke="currentColor" strokeWidth="2.2"/>
      <line x1="23" y1="29" x2="23" y2="43" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      {/* Bean 2 */}
      <ellipse cx="36" cy="38" rx="5" ry="7" stroke="currentColor" strokeWidth="2.2"/>
      <line x1="36" y1="31" x2="36" y2="45" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  )
}

function TeapotIcon() {
  return (
    <svg viewBox="0 0 60 60" fill="none">
      {/* Steam */}
      <path d="M22 10 Q20 6 22 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.7"/>
      <path d="M30 10 Q28 5 30 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.7"/>
      {/* Lid knob */}
      <circle cx="30" cy="14" r="3" stroke="currentColor" strokeWidth="2.2"/>
      {/* Lid rim */}
      <path d="M18 19 Q30 13 42 19" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"/>
      {/* Body */}
      <path d="M10 22 Q10 50 30 50 Q50 50 50 36 Q50 22 10 22 Z"
        stroke="currentColor" strokeWidth="2.8" strokeLinejoin="round"/>
      {/* Spout */}
      <path d="M50 28 Q60 26 58 36" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round"/>
      {/* Handle */}
      <path d="M10 26 Q2 26 2 34 Q2 42 10 42"
        stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" fill="none"/>
    </svg>
  )
}

function PitcherIcon() {
  return (
    <svg viewBox="0 0 60 60" fill="none">
      {/* Pitcher */}
      <path d="M20 10 L18 48 Q18 50 20 50 L40 50 Q42 50 42 48 L40 10 Z"
        stroke="currentColor" strokeWidth="2.8" strokeLinejoin="round"/>
      <path d="M20 10 Q28 4 34 10"
        stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"/>
      <path d="M42 16 Q52 16 52 26 Q52 36 42 36"
        stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" fill="none"/>
      {/* Sugar cubes */}
      <rect x="4" y="42" width="10" height="10" rx="1.5"
        stroke="currentColor" strokeWidth="2"/>
      <line x1="4" y1="47" x2="14" y2="47" stroke="currentColor" strokeWidth="1" opacity="0.55"/>
      <line x1="9" y1="42" x2="9" y2="52" stroke="currentColor" strokeWidth="1" opacity="0.55"/>
      <rect x="11" y="46" width="9" height="9" rx="1.5"
        stroke="currentColor" strokeWidth="2"/>
    </svg>
  )
}

function CheckCircle() {
  return (
    <svg viewBox="0 0 60 60" fill="none">
      <circle cx="30" cy="30" r="24" fill="currentColor"/>
      <path d="M18 30 L26 38 L42 20"
        stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function FinalCup() {
  return (
    <svg viewBox="0 0 60 60" fill="none">
      <defs>
        <clipPath id="fc">
          <path d="M8 18 L8 42 Q8 48 14 48 L42 48 Q48 48 48 42 L48 18 Z"/>
        </clipPath>
      </defs>
      <path d="M8 18 L8 42 Q8 48 14 48 L42 48 Q48 48 48 42 L48 18 Z"
        stroke="currentColor" strokeWidth="3" strokeLinejoin="round"/>
      <rect x="9" y="28" width="38" height="19" fill="currentColor" opacity="0.35" clipPath="url(#fc)"/>
      <path d="M48 24 Q58 24 58 32 Q58 40 48 40"
        stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      <line x1="8" y1="18" x2="48" y2="18"
        stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
    </svg>
  )
}

const ICONS = [CupIcon, DripperIcon, BagIcon, TeapotIcon, PitcherIcon]

// ── Main component ─────────────────────────────────────────────
const HOLD_MS       = 3000   // how long each step stays active
const COMPLETE_MS   = 500    // icon → checkmark transition
const NEXT_MS       = 300    // pause before next step activates
const RESET_MS      = 1800   // pause at end before looping

export default function CoffeeStepsAnimation() {
  const [activeStep,     setActiveStep]     = useState(0)
  const [completedSteps, setCompletedSteps] = useState([])
  const [completing,     setCompleting]     = useState(false) // shrinking out
  const timerRef = useRef(null)

  useEffect(() => {
    let step = 0
    let done = []

    function advance() {
      // Start completing current step
      setCompleting(true)

      timerRef.current = setTimeout(() => {
        // Mark it done, hide icon
        done = [...done, step]
        setCompletedSteps([...done])
        setCompleting(false)

        step = step + 1

        if (step >= 5) {
          // End of cycle - pause then reset
          timerRef.current = setTimeout(() => {
            step = 0
            done = []
            setCompletedSteps([])
            setActiveStep(0)
            timerRef.current = setTimeout(advance, HOLD_MS)
          }, RESET_MS)
        } else {
          setActiveStep(step)
          timerRef.current = setTimeout(advance, HOLD_MS + NEXT_MS)
        }
      }, COMPLETE_MS)
    }

    timerRef.current = setTimeout(advance, HOLD_MS)

    return () => clearTimeout(timerRef.current)
  }, [])

  return (
    <div className={s.wrapper}>
      <div className={s.row}>
        {[0,1,2,3,4].map((i) => {
          const isDone     = completedSteps.includes(i)
          const isActive   = activeStep === i && !isDone
          const isLeaving  = isActive && completing
          const isFinal    = isDone && i === 4
          const Icon       = ICONS[i]

          return (
            <div key={i} className={s.rowItem}>
              <div className={s.slot}>

                {/* Outline icon - visible when not done */}
                {!isDone && (
                  <div className={`${s.iconWrap} ${isActive ? (isLeaving ? s.leaving : s.active) : s.idle}`}>
                    <Icon />
                  </div>
                )}

                {/* Checkmark - visible when done (except last step = cup) */}
                {isDone && !isFinal && (
                  <div className={`${s.iconWrap} ${s.popping}`}>
                    <CheckCircle />
                  </div>
                )}

                {/* Final cup */}
                {isFinal && (
                  <div className={`${s.iconWrap} ${s.popping}`}>
                    <FinalCup />
                  </div>
                )}

              </div>

              {/* Dash after each step except last */}
              {i < 4 && <div className={s.dash} />}
            </div>
          )
        })}
      </div>
    </div>
  )
}
