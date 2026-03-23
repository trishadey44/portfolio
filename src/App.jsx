import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Playground from './components/Playground'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CaseStudy from './pages/CaseStudy'
import Resume from './pages/Resume'

// ─── Cursor ──────────────────────────────────────────────
function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const pos = useRef({ x: 0, y: 0 })
  const ring = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const move = (e) => {
      pos.current = { x: e.clientX, y: e.clientY }
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + 'px'
        dotRef.current.style.top = e.clientY + 'px'
      }
    }

    const hover = (e) => {
      const target = e.target.closest('a, button, [data-hover]')
      ringRef.current?.classList.toggle('hovering', !!target)
    }

    let raf
    const animate = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.12
      ring.current.y += (pos.current.y - ring.current.y) * 0.12
      if (ringRef.current) {
        ringRef.current.style.left = ring.current.x + 'px'
        ringRef.current.style.top = ring.current.y + 'px'
      }
      raf = requestAnimationFrame(animate)
    }
    animate()

    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', hover)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', hover)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div className="cursor-dot" ref={dotRef} />
      <div className="cursor-ring" ref={ringRef} />
    </>
  )
}

// ─── Home ─────────────────────────────────────────────────
function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Playground preview />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </>
  )
}

// ─── App ──────────────────────────────────────────────────
export default function App() {
  const location = useLocation()

  // Handle scroll: if there's a hash, scroll to that section after render.
  // If no hash, scroll to top. This makes nav links work from any page.
  useEffect(() => {
    if (location.hash) {
      // Small delay so the home page components have time to mount
      const id = setTimeout(() => {
        const el = document.querySelector(location.hash)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 80)
      return () => clearTimeout(id)
    } else {
      window.scrollTo(0, 0)
    }
  }, [location])

  // Intersection observer for reveal animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible')
      }),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [location.pathname])

  return (
    <>
      <Cursor />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/playground" element={<><Playground /><Footer /></>} />
        <Route path="/case-study/:slug" element={<CaseStudy />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </>
  )
}
