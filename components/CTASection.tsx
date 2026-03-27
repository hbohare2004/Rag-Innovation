import Link from "next/link";

interface CTASectionProps {
  kicker?: string;
  title: string;
  description: string;
  primaryLink: { href: string; label: string };
  secondaryLink?: { href: string; label: string };
}

export default function CTASection({
  kicker,
  title,
  description,
  primaryLink,
  secondaryLink,
}: CTASectionProps) {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-primary">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",
          }}
        />
      </div>
      <div className="container-main relative text-center">
        {kicker && (
          <p className="text-beige font-semibold text-sm uppercase tracking-widest mb-3">
            {kicker}
          </p>
        )}
        <h2 className="text-3xl md:text-4xl font-bold text-white max-w-3xl mx-auto text-balance">
          {title}
        </h2>
        <p className="mt-4 text-gray-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <Link href={primaryLink.href} className="inline-flex items-center justify-center px-7 py-3 rounded-full border-2 border-white/30 text-white font-semibold text-sm transition-all duration-300 hover:bg-white/10 hover:border-white/50">
            {primaryLink.label}
          </Link>
          {secondaryLink && (
            <Link
              href={secondaryLink.href}
              className="inline-flex items-center justify-center px-7 py-3 rounded-full border-2 border-white/30 text-white font-semibold text-sm transition-all duration-300 hover:bg-white/10 hover:border-white/50"
            >
              {secondaryLink.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
