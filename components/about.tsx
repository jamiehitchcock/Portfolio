"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

const jsonBio = {
  name: {
    firstname: "Jamie",
    lastname: "Hitchcock",
  },
  title: "Front End Developer",
  experience: "2 years",
  favourite_languages: ["JavaScript", "React.js"],
  location: "Near London",
  can_not_live_without: "Coffee",
  dream_car: "Porsche 911",
};

export default function About() {
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
      <div className="flex flex-col items-center">
        <pre className="mb-3 bg-stone-800 text-lime-500 w-fit">
          <code>{JSON.stringify(jsonBio, undefined, 2)}</code>
        </pre>
      </div>
      <p className="mb-3">
        Thank you for visiting my portfolio. I love to write code and create
        interactive websites. I graduated from a <b className="text-violet-700">Web Development Bootcamp</b> with
        <b className="text-violet-700"> Bath Spa University / Institude Of Code</b> where I was awarded the
        prize of <b className="text-violet-700">Star Pupil</b> and <b className="text-violet-700">Best Portfolio</b>. I regularly return
        as a testimonial student to inspire new cohorts. Most of my knowledge
        and skills are self taught and I am gripped by the challenges that
        writing code brings. There is a special feeling that coding gives, when
        you are immersed in what you are working on, as you watch it come to
        life. When I am not working I love nothing more than to travel the
        world.
      </p>
    </motion.section>
  );
}
