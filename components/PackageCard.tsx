import { CheckCircle2, X } from "lucide-react";

interface Feature {
  text: string;
  included: boolean;
}

interface PackageCardProps {
  name: string;
  tagline: string;
  price: string;
  badge?: string | null;
  highlighted?: boolean;
  colorClass: string;
  badgeClass: string;
  features: Feature[];
  ctaHref: string;
  ctaLabel?: string;
}

export default function PackageCard({
  name,
  tagline,
  price,
  badge,
  highlighted = false,
  colorClass,
  badgeClass,
  features,
  ctaHref,
  ctaLabel = "Request This Package",
}: PackageCardProps) {
  return (
    <div
      className={`relative bg-white rounded-2xl border-2 ${colorClass} ${
        highlighted
          ? "shadow-2xl lg:scale-105 z-10"
          : "shadow-sm"
      } p-8 flex flex-col h-full transition-shadow duration-300 hover:shadow-xl`}
    >
      {badge && (
        <span
          className={`absolute -top-3.5 left-1/2 -translate-x-1/2 ${badgeClass} text-xs font-bold px-5 py-1.5 rounded-full whitespace-nowrap shadow-sm`}
        >
          {badge}
        </span>
      )}

      <h3 className="text-xl font-bold text-navy mt-1">{name}</h3>
      <p className="text-sm text-gray-500 mt-1">{tagline}</p>

      <p className="text-2xl font-bold text-navy mt-5">{price}</p>

      <hr className="my-6 border-gray-100" />

      <ul className="space-y-3 flex-1">
        {features.map((f) => (
          <li key={f.text} className="flex items-start gap-2.5 text-sm">
            {f.included ? (
              <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
            ) : (
              <X size={16} className="text-gray-300 shrink-0 mt-0.5" />
            )}
            <span className={f.included ? "text-gray-700" : "text-gray-400"}>
              {f.text}
            </span>
          </li>
        ))}
      </ul>

      <a
        href={ctaHref}
        className={`mt-8 w-full text-center py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
          highlighted
            ? "bg-cta text-white hover:bg-cta-light hover:shadow-lg"
            : "border-2 border-primary text-primary hover:bg-primary hover:text-white hover:shadow-lg"
        }`}
      >
        {ctaLabel}
      </a>
    </div>
  );
}
