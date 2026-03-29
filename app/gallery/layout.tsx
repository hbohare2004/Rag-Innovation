import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Awards, media coverage, partner logos, and project highlights from Rag Innovations — celebrating impact in menstrual hygiene and women empowerment across India.",
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
