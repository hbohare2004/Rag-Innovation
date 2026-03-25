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
  { href: "/contact", label: "Contact" },
];

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
        <Image
          src="/images/logo.png"
          alt="Rag Innovations"
          width={200}
          height={58}
          className="h-12 md:h-14 w-auto"
          priority
        />

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-lg hover:text-primary ${pathname === link.href
                  ? "text-primary"
                  : "text-navy"
                }`}
            >
              {link.label}
              {pathname === link.href && (
                <span className="absolute bottom-0.5 left-3 right-3 h-0.5 bg-primary rounded-full" />
              )}
            </Link>
          ))}
          <Link href="/contact" className="btn-cta ml-3 text-xs px-5 py-2.5 bg-primary text-white #9C1C2B">
            Talk to Our Team
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-navy hover:text-primary transition-colors"
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
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${pathname === link.href
                  ? "text-primary bg-primary/5"
                  : "text-navy hover:text-primary hover:bg-gray-50"
                }`}
            >
              {link.label}
            </Link>
          ))}
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
