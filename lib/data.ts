import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiGit,
  SiTailwindcss,
  SiSass,
  SiFigma,
  SiBootstrap,
} from "react-icons/si";
import { LuGraduationCap } from "react-icons/lu";

import placeholderImage from "@/public/placeholderImage.png";

export const navLinks = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Portfolio",
    hash: "#portfolio",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Front-End Developer",
    organisation: "The Entertainer",
    location: "Hybrid - Amersham",
    description:
      "I am currently a Front-End Developer at The Entertainer. The largest independent toy retailer in the UK.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2022 - Current",
  },
  {
    title: "Web Development Bootcamp",
    organisation: "Bath Spa University",
    location: "Remote",
    description: "I won the awards of 'Star Pupil' and 'Best Portfolio'.",
    icon: React.createElement(LuGraduationCap),
    date: "January - April 2022",
  },
] as const;

export const portfolioData = [
  {
    title: "FilmDB",
    description:
      "A film app created using React to show a snapshot of a film, such as the poster, plot summary and a rating. Try searching for your favourite film.",
    tags: ["React.js", "JavaScript", "SASS", "API"],
    imageUrl: placeholderImage,
    demo: "https://react-filmdb.netlify.app/",
    code: "https://github.com/jamiehitchcock/FE-Lib-Training/tree/main/03-Practice-Project-2/React-Films-App",
  },
  {
    title: "Command Centre",
    description:
      "A companion app for a live service video game called Helldivers 2, created in React. This uses API calls to update users with real time data relating to Helldivers 2. Meaning that you can get the latest news whilst on the go.",
    tags: ["React.js", "JavaScript", "SASS", "API", "React Router"],
    imageUrl: placeholderImage,
    demo: "https://command-centre.netlify.app",
    code: "https://github.com/jamiehitchcock/FE-Lib-Training/tree/main/02-API-Practice-Project/05-Sass-Command-Centre",
  },
  {
    title: "International Space Station Tracker",
    description:
      "Track the location of the ISS against a world map in real time. This uses an API (WhereTheISS) to retrieve coordinates and velocity, then plots the location against a map using Leaflet.js and JavaScript.",
    tags: ["Leaflet.js", "JavaScript", "HTML", "CSS", "API"],
    imageUrl: placeholderImage,
    demo: "https://jamiehitchcock.co.uk/",
    code: "https://github.com/jamiehitchcock/Portfolio",
  },
  {
    title: "Pomodoro Timer",
    description:
      "A timer created for the pomodoro study method of 25 plus 5. I Created this in React as part of a 'Front-End Development Libraries' accreditation with FreeCodeCamp.",
    tags: ["React.js", "JavaScript", "SASS", "Complex State Management"],
    imageUrl: placeholderImage,
    demo: "https://react-pomodoro-timer-jh.netlify.app",
    code: "https://github.com/jamiehitchcock/FCC_FE-Lib_Projects/tree/main/Pomodoro_Timer",
  },
  {
    title: "Calculator",
    description:
      "A typical calculator created in React. You can interact with this by either clicking the buttons or using your keyboard.",
    tags: [
      "React.js",
      "JavaScript",
      "SASS",
      "Algorithms",
      "Complex State Management",
    ],
    imageUrl: placeholderImage,
    demo: "https://react-calculator-jh.netlify.app/",
    code: "https://github.com/jamiehitchcock/FCC_FE-Lib_Projects/tree/main/Calculator",
  },
  {
    title: "Roman Numeral Convertor",
    description:
      "Enter a number and the algorithm will convert this into a Roman Numeral using Javascript. I created this as a challenge for part of a FreeCodeCamp accreditation on 'JavaScript Data Structures and Algorithyms.'",
    tags: ["JavaScript", "HTML", "CSS", "Algorithms"],
    imageUrl: placeholderImage,
    demo: "https://jamiehitchcock.co.uk/",
    code: "https://github.com/jamiehitchcock/Portfolio",
  },
  {
    title: "Real-Time Stock Market Checker",
    description:
      "This allows you to enter a symbol for a stock and view realtime information on its performance using an API (StockData). Try any public stock such as  AAPL, GOOG, PG or KO.",
    tags: ["JavaScript", "HTML", "CSS", "API"],
    imageUrl: placeholderImage,
    demo: "https://jamiehitchcock.co.uk/",
    code: "https://github.com/jamiehitchcock/Portfolio",
  },
  {
    title: "JamieHitchcock.co.uk - V2",
    description:
      "An improvement upon my first portfolio website, to test my skills in Next.js, React and Typescript. Styled using Tailwind.",
    tags: ["Next.js", "React.js", "TypeScript", "Tailwind", "Framer Motion"],
    imageUrl: placeholderImage,
    demo: "https://jamiehitchcock.co.uk/",
    code: "https://github.com/jamiehitchcock/Portfolio",
  },
] as const;

export const skillsData = [
  { name: "HTML", icon: React.createElement(SiHtml5) },
  { name: "CSS", icon: React.createElement(SiCss3) },
  { name: "JavaScript", icon: React.createElement(SiJavascript) },
  { name: "TypeScript", icon: React.createElement(SiTypescript) },
  { name: "React.js", icon: React.createElement(SiReact) },
  { name: "Next.js", icon: React.createElement(SiNextdotjs) },
  { name: "Node.js", icon: React.createElement(SiNodedotjs) },
  { name: "Git", icon: React.createElement(SiGit) },
  { name: "Tailwind", icon: React.createElement(SiTailwindcss) },
  { name: "SASS", icon: React.createElement(SiSass) },
  { name: "Figma", icon: React.createElement(SiFigma) },
  { name: "Bootstrap", icon: React.createElement(SiBootstrap) },
] as const;
