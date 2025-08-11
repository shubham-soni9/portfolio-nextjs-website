"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  const coreSkills = ["Kotlin", "Java", "Android SDK"];
  const architectureSkills = ["MVVM", "Clean Architecture", "Multi-Module"];
  const modernSkills = ["Jetpack Compose", "Coroutines", "RxJava", "Room"];
  const toolsSkills = ["Firebase", "Flutter"];

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <div>
            <Image
              src="/profile.jpg"
              alt="Shubham Soni"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-32 w-32 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </div>

          <span className="absolute bottom-0 right-0 text-4xl">
            👋
          </span>
        </div>
      </div>

      <h1 className="mb-6 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl">
        <span className="font-bold">Hello, I'm Shubham.</span> I'm an{" "}
        <span className="font-bold">Android Developer</span> with{" "}
        <span className="font-bold">7+ years</span> of experience building mobile apps.
      </h1>

      <div className="mb-8 px-4 text-base sm:text-lg leading-relaxed">
        <p className="mb-4">
          I've worked at <span className="font-medium">Freshworks, Meesho, Rebel Foods</span> and{" "}
          <span className="font-medium">Jugnoo</span>, scaling products to{" "}
          <span className="font-medium">10+ million users</span>. Expert in{" "}
          <span className="font-medium">Kotlin, Java, Android SDK</span> with experience in{" "}
          <span className="font-medium">SaaS, E-commerce, Food & Delivery</span> domains.
        </p>
        
        <p>
          Passionate about <span className="font-medium">AI, open source</span> and staying updated with{" "}
          <span className="font-medium">mobile development trends</span>.
        </p>
      </div>

      {/* Skills Section */}
      <div className="mb-8 px-4">
        <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white/80">
          Core Skills
        </h2>
        
        {/* Core Technologies */}
        <div className="mb-4">
          <h3 className="text-sm font-medium text-gray-600 dark:text-white/60 mb-2">
            Languages & Platform
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            {coreSkills.map((skill, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Architecture & Patterns */}
        <div className="mb-4">
          <h3 className="text-sm font-medium text-gray-600 dark:text-white/60 mb-2">
            Architecture & Patterns
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            {architectureSkills.map((skill, index) => (
              <span
                key={index}
                className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 px-3 py-1 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Modern Android */}
        <div className="mb-4">
          <h3 className="text-sm font-medium text-gray-600 dark:text-white/60 mb-2">
            Modern Android
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            {modernSkills.map((skill, index) => (
              <span
                key={index}
                className="bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 px-3 py-1 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Tools & Platforms */}
        <div className="mb-4">
          <h3 className="text-sm font-medium text-gray-600 dark:text-white/60 mb-2">
            Tools & Platforms
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            {toolsSkills.map((skill, index) => (
              <span
                key={index}
                className="bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300 px-3 py-1 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium">
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="/CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/shubhamsonicse/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/shubham-soni9"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithubSquare />
        </a>
      </div>
    </section>
  );
}
