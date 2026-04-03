import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Awards, media coverage, partner logos, and project highlights from Rag Innovations — sanitary napkin making machine India, pad making machine India field work, and menstrual hygiene impact.",
  keywords: [
    "sanitary napkin making machine India",
    "pad making machine India",
    "low cost sanitary machine",
    "Rag Innovations gallery",
  ],
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
