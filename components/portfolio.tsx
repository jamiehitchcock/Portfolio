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
    <section className="group bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 relative mb-3 sm:mb-8 last:mb-0 even:pl-8">
      <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] group-even:ml-[18rem]">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
        <ul className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag, index) => (
            <li
              key={index}
              className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
      <Image
        src={imageUrl}
        alt={title}
        quality={90}
        className="absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl group-even:right-[initial] group-even:-left-40"
      />
    </section>
  );
}
