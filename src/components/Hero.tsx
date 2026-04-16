"use client";

import Image from "next/image";
import { MapPin, ChevronDown } from "lucide-react";

const HERO_BG =
  "https://places.googleapis.com/v1/places/ChIJdSIy2_VjRYcRvtDSuqR_ors/photos/AU_ZVEEu0cKnuCeAalPkQ-fYOhVxwpJf_3N-j3uC4VGQOKe1orXZ6amXNDmGpXxvtQ5abEeDuJT0rv6kr4zuvLOOpCb_l_Iudbke_l5z8iFx5dl2odeARhj7CRDtAPWPlBSAih-K5NoVb5Px96wCCR6uPl-cY8IY5RuQpL7PjRSB29sY_GZcX4y2CNMfJipUheONdF3CtgnXWR1ERk4MDYoJdEHPU7U53otXQrCyHyOsInwZ93Cxd1s2HhRhwphNlYs6qeou9p-G52A-DoAQDr2VYJydeR32kR7E2PuXemNPvE2XXMq3vUrnbau_i_zMW-a4v60S946eueI2BTTZhCgSSbJ4EoHlS9gaBDCXXsG9otoQwVjXNekFuzekgHweFxCWuTaZ2AI8JUGDH9Q9Xilp8OQF4aQpSYFQABTDWkmoBUoPL1A/media?maxWidthPx=1200&key=AIzaSyC7jI0eiMaGHdvPRJyt2ER56WKt_fI86V4";

export default function Hero() {
  const scrollToLocations = () => {
    const el = document.querySelector("#locations");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={HERO_BG}
          alt="Xvertuz store"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
          quality={75}
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1320]/90 via-[#0B1320]/70 to-[#0B1320]" />
        {/* Diagonal purple stripe */}
        <div className="hero-stripe" />
        {/* Additional depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#8A2BE2]/20 via-transparent to-[#00BFFF]/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-8 max-w-5xl mx-auto">
        {/* Logo badge */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <Image
            src="https://xvertuz.com/wp-content/uploads/2024/09/cropped-xvertuz-logo_2-270x270.png"
            alt="Xvertuz"
            width={64}
            height={64}
            className="rounded-full border-2 border-[#8A2BE2]/50"
            unoptimized
          />
        </div>

        {/* Main headline */}
        <h1
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-[#F2F6FF] leading-none mb-4"
          style={{ fontFamily: "var(--font-bebas), cursive" }}
        >
          Elevate Every{" "}
          <span className="text-neon">Puff</span>
        </h1>
        <h2
          className="text-4xl sm:text-5xl md:text-6xl text-[#A9B4C7] leading-none mb-8"
          style={{ fontFamily: "var(--font-bebas), cursive" }}
        >
          Quality You Can Trust
        </h2>

        <p className="text-[#A9B4C7] text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Premium smoke goods and accessories crafted for the ultimate experience.
          Vast selection, knowledgeable staff, fair prices — and we&apos;ll special
          order anything we don&apos;t carry.
        </p>

        {/* CTA group */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <button
            onClick={scrollToLocations}
            className="flex items-center gap-2 bg-[#39D353] text-[#0B1320] px-8 py-4 rounded-full text-lg font-bold hover:bg-[#2cb845] transition-all hover:scale-105 cursor-pointer border-none shadow-lg shadow-[#39D353]/20"
          >
            <MapPin size={20} />
            Find a Store
          </button>
          <a
            href="tel:4357898273"
            className="flex items-center gap-2 border border-[#8A2BE2]/60 text-[#F2F6FF] px-8 py-4 rounded-full text-lg font-medium hover:border-[#8A2BE2] hover:bg-[#8A2BE2]/10 transition-all"
          >
            (435) 789-8273
          </a>
        </div>

        {/* Location badge */}
        <div className="inline-flex items-center gap-2 bg-[#101B2E]/80 border border-[#8A2BE2]/30 rounded-full px-5 py-2 text-sm text-[#A9B4C7]">
          <MapPin size={14} className="text-[#8A2BE2]" />
          4 Locations: Vernal UT · Dinosaur CO · Pocatello ID · Rock Springs WY
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 z-10 flex flex-col items-center gap-2 text-[#A9B4C7]/60 animate-bounce">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ChevronDown size={20} />
      </div>
    </section>
  );
}
