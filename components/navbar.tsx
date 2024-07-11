"use client";

import React, { useState } from "react";
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
      <nav className="bg-white text-gray-500 bg-opacity-80 backdrop-blur-[0.5rem] z-10 fixed top-0 w-[100%] shadow-lg shadow-black/[0.03]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="text-black">Jamie Hitchcock</div>
              </div>
            </div>

            {/* desktop navbar links*/}
            <div className="hidden md:block">
              <ul className="ml-4 flex items-center space-x-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.hash}
                    href={link.hash}
                    // set active section when link is clicked
                    onClick={() => {
                      setActiveSection(link.name);
                      setTimeOfLastClick(Date.now());
                    }}
                    className={clsx("hover:text-gray-950 p-1 transition", {
                      // clsx to apply conditional text styling to active section
                      "text-gray-950": activeSection === link.name,
                    })}
                  >
                    {link.name}
                  </Link>
                ))}
              </ul>
            </div>

            {/* hamburger button */}
            <div className="md:hidden flex items-center">
              <button
                className="inline-flex items-center justify-center p-2 rounded-md hover:text-gray-950 transition focus:outline-none"
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
            <ul className="flex flex-col items-center px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.hash}
                  href={link.hash}
                  // set active section when link is clicked
                  onClick={() => {
                    setActiveSection(link.name);
                    setTimeOfLastClick(Date.now());
                    closeNavbar();
                  }}
                  className={clsx("block text-center hover:text-gray-950 transition p-2", {
                    // clsx to apply conditional text styling to active section
                    "text-gray-950": activeSection === link.name,
                  })}
                >
                  {link.name}
                </Link>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}
