import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";
import AnimatedCounter from "@/components/AnimatedCounter";
import ProductCard from "@/components/ProductCard";
import PackageCard from "@/components/PackageCard";
import ComparisonTable from "@/components/ComparisonTable";
import MhmEnquiryForm from "@/components/MhmEnquiryForm";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  Building2,
  Pill,
  Trash2,
  GraduationCap,
  CheckCircle2,
  School,
  Landmark,
  Building,
  Home,
  Users,
  ShieldCheck,
  Quote,
  Package,
  ArrowRight,
  ClipboardList,
} from "lucide-react";

import {
  products,
  specifications,
  packages as pkgs,
  comparisonRows,
  addOns,
  impactStats,
  mhmTestimonials,
} from "./mhm-data";

/* ── SEO metadata ─────────────────────────────── */

export const metadata: Metadata = {
  title: "MHM Compliance for Schools India",
  description:
    "Achieve MHM compliance in your school — CBSE Circular Acad-12/2026. Vending machines, incinerators, MHM corners & training by Rag Innovations.",
  keywords: [
    "MHM Compliance",
    "Menstrual Hygiene Management Compliance",
    "MHM Compliance India",
    "School MHM Solutions",
    "Menstrual Hygiene Solutions for Schools",
    "Sanitary Napkin Disposal Machine",
    "MHM Guidelines for Schools India",
    "CBSE MHM Compliance 2026",
    "CBSE Circular Acad-12/2026",
    "MHM corner setup",
    "school sanitation India",
    "biodegradable sanitary napkins",
    "sanitary napkin vending machine",
    "menstrual health in schools",
    "adolescent girls hygiene",
  ],
  alternates: {
    canonical: "https://www.raginnovations.com/school-mhm-compliance-solutions",
  },
  openGraph: {
    title: "MHM Compliance for Schools India | Rag Innovations",
    description:
      "Achieve MHM compliance in your school — CBSE Circular Acad-12/2026. Vending machines, incinerators, MHM corners & training by Rag Innovations.",
    url: "https://www.raginnovations.com/school-mhm-compliance-solutions",
    type: "website",
    images: [
      {
        url: "/images/MHM_corner.jpeg",
        alt: "MHM compliance corner setup in a school — Rag Innovations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CBSE MHM Compliance Solutions for Schools | Rag Innovations",
    description:
      "Achieve full MHM compliance with CBSE Circular Acad-12/2026. Expert solutions for infrastructure, waste management, and student awareness.",
    images: ["/images/MHM_corner.jpeg"],
  },
};

/* ── SEO-optimised FAQs ───────────────────────── */

const complianceFaqs: { question: string; answer: string }[] = [
  {
    question: "What is MHM compliance for schools in India?",
    answer:
      "MHM compliance refers to the mandatory implementation of Menstrual Hygiene Management guidelines in schools as directed by the Hon'ble Supreme Court and enforced through CBSE Circular Acad-12/2026. It covers five areas — infrastructure, availability of biodegradable sanitary napkins and MHM corners, waste management, awareness training, and readiness for periodic inspections.",
  },
  {
    question:
      "Which CBSE circular addresses MHM compliance in schools?",
    answer:
      "CBSE Circular No. Acad-12/2026 dated 18.03.2026 directs all affiliated schools to comply with the Hon'ble Supreme Court's directions regarding Menstrual Hygiene Management (MHM) in Schools. The circular is traceable to the Court's judgement dated 20th January 2026.",
  },
  {
    question:
      "What does the Supreme Court's judgement recognise about menstrual health?",
    answer:
      "The Court recognised the right to dignified menstrual health as an integral facet of Article 21 of the Constitution. It emphasised that access to Menstrual Hygiene Management (MHM) is essential for ensuring the right to education and equality of opportunity for adolescent girls across India.",
  },
  {
    question:
      "What are the 5 directions for MHM compliance under CBSE guidelines?",
    answer:
      "1. Infrastructure — adequate, safe and hygienic separate toilet and washing facilities for girls. 2. Availability — biodegradable sanitary napkins and MHM corners. 3. Waste Management — proper disposal of sanitary waste using incinerators. 4. Awareness — menstrual health training and gender-sensitive education per NCERT/SCERT guidelines. 5. Periodic inspections — cooperation with District Education Officers.",
  },
  {
    question: "How much does MHM compliance setup cost for a school?",
    answer:
      "The cost varies based on the package selected — Awareness, Compliance, or the full Sustainable Model — and depends on the school's student strength, existing infrastructure, and specific requirements. Rag Innovations provides customised proposals within 24 hours of enquiry.",
  },
  {
    question:
      "What equipment is needed for school MHM compliance?",
    answer:
      "Schools typically need a sanitary napkin vending machine for easy pad access, a sanitary pad incinerator for safe waste disposal, and a designated MHM corner in girls' washrooms. Schools opting for the Sustainable Model can also install an on-campus sanitary pad making machine.",
  },
  {
    question:
      "When is the deadline for CBSE MHM compliance reporting?",
    answer:
      "Schools may submit the compliance report month-wise — latest by 31st March 2026 and 30th April 2026 respectively — via the official CBSE google form link provided in Circular Acad-12/2026.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: complianceFaqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

/* ── CBSE directions (verbatim from Circular Acad-12/2026) ─ */

const cbseDirections = [
  {
    icon: Building2,
    title: "Infrastructure",
    description:
      "Schools shall ensure the availability of adequate, safe and hygienic separate toilet and washing facilities for girls to maintain privacy and dignity.",
  },
  {
    icon: Package,
    title: "Availability",
    description:
      "Provision of high-quality biodegradable sanitary napkins and the establishment of dedicated MHM corners for girls to ensure uninterrupted access.",
  },
  {
    icon: Trash2,
    title: "Waste Management",
    description:
      "Implementation of scientific and hygienic methods for the proper disposal of sanitary waste, including the use of incinerators and safe collection systems.",
  },
  {
    icon: GraduationCap,
    title: "Awareness",
    description:
      "Conducting regular menstrual health training and gender-sensitive education sessions as per NCERT/SCERT guidelines to foster a supportive school environment.",
  },
  {
    icon: ClipboardList,
    title: "Periodic inspections",
    description:
      "Schools shall cooperate with periodic inspections by District Education Officers to monitor implementation of the above measures.",
  },
];

const beneficiaries = [
  { icon: School, text: "CBSE Schools" },
  { icon: Landmark, text: "Navodaya Schools" },
  { icon: Building, text: "Government Schools" },
  { icon: Home, text: "Residential Schools" },
  { icon: Users, text: "Trusts & NGOs" },
];

const processSteps = [
  { step: "Assessment", desc: "Infrastructure & readiness audit" },
  { step: "Planning", desc: "Custom compliance roadmap" },
  { step: "Setup", desc: "Equipment & MHM corner install" },
  { step: "Training", desc: "Staff & student orientation" },
  { step: "Compliance", desc: "Documentation & reporting" },
];

/* ── Page ──────────────────────────────────── */

export default function SchoolMhmComplianceSolutionsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ═══ 1 · ENHANCED HERO ═══════════════════ */}
      <section className="relative min-h-[75vh] flex items-center overflow-hidden">
        <Image
          src="/images/bg_3.jpeg"
          alt="MHM compliance solutions for schools in India — vending machines, incinerators, and MHM corners by Rag Innovations"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />

        <div className="container-main relative z-10 py-20 text-center">
          <FadeIn>
            <span className="inline-block bg-white/15 backdrop-blur-sm text-white text-xs font-semibold px-5 py-2 rounded-full mb-6 uppercase tracking-wider border border-white/20">
              CBSE Circular Acad-12/2026 · MHM Compliance for Schools
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-4xl mx-auto text-balance">
              MHM Compliance Solutions for Schools in India
            </h1>
            <p className="mt-5 text-gray-200 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Achieve complete MHM compliance for your school under CBSE Circular
              Acad-12/2026. We provide end-to-end menstrual hygiene management
              solutions — sanitary napkin vending machines, incinerators, MHM
              corner setup, awareness training, and compliance documentation —
              so your school meets every Supreme Court-mandated direction.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <a
                href="#packages"
                className="bg-primary btn-cta text-base px-8 py-4 min-h-11 inline-flex items-center justify-center"
              >
                View Packages
              </a>
              <a
                href="#enquiry"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-white/40 text-white font-semibold text-base transition-all duration-300 hover:bg-white/10 hover:border-white/60 min-h-11"
              >
                Request Proposal
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══ 2 · POLICY CONTEXT ══════════════════ */}
      <section className="section-padding bg-beige-light">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <FadeIn direction="left">
              <div>
                <p className="kicker">CBSE Circular Acad-12/2026</p>
                <h2 className="text-3xl md:text-4xl font-bold text-navy">
                  Why MHM Compliance Is Now Mandatory for Schools
                </h2>
                <p className="mt-5 text-gray-700 leading-relaxed">
                  The Ministry of Education has forwarded a copy of the Hon&apos;ble
                  Supreme Court&apos;s judgement dated 20th January 2026, wherein
                  the Court has recognized the{" "}
                  <strong>
                    right to dignified menstrual health as an integral facet of
                    Article 21
                  </strong>{" "}
                  of the Constitution, emphasizing that access to{" "}
                  <strong>Menstrual Hygiene Management (MHM)</strong> is essential
                  for ensuring the right to education and equality of opportunity
                  for adolescent girls.
                </p>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  In the said judgement, the Hon&apos;ble Court has issued a{" "}
                  <strong>continuing mandamus</strong> for the{" "}
                  <strong>mandatory implementation</strong> of the following
                  directions and guidelines in all schools across States/UTs. In
                  this regard, <strong>all CBSE affiliated schools</strong> are
                  requested to ensure compliance with the following directions.
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                  <ShieldCheck size={28} className="text-primary mb-3" />
                  <h3 className="font-bold text-navy text-lg">Article 21</h3>
                  <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                    Right to dignified menstrual health as an integral facet of
                    Article 21 — access to MHM essential for the right to
                    education and equality of opportunity for adolescent girls.
                  </p>
                </div>
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                  <School size={28} className="text-primary mb-3" />
                  <h3 className="font-bold text-navy text-lg">
                    CBSE affiliated schools
                  </h3>
                  <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                    Requested to ensure compliance with the directions in
                    Circular No. Acad-12/2026 (dated 18.03.2026).
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══ 3 · SCHOOL READINESS FRAMEWORK ══════ */}
      <section className="section-padding">
        <div className="container-main">
          <FadeIn>
            <SectionHeading
              kicker="Directions (CBSE Circular Acad-12/2026)"
              title="5 Key Areas of MHM Compliance Under CBSE Guidelines"
            />
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cbseDirections.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm card-hover h-full">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon size={22} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-navy mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 4 · CBSE COMPLIANCE REPORTING (circular) ═ */}
        {/* <section id="solutions" className="section-padding bg-beige-light">
          <div className="container-main max-w-4xl">
            <FadeIn>
              <p className="kicker">Compliance reporting</p>
              <h2 className="text-2xl md:text-3xl font-bold text-navy">
                Month-wise compliance report (CBSE)
              </h2>
              <p className="mt-5 text-gray-700 leading-relaxed text-sm md:text-base">
                You are requested to ensure compliance with the above-mentioned
                directions. Further, schools may submit the compliance report
                separately Month wise latest by 31st March, 2026 and 30th April,
                2026 respectively in the google link:
              </p>
              <a
                href="https://forms.gle/BD1F3c1N8GFrMarGA"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex text-primary font-semibold text-sm hover:underline break-all"
              >
                https://forms.gle/BD1F3c1N8GFrMarGA
              </a>
            </FadeIn>
          </div>
        </section> */}

      {/* ═══ 5 · PRODUCT SHOWCASE ════════════════ */}
      <section id="products" className="section-padding">
        <div className="container-main">
          <FadeIn>
            <SectionHeading
              kicker="MHM compliance equipment"
              title="MHM Compliance Equipment for Schools"
              subtitle="Sanitary napkin vending machines, incinerators, and MHM corner solutions — designed to meet CBSE Circular Acad-12/2026 requirements for menstrual hygiene management in schools."
            />
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, i) => (
              <FadeIn key={product.title} delay={i * 0.1}>
                <ProductCard {...product} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 6 · SPECIFICATIONS ══════════════════ */}
      <section className="section-padding bg-beige-light">
        <div className="container-main">
          <FadeIn>
            <SectionHeading
              kicker="Technical details"
              title="Sanitary Napkin Machine Specifications"
              subtitle="Quick-reference specifications for sanitary napkin vending machines, incinerators, and pad making machines to help school procurement teams evaluate requirements."
            />
          </FadeIn>
          <FadeIn>
            <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
              <table className="w-full border-collapse min-w-[580px]">
                <thead>
                  <tr className="bg-navy text-white">
                    <th className="text-left py-4 px-5 text-sm font-semibold">
                      Specification
                    </th>
                    <th className="text-center py-4 px-5 text-sm font-semibold">
                      Pad Machine
                    </th>
                    <th className="text-center py-4 px-5 text-sm font-semibold">
                      Vending Machine
                    </th>
                    <th className="text-center py-4 px-5 text-sm font-semibold">
                      Incinerator
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {specifications.map((row, i) => (
                    <tr
                      key={row.label}
                      className={`${
                        i % 2 === 0 ? "bg-white" : "bg-gray-50"
                      } border-t border-gray-100`}
                    >
                      <td className="py-3.5 px-5 text-sm font-medium text-gray-700">
                        {row.label}
                      </td>
                      <td className="py-3.5 px-5 text-center text-sm text-gray-600">
                        {row.machine}
                      </td>
                      <td className="py-3.5 px-5 text-center text-sm text-gray-600">
                        {row.vending}
                      </td>
                      <td className="py-3.5 px-5 text-center text-sm text-gray-600">
                        {row.incinerator}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══ 7 · PACKAGE PRICING ═════════════════ */}
      <section id="packages" className="section-padding">
        <div className="container-main">
          <FadeIn>
            <SectionHeading
              kicker="MHM compliance packages"
              title="School MHM Compliance Packages"
              subtitle="Choose from structured menstrual hygiene management solutions — aligned with CBSE directions on infrastructure, sanitary napkin availability, waste management, and awareness training."
            />
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {pkgs.map((pkg, i) => (
              <FadeIn key={pkg.id} delay={i * 0.12}>
                <PackageCard
                  name={pkg.name}
                  tagline={pkg.tagline}
                  price={pkg.price}
                  badge={pkg.badge}
                  highlighted={pkg.highlighted}
                  colorClass={pkg.colorClass}
                  badgeClass={pkg.badgeClass}
                  features={pkg.features}
                  ctaHref="#enquiry"
                  ctaLabel={
                    pkg.highlighted
                      ? "Request This Package"
                      : "Request This Package"
                  }
                />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 8 · COMPARISON TABLE ════════════════ */}
      <section className="section-padding bg-beige-light">
        <div className="container-main">
          <FadeIn>
            <SectionHeading
              kicker="Side-by-side"
              title="Compare MHM Compliance Packages"
              subtitle="See exactly what each menstrual hygiene management tier includes so you can make an informed decision for your school."
            />
          </FadeIn>
          <FadeIn>
            <ComparisonTable rows={comparisonRows} />
          </FadeIn>
          <FadeIn>
            <div className="text-center mt-8">
              <a href="#enquiry" className="bg-primary btn-cta inline-flex items-center gap-2">
                Request a Custom Proposal <ArrowRight size={16} />
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══ 9 · OPTIONAL ADD-ONS ════════════════ */}
      <section className="section-padding">
        <div className="container-main">
          <FadeIn>
            <SectionHeading
              kicker="Optional"
              title="Optional MHM Infrastructure Add-Ons"
              subtitle="Additional menstrual hygiene solutions that complement any MHM compliance package — available separately based on your school’s requirements."
            />
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {addOns.map((addon, i) => (
              <FadeIn key={addon.title} delay={i * 0.1}>
                <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm card-hover h-full flex flex-col">
                  <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                    <Image
                      src={addon.image}
                      alt={addon.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-6">
                    <span className="inline-block bg-amber-50 text-amber-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                      Optional Add-on
                    </span>
                    <h3 className="text-lg font-semibold text-navy mb-2">
                      {addon.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {addon.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 10 · IN-SCHOOL PRODUCTION + WHO WE SERVE ═ */}
      <section className="section-padding bg-beige-light">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-8">
            <FadeIn direction="left">
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm h-full">
                <p className="kicker">Differentiator</p>
                <h2 className="text-2xl md:text-3xl font-bold text-navy">
                  In-School Sanitary Napkin Production for MHM Compliance
                </h2>
                <p className="mt-4 text-gray-700 leading-relaxed text-sm">
                  This model creates immediate product access while building
                  self-reliance and livelihood pathways within the school
                  community.
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    "Continuous, uninterrupted availability",
                    "Cost-effective long-term supply",
                    "Vocational skill development",
                    "Self-sustaining micro-economy",
                  ].map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-gray-700 text-sm"
                    >
                      <CheckCircle2
                        size={16}
                        className="text-primary shrink-0 mt-0.5"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm h-full">
                <p className="kicker">Who can benefit</p>
                <h2 className="text-2xl md:text-3xl font-bold text-navy">
                  Schools & Institutions We Help Achieve MHM Compliance
                </h2>
                <div className="mt-6 grid sm:grid-cols-2 gap-3">
                  {beneficiaries.map((item) => (
                    <div
                      key={item.text}
                      className="flex items-center gap-3 rounded-xl bg-primary/5 px-4 py-3 transition-all duration-300 hover:bg-primary/10"
                    >
                      <item.icon
                        size={18}
                        className="text-primary shrink-0"
                      />
                      <span className="text-gray-700 text-sm">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══ 11 · IMPLEMENTATION PROCESS ═════════ */}
      <section className="section-padding">
        <div className="container-main">
          <FadeIn>
            <SectionHeading
              kicker="MHM implementation process"
              title="5-Step MHM Compliance Implementation Process"
              subtitle="A clear, structured rollout from initial assessment to full MHM compliance — tailored for schools across India."
            />
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 lg:gap-6">
            {processSteps.map((s, i) => (
              <FadeIn key={s.step} delay={i * 0.08}>
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-center h-full card-hover">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-bold text-sm">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="text-navy font-semibold">{s.step}</h3>
                  <p className="text-xs text-gray-500 mt-1">{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 12 · IMPACT & TRUST ═════════════════ */}
      <section className="relative py-20 md:py-28 bg-navy overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 impact-bg-pattern" />
        </div>
        <div className="container-main relative">
          <FadeIn>
            <SectionHeading
              kicker="Proven impact"
              title="Trusted by 500+ Schools & Organisations for MHM Solutions"
              light
            />
          </FadeIn>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {impactStats.map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 0.12}>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    <AnimatedCounter
                      target={stat.value}
                      suffix={stat.suffix}
                    />
                  </div>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-3 gap-6">
            {mhmTestimonials.map((t, i) => (
              <FadeIn key={t.name} delay={i * 0.1}>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 h-full flex flex-col">
                  <Quote size={24} className="text-primary/50 mb-3" />
                  <blockquote className="text-gray-300 text-sm leading-relaxed italic flex-1">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <p className="font-semibold text-white text-sm">
                      {t.name}
                    </p>
                    <p className="text-xs text-gray-400">{t.role}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 13 · ENQUIRY FORM ═══════════════════ */}
      <section id="enquiry" className="section-padding bg-beige-light">
        <div className="container-main">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <FadeIn direction="left">
                <p className="kicker">Get started</p>
                <h2 className="text-2xl md:text-3xl font-bold text-navy">
                  Request Your MHM Compliance Proposal
                </h2>
                <p className="mt-4 text-gray-600 leading-relaxed text-sm">
                  Fill in your school&apos;s details and we&apos;ll prepare a
                  customised compliance proposal within 24 hours.
                </p>

                <div className="mt-8 space-y-4">
                  {[
                    "Customised pricing based on student strength",
                    "Implementation timeline & milestones",
                    "Machine & material recommendations",
                    "Compliance documentation checklist",
                  ].map((point) => (
                    <div
                      key={point}
                      className="flex items-center gap-3 text-sm text-gray-700"
                    >
                      <CheckCircle2
                        size={16}
                        className="text-primary shrink-0"
                      />
                      {point}
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-5 bg-white rounded-xl border border-gray-100 shadow-sm">
                  <p className="font-semibold text-navy text-sm">
                    Prefer to talk directly?
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    Call us at{" "}
                    <a
                      href="tel:+919425128596"
                      className="text-primary font-medium hover:underline"
                    >
                      +91 94251 28596
                    </a>
                  </p>
                </div>
              </FadeIn>
            </div>

            <div className="lg:col-span-3">
              <FadeIn direction="right">
                <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                  <h3 className="text-xl font-bold text-navy mb-2">
                    School MHM Compliance Enquiry
                  </h3>
                  <p className="text-gray-500 text-sm mb-6">
                    We&apos;ll respond via email and WhatsApp.
                  </p>
                  <MhmEnquiryForm />
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 14 · FAQ ════════════════════════════ */}
      <section className="section-padding">
        <div className="container-main">
          <FadeIn>
            <SectionHeading
              kicker="MHM compliance FAQ"
              title="MHM Compliance — Frequently Asked Questions"
              subtitle={
                <>
                  Have a question not listed here?{" "}
                  <Link
                    href="/contact"
                    className="text-primary font-medium hover:underline"
                  >
                    Get in touch
                  </Link>
                  .
                </>
              }
            />
          </FadeIn>
          <div className="max-w-4xl mx-auto space-y-4">
            {complianceFaqs.map((faq, i) => (
              <FadeIn key={faq.question} delay={i * 0.06}>
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                  <h3 className="text-lg font-semibold text-navy">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 mt-2 leading-relaxed text-sm">
                    {faq.answer}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 15 · FINAL CTA ══════════════════════ */}
      <CTASection
        kicker="Start your MHM compliance journey"
        title="Start Your School’s MHM Compliance Journey Today"
        description="Don’t wait for the next inspection. Request a customised MHM compliance proposal — covering infrastructure, sanitary napkin vending, waste disposal, awareness training, and full CBSE Circular Acad-12/2026 documentation support."
        primaryLink={{ href: "#enquiry", label: "Get Your Free Proposal" }}
        secondaryLink={{ href: "/contact", label: "Book a Discussion" }}
      />

      {/* ═══ 16 · WHATSAPP FLOATING BUTTON ═══════ */}
      <WhatsAppButton />
    </>
  );
}
