import React from "react";
import SectionHeading from "./section-heading";
import { portfolioData } from "@/lib/data";
import Project from "./project";

export default function Portfolio() {
  return (
    <section id="portfolio" className="scroll-mt-28">
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

