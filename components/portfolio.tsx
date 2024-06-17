"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { portfolioData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Portfolio() {
    // custom hook for inView animation
    const { ref } = useSectionInView("Portfolio", 0.2);

  return (
    <section ref={ref} id="portfolio" className="scroll-mt-28">
      <SectionHeading>Portfolio</SectionHeading>
      <div>
        {portfolioData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
