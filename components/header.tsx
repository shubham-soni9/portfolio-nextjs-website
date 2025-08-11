"use client";

import React from "react";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import { BsLinkedin, BsMoon, BsSun } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useTheme } from "@/context/theme-context";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 z-[999] bg-white/80 backdrop-blur-md border-b border-gray-200 dark:bg-gray-950/80 dark:border-gray-800">
             <nav className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
         <div className="flex items-center justify-between h-16 w-full">
           {/* Logo/Name - Aligned to left */}
           <div className="flex-shrink-0">
             <span className="text-xl font-bold text-gray-900 dark:text-white">
               Shubham Soni
             </span>
           </div>

                       {/* Navigation Links - Left Aligned */}
            <div className="hidden md:block ml-8">
              <div className="flex items-center space-x-8">
               {links.map((link) => (
                 <Link
                   key={link.hash}
                   href={link.hash}
                   className={clsx(
                     "text-sm font-medium transition-colors duration-200",
                     {
                       "text-blue-600 dark:text-blue-400": activeSection === link.name,
                       "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white": activeSection !== link.name,
                     }
                   )}
                   onClick={() => {
                     setActiveSection(link.name);
                     setTimeOfLastClick(Date.now());
                   }}
                 >
                   {link.name}
                 </Link>
               ))}
             </div>
           </div>

           {/* Action Buttons - Aligned to right */}
           <div className="flex items-center space-x-4 ml-auto">
            <a
              href="/CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200 dark:text-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <HiDownload className="text-lg" />
              <span className="hidden sm:inline">Download CV</span>
            </a>

            <a
              href="https://www.linkedin.com/in/shubhamsonicse/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-600 hover:text-blue-600 transition-colors duration-200 dark:text-gray-400 dark:hover:text-blue-400"
            >
              <BsLinkedin className="text-xl" />
            </a>

            <a
              href="https://github.com/shubham-soni9"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-600 hover:text-gray-900 transition-colors duration-200 dark:text-gray-400 dark:hover:text-white"
            >
              <FaGithubSquare className="text-xl" />
            </a>

            <a
              href="mailto:shubhamsonicse@gmail.com"
              className="p-2 text-gray-600 hover:text-red-600 transition-colors duration-200 dark:text-gray-400 dark:hover:text-red-400"
            >
              <MdEmail className="text-xl" />
            </a>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-600 hover:text-gray-900 transition-colors duration-200 dark:text-gray-400 dark:hover:text-white"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <BsMoon className="text-xl" />
              ) : (
                <BsSun className="text-xl" />
              )}
            </button>
          </div>


        </div>


      </nav>
    </header>
  );
}
