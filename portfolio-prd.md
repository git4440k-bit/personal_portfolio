# PRD — Kareem Mahmoud Personal Portfolio

| | |
| --- | --- |
| **Product** | Personal portfolio website |
| **Owner** | Kareem Mahmoud |
| **Version** | 1.1 (first release, updated with light/dark mode, scroll animations and skill icons) |
| **Status** | Draft, ready for build |
| **Date** | 2026-10-19 |

> Items marked **[Decided]** were confirmed by Kareem. Items marked **[Proposed]** are suggested defaults that can be changed.

---

## 1. Overview

A single-page personal portfolio that presents Kareem Mahmoud as a **Front-end Developer**. The site is both the showcase and the first proof of skill: its design quality, responsiveness and performance are part of the pitch.

## 2. Problem & Goals

**Problem:** Kareem has no public place that presents his skills and projects to recruiters and clients in a clear, professional way.

**Goals**
1. Give recruiters and tech leads a fast understanding of who Kareem is, what he builds, and how to reach him. **[Decided]**
2. Demonstrate front-end ability through the site itself (React, CSS, responsive layout). **[Decided]**
3. Make adding new projects trivial (data-driven, no component changes). **[Decided]**

**Non-goals (version 1)** **[Decided]**
- Blog, multiple pages, or a CMS
- Particle backgrounds and heavy animation libraries
- CV download button
- LinkedIn link (no account yet)
- Multi-language support (English only)

## 3. Target Users

| User | Need | What they look for |
| --- | --- | --- |
| Recruiter / hiring manager | Judge a candidate in about 30 seconds | Name, role, skills, best projects, a way to contact |
| Tech lead / interviewer | Assess technical quality | Live demos, GitHub code, clean UI, responsive behavior |
| Freelance client | Find someone who can build an interface | Past work and an easy contact route |

## 4. User Stories

- As a recruiter, I want to see the name and role immediately so I know who this is without scrolling.
- As a recruiter, I want a short, honest summary so I can understand the background quickly.
- As a tech lead, I want to see the skills grouped clearly so I can match them to our stack.
- As a tech lead, I want each project to have a live demo and a GitHub link so I can verify the work.
- As any visitor on a phone, I want the site to be fully usable on a small screen.
- As any visitor, I want one obvious way to contact Kareem.

## 5. Functional Requirements

### 5.1 Navigation
- **FR-1** A fixed navbar with the name on the left, links to About, Skills, Projects, Contact, and a light/dark theme toggle. **[Proposed layout, Decided toggle]**
- **FR-2** Clicking a link scrolls smoothly to the matching section.
- **FR-3** On mobile the navbar collapses into a menu. **[Proposed]**

### 5.2 Hero **[Decided structure, Proposed wording]**
- **FR-4** Shows the name "Kareem Mahmoud" and the title "Front-end Developer", with "Front-end" highlighted in yellow.
- **FR-5** Tagline: *"I build clean, responsive web interfaces with React."*
- **FR-6** Two buttons: **View projects** (teal) scrolls to Projects; **Contact me** scrolls to Contact.
- **FR-7** An "Open to work" badge with the location (Egypt).

### 5.3 About **[Decided]**
- **FR-8** Shows this text:

> I'm a front-end developer and recent graduate with a background in information systems, computer networks, and business subjects like accounting and public economics. I enjoy turning ideas into fast, responsive interfaces with React, and I like building tools that make sense for real users and real businesses.

### 5.4 Skills **[Decided]**
- **FR-9** Skills are grouped like the Experience section of the reference site, in a neat, well-organized layout: each group has a heading and a tidy list/grid of items.
- **FR-10** Three groups:
  - Languages: HTML5, CSS3, JavaScript (ES6+)
  - Frameworks & Libraries: React
  - Tools & Practices: Git/GitHub, Responsive Design, Vite
- **FR-11** Each item shows an **icon, the skill name and a one-line note**.
- **FR-12** No percentage bars or fake proficiency levels.
- **FR-13** Skills come from `src/data/skills.js`, including the icon reference.
- **FR-14** Items reveal with a staggered scroll animation and have a subtle hover effect.
- Icons **[Proposed]:** `react-icons`.

### 5.5 Projects **[Decided]**
- **FR-15** Shows 3 project cards, added after the site is finished.
- **FR-16** Each card has: title, short description (problem solved), technology tags, a **live demo** link, and a **GitHub** link.
- **FR-17** Cards are rendered from `src/data/projects.js`; adding a project means adding one object.
- **FR-18** If a project has no demo or no GitHub link, that button is hidden instead of broken.

### 5.6 Contact **[Decided]**
- **FR-19** Shows an **Email** link (`mailto:`) and a **GitHub** link.
- **FR-20** Links open in a new tab (except `mailto:`), with `rel="noopener noreferrer"`.
- **FR-21** Adding LinkedIn later requires adding one entry in a config/data file, with no layout change.

### 5.7 Footer **[Proposed]**
- **FR-22** A small footer with the name and the year.

### 5.8 Light / Dark Theme **[Decided]**
- **FR-23** A toggle in the navbar switches between light and dark mode.
- **FR-24** Light mode uses a **slightly yellowish (warm cream) white** background, not pure white.
- **FR-25** The default follows the device setting; the visitor's choice is saved and restored on the next visit.
- **FR-26** The correct theme is applied before the first paint (no flash of the wrong theme).
- **FR-27** Text and controls meet contrast requirements in both themes.

