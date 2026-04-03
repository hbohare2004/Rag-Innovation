"use client";

import { useState } from "react";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";



const awards = [
  { src: "/images/1.png", alt: "National Startup Award for Rag Innovations — sanitary napkin making machine India" },
  { src: "/images/2.png", alt: "Doordarshan media coverage of Rag Innovations pad making machine India" },
  { src: "/images/3.png", alt: "Dainik Bhaskar news feature — low cost sanitary machine social enterprise" },
  { src: "/images/4.png", alt: "Ministry of Health certificate of recognition — menstrual hygiene programme India" },
  { src: "/images/5.png", alt: "Social impact award ceremony — women empowerment and sanitary pad business India" },
  { src: "/images/11.jpeg", alt: "Rag Innovations event and sanitary napkin making machine recognition" },
  { src: "/images/12.jpeg", alt: "Rag Innovations team at menstrual hygiene awareness programme India" },
  { src: "/images/8.jpeg", alt: "Rag Innovations team with industry leaders — semi automatic sanitary napkin machine partners" },
  { src: "/images/10.png", alt: "Swachh Bharat media interview — sanitary napkin raw materials and machine innovation" },
  { src: "/images/13.jpeg", alt: "Rag Innovations gallery — pad making machine India community impact" },
  { src: "/images/14.jpeg", alt: "Rag Innovations gallery — vocational training sanitary pad production" },
  { src: "/images/15.jpeg", alt: "Rag Innovations gallery — low cost sanitary machine installation highlight" },
];

/** YouTube video IDs — thumbnails from img.youtube.com; click plays embed in place */
const galleryVideos: { id: string; title: string; start?: number }[] = [
  { id: "SzgbYPaqsJY", title: "YouTube — Rag Innovations sanitary napkin making machine India featured video" },
  { id: "oK9Y2wPP83M", title: "YouTube — Rag Innovations pad making machine India media coverage", start: 28 },
  { id: "-uVJcF-uNes", title: "YouTube — Rag Innovations low cost sanitary machine impact story" },
  { id: "RKwIazG6OW4", title: "YouTube — Rag Innovations sanitary napkin raw materials and programme highlight" },
  { id: "G5i750GRcik", title: "YouTube — Rag Innovations sanitary pad business India community work" },
];

const partners = [
  { src: "/images/logo-partner1.jpg", alt: "Partner organization 1" },
  { src: "/images/logo-partner2.jpg", alt: "Partner organization 2" },
  { src: "/images/logo-partner17.webp", alt: "Partner organization 3" },
  // { src: "/images/logo-partner3.png", alt: "Partner organization 3" },
  // { src: "/images/logo-partner3a.jpg", alt: "Partner organization 3a" },
  // { src: "/images/logo-partner3b.jpg", alt: "Partner organization 3b" },
  { src: "/images/logo-partner14.webp", alt: "Partner organization 14" },
  { src: "/images/logo-partner11.png", alt: "Partner organization 11" },
  { src: "/images/logo-partner13.png", alt: "Partner organization 13" },
  { src: "/images/logo-partner3c.png", alt: "Partner organization 3c" },
  { src: "/images/logo-partner16.jpg", alt: "Partner organization 16" },
  { src: "/images/logo-partner20.jpeg", alt: "Partner organization 20" },
  { src: "/images/logo-partner4.png", alt: "Partner organization 4" },
  { src: "/images/logo-partner5.png", alt: "Partner organization 5" },
  { src: "/images/logo-partner6.jpg", alt: "Partner organization 6" },
  { src: "/images/logo-partner7.png", alt: "Partner organization 7" },
  { src: "/images/logo-partner8.jpg", alt: "Partner organization 8" },
  { src: "/images/logo-partner9.webp", alt: "Partner organization 9" },
  { src: "/images/logo-partner10.png", alt: "Partner organization 10" },
  { src: "/images/logo-partner10a.jpg", alt: "Partner organization 10a" },
  
  { src: "/images/logo-partner12.jpg", alt: "Partner organization 12" },

  
  { src: "/images/logo-partner15.jpg", alt: "Partner organization 15" },
  
  { src: "/images/logo-partner18.jpeg", alt: "Partner organization 18" },
  { src: "/images/logo-partner19.jpeg", alt: "Partner organization 19" },
  
];

