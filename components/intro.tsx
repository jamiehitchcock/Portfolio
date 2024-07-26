"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
// import Link from "next/link";
import { useSectionInView } from "@/lib/hooks";
import {  BsLinkedin } from "react-icons/bs";
// import { BsArrowRight } from "react-icons/bs";
// import { HiDownload } from "react-icons/hi";
import portrait from "@/public/images/portrait.jpg";
import { FaGithub } from "react-icons/fa";

export default function Intro() {
  // custom hook for inView animation
  const { ref } = useSectionInView("Home");

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-28 pt-28 sm:pt-36"
    >
      <div className="flex items-center justify-center">
        {/* relative to anchor emoji in absolute */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src={portrait}
              alt="portrait"
              // set file import size then set display size with styling
              width="300"
              height="300"
              quality="95"
              priority={true}
              className="h-48 w-48 md:h-80 md:w-80 rounded-full object-cover object-top border-[0.35rem] border-violet-700 shadow-xl"
            />
          </motion.div>
          {/* <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.5,
              duration: 0.7,
            }}
          >
            👋
          </motion.span> */}
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Hello, my name is <b className="text-violet-700">Jamie</b>.<br /> I&apos;m a <b className="text-violet-700">Front-End Developer</b> with 2 years of professional experience.
      </motion.h1>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        {/* <Link
          href="#contact"
          className="hidden md:flex group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-violet-800 active:scale-105 transition"
        >
          Contact me here
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link> */}
        {/* <a
          // add destination
          href="/CV.pdf"
          target="_blank"
          download
          className="hidden md:flex group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:text-violet-700 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10"
        >
          Download CV
          <HiDownload className="opacity-70 group-hover:translate-y-1 transition" />
        </a> */}
        <a
          // add destination
          href="https://www.linkedin.com/in/jamie-hitchcock-4641071b0/"
          target="_blank"
          className="bg-white p-4 text-violet-600 hover:text-violet-800 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border border-black/10"
        >
          <BsLinkedin />
        </a>
        <a
          // add destination
          href="https://github.com/jamiehitchcock"
          target="_blank"
          className="bg-white p-4 text-violet-600 hover:text-violet-800 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border border-black/10"
        >
          <FaGithub />
        </a>
      </motion.div>
    </section>
  );
}
