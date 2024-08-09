"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

const jsonBio = {
  name: {
    firstname: "Jamie",
    lastname: "Hitchcock",
  },
  title: "Front End Developer",
  years_of_experience: 2,
  location: "Reading",
  work_preference: "Hybrid",
  operating_systems:["Windows", "MacOS"],
  favourite_language: "JavaScript",
  focusing_on:["Next.js","React.js","TypeScript"],
  can_not_live_without: ["my wife","coffee"],
  dream_car: "Porsche 911",
  hobbies: ["coding","record collecting", "travelling"],
};

export default function About() {
  const [showJSON, setShowJSON] = useState(false);

  // custom hook for inView animation
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[50rem] text-left sm:mb-40 leading-8 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        Thank you for visiting my portfolio. I love to write code and create
        interactive websites. I graduated from a&nbsp;
        <b className="text-violet-700">Web Development Bootcamp</b> with
        <b className="text-violet-700">
          &nbsp; Bath Spa University / Institude Of Code&nbsp;
        </b>
        where I was awarded the prize of&nbsp;
        <b className="text-violet-700">Star Pupil</b> and&nbsp;
        <b className="text-violet-700">Best Portfolio</b>. I regularly return as
        a testimonial student to inspire new cohorts. Most of my knowledge and
        skills are self taught and I am gripped by the challenges that writing
        code brings. There is a special feeling that coding gives, when you are
        immersed in what you are working on, as you watch it come to life.
      </p>
      <p className="text-center mb-3">
        Click
        <button
          className="text-violet-700"
          onClick={() => setShowJSON(!showJSON)}
        >
          &nbsp;here&nbsp;
        </button>
        to see a snapshot of me as a JSON object !
      </p>

      {showJSON && (
        <div className="flex flex-col items-center">
          <pre className="mb-3 bg-white text-black w-fit dark:bg-black dark:text-white">
            <code>{JSON.stringify(jsonBio, undefined, 2)}</code>
          </pre>
        </div>
      )}
    </motion.section>
  );
}
