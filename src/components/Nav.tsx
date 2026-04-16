"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, Phone, MapPin } from "lucide-react";

const NAV_LINKS = [
  { label: "Locations", href: "#locations" },
  { label: "Products", href: "#products" },
  { label: "Reviews", href: "#reviews" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "nav-glass py-2" : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo — image only on mobile, image + wordmark on desktop */}
          <a href="/" className="flex items-center gap-2 shrink-0">
            <Image
              src="https://xvertuz.com/wp-content/uploads/2024/09/cropped-xvertuz-logo_2-270x270.png"
              alt="Xvertuz"
              width={36}
              height={36}
              className="rounded-full"
              unoptimized
            />
            <span
              className="text-xl font-bold tracking-widest text-[#F2F6FF] hidden sm:inline"
              style={{ fontFamily: "var(--font-bebas), cursive" }}
            >
              XVERTUZ
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-sm text-[#A9B4C7] hover:text-[#F2F6FF] transition-colors font-medium cursor-pointer bg-transparent border-none"
              >
                {link.label}
              </button>
            ))}
            <a
              href="tel:4357898273"
              className="flex items-center gap-1.5 text-sm text-[#A9B4C7] hover:text-[#F2F6FF] transition-colors"
            >
              <Phone size={14} />
              (435) 789-8273
            </a>
            <button
              onClick={() => scrollTo("#locations")}
              className="flex items-center gap-1.5 bg-[#39D353] text-[#0B1320] px-4 py-2 rounded-full text-sm font-bold hover:bg-[#2cb845] transition-colors cursor-pointer border-none"
            >
              <MapPin size={14} />
              Find a Store
            </button>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-[#F2F6FF] p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile fullscreen overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0B1320]/95 backdrop-blur-md flex flex-col items-center justify-center gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-3xl text-[#F2F6FF] hover:text-[#39D353] transition-colors cursor-pointer bg-transparent border-none"
              style={{ fontFamily: "var(--font-bebas), cursive" }}
            >
              {link.label}
            </button>
          ))}
          <a
            href="tel:4357898273"
            className="flex items-center gap-2 text-[#A9B4C7] text-lg mt-4"
            onClick={() => setMenuOpen(false)}
          >
            <Phone size={18} />
            (435) 789-8273
          </a>
          <button
            onClick={() => scrollTo("#locations")}
            className="flex items-center gap-2 bg-[#39D353] text-[#0B1320] px-8 py-3 rounded-full text-lg font-bold cursor-pointer border-none mt-2"
          >
            <MapPin size={18} />
            Find a Store
          </button>
        </div>
      )}
    </>
  );
}