const projects = [
  {
    src: "/images/work-1.jpg",
    caption: "Awareness camp at a government school, Madhya Pradesh",
  },
  {
    src: "/images/work-2.jpg",
    caption: "Skill-building workshop with SHG women",
  },
  {
    src: "/images/work-3.jpg",
    caption: "Machine installation at a community unit, Bihar",
  },
  {
    src: "/images/work-4.jpg",
    caption: "Distribution drive & community feedback session",
  },
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);

  return (
    <>
      <PageHero
          title="Celebrating Impact: Awards & Project Highlights"
        subtitle="From national recognition to on-ground transformation — explore our journey of empowering communities through affordable menstrual hygiene solutions."
      />

      {/* Awards */}
      <section className="section-padding">
        <div className="container-main">
          <FadeIn>
            <SectionHeading
              kicker="Recognition"
                title="Awards & Media Coverage"
              subtitle="We are humbled by the trust and recognition we have received from government bodies, media outlets, and industry leaders."
            />
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {awards.map((award, i) => (
              <FadeIn key={award.src} delay={i * 0.08}>
                <div 
                  className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 shadow-sm cursor-pointer"
                  onClick={() => setSelectedImage(award.src)}
                >
                    <Image
                      src={award.src}
                      alt={award.alt}
                      fill
                      className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <p className="absolute bottom-0 left-0 right-0 p-4 text-white text-xs font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    {award.alt}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Videos — same box grid as awards; thumbnail until click, then embedded player */}
      <section className="section-padding">
        <div className="container-main">
          <FadeIn>
            <SectionHeading
              kicker="Watch"
              title="Videos"
              subtitle="Tap a thumbnail to play. Our work in motion — same layout as the gallery above."
            />
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {galleryVideos.map((video, i) => (
              <FadeIn key={video.id} delay={i * 0.08}>
                <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 shadow-sm">
                  {playingVideoId === video.id ? (
                    <div className="absolute inset-0 flex flex-col bg-black">
                      <iframe
                        title={video.title}
                        src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0${video.start != null ? `&start=${video.start}` : ""}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className="h-full w-full border-0"
                      />
                      <button
                        type="button"
                        className="absolute right-2 top-2 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white transition-colors hover:bg-black/80"
                        onClick={() => setPlayingVideoId(null)}
                        aria-label="Close video"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  ) : (
                    <button
                      type="button"
                      className="relative h-full w-full cursor-pointer text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                      onClick={() => setPlayingVideoId(video.id)}
                      aria-label={`Play video: ${video.title}`}
                    >
                      <Image
                        src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                        alt={video.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100" />
                      <span className="absolute inset-0 flex items-center justify-center">
                        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/95 shadow-lg transition-transform duration-300 group-hover:scale-110">
                          <svg className="ml-1 h-7 w-7 text-primary" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </span>
                      </span>
                      <p className="absolute bottom-0 left-0 right-0 p-4 text-xs font-medium text-white drop-shadow">
                        {video.title}
                      </p>
                    </button>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 bg-beige-light">
        <div className="container-main">
          <FadeIn>
            <SectionHeading
              kicker="Partnerships"
              title="Our Valued Partners"
              subtitle="We are proud to have contributed projects in association with these esteemed organisations."
            />
          </FadeIn>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-6">
            {partners.map((partner, i) => (
              <FadeIn key={partner.src} delay={i * 0.05}>
                <div className="bg-white rounded-xl p-3 flex items-center justify-center aspect-square shadow-sm hover:shadow-md transition-shadow group">
                  <Image
                    src={partner.src}
                    alt={`${partner.alt} — Rag Innovations sanitary napkin making machine India partner`}
                    width={160}
                    height={160}
                    className="object-contain w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Project Highlights */}
      <section className="section-padding">
        <div className="container-main">
          <FadeIn>
            <SectionHeading
              kicker="On the ground"
              title="Project Highlights"
              subtitle="Every number represents a life touched, a myth broken, and a step towards menstrual dignity."
            />
          </FadeIn>

          <div className="grid sm:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <FadeIn key={project.src} delay={i * 0.12}>
                <figure className="group rounded-2xl overflow-hidden shadow-sm">
                  <div className="relative aspect-video overflow-hidden bg-gray-100">
                    <Image
                      src={project.src}
                      alt={`${project.caption} — Rag Innovations pad making machine India on-ground project`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  </div>
                  <figcaption className="bg-white px-6 py-4 text-sm text-gray-700 font-medium">
                    {project.caption}
                  </figcaption>
                </figure>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready To Create Impact Together?"
        description="Whether you're a partner, NGO, or social enterprise — let's collaborate to bring affordable menstrual hygiene solutions to more communities."
        primaryLink={{ href: "/contact", label: "Contact Us" }}
        secondaryLink={{ href: "/products", label: "Browse Products" }}
      />

      {/* Image Modal for Enlarged View */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in zoom-in-95 duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full max-w-5xl h-[85vh]">
            <button 
              className="absolute -top-12 right-0 md:-right-12 md:top-0 text-white hover:text-gray-300 transition-colors bg-white/10 hover:bg-white/20 w-10 h-10 rounded-full flex items-center justify-center focus:outline-none z-50"
              onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
              aria-label="Close"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <Image
              src={selectedImage}
              alt="Enlarged gallery image — Rag Innovations awards, media, and sanitary napkin making machine India highlights"
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}
