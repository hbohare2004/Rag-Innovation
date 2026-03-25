interface PageHeroProps {
  kicker?: string;
  title: string;
  subtitle?: string;
}

export default function PageHero({ kicker, title, subtitle }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="container-main relative text-center">
        {kicker && (
          <p className="text-beige font-semibold text-sm uppercase tracking-widest mb-3">
            {kicker}
          </p>
        )}
        <h1 className="text-3xl md:text-5xl font-bold text-white max-w-4xl mx-auto text-balance leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 text-gray-200 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
