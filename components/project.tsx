"use client";

import { useRef } from "react";
import Image from "next/image";
import { useScroll } from "framer-motion";
import { portfolioData } from "@/lib/data";

// set each prop typing as specific to project
type PortfolioProps = (typeof portfolioData)[number];

export default function Project({ title, description, tags, imageUrl }: PortfolioProps) {
    const ref = useRef(null);
    useScroll({
      target: "",
      offset: ["0 1", "1.33 1"],
    });
    return (
      <section className="group bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden relative sm:h-[25rem] mb-3 sm:mb-8 last:mb-0 even:pl-8 hover:bg-gray-200 transition">
        <div className="pt-4 pb-7 px-5 sm:pl-5 sm:pr-5 sm:pt-10 sm:max-w-[50%] group-even:ml-[20rem]">
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
          className="absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl group-even:right-[initial] group-even:-left-40 group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-even:group-hover:translate-x-3 group-even:group-hover:rotate-2 group-hover:scale-105 transition"
        />
      </section>
    );
  }
  