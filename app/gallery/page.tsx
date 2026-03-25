import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Awards, media coverage, partner logos, and project highlights from Rag Innovations — celebrating impact in menstrual hygiene and women empowerment across India.",
};

const awards = [
  { src: "/images/1.png", alt: "National Startup Award for Rag Innovations" },
  { src: "/images/2.png", alt: "Doordarshan media coverage of Rag Innovations" },
  { src: "/images/3.png", alt: "Dainik Bhaskar news feature" },
  { src: "/images/4.png", alt: "Ministry of Health certificate of recognition" },
  { src: "/images/5.png", alt: "Social impact award ceremony" },
  { src: "/images/6.png", alt: "Meeting with government officials" },
  { src: "/images/7.png", alt: "IIT Delhi innovation fest participation" },
  { src: "/images/8.jpeg", alt: "Rag Innovations team with industry leaders" },
  { src: "/images/10.png", alt: "Swachh Bharat media interview" },
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
                <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 shadow-sm">
                  <Image
                    src={award.src}
                    alt={award.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
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
                    alt={partner.alt}
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
                      alt={project.caption}
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
    </>
  );
}
