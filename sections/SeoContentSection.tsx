import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import SectionHeading from "@/components/SectionHeading";

export default function SeoContentSection() {
  return (
    <section className="section-padding bg-white border-y border-gray-100">
      <div className="container-main max-w-4xl">
        <FadeIn>
          <SectionHeading
            kicker="Why Rag Innovations"
            title="Sanitary Napkin Making Machine & Pad Making Machine India"
            subtitle={
              <>
                Trusted guidance for NGOs, schools, CSR teams, and entrepreneurs who want a reliable{" "}
                <Link
                  href="/sanitary-machine"
                  className="text-primary font-medium hover:underline"
                >
                  sanitary napkin making machine
                </Link>{" "}
                programme and long-term support.
              </>
            }
          />
        </FadeIn>

        <FadeIn>
          <div className="max-w-none text-gray-600 text-base leading-relaxed space-y-5">
            <p>
              Rag Innovations is a DPIIT-recognised Indian manufacturer focused on affordable menstrual
              hygiene infrastructure. Whether you are planning a rural livelihood project or scaling a{" "}
              <Link href="/products" className="text-primary font-medium hover:underline">
                pad making machine India
              </Link>{" "}
              deployment, we help you choose the right capacity, power requirements, and raw material mix so
              production stays predictable and dignified for end users.
            </p>
            <p>
              A modern{" "}
              <Link href="/sanitary-machine" className="text-primary font-medium hover:underline">
                sanitary napkin making machine
              </Link>{" "}
              should balance throughput, operator skill level, and serviceability. Our semi-automatic and
              automatic lines are engineered for Indian voltage conditions, training-friendly workflows, and
              access to{" "}
              <Link href="/services" className="text-primary font-medium hover:underline">
                sanitary napkin raw materials
              </Link>{" "}
              that match your product specification—ultra-thin pads with wings, standard napkins, or maternity
              pads where clinical comfort matters.
            </p>
            <p>
              Starting a{" "}
              <Link href="/contact" className="text-primary font-medium hover:underline">
                sanitary pad business in India
              </Link>{" "}
              involves more than equipment. Teams need awareness partners, vocational modules, and a supply
              plan for non-woven topsheets, absorbent cores, PE backsheets, and release paper. We align machine
              selection with your distribution model—community sales, institutional supply, or CSR-led
              gifting—so unit economics remain realistic from day one.
            </p>
            <p>
              GeM-recognised quality processes and field-proven installations across India give programme
              managers confidence in uptime and after-sales support. From school MHM compliance to women&apos;s
              jails, self-help groups, and social enterprises, Rag Innovations combines{" "}
              <Link href="/sanitary-machine" className="text-primary font-medium hover:underline">
                low cost sanitary machine
              </Link>{" "}
              options with structured training on hygiene, quality checks, and safe disposal pathways including
              incinerators and vending where relevant.
            </p>
            <p>
              If you are comparing{" "}
              <Link href="/pricing" className="text-primary font-medium hover:underline">
                pad making machine India
              </Link>{" "}
              price bands, consider total cost of ownership: energy use, spare parts, consumable consistency,
              and the strength of local service. We publish indicative configurations and encourage a
              discovery call so we can map machine models, output targets, and raw material schedules to your
              funding cycle and monitoring requirements.
            </p>
            <p>
              Operators succeed when standard operating procedures are clear: batch checks for seal strength,
              adhesive placement, fluff distribution, and visual inspection for contamination. Our vocational
              modules reference Skill India expectations and include documentation you can share with donors or
              auditors. When you pair a dependable{" "}
              <Link href="/sanitary-machine" className="text-primary font-medium hover:underline">
                sanitary napkin making machine
              </Link>{" "}
              with consistent consumables, you reduce rework, minimise waste, and protect brand trust in the
              communities you serve.
            </p>
            <p>
              For institutions evaluating solar or off-grid deployment, we help assess panel sizing, inverter
              compatibility, and duty cycles so production windows stay realistic. Vending and incineration
              add-ons can improve access and safe disposal in schools and hospitals; we explain trade-offs so
              procurement teams choose configurations aligned with footfall, maintenance capacity, and local
              regulations.
            </p>
            <p>
              Raw material planning is central to any{" "}
              <Link href="/services" className="text-primary font-medium hover:underline">
                sanitary pad raw materials India
              </Link>{" "}
              strategy: lead times, minimum order quantities, and storage conditions for humidity-sensitive
              rolls. Rag Innovations supports forecasting for monthly offtake so you avoid stock-outs during
              awareness drives or exam seasons when demand spikes.
            </p>
            <p>
              Monitoring and evaluation partners often ask for traceability. We help you structure simple
              production logs, batch IDs, and training attendance records that strengthen reporting for CSR
              committees and government programmes. That transparency pairs naturally with a scalable{" "}
              <Link href="/products" className="text-primary font-medium hover:underline">
                pad making machine India
              </Link>{" "}
              rollout where multiple sites need comparable quality benchmarks.
            </p>
            <p>
              Sustainability here means both environmental responsibility and programme durability—machines
              that operators can run confidently, backed by documentation, training, and responsive technical
              assistance. Explore our{" "}
              <Link href="/products" className="text-primary font-medium hover:underline">
                product range
              </Link>
              , review{" "}
              <Link href="/gallery" className="text-primary font-medium hover:underline">
                installations and awards
              </Link>
              , or{" "}
              <Link href="/contact" className="text-primary font-medium hover:underline">
                speak with our team
              </Link>{" "}
              to design a sanitary napkin manufacturing roadmap that fits your community.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
