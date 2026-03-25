import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";
import {
  Phone,
  Mail,
  MapPin,
  Factory,
  Clock,
} from "lucide-react";
import ContactRequestForm from "@/components/ContactRequestForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Rag Innovations for sanitary napkin making machines, pricing, training, and partnerships. Head office in Bhopal, manufacturing plant in Bhind, Madhya Pradesh.",
};

interface ContactLine {
  text: string;
  href?: string;
}

const contactInfo: {
  icon: typeof Phone;
  title: string;
  lines: ContactLine[];
}[] = [
  {
    icon: Phone,
    title: "Call Us",
    lines: [
      { text: "+91 9425128596", href: "tel:+919425128596" },
      { text: "+91 8982321930", href: "tel:+918982321930" },
      { text: "+91 8839468492", href: "tel:+918839468492" },
    ],
  },
  {
    icon: Mail,
    title: "Email",
    lines: [
      {
        text: "raginnovations@gmail.com",
        href: "mailto:raginnovations@gmail.com",
      },
    ],
  },
  {
    icon: MapPin,
    title: "Head Office",
    lines: [
      {
        text: "Rag Innovations, B-Nest (Smart City Corporation Ltd), Zone 14, near Natraj Petrol Pump, Govindpura, Bhopal 462022",
      },
    ],
  },
  {
    icon: Factory,
    title: "Manufacturing Plant",
    lines: [
      {
        text: "110, Village: Manepura, Post: Surpura, Distt: Bhind, Madhya Pradesh 477555",
      },
    ],
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Ready To Explore A Sanitary Napkin Making Machine For You!"
        subtitle="Share your context and goals — we'll help you find the right machine, training, and support package."
      />

      <section className="section-padding">
        <div className="container-main">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <FadeIn direction="left">
                <h2 className="text-2xl font-bold text-navy mb-8">
                  Get In Touch
                </h2>
                <div className="space-y-6">
                  {contactInfo.map((item) => (
                    <div
                      key={item.title}
                      className="flex gap-4 p-5 bg-white rounded-xl border border-gray-100 shadow-sm"
                    >
                      <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <item.icon size={20} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-navy text-sm mb-1">
                          {item.title}
                        </h3>
                        {item.lines.map((line) =>
                          line.href ? (
                            <a
                              key={line.text}
                              href={line.href}
                              className="block text-sm text-gray-600 hover:text-cta transition-colors"
                            >
                              {line.text}
                            </a>
                          ) : (
                            <p
                              key={line.text}
                              className="text-sm text-gray-600 leading-relaxed"
                            >
                              {line.text}
                            </p>
                          )
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-5 bg-beige-light rounded-xl">
                  <div className="flex items-start gap-3">
                    <Clock size={20} className="text-primary shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-navy text-sm mb-2">
                        Business Hours
                      </h3>
                      <p className="text-sm text-gray-600">
                        Mon – Fri: 9 am – 8 pm
                      </p>
                      <p className="text-sm text-gray-600">
                        Saturday: 9 am – 5 pm
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        Closed on Sundays &amp; official holidays
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <FadeIn direction="right">
                <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                  <h2 className="text-2xl font-bold text-navy mb-2">
                    Send Us Your Requirements
                  </h2>
                  <p className="text-gray-600 text-sm mb-8">
                    Fill in your details and we&apos;ll get back to you within
                    24 hours.
                  </p>
                  <ContactRequestForm />
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-16 bg-beige-light">
        <div className="container-main">
          <FadeIn>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-navy">Find Us</h2>
              <p className="text-gray-600 text-sm mt-2 flex items-center justify-center gap-1">
                <MapPin size={14} className="text-cta" />
                B-Nest, Zone 14, Govindpura, Bhopal 462022
              </p>
            </div>
          </FadeIn>
          <FadeIn>
            <div className="rounded-2xl overflow-hidden shadow-lg aspect-[2/1] md:aspect-[3/1]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3665.5739138838573!2d77.47889261493258!3d23.28549698479994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c694e60ea0c19%3A0x4c41f4e7e77b4c7a!2sRag%20Innovations!5e0!3m2!1sen!2sin!4v1684928374456!5m2!1sen!2sin"
                title="Rag Innovations office location on Google Maps"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full border-0"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Video */}
      <section className="section-padding">
        <div className="container-main">
          <FadeIn>
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-navy">See Us In Action</h2>
            </div>
          </FadeIn>
          <FadeIn>
            <div className="max-w-3xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-xl">
              <iframe
                src="https://www.youtube.com/embed/GojzTGq5t5k"
                title="Rag Innovations overview video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
                loading="lazy"
              />
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
