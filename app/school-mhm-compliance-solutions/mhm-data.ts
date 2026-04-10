/* ────────────────────────────────────────────
 *  MHM Compliance Proposal — centralised data
 *  Edit prices, features, specs here.
 * ──────────────────────────────────────────── */

/* ── Products ──────────────────────────────── */

export interface MhmProduct {
  image: string;
  title: string;
  description: string;
  benefits: string[];
}

export const products: MhmProduct[] = [
  {
    image: "/images/prod-6.png",
    title: "Sanitary Napkin Vending Machine",
    description:
      "Coin and card-operated sanitary napkin vending machine for instant, hygienic pad access—a key component of MHM compliance, ensuring dignity, convenience, and CBSE-compliant menstrual hygiene management in schools.",
    benefits: [
      "50-pad storage capacity",
      "Coin & card operated",
      "Wall-mounted, space-saving",
      "Low-maintenance design",
    ],
  },
  {
    image: "/images/prod-7.png",
    title: "Sanitary Pad Incinerator",
    description:
      "School-ready sanitary napkin disposal machine with safe, hygienic, and eco-friendly incineration—ensuring responsible waste management and full MHM compliance under CBSE guidelines.",
    benefits: [
      "200+ pads / day capacity",
      "Smokeless operation",
      "Compact 2 × 2 ft footprint",
      "Meets disposal guidelines",
    ],
  },
  {
    image: "/images/MHM_corner.jpeg",
    title: "MHM Corner",
    description:
      "Dedicated MHM corner in girls' washroom with sanitary napkin vending, safe incinerator disposal, and hygiene facilities—a complete MHM compliance solution ensuring privacy, dignity, and CBSE adherence.",
    benefits: [
      "Sanitary napkin vending for easy access",
      "Safe disposal with incinerator system",
      "Handwashing and hygiene support",
      "Improves hygiene, reduces stigma & absenteeism",
    ],
  },
];

/* ── Specifications ────────────────────────── */

export interface SpecRow {
  label: string;
  machine: string;
  vending: string;
  incinerator: string;
}

export const specifications: SpecRow[] = [
  {
    label: "Capacity",
    machine: "1,200 pads / day",
    vending: "50 pads storage",
    incinerator: "200+ pads / day",
  },
  {
    label: "Power",
    machine: "Single phase, 220 V",
    vending: "~50 W standby",
    incinerator: "~2 kW",
  },
  {
    label: "Space Required",
    machine: "≈ 200 sq ft room",
    vending: "Wall-mounted (2 × 1 ft)",
    incinerator: "2 × 2 ft floor area",
  },
  {
    label: "Material",
    machine: "SS 304 body",
    vending: "Powder-coated steel",
    incinerator: "SS 304",
  },
  {
    label: "Maintenance",
    machine: "Minimal — quarterly",
    vending: "Quarterly restocking",
    incinerator: "Monthly cleaning",
  },
];

/* ── Packages ──────────────────────────────── */

export interface PackageFeature {
  text: string;
  included: boolean;
}

export interface MhmPackage {
  id: string;
  name: string;
  tagline: string;
  price: string;
  badge: string | null;
  highlighted: boolean;
  colorClass: string;
  badgeClass: string;
  features: PackageFeature[];
}

export const packages: MhmPackage[] = [
  {
    id: "awareness",
    name: "Awareness Package",
    tagline: "Foundation for MHM compliance",
    price: "Contact for Quote",
    badge: null,
    highlighted: false,
    colorClass: "border-emerald-300",
    badgeClass: "",
    features: [
      { text: "Awareness sessions for students & staff", included: true },
      { text: "Structured training modules", included: true },
      { text: "CBSE compliance guidance", included: true },
      { text: "MHM corner setup advisory", included: true },
      { text: "Infrastructure setup", included: false },
      { text: "Napkin access system", included: false },
      { text: "Disposal system", included: false },
      { text: "Pad making machine", included: false },
      { text: "Production training", included: false },
    ],
  },
  {
    id: "compliance",
    name: "Compliance Package",
    tagline: "Complete infrastructure + access",
    price: "Contact for Quote",
    badge: null,
    highlighted: false,
    colorClass: "border-amber-300",
    badgeClass: "",
    features: [
      { text: "Awareness sessions for students & staff", included: true },
      { text: "Structured training modules", included: true },
      { text: "CBSE compliance guidance", included: true },
      { text: "MHM corner setup advisory", included: true },
      { text: "Infrastructure setup & audit", included: true },
      { text: "Napkin access & vending support", included: true },
      { text: "Disposal system installation", included: true },
      { text: "Pad making machine", included: false },
      { text: "Production training", included: false },
    ],
  },
  {
    id: "sustainable",
    name: "Sustainable Model",
    tagline: "End-to-end self-reliant solution",
    price: "Contact for Quote",
    badge: "Most Recommended",
    highlighted: true,
    colorClass: "border-primary",
    badgeClass: "bg-primary text-white",
    features: [
      { text: "Awareness sessions for students & staff", included: true },
      { text: "Structured training modules", included: true },
      { text: "CBSE compliance guidance & documentation", included: true },
      { text: "MHM corner setup", included: true },
      { text: "Infrastructure setup & audit", included: true },
      { text: "Napkin access & vending support", included: true },
      { text: "Disposal system installation", included: true },
      { text: "Sanitary pad making machine", included: true },
      { text: "Production training & raw material plan", included: true },
    ],
  },
];

