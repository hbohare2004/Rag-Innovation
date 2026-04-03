import type { ReactNode } from "react";

interface SectionHeadingProps {
  kicker?: string;
  title: string;
  subtitle?: string | ReactNode;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  kicker,
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`max-w-3xl mb-14 ${centered ? "mx-auto text-center" : ""}`}>
      {kicker && (
        <p className={`kicker ${light ? "text-beige" : ""}`}>{kicker}</p>
      )}
      <h2
        className={`text-3xl md:text-4xl font-bold leading-tight text-balance ${
          light ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base md:text-lg leading-relaxed ${
            light ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
