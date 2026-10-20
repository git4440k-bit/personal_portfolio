# MVP Plan — Kareem Mahmoud Portfolio

Based on `portfolio-plan.md` and `portfolio-prd.md`.
Items marked **[Proposed]** are my suggestions and can be changed.

---

## 1. MVP Definition

**The MVP is the smallest version that is live on a public URL and that a recruiter can open on a phone and understand in 30 seconds:** who Kareem is, what he does, which skills he has, and how to contact him.

> **MVP = Navbar + Hero + About + Skills + Contact, deployed on Vercel.**

Success test: Kareem can put the link in a job application today.

## 2. Scope

| Priority | Feature | In MVP? |
| --- | --- | --- |
| Must | Vite + React project, CSS variables, light and dark themes (warm cream white in light mode) with static glow | Yes |
| Must | Navbar with smooth scroll, mobile menu and light/dark toggle | Yes |
| Must | Hero (name, title, tagline, 2 buttons, "Open to work" badge) | Yes |
| Must | About (approved text) | Yes |
| Must | Skills (3 groups, neat layout, an icon + name + one-line note per skill) | Yes |
| Must | Scroll-reveal animations like the reference site (reduced-motion safe) | Yes |
| Must | Contact (Email + GitHub) | Yes |
| Must | Responsive down to 320px | Yes |
| Must | Deploy on Vercel from GitHub | Yes |
| Should | Projects section built from `projects.js` | Yes, structure only **[Proposed]** (see section 5) |
| Should | Basic SEO (title, meta description, Open Graph) | Yes |
| Could | Footer | Yes, it is tiny |
| Won't (now) | The 3 real projects, LinkedIn link, CV button, custom domain, particles, blog, Arabic | Later |

## 3. Build Order

Rough effort estimates, assuming Kareem is comfortable with React basics. They are guesses, not commitments.

### Step 1 — Setup (about 1 to 2 hours)
- [ ] `npm create vite@latest portfolio -- --template react`
- [ ] Create folders: `components/`, `data/`, `styles/`
- [ ] Add `variables.css` with the dark and light palettes and `global.css` (reset, fonts, background glow)
- [ ] Add the small theme script in `index.html` (applies `data-theme` before first paint)
- [ ] Create a GitHub repo and push the first commit

**Done when:** `npm run dev` shows the glow background, and changing `data-theme` in the browser switches dark and light.

### Step 2 — Navbar + Hero (about 3 to 4 hours)
- [ ] Navbar with section links and smooth scroll
- [ ] Mobile menu (open/close)
- [ ] Theme toggle (`useTheme` hook, saved in `localStorage`, defaults to the device setting)
- [ ] Hero: name, title ("Front-end" in yellow), tagline, buttons, badge

**Done when:** the top of the page looks right on phone and desktop, and the buttons scroll to the right sections.

### Step 3 — About + Skills (about 3 to 4 hours)
- [ ] About with the approved text
- [ ] `skills.js` with the 3 groups and an icon for each skill (`react-icons`)
- [ ] Skills layout in the style of the reference site's Experience section: group heading, then neat items with icon, name and note

**Done when:** Skills render from the data file and every skill has a real one-line note.

### Step 4 — Contact + Footer (about 1 hour)
- [ ] Email (`mailto:`) and GitHub links
- [ ] Footer with name and year

**Done when:** both links open the right place.

### Step 5 — Projects structure (about 1 to 2 hours) **[Proposed]**
- [ ] `projects.js` with the agreed data shape
- [ ] `Projects.jsx` rendering cards, hiding missing demo/GitHub buttons

**Done when:** adding one object to the array shows a new card.

### Step 6 — Animations (about 2 to 3 hours)
- [ ] `useReveal` hook with `IntersectionObserver` (fade/slide up when a section or item enters the screen)
- [ ] Staggered reveal for skill items and project cards
- [ ] Hover effects (lift, glow) on skill items, cards and buttons; active nav link while scrolling
- [ ] Turn off all motion when `prefers-reduced-motion` is enabled

**Done when:** scrolling the page animates sections in smoothly, and nothing animates with reduced motion on.

### Step 7 — Polish & check (about 2 hours)
- [ ] Test at 320px, 768px and 1280px, with no horizontal scroll, in both light and dark themes
- [ ] Hover and focus states, text contrast
- [ ] Page `<title>`, meta description, Open Graph tags
- [ ] Run Lighthouse (target: 90+ Performance and Accessibility)

### Step 8 — Deploy (about 30 minutes)
- [ ] Import the repo into Vercel and deploy
- [ ] Open the live link on a real phone

**Total estimate: roughly 14 to 20 hours of work.**

## 4. What Kareem Needs To Prepare Before Step 3

1. One honest line for each skill (HTML5, CSS3, JavaScript, React, Git/GitHub, Responsive Design, Vite).
2. The email address to display.
3. The GitHub profile URL.

## 5. The Projects Question **[Proposed]**

A portfolio with an empty Projects section looks weak, but the plan says the 3 projects are added after the site is finished. Two options for launch day:

| Option | What visitors see | Trade-off |
| --- | --- | --- |
| **A. Hide the Projects section and its nav link until the first project is ready** | A clean 4-section site | Less to show, but nothing looks unfinished |
| **B. Show the section with a short "Projects coming soon" message** | A visible placeholder | Honest, but a placeholder is the first thing a recruiter may notice |

Recommendation: **Option A**, and add the first project as soon as possible (this is the first item after the MVP).

## 6. Definition of Done (MVP)

1. The site is live on a public Vercel URL.
2. Navbar, Hero, About, Skills and Contact show the agreed content and palettes (dark, and light with a warm yellowish white).
3. No layout break or horizontal scroll at 320px, 768px and 1280px, in both themes.
4. The theme toggle works, is remembered, and does not flash on reload.
5. Sections and skill items animate in on scroll, and every skill has an icon.
6. Email and GitHub links work.
7. Every skill has a real note, and no placeholder text is left.
8. Lighthouse Performance and Accessibility are 90 or above on mobile.
9. A `git push` updates the live site.

## 7. After the MVP (in order)

| # | Item | Why |
| --- | --- | --- |
| 1 | Add the 3 real projects with demo and GitHub links | The most important proof for a front-end role |
| 2 | Create a LinkedIn profile and add the link | Recruiters search there first |
| 3 | Prepare an English CV and add a download button | Many applications ask for one |
| 4 | Custom domain (for example `kareemmahmoud.dev`) | Looks more professional |
| 5 | Optional extras: light-weight particles, Arabic version, TypeScript | Nice to have |

## 8. If Time Runs Short

Cut in this order and still ship:
1. Footer
2. Staggered and hover animation extras (keep a simple fade-in)
3. Open Graph tags
4. Mobile menu animation (keep a simple one)
5. Projects structure (use Option A and add it later)

Never cut: responsiveness, readable contrast in both themes, the light/dark toggle, working contact links, deployment.
