import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";
import AnimatedCounter from "@/components/AnimatedCounter";
import CTASection from "@/components/CTASection";
import { Target, Eye, Sparkles, Calendar, Users, Building2, Heart, Zap, Gauge, Shield, CircuitBoard, IndianRupee } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Rag Innovations — a DPIIT-recognised startup manufacturing affordable sanitary pad machines, empowering women through menstrual hygiene awareness and vocational training across India.",
};

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To eradicate menstrual poverty by providing affordable, high-quality sanitary napkin making machines and comprehensive support to communities across India and beyond. We believe every woman and girl deserves access to safe, hygienic menstrual products.",
    accent: "border-primary",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "A world where menstruation is stigma-free and every community has the tools to produce affordable sanitary products locally. We envision self-sustaining micro-enterprises run by women, creating both livelihoods and health impact.",
    accent: "border-cta",
  },
  {
    icon: Sparkles,
    title: "Our Values",
    description:
      "Innovation, Affordability, and Empowerment are at the core of everything we do. We design machines that are simple to operate, cost-effective to run, and produce ultra-thin pads with wings that match the quality of leading brands.",
    accent: "border-beige-dark",
  },
];

const stats = [
  { icon: Calendar, target: 15, suffix: "+", label: "Years of Impact" },
  { icon: Users, target: 200000, suffix: "+", label: "Women & Girls Benefited" },
  { icon: Building2, target: 500, suffix: "+", label: "Organizations Partnered" },
  { icon: Heart, target: 500000, suffix: "+", label: "Pads Distributed" },
];

const machineFeatures = [
  { icon: CircuitBoard, text: "Semi-automatic operation" },
  { icon: Gauge, text: "Costumizable Production Capacity" },
  { icon: Shield, text: "Ultra-thin pads with wings" },
  { icon: Zap, text: "Low power — single-phase electricity" },
  { icon: IndianRupee, text: "1/10th the cost of imported machines" },
];

const padFeatures = [
  "Wings for secure fit and leak protection",
  "Soft, breathable top sheet for comfort",
  "Super-absorbent core for all-day protection",
  "Waterproof backing to prevent leakage",
  "Individually wrapped for hygiene and convenience",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="About us"
        title="Empowering Women With Sustainable Sanitary Pad Solutions & Machines"
        subtitle="A GeM OEM recognised by Quality Council of India and DPIIT-registered startup, building affordable menstrual hygiene infrastructure for communities across the World."
      />

      {/* Mission / Vision / Values */}
      <section className="section-padding">
        <div className="container-main">
          <FadeIn>
            <div className="text-center mb-14">
              <p className="kicker">What drives us</p>
              <h2 className="text-3xl md:text-4xl font-bold text-navy">
                Mission, Vision &amp; Values
              </h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <FadeIn key={v.title} delay={i * 0.15}>
                <div
                  className={`bg-white rounded-2xl p-8 border-t-4 ${v.accent} shadow-sm card-hover h-full `}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center mb-5">
                    <v.icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-navy mb-3">
                    {v.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {v.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-beige-light">
        <div className="container-main">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 0.1}>
                <div className="text-center">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <stat.icon size={24} className="text-primary" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-navy mb-1">
                    <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                  </div>
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Machine & Pads */}
      <section className="section-padding">
        <div className="container-main">
          <FadeIn>
            <div className="text-center mb-14">
              <p className="kicker">Our technology</p>
              <h2 className="text-3xl md:text-4xl font-bold text-navy">
                The Rag Innovations Sanitary Pad Machine
              </h2>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                Designed for rural and semi-urban settings, our machines are
                built for NGOs, SHGs, social entrepreneurs, and institutions
                looking to create local menstrual hygiene enterprises.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-10">
            <FadeIn direction="left">
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm h-full">
                <h3 className="text-xl font-semibold text-navy mb-6">
                  Machine Features
                </h3>
                <div className="space-y-4">
                  {machineFeatures.map((f) => (
                    <div key={f.text} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <f.icon size={20} className="text-primary" />
                      </div>
                      <span className="text-gray-700">{f.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm h-full">
                <h3 className="text-xl font-semibold text-navy mb-6">
                  Why Our Pads Are Different
                </h3>
                <p className="text-gray-600 text-sm mb-5 leading-relaxed">
                  Our machines produce ultra-thin sanitary pads with wings that
                  rival the quality of premium brands — at a fraction of the
                  cost. Each pad is designed for comfort, protection, and
                  hygiene.
                </p>
                <ul className="space-y-3">
                  {padFeatures.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-3 text-gray-700 text-sm"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Global Impact Map */}
      <section className="py-16 bg-beige-light">
        <div className="container-main">
          <FadeIn>
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-navy">
                See Our Machine In Action
              </h2>
            </div>
          </FadeIn>
          <FadeIn>
            <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-xl bg-white">
              <img
                src="/images/map.png"
                alt="Rag Innovations global impact map"
                className="w-full h-auto object-contain"
                loading="lazy"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      <CTASection
        title="Ready To Start Your Pad-Making Venture?"
        description="Join the growing network of communities, NGOs, and entrepreneurs creating sustainable menstrual hygiene solutions with Rag Innovations."
        primaryLink={{ href: "/contact", label: "Get in Touch" }}
        secondaryLink={{ href: "/products", label: "View Products" }}
      />
    </>
  );
}
