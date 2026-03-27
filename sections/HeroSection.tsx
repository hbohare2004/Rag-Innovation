"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, BadgeCheck, Award, Globe, GraduationCap } from "lucide-react";

const slides = [
  {
    src: "/images/bg_3.jpeg",
    alt: "Vocational training for sanitary pad production",
    title: "Building Self-Reliant Menstrual Hygiene Enterprises",
  },
  
  {
    src: "/images/bg_1.png",
    alt: "Sanitary pad manufacturing unit in rural India",
    title: "Innovating Affordable Menstrual Hygiene Technologies",
  },
  {
    src: "/images/bg_12.png",
    alt: "Affordable sanitary pad machine installation",
    title: "Training Communities for a Better Tomorrow",
  },
  {
    src: "/images/bg_11.jpeg",
    alt: "Women empowerment through menstrual hygiene awareness",
    title: "From Awareness to Action",
  },
  {
    src: "/images/bg_13.jpeg",
    alt: "Supporting School MHM Compliance Across India",
    title: "Supporting School MHM Compliance Across India",
  },
  {
    src: "/images/bg_5.png",
    alt: "Low-cost sanitary napkin making machine by Rag Innovations",
    title: "Creating Impact From Local To Global",
  },
  
];

const badges = [
  { icon: BadgeCheck, text: "Recognised GeM OEM by Quality Council of India" },
  { icon: Award, text: "Recognised Startup by DPIIT, GoI" },
  { icon: Globe, text: "Proven installations across the globe" },
  { icon: GraduationCap, text: "End-to-end support: machines, raw materials & training" },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(
    () => setCurrent((c) => (c + 1) % slides.length),
    []
  );
  const prev = useCallback(
    () => setCurrent((c) => (c - 1 + slides.length) % slides.length),
    []
  );

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background slides */}
      <AnimatePresence>
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }} // nice smooth curve
          className="absolute inset-0"
        >
          <Image
            src={slides[current].src}
            alt={slides[current].alt}
            fill
            className="object-cover"
            priority={current === 0}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="container-main relative z-10 py-20">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block bg-[#9C1C2B] text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider"
          >
            Sustainable Menstrual Hygiene Solutions
          </motion.span>

          <motion.h1
            key={slides[current].title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-beige leading-tight"
          >
            {slides[current].title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-6 text-gray-200 text-base md:text-lg leading-relaxed max-w-2xl"
          >
            Rag Innovations designs, builds, and supports affordable sanitary
            napkin and maternity pad manufacturing machines so communities can
            create dignified livelihoods and healthier futures for women and
            girls.
          </motion.p>

          {/* Badges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3"
          >
            {badges.map((badge) => (
              <div
                key={badge.text}
                className="flex items-center gap-2.5 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2.5"
              >
                <badge.icon size={18} className="text-beige shrink-0" />
                <span className="text-white/90 text-sm">{badge.text}</span>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 mt-10"
          >
            <Link href="/products" className="btn-cta text-base px-8 py-4 bg-primary text-white #9C1C2B">
              Explore Machines
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-white/40 text-white font-semibold text-base transition-all duration-300 hover:bg-white/10 hover:border-white/60"
            >
              Schedule a Visit
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Slide controls */}
      <div className="absolute bottom-8 right-8 z-10 flex gap-2">
        <button
          onClick={prev}
          className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={next}
          className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-full transition-all duration-100 ${i === current ? "w-8 bg-primary" : "w-3 bg-white/40"
              }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