### 5.9 Animation **[Decided]**
- **FR-28** Sections and their items fade/slide in as they enter the screen (scroll reveal), triggered once.
- **FR-29** Items inside a group appear with a small stagger.
- **FR-30** Subtle hover effects on skill items, cards and buttons; the active nav link is highlighted.
- **FR-31** All motion is disabled when `prefers-reduced-motion` is on.
- The reference site's exact animation could not be inspected from text; the standard scroll-reveal approach is used and adjusted after review.

## 6. Design Requirements **[Decided]**

- **Reference:** https://portfolio-sweandrew.vercel.app/ for layout feel and colors, plus yellow.
- **Themes:** light and dark mode with a navbar toggle. Dark is the main look; light mode uses a slightly yellowish white.
- **Background:** a **static glow** (radial gradients) spread across the whole site in both themes.
- **Responsive:** mobile first; no horizontal scrolling at any width.
- **No UI libraries;** all styling is hand-written CSS with CSS variables (an icon pack is allowed).

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

Color roles **[Proposed]:** teal for primary buttons and links; yellow for highlights (key title word, hover states, small markers).

## 7. Non-Functional Requirements **[Proposed]**

| Area | Requirement |
| --- | --- |
| Performance | Lighthouse Performance ≥ 90 on mobile; no large unoptimized images |
| Accessibility | Lighthouse Accessibility ≥ 90; semantic HTML (`header`, `main`, `section`, `footer`); text contrast ≥ 4.5:1; visible focus states; keyboard-navigable |
| Responsive | Works from 320px up to large desktop |
| SEO | Page `<title>`, meta description, Open Graph tags |
| Browser support | Latest Chrome, Edge, Firefox, Safari |
| Motion | Scroll-reveal, hover and smooth-scroll animations with CSS and `IntersectionObserver` (no animation library); respect `prefers-reduced-motion` |

## 8. Technical Requirements **[Decided]**

- **Build tool:** Vite
- **Library:** React with plain JavaScript (no TypeScript at first)
- **Styling:** plain CSS (or CSS Modules)
- **Hosting:** Vercel free tier, connected to a GitHub repository (auto-deploy on `git push`)
- **Language:** English only
- **Icons:** `react-icons` **[Proposed]**

### Suggested structure

```
src/
├─ components/ (Navbar, ThemeToggle, Hero, About, Skills, Projects, Contact, Footer)
├─ data/       (projects.js, skills.js)
├─ hooks/      (useTheme.js, useReveal.js)
├─ styles/     (variables.css, global.css)
├─ App.jsx
└─ main.jsx
```

### Data shape

```js
// projects.js
{ title, description, tech: [], demo, github }

// skills.js
{ group, items: [{ name, note, icon }] }
```

## 9. Acceptance Criteria

1. All five sections render in order with the agreed content and the agreed color palette.
2. Every nav link and button scrolls or opens to the correct destination.
3. The site has no layout break and no horizontal scroll at 320px, 768px and 1280px.
4. Adding a project to `projects.js` shows a new card without editing any component.
5. Missing demo/GitHub links never produce a broken button.
6. The site is live on a public Vercel URL and updates after a `git push`.
7. Lighthouse scores meet the targets in section 7.
8. The theme toggle switches between light and dark, the choice is remembered, and there is no flash of the wrong theme on reload.
9. In light mode the background is a warm, slightly yellowish white, and all text stays readable.
10. Sections and skill items animate in on scroll, and no animation runs when reduced motion is enabled.
11. Every skill shows an icon, a name and a note, neatly aligned on phone and desktop.

## 10. Success Metrics **[Proposed]**

- The site is live and shareable.
- Kareem can add a project in under 5 minutes.
- Lighthouse Performance and Accessibility both at 90 or above.
- The link is used in job applications and on GitHub profile.

## 11. Milestones **[Proposed]**

| # | Milestone | Output |
| --- | --- | --- |
| 1 | Project setup | Vite + React project, global CSS variables, folder structure |
| 2 | Layout & sections | Navbar with theme toggle, Hero, About, Skills (with icons), Contact |
| 3 | Polish | Light/dark palettes, scroll animations, responsive pass, glow background, hover states, accessibility check |
| 4 | Deploy | GitHub repo + Vercel, live URL |
| 5 | Projects | Add the 3 projects to `projects.js` and redeploy |

## 12. Risks & Dependencies

| Risk / dependency | Impact | Mitigation |
| --- | --- | --- |
| Only 3 projects, and none added at launch | Projects section looks empty at first | Build the section with the data file; fill it in milestone 5 |
| No LinkedIn account | Recruiters often search there first | Create a basic profile and add the link later |
| No CV yet | Some recruiters expect one | Add the button when an English CV is ready |
| Skill notes not written | Skills rows look bare | Kareem writes one honest line per skill before launch |
| Colors are estimated from a screenshot | Slight difference from the reference | Adjust the CSS variables once after review |
| The reference site's animation could not be inspected | Result may differ from what Kareem saw | Build standard scroll-reveal, then adjust after Kareem reviews it |
| Light mode colors are a first guess | Yellow or teal may be hard to read on cream | Check contrast and tune `--yellow-text` and `--accent` for light mode |

## 13. Open Questions

1. The one-line note for each skill (to be written by Kareem).
2. Final email address to display.
3. GitHub profile URL.
4. Whether to buy a custom domain later.
5. Exact wording of the Hero tagline and badge, if Kareem wants changes.
6. Which of the 3 projects use React, and their demo/GitHub links (needed for milestone 5).
7. What exactly the reference site's Experience animation does (fade, slide, line drawing, something else), so it can be matched.
8. Whether the light-mode cream shade feels right (adjustable through `--bg` and `--glow`).
