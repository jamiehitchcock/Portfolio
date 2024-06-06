"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import portrait from "@/public/images/portrait.jpeg";
import { FaGithub } from "react-icons/fa";

const jsonBio = {
  name: {
    firstname: "Jamie",
    lastname: "Hitchcock",
  },
  title: "Front End Developer",
  experience: "2 years",
  favourite_languages: ["JavaScript", "React.js"],
  can_not_live_without: "Coffee",
  dream_car: "Porsche 911",
};

export default function Intro() {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
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
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-violet-700 shadow-xl"
            />
          </motion.div>
          <motion.span
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
          </motion.span>
        </div>
      </div>

      <motion.p
        className="mb-10 mt-4 px-4 text-2xl leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Hello, my name is <b>Jamie</b> and I'm a <b>Front End-Developer</b> with
        2 years of professional experience.
      </motion.p>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full"
        >
          Contact me here
          <BsArrowRight />
        </Link>
        <a
          href=""
          className="bg-white px-7 py-3 flex items-center gap-2 rounded-full"
        >
          Download CV
          <HiDownload />
        </a>
        <a
          href=""
          className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full"
        >
          <BsLinkedin />
        </a>
        <a
          href=""
          className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full"
        >
          <FaGithub />
        </a>
      </motion.div>

      <br />
      <p className="px-4 text-left">
        Thank you for visiting my portfolio. I love to write code and create
        interactive websites. I graduated from a web development bootcamp with
        <b>Bath Spa University / Institude Of Code</b> where I was awarded the
        prize of <b>Star Pupil</b> and <b>Best Portfolio</b>. I regularly return
        as a testimonial student to inspire new cohorts. Most of my knowledge
        and skills are self taught and I am gripped by the challenges that
        writing code brings. There is a special feeling that coding gives, when
        you are immersed in what you are working on, as you watch it come to
        life. When I am not working I love nothing more than to travel the
        world.
      </p>

      <br />
      <pre className="text-left px-[2rem]">
        <code>{JSON.stringify(jsonBio, undefined, 2)}</code>
      </pre>
    </section>
  );
}
