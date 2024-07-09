"use client";

import React, { useState } from "react";

export default function Navbar() {
  const [isClick, setIsClick] = useState(false);

  const toggleNavbar = () => {
    setIsClick(!isClick);
  };

  const closeNavbar = () => {
    setIsClick(false);
  };

  return (
    <>
      <nav className="bg-black z-10 fixed top-0 w-[100%]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="text-white">Jamie Hitchcock</div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-4">
                <a
                  href="#home"
                  className="text-white hover:bg-white hover:text-black rounded-lg p-1"
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="text-white hover:bg-white hover:text-black rounded-lg p-1"
                >
                  About
                </a>
                <a
                  href="#skills"
                  className="text-white hover:bg-white hover:text-black rounded-lg p-1"
                >
                  Skills
                </a>
                <a
                  href="#experience"
                  className="text-white hover:bg-white hover:text-black rounded-lg p-1"
                >
                  Experience
                </a>
                <a
                  href="#portfolio"
                  className="text-white hover:bg-white hover:text-black rounded-lg p-1"
                >
                  Portfolio
                </a>
                <a
                  href="#contact"
                  className="text-white hover:bg-white hover:text-black rounded-lg p-1"
                >
                  Contact
                </a>
              </div>
            </div>
            <div className="md:hidden flex items-center">
              {/* hamburger button */}
              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none"
                onClick={toggleNavbar}
              >
                {/* change icon on toggle */}
                {isClick ? (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        {isClick && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#home"
                className="block text-center text-white hover:bg-white hover:text-black rounded-lg py-2"
                onClick={closeNavbar}
              >
                Home
              </a>
              <a
                href="#about"
                className="block text-center text-white hover:bg-white hover:text-black rounded-lg py-2"
                onClick={closeNavbar}
              >
                About
              </a>
              <a
                href="#skills"
                className="block text-center text-white hover:bg-white hover:text-black rounded-lg py-2"
                onClick={closeNavbar}
              >
                Skills
              </a>
              <a
                href="#experience"
                className="block text-center text-white hover:bg-white hover:text-black rounded-lg py-2"
                onClick={closeNavbar}
              >
                Experience
              </a>
              <a
                href="#portfolio"
                className="block text-center text-white hover:bg-white hover:text-black rounded-lg py-2"
                onClick={closeNavbar}
              >
                Portfolio
              </a>
              <a
                href="#contact"
                className="block text-center text-white hover:bg-white hover:text-black rounded-lg py-2"
                onClick={closeNavbar}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
