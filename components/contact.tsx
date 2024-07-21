"use client";

import React from "react";
import { FaGithub } from "react-icons/fa";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

export default function Contact() {
  // custom hook for inView animation
  const { ref } = useSectionInView("Contact");

  return (
    <section
      ref={ref}
      className="mb-28 max-w-[50rem] sm:mb-40 leading-8 scroll-mt-28"
      id="contact"
    >
      <SectionHeading>Contact Me</SectionHeading>
      <div className="flex flex-col items-center"></div>
      <p className="mb-3 text-center">I would like to hear from you.</p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 px-4 text-lg font-medium">
        <a
          href="mailto:jamiehitchcock@hotmail.co.uk"
          target="_blank"
          download
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border border-black/10"
        >
          <MdEmail />
        </a>
        <a
          href="https://www.linkedin.com/in/jamie-hitchcock-4641071b0/"
          target="_blank"
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border border-black/10"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/jamiehitchcock"
          target="_blank"
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border border-black/10"
        >
          <FaGithub />
        </a>
      </div>
    </section>
  );
}
