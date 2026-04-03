import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
  ArrowRight,
} from "lucide-react";
import ObfuscatedEmail from "@/components/ObfuscatedEmail";

const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/pricing", label: "Pricing" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

const socials = [
  {
    href: "https://www.facebook.com/innovationsrag/",
    icon: Facebook,
    label: "Facebook",
  },
  {
    href: "https://twitter.com/InnovationsRag",
    icon: Twitter,
    label: "Twitter",
  },
  {
    href: "https://www.instagram.com/raginnovations",
    icon: Instagram,
    label: "Instagram",
  },
  {
    href: "https://www.youtube.com/channel/UC7a8-5RxDh4TBCc1POTEG2A/videos",
    icon: Youtube,
    label: "YouTube",
  },
  {
    href: "https://www.linkedin.com/company/rag-innovations/",
    icon: Linkedin,
    label: "LinkedIn",
  },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-gray-300">
      <div className="container-main pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <div
                className="footer-logo-mask h-14 w-40 bg-primary"
                aria-label="Rag Innovations Logo"
                role="img"
              />
            </Link>
            <p className="text-sm leading-relaxed text-gray-400 mb-6">
              Affordable and sustainable menstrual hygiene solutions—including{" "}
              <Link
                href="/sanitary-machine"
                className="text-gray-300 hover:text-primary transition-colors"
              >
                sanitary napkin making machine
              </Link>{" "}
              options for India. Empowering communities through innovation,
              training, and awareness.
            </p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-primary transition-colors group"
                  >
                    <ArrowRight
                      size={14}
                      className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                    />
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Contact
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <Phone size={16} className="text-primary shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+919425128596" className="hover:text-primary transition-colors">
                    +91 9425128596
                  </a>
                  <br />
                  <a href="tel:+918982321930" className="hover:text-primary transition-colors">
                    +91 8982321930
                  </a>
                  <br />
                  <a href="tel:+918839468492" className="hover:text-primary transition-colors">
                    +91 8839468492
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <Mail size={16} className="text-primary shrink-0 mt-0.5" />
                <ObfuscatedEmail className="hover:text-primary transition-colors" />
              </li>
              <li className="flex gap-3">
                <MapPin size={16} className="text-primary shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  B-Nest, Zone 14, Govindpura, Bhopal 462022, M.P.
                </span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Business Hours
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex gap-3">
                <Clock size={16} className="text-primary shrink-0 mt-0.5" />
                <div>
                  <p>Mon – Fri: 9 am – 8 pm</p>
                  <p>Saturday: 9 am – 5 pm</p>
                  <p className="text-gray-500 mt-1">
                    Closed on Sundays &amp; official holidays
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Rag Innovations. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/contact" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-cta transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
