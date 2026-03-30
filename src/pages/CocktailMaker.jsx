import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import s from './CocktailMaker.module.css'

const COCKTAILS = [
  { name: 'Cosmopolitan',    code: 'c', ingredients: ['Vodka','Triple Sec','Cranberry Juice','Lime Juice','Sugar Water'], color: '#ED1C24' },
  { name: 'Blue Lagoon',     code: 'b', ingredients: ['Vodka','Sprite','Lime Juice','Sugar Water','Blue Curacao'],        color: '#0099CD' },
  { name: 'Lemon Drop',      code: 'd', ingredients: ['Vodka','Triple Sec','Lime Juice','Sugar Water'],                   color: '#FFD520' },
  { name: 'Blue Moon',       code: 'e', ingredients: ['Vodka','Cranberry Juice','Lime Juice','Sugar Water','Blue Curacao'], color: '#7B6FA0' },
  { name: 'Tom Collins',     code: 'h', ingredients: ['Sprite','Lime Juice','Sugar Water','Gin'],                        color: '#6B8F6E' },
  { name: 'Flying Dutchman', code: 'g', ingredients: ['Triple Sec','Lime Juice','Sugar Water','Gin'],                    color: '#F5A623' },
  { name: 'Vodka Cranberry', code: 'k', ingredients: ['Vodka','Cranberry Juice','Sugar Water'],                          color: '#b63b3b' },
  { name: 'London Cosmo',    code: 'j', ingredients: ['Triple Sec','Cranberry Juice','Sprite','Gin'],                    color: '#27567b' },
]

const PUMP_LABELS = ['Vodka','Triple Sec','Cranberry','Sprite','Lime','Sugar','Blue Cur.','Gin']
const PUMP_COLORS = ['#C0C0C0','#FFE566','#ED1C24','#AADDFF','#A8D8A8','#FFFFFF','#0099CD','#EEEEEE']

// ── Photo placeholder ─────────────────────────────────────────
function PhotoSlot({ label, hint, tall }) {
  return (
    <div className={`${s.photoSlot} ${tall ? s.photoSlotTall : ''}`}>
      <div className={s.photoInner}>
        <span className={s.photoIcon}>[ ]</span>
        <p className={s.photoLabel}>{label}</p>
        {hint && <p className={s.photoHint}>{hint}</p>}
      </div>
    </div>
  )
}

// ── Code block ────────────────────────────────────────────────
function Code({ title, lang, children }) {
  const [copied, setCopied] = useState(false)
  const copy = () => {
    navigator.clipboard.writeText(children.trim())
    setCopied(true)
    setTimeout(() => setCopied(false), 1800)
  }
  return (
    <div className={s.codeBlock}>
      <div className={s.codeHeader}>
        <span className={s.codeTitle}>{title}</span>
        <div className={s.codeRight}>
          <span className={s.codeLang}>{lang}</span>
          <button className={s.copyBtn} onClick={copy}>{copied ? 'Copied!' : 'Copy'}</button>
        </div>
      </div>
      <pre className={s.codePre}>{children.trim()}</pre>
    </div>
  )
}

