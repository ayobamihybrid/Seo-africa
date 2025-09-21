import React from "react";
import { getProgrammeBySlug } from "@/app/lib/strapi";
import { notFound } from "next/navigation";
import ProgrammeDetailClient from "@/app/components/ProgrammeDetailClient";

interface Props {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

const ProgrammeDetail = async ({ params }: Props) => {
  const { slug } = await params;

  try {
    console.log("Server: Fetching programme with slug:", slug);
    const programme = await getProgrammeBySlug(slug);

    if (!programme) {
      console.log("Server: Programme not found for slug:", slug);
      notFound();
    }

    return <ProgrammeDetailClient programme={programme} />;
  } catch (error) {
    console.error("Server: Error fetching programme:", error);
    notFound();
  }
};

export default ProgrammeDetail;
