# Portfolio — React + Vite

A minimal, clean, and expressive personal portfolio with UX/design/dev case studies, live mockup embeds, and smooth animations.

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

---

## ✏️ Customizing

### Your info
Search for `Your Name` and replace it throughout — especially in:
- `src/components/Nav.jsx` → logo text
- `src/components/Hero.jsx` → headline and sub text
- `src/components/About.jsx` → bio, facts, previous roles
- `src/components/Footer.jsx` → social links
- `src/components/Contact.jsx` → email + social links

### Your projects
Edit `src/data/projects.js` — each project has:
- `title`, `tagline`, `description`, `challenge`, `process`, `outcome`
- `mockupUrl` — paste your Figma prototype link, live demo URL, or any embeddable URL
- `color` — accent color for the project card and banner
- `tags` — tech/tools used

### Your photo
In `src/components/About.jsx`, replace `<div className={styles.photoPlaceholder}>` with:
```jsx
<img src="/your-photo.jpg" alt="Your Name" />
```
Drop the image into the `public/` folder.

### Resume
Drop your `resume.pdf` into the `public/` folder. The nav Resume button links to it automatically.

---

## 📬 Contact Form

The form is wired up but needs a backend. The easiest option is **Formspree** (free tier available):

1. Go to [formspree.io](https://formspree.io) and create a form
2. In `src/components/Contact.jsx`, uncomment the fetch block and replace `YOUR_FORM_ID`

---

## 🌐 Deploying to Vercel

### Option A — GitHub (recommended, auto-deploys on push)

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import your repo
3. Framework preset: **Vite** — Vercel detects this automatically
4. Click **Deploy** ✓

### Option B — Vercel CLI

```bash
npm install -g vercel
vercel
```

Follow the prompts. Done.

---

## 🗂 Project Structure

```
src/
  components/
    Nav.jsx / .module.css
    Hero.jsx / .module.css
    Projects.jsx / .module.css
    About.jsx / .module.css
    Skills.jsx / .module.css
    Contact.jsx / .module.css
    Footer.jsx / .module.css
  pages/
    CaseStudy.jsx / .module.css
  data/
    projects.js        ← Edit your projects here
  styles/
    global.css         ← Design tokens + global styles
  App.jsx              ← Routing + cursor + scroll animations
  main.jsx
public/
  favicon.svg
  resume.pdf           ← Drop your resume here
  your-photo.jpg       ← Drop your photo here
```
