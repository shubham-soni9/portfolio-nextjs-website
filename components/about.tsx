"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Having <span className="font-medium">7+ years</span> of native Android development in leading companies like{" "}
        <span className="font-medium">Freshworks, Meesho, Rebel Foods (Faasos) and Jugnoo</span>. I've worked over{" "}
        <span className="font-medium">12 projects</span> including 6 projects from scratch and improved several other products and scaled to{" "}
        <span className="font-medium">10+ million active users</span>.{" "}
        <span className="italic">My domain experience</span> spans{" "}
        <span className="font-medium">SaaS, E-commerce, Food, Delivery and Taxi</span>. I've been part of the core team and handled several small teams independently from requirement to release.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy{" "}
        <span className="font-medium">Investment Strategy, Startup News, Entrepreneurship</span>, and working on{" "}
        <span className="font-medium">open source projects</span>. I'm also an{" "}
        <span className="font-medium">AI Enthusiast</span> and always looking to learn new technologies and stay updated with the latest trends in mobile development.
      </p>
    </section>
  );
}
