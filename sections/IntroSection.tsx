import FadeIn from "@/components/FadeIn";
import SectionHeading from "@/components/SectionHeading";
import { Users, School, Heart, Handshake } from "lucide-react";

const partners = [
  { icon: School, label: "Educational Institutions" },
  { icon: Handshake, label: "CSR Initiatives" },
  { icon: Users, label: "NGOs & Self-Help Groups" },
  { icon: Heart, label: "Government Organizations" },
];

export default function IntroSection() {
  return (
    <section className="section-padding bg-beige-light">
      <div className="container-main">
        <FadeIn>
          <SectionHeading
            title="Spreading Menstrual Hygiene Awareness Across Globe"
            subtitle="We collaborate with educational institutions, CSR initiatives, government organizations, social clubs, NGOs, self-help groups, and individuals to spread awareness, break menstrual myths, and create sustainable menstrual hygiene solutions that make a real impact at the grassroots level."
          />
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {partners.map((p, i) => (
            <FadeIn key={p.label} delay={i * 0.1}>
              <div className="bg-white rounded-2xl p-6 text-center card-hover shadow-sm">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <p.icon size={26} className="text-primary" />
                </div>
                <p className="text-sm font-medium text-navy">{p.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
