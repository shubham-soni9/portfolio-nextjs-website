"use client";

import { useRef, useState } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  url,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isImageExpanded, setIsImageExpanded] = useState(false);

  return (
    <div
      ref={ref}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section 
        className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20 lg:max-w-none"
      >
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
          
          {/* Mobile view - Show image prominently */}
          <div className="mt-4 sm:hidden">
            <div 
              className="relative w-full h-64 rounded-lg overflow-hidden cursor-pointer"
              onClick={() => setIsImageExpanded(true)}
            >
              <Image
                src={imageUrl}
                alt={`${title} mobile app screenshot`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-medium">Click to view full image</span>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop view - Enhanced image with zoom */}
        <div className="absolute hidden sm:block top-8 -right-40 w-[28.25rem]">
          <div 
            className="relative w-full h-64 rounded-t-lg shadow-2xl overflow-hidden cursor-pointer"
            onClick={() => setIsImageExpanded(true)}
          >
            <Image
              src={imageUrl}
              alt={`${title} mobile app screenshot`}
              fill
              className="object-cover transition-all duration-300
                group-hover:scale-110
                group-hover:-translate-x-3
                group-hover:translate-y-3
                group-hover:-rotate-2"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white font-medium">Click to view full image</span>
            </div>
          </div>
        </div>

        {/* External link button */}
        {url && url !== "#" && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              window.open(url, "_blank");
            }}
            className="absolute bottom-4 right-4 bg-black/[0.7] text-white px-3 py-1 rounded-full text-sm hover:bg-black transition-colors duration-200"
          >
            View App
          </button>
        )}
      </section>

      {/* Full screen image modal */}
      {isImageExpanded && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setIsImageExpanded(false)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full h-full">
            <Image
              src={imageUrl}
              alt={`${title} mobile app screenshot - Full view`}
              fill
              className="object-contain"
            />
            <button
              onClick={() => setIsImageExpanded(false)}
              className="absolute top-4 right-4 bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors duration-200"
            >
              ✕
            </button>
            <div className="absolute bottom-4 left-4 text-white bg-black/50 px-3 py-1 rounded-full text-sm">
              {title}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
