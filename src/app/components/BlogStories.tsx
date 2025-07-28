"use client";

import React from 'react';
import Image from 'next/image';
import { ArrowUpRight, Clock } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  category?: string;
}

interface BlogStoriesProps {
  featuredPost?: BlogPost;
  posts?: BlogPost[];
  className?: string;
  title?: string;
  subtitle?: string;
}

const defaultFeaturedPost: BlogPost = {
  id: 'featured',
  title: 'SEO BofA Event Accra for BofA',
  excerpt: 'Crafting engaging presentations involves a blend of storytelling and visual appeal. Start by outlining your key points and supporting them with relevant data. Finally, us...',
  image: '/blog_feature_image.png',
  date: 'April 16 2025',
  readTime: '1 min read',
  category: 'EVENT'
};

const defaultPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Empowering Future Engineers at Kumasi Technical University',
    excerpt: 'Crafting engaging presentations involves a blend of storytelling and visual appeal. Start by outlining your key points and supporting them with relevant data. Finally, us...',
    image: '/blog_image1.png',
    date: 'April 16 2025',
    readTime: '1 min read'
  },
  {
    id: '2',
    title: 'Empowering Future Engineers at Kumasi Technical University',
    excerpt: 'Crafting engaging presentations involves a blend of storytelling and visual appeal. Start by outlining your key points and supporting them with relevant data. Finally, us...',
    image: '/blog_image2.png',
    date: 'April 16 2025',
    readTime: '1 min read'
  },
  {
    id: '3',
    title: 'Empowering Future Engineers at Kumasi Technical University',
    excerpt: 'Crafting engaging presentations involves a blend of storytelling and visual appeal. Start by outlining your key points and supporting them with relevant data. Finally, us...',
    image: '/blog_image3.png',
    date: 'April 16 2025',
    readTime: '1 min read'
  }
];

const BlogStories: React.FC<BlogStoriesProps> = ({
  featuredPost = defaultFeaturedPost,
  posts = defaultPosts,
  className = "",
  title = "Stories from our blog",
  subtitle = "Discover our latest stories, news and events."
}) => {
  const titleAnimation = useScrollAnimation({ animationType: "fade-up", threshold: 0.3 });
  const subtitleAnimation = useScrollAnimation({ animationType: "fade-up", threshold: 0.3 });
  const buttonAnimation = useScrollAnimation({ animationType: "fade-up", threshold: 0.3 });
  const dividerAnimation = useScrollAnimation({ animationType: "fade-in", threshold: 0.3 });
  const featuredPostAnimation = useScrollAnimation({ animationType: "fade-left", threshold: 0.2 });

  return (
    <section className={`py-16 px-4 bg-white ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 
            ref={titleAnimation.ref}
            className={`text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight ${titleAnimation.animationClass}`}
          >
            {title}
          </h2>
          <p 
            ref={subtitleAnimation.ref}
            className={`text-gray-600 text-lg mb-8 max-w-2xl ${subtitleAnimation.animationClass}`}
            style={{ transitionDelay: '200ms' }}
          >
            {subtitle}
          </p>
          
          <button 
            ref={buttonAnimation.ref}
            className={`bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 flex items-center gap-2 group ${buttonAnimation.animationClass}`}
            style={{ transitionDelay: '400ms' }}
          >
            <span>View more stories</span>
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </div>

        <div 
          ref={dividerAnimation.ref}
          className={`w-full h-px bg-gray-200 mb-12 ${dividerAnimation.animationClass}`}
          style={{ transitionDelay: '600ms' }}
        ></div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div 
            ref={featuredPostAnimation.ref}
            className={`lg:col-span-2 group cursor-pointer ${featuredPostAnimation.animationClass}`}
            style={{ transitionDelay: '800ms' }}
          >
            <div className="relative bg-white rounded-2xl overflow-hidden h-full">
              <div className="relative h-96 lg:h-full min-h-[500px] overflow-hidden">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="50vw"
                />
                
                {featuredPost.category && (
                  <div className="absolute bottom-6 left-6">
                    <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide">
                      {featuredPost.category}
                    </span>
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                  <div className="absolute bottom-8 left-8 right-8">
                    <h3 className="text-white text-2xl md:text-3xl font-bold leading-tight mb-4">
                      {featuredPost.title}
                    </h3>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-300">
                      <span>{featuredPost.date}</span>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-6">
            {posts.map((post, index) => (
              <BlogPostCard 
                key={post.id} 
                post={post} 
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface BlogPostCardProps {
  post: BlogPost;
  index: number;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post, index }) => {
  const cardAnimation = useScrollAnimation({ 
    animationType: "fade-right", 
    threshold: 0.2 
  });

  return (
    <article 
      ref={cardAnimation.ref}
      className={`group cursor-pointer ${cardAnimation.animationClass}`}
      style={{ 
        transitionDelay: `${1000 + (index * 150)}ms` 
      }}
    >
      <div className="flex items-center gap-6 bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 h-40">
        <div className="flex-1 p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
            {post.title}
          </h3>
          
          <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
            {post.excerpt}
          </p>

          <div className="flex items-center gap-2 md:gap-4 text-xs md:text-sm text-gray-500">
            <span>{post.date}</span>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>

        <div className="relative w-32 h-full flex-shrink-0">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="128px"
          />
        </div>
      </div>
    </article>
  );
};

export default BlogStories;
export type { BlogPost, BlogStoriesProps };