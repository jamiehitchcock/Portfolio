"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { portfolioData } from "@/lib/data";
import { FaEye, FaCode } from "react-icons/fa";

// set each prop typing as specific to project
type PortfolioProps = (typeof portfolioData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  demo,
  code,
}: PortfolioProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  //   set scale to begin as 50% rather than 0
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: scrollYProgress,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="mx-auto bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[28rem] hover:bg-gray-200 transition sm:group-even:pl-8">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold text-decoration-line: underline decoration-4 decoration-violet-700">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                key={index}
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
              >
                {tag}
              </li>
            ))}
          </ul>

          <div className="flex flex-row sm:flex-row items-center justify-center gap-2 text-lg font-medium mt-4 gap-2">
            <a
              href={demo}
              target="_blank"
              className="bg-white p-4 text-violet-600 hover:text-violet-800 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border border-black/10"
            >
              <FaEye />
            </a>
            <a
              href={code}
              target="_blank"
              className="bg-white p-4 text-violet-600 hover:text-violet-800 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border border-black/10"
            >
              <FaCode />
            </a>
          </div>
        </div>
        <a href={demo} target="_blank">
          <Image
            src={imageUrl}
            alt={title}
            quality={90}
            className="hidden sm:block absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
          transition 
          group-hover:scale-[1.04]
          group-hover:-translate-x-3
          group-hover:translate-y-3
          group-hover:-rotate-2
  
          group-even:group-hover:translate-x-3
          group-even:group-hover:translate-y-3
          group-even:group-hover:rotate-2
  
          group-even:right-[initial] group-even:-left-40"
          />
        </a>
      </section>
    </motion.div>
  );
}
