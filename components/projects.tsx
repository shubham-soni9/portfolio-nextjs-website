"use client";

import React from "react";
import SectionHeading from "./section-heading";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="sm:mt-12 scroll-mt-28 mb-14">
      <div className="max-w-6xl mx-auto">
        <SectionHeading>My projects</SectionHeading>
        <Project />
      </div>
    </section>
  );
}
