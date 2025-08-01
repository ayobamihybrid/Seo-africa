"use client";

import React, { useState } from "react";
import { ChevronDown, Heart, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="relative z-10 flex items-center justify-between px-4 sm:px-6 py-4 lg:px-12">
        <Link href={"/"} className="w-12 h-12 md:w-20 md:h-20 relative">
          <Image
            src="/seo_logo.png"
            alt="SEO Africa Logo"
            fill
            className="object-contain"
          />
        </Link>

        <div className="hidden lg:flex items-center space-x-6 xl:space-x-8 text-white">
          <Link
            href="/about-us"
            className="flex items-center space-x-1 cursor-pointer hover:text-gray-300 transition-colors"
          >
            <span className="text-sm xl:text-base">About us</span>
            <ChevronDown className="w-4 h-4" />
          </Link>
          <div className="flex items-center space-x-1 cursor-pointer hover:text-gray-300 transition-colors">
            <span className="text-sm xl:text-base">Our Programmes</span>
            <ChevronDown className="w-4 h-4" />
          </div>
          <div className="flex items-center space-x-1 cursor-pointer hover:text-gray-300 transition-colors">
            <span className="text-sm xl:text-base">Resources</span>
            <ChevronDown className="w-4 h-4" />
          </div>
          <div className="flex items-center space-x-1 cursor-pointer hover:text-gray-300 transition-colors">
            <span className="text-sm xl:text-base">Get involved</span>
            <ChevronDown className="w-4 h-4" />
          </div>
          <div className="cursor-pointer hover:text-gray-300 transition-colors">
            <span className="text-sm xl:text-base">Contact us</span>
          </div>
        </div>

        <div className="hidden sm:flex items-center space-x-3 lg:space-x-4">
          <div className="flex items-center space-x-1 text-white cursor-pointer hover:text-gray-300 transition-colors">
            <span className="text-sm">EN</span>
            <ChevronDown className="w-3 h-3" />
          </div>
          <button className="flex items-center space-x-2 bg-transparent border border-white text-white px-4 lg:px-6 py-2 rounded-full hover:bg-white hover:text-black transition-colors text-sm">
            <span>Donate</span>
            <Heart className="w-3 h-3 lg:w-4 lg:h-4" />
          </button>
          <button className="bg-white text-black px-4 lg:px-6 py-2 rounded-full hover:bg-gray-100 transition-colors text-sm">
            Join us
          </button>
        </div>

        <button
          className="sm:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden absolute top-20 left-0 right-0 bg-black/95 backdrop-blur-sm z-20 px-4 py-6">
          <div className="flex flex-col space-y-4 text-white">
            <span className="py-2">About us</span>
            <span className="py-2">Our Programmes</span>
            <span className="py-2">Resources</span>
            <span className="py-2">Get involved</span>
            <span className="py-2">Contact us</span>
            <div className="flex items-center justify-between pt-4 border-t border-white/20">
              <span>EN</span>
              <div className="flex space-x-3">
                <button className="bg-transparent border border-white text-white px-4 py-2 rounded-full text-sm">
                  Donate
                </button>
                <button className="bg-white text-black px-4 py-2 rounded-full text-sm">
                  Join us
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
