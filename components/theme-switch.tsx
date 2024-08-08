"use client";

import React, { useEffect, useState } from "react";
import { BsSunFill, BsMoonFill } from "react-icons/bs";

// typing as either light or dark theme
type Theme = "light" | "dark";

export default function ThemeSwitch() {
  const [theme, setTheme] = useState<Theme>("light");

//   change theme and update local storage
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      window.localStorage.setItem("theme","dark");
      // allow button to update class used in tailwind config
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      window.localStorage.setItem("theme","light");
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    //   read the local storage on load component
      const localTheme = window.localStorage.getItem("theme") as Theme | null;

    //   if local storage has been set, then update theme
      if (localTheme){
          setTheme(localTheme);

          if(localTheme === "dark"){
            document.documentElement.classList.add("dark");
          }
        //   use system preferences if local storage is not set
      } else if (window.matchMedia("(prefers-color-scheme:dark)").matches){
          setTheme("dark");
          document.documentElement.classList.add("dark");
      }
  },[]);

  return (
    <button
      className="fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all"
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsSunFill /> : <BsMoonFill />}
    </button>
  );
}
