import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";
import CTASection from "@/components/CTASection";
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
  ShieldCheck,
  Globe,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "School MHM Compliance Solutions | Sanitary Pad Machine India | Rag Innovations",
  description:
    "Rag Innovations provides menstrual hygiene awareness solutions in India with an affordable sanitary pad machine, school compliance systems, and sanitary napkin manufacturing units.",
};

const requirements = [
  {
    icon: Building2,
    title: "Infrastructure",
    description:
      "Advisory for safe, private, and hygienic sanitation readiness aligned to school compliance needs.",
  },
  {
    icon: Pill,
    title: "Sanitary Napkin Access",
    description:
      "Reliable access planning and in-school availability mechanisms for girls across grade levels.",
  },
  {
    icon: Trash2,
    title: "Safe Disposal",
    description:
      "Structured disposal pathways and practical systems for responsible menstrual waste handling.",
  },
  {
    icon: GraduationCap,
    title: "Awareness & Training",
    description:
      "Age-appropriate orientation sessions for students and sensitisation support for staff.",
  },
];

const supportPoints = [
  "MHM Corner Setup",
  "Awareness Programs",
  "Disposal Systems",
  "Infrastructure Advisory",
  "Compliance Documentation",
];

const beneficiaries = [
  { icon: School, text: "CBSE Schools" },
  { icon: Landmark, text: "Navodaya Schools" },
  { icon: Building, text: "Government Schools" },
  { icon: Home, text: "Residential Schools" },
  { icon: Users, text: "Trusts" },
];

const experienceStats = [
  { icon: ShieldCheck, value: "300+", label: "Systems installed" },
  { icon: Globe, value: "Nationwide", label: "Programs delivered" },
  { icon: School, value: "Navodaya", label: "Institutional experience" },
];

const processSteps = [
  "Assessment",
  "Setup",
  "Training",
  "Implementation",
  "Compliance Support",
];

const faqs = [
  {
    question: "How quickly can schools begin implementation?",
    answer:
      "Most schools can begin with a structured plan and on-ground setup within 7-15 days, depending on readiness and administrative approvals.",
  },
  {
    question: "Does support include documentation for compliance reporting?",
    answer:
      "Yes. The implementation model includes practical documentation support so schools can maintain records in an organised and auditable format.",
  },
  {
    question: "Can existing school infrastructure be used?",
    answer:
      "Yes. Existing facilities are assessed first, and recommendations are designed to optimise available space and systems before additional setup.",
  },
  {
    question: "Who should participate in the awareness sessions?",
    answer:
      "Sessions are typically organised for students, key teaching staff, and relevant support teams to ensure consistent institutional understanding.",
  },
  {
    question: "What is menstrual hygiene awareness in India?",
    answer:
      "Menstrual hygiene awareness in India is a critical movement aimed at breaking taboos, educating communities, and ensuring that every girl and woman has access to safe sanitary products and proper disposal methods.",
  },
  {
    question: "What is a sanitary pad making machine?",
    answer:
      "A sanitary pad making machine is specialized equipment designed to produce high-quality sanitary napkins locally. We offer both semi-automatic and fully automatic options, ensuring schools and communities can maintain an uninterrupted supply.",
  },
  {
    question: "How can schools set up a sanitary napkin manufacturing unit?",
    answer:
      "Schools can partner with organizations like Rag Innovations to establish a sanitary napkin manufacturing unit on campus. We handle the assessment, machine installation, material supply chain, and training for the staff or local women operating it.",
  },
  {
    question: "Are low cost sanitary napkin machines available in India?",
    answer:
      "Yes, we provide the best low cost sanitary napkin machine options that are highly efficient and easy to operate. These are ideal for schools, NGOs, and rural programs focused on affordable menstrual hygiene management.",
  },
];

