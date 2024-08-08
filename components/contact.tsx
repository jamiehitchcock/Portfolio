"use client";

import React from "react";
import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

export default function Contact() {
  // custom hook for inView animation
  const { ref } = useSectionInView("Contact");

  function greetDay() {
    const dayNames = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let calendar = new Date();
    let today = dayNames[calendar.getDay()];
    return (
      <p>
        Thank you and have an excellent{" "}
        <span className="font-semibold text-violet-700">{today}!</span>
      </p>
    );
  }

  return (
    <section
      ref={ref}
      className="mb-28 max-w-[50rem] sm:mb-40 leading-8 scroll-mt-28"
      id="contact"
    >
      <SectionHeading>Contact Me</SectionHeading>
      <div className="flex flex-col items-center"></div>
      <p className="mb-3 text-center">I would like to hear from you.</p>

      <div className="mb-3 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 px-4 text-lg font-medium">
        <a
          href="mailto:jamiehitchcock@hotmail.co.uk"
          target="_blank"
          download
          className="bg-white p-4 text-violet-600 hover:text-violet-800 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border border-black/10 dark:bg-gray-950 dark:border-white/60"
        >
          <MdEmail />
        </a>
        <a
          href="https://www.linkedin.com/in/jamie-hitchcock-4641071b0/"
          target="_blank"
          className="bg-white p-4 text-violet-600 hover:text-violet-800 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border border-black/10 dark:bg-gray-950 dark:border-white/60"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/jamiehitchcock"
          target="_blank"
          className="bg-white p-4 text-violet-600 hover:text-violet-800 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border border-black/10 dark:bg-gray-950 dark:border-white/60"
        >
          <FaGithub />
        </a>
      </div>

      <div>{greetDay()}</div>
    </section>
  );
}
