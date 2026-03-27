import AnimatedCounter from "@/components/AnimatedCounter";
import FadeIn from "@/components/FadeIn";
import { Calendar, Users, Building2, Heart } from "lucide-react";

const stats = [
  { icon: Calendar, target: 15, suffix: "+", label: "Years of Impact" },
  { icon: Users, target: 200000, suffix: "+", label: "Women & Girls Benefited" },
  { icon: Building2, target: 500, suffix: "+", label: "Renowned Organizations Partnered" },
  { icon: Heart, target: 500000, suffix: "+", label: "Sanitary Pads Distributed" },
];

export default function ImpactStats() {
  return (
    <section className="relative py-20 md:py-28 bg-navy overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 25%, rgba(156,28,43,0.3) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(228,87,46,0.2) 0%, transparent 50%)",
          }}
        />
      </div>
      <div className="container-main relative">
        <FadeIn>
          <div className="text-center mb-14">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
              Our Impact
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white text-balance">
              Real Outcomes For Communities Across Globe
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 0.15}>
              <div className="text-center group">
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <stat.icon size={28} className="text-primary" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                </div>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
