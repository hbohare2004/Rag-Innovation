import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Sanitary napkin making machine, pad making machine India, low cost sanitary machine, solar and vending options, plus sanitary napkin raw materials — browse Rag Innovations.",
  keywords: [
    "sanitary napkin making machine",
    "pad making machine India",
    "low cost sanitary machine",
    "sanitary napkin raw materials",
  ],
};

const products = [
  {
    image: "/images/bg_6.png",
    title: "Automatic Sanitary Napkin Machine",
    imageAlt:
      "Automatic sanitary napkin making machine for high-volume pad production in India — Rag Innovations",
    description:
      "High-speed fully automatic sanitary napkin manufacturing machine for large-scale production facilities.",
  },
  {
    image: "/images/prod-1.png",
    title: "Ultra Thin Semi-Automatic Sanitary Pad Machine",
    imageAlt:
      "Semi automatic sanitary napkin machine — ultra thin pad making machine India by Rag Innovations",
    description:
      "Our flagship low-cost machine producing ultra-thin pads with wings, ideal for community-level enterprises.",
  },
  {
    image: "/images/prod-9.png",
    title: "Maternity Pad Machine Set-up",
    imageAlt:
      "Maternity pad machine setup for hospitals and NGOs — low cost sanitary machine India",
    description:
      "Complete maternity pad manufacturing setup designed for hospitals, NGOs, and maternal health programmes.",
  },
  {
    image: "/images/prod-4.jpg",
    title: "Low Cost Sanitary Pad Machine",
    imageAlt:
      "Low cost sanitary machine for startups and SHGs — affordable sanitary pad making machine India",
    description:
      "Our most affordable sanitary pad making machine — perfect for startups, SHGs, and rural community centres.",
  },
  {
    image: "/images/prod-5.jpeg",
    title: "Solar Based Sanitary Napkin Machine",
    imageAlt:
      "Solar sanitary napkin making machine for off-grid areas — pad making machine India",
    description:
      "Solar-powered sanitary napkin machine for off-grid and remote areas with limited electricity access.",
  },
 
  {
    image: "/images/prod-6.png",
    title: "Sanitary Napkin Vending Machine",
    imageAlt:
      "Sanitary napkin vending machine for schools and offices — menstrual hygiene access India",
    description:
      "Coin and card-operated vending machines for schools, offices, and public spaces ensuring pad accessibility.",
  },
  {
    image: "/images/prod-7.png",
    title: "Sanitary Pad Incinerator Machine",
    imageAlt:
      "Sanitary pad incinerator machine for safe disposal — school and hospital hygiene India",
    description:
      "Safe, hygienic, and eco-friendly incinerator for responsible disposal of used sanitary products.",
  },
  {
    image: "/images/prod-8.jpeg",
    title: "Sanitary Napkin Raw Material Supplier",
    imageAlt:
      "Sanitary napkin raw materials supplier — top sheet, core, backsheet for pad making machine India",
    description:
      "Premium raw materials — top sheets, absorbent cores, backing, and packaging for consistent pad quality.",
  },
  // {
  //   image: "/images/prod-11.jpg",
  //   title: "Sanitary Napkin Machine",
  //   description:
  //     "Versatile sanitary napkin making machine suitable for a wide range of production capacities and budgets.",
  // },
   {
    image: "/images/prod-10.jpg",
    title: "Premium Sanitary Pads-Cottorin",
    imageAlt:
      "Premium sanitary pads Cottorin — ultra thin pads for sanitary pad business India distribution",
    description:
      "High-quality, ultra-comfort sanitary pads with superior absorption and skin-friendly protection — ensuring safe, hygienic, all-day confidence.",
  },
  {
    image: "/images/prod-12.jpeg",
    title: "Affordable Sanitary Pads-Padwala",
    imageAlt:
      "Affordable sanitary pads Padwala — low cost sanitary pads for community programmes India",
    description:
      "Cost-effective, hygienic sanitary pads designed for reliable protection and everyday comfort — ideal for wide accessibility.",
  },
];

export default function ProductsPage() {
  return (
    <>
      <PageHero
        title="Sanitary Napkin & Maternity Pad Machines"
        subtitle="Low-cost, scalable solutions for manufacturing high-quality sanitary products. Browse our range and find the right machine for your needs."
      />

      <section className="section-padding">
        <div className="container-main">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, i) => (
              <FadeIn key={product.title} delay={i * 0.08}>
                <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm card-hover h-full flex flex-col">
                  <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                    <Image
                      src={product.image}
                      alt={product.imageAlt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-base font-semibold text-navy mb-2 group-hover:text-primary transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed flex-1">
                      {product.description}
                    </p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center text-sm font-medium text-cta mt-4 hover:underline text-primary"
                    >
                      Enquire Now &rarr;
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Interested In Our Machines?"
        description="Get in touch with our team for pricing, customisation options, and installation support tailored to your requirements."
        primaryLink={{ href: "/contact", label: "Enquire About a Product" }}
        secondaryLink={{ href: "/pricing", label: "View Pricing" }}
      />
    </>
  );
}
