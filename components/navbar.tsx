"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { navLinks } from "@/lib/data";
import Link from "next/link";
import { GrMenu, GrClose } from "react-icons/gr";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Navbar() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const [isClick, setIsClick] = useState(false);

  const toggleNavbar = () => {
    setIsClick(!isClick);
  };

  const closeNavbar = () => {
    setIsClick(false);
  };

  return (
    <>
      <nav className="bg-white text-gray-500 z-10 fixed top-0 w-[100%] shadow-lg shadow-black/[0.03]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="text-gray-950 text-2xl font-bold">
                  <span className="text-violet-700">J</span>amie <span className="text-violet-700">H</span>itchcock
                </div>
              </div>
            </div>

            {/* desktop navbar links*/}
            <div className="hidden md:block">
              <ul className="ml-4 flex items-center space-x-4">
                {navLinks.map((link) => (
                  <motion.li
                    className="flex relative"
                    key={link.hash}
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                  >
                    <Link
                      href={link.hash}
                      // set active section when link is clicked
                      onClick={() => {
                        setActiveSection(link.name);
                        setTimeOfLastClick(Date.now());
                      }}
                      className={clsx("hover:text-violet-800 p-2 transition", {
                        // clsx to apply conditional text styling to active section
                        "text-white hover:text-white": activeSection === link.name,
                      })}
                    >
                      {link.name}
                      {/* apply conditional background styling to active section */}
                      {activeSection === link.name && (
                        <motion.span
                          className="flex bg-violet-500 rounded-full absolute inset-0 -z-10"
                          layoutId="activeSection"
                          transition={{
                            type: "spring",
                            stiffness: 200,
                            damping: 20,
                          }}
                        ></motion.span>
                      )}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* hamburger button */}
            <div className="md:hidden flex items-center">
              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-violet-600 hover:text-violet-800 transition focus:outline-none"
                onClick={toggleNavbar}
              >
                {/* change icon on toggle */}
                {isClick ? (
                  <GrClose className="text-3xl" />
                ) : (
                  <GrMenu className="text-3xl" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* mobile nav links */}
        {isClick && (
          <div className="md:hidden">
            <ul className="flex flex-col items-center justify-start h-[100vh] px-2 space-y-[1rem] sm:px-3">
              {navLinks.map((link) => (
                <motion.li
                  className="flex relative text-2xl"
                  key={link.hash}
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                >
                  <Link
                    href={link.hash}
                    // set active section when link is clicked
                    onClick={() => {
                      setActiveSection(link.name);
                      setTimeOfLastClick(Date.now());
                      closeNavbar();
                    }}
                    className={clsx(
                      "block text-center hover:text-violet-800 transition p-4",
                      {
                        // clsx to apply conditional text styling to active section
                        "text-white hover:text-white": activeSection === link.name,
                      }
                    )}
                  >
                    {link.name}
                    {/* apply conditional background styling to active section */}
                    {activeSection === link.name && (
                      <motion.span
                        className="flex bg-violet-500 rounded-full absolute inset-0 -z-10"
                        layoutId="activeSection"
                        transition={{
                          type: "spring",
                          stiffness: 200,
                          damping: 20,
                        }}
                      ></motion.span>
                    )}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}
