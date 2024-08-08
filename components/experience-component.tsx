import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { useInView } from "react-intersection-observer";
import { ExperienceComponentType } from "@/lib/types";
import { useTheme } from "@/context/theme-context";

export default function ExperienceComponent({
  title,
  organisation,
  description,
  date,
  location,
  icon,
}: ExperienceComponentType) {
  const { ref, inView } = useInView({ threshold: 0.5 });
  const { theme } = useTheme();

  return (
    <VerticalTimelineElement
      visible={inView}
      contentStyle={{
        background: theme === "light" ? "#f3f4f6" : "rgba(255,255,255,0.05)",
        boxShadow: "none",
        border: "1px solid rgba(0,0,0,0.05)",
        textAlign: "left",
        padding: "1.3rem 2rem",
      }}
      contentArrowStyle={{
        borderRight: "0.4rem solid #6d28d9",
      }}
      date={date}
      icon={icon}
      iconStyle={{
        background: theme === "light" ? "white" : "rgb(3,7,18)",
        color: "#6d28d9",
      }}
    >
      <h3 className="font-semibold">
        {title} -{" "}
        <span className="text-decoration-line: underline decoration-2 decoration-violet-700">
          {organisation}
        </span>
      </h3>
      <p className="font-normal !mt-0">{location}</p>
      <p ref={ref} className="!mt-1 font-normal text-gray-700 dark:text-white/80">
        {description}
      </p>
    </VerticalTimelineElement>
  );
}
