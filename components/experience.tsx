"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.5);
  const { theme } = useTheme();

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-14 sm:mb-40">
      <div className="max-w-6xl mx-auto">
        <SectionHeading>My experience</SectionHeading>
        
        <div className="space-y-8 w-full">
          {experiencesData.map((item, index) => (
            <div
              key={index}
              className="bg-white/50 dark:bg-white/5 rounded-lg p-6 border border-gray-200 dark:border-white/10 hover:bg-white/70 dark:hover:bg-white/10 transition-colors"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 font-medium">
                    {item.location}
                  </p>
                </div>
                <div className="mt-2 sm:mt-0">
                  <span className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                    {item.date}
                  </span>
                </div>
              </div>

              {/* Key Highlights */}
              <div className="space-y-3">
                {getKeyHighlights(item.description).map((highlight, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                      {highlight}
                    </p>
                  </div>
                ))}
              </div>

              {/* Technologies */}
              {getTechnologies(item.description).length > 0 && (
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
                  <div className="flex flex-wrap gap-2">
                    {getTechnologies(item.description).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-md font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Helper function to extract key highlights from description
function getKeyHighlights(description: string): string[] {
  const highlights: string[] = [];
  
  // Extract sentences with metrics and achievements
  const sentences = description.split(/[.!?]+/).filter(s => s.trim().length > 0);
  
  sentences.forEach(sentence => {
    const trimmed = sentence.trim();
    if (trimmed.length > 15) {
      // Look for sentences with numbers, percentages, or key achievements
      const hasMetrics = /\d+%?|\d+[Kk]|\d+[Mm]|\d+ lakh|\d+ million/.test(trimmed);
      const hasAchievement = /increased|reduced|improved|boosted|achieved|delivered|maintained|led|developed|implemented|created|optimized/i.test(trimmed);
      
      if (hasMetrics || hasAchievement) {
        highlights.push(trimmed);
      }
    }
  });
  
  return highlights.slice(0, 3); // Limit to 3 key highlights
}

// Helper function to extract technologies from description
function getTechnologies(description: string): string[] {
  const techKeywords = [
    'Android', 'Kotlin', 'Java', 'RxJava', 'Room', 'MVVM', 'Coroutines', 
    'Jetpack', 'Multi-module', 'CI/CD', 'API', 'APK', 'SaaS', 'Enterprise',
    'React', 'TypeScript', 'JavaScript', 'Node.js', 'Python', 'SQL',
    'AWS', 'Firebase', 'Git', 'Docker', 'Kubernetes'
  ];
  
  const found = techKeywords.filter(tech => 
    description.toLowerCase().includes(tech.toLowerCase())
  );
  
  return found;
}
