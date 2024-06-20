"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import ExperienceComponent from "./experience-component";
import { useSectionInView } from "@/lib/hooks";

export default function Experience() {
  // custom hook for inView animation
  const { ref } = useSectionInView("Experience");

  return (
    <section id="experience" ref={ref} className="mb-28 scroll-mt-28 sm:mb-40">
      <SectionHeading>Experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <ExperienceComponent {...item} />
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