// ── Simulator ─────────────────────────────────────────────────
function Simulator() {
  const [selected, setSelected] = useState(null)
  const [pouring, setPouring] = useState(false)
  const [done, setDone] = useState(false)
  const [level, setLevel] = useState(0)

  const pour = (cocktail) => {
    if (pouring) return
    setSelected(cocktail); setPouring(true); setDone(false); setLevel(0)
    let step = 0; const steps = 60; const duration = 2400
    const iv = setInterval(() => {
      step++; setLevel(Math.round((step / steps) * 100))
      if (step >= steps) { clearInterval(iv); setPouring(false); setDone(true) }
    }, duration / steps)
  }

  const isActive = (pumpLabel) => {
    if (!pouring || !selected) return false
    return selected.ingredients.some(ing =>
      ing.toLowerCase().includes(pumpLabel.toLowerCase().replace('.','').trim().split(' ')[0])
    )
  }

  return (
    <div className={s.simulator}>
      <div className={s.simLeft}>
        <p className={s.simLabel}>Select a cocktail</p>
        <div className={s.cocktailGrid}>
          {COCKTAILS.map(c => (
            <button key={c.code}
              className={`${s.cocktailBtn} ${selected?.code === c.code ? s.cocktailBtnOn : ''}`}
              style={{ '--cc': c.color }}
              onClick={() => pour(c)} disabled={pouring}>
              {c.name}
            </button>
          ))}
        </div>
      </div>
      <div className={s.simRight}>
        <p className={s.simLabel}>Machine output</p>
        <div className={s.machine}>
          <div className={s.pumpRow}>
            {PUMP_LABELS.map((liq, i) => {
              const active = isActive(liq)
              return (
                <div key={liq} className={s.pump}>
                  <div className={s.pumpHead} style={{ background: active ? PUMP_COLORS[i] : '#1E1E2E', transition: 'background 0.3s' }} />
                  <div className={s.pourWrap}>
                    <div className={s.pourTube} style={{ background: active ? PUMP_COLORS[i] : 'transparent' }} />
                    <div className={s.pourDrop} style={{ background: PUMP_COLORS[i], animationPlayState: active ? 'running' : 'paused' }} />
                  </div>
                  <span className={s.pumpLabel}>{liq}</span>
                </div>
              )
            })}
          </div>
          <div className={s.glassWrap}>
            <div className={s.glass}>
              {selected && <div className={s.liquid} style={{ height: `${level}%`, background: selected.color, opacity: 0.75, transition: 'height 0.1s linear' }} />}
            </div>
          </div>
          {done && selected && <p className={s.doneMsg} style={{ color: selected.color }}>{selected.name} ready.</p>}
          {pouring && <p className={s.pouringMsg}>Pouring… {level}%</p>}
        </div>
        {selected && (
          <div className={s.ingredients}>
            <p className={s.ingredientsLabel}>Ingredients</p>
            <div className={s.ingredientsList}>
              {selected.ingredients.map(ing => <span key={ing} className={s.ingredientChip}>{ing}</span>)}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

// ── Page ──────────────────────────────────────────────────────
export default function CocktailMaker() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <main className={s.page}>
      <div className="container">

        {/* ── Header ── */}
        <div className={s.pageHeader}>
          <Link to="/playground" className={s.back}>← Playground</Link>
          <div className={s.heroRow}>
            <div>
              <span className={s.tag}>Arduino · Hardware · 3D Printing · MongoDB</span>
              <h1 className={s.title}>Automatic Cocktail Maker</h1>
              <p className={s.sub}>A bar robot I built from scratch - 8 peristaltic pumps, a 3D printed housing, an Arduino Uno, Bluetooth control, an LED display for order entry, and a MongoDB backend storing every recipe. You pick a drink, it pours itself.</p>
            </div>
            <div className={s.statRow}>
              <div className={s.stat}><span className={s.statNum}>8</span><span className={s.statLabel}>Liquids</span></div>
              <div className={s.stat}><span className={s.statNum}>12</span><span className={s.statLabel}>Recipes</span></div>
              <div className={s.stat}><span className={s.statNum}>1</span><span className={s.statLabel}>Arduino</span></div>
            </div>
          </div>
        </div>

        {/* ── Product photos ── */}
        <div className={s.block}>
          <div className={s.blockHead}>
            <h2 className={s.blockTitle}>The finished product</h2>
            <p className={s.blockNote}>The full machine, a finished pour, and the LED display for order entry.</p>
          </div>
          <div className={s.photoGrid3}>
            <PhotoSlot label="Full product" hint="Replace with: a photo of the complete machine" tall />
            <PhotoSlot label="A finished drink" hint="Replace with: a photo of a cocktail next to the machine" tall />
            <PhotoSlot label="LED display" hint="Replace with: a close-up of the LED display showing a drink order" tall />
          </div>
        </div>

        {/* ── Interactive demo ── */}
        <div className={s.block}>
          <div className={s.blockHead}>
            <h2 className={s.blockTitle}>Interactive demo</h2>
            <p className={s.blockNote}>Select a cocktail - the machine activates the right pumps and fills the glass. This mirrors exactly what the hardware does.</p>
          </div>
          <Simulator />
        </div>

        {/* ── Build process ── */}
        <div className={s.block}>
          <div className={s.blockHead}>
            <h2 className={s.blockTitle}>How I built it</h2>
            <p className={s.blockNote}>The full build process - hardware choices, design decisions, and what I'd change.</p>
          </div>
          <div className={s.processGrid}>
            <div className={s.processCard}>
              <span className={s.processNum}>01</span>
              <h3 className={s.processTitle}>Why peristaltic pumps</h3>
              <p className={s.processBody}>Most DIY cocktail machines use solenoid valves, which are fast but require constant pressure and leak if the tubing isn't perfect. I chose peristaltic pumps instead. They push liquid by compressing a tube in a rolling motion, which means the tubing is the only thing that touches the liquid. Easier to clean, food-safe, and no pressure system to manage. The tradeoff is they're slower - about 40ml per second - but for cocktail pouring that's fine.</p>
            </div>
            <div className={s.processCard}>
              <span className={s.processNum}>02</span>
              <h3 className={s.processTitle}>Timing instead of measuring</h3>
              <p className={s.processBody}>I calibrated each pump by running it for exactly 1000ms and measuring how much liquid came out. Since all 8 pumps are identical, the flow rate is consistent across all channels. Every recipe is stored as milliseconds per ingredient rather than millilitres - simpler to compute, no flow sensors needed. Running the pump for 2500ms delivers roughly 100ml of Vodka. I wrote a calibration routine that primes and tests each pump individually before the first pour.</p>
            </div>
            <div className={s.processCard}>
              <span className={s.processNum}>03</span>
              <h3 className={s.processTitle}>3D printed housing design</h3>
              <p className={s.processBody}>I went through three iterations of the housing. The first was a flat bracket that held pumps in a line - it worked but the tubing was messy and the whole thing was hard to transport. The second added a cable management channel and clip-in mounting for the Arduino and relay board. The third added the front-facing LED display panel and a removable drip tray. I printed everything in PLA, which is fine at room temperature and food-adjacent (the liquid only touches the silicone tubing, never the printed parts).</p>
            </div>
            <div className={s.processCard}>
              <span className={s.processNum}>04</span>
              <h3 className={s.processTitle}>LED display and order entry</h3>
              <p className={s.processBody}>The original version was Bluetooth-only - you needed the phone app to order. That felt like friction at a party. I added a 20×4 LCD display with a rotary encoder and push button so anyone could walk up and select a drink without touching a phone. The display shows the full cocktail menu, scrolls through options as you turn the encoder, and starts the pour when you press. It sends the same character code to the Arduino as the Bluetooth app does, so no changes needed to the core logic.</p>
            </div>
            <div className={s.processCard}>
              <span className={s.processNum}>05</span>
              <h3 className={s.processTitle}>Moving recipes to MongoDB</h3>
              <p className={s.processBody}>The first version had all recipes hardcoded in the Arduino sketch. Adding a new cocktail meant editing C++ code, recompiling, and reflashing the board. I moved the recipe database to MongoDB and added a small Node.js server on a Raspberry Pi. The Arduino queries the server over serial/USB on startup and caches the recipe list locally. This lets me add or edit recipes from a browser without touching the hardware. It also makes the MongoDB schema the single source of truth for everything.</p>
            </div>
            <div className={s.processCard}>
              <span className={s.processNum}>06</span>
              <h3 className={s.processTitle}>Relay board wiring</h3>
              <p className={s.processBody}>The 8-channel relay board is low-true - writing LOW to a pin energises the relay and starts the pump, while HIGH turns it off. This caught me off guard at first: when the Arduino resets, all pins start HIGH, which means all pumps are off by default. That's actually the safe behaviour you want. I added 1kΩ pull-up resistors between each Arduino output pin and the relay input to prevent floating states from misfiring a pump during startup.</p>
            </div>
          </div>
        </div>

        {/* ── Wiring photo ── */}
        <div className={s.block}>
          <div className={s.blockHead}>
            <h2 className={s.blockTitle}>Wiring</h2>
            <p className={s.blockNote}>Arduino Uno → 8-channel relay board → 8 peristaltic pumps. HC-05 Bluetooth on pins 0 and 1.</p>
          </div>
          <div className={s.photoGrid2}>
            <PhotoSlot label="Wiring overview" hint="Replace with: a photo of the full wiring layout" tall />
            <PhotoSlot label="Relay board close-up" hint="Replace with: a close-up of the relay board and connections" tall />
          </div>
        </div>

        {/* ── Code snippets ── */}
        <div className={s.block}>
          <div className={s.blockHead}>
            <h2 className={s.blockTitle}>The code</h2>
            <p className={s.blockNote}>Four key snippets from the Arduino sketch and Node.js backend.</p>
          </div>
          <div className={s.codeStack}>

            <Code title="Bluetooth setup and pin initialisation" lang="C++">
{`// HC-05 communicates over the hardware serial port at 9600 baud.
// All 8 relay pins are set HIGH (off) immediately on boot -
// prevents pumps from firing during Arduino startup.

void setup() {
  Serial.begin(9600);
  Serial.println("Barbot online. Waiting for drink command...");

  int relayPins[] = {2, 3, 4, 5, 6, 7, 8, 9};
  for (int i = 0; i < 8; i++) {
    pinMode(relayPins[i], OUTPUT);
    digitalWrite(relayPins[i], HIGH); // LOW = on (low-true board)
  }

  // Pull-up resistors handle floating state during reset.
  // 1kΩ between each relay IN pin and 5V rail.
}`}
            </Code>

            <Code title="Main loop - reading Bluetooth commands" lang="C++">
{`// The loop reads a single character from the serial port.
// Each character maps to a cocktail recipe.
// State resets after each pour so the next command is clean.

int state = 0;
int timeBetweenPours = 500; // ms gap between pump activations

void loop() {
  if (Serial.available() > 0) {
    state = Serial.read();
    Serial.println(state);
  }

  if (state == 'a') { Serial.println("Vodka Sprite"); Mix(3000,0,0,5000,0,0,0,0); }
  if (state == 'b') { Serial.println("Blue Lagoon");  Mix(2000,0,0,5000,1800,1000,1800,0); }
  if (state == 'c') { Serial.println("Cosmo");        Mix(2500,1500,3800,0,1200,1200,0,0); }
  if (state == 'd') { Serial.println("Lemon Drop");   Mix(1500,1500,0,0,1800,1200,0,0); }
  if (state == 'e') { Serial.println("Blue Moon");    Mix(2000,0,3000,0,1800,1200,1200,0); }
  if (state == 'h') { Serial.println("Tom Collins");  Mix(0,0,0,4000,1800,1800,0,2200); }
  // ... 6 more recipes
}`}
            </Code>

            <Code title="Mix() - the pour algorithm" lang="C++">
{`// Each parameter is the pump run time in milliseconds.
// Pumps fire sequentially to avoid voltage drops from running all 8 at once.
// A 500ms gap between pours lets the relay settle before the next one opens.

void Mix(int vodka, int tripleSec, int cranberry, int sprite,
         int lime,  int sugar,     int blueCur,   int gin) {
  state = 0;
  delay(800); // allow glass to be placed

  // Arguments map directly to pin order: 2 = Vodka, 3 = Triple Sec, etc.
  int pins[]  = {2,      3,         4,        5,       6,     7,       8,       9};
  int times[] = {vodka, tripleSec, cranberry, sprite, lime,  sugar,  blueCur,  gin};

  for (int i = 0; i < 8; i++) {
    if (times[i] > 0) {
      digitalWrite(pins[i], LOW);   // energise relay → pump on
      delay(times[i]);
      digitalWrite(pins[i], HIGH);  // de-energise → pump off
      delay(timeBetweenPours);
    }
  }

  Serial.println("Drink is done!");
  state = 0;
}`}
            </Code>

            <Code title="Calibration routine" lang="C++">
{`// Run once before first use to prime tubes and verify flow rate.
// Sends 1000ml worth of water through each pump and measures output.
// Expected: ~40ml per 1000ms at 12V. Adjust timings if pump varies.

void calibrate() {
  Serial.println("Calibration mode. Running each pump for 1000ms.");
  int pins[] = {2, 3, 4, 5, 6, 7, 8, 9};
  char* labels[] = {"Vodka","Triple Sec","Cranberry","Sprite",
                    "Lime","Sugar","Blue Curacao","Gin"};
  for (int i = 0; i < 8; i++) {
    Serial.print("Testing: "); Serial.println(labels[i]);
    digitalWrite(pins[i], LOW);
    delay(1000);
    digitalWrite(pins[i], HIGH);
    delay(2000); // pause between pumps
    Serial.println("Measure output now.");
  }
  Serial.println("Calibration done. Adjust Mix() timings as needed.");
}`}
            </Code>

          </div>
        </div>

        {/* ── MongoDB ── */}
        <div className={s.block}>
          <div className={s.blockHead}>
            <h2 className={s.blockTitle}>MongoDB recipe database</h2>
            <p className={s.blockNote}>Each document stores a cocktail name, description, command character, and pour times in milliseconds for each of the 8 channels. The Arduino fetches this on startup via the Node.js server running on a Raspberry Pi.</p>
          </div>
          <Code title="cocktails collection - sample documents" lang="JSON">
{`// db.cocktails.find({}).limit(3)

[
  {
    "_id": { "$oid": "64a3f2b1c8e4d90012ab3c01" },
    "name": "Cosmopolitan",
    "description": "Vodka, triple sec, cranberry juice, and fresh lime.",
    "command": "c",
    "category": "classic",
    "active": true,
    "pours": {
      "vodka":        2500,
      "tripleSec":    1500,
      "cranberry":    3800,
      "sprite":          0,
      "lime":         1200,
      "sugar":        1200,
      "blueCuracao":     0,
      "gin":             0
    },
    "createdAt": { "$date": "2024-03-12T18:00:00Z" }
  },
  {
    "_id": { "$oid": "64a3f2b1c8e4d90012ab3c02" },
    "name": "Blue Lagoon",
    "description": "Vodka, blue curacao, sprite, lime, and sugar.",
    "command": "b",
    "category": "tropical",
    "active": true,
    "pours": {
      "vodka":        2000,
      "tripleSec":       0,
      "cranberry":       0,
      "sprite":       5000,
      "lime":         1800,
      "sugar":        1000,
      "blueCuracao":  1800,
      "gin":             0
    },
    "createdAt": { "$date": "2024-03-12T18:00:00Z" }
  },
  {
    "_id": { "$oid": "64a3f2b1c8e4d90012ab3c03" },
    "name": "Tom Collins",
    "description": "Gin, sprite, fresh lime, and sugar syrup.",
    "command": "h",
    "category": "classic",
    "active": true,
    "pours": {
      "vodka":           0,
      "tripleSec":       0,
      "cranberry":       0,
      "sprite":       4000,
      "lime":         1800,
      "sugar":        1800,
      "blueCuracao":     0,
      "gin":          2200
    },
    "createdAt": { "$date": "2024-03-12T18:00:00Z" }
  }
]`}
          </Code>
        </div>

        {/* ── Components list ── */}
        <div className={s.block}>
          <div className={s.blockHead}>
            <h2 className={s.blockTitle}>Components</h2>
          </div>
          <div className={s.componentList}>
            {[
              { name:'Arduino Uno',            detail:'The brain. Reads Bluetooth or serial commands and triggers relays on digital pins 2–9.' },
              { name:'8× Peristaltic pumps 12V', detail:'Food-safe pumps. Each moves one liquid via tube compression - no cross-contamination, no pressure system.' },
              { name:'8-channel relay board',  detail:'Low-true relay module. Energising a relay closes the circuit and runs the pump. Pins default HIGH (off) on boot.' },
              { name:'HC-05 Bluetooth module', detail:'Receives single-character drink commands from the Android app over serial at 9600 baud.' },
              { name:'20×4 LCD + rotary encoder', detail:'Walk-up ordering interface. Scroll the menu with the encoder, push to pour. No phone required.' },
              { name:'Raspberry Pi (Node.js server)', detail:'Runs the MongoDB client and serves the recipe list to the Arduino over USB serial on startup.' },
              { name:'MongoDB Atlas',          detail:'Cloud database storing all recipe documents. Add or edit cocktails from a browser - no reflashing needed.' },
              { name:'3D printed housing (PLA)', detail:'Three-iteration enclosure for all 8 pumps, the control boards, and the LCD display. Drip tray is removable.' },
              { name:'6m silicone tube 6×9mm', detail:'Food-safe, flexible, compatible with peristaltic pump heads. Only part that contacts the liquid.' },
              { name:'1kΩ pull-up resistors', detail:'One per relay input pin, wired to 5V rail. Prevents floating pin states from misfiring pumps during Arduino reset.' },
              { name:'MIT App Inventor 2',     detail:'Android app for Bluetooth-based ordering. Pairs to HC-05 and sends one character per cocktail recipe.' },
            ].map(c => (
              <div key={c.name} className={s.componentRow}>
                <span className={s.componentName}>{c.name}</span>
                <span className={s.componentDetail}>{c.detail}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
      <Footer />
    </main>
  )
}
