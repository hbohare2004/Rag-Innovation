import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";
import CTASection from "@/components/CTASection";
import {
  Cog,
  Package,
  Wrench,
  Heart,
  GraduationCap,
  Megaphone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "End-to-end solutions for menstrual hygiene enterprises — sanitary napkin making machine support, sanitary napkin raw materials, maintenance, training, and awareness by Rag Innovations in India.",
  keywords: [
    "sanitary napkin making machine",
    "sanitary napkin raw materials",
    "pad making machine India",
    "low cost sanitary machine",
  ],
};

const services = [
  {
    icon: Cog,
    title: "Sanitary Napkin & Maternity Pad Machines",
    description:
      "India's first low-cost, semi-automatic sanitary napkin and maternity pad making machines. Built for NGOs, SHGs, schools, and social enterprises — producing up to 1,200 pads per hour on single-phase electricity at 1/10th the cost of imported machines.",
    features: [
      "Semi-automatic, easy to operate",
      "Freedom to use & customize",
      "Single-phase electricity",
      "Installation & basic training included",
    ],
  },
  {
    icon: Package,
    title: "Sanitary Napkin Making Raw Materials",
    description:
      "Reliable supply of high-quality raw materials to keep your production running smoothly. We source the best materials for ultra-thin pads with wings, ensuring consistent quality and competitive pricing for all order sizes.",
    features: [
      "Top sheets/ Absorbent core/ Backsheet ",
      "Consistent supply chain",
      "Competitive bulk pricing",
      "Quality-tested materials",
    ],
  },
  {
    icon: Wrench,
    title: "Maintenance & Upgrade of Existing Units",
    description:
      "Already running a pad-making unit? We provide expert maintenance, troubleshooting, and machine upgrades to keep your operations efficient and up to date with the latest manufacturing standards.",
    features: [
      "On-site troubleshooting",
      "Preventive maintenance plans",
      "Machine upgrades & retrofits",
      "Remote technical support",
    ],
  },
  {
    icon: Heart,
    title: "Low-Cost Sanitary Pads",
    description:
      "Ultra-thin sanitary pads with wings at affordable prices. Perfect for distribution programmes, school health initiatives, and community outreach — making menstrual hygiene accessible to every woman and girl.",
    features: [
      "Ultra-thin with wings",
      "Individually wrapped",
      "Bulk orders available",
      "Custom branding options",
    ],
  },
  {
    icon: GraduationCap,
    title: "Hands-on Vocational Training",
    description:
      "Comprehensive training programmes aligned with Skill India and Make in India initiatives. From machine operation and quality control to business management — empowering women with skills for sustainable livelihoods.",
    features: [
      "Machine operation training",
      "Quality control protocols",
      "Business & marketing skills",
      "Skill India / Make in India certified",
    ],
  },
  {
    icon: Megaphone,
    title: "Awareness Campaigns",
    description:
      "Breaking menstrual taboos and spreading hygiene awareness in schools, colleges, and communities across India. Our campaigns reach grassroots level, creating lasting behavioural change and normalising menstrual health conversations.",
    features: [
      "School & college programmes",
      "Community awareness drives",
      "Myth-busting workshops",
      "Health & hygiene education",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="End-to-End Solutions For Menstrual Hygiene Management"
        subtitle="From machines and raw materials to training and awareness programmes, we help you set up and scale sustainable sanitary napkin and maternity pad units."
      />

      <section className="section-padding">
        <div className="container-main">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <FadeIn key={service.title} delay={i * 0.1}>
                <div className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm card-hover h-full flex flex-col">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                    <service.icon size={26} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-navy mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5 flex-1">
                    {service.description}
                  </p>
                  <ul className="space-y-2 border-t border-gray-100 pt-5">
                    {service.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-2 text-sm text-gray-700"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Need a Tailored Solution?"
        description="Every project is unique. Tell us about your goals and we'll put together a customised plan that fits your budget and community needs."
        primaryLink={{ href: "/contact", label: "Contact Us" }}
        secondaryLink={{ href: "/pricing", label: "View Pricing" }}
      />
    </>
  );
}
