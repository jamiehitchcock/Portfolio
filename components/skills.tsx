"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

const fadeInAnimationVariants = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0 },
};

export default function Skills() {
  // custom hook for inView animation
  const { ref } = useSectionInView("Skills");

  return (
    <section
      ref={ref}
      id="skills"
      className="mb-28 max-w-[50rem] sm:mb-40 scroll-mt-28"
    >
      <SectionHeading>Skills</SectionHeading>
      <p className="mb-3 text-center">Creating interactive websites that look great on all screen sizes.</p>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-white border border-black/[0.1] rounded-xl px-5 py-3"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            // viewport={{once:true}}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
