import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import s from './VeloursProject.module.css'

export default function VeloursProject() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <main className={s.page}>

      {/* ── Nav ── */}
      <nav className={s.nav}>
        <Link to="/playground" className={s.navMark}>Design Portfolio</Link>
        <span className={s.navCrumb}>Packaging Redesign · Project 04</span>
      </nav>

      {/* ── Hero ── */}
      <div className={s.hero}>
        <div className={s.heroLeft}>
          <p className={s.heroKicker}>Project 04 - Packaging Concept</p>
          <div>
            <h1 className={s.heroH1}>The Last<br /><em>Unrefined</em><br />Daily Ritual</h1>
            <p className={s.heroDesc}>A luxury rebrand of the one product every human being on earth uses every single day, without ever once pausing to wonder if it should be better.</p>
          </div>
          <div className={s.heroStats}>
            <div className={s.heroStat}>
              <label>Product</label>
              <span>Toilet Paper · 4 Rolls</span>
            </div>
            <div className={s.heroStat}>
              <label>Brand Created</label>
              <span>VELOURS by Magnifique Fessier</span>
            </div>
            <div className={s.heroStat}>
              <label>Deliverables</label>
              <span>Pack, Identity, Copy</span>
            </div>
          </div>
        </div>
        <div className={s.heroRight}>
          <div className={s.heroBgText}>V</div>
          <div className={s.rollGroup}>
            <svg viewBox="0 0 320 340" xmlns="http://www.w3.org/2000/svg" className={s.rollSvg}>
              {/* 4 rolls in a 2x2 grid */}
              {[
                { cx: 80,  cy: 90  },
                { cx: 240, cy: 90  },
                { cx: 80,  cy: 255 },
                { cx: 240, cy: 255 },
              ].map(({ cx, cy }, i) => (
                <g key={i}>
                  {/* Cylinder body - top ellipse */}
                  <ellipse cx={cx} cy={cy - 60} rx="62" ry="18" fill="#c8baa0" opacity="0.6"/>
                  {/* Cylinder side */}
                  <rect x={cx - 62} y={cy - 60} width="124" height="120" fill="url(#rollGrad)" rx="0"/>
                  {/* Bottom ellipse */}
                  <ellipse cx={cx} cy={cy + 60} rx="62" ry="18" fill="#b8a888"/>
                  {/* Top ellipse (on top of side) */}
                  <ellipse cx={cx} cy={cy - 60} rx="62" ry="18" fill="#f5f0e8"/>
                  {/* Inner tube top */}
                  <ellipse cx={cx} cy={cy - 60} rx="18" ry="6" fill="#9c7c3c" opacity="0.8"/>
                  {/* Brand band */}
                  <rect x={cx - 62} y={cy - 14} width="124" height="28" fill="#3d4f3b"/>
                  <text x={cx} y={cy + 5} textAnchor="middle"
                    fontFamily="Georgia, serif" fontSize="11" fontWeight="400"
                    letterSpacing="4" fill="#c8d4c6">VELOURS</text>
                  {/* Paper texture lines */}
                  <line x1={cx-55} y1={cy-55} x2={cx-55} y2={cy+58} stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
                  <line x1={cx-20} y1={cy-60} x2={cx-20} y2={cy+60} stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>
                  <line x1={cx+20} y1={cy-60} x2={cx+20} y2={cy+60} stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>
                  <line x1={cx+55} y1={cy-55} x2={cx+55} y2={cy+58} stroke="rgba(0,0,0,0.04)" strokeWidth="1"/>
                </g>
              ))}
              <defs>
                <linearGradient id="rollGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#c0b090"/>
                  <stop offset="20%" stopColor="#e8dcc8"/>
                  <stop offset="50%" stopColor="#faf7f2"/>
                  <stop offset="80%" stopColor="#e0d4bc"/>
                  <stop offset="100%" stopColor="#b8a888"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>

      {/* ── Before / After ── */}
      <section className={s.cmp}>
        <div className={s.si}>
          <p className={s.stag}>Before &amp; After</p>
          <h2>Same product.<br /><em>Different world.</em></h2>
          <p>The supermarket own-brand occupied approximately 11.4 inches of shelf space and communicated, in very large blue font, that the buyer was someone who wanted 12 rolls and didn't want to think about it.</p>
          <p>VELOURS offers 4 rolls. You will think about it.</p>
          <div className={s.cmpGrid}>
            {/* Before */}
            <div>
              <div className={s.cmpLabel}>
                <span className={`${s.cmpBadge} ${s.badgeBefore}`}>Before</span>
                <p>Charmin Ultra Strong. Red and blue. A bear holding a roll. 6 Mega XL = 36 regular. 50% More Per Roll. The message is volume, value, and a cartoon mammal.</p>
              </div>
              <div className={s.packBefore}>
                <img src="/charmin.webp" alt="Charmin Ultra Strong packaging" className={s.charminImg} />
              </div>
            </div>
            {/* After */}
            <div>
              <div className={s.cmpLabel}>
                <span className={`${s.cmpBadge} ${s.badgeAfter}`}>After</span>
                <p>VELOURS. Deep forest green. Playfair Display. The rolls arrive wrapped in tissue. No one falls on the floor.</p>
              </div>
              <div className={s.packAfter}>
                <div className={s.paTop}>
                  <div className={s.paHouse}>Atelier Laurent · Fondé à Paris</div>
                  <div className={s.paOrnament}>- ✦ -</div>
                  <div className={s.paName}>VELOURS</div>
                  <div className={s.paSub}>Tissu de Soin Quotidien</div>
                </div>
                <div className={s.paRule} />
                <div className={s.paMid}>
                  <div className={s.paDetail}>
                    Nordic Pulp · Triple Ply · Unscented<br />
                    Individually Wrapped · 4 Rolls
                  </div>
                  <span className={s.paTagline}>"To begin each day in softness."</span>
                </div>
                <div className={s.paBottom}>Atelier Laurent · Paris · Est. 2024</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Manifesto (dark) ── */}
      <section className={s.manifesto}>
        <div className={s.si}>
          <p className={`${s.stag} ${s.stagDark}`}>The Insight</p>
          <h2 className={s.h2Dark}>The most intimate moment<br />of every day had no brand.</h2>
          <p className={s.pDark}>There are over 8 billion people on earth. Every single one of them uses toilet paper. The global market is worth $82 billion. And yet - with the exception of a handful of Scandinavian brands that have made modest inroads - no one has ever treated this product as though the person using it deserves any dignity whatsoever.</p>
          <p className={s.pDark}>The packaging screams value. It promises volume. It offers checkmarks. It has a bear on it.</p>
          <blockquote className={s.manifestoPull}>
            "The private moments of daily life are the ones most worth designing for. Nobody sees your bathroom. That's precisely the point."
          </blockquote>
          <div className={s.pillars}>
            {[
              { n: '01', title: 'The Forest as Source', body: 'VELOURS positions its material origin - Nordic sustainably managed pulp - as a provenance story. Like a wine region. Like a terroir. The forest is where the product begins. The bathroom is where it ends. Both deserve consideration.' },
              { n: '02', title: 'Scarcity as Luxury', body: 'Four rolls. Not twelve. Not twenty-four. Four. The customer returns more often. Each time, the ritual begins again. VELOURS is not a stockpile. It is a standing appointment.' },
              { n: '03', title: 'The Unblinked Copy', body: "The copy does not mention what the product is for. It never needs to. Everyone already knows. What they didn't know is that they could feel good about it. That is what the copy does." },
            ].map(p => (
              <div key={p.n} className={s.pillar}>
                <div className={s.pillarN}>{p.n}</div>
                <h4 className={s.pillarH4}>{p.title}</h4>
                <p className={s.pDark}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Copy showcase ── */}
      <section className={s.section}>
        <div className={s.si}>
          <p className={s.stag}>Copywriting</p>
          <h2>Copy that commits<br />to the <em>bit completely</em></h2>
          <p>Every word written with the seriousness of a fragrance launch. Not one sentence acknowledges the joke. That is the joke.</p>
          <div className={s.copyWall}>
            {[
              { surface: 'Outer Sleeve - Front Face', title: 'A Philosophy of Softness', body: 'VELOURS is not a convenience. It is a considered choice. Crafted from single-origin Nordic pulp, pressed to triple ply, and finished without fragrance or dye, it asks only that you notice it - once, briefly - before you go about your day.' },
              { surface: 'Inner Wrap - Each Roll', title: 'A Note on Ritual', body: 'This roll has been individually wrapped to preserve its character from production to use. Remove the paper slowly. There is no need to hurry. The day has already begun. You are already in it. Begin here, and begin well.' },
              { surface: 'Base of Sleeve - Small Print', title: 'On Provenance', body: 'The forests of northern Finland are managed on a 120-year cycle. Each tree is harvested only once. We find this appropriate. Certain things are worth waiting for. The paper in your hands was one of them.' },
              { surface: 'Loyalty Card Insert', title: 'Welcome Back', body: 'You have returned. Of course you have. The body, like all disciplined systems, operates on a rhythm. VELOURS is part of yours now. We are glad. This card entitles you to complimentary shipping on your fourth order. We will see you then.' },
            ].map(c => (
              <div key={c.title} className={s.copyPanel}>
                <div className={s.cpSurface}>{c.surface}</div>
                <div className={s.cpTitle}>{c.title}</div>
                <div className={s.cpBody}>{c.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Brand identity ── */}
      <section className={s.identity}>
        <div className={s.si}>
          <p className={s.stag}>Brand System</p>
          <h2>The visual language<br />of <em>everyday luxury</em></h2>
          <div className={s.idGrid}>
            <div>
              <h3 className={s.idSubhead}>Palette</h3>
              <p>Built from the colour of old forests and the inside of a linen wardrobe. Nothing that would embarrass a shelf at Aesop. Nothing that would excite a child.</p>
              <div className={s.swatches}>
                {[
                  { bg: '#3d4f3b', name: 'Forêt',  hex: '#3D4F3B - Primary surface' },
                  { bg: '#c8d4c6', name: 'Brume',  hex: '#C8D4C6 - Accent, lettering', light: true },
                  { bg: '#faf7f2', name: 'Lin',    hex: '#FAF7F2 - Page, tissue', light: true },
                  { bg: '#e8cfc0', name: 'Nude',   hex: '#E8CFC0 - Warm midtone' },
                  { bg: '#141210', name: 'Encre',  hex: '#141210 - Body text, depth' },
                ].map(sw => (
                  <div key={sw.name} className={s.sw}>
                    <div className={s.swDot} style={{ background: sw.bg, border: sw.light ? '0.5px solid rgba(0,0,0,0.1)' : '0.5px solid rgba(0,0,0,0.07)' }} />
                    <div>
                      <span className={s.swLabel}>{sw.name}</span>
                      <span className={s.swHex}>{sw.hex}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className={s.idSubhead}>Typography</h3>
              <p>Playfair Display for anything that needs to be felt. Jost Light for anything that needs to be read. No bold. No urgency.</p>
              <div className={s.typePair}>
                <div className={s.tp}>
                  <div className={s.tpName}>Display - Playfair Display Regular</div>
                  <div className={s.tpDemoSerif}>VELOURS</div>
                  <div className={s.tpDemoSerifIt}>To begin each day<br />in softness.</div>
                </div>
                <div className={s.tp}>
                  <div className={s.tpName}>Body - Jost Light</div>
                  <div className={s.tpDemoSans}>Nordic Pulp · Triple Ply · Unscented<br />Individually Wrapped · Atelier Laurent</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Closing ── */}
      <div className={s.closing}>
        <div className={s.closingInner}>
          <div className={s.closingEyebrow}>Atelier Laurent · Paris · Est. 2024</div>
          <div className={s.closingLine}>"To begin each day<br />in softness."</div>
          <div className={s.closingRule} />
          <div className={s.closingSub}>VELOURS · Tissu de Soin Quotidien · 4 Rolls</div>
        </div>
      </div>

      {/* ── Footer note ── */}
      <div className={s.footerNote}>
        <span className={s.footerName}>Design Portfolio · 2024</span>
        <span className={s.footerText}>Concept project. VELOURS is a fictional brand.<br />The toilet paper, however, is very real and comes in 4-roll packs.</span>
      </div>

      <Footer />
    </main>
  )
}
