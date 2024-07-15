"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { portfolioData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Portfolio() {

const [filteredProjects, setFilteredProjects ] = useState(portfolioData);
const [technology, setTechnology ] = useState(null);

    // custom hook for inView animation
    const { ref } = useSectionInView("Portfolio", 0.2);

    function handleFilter(filter){
      if (filter === null){
        setFilteredProjects(portfolioData);
      } else {
        const filtered = portfolioData.filter((project) => project.tags.includes(filter));
        setFilteredProjects(filtered);
      }
    };

  return (
    <section ref={ref} id="portfolio" className="mb-28 scroll-mt-28">
      <SectionHeading>Portfolio</SectionHeading>
      <p className="mb-3 text-center">Here are some of the projects that I have created to showcase my skills. </p>
      <p>Filter By Technology</p>
      <ul className="flex flex-wrap gap-4 my-2">
        <button className="hover:text-gray-950 p-2 rounded-full bg-gray-200 text-gray-950" onClick={() => handleFilter(null)}>All</button>
        <button className="text-gray-500 hover:text-gray-950 p-2 rounded-full" onClick={() => handleFilter("Next.js")}>Next.js</button>
        <button className="text-gray-500 hover:text-gray-950 p-2 rounded-full" onClick={() => handleFilter("React.js")}>React.js</button>
        <button className="text-gray-500 hover:text-gray-950 p-2 rounded-full" onClick={() => handleFilter("HTML")}>Vanilla HTML/CSS /JS</button>
        <button className="text-gray-500 hover:text-gray-950 p-2 rounded-full" onClick={() => handleFilter("Algorithms")}>Algorithms</button>
        <button className="text-gray-500 hover:text-gray-950 p-2 rounded-full" onClick={() => handleFilter("Complex State Management")}>Complex State</button>
        <button className="text-gray-500 hover:text-gray-950 p-2 rounded-full" onClick={() => handleFilter("API")}>API</button>
        <button className="text-gray-500 hover:text-gray-950 p-2 rounded-full" onClick={() => handleFilter("Tailwind")}>Tailwind</button>
        <button className="text-gray-500 hover:text-gray-950 p-2 rounded-full" onClick={() => handleFilter("SASS")}>SASS</button>
      </ul>

      <div>
        {filteredProjects.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
