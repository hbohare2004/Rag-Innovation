import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import SectionHeading from "@/components/SectionHeading";

const faqs: { question: string; answer: string }[] = [
  {
    question: "What is the cost of sanitary napkin machine in India?",
    answer:
      "The cost depends on machine type and automation.",
  },
  {
    question: "Is sanitary pad business profitable?",
    answer:
      "Yes, it has strong demand and good margins.",
  },
  {
    question: "What is a sanitary napkin making machine, and who is it for?",
    answer:
      "A sanitary napkin making machine produces disposable pads on-site or in small batches. Rag Innovations supplies semi-automatic and automatic options for NGOs, schools, CSR projects, and entrepreneurs building a sanitary pad business in India.",
  },
  {
    question: "Do you offer a low cost sanitary machine for rural or budget projects?",
    answer:
      "Yes. Our flagship models are designed as a low cost sanitary machine with single-phase power and simple operation, so communities can start production without importing expensive equipment.",
  },
  {
    question: "Can you supply sanitary napkin raw materials and ongoing support?",
    answer:
      "We provide sanitary napkin raw materials—top sheets, absorbent core, backsheet, and packaging—alongside training and maintenance so your unit runs reliably.",
  },
  {
    question: "Where can I compare pad making machine India models and pricing?",
    answer:
      "Browse our machines and typical configurations on the products and pricing pages, then contact us for a tailored quote for your location and volume.",
  },
  {
    question: "How do I get started with a sanitary pad business in India?",
    answer:
      "Share your goals and audience—we help with machine selection, raw material planning, training, and awareness so your programme is practical and sustainable.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function HomeFaqSection() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section className="section-padding bg-beige-light">
        <div className="container-main">
          <FadeIn>
            <SectionHeading
              kicker="FAQ"
              title="Frequently Asked Questions"
              subtitle={
                <>
                  Straight answers about our sanitary napkin making machine range,
                  sanitary napkin raw materials, and support for a sanitary pad
                  business in India. Explore{" "}
                  <Link
                    href="/sanitary-machine"
                    className="text-primary font-medium hover:underline"
                  >
                    pad making machine India
                  </Link>{" "}
                  models,{" "}
                  <Link
                    href="/pricing"
                    className="text-primary font-medium hover:underline"
                  >
                    pricing
                  </Link>
                  , or{" "}
                  <Link
                    href="/contact"
                    className="text-primary font-medium hover:underline"
                  >
                    get in touch
                  </Link>
                  .
                </>
              }
            />
          </FadeIn>
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <FadeIn key={faq.question} delay={i * 0.06}>
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                  <h3 className="text-lg font-semibold text-navy">{faq.question}</h3>
                  <p className="text-gray-600 mt-2 leading-relaxed text-sm">
                    {faq.answer}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
