"use client";

import React from "react";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import { BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="fixed top-0 left-0 right-0 z-[999] bg-white/80 backdrop-blur-md border-b border-gray-200 dark:bg-gray-950/80 dark:border-gray-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Name */}
          <div className="flex-shrink-0">
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              Shubham Soni
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
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

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
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
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="p-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {links.map((link) => (
              <Link
                key={link.hash}
                href={link.hash}
                className={clsx(
                  "block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200",
                  {
                    "text-blue-600 bg-blue-50 dark:text-blue-400 dark:bg-blue-900/20": activeSection === link.name,
                    "text-gray-600 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800": activeSection !== link.name,
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
      </nav>
    </header>
  );
}
