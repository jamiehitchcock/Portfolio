"use client";

import React, { useState } from "react";
import clsx from "clsx";
import SectionHeading from "./section-heading";
import { portfolioData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Portfolio() {
  const [filteredProjects, setFilteredProjects] = useState(portfolioData);
  const [technology, setTechnology] = useState("All");

  // custom hook for inView animation
  const { ref } = useSectionInView("Portfolio", 0.2);

  function handleFilter(filter) {
    if (filter === "All") {
      setFilteredProjects(portfolioData);
      setTechnology("All");
    } else {
      const filtered = portfolioData.filter((project) =>
        project.tags.includes(filter)
      );
      setFilteredProjects(filtered);
      setTechnology(filter);
    }
  }

  return (
    <section ref={ref} id="portfolio" className="mb-28 scroll-mt-28">
      <SectionHeading>Portfolio</SectionHeading>
      <p className="mb-3 text-center">
        Here are some of the projects that I have created to showcase my skills.
      </p>

      {/* dropdown filter on mobile */}
      <div className="md:hidden text-center">
        <p className="mb-2 font-semibold">Filter By Technology</p>
        <select
          className="mb-4"
          onChange={(event) => handleFilter(event?.target.value)}
          value={technology || ""}
        >
          <option value="All">All</option>
          <option value="Next.js">Next.js</option>
          <option value="React.js">React.js</option>
          <option value="HTML">Vanilla JS</option>
          <option value="Algorithms">Algorithms</option>
          <option value="Complex State Management">Complex State</option>
          <option value="API">API</option>
          <option value="Tailwind">Tailwind</option>
          <option value="SASS">SASS</option>
        </select>
      </div>

      {/* filter buttons on desktop */}
      <div className="hidden md:block">
        <ul className="flex flex-wrap gap-4 my-2 text-gray-500">
          <button
            className={clsx("hover:text-gray-950 p-2 rounded-full", {
              "bg-gray-200 text-gray-950": technology === "All",
            })}
            onClick={() => handleFilter("All")}
          >
            All
          </button>
          <button
            className={clsx("hover:text-gray-950 p-2 rounded-full", {
              "bg-gray-200 text-gray-950": technology === "Next.js",
            })}
            onClick={() => handleFilter("Next.js")}
          >
            Next.js
          </button>
          <button
            className={clsx("hover:text-gray-950 p-2 rounded-full", {
              "bg-gray-200 text-gray-950": technology === "React.js",
            })}
            onClick={() => handleFilter("React.js")}
          >
            React.js
          </button>
          <button
            className={clsx("hover:text-gray-950 p-2 rounded-full", {
              "bg-gray-200 text-gray-950": technology === "HTML",
            })}
            onClick={() => handleFilter("HTML")}
          >
            Vanilla HTML/CSS /JS
          </button>
          <button
            className={clsx("hover:text-gray-950 p-2 rounded-full", {
              "bg-gray-200 text-gray-950": technology === "Algorithms",
            })}
            onClick={() => handleFilter("Algorithms")}
          >
            Algorithms
          </button>
          <button
            className={clsx("hover:text-gray-950 p-2 rounded-full", {
              "bg-gray-200 text-gray-950":
                technology === "Complex State Management",
            })}
            onClick={() => handleFilter("Complex State Management")}
          >
            Complex State
          </button>
          <button
            className={clsx("hover:text-gray-950 p-2 rounded-full", {
              "bg-gray-200 text-gray-950": technology === "API",
            })}
            onClick={() => handleFilter("API")}
          >
            API
          </button>
          <button
            className={clsx("hover:text-gray-950 p-2 rounded-full", {
              "bg-gray-200 text-gray-950": technology === "Tailwind",
            })}
            onClick={() => handleFilter("Tailwind")}
          >
            Tailwind
          </button>
          <button
            className={clsx("hover:text-gray-950 p-2 rounded-full", {
              "bg-gray-200 text-gray-950": technology === "SASS",
            })}
            onClick={() => handleFilter("SASS")}
          >
            SASS
          </button>
        </ul>
      </div>

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
