import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import s from './WobblePage.module.css'

function WeightTabs({ active, onChange }) {
  return (
    <div className={s.tabs}>
      {['regular', 'bold', 'italic'].map(w => (
        <button key={w} className={`${s.tab} ${active === w ? s.tabOn : ''}`} onClick={() => onChange(w)}>
          {w.charAt(0).toUpperCase() + w.slice(1)}
        </button>
      ))}
    </div>
  )
}

const CHAR_ROWS = [
  { label: 'A – Z',   chars: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' },
  { label: 'a – z',   chars: 'abcdefghijklmnopqrstuvwxyz' },
  { label: '0 – 9',   chars: '0123456789' },
  { label: 'Symbols', chars: "!?,.:;'\"-()[]@#$%&*+=/" },
]

function CharGrid({ weight }) {
  const fontStyle  = weight === 'italic' ? 'italic' : 'normal'
  const fontWeight = weight === 'bold'   ? 700      : 400
  return (
    <div className={s.charGrid}>
      {CHAR_ROWS.map(row => (
        <div key={row.label} className={s.charRow}>
          <span className={s.charRowLabel}>{row.label}</span>
          <div className={s.charRowScroll}>
            <div className={s.charRowText} style={{ fontWeight, fontStyle }}>
              {row.chars.split('').map((ch, i) => (
                <span key={i} className={s.charCell}>{ch}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

const SENTENCE = 'The quick brown fox jumps over the lazy dog.'

function SentenceComparison() {
  return (
    <div className={s.sentenceStack}>
      {[
        { label: 'Wobble Regular — 400', weight: 400, style: 'normal' },
        { label: 'Wobble Bold — 700',    weight: 700, style: 'normal' },
        { label: 'Wobble Italic — 400',  weight: 400, style: 'italic' },
      ].map(row => (
        <div key={row.label} className={s.sentenceRow}>
          <span className={s.sentDesc}>{row.label}</span>
          <p className={s.sentText} style={{ fontWeight: row.weight, fontStyle: row.style }}>
            {SENTENCE}
          </p>
        </div>
      ))}
    </div>
  )
}

function WobbleTitle({ children, className }) {
  return <h2 className={`${s.wobbleTitle} ${className || ''}`}>{children}</h2>
}

export default function WobblePage() {
  const [weight, setWeight] = useState('regular')
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <main className={s.page}>

      <div className={s.hero}>
        <div className={s.heroInner}>
          <Link to="/playground" className={s.back}>← Playground</Link>
          <div className={s.heroMeta}>
            <span className={s.heroTag}>Typography · Type Design · FontForge</span>
            <div className={s.heroWordWrap}>
              <h1 className={s.heroWord}>Wobble</h1>
            </div>
            <p className={s.heroSub}>
              A humanist sans-serif with an intentional shake. Three weights. 94 characters.
              Built by hand in Calligrapher, refined in Figma, exported in FontForge.
            </p>
          </div>
        </div>
      </div>

      <div className={s.body}>

        <section className={s.section}>
          <div className={s.sectionTag}>01 — Inspiration</div>
          <div className={s.twoCol}>
            <WobbleTitle>Where perfect curves feel dishonest.</WobbleTitle>
            <div className={s.sectionBody}>
              <p>Most digital sans-serifs are geometrically flawless — every curve plotted to mathematical precision. Reliable, but bloodless.</p>
              <p>Wobble came from handwritten signage, chalk lettering, small-batch packaging — places where the person who made the letters is still present in them. The wobble isn't a mistake. It's a signature.</p>
            </div>
          </div>
        </section>

        <section className={`${s.section} ${s.sectionAlt}`}>
          <div className={s.sectionTag}>02 — Design Process</div>
          <WobbleTitle className={s.sectionTitlePadded}>Drawing with intent.</WobbleTitle>
          <div className={s.processSteps}>
            {[
              { tool: 'Calligrapher', step: '01', title: 'Drawing with a variable-width brush', body: 'Every glyph started in Calligrapher on iPad. The app simulates ink pressure, so the strokes have natural weight variation — thicker on the downstrokes, thinner on the curves. The wobble in the outlines came directly from drawing freehand. Nothing was traced over a skeleton. The letters existed before I knew exactly what they would look like.' },
              { tool: 'Figma', step: '02', title: 'Tracing, spacing, and visual testing', body: 'Exported drawings went into Figma for tracing into clean vector paths. This is where I made decisions about how much wobble to preserve versus smooth away. The rule was: keep anything that looks like a choice, remove anything that looks like an accident. Spacing was set by eye — testing letter pairs at display size and reading size until the rhythm felt consistent.' },
              { tool: 'FontForge', step: '03', title: 'Building the actual font', body: 'FontForge handled the assembly — importing SVG outlines, setting metrics (UPM 1000, ascender 800, descender -200), generating the Bold and Italic variants, and exporting to TTF. The Bold was drawn separately rather than algorithmically emboldened, because auto-bold distorts the wobble character. The Italic was drawn with a deliberate lean rather than slanted from the Regular.' },
            ].map(step => (
              <div key={step.step} className={s.processCard}>
                <div className={s.processHeader}>
                  <span className={s.processStep}>{step.step}</span>
                  <span className={s.processTool}>{step.tool}</span>
                </div>
                <h3 className={s.processTitle}>{step.title}</h3>
                <p className={s.processBody}>{step.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={s.section}>
          <div className={s.sectionTag}>03 — Character Set</div>
          <div className={s.charHeader}>
            <WobbleTitle>Every character, every weight.</WobbleTitle>
            <WeightTabs active={weight} onChange={setWeight} />
          </div>
          <CharGrid weight={weight} />
        </section>

        <section className={`${s.section} ${s.sectionAlt}`}>
          <div className={s.sectionTag}>04 — Weights in Use</div>
          <WobbleTitle className={s.sectionTitlePadded}>Three weights. One character.</WobbleTitle>
          <SentenceComparison />
          <div className={s.weightNotes}>
            <div className={s.weightNote}>
              <span className={s.weightLabel}>Regular</span>
              <p>The workhorse. Works well at body sizes (14–18px) and looks great in headlines. The wobble is most visible here — it's light enough that each stroke's character comes through.</p>
            </div>
            <div className={s.weightNote}>
              <span className={s.weightLabel}>Bold</span>
              <p>Drawn heavier, not algorithmically thickened. The wobble becomes more structural at this weight — you see it in the joints and terminals rather than the stroke edges. Good for emphasis and short headlines.</p>
            </div>
            <div className={s.weightNote}>
              <span className={s.weightLabel}>Italic</span>
              <p>A genuine italic, not a slanted Roman. The lean is built into the drawings. Works well for callouts, captions, and anything that needs a lighter touch than the Bold but more distinction than Regular.</p>
            </div>
          </div>
        </section>

        <section className={s.section}>
          <div className={s.sectionTag}>05 — Accessibility</div>
          <div className={s.twoCol}>
            <WobbleTitle>Legible by design, with caveats.</WobbleTitle>
            <div className={s.sectionBody}>
              <p>Wobble is not a neutral accessibility workhorse. The intentional stroke variation — the thing that makes it interesting — is also the thing that makes it harder to read at small sizes. At 10–12px, the wobble reads as noise. At 14px and above, it settles into something legible and even pleasant to read.</p>
              <p>For users with dyslexia, the irregular letterforms could actually be a small advantage — research suggests that slight variations between similar letters (b/d, p/q) improve disambiguation. Wobble's characters are distinct enough that confusion between mirrored pairs is less likely than with perfectly geometric type.</p>
              <p className={s.accessNote}><strong>Recommended minimum:</strong> 15px body, 28px headlines. Not recommended for dense body copy at small sizes, legal fine print, or high-frequency UI labels like form inputs and navigation.</p>
            </div>
          </div>
        </section>

        <section className={`${s.section} ${s.sectionAlt}`}>
          <div className={s.sectionTag}>06 — Ideal Users</div>
          <WobbleTitle className={s.sectionTitlePadded}>Who should use Wobble?</WobbleTitle>
          <div className={s.userGrid}>
            {[
              { who: 'Indie brands',        detail: 'Small-batch product packaging, artisan food labels, zines, and small-press publishing. Wobble gives a handmade quality without looking like it was typed in Comic Sans.' },
              { who: 'Editorial design',    detail: 'Magazine headlines, pull quotes, and section headers where you want the type to have visible personality. Works especially well at large display sizes where the stroke variation is most visible.' },
              { who: 'Motion and animation',detail: "Wobble's irregular outlines animate with more character than geometric type. Even a simple fade or scale-up has more life because the starting shape is already alive." },
              { who: 'Personal projects',   detail: "Portfolios, personal sites, and creative work where the designer's voice should come through in every detail — including the choice of typeface. A font you made is a font that means something." },
            ].map(u => (
              <div key={u.who} className={s.userCard}>
                <h3 className={s.userWho}>{u.who}</h3>
                <p className={s.userDetail}>{u.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={s.section}>
          <div className={s.sectionTag}>07 — Strengths & Weaknesses</div>
          <div className={s.swGrid}>
            <div className={s.swCol}>
              <h3 className={s.swHead}>What it does well</h3>
              {['Personality at display sizes', 'Distinguishable letterforms — low confusion between similar glyphs', 'Pairs well with neutral sans-serifs as a contrast typeface', 'Three weights with consistent character across the family', 'The Bold is genuinely bold — not just thickened Regular'].map(pt => (
                <div key={pt} className={s.swPoint}><span className={s.swDot}>+</span><span>{pt}</span></div>
              ))}
            </div>
            <div className={s.swCol}>
              <h3 className={s.swHead}>Where it struggles</h3>
              {['Small sizes — wobble reads as noise below 13px', 'No extended character set (no diacritics, no ligatures yet)', 'Not suited for long-form body copy at reading sizes', 'Kerning pairs are manually set — some edge cases need more work', 'The Italic lean is subtle — may need additional weight distinction in some pairings'].map(pt => (
                <div key={pt} className={s.swPoint}><span className={`${s.swDot} ${s.swDotMinus}`}>−</span><span>{pt}</span></div>
              ))}
            </div>
          </div>
        </section>

        <section className={`${s.section} ${s.sectionAlt}`}>
          <div className={s.sectionTag}>08 — Vectorization & Refinement</div>
          <div className={s.twoCol}>
            <WobbleTitle className={s.sectionTitlePadded}>Tracing character, not edges.</WobbleTitle>
            <div className={s.sectionBody}>
              <p>The drawings are reference points — actual paths rebuilt in Figma, tracing character rather than literal edge.</p>
              <p>Rule: keep anything that looks like a choice, remove anything that looks like an accident.</p>
              <p>Consistent overshoots for optical stability, uniform counters on B/D/P/R/b/d/p/q, manual kerning on AV, WA, To, ro, re.</p>
            </div>
          </div>
        </section>

        <section className={s.section}>
          <div className={s.sectionTag}>09 — Why Type</div>
          <div className={s.passion}>
            <blockquote className={s.passionQuote}>
              Type is the last thing a designer looks at and the first thing a reader feels.
            </blockquote>
            <p className={s.passionBody}>Typography has been the throughline in every project — from component systems at Salesforce to hand-lettering labels. Building a font forces you to understand letterforms at a level you can't reach by selecting from a dropdown.</p>
            <p className={s.passionBody}>Wobble is a first full release — a set of letters made by hand, with the evidence still in the curves.</p>
          </div>
        </section>

      </div>
      <Footer />
    </main>
  )
}
