# Kareem Mahmoud — Personal Portfolio (Project Plan)

A single-page personal portfolio website to present Kareem as a **Front-end Developer**.
This file is the agreed plan: use it as the brief when building the project.

---

## 1. Goal & Audience

- **Goal:** get front-end developer jobs / freelance work.
- **Audience:** recruiters and tech leads first, freelance clients second.
- The site itself is the first proof of skill: UI quality, responsiveness and performance matter.

## 2. Tech Stack (decided)

| Area | Choice |
| --- | --- |
| Build tool | **Vite** |
| Library | **React** (plain JavaScript, no TypeScript at first) |
| Styling | **Plain CSS** (or CSS Modules) with CSS variables; no UI libraries (no Bootstrap / Tailwind) |
| Hosting | **Vercel** (free tier), connected to the GitHub repo |
| Language | **English only** (first version) |
| Icons | **react-icons** for the Skills icons **[Proposed]** |

```bash
npm create vite@latest portfolio -- --template react
cd portfolio
npm install
npm run dev
```

## 3. Site Structure (decided)

Single page, sections in this order:

1. **Hero**
2. **About**
3. **Skills**
4. **Projects**
5. **Contact**

Not in the first version: blog, multiple pages, particle backgrounds, CV download button, LinkedIn link.

## 4. Visual Design (decided)

- **Reference site:** https://portfolio-sweandrew.vercel.app/ — same look and colors, plus **yellow** added.
- **Light and dark mode** with a toggle in the navbar. Dark is the main look; **light mode uses a slightly yellowish (warm cream) white instead of pure white**. **[Decided]**
- A **static glow** (radial gradients) spread across the background of the whole site in both themes. No animated particles.
- **Scroll animations** like the reference site (sections and items fade/slide in as they enter the screen). **[Decided]**
- Fully **responsive** (mobile first).

### Color palettes (dark sampled from the reference screenshot, approximate)

```css
/* Dark (main look) */
:root,
:root[data-theme="dark"] {
  --bg:          #08080c;  /* page background */
  --surface:     #0b0d11;  /* navbar, cards */
  --glow:        #0f1818;  /* background glow tint */
  --text:        #edeff3;  /* headings */
  --muted:       #9a9ea8;  /* secondary text */
  --accent:      #5dead5;  /* teal: primary buttons, links */
  --on-accent:   #08080c;  /* text on teal buttons */
  --yellow:      #facc15;  /* yellow: markers, underlines */
  --yellow-text: #facc15;  /* yellow used as text */
}

/* Light (white tinted slightly yellow) */
:root[data-theme="light"] {
  --bg:          #fbf7e9;  /* warm, slightly yellowish white */
  --surface:     #fffdf5;
  --glow:        #f4edc9;
  --text:        #1b1c22;
  --muted:       #5c5f6a;
  --accent:      #0f766e;  /* deeper teal so it stays readable on light */
  --on-accent:   #ffffff;
  --yellow:      #facc15;  /* used as highlight background / underline */
  --yellow-text: #a16207;  /* darker yellow when used as text */
}
```
The light values are a starting point and should be checked with a contrast tool (target 4.5:1 for text).

Suggested roles (not yet confirmed): teal for primary buttons and links; yellow for highlights (key word in the title, hover states, small markers in Skills).

### Theme behavior

- Default theme follows the device setting (`prefers-color-scheme`); the visitor's choice is saved in `localStorage`.
- The theme is applied with a `data-theme` attribute on `<html>`; a tiny inline script in `index.html` sets it before the first paint so the page never flashes the wrong theme.
- The toggle is a button in the navbar (sun/moon icon, with an `aria-label`).
- The static glow exists in both themes (in light mode it is a soft warm tint).

### Animation

- **Scroll reveal:** each section and its items fade and slide up slightly when they enter the screen (`IntersectionObserver`, triggered once).
- **Stagger:** items inside a group (skills, project cards) appear one after another with a small delay.
- **Hover:** subtle lift and glow on skill items, cards and buttons; the active nav link is highlighted while scrolling.
- Built with CSS transitions and a small `useReveal` hook; no animation library.
- All motion is turned off when the visitor has `prefers-reduced-motion` enabled.
- The reference site's exact animation could not be inspected from text, so this is the standard scroll-reveal approach, to be adjusted after Kareem reviews it.

---

## 5. Content

### Hero
- **Name:** Kareem Mahmoud
- **Title:** Front-end Developer (the words "Front-end" highlighted in yellow)
- **Tagline:** "I build clean, responsive web interfaces with React."
- **Buttons:** View projects (teal) / Contact me
- **Badge:** "Open to work" + location (Egypt)

> Hero details beyond the name are suggested defaults, change them freely.

### About (approved)

> I'm a front-end developer and recent graduate with a background in information systems, computer networks, and business subjects like accounting and public economics. I enjoy turning ideas into fast, responsive interfaces with React, and I like building tools that make sense for real users and real businesses.

### Skills (decided)

Layout: grouped like the **Experience** section of the reference site, but **each skill has an icon** and the whole block is neatly organized:

- Each group has a heading, and below it a tidy list/grid of skill items.
- Each item shows: **icon + name + one-line note**.
- Items reveal with a staggered animation and have a subtle hover effect.
- No percentage bars.

Groups:

- **Languages:** HTML5, CSS3, JavaScript (ES6+)
- **Frameworks & Libraries:** React
- **Tools & Practices:** Git/GitHub, Responsive Design, Vite

Icons **[Proposed]**: `react-icons` (for example `SiHtml5`, `SiCss3`, `SiJavascript`, `SiReact`, `SiGit`, `SiGithub`, `SiVite`, and a generic devices icon for Responsive Design).

Each skill gets a one-line note about how it was used (to be written by Kareem).

### Projects (decided)

- 3 project cards, **added after the portfolio is finished**.
- Each card: **live demo link + GitHub link + short description** (the problem it solves and the technologies used).
- Projects live in a separate data file so adding one never touches the components:

```js
// src/data/projects.js
export const projects = [
  {
    title: "Project name",
    description: "What problem it solves, in two lines.",
    tech: ["React", "CSS"],
    demo: "https://...",
    github: "https://github.com/...",
  },
];
```

### Contact (decided)

- **Email** (opens mail client via `mailto:`)
- **GitHub**
- No LinkedIn yet (to be added later as a single line in the data/config), no CV button for now.

## 6. Suggested Folder Structure

```
portfolio/
├─ public/
├─ src/
│  ├─ components/
│  │  ├─ Navbar.jsx
│  │  ├─ ThemeToggle.jsx
│  │  ├─ Hero.jsx
│  │  ├─ About.jsx
│  │  ├─ Skills.jsx
│  │  ├─ Projects.jsx
│  │  └─ Contact.jsx
│  ├─ data/
│  │  ├─ projects.js
│  │  └─ skills.js
│  ├─ hooks/
│  │  ├─ useTheme.js
│  │  └─ useReveal.js
│  ├─ styles/
│  │  ├─ variables.css
│  │  └─ global.css
│  ├─ App.jsx
│  └─ main.jsx
└─ index.html   (includes the small theme script)
```

## 7. Deployment (Vercel)

1. Push the project to a GitHub repository.
2. On Vercel: **Add New → Project**, import the repo (Vite is auto-detected).
3. Deploy. Every `git push` updates the site automatically.
4. Optional later: buy a custom domain and connect it.

## 8. Next Steps

1. Build the project with the structure above.
2. Write the one-line notes for each skill.
3. Create a LinkedIn profile, then add its link to Contact.
4. Add the 3 projects to `projects.js`.
5. Prepare an English CV and add the download button when ready.
