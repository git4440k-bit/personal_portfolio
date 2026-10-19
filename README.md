# Kareem Mahmoud — Personal Portfolio

> A modern, responsive single-page portfolio website showcasing front-end development expertise, clean UI design, and responsive web applications.

---

## ⚡ Tech Stack

- **Framework:** React 19
- **Build Tool:** Vite
- **Styling:** Custom CSS with CSS Variables (No external UI frameworks)
- **Deployment:** Vercel

---

## 🎨 Visual Design & Theme

- **Dark Theme:** Deep dark backgrounds (`#08080c`) with elevated surfaces (`#0b0d11`).
- **Static Radial Ambient Glow:** Sophisticated layered radial gradients without heavy JavaScript particle overhead.
- **Accents:** Teal (`#5dead5`) for primary actions and subtle glows; Yellow (`#facc15`) for prominent highlights and status indicators.
- **Responsive:** Mobile-first architecture, tested across 320px, 768px, and 1280px+ viewports without horizontal scrolling.

---

## 📂 Project Structure

```
├── public/
│   └── favicon.svg           # Custom branded SVG favicon
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # Sticky navigation with mobile drawer & smooth scroll
│   │   ├── Hero.jsx          # Hero section with status badge, headline & actions
│   │   ├── About.jsx         # Background bio and interdisciplinary pillars
│   │   ├── Skills.jsx        # Row-style technical competency showcase
│   │   ├── Projects.jsx      # Data-driven project cards with conditional links
│   │   ├── Contact.jsx       # Reach out section with copy-to-clipboard & links
│   │   └── Footer.jsx        # Semantic footer with back-to-top action
│   ├── data/
│   │   ├── projects.js       # Easily add/edit project cards
│   │   ├── skills.js         # Easily update skills & competency notes
│   │   └── contact.js        # Configurable contact channels (Email, GitHub, LinkedIn)
│   ├── styles/
│   │   ├── variables.css     # CSS custom properties / theme tokens
│   │   ├── global.css        # Reset, typography, ambient glow & utilities
│   │   ├── Navbar.css
│   │   ├── Hero.css
│   │   ├── About.css
│   │   ├── Skills.css
│   │   ├── Projects.css
│   │   ├── Contact.css
│   │   └── Footer.css
│   ├── App.jsx               # Main application layout
│   └── main.jsx              # Entry point mounting React root
├── index.html                # SEO meta tags, Open Graph, and page title
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start local development server
npm run dev
```

### Production Build

```bash
# Build optimized production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 📝 Customizing Content

### 1. Adding or Modifying Projects
Open `src/data/projects.js` and add or modify items:
```javascript
{
  title: "New Project Name",
  description: "Problem solved and key highlights.",
  tech: ["React", "CSS3", "Vite"],
  demo: "https://demo-url.com",      // Omit or leave empty to hide button
  github: "https://github.com/...",  // Omit or leave empty to hide button
}
```

### 2. Modifying Skills
Open `src/data/skills.js` to edit skill names or notes under Languages, Frameworks, or Tools.

### 3. Contact & Social Channels
Open `src/data/contact.js` to update your email or add your LinkedIn URL:
```javascript
{
  id: "linkedin",
  name: "LinkedIn",
  value: "linkedin.com/in/kareemmahmoud",
  url: "https://www.linkedin.com/in/kareemmahmoud",
  type: "external",
  description: "Professional profile and networking"
}
```

---

## 🌐 Deploying to Vercel

1. Push this repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio release"
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
2. Log into [Vercel](https://vercel.com).
3. Click **Add New → Project** and import your repository.
4. Vercel automatically detects the Vite build command (`npm run build`) and output directory (`dist`).
5. Click **Deploy**. Any future commits pushed to `main` will trigger automated deployments.
