import { SiHtml5, SiJavascript, SiReact, SiGithub, SiVite } from 'react-icons/si';
import { FaCss3Alt } from 'react-icons/fa';
import { MdDevices } from 'react-icons/md';

export const skillGroups = [
  {
    group: "Languages",
    items: [
      {
        name: "HTML5",
        note: "Semantic structure, clean document hierarchy, and accessibility best practices.",
        icon: SiHtml5
      },
      {
        name: "CSS3",
        note: "Modern Flexbox & Grid, CSS variables, fluid typography, and clean micro-interactions.",
        icon: FaCss3Alt
      },
      {
        name: "JavaScript (ES6+)",
        note: "Modern syntax, async/await, DOM APIs, and modular component architecture.",
        icon: SiJavascript
      }
    ]
  },
  {
    group: "Frameworks & Libraries",
    items: [
      {
        name: "React",
        note: "Component-driven development, state management, reusable hooks, and fast responsive UIs.",
        icon: SiReact
      }
    ]
  },
  {
    group: "Tools & Practices",
    items: [
      {
        name: "Git / GitHub",
        note: "Version control, feature branching, clean commit history, and GitHub project management.",
        icon: SiGithub
      },
      {
        name: "Responsive Design",
        note: "Mobile-first approach ensuring consistent, seamless experiences from 320px to wide displays.",
        icon: MdDevices
      },
      {
        name: "Vite",
        note: "Modern build tooling, lightning-fast HMR during development, and lean production bundles.",
        icon: SiVite
      }
    ]
  }
];
