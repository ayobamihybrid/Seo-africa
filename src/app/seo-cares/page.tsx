"use client";

import React, { useState, useMemo, useEffect } from "react";
import Navbar from "../components/Navbar";
import Donate from "../components/Donate";
import Footer from "../components/Footer";
import Image from "next/image";
import { mockProjects } from "../utils";

type Props = {};

type FilterType = "All projects" | "Kids" | "STEM Education" | "Environment";
type SortType = "Most recent" | "Oldest first" | "A-Z";

const SeoCares = (props: Props) => {
  const [activeFilter, setActiveFilter] = useState<FilterType>("All projects");
  const [sortBy, setSortBy] = useState<SortType>("Most recent");
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  const filteredAndSortedProjects = useMemo(() => {
    let filtered = mockProjects;

    if (activeFilter !== "All projects") {
      filtered = mockProjects.filter((project) =>
        project.categories.includes(activeFilter)
      );
    }

    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case "Most recent":
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        case "Oldest first":
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        case "A-Z":
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });

    return sorted;
  }, [activeFilter, sortBy]);

  const totalPages = Math.ceil(
    filteredAndSortedProjects.length / projectsPerPage
  );
  const startIndex = (currentPage - 1) * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;
  const currentProjects = filteredAndSortedProjects.slice(startIndex, endIndex);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeFilter, sortBy]);

  const handleFilterChange = (filter: FilterType) => {
    setActiveFilter(filter);
  };

  const handleSortChange = (sort: SortType) => {
    setSortBy(sort);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages
        );
      }
    }

    return pages;
  };

  const getMobilePageNumbers = () => {
    // Show fewer pages on mobile
    const pages = [];
    if (totalPages <= 3) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage === 1) {
        pages.push(1, 2, "...", totalPages);
      } else if (currentPage === totalPages) {
        pages.push(1, "...", totalPages - 1, totalPages);
      } else {
        pages.push(1, "...", currentPage, "...", totalPages);
      }
    }
    return pages;
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      "Climate change": "bg-blue-100 text-blue-700 border-blue-200",
      Environment: "bg-green-100 text-green-700 border-green-200",
      "STEM Education": "bg-blue-100 text-blue-700 border-blue-200",
      Kids: "bg-pink-100 text-pink-700 border-pink-200",
    };
    return (
      colors[category as keyof typeof colors] ||
      "bg-gray-100 text-gray-700 border-gray-200"
    );
  };

  const featuredProject = mockProjects.find((p) => p.featured);

  return (
    <div className="bg-[#131B3E]">
      <Navbar />

      <section className="bg-[#131B3E] px-4 sm:px-6 lg:px-12 py-8 sm:py-12 lg:py-16 pb-16 sm:pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <div className="mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-[#E8913A] to-[#ED60A4] bg-clip-text text-transparent text-base sm:text-lg lg:text-xl font-bold">
                SEO Cares Projects
              </span>
            </div>

            <h1 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-light leading-tight mb-4 sm:mb-5 lg:mb-7 max-w-5xl">
              SEO Cares: Driving Social Impact Beyond the Classroom
            </h1>

            <div className="max-w-4xl space-y-3 sm:space-y-4 lg:space-y-6 mb-4 sm:mb-6 lg:mb-8">
              <p className="text-white/90 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
                Community service is an important quality shared by the SEO
                Africa network. As part of our training programme and with the
                support of our partner companies, each class of SEO Africa
                interns and graduate trainees are tasked to work on a social
                project with the aim of giving back to their communities and
                building social-consciousness as they build remarkable careers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {featuredProject && (
        <section className="bg-white px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-stretch lg:h-[600px]">
              <div className="relative h-64 sm:h-80 lg:h-full">
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10">
                  <span className="bg-gradient-to-r from-[#E8913A] to-[#ED60A4] text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold uppercase tracking-wide">
                    Featured Project
                  </span>
                </div>
                <div className="h-full bg-gray-100 rounded-xl sm:rounded-2xl overflow-hidden">
                  <Image
                    src={featuredProject.image}
                    alt={featuredProject.title}
                    fill
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="bg-[#FFB43C0D] p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6 h-full flex flex-col justify-center rounded-xl sm:rounded-2xl lg:rounded-none">
                <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6">
                  {featuredProject.categories.map((category, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium border ${getCategoryColor(
                        category
                      )}`}
                    >
                      {category}
                    </span>
                  ))}
                </div>

                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-normal text-[#131B3E] leading-tight">
                  {featuredProject.title}
                </h2>

                <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-2 sm:gap-4 text-gray-600 text-xs sm:text-sm">
                  <span className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#E8913A] rounded-full flex-shrink-0"></div>
                    {featuredProject.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#ED60A4] rounded-full flex-shrink-0"></div>
                    {featuredProject.organization}
                  </span>
                  <span className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                    {featuredProject.location}
                  </span>
                </div>

                <div className="pt-2 sm:pt-4">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200 text-sm sm:text-base"
                  >
                    Read more
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="bg-gray-50 px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6 sm:mb-8 lg:mb-12">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6 mb-6">
              <div className="w-full">
                <div className="lg:hidden">
                  <div className="flex overflow-x-auto gap-1 pb-2 scrollbar-hide ">
                    {(
                      [
                        "All projects",
                        "Kids",
                        "STEM Education",
                        "Environment",
                      ] as FilterType[]
                    ).map((filter) => (
                      <button
                        key={filter}
                        onClick={() => handleFilterChange(filter)}
                        className={`flex-shrink-0 px-4 py-2.5 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                          activeFilter === filter
                            ? "text-blue-600 border-blue-600"
                            : "text-gray-500 hover:text-gray-700 border-transparent"
                        }`}
                      >
                        {filter}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="hidden lg:flex flex-wrap gap-1 border-b border-gray-200">
                  {(
                    [
                      "All projects",
                      "Kids",
                      "STEM Education",
                      "Environment",
                    ] as FilterType[]
                  ).map((filter) => (
                    <button
                      key={filter}
                      onClick={() => handleFilterChange(filter)}
                      className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
                        activeFilter === filter
                          ? "text-blue-600 border-blue-600"
                          : "text-gray-500 hover:text-gray-700 border-transparent"
                      }`}
                    >
                      {filter}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex-shrink-0">
                <select
                  value={sortBy}
                  onChange={(e) => handleSortChange(e.target.value as SortType)}
                  className="bg-white border border-gray-200 rounded-md px-3 py-2 text-sm text-gray-700 focus:outline-none w-full sm:w-auto min-w-[140px]"
                >
                  <option value="Most recent">Most recent</option>
                  <option value="Oldest first">Oldest first</option>
                  <option value="A-Z">A-Z</option>
                </select>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
            {currentProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="relative aspect-[4/3] bg-gray-100">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center text-xs sm:text-sm text-gray-500 gap-1 sm:gap-4">
                    <span className="truncate">{project.organization}</span>
                    <span className="hidden sm:inline">•</span>
                    <span>{project.date}</span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 leading-tight line-clamp-2">
                    {project.title}
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {project.categories.map((category, index) => (
                      <span
                        key={index}
                        className={`px-2.5 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium ${getCategoryColor(
                          category
                        )}`}
                      >
                        {category}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors text-sm"
                  >
                    Read more
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex items-center justify-between">
              <button
                onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className={`flex items-center gap-2 px-3 sm:px-4 py-2 text-sm font-medium transition-colors ${
                  currentPage === 1
                    ? "text-gray-400 cursor-not-allowed"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                <span className="hidden sm:inline">Previous</span>
              </button>

              <div className="hidden sm:flex items-center gap-2">
                {getPageNumbers().map((page, index) =>
                  page === "..." ? (
                    <span key={index} className="px-2 text-gray-400">
                      ...
                    </span>
                  ) : (
                    <button
                      key={index}
                      onClick={() => handlePageChange(page as number)}
                      className={`w-8 h-8 flex items-center justify-center text-sm font-medium rounded-md transition-colors ${
                        currentPage === page
                          ? "bg-blue-600 text-white"
                          : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      {page}
                    </button>
                  )
                )}
              </div>

              {/* Mobile pagination */}
              <div className="flex sm:hidden items-center gap-1">
                {getMobilePageNumbers().map((page, index) =>
                  page === "..." ? (
                    <span key={index} className="px-1 text-gray-400 text-sm">
                      ...
                    </span>
                  ) : (
                    <button
                      key={index}
                      onClick={() => handlePageChange(page as number)}
                      className={`w-7 h-7 flex items-center justify-center text-xs font-medium rounded-md transition-colors ${
                        currentPage === page
                          ? "bg-blue-600 text-white"
                          : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      {page}
                    </button>
                  )
                )}
              </div>

              <button
                onClick={() =>
                  handlePageChange(Math.min(totalPages, currentPage + 1))
                }
                disabled={currentPage === totalPages}
                className={`flex items-center gap-2 px-3 sm:px-4 py-2 text-sm font-medium transition-colors ${
                  currentPage === totalPages
                    ? "text-gray-400 cursor-not-allowed"
                    : "text-gray-900 hover:text-blue-600"
                }`}
              >
                <span className="hidden sm:inline">Next</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          )}

          {filteredAndSortedProjects.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-500 text-lg mb-4">
                No projects found
              </div>
              <p className="text-gray-400">
                Try adjusting your filters to see more results.
              </p>
            </div>
          )}
        </div>
      </section>

      <Donate />

      <Footer />
    </div>
  );
};

export default SeoCares;
