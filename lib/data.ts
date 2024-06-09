import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
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
    name: "Portfolio",
    hash: "#portfolio",
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
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const portfolioData = [
  {
    title: "FilmDB",
    description:
      "A film app created using React to show a snapshot of a film, such as the poster, plot summary and a rating. Try searching for your favourite film.",
    tags: ["React.js", "JavaScript", "SASS", "API"],
    imageUrl: placeholderImage,
  },
  {
    title: "Command Center",
    description:
      "A companion app for a live service video game called Helldivers 2, created in React. This uses API calls to update users with real time data relating to Helldivers 2. Meaning that you can get the latest news whilst on the go.",
    tags: ["React.js", "JavaScript", "SASS", "API","React Router"],
    imageUrl: placeholderImage,
  },
  {
    title: "International Space Station Tracker",
    description:
      "Track the location of the ISS against a world map in real time. This uses an API (WhereTheISS) to retrieve coordinates and velocity, then plots the location against a map using Leaflet.js and JavaScript.",
    tags: ["Leaflet.js", "JavaScript", "HTML", "CSS", "API"],
    imageUrl: placeholderImage,
  },
  {
    title: "Roman Numeral Convertor",
    description:
      "Enter a number and the algorithm will convert this into a Roman Numeral using Javascript. I created this as a challenge for part of a FreeCodeCamp accrediation on 'JavaScript Data Structures and Algorithyms.'",
    tags: ["JavaScript", "HTML", "CSS", "Algorithym"],
    imageUrl: placeholderImage,
  },
  {
    title: "Calculator",
    description:
      "A typical calculator created in React. You can interact with this by either clicking the buttons or using your keyboard.",
    tags: ["React.js", "JavaScript", "SASS", "Complex State Management"],
    imageUrl: placeholderImage,
  },
  {
    title: "Pomodoro Timer",
    description:
      "A timer created for the pomodoro study method of 25 plus 5. I Created this in React as part of a 'Front-End Development Libraries' accreditation with FreeCodeCamp.",
    tags: ["React.js", "JavaScript", "SASS", "Complex State Management"],
    imageUrl: placeholderImage,
  },
  {
    title: "Real-Time Stock Market Checker",
    description:
      "This allows you to enter a symbol for a stock and view realtime information on its performance using an API (StockData). Try any public stock such as  AAPL, GOOG, PG or KO.",
    tags: ["JavaScript", "HTML", "CSS", "API"],
    imageUrl: placeholderImage,
  },
  {
    title: "JamieHitchcock.co.uk - V2",
    description:
      "An improvement upon my first portfolio website, to test my skills in Next.js, React and Typescript.",
    tags: ["Next.js","React.js","TypeScript", "Framer Motion"],
    imageUrl: placeholderImage,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