/* ── Comparison rows ───────────────────────── */

export interface ComparisonRow {
  feature: string;
  awareness: boolean | string;
  compliance: boolean | string;
  sustainable: boolean | string;
}

export const comparisonRows: ComparisonRow[] = [
  { feature: "Awareness sessions", awareness: true, compliance: true, sustainable: true },
  { feature: "Training modules", awareness: true, compliance: true, sustainable: true },
  { feature: "Compliance guidance", awareness: true, compliance: true, sustainable: true },
  { feature: "Infrastructure setup", awareness: false, compliance: true, sustainable: true },
  { feature: "Napkin access", awareness: false, compliance: true, sustainable: true },
  { feature: "Disposal system", awareness: false, compliance: true, sustainable: true },
  { feature: "Machine included", awareness: false, compliance: false, sustainable: true },
  { feature: "Production training", awareness: false, compliance: false, sustainable: true },
  { feature: "Ongoing support", awareness: "Basic", compliance: "Standard", sustainable: "Premium" },
];

/* ── Optional add-ons ──────────────────────── */

export interface AddOn {
  image: string;
  title: string;
  description: string;
}

export const addOns: AddOn[] = [
  {
    image: "/images/prod-1.png",
    title: "Sanitary Pad Making Machine",
    description:
      "Industrial sealing & impression line for on-campus pad production—multi-roll feed (topsheet, core, backsheet), pneumatic sealing, digital temperature control, and SS construction for reliable daily output when your school opts for a sustainable manufacturing unit.",
  },
  {
    image: "/images/work-1.jpg",
    title: "Awareness and Training",
    description:
      "On-ground MHM awareness sessions with students and staff—interactive banners, facilitator-led discussions, and age-appropriate orientation that builds confidence, breaks taboos, and supports CBSE-aligned menstrual hygiene education.",
  },
];

/* ── Impact / Trust ────────────────────────── */

export interface ImpactStat {
  value: number;
  suffix: string;
  label: string;
}

export const impactStats: ImpactStat[] = [
  { value: 300, suffix: "+", label: "Systems Installed" },
  { value: 15, suffix: "+", label: "Years of Experience" },
  { value: 200000, suffix: "+", label: "Women & Girls Benefited" },
  { value: 500, suffix: "+", label: "Organisations Partnered" },
];

export interface MhmTestimonial {
  quote: string;
  name: string;
  role: string;
}

export const mhmTestimonials: MhmTestimonial[] = [
  {
    quote:
      "We installed a sanitary napkin making unit in our school with the help of Rag Innovations. The training provided was excellent, and our students now have access to affordable, high-quality sanitary pads.",
    name: "Nishi Mishra",
    role: "Chairperson IPSC, Principal — SKV Gwalior",
  },
  {
    quote:
      "The after-sales service provided by Rag Innovations is exceptional. They ensure every machine runs smoothly and any issue is resolved promptly. Their commitment to their clients is truly commendable.",
    name: "Shatadru",
    role: "Institutional Client",
  },
  {
    quote:
      "Rag Innovations is doing incredible work in the field of women empowerment and menstrual hygiene. Their machines are affordable, efficient, and perfect for rural communities looking to create sustainable livelihoods.",
    name: "Sunil Batra",
    role: "Founder, Mintvest Co.",
  },
];

/* ── FAQs ──────────────────────────────────── */

export interface MhmFaq {
  question: string;
  answer: string;
}

export const mhmFaqs: MhmFaq[] = [
  {
    question: "What is the cost of setting up MHM compliance in a school?",
    answer:
      "The cost depends on the package selected — Awareness, Compliance, or the full Sustainable Model. We customise pricing based on student strength, existing infrastructure, and specific requirements. Contact us for a detailed proposal.",
  },
  {
    question: "How quickly can schools begin implementation?",
    answer:
      "Most schools can begin with a structured plan and on-ground setup within 7–15 days, depending on readiness and administrative approvals.",
  },
  {
    question: "Does support include documentation for compliance reporting?",
    answer:
      "Yes. The implementation model includes practical documentation support so schools can maintain records in an organised and auditable format aligned to CBSE requirements.",
  },
  {
    question: "Can existing school infrastructure be used?",
    answer:
      "Yes. Existing facilities are assessed first, and recommendations are designed to optimise available space and systems before additional setup.",
  },
  {
    question: "Who should participate in the awareness sessions?",
    answer:
      "Sessions are typically organised for students, key teaching staff, and relevant support teams to ensure consistent institutional understanding.",
  },
  {
    question: "What is a sanitary pad making machine?",
    answer:
      "A sanitary pad making machine is specialised equipment designed to produce high-quality sanitary napkins locally. We offer both semi-automatic and fully automatic options so schools and communities can maintain an uninterrupted supply.",
  },
  {
    question: "Are low cost sanitary napkin machines available in India?",
    answer:
      "Yes, we provide efficient and easy-to-operate low cost sanitary napkin machine options ideal for schools, NGOs, and rural programs focused on affordable menstrual hygiene management.",
  },
  {
    question: "Is a sanitary pad business profitable for school-based units?",
    answer:
      "Yes. In-school production units can supply pads at cost, sell to nearby communities, or operate as vocational training centres — creating a self-sustaining model with strong social impact.",
  },
];
