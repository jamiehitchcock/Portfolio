"use client";

import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import SectionHeading from "./section-heading";
import { portfolioData } from "@/lib/data";
import Project from "./project";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Portfolio() {
  // intersection observer
  const { ref, inView } = useInView(
    {
      // set when 20% of portfoliio section is in view
      threshold: 0.2,
    }
  );
  const { setActiveSection } = useActiveSectionContext();

  // set active section if inView changes
  useEffect(() => {
    if (inView) {
      setActiveSection("Portfolio");
    }
  }, [inView, setActiveSection]);

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
