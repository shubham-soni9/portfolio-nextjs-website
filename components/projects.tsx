"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      {/* Debug div to test visibility */}
      <div className="bg-blue-500 p-4 text-white mb-4">
        Projects Component is rendering - {projectsData.length} projects found
      </div>
      
      <SectionHeading>My projects</SectionHeading>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-6">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
