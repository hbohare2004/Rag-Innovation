"use client";

import { useState } from "react";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import SectionHeading from "@/components/SectionHeading";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [

  {
    quote:
      "We installed a sanitary napkin making unit in our school with the help of Rag Innovations. The training provided was excellent, and our students now have access to affordable, high-quality sanitary pads.",
    name: "Nishi Mishra",
    role: "Chairperson IPSC, Principal, SKV Gwalior",
    image: "/images/person_2.jpg",
  },
  {
    quote:
      "The after-sales service provided by Rag Innovations is exceptional. They ensure every machine runs smoothly and any issue is resolved promptly. Their commitment to their clients is truly commendable.",
    name: "Shatadru",
    role: "Client",
    image: "/images/person_1.jpg",
  },
  
  {
    quote:
      "Rag Innovations is doing incredible work in the field of women empowerment and menstrual hygiene. Their machines are affordable, efficient, and perfect for rural communities looking to create sustainable livelihoods.",
    name: "Sunil Batra",
    role: "Founder, Mintvest Co.",
    image: "/images/person_3.jpg",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () =>
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="section-padding bg-beige-light">
      <div className="container-main">
        <FadeIn>
          <SectionHeading
            kicker="Testimonials"
            title="Happy clients & partners"
          />
        </FadeIn>

        <FadeIn>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg relative">
              <Quote
                size={48}
                className="text-primary/10 absolute top-6 left-6"
              />
              <div className="text-center">
                <div className="relative w-20 h-20 rounded-full overflow-hidden mx-auto mb-6 ring-4 ring-primary/10">
                  <Image
                    src={testimonials[current].image}
                    alt={testimonials[current].name}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </div>
                <blockquote className="text-gray-700 text-base md:text-lg leading-relaxed italic mb-6">
                  &ldquo;{testimonials[current].quote}&rdquo;
                </blockquote>
                <p className="font-semibold text-navy">
                  {testimonials[current].name}
                </p>
                <p className="text-sm text-gray-500">
                  {testimonials[current].role}
                </p>
              </div>

              <div className="flex items-center justify-center gap-4 mt-8">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-primary hover:text-primary transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={18} />
                </button>
                <div className="flex gap-2">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrent(i)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        i === current
                          ? "w-6 bg-primary"
                          : "w-2 bg-gray-300"
                      }`}
                      aria-label={`Go to testimonial ${i + 1}`}
                    />
                  ))}
                </div>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-primary hover:text-primary transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
