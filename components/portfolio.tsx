import React from "react";
import Image from "next/image";
import SectionHeading from "./section-heading";
import { portfolioData } from "@/lib/data";

// set each prop typing as specific to project
type PortfolioProps = (typeof portfolioData)[number];

export default function Portfolio() {
  return (
    <section>
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

function Project({ title, description, tags, imageUrl }: PortfolioProps) {
  return (
    <section>
      <h3>{title}</h3>
      <p>{description}</p>
      <ul>
        {tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>
     <Image src={imageUrl} alt={title} quality={90}/>
    </section>
  );
}
