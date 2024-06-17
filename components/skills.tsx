"use client"

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

export default function Skills() {
        // custom hook for inView animation
        const { ref } = useSectionInView("Skills");

  return (
    <section ref={ref} id="skills" className="mb-28 max-w-[50rem] sm:mb-40 scroll-mt-28">
      <SectionHeading>Skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <li className="bg-white border border-black/[0.1] rounded-xl px-5 py-3" key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}
