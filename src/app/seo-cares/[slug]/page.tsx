
import React, { Suspense } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import { StrapiProject } from "@/app/types/strapi";
import { getProjects } from "@/app/lib/strapi";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

interface ProjectDetailPageProps {
  params: {
    slug: string;
  };
}

function transformProjectData(strapiProject: StrapiProject) {
  const coverImageUrl = strapiProject.cover_image?.url
    ? strapiProject.cover_image.url.startsWith("http")
      ? strapiProject.cover_image.url
      : `${process.env.NEXT_PUBLIC_STRAPI_URL}${strapiProject.cover_image.url}`
    : "/placeholder-project.jpg";

  const categories = strapiProject.categories?.map((cat) => cat.name) || [];

  const formattedDate = new Date(
    strapiProject.date || strapiProject.createdAt
  ).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return {
    id: strapiProject.id,
    title: strapiProject.title,
    date: formattedDate,
    location: strapiProject.location || "Ghana",
    image: coverImageUrl,
    categories: categories,
    content: strapiProject.content,
    gallery: strapiProject.gallery || [],
  };
}

function stripHtmlTags(html: string): string {
  return html
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .trim();
}

async function ProjectDetailContent({ slug }: { slug: string }) {
  try {
    const projectsResponse = await getProjects(1, 100);
    const project = projectsResponse.data.find(
      (p: StrapiProject) => p.slug === slug || `project-${p.id}` === slug
    );

    if (!project) {
      notFound();
    }

    const transformedProject = transformProjectData(project);

    const getCategoryColor = (category: string) => {
      const colors = {
        "Climate Change": "bg-blue-100 text-blue-700 border-blue-200",
        Environment: "bg-green-100 text-green-700 border-green-200",
        "Stem Education": "bg-blue-100 text-blue-700 border-blue-200",
        Kids: "bg-pink-100 text-pink-700 border-pink-200",
        "General Education": "bg-purple-100 text-purple-700 border-purple-200",
        Adolescense: "bg-orange-100 text-orange-700 border-orange-200",
      };
      return (
        colors[category as keyof typeof colors] ||
        "bg-gray-100 text-gray-700 border-gray-200"
      );
    };

    return (
      <div className="bg-[#131B3E] min-h-screen">
        <Navbar />

        <section className="bg-[#131B3E] px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-20">
          <div className="max-w-4xl mx-auto">
            <nav className="mb-8 text-sm">
              <a
                href="/seo-cares"
                className="text-blue-400 hover:text-blue-300"
              >
                SEO Cares
              </a>
              <span className="text-gray-400 mx-2">/</span>
              <span className="text-gray-300">Project Details</span>
            </nav>

            <div className="flex flex-wrap gap-2 mb-6">
              {transformedProject.categories.map((category, index) => (
                <span
                  key={index}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium border ${getCategoryColor(
                    category
                  )}`}
                >
                  {category}
                </span>
              ))}
            </div>

            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-6">
              {transformedProject.title}
            </h1>

            <div className="flex flex-wrap gap-4 text-white/80 text-sm mb-8">
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#E8913A] rounded-full"></div>
                {transformedProject.date}
              </span>
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#ED60A4] rounded-full"></div>
                SEO Africa
              </span>
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                {transformedProject.location}
              </span>
            </div>
          </div>
        </section>

        <section className="px-4 sm:px-6 lg:px-12 -mt-8">
          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-[16/9] rounded-xl overflow-hidden shadow-lg">
              <Image
                src={transformedProject.image}
                alt={transformedProject.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        <section className="px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-20">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <div
                className="text-white leading-relaxed space-y-6"
                dangerouslySetInnerHTML={{
                  __html: transformedProject.content,
                }}
              />
            </div>
          </div>
        </section>

        {transformedProject.gallery.length > 0 && (
          <section className="px-4 sm:px-6 lg:px-12 pb-12 sm:pb-16 lg:pb-20">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-8 text-center">
                Project Gallery
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {transformedProject.gallery.map((image, index) => {
                  const imageUrl = image.url.startsWith("http")
                    ? image.url
                    : `${process.env.NEXT_PUBLIC_STRAPI_URL}${image.url}`;

                  return (
                    <div
                      key={index}
                      className="relative aspect-square rounded-lg overflow-hidden"
                    >
                      <Image
                        src={imageUrl}
                        alt={`Gallery image ${index + 1}`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        <section className="px-4 sm:px-6 lg:px-12 pb-12">
          <div className="max-w-4xl mx-auto text-center">
            <a
              href="/seo-cares"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#131B3E] text-white rounded-lg hover:bg-[#1a2347] transition-colors duration-200"
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
              Back to All Projects
            </a>
          </div>
        </section>

        <Footer />
      </div>
    );
  } catch (error) {
    console.error("Error fetching project:", error);
    notFound();
  }
}

function ProjectLoading() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <h2 className="text-xl font-semibold text-gray-700">
            Loading Project...
          </h2>
        </div>
      </div>
    </div>
  );
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  return (
    <Suspense fallback={<ProjectLoading />}>
      <ProjectDetailContent slug={params.slug} />
    </Suspense>
  );
}

export async function generateStaticParams() {
  try {
    const projectsResponse = await getProjects(1, 100);

    return projectsResponse.data.map((project: StrapiProject) => ({
      slug: project.slug || `project-${project.id}`,
    }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}
