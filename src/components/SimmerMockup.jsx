import { useState } from 'react'
import s from './SimmerMockup.module.css'

const SCREENS = ['Home', 'Filter', 'Results', 'Recipe', 'Cook Mode', 'Shopping List']

// ── Bottom Nav ────────────────────────────────────────────────
function BottomNav({ active, onNav }) {
  const items = [
    { id: 'Home',          icon: '⌂', label: 'Home' },
    { id: 'Filter',        icon: '⊟', label: 'Search' },
    { id: 'Shopping List', icon: '🛒', label: 'List' },
  ]
  return (
    <div className={s.bottomNav}>
      {items.map(item => (
        <button
          key={item.id}
          className={`${s.bottomNavItem} ${active === item.id ? s.bottomNavActive : ''}`}
          onClick={() => onNav(item.id)}
        >
          <span className={s.bottomNavIcon}>{item.icon}</span>
          <span className={s.bottomNavLabel}>{item.label}</span>
        </button>
      ))}
    </div>
  )
}

// ── Home Screen ───────────────────────────────────────────────
function HomeScreen({ onNav }) {
  const featured = [
    { emoji: '🍜', title: 'Spicy Garlic Noodles', time: 18, tag: 'Vegan', color: '#FF6B35' },
    { emoji: '🌮', title: 'Black Bean Tacos', time: 20, tag: 'Vegan', color: '#4CAF50' },
    { emoji: '🍳', title: 'Mushroom Frittata', time: 22, tag: 'Vegetarian', color: '#9C27B0' },
  ]
  return (
    <div className={s.homeScreen}>
      <div className={s.homeHeader}>
        <div>
          <p className={s.homeGreeting}>Good evening 👋</p>
          <h2 className={s.homeTitle}>What are you <em>cooking</em> tonight?</h2>
        </div>
        <div className={s.pantryPill} onClick={() => onNav('Filter')}>
          🧅 14 items
        </div>
      </div>

      {/* Quick search bar */}
      <button className={s.homeSearchBar} onClick={() => onNav('Filter')}>
        <span className={s.homeSearchIcon}>🔍</span>
        <span className={s.homeSearchText}>What do you have? How much time?</span>
      </button>

      {/* Quick filters */}
      <div className={s.quickFilters}>
        <span className={s.quickLabel}>Quick filters</span>
        <div className={s.quickChips}>
          {['Under 20 min', 'Use my pantry', 'Vegan', 'High protein'].map(f => (
            <button key={f} className={s.quickChip} onClick={() => onNav('Results')}>{f}</button>
          ))}
        </div>
      </div>

      {/* Featured */}
      <div className={s.featuredSection}>
        <span className={s.quickLabel}>Tonight's picks</span>
        <div className={s.featuredList}>
          {featured.map((r, i) => (
            <div key={i} className={s.featuredCard} style={{ '--fc': r.color }} onClick={() => onNav('Recipe')}>
              <div className={s.featuredCardPhoto} style={{ background: r.color + '22' }}>
                <span className={s.featuredEmoji}>{r.emoji}</span>
              </div>
              <div className={s.featuredInfo}>
                <span className={s.featuredTitle}>{r.title}</span>
                <div className={s.featuredMeta}>
                  <span>⏱ {r.time}m</span>
                  <span className={s.featuredTag} style={{ color: r.color }}>● {r.tag}</span>
                </div>
              </div>
              <span className={s.featuredArrow}>→</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ── Filter Screen ─────────────────────────────────────────────
function FilterScreen({ onNav }) {
  const [time, setTime] = useState(30)
  const [diet, setDiet] = useState(['Vegan'])
  const [meal, setMeal] = useState('Dinner')
  const [skill, setSkill] = useState('Easy')
  const meals = ['Breakfast', 'Lunch', 'Dinner', 'Snack', 'Dessert']
  const diets = ['Vegan', 'Vegetarian', 'Gluten-free', 'Dairy-free', 'Keto', 'Halal']
  const skills = ['Easy', 'Medium', 'Advanced']
  const toggle = (arr, setArr, val) => setArr(prev => prev.includes(val) ? prev.filter(x => x !== val) : [...prev, val])

  return (
    <div className={s.filterScreen}>
      <div className={s.filterTopBar}>
        <button className={s.topBackBtn} onClick={() => onNav('Home')}>← Back</button>
        <span className={s.filterTopTitle}>Find a recipe</span>
        <span />
      </div>

      <div className={s.filterBody}>
        <div className={s.filterCard}>
          <div className={s.filterCardHeader}>
            <span className={s.filterCardIcon}>⏱</span>
            <span className={s.filterCardLabel}>Time available</span>
            <span className={s.filterCardValue} style={{ color: '#FF6B35' }}><strong>{time} min</strong></span>
          </div>
          <input type="range" min={10} max={90} step={5} value={time} onChange={e => setTime(+e.target.value)} className={s.slider} />
          <div className={s.sliderTicks}><span>10m</span><span>30m</span><span>60m</span><span>90m</span></div>
        </div>

        <div className={s.filterCard}>
          <div className={s.filterCardHeader}>
            <span className={s.filterCardIcon}>🍽</span>
            <span className={s.filterCardLabel}>Meal type</span>
          </div>
          <div className={s.chipWrap}>
            {meals.map(m => <button key={m} className={`${s.chip} ${meal === m ? s.chipOn : ''}`} onClick={() => setMeal(m)}>{m}</button>)}
          </div>
        </div>

        <div className={s.filterCard}>
          <div className={s.filterCardHeader}>
            <span className={s.filterCardIcon}>🥗</span>
            <span className={s.filterCardLabel}>Dietary needs</span>
          </div>
          <div className={s.chipWrap}>
            {diets.map(d => <button key={d} className={`${s.chip} ${diet.includes(d) ? s.chipOn : ''}`} onClick={() => toggle(diet, setDiet, d)}>{d}</button>)}
          </div>
        </div>

        <div className={s.filterCard}>
          <div className={s.filterCardHeader}>
            <span className={s.filterCardIcon}>👨‍🍳</span>
            <span className={s.filterCardLabel}>Skill level</span>
          </div>
          <div className={s.chipWrap}>
            {skills.map(sk => <button key={sk} className={`${s.chip} ${skill === sk ? s.chipOn : ''}`} onClick={() => setSkill(sk)}>{sk}</button>)}
          </div>
        </div>

        <div className={s.filterRow2}>
          <div className={s.filterMini}>
            <span>🧅</span>
            <div><span className={s.miniLabel}>Pantry</span><span className={s.miniVal}>14 items</span></div>
          </div>
          <div className={s.filterMini}>
            <span>👥</span>
            <div><span className={s.miniLabel}>Servings</span><span className={s.miniVal}>2 people</span></div>
          </div>
        </div>

        <button className={s.findBtn} onClick={() => onNav('Results')}>
          🔥 Find recipes
        </button>
      </div>
    </div>
  )
}

// ── Results Screen ────────────────────────────────────────────
function ResultsScreen({ onNav }) {
  const results = [
    { emoji: '🍜', title: 'Spicy Garlic Noodles', time: 18, cal: 420, cuisine: 'Asian', match: 98, missing: 0, color: '#FF6B35', tags: ['Vegan', 'Quick'] },
    { emoji: '🌮', title: 'Black Bean Tacos', time: 20, cal: 380, cuisine: 'Mexican', match: 94, missing: 0, color: '#4CAF50', tags: ['Vegan'] },
    { emoji: '🍳', title: 'Mushroom Frittata', time: 22, cal: 310, cuisine: 'Italian', match: 91, missing: 1, color: '#9C27B0', tags: ['Vegetarian'] },
    { emoji: '🍝', title: 'Lemon Pasta', time: 25, cal: 450, cuisine: 'Italian', match: 88, missing: 2, color: '#2196F3', tags: ['Vegetarian'] },
  ]
  return (
    <div className={s.screen}>
      <div className={s.topBar}>
        <button className={s.topBackBtn} onClick={() => onNav('Filter')}>← Back</button>
        <span className={s.topTitle}>4 results</span>
        <button className={s.topActionBtn} onClick={() => onNav('Filter')}>Edit</button>
      </div>
      <div className={s.filterSummary}>Vegan · Under 30 min · Dinner · Easy</div>
      <div className={s.resultsList}>
        {results.map((r, i) => (
          <div key={i} className={s.resultCard} onClick={() => onNav('Recipe')}>
            <div className={s.resultPhoto} style={{ background: r.color + '22' }}>
              <span className={s.resultEmoji}>{r.emoji}</span>
              <span className={s.matchBadge} style={{ background: r.color }}>{r.match}%</span>
            </div>
            <div className={s.resultBody}>
              <div className={s.resultRow1}>
                <strong className={s.resultTitle}>{r.title}</strong>
                {r.missing > 0 && <span className={s.missingBadge}>+{r.missing} needed</span>}
              </div>
              <div className={s.resultMeta}>
                <span>⏱ {r.time}m</span>
                <span>🔥 {r.cal} cal</span>
                <span>{r.cuisine}</span>
              </div>
              <div className={s.resultTags}>
                {r.tags.map(t => <span key={t} className={s.resultTag} style={{ background: r.color + '18', color: r.color }}>{t}</span>)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── Recipe Detail ─────────────────────────────────────────────
function RecipeScreen({ onNav }) {
  const ingredients = [
    { name: 'Noodles', qty: '200g', have: true },
    { name: 'Sesame oil', qty: '2 tbsp', have: true },
    { name: 'Garlic', qty: '6 cloves', have: true },
    { name: 'Soy sauce', qty: '3 tbsp', have: true },
    { name: 'Chili flakes', qty: '1 tsp', have: true },
    { name: 'Green onions', qty: '4 stalks', have: false },
    { name: 'Sesame seeds', qty: '1 tbsp', have: true },
  ]
  return (
    <div className={s.screen}>
      <div className={s.recipeHero}>
        <button className={s.topBackBtn} style={{ position: 'absolute', top: 12, left: 16, zIndex: 2 }} onClick={() => onNav('Results')}>← Back</button>
        <div className={s.recipeHeroBg}>
          <span className={s.recipeHeroEmoji}>🍜</span>
        </div>
        <div className={s.recipeHeroInfo}>
          <span className={s.recipeCuisineBadge}>Asian · Easy</span>
          <h2 className={s.recipeNameBig}>Spicy Garlic Noodles</h2>
          <div className={s.recipePillRow}>
            <span className={s.recipePill}>⏱ 18 min total</span>
            <span className={s.recipePill}>⚡ 18 min active</span>
            <span className={s.recipePill}>🔥 420 cal</span>
          </div>
        </div>
      </div>

      <div className={s.recipeBody}>
        <div className={s.ingredientBlock}>
          <div className={s.ingredientBlockHeader}>
            <span className={s.blockLabel}>Ingredients</span>
            <button className={s.addListBtn} onClick={() => onNav('Shopping List')}>+ List</button>
          </div>
          {ingredients.map((ing, i) => (
            <div key={i} className={s.ingRow}>
              <span className={`${s.ingDot} ${ing.have ? s.ingHave : s.ingMiss}`}>{ing.have ? '✓' : '!'}</span>
              <span className={s.ingName} style={{ opacity: ing.have ? 1 : 0.55 }}>{ing.name}</span>
              <span className={s.ingQty}>{ing.qty}</span>
              {!ing.have && <button className={s.ingAdd} onClick={() => onNav('Shopping List')}>Add</button>}
            </div>
          ))}
        </div>
        <button className={s.cookNowBtn} onClick={() => onNav('Cook Mode')}>
          Start cooking →
        </button>
      </div>
    </div>
  )
}

// ── Cook Mode ─────────────────────────────────────────────────
function CookMode({ onNav }) {
  const [step, setStep] = useState(0)
  const [timerOn, setTimerOn] = useState(false)
  const steps = [
    { text: 'Bring a large pot of salted water to a boil. Cook noodles until al dente, about 8 minutes.', timer: 480 },
    { text: 'Heat 2 tablespoons of sesame oil in a large skillet over medium-high heat until shimmering.', timer: null },
    { text: 'Add 6 cloves of minced garlic and cook, stirring constantly, for 90 seconds until golden and fragrant.', timer: 90, tip: 'The oil is ready when it shimmers but does not smoke.' },
    { text: 'Add soy sauce, chili flakes, and a splash of pasta water. Stir to combine into a glossy sauce.', timer: null },
    { text: 'Drain noodles and toss in the skillet with the sauce until fully coated.', timer: null },
    { text: 'Plate and top with sesame seeds and sliced green onions. Serve immediately.', timer: null },
  ]
  const cur = steps[step]
  return (
    <div className={s.cookMode}>
      <div className={s.cookTopBar}>
        <button className={s.cookBackBtn} onClick={() => onNav('Recipe')}>✕ Exit</button>
        <span className={s.cookRecipeName}>Spicy Garlic Noodles</span>
        <span className={s.cookStepCount}>{step + 1}/{steps.length}</span>
      </div>
      <div className={s.cookBar}>
        <div className={s.cookBarFill} style={{ width: `${((step + 1) / steps.length) * 100}%` }} />
      </div>
      <div className={s.cookBody}>
        <span className={s.cookStepLabel}>Step {step + 1}</span>
        <p className={s.cookStepText}>{cur.text}</p>
        {cur.tip && (
          <div className={s.cookTip}>
            <span>💡</span>
            <span>{cur.tip}</span>
          </div>
        )}
        {cur.timer && (
          <button className={`${s.cookTimer} ${timerOn ? s.cookTimerOn : ''}`} onClick={() => setTimerOn(t => !t)}>
            {timerOn ? `⏱ Running — ${Math.floor(cur.timer / 60)}:${String(cur.timer % 60).padStart(2, '0')}` : `⏱ Start ${cur.timer >= 60 ? Math.floor(cur.timer / 60) + 'm ' : ''}${cur.timer % 60 > 0 ? cur.timer % 60 + 's' : ''} timer`}
          </button>
        )}
      </div>
      <div className={s.cookFooter}>
        <button className={s.cookNavBtn} onClick={() => setStep(s => Math.max(0, s - 1))} disabled={step === 0}>← Prev</button>
        <div className={s.cookDots}>
          {steps.map((_, i) => <span key={i} className={`${s.cookDot} ${i === step ? s.cookDotOn : ''}`} onClick={() => setStep(i)} />)}
        </div>
        {step < steps.length - 1
          ? <button className={s.cookNavBtn} onClick={() => setStep(s => s + 1)}>Next →</button>
          : <button className={s.cookDoneBtn} onClick={() => onNav('Home')}>Done ✓</button>
        }
      </div>
    </div>
  )
}

// ── Shopping List ─────────────────────────────────────────────
function ShoppingListScreen({ onNav }) {
  const [checked, setChecked] = useState([])
  const toggle = (id) => setChecked(p => p.includes(id) ? p.filter(x => x !== id) : [...p, id])
  const sections = [
    { label: '🥬 Produce', items: [{ id: 1, name: 'Green onions', qty: '4 stalks', recipe: 'Spicy Garlic Noodles' }, { id: 2, name: 'Baby spinach', qty: '100g', recipe: 'Mushroom Frittata' }] },
    { label: '🥚 Dairy & Eggs', items: [{ id: 3, name: 'Eggs', qty: '6 large', recipe: 'Mushroom Frittata' }] },
    { label: '🫙 Pantry', items: [{ id: 4, name: 'Tahini', qty: '1 jar', recipe: 'Lemon Pasta' }] },
  ]
  return (
    <div className={s.screen}>
      <div className={s.topBar}>
        <button className={s.topBackBtn} onClick={() => onNav('Home')}>← Home</button>
        <span className={s.topTitle}>Shopping List</span>
        <button className={s.topActionBtn}>Share</button>
      </div>
      <p className={s.listSub}>4 missing items · auto-generated from your pantry</p>
      {sections.map(sec => (
        <div key={sec.label} className={s.listSection}>
          <span className={s.listSectionLabel}>{sec.label}</span>
          {sec.items.map(item => (
            <div key={item.id} className={`${s.listItem} ${checked.includes(item.id) ? s.listItemDone : ''}`} onClick={() => toggle(item.id)}>
              <span className={`${s.listCheck} ${checked.includes(item.id) ? s.listChecked : ''}`}>{checked.includes(item.id) ? '✓' : ''}</span>
              <div className={s.listItemInfo}>
                <span className={s.listItemName}>{item.name}</span>
                <span className={s.listItemRecipe}>For {item.recipe}</span>
              </div>
              <span className={s.listItemQty}>{item.qty}</span>
            </div>
          ))}
        </div>
      ))}
      <div className={s.listFooter}>
        <span className={s.listFooterText}>✦ Items auto-added from recipe gaps</span>
      </div>
    </div>
  )
}

// ── Main ──────────────────────────────────────────────────────
export default function SimmerMockup() {
  const [active, setActive] = useState('Home')
  const isCook = active === 'Cook Mode'
  const showBottomNav = !isCook

  const map = {
    'Home':          <HomeScreen        onNav={setActive} />,
    'Filter':        <FilterScreen      onNav={setActive} />,
    'Results':       <ResultsScreen     onNav={setActive} />,
    'Recipe':        <RecipeScreen      onNav={setActive} />,
    'Cook Mode':     <CookMode          onNav={setActive} />,
    'Shopping List': <ShoppingListScreen onNav={setActive} />,
  }

  return (
    <div className={s.wrapper}>
      <div className={s.tabs}>
        {SCREENS.map(sc => (
          <button key={sc} className={`${s.tab} ${active === sc ? s.tabOn : ''}`} onClick={() => setActive(sc)}>{sc}</button>
        ))}
      </div>
      <div className={s.phoneWrap}>
        <div className={`${s.phone} ${isCook ? s.phoneDark : ''}`}>
          <div className={s.notch} />
          <div className={s.phoneInner}>
            {!isCook && (
              <div className={s.statusBar}>
                <span className={s.appWordmark}>🫧 simmer</span>
              </div>
            )}
            <div className={s.content}>{map[active]}</div>
            {showBottomNav && <BottomNav active={active} onNav={setActive} />}
          </div>
          <div className={s.homeBar} />
        </div>
      </div>
    </div>
  )
}
