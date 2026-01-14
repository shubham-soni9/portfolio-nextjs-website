"use client";

import { projectsData, openSourceProjectsData } from "@/lib/data";

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
              <th className="w-[12%] px-2 sm:px-4 py-3 text-left text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
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
                <td className="px-2 sm:px-4 py-3 text-xs sm:text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
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

      <div className="mt-10">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
          Open source projects
        </h3>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 max-w-3xl">
          A curated set of personal open source projects spanning Android apps,
          full-stack SaaS products, and modern web tools.
        </p>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
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
