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

Not in the first version: blog, multiple pages, heavy animations, CV download button, LinkedIn link.

## 4. Visual Design (decided)

- **Reference site:** https://portfolio-sweandrew.vercel.app/ — same look and colors, plus **yellow** added.
- Dark theme with a **static glow** (radial gradients) spread across the background of the whole site. No animated particles.
- Fully **responsive** (mobile first).

### Color palette (sampled from the reference screenshot, approximate)

```css
:root {
  --bg:      #08080c;  /* page background */
  --surface: #0b0d11;  /* navbar, cards */
  --glow:    #0f1818;  /* background glow tint */
  --text:    #edeff3;  /* headings */
  --muted:   #9a9ea8;  /* secondary text */
  --accent:  #5dead5;  /* teal: primary buttons, links */
  --yellow:  #facc15;  /* yellow: highlights */
}
```

Suggested roles (not yet confirmed): teal for primary buttons and links; yellow for highlights (key word in the title, hover states, small markers in Skills).

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

Layout: rows like the **Experience** section of the reference site (name on one side, short note next to it). No percentage bars. Grouped:

- **Languages:** HTML5, CSS3, JavaScript (ES6+)
- **Frameworks & Libraries:** React
- **Tools & Practices:** Git/GitHub, Responsive Design, Vite

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
│  │  ├─ Hero.jsx
│  │  ├─ About.jsx
│  │  ├─ Skills.jsx
│  │  ├─ Projects.jsx
│  │  └─ Contact.jsx
│  ├─ data/
│  │  ├─ projects.js
│  │  └─ skills.js
│  ├─ styles/
│  │  ├─ variables.css
│  │  └─ global.css
│  ├─ App.jsx
│  └─ main.jsx
└─ index.html
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
