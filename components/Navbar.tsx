"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/gallery", label: "Gallery" },
  { href: "/pricing", label: "Pricing" },
  { href: "/school-mhm-compliance-solutions", label: "MHM Compliance" },
  { href: "https://mkp.gem.gov.in/sanitary-pad-production-machine/sanitary-pad-production-machine/p-5116877-42894667343-cat.html", label: "GeM Seller", external: true, logo: "/images/GeM logo.png" },
] as const;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-white/80 backdrop-blur-sm"
        }`}
    >
      <nav className="container-main flex items-center justify-between h-16 md:h-20">
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="Rag Innovations — sanitary napkin making machine manufacturer India logo"
            width={200}
            height={58}
            className="h-12 md:h-14 w-auto cursor-pointer"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const isMhmCompliance =
              link.href === "/school-mhm-compliance-solutions";
            const isExternal = "external" in link && link.external;
            const isActive = !isExternal && pathname === link.href;
            const logo = "logo" in link ? link.logo : undefined;
            const isGeMSeller = link.label === "GeM Seller";

            const className = `relative text-sm font-medium transition-all duration-300 ${
              isGeMSeller
                ? "inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-primary text-primary bg-primary/5 animate-pulse-glow hover:bg-primary hover:text-white hover:border-primary"
                : isMhmCompliance
                ? `px-3.5 py-2 rounded-lg border ${
                    isActive
                      ? "text-primary bg-primary/10 border-primary/40"
                      : "text-navy border-primary/20 hover:text-primary hover:bg-primary/5"
                  }`
                : `px-3 py-2 rounded-lg hover:text-primary ${
                    isActive ? "text-primary" : "text-navy"
                  }`
            }`;

            if (isExternal) {
              return (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={className}
                >
                  {logo ? (
                    <span className="inline-flex items-center gap-1.5">
                      <Image
                        src={logo}
                        alt="GeM logo"
                        width={16}
                        height={16}
                        className="h-4 w-auto object-contain"
                      />
                      <span>{link.label}</span>
                    </span>
                  ) : (
                    link.label
                  )}
                </a>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                className={className}
              >
                {link.label}
                {isActive && !isMhmCompliance && (
                  <span className="absolute bottom-0.5 left-3 right-3 h-0.5 bg-primary rounded-full" />
                )}
              </Link>
            );
          })}
          <Link href="/contact" className="btn-cta ml-3 text-xs px-5 py-2.5 bg-primary text-white min-h-10 inline-flex items-center justify-center">
            Talk to Our Team
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden min-h-11 min-w-11 p-2 inline-flex items-center justify-center text-navy hover:text-primary transition-colors"
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="container-main pb-6 pt-2 space-y-1 bg-white border-t border-gray-100">
          {navLinks.map((link) => {
            const isMhmCompliance =
              link.href === "/school-mhm-compliance-solutions";
            const isExternal = "external" in link && link.external;
            const isActive = !isExternal && pathname === link.href;
            const logo = "logo" in link ? link.logo : undefined;
            const isGeMSeller = link.label === "GeM Seller";

            const className = `block px-4 py-2.5 text-sm font-medium transition-all duration-300 ${
              isGeMSeller
                ? "border border-primary text-primary bg-primary/5 animate-pulse-glow hover:bg-primary hover:text-white hover:border-primary"
                : isMhmCompliance
                ? `${
                    isActive
                      ? "text-primary bg-primary/10 border-primary/40"
                      : "text-navy border-primary/25 hover:text-primary hover:bg-primary/5"
                  } rounded-lg border`
                : `rounded-lg ${
                    isActive
                      ? "text-primary bg-primary/5"
                      : "text-navy hover:text-primary hover:bg-gray-50"
                  }`
            }`;

            if (isExternal) {
              return (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={className}
                >
                  {logo ? (
                    <span className="inline-flex items-center gap-1.5">
                      <Image
                        src={logo}
                        alt="GeM logo"
                        width={16}
                        height={16}
                        className="h-4 w-auto object-contain"
                      />
                      <span>{link.label}</span>
                    </span>
                  ) : (
                    link.label
                  )}
                </a>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                className={className}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="pt-3 px-4">
            <Link href="/contact" className="btn-cta w-full text-center text-xs">
              Talk to Our Team
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
