import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Donate from "@/app/components/Donate";
import Footer from "@/app/components/Footer";
import FindOpportunities from "@/app/components/FindOpportunities";
import { ArrowLeft } from "lucide-react";
import BlogContent from "./BlogContent";

interface Props {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

const BlogDetail = async ({ params }: Props) => {
  const { slug } = await params;

  const blogPost = {
    id: 1,
    title:
      "Moving Toward Sustainable Academic Innovation—A guest post sharing ambitions for a new collaboration.",
    category: "Business",
    date: "April 16 2025",
    readTime: "1 min read",
    image: "/ourblog_image1.png",
    author: {
      name: "Adunola Adeshola",
      title: "Programme Manager",
      avatar: "/author-avatar.png",
    },
    content: {
      introduction:
        "The Nigeria Career Programme is designed for recent graduates (within the past two years) who have completed or will soon complete their NYSC in the year applications are open and whose passions lie geared towards to build a career in Finance.\n\nSelected candidates will undergo world-class training, equipping them with both the technical and soft skills needed to excel in the corporate environment. Upon successful completion, participants will be placed as Graduate Trainees at leading firms in Nigeria.\n\nAs part of the application process, we conduct a rigorous recruitment and selection process, identifying top university graduates based on ability, motivation, and leadership potential.",

      quote:
        "In a world older and more complete than ours they move finished and complete, gifted with extensions of the senses we have lost or never attained, living by voices we shall never hear.",

      subheadingInfo:
        "At volutpat elit, et lorem dui tincidunt. urna condimentum, massa eget volutpat lacus mollis ornare. Sed diam lorem, bibendum et tellus dapibus fermentum enim. Mauris posuere ullamcorper orci amet, tristique neque ut neque lacus mauris.\n\nLorem odio tempor cras vel placerat consectetur netus, ultrices. Blandit duis ultrices volutpat mauris feugiat orci blandit et. Aenean neque lorem vel velit ac. Viverra, arcu mauris pellentesque suscipit accumsan. Cursus mauris auctor magna mauris consequat faucibus molestie pellentesque. Odio curae eu faucibus vestibulum.\n\nLectus leo blandit mauris mauris. Morbi odio mauris mauris bibendum pellentesque. Libero et et tristique bibendum ut posuere tellus. Morbi rutrum ut risus bibendum bibendum. Nunc mauris ac molestie consequat nullam mauris gravida lacus mauris et. Sed tortor feugiat mauris mauris mauris mauris venenatis et. Mauris pellentesque sapien arcu magna ullamcorper elementum mauris.\n\nNamque quis mauris mauris accumsan mauris ac lorem mauris. Netus sed mauris mauris mauris mauris mauris sapien. Sed mauris hendrerit mauris mauris volutpat mauris mauris amet mauris sed lorem mauris mauris pellentesque mauris.\n\nCursus vivamus lobortis mauris mauris mauris. Mauris mauris pellentesque mauris mauris mauris mauris mauris eget mauris mauris mauris mauris mauris mauris mauris mauris mauris mauris mauris mauris mauris mauris mauris mauris mauris mauris mauris mauris mauris mauris.",

      conclusion:
        "Mauris sed consectetur in turpis adipiscing elit ut mauris. Tellus et scelerisque est ultrices ultrices. Duis est uis sed leo nisl, rhoncus elit sagittis. Quisque tristique cursus est quis vel. Nisl ut scelerisque mauris risus justo mauris bibendum.\n\nNunc sed faucibus bibendum feugiat sed tristique. Ipsum dignass consequuntur mauris mauris. In bibendum pharetra consectetur mauris mauris mauris mauris. Etiam sagittis in mauris sed ut. Quis bibendum et est dictum mauris mauris mauris bibendum mauris.",
    },
  };

  const relatedPosts = [
    {
      id: 2,
      title: "Empowering Future Engineers at Kumasi Technical University",
      category: "Business",
      date: "April 16 2025",
      readTime: "1 min read",
      image: "/blog_image1.png",
    },
    {
      id: 3,
      title: "Empowering Future Engineers at Kumasi Technical University",
      category: "Leadership",
      date: "April 16 2025",
      readTime: "1 min read",
      image: "/blog_image2.png",
    },
    {
      id: 4,
      title: "Empowering Future Engineers at Kumasi Technical University",
      category: "Education",
      date: "April 16 2025",
      readTime: "1 min read",
      image: "/blog_image3.png",
    },
  ];

  return (
    <div className="bg-white">
      <Navbar details />

      <div className="mt-9 max-w-4xl mx-auto px-4 lg:px-0">
        <Link
          href="/blog"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Go back
        </Link>
      </div>

      <article className="px-4 sm:px-6 lg:px-12 py-16 lg:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-[16/9] mb-8 rounded-2xl overflow-hidden">
            <Image
              src={blogPost.image}
              alt={blogPost.title}
              fill
              className="object-cover"
            />
          </div>

          <header className="mb-12">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  blogPost.category === "Business"
                    ? "bg-blue-100 text-blue-700"
                    : "bg-orange-100 text-orange-700"
                }`}
              >
                {blogPost.category}
              </span>
              <span className="text-blue-600 font-medium text-sm">
                {blogPost.date}
              </span>
              <span className="flex items-center gap-1 text-gray-500 text-sm">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.414-1.414L11 9.586V6z"
                    clipRule="evenodd"
                  />
                </svg>
                {blogPost.readTime}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-8">
              {blogPost.title}
            </h1>
          </header>

          <BlogContent blogPost={blogPost} />
        </div>
      </article>

      <section className="bg-gray-50 px-4 sm:px-6 lg:px-12 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end md:items-center justify-between mb-12">
            <div>
              <span className="text-orange-600 font-semibold text-sm uppercase tracking-wide">
                OUR BLOG
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mt-2">
                More stories from our blog.
              </h2>
            </div>

            <Link
              href="/blog"
              className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-1"
            >
              View all Blog
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
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-3">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                        post.category === "Business"
                          ? "bg-blue-100 text-blue-700"
                          : post.category === "Leadership"
                          ? "bg-green-100 text-green-700"
                          : "bg-orange-100 text-orange-700"
                      }`}
                    >
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="text-blue-600 font-medium">
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.414-1.414L11 9.586V6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <div className="bg-white">
        <FindOpportunities />
      </div>

      {/* <Donate /> */}
      <Footer />
    </div>
  );
};

export default BlogDetail;
