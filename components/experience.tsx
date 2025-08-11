"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      {/* Debug div to test visibility */}
      <div className="bg-red-500 p-4 text-white mb-4">
        Experience Component is rendering - {experiencesData.length} experiences found
      </div>
      
      <SectionHeading>My experience</SectionHeading>
      
      {/* Vertical timeline with explicit visibility styles */}
      <div className="relative" style={{ opacity: 1, visibility: 'visible' }}>
        <VerticalTimeline lineColor="">
          {experiencesData.map((item, index) => (
            <React.Fragment key={index}>
              <VerticalTimelineElement
                contentStyle={{
                  background:
                    theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                  boxShadow: "none",
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  textAlign: "left",
                  padding: "1.5rem 2rem",
                  opacity: 1,
                  visibility: 'visible',
                }}
                contentArrowStyle={{
                  borderRight:
                    theme === "light"
                      ? "0.4rem solid #9ca3af"
                      : "0.4rem solid rgba(255, 255, 255, 0.5)",
                }}
                date={item.date}
                icon={item.icon}
                iconStyle={{
                  background:
                    theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                  fontSize: "1.5rem",
                  opacity: 1,
                  visibility: 'visible',
                }}
              >
                <div className="space-y-3">
                  <div>
                    <h3 className="font-semibold capitalize text-lg">{item.title}</h3>
                    <p className="font-medium text-gray-600 dark:text-gray-300">{item.location}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm text-gray-700 dark:text-gray-200 mb-2">
                      Key Achievements:
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-300">
                      {getKeyAchievements(item.description).map((achievement, idx) => (
                        <li key={idx} className="leading-relaxed">{achievement}</li>
                      ))}
                    </ul>
                  </div>

                  {getTechnologies(item.description).length > 0 && (
                    <div>
                      <h4 className="font-semibold text-sm text-gray-700 dark:text-gray-200 mb-2">
                        Technologies & Skills:
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {getTechnologies(item.description).map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-xs rounded-full text-gray-700 dark:text-gray-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </VerticalTimelineElement>
            </React.Fragment>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
}

// Helper function to extract key achievements from description
function getKeyAchievements(description: string): string[] {
  const achievements: string[] = [];
  
  // Extract metrics and key accomplishments
  const metrics = description.match(/(\d+%?|\d+[Kk]|\d+[Mm]|\d+ lakh|\d+ million)/g);
  const keyPhrases = [
    'increased', 'reduced', 'improved', 'boosted', 'achieved', 'delivered', 
    'maintained', 'led', 'developed', 'implemented', 'created', 'optimized'
  ];
  
  // Split description into sentences and filter for achievements
  const sentences = description.split(/[.!?]+/).filter(s => s.trim().length > 0);
  
  sentences.forEach(sentence => {
    const trimmed = sentence.trim();
    if (trimmed.length > 10) {
      // Check if sentence contains metrics or key action words
      const hasMetrics = metrics?.some(metric => trimmed.includes(metric));
      const hasKeyPhrase = keyPhrases.some(phrase => 
        trimmed.toLowerCase().includes(phrase)
      );
      
      if (hasMetrics || hasKeyPhrase) {
        achievements.push(trimmed);
      }
    }
  });
  
  return achievements.slice(0, 4); // Limit to 4 key achievements
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
