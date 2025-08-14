"use client";

import React, { useState, useMemo, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import { mockProjects } from "../utils";

type Props = {};

type FilterType = "All projects" | "Kids" | "STEM Education" | "Environment";
type SortType = "Most recent" | "Oldest first" | "A-Z";

const Donate = (props: Props) => {
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

      <section className="relative h-screen bg-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/seocares_bg.png" 
            alt="African Leadership Collage"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6 lg:px-8">
          <div className="bg-[#131B3E] p-2 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-white leading-tight">
              <span className="text-orange-500 italic font-serif">Donate</span>
              <span className="text-white"> to Africa's Next</span>
              <br />
              <span className="text-white italic font-serif">
                Generation of Leadership.
              </span>
            </h1>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default Donate;
