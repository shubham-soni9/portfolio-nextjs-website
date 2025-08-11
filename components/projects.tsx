"use client";

import React from "react";
import SectionHeading from "./section-heading";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="mt-6 scroll-mt-28 mb-14">
      <SectionHeading>My projects</SectionHeading>
      <Project />
    </section>
  );
}
