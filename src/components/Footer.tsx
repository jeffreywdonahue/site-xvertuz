import Image from "next/image";
import { Phone, MapPin } from "lucide-react";

const SOCIAL_LINKS = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/xvertuz/",
    letter: "f",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/xvertuzvapes/",
    letter: "ig",
  },
];

const FOOTER_LOCATIONS = [
  { city: "Vernal, UT", address: "1089 US-40", phone: "(435) 789-8273", flagship: true },
  { city: "Dinosaur, CO", address: "206 Brontosaurus Blvd", phone: "(970) 449-0331", flagship: false },
  { city: "Pocatello, ID", address: "301 S 4th Ave", phone: "(208) 417-4419", flagship: false },
  { city: "Rock Springs, WY", address: "1301 Elk St", phone: "(307) 522-5785", flagship: false },
];

export default function Footer() {
  return (
    <footer className="bg-[#080F1A] border-t border-[#1E2D45] pt-16 pb-8 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          {/* Brand column */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="https://xvertuz.com/wp-content/uploads/2024/09/cropped-xvertuz-logo_2-270x270.png"
                alt="Xvertuz Logo"
                width={44}
                height={44}
                className="rounded-full"
                unoptimized
              />
              <span
                className="text-2xl text-[#F2F6FF] tracking-widest"
                style={{ fontFamily: "var(--font-bebas), cursive" }}
              >
                XVERTUZ
              </span>
            </div>
            <p className="text-[#A9B4C7] text-sm leading-relaxed mb-6">
              Premium vape & smoke shop serving UT, CO, ID & WY. Quality you can
              trust. Staff who actually know their stuff.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-9 h-9 bg-[#101B2E] border border-[#1E2D45] rounded-lg flex items-center justify-center text-[#A9B4C7] hover:text-[#8A2BE2] hover:border-[#8A2BE2]/40 transition-all text-xs font-bold uppercase"
                  >
                    {s.letter}
                  </a>
              ))}
              <a
                href="https://www.yelp.com/biz/xvertuz-vapes-vernal"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Yelp"
                className="w-9 h-9 bg-[#101B2E] border border-[#1E2D45] rounded-lg flex items-center justify-center text-[#A9B4C7] hover:text-[#8A2BE2] hover:border-[#8A2BE2]/40 transition-all text-xs font-bold"
              >
                Y
              </a>
            </div>
          </div>

          {/* Locations grid */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {FOOTER_LOCATIONS.map((loc, i) => (
              <div key={i}>
                <div className="flex items-center gap-1.5 mb-2">
                  <MapPin size={12} className="text-[#8A2BE2]" />
                  <h4
                    className="text-sm text-[#F2F6FF] font-semibold"
                  >
                    {loc.city}
                    {loc.flagship && (
                      <span className="ml-1 text-[#39D353] text-xs">★</span>
                    )}
                  </h4>
                </div>
                <p className="text-[#A9B4C7] text-xs mb-1">{loc.address}</p>
                <a
                  href={`tel:${loc.phone.replace(/\D/g, "")}`}
                  className="flex items-center gap-1 text-xs text-[#A9B4C7] hover:text-[#F2F6FF] transition-colors"
                >
                  <Phone size={10} />
                  {loc.phone}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="section-divider mb-6" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A9B4C7]">
          <p>© {new Date().getFullYear()} Xvertuz. All rights reserved.</p>
          <p>Must be 21+ to purchase tobacco/nicotine products.</p>
        </div>
      </div>
    </footer>
  );
}
