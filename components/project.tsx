"use client";

import { projectsData } from "@/lib/data";

export default function Project() {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full table-fixed border-collapse bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg">
        <thead className="bg-gray-100 dark:bg-gray-800">
          <tr>
            <th className="w-[25%] px-2 sm:px-4 py-3 text-left text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
              Project Name
            </th>
            <th className="w-[18%] px-2 sm:px-4 py-3 text-left text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
              Company
            </th>
            <th className="w-[12%] px-2 sm:px-4 py-3 text-left text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
              Years
            </th>
            <th className="w-[12%] px-2 sm:px-4 py-3 text-left text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
              Type
            </th>
            <th className="w-[18%] px-2 sm:px-4 py-3 text-left text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
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
                  <span className="font-medium break-words">{project.title}</span>
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
  );
}
