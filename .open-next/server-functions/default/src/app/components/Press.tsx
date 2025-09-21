"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getStrapiImageUrl } from "../lib/strapi";
import { PressItem } from "../types/strapi";

interface PressProps {
  pressItems?: PressItem[];
  maxItems?: number;
}

const Press: React.FC<PressProps> = ({ 
  pressItems = [], 
  maxItems = 3 
}) => {


  const displayItems = (pressItems && pressItems.length > 0 ? pressItems : [])
    .slice(0, maxItems);

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      });
    } catch (error) {
      return ""; 
    }
  };

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {displayItems.map((item, index) => (
        <div key={item.id} className="bg-gray-50 p-8 rounded-lg">
          <div className="mb-6">
            <Image
              src={getStrapiImageUrl(item.news_logo)}
              alt={item.news_logo.alternativeText || `News outlet ${index + 1}`}
              width={item.news_logo.width || 200}
              height={item.news_logo.height || 40}
              className="object-contain max-h-10"
            />
            <p className="text-gray-600 text-sm mt-2">
              {formatDate(item.post_date)}
            </p>
          </div>

          <p className="text-gray-700 text-base leading-relaxed mb-6">
            {item.content}
          </p>

          {item.cta_link && (
            <Link 
              href={item.cta_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="text-gray-900 hover:text-blue-600 font-medium inline-flex items-center gap-2 transition-colors duration-200 underline">
                {item.cta_text}
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          )}
        </div>
      ))}
    </div>
  );
};

export default Press;