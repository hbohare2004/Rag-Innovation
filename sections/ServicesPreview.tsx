import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import SectionHeading from "@/components/SectionHeading";
import { Cog, Package, GraduationCap, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Cog,
    title: "Sanitary Napkin & Maternity Pad Machines",
    description:
      "India's first low-cost sanitary napkin making machine. Semi-automatic, single-phase, producing up to 1,200 pads per hour at a fraction of imported machine costs.",
    color: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    icon: Package,
    title: "Premium Raw Materials",
    description:
      "High-quality raw materials for ultra-thin pads with wings. Consistent supply chain ensuring your production never stops, with competitive pricing for bulk orders.",
    color: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    icon: GraduationCap,
    title: "Hands-on Vocational Training",
    description:
      "Comprehensive Skill India and Make in India aligned training programs. From machine operation to quality control and business management for sustainable enterprises.",
    color: "bg-primary/10",
    iconColor: "text-primary",
  },
];

export default function ServicesPreview() {
  return (
    <section className="section-padding">
      <div className="container-main">
        <FadeIn>
          <SectionHeading
            kicker="What we do"
            title="End-to-End Solutions For Menstrual Hygiene Management"
            subtitle="From machines, raw materials, training, and awareness programs, we help you set up and scale sustainable sanitary napkin and maternity pad units."
          />
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <FadeIn key={service.title} delay={i * 0.15}>
              <div className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm card-hover h-full flex flex-col">
                <div
                  className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center mb-5`}
                >
                  <service.icon size={26} className={service.iconColor} />
                </div>
                <h3 className="text-lg font-semibold text-navy mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-1">
                  {service.description}
                </p>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1.5 text-primary font-medium text-sm mt-5 group-hover:gap-2.5 transition-all"
                >
                  Learn more <ArrowRight size={16} />
                </Link>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <div className="text-center mt-10">
            <Link href="/services" className="btn-outline">
              View All Services
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