export default function SchoolMhmComplianceSolutionsPage() {
  return (
    <>
      <PageHero
        kicker="MHM Compliance Support"
        title="Supporting School MHM Compliance Across India"
        subtitle="Delivering menstrual hygiene awareness in India with an affordable sanitary pad machine and school-ready compliance solutions."
      />

      {/* <section className="section-padding">
        <div className="container-main">
          <FadeIn>
            <div className="bg-white rounded-2xl p-8 md:p-10 border border-gray-100 shadow-sm">
              <p className="kicker">Trust badge</p>
              <p className="text-navy font-semibold text-lg">
                Govt-aligned implementation support
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Link href="/contact" className="btn-cta text-sm px-7 py-3 bg-primary">
                  Request Implementation Support
                </Link>
                <Link href="/contact" className="btn-outline text-sm px-7 py-3">
                  Book a Consultation
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section> */}

      <section className="section-padding bg-beige-light">
        <div className="container-main">
          <FadeIn>
            <div className="max-w-4xl">
              <p className="kicker">Policy context</p>
              <h2 className="text-3xl md:text-4xl font-bold text-navy">
                Supreme Court Mandate &amp; CBSE 2026 Compliance
              </h2>
              <p className="mt-5 text-gray-700 leading-relaxed">
                Menstrual hygiene has been recognized as a fundamental right
                linked to dignity, health, and equality under Article 21.
                As government initiatives actively promote menstrual hygiene awareness in India, 
                achieving CBSE 2026 MHM compliance has become a central focus. Schools are expected to 
                create safe and inclusive environments through reliable sanitation readiness, 
                access to sanitary napkins, awareness-oriented interventions, and proper 
                disposal systems. Implementation readiness and compliance reporting are
                critical for institutions to demonstrate policy-aligned action.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main">
          <FadeIn>
            <div className="text-center mb-12">
              <p className="kicker">Compliance requirements</p>
              <h2 className="text-3xl md:text-4xl font-bold text-navy">
                School Readiness Framework
              </h2>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {requirements.map((item, i) => (
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

      <section className="section-padding bg-beige-light">
        <div className="container-main">
          <FadeIn>
            <div className="max-w-4xl">
              <p className="kicker">Our solution</p>
              <h2 className="text-3xl md:text-4xl font-bold text-navy">
                End-to-End MHM Compliance Support
              </h2>
              <p className="mt-5 text-gray-700 leading-relaxed">
                Our comprehensive support model features an affordable sanitary pad machine and a reliable sanitary pad making machine India relies on. We assist institutions in setting up a complete sanitary napkin manufacturing unit, alongside scalable low cost sanitary napkin machine systems designed specifically for Indian schools and rural environments.
              </p>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-4 mt-8">
            {supportPoints.map((point, i) => (
              <FadeIn key={point} delay={i * 0.08}>
                <div className="flex items-center gap-3 bg-white rounded-xl p-4 border border-gray-100 shadow-sm card-hover">
                  <CheckCircle2 size={20} className="text-primary shrink-0" />
                  <span className="text-gray-700">{point}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-8">
            <FadeIn direction="left">
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm h-full">
                <p className="kicker">Differentiator</p>
                <h2 className="text-2xl md:text-3xl font-bold text-navy">
                  In-School Sanitary Napkin Production Unit
                </h2>
                <p className="mt-4 text-gray-700 leading-relaxed text-sm">
                  This model creates immediate product access while driving forward rural women livelihood India initiatives. By operating as a leading women empowerment NGO India can trust, our solutions build self-sustaining micro-economies within communities.
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    "Continuous availability",
                    "Cost-effective",
                    "Self-reliance",
                    "Skill development",
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-3 text-gray-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
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
                  Institutions We Support
                </h2>
                <div className="mt-6 grid sm:grid-cols-2 gap-3">
                  {beneficiaries.map((item) => (
                    <div
                      key={item.text}
                      className="flex items-center gap-3 rounded-xl bg-primary/5 px-4 py-3 transition-all duration-300 hover:bg-primary/10"
                    >
                      <item.icon size={18} className="text-primary shrink-0" />
                      <span className="text-gray-700 text-sm">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            <FadeIn direction="left">
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm card-hover h-full">
                <p className="kicker">Trusted partner</p>
                <h2 className="text-2xl md:text-3xl font-bold text-navy">
                  Trusted Implementation Partner for Schools
                </h2>
                <p className="mt-5 text-gray-700 leading-relaxed">
                  Rag Innovations has actively worked with leading educational
                  institutions including Navodaya Vidyalaya, Sarvodaya Kanya
                  Vidyalaya (SKV), and various government schools across India.
                </p>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  Our on-ground experience enables us to understand real
                  infrastructure challenges and deliver practical,
                  implementation-ready menstrual hygiene solutions tailored for
                  school environments.
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div className="bg-beige-light rounded-2xl p-8 border border-gray-100 shadow-sm h-full">
                <h3 className="text-xl font-semibold text-navy">
                  Why schools trust our implementation support
                </h3>
                <div className="mt-6 space-y-3">
                  {[
                    "Worked with Government Schools",
                    "Field Implementation Experience",
                    "School-focused Solutions",
                  ].map((point) => (
                    <div
                      key={point}
                      className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 border border-gray-100 shadow-sm card-hover"
                    >
                      <CheckCircle2 size={18} className="text-primary shrink-0" />
                      <span className="text-gray-700 text-sm">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-16 bg-beige-light">
        <div className="container-main">
          <FadeIn>
            <div className="text-center mb-10">
              <p className="kicker">Experience</p>
              <h2 className="text-3xl md:text-4xl font-bold text-navy">
                Proven Implementation Outcomes
              </h2>
              <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
                Rag Innovations is actively contributing to menstrual hygiene awareness in India, providing reliable maternity pad machine infrastructure and compliant solutions mapped directly to on-ground impact.
              </p>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-6">
            {experienceStats.map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm text-center card-hover">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <stat.icon size={22} className="text-primary" />
                  </div>
                  <p className="text-2xl font-bold text-navy">{stat.value}</p>
                  <p className="text-sm text-gray-600 mt-1">{stat.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main">
          <FadeIn>
            <div className="text-center mb-10">
              <p className="kicker">Implementation process</p>
              <h2 className="text-3xl md:text-4xl font-bold text-navy">
                Structured Rollout for Schools
              </h2>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-5 gap-4">
            {processSteps.map((step, i) => (
              <FadeIn key={step} delay={i * 0.08}>
                <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm text-center h-full card-hover">
                  <p className="text-primary font-bold text-sm">Step {i + 1}</p>
                  <p className="text-navy font-medium mt-1">{step}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-beige-light">
        <div className="container-main">
          <FadeIn>
            <div className="text-center mb-10">
              <p className="kicker">FAQ</p>
              <h2 className="text-3xl md:text-4xl font-bold text-navy">
                Frequently Asked Questions
              </h2>
            </div>
          </FadeIn>
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <FadeIn key={faq.question} delay={i * 0.08}>
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm card-hover">
                  <h3 className="text-lg font-semibold text-navy">{faq.question}</h3>
                  <p className="text-gray-600 mt-2 leading-relaxed text-sm">
                    {faq.answer}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        kicker="Final call to action"
        title="Make Your School Compliance-Ready in 7-15 Days"
        description="Engage implementation support for policy-aligned menstrual hygiene management readiness, execution, and reporting continuity."
        primaryLink={{ href: "/contact", label: "Request Proposal" }}
        secondaryLink={{ href: "/contact", label: "Book Discussion" }}
      />

      <section className="py-8 bg-primary">
        <div className="container-main flex justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-7 py-3 rounded-full border-2 border-white/30 text-white font-semibold text-sm transition-all duration-300 hover:bg-white/10 hover:border-white/50"
          >
            Download Compliance Note
          </Link>
        </div>
      </section>
    </>
  );
}
