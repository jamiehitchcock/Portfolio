import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience">
      <SectionHeading>Experience</SectionHeading>
      <VerticalTimeline>
        {experiencesData.map((experience, index) => (
          <VerticalTimelineElement key={index}></VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}
