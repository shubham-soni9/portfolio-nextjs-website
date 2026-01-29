"use client";

import { projectsData, openSourceProjectsData, currentProject } from "@/lib/data";

export default function Project() {
  return (
    <div className="w-full">
      <div className="overflow-x-auto">
        <table className="w-full table-fixed border-collapse bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg">
          <thead className="bg-gray-100 dark:bg-gray-800">
            <tr>
              <th className="w-[23%] px-2 sm:px-4 py-3 text-left text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                Project Name
              </th>
              <th className="w-[22%] px-2 sm:px-4 py-3 text-left text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                Company
              </th>
              <th className="w-[12%] px-2 sm:px-4 py-3 text-left text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                Years
              </th>
              <th className="hidden sm:table-cell w-[12%] px-2 sm:px-4 py-3 text-left text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                Type
              </th>
              <th className="w-[16%] px-2 sm:px-4 py-3 text-left text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                Industry
              </th>
              <th className="w-[15%] px-2 sm:px-4 py-3 text-left text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                Downloads
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {projectsData.map((project, index) => (
              <tr
                key={index}
                className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
              >
                <td className="px-2 sm:px-4 py-3 text-xs sm:text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">
                  {project.url && project.url !== "#" ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium underline transition-colors duration-200 break-words"
                    >
                      {project.title}
                    </a>
                  ) : (
                    <span className="font-medium break-words">
                      {project.title}
                    </span>
                  )}
                </td>
                <td className="px-2 sm:px-4 py-3 text-xs sm:text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                  <span className="break-words">{project.company}</span>
                </td>
                <td className="px-2 sm:px-4 py-3 text-xs sm:text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                  {project.years}
                </td>
                <td className="hidden sm:table-cell px-2 sm:px-4 py-3 text-xs sm:text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                  <span className="inline-flex items-center px-1.5 sm:px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                    {project.projectType}
                  </span>
                </td>
                <td className="px-2 sm:px-4 py-3 text-xs sm:text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                  <span className="break-words">{project.industry}</span>
                </td>
                <td className="px-2 sm:px-4 py-3 text-xs sm:text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                  {project.downloads}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-20 mb-10">
        <h3 className="text-2xl sm:text-3xl font-medium text-gray-900 dark:text-white mb-8 text-center">
          Current Hobby Project
        </h3>

        <div className="bg-white/70 dark:bg-gray-900/70 rounded-xl border border-gray-200 dark:border-gray-800 p-6 sm:p-8 shadow-sm hover:shadow-md transition-all relative overflow-hidden group">
          
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h4 className="text-xl font-bold">
                    <a
                      href={currentProject.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      {currentProject.title}
                    </a>
                  </h4>
                </div>

                <p className="text-lg text-gray-700 dark:text-gray-300 font-medium mb-4">
                  {currentProject.subtitle}
                </p>

                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  {currentProject.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {currentProject.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-xs sm:text-sm text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={currentProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
                >
                  Visit Website
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              </div>

              <div className="flex-1 w-full md:w-auto bg-gray-50 dark:bg-gray-800/50 rounded-lg p-5 border border-gray-100 dark:border-gray-800">
                <h5 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-blue-500"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  Key Features
                </h5>
                <ul className="space-y-3">
                  {currentProject.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-green-500 mt-0.5 flex-shrink-0"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <div className="flex flex-col items-center justify-center text-center mb-10">
          <h3 className="text-2xl sm:text-3xl font-medium text-gray-900 dark:text-white mb-4">
            Open Source Projects
          </h3>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
            A curated set of personal open source projects spanning Android apps,
            full-stack SaaS products, and modern web tools.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {openSourceProjectsData.map((project, index) => (
            <div
              key={index}
              className="bg-white/70 dark:bg-gray-900/70 rounded-lg border border-gray-200 dark:border-gray-800 p-4 sm:p-5 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex items-center justify-between gap-3">
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
                    {project.title}
                  </h4>
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-[11px] sm:text-xs font-medium bg-blue-50 text-blue-700 dark:bg-blue-900/40 dark:text-blue-200 whitespace-nowrap">
                    {project.platform}
                  </span>
                </div>

                <p className="mt-3 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  {project.description}
                </p>

                {project.techStack && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-[11px] sm:text-xs text-gray-700 dark:text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {"relatedRepos" in project && project.relatedRepos && (
                  <div className="mt-3">
                    <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">
                      Related repositories
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.relatedRepos.map((repoUrl) => (
                        <a
                          key={repoUrl}
                          href={repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-[10px] sm:text-xs text-blue-700 dark:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/40 transition-colors break-all"
                        >
                          {new URL(repoUrl).pathname.replace("/", "")}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-3 py-1.5 rounded-md text-xs sm:text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors"
                  >
                    Live site
                  </a>
                )}
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-3 py-1.5 rounded-md text-xs sm:text-sm font-medium text-gray-800 bg-gray-100 hover:bg-gray-200 dark:text-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
                >
                  Source code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
