import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";
import CTASection from "@/components/CTASection";
import { Cog, Megaphone, GraduationCap, Wrench, Check, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent pricing for low cost sanitary machine setup, sanitary napkin making machine packages, awareness campaigns, vocational training, and unit support — Rag Innovations India.",
  keywords: [
    "low cost sanitary machine price India",
    "sanitary napkin making machine cost",
    "pad making machine India pricing",
  ],
};

const plans = [
  {
    icon: Cog,
    title: "Machine Setup",
    subtitle: "Sanitary napkin making unit",
    price: "₹1.5 Lakh",
    note: "Typical investment",
    popular: true,
    features: [
      "Semi-automatic pad machine",
      "Installation at your location",
      "Basic operator training",
      "Initial raw material kit",
      "1-year machine warranty",
      "Phone & email support",
    ],
  },
  {
    icon: Megaphone,
    title: "Awareness Campaigns",
    subtitle: "Per session from",
    price: "₹5,000",
    note: "Starting price",
    popular: false,
    features: [
      "School & college sessions",
      "Myth-busting workshops",
      "Health education materials",
      "Expert facilitators",
      "Custom programme design",
      "Impact reporting",
    ],
  },
  {
    icon: GraduationCap,
    title: "Vocational Training",
    subtitle: "Per participant from",
    price: "₹3,000",
    note: "Starting price",
    popular: false,
    features: [
      "Hands-on machine training",
      "Quality control protocols",
      "Business management skills",
      "Marketing fundamentals",
      "Skill India certification",
      "Post-training support",
    ],
  },
  {
    icon: Wrench,
    title: "Existing Unit Support",
    subtitle: "From",
    price: "₹25,000",
    note: "Starting price",
    popular: false,
    features: [
      "On-site diagnostics",
      "Machine maintenance",
      "Troubleshooting support",
      "Upgrades & retrofits",
      "Process optimisation",
      "Extended warranty options",
    ],
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        kicker="Pricing & plans"
        title="Transparent, Impact-First Pricing"
        subtitle="Every installation is tailored to your needs. Below are guide prices to help you plan — final quotes are customised based on your specific requirements."
      />

      <section className="section-padding">
        <div className="container-main">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {plans.map((plan, i) => (
              <FadeIn key={plan.title} delay={i * 0.12}>
                <div
                  className={`relative bg-white rounded-2xl p-8 border shadow-sm card-hover h-full flex flex-col ${
                    plan.popular
                      ? "border-primary ring-2 ring-primary/20"
                      : "border-gray-100"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-semibold px-4 py-1 rounded-full flex items-center gap-1">
                      <Star size={12} /> Most Popular
                    </div>
                  )}
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                    <plan.icon size={24} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-navy">
                    {plan.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-4">{plan.subtitle}</p>
                  <div className="mb-1">
                    <span className="text-3xl font-bold text-navy">
                      {plan.price}
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 mb-6">{plan.note}</p>
                  <ul className="space-y-3 flex-1 mb-8">
                    {plan.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2.5 text-sm text-gray-700"
                      >
                        <Check
                          size={16}
                          className="text-primary shrink-0 mt-0.5"
                        />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={
                      plan.popular ? "btn-primary w-full text-center" : "btn-outline w-full text-center"
                    }
                  >
                    Get Started
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <div className="mt-12 bg-beige-light rounded-2xl p-8 text-center">
              <p className="text-gray-700">
                <strong className="text-navy">
                  Looking for something specific?
                </strong>{" "}
                Talk to us for a customised proposal tailored to your
                organisation&apos;s needs and budget.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <CTASection
        title="Not Sure Which Plan Fits?"
        description="Our team will help you choose the right solution based on your goals, community size, and budget. Schedule a free consultation today."
        primaryLink={{ href: "/contact", label: "Schedule a Consultation" }}
      />
    </>
  );
}
