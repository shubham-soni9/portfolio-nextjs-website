"use client";

import Image from "next/image";
import React from "react";
import { useSectionInView } from "@/lib/hooks";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);

  const coreSkills = ["Kotlin", "Java", "Android SDK"];
  const architectureSkills = ["MVVM", "Clean Architecture", "Multi-Module"];
  const modernSkills = ["Jetpack Compose", "Coroutines", "RxJava", "Room"];
  const toolsSkills = ["Firebase", "Flutter"];

  return (
    <section
      ref={ref}
      id="home"
      className="mb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:mb-0 scroll-mt-[100rem]"
    >
      {/* Main Content - Horizontal Layout */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
        
        {/* Profile Image Section */}
        <div className="flex-shrink-0">
          <div className="relative">
            <Image
              src="/profile.jpg"
              alt="Shubham Soni"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-32 w-32 lg:h-40 lg:w-40 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
            <span className="absolute bottom-0 right-0 text-4xl">
              👋
            </span>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-1 max-w-4xl">
          {/* Header */}
          <h1 className="mb-6 text-2xl font-medium !leading-[1.5] sm:text-3xl lg:text-4xl">
            <span className="font-bold">Hello, I'm Shubham.</span> I'm an{" "}
            <span className="font-bold">Android Developer</span> with{" "}
            <span className="font-bold">8+ years</span> of experience building mobile apps.
          </h1>

          {/* Skills Section - Horizontal Layout */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white/80">
              Core Skills
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Core Technologies */}
              <div className="bg-white/50 dark:bg-white/5 rounded-lg p-4 border border-gray-200 dark:border-white/10">
                <h3 className="text-sm font-semibold text-gray-700 dark:text-white/80 mb-3">
                  Languages & Platform
                </h3>
                <div className="flex flex-wrap gap-2">
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
              <div className="bg-white/50 dark:bg-white/5 rounded-lg p-4 border border-gray-200 dark:border-white/10">
                <h3 className="text-sm font-semibold text-gray-700 dark:text-white/80 mb-3">
                  Architecture & Patterns
                </h3>
                <div className="flex flex-wrap gap-2">
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
              <div className="bg-white/50 dark:bg-white/5 rounded-lg p-4 border border-gray-200 dark:border-white/10">
                <h3 className="text-sm font-semibold text-gray-700 dark:text-white/80 mb-3">
                  Modern Android
                </h3>
                <div className="flex flex-wrap gap-2">
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
              <div className="bg-white/50 dark:bg-white/5 rounded-lg p-4 border border-gray-200 dark:border-white/10">
                <h3 className="text-sm font-semibold text-gray-700 dark:text-white/80 mb-3">
                  Tools & Platforms
                </h3>
                <div className="flex flex-wrap gap-2">
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
          </div>


        </div>
      </div>
    </section>
  );
}
