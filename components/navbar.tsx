"use client";

import React, { useState } from "react";
import { navLinks } from "@/lib/data";
import Link from "next/link";

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
                    href={link.hash}
                    className="hover:text-gray-950 rounded-lg p-1 transition"
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

        {/* mobile nav links */}
        {isClick && (
          <div className="md:hidden">
            <ul className="flex flex-col items-center px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  href={link.hash}
                  className="block text-center hover:text-gray-950 transition rounded-lg p-2"
                  onClick={closeNavbar}
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
