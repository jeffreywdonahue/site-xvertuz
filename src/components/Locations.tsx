"use client";

import { MapPin, Phone, Clock, Star, ExternalLink } from "lucide-react";

const LOCATIONS = [
  {
    name: "Xvertuz Vapes",
    address: "1089 US-40",
    city: "Vernal",
    state: "UT",
    zip: "84078",
    phone: "(435) 789-8273",
    flagship: true,
    rating: 4.7,
    reviewCount: 179,
    googleMapsUrl: "https://maps.app.goo.gl/eyCZaoQhhk9Q5SpV7",
    hours: {
      "Mon–Sat": "8:00 AM – 9:00 PM",
      "Sunday": "9:00 AM – 8:00 PM",
    },
  },
  {
    name: "Xvertuz Vapes",
    address: "206 Brontosaurus Blvd",
    city: "Dinosaur",
    state: "CO",
    zip: "81610",
    phone: "(970) 449-0331",
    flagship: false,
    rating: 4.7,
    reviewCount: 16,
    googleMapsUrl: "https://maps.app.goo.gl/3HzoiZgVEjDC1yMe8",
    hours: {
      "Mon–Fri": "7:30 AM – 9:00 PM",
      "Sat–Sun": "9:00 AM – 8:00 PM",
    },
  },
  {
    name: "Xvertuz",
    address: "301 S 4th Ave",
    city: "Pocatello",
    state: "ID",
    zip: "83201",
    phone: "(208) 417-4419",
    flagship: false,
    rating: 4.7,
    reviewCount: 24,
    googleMapsUrl: "https://maps.app.goo.gl/9tGtZgq4Uxz86oHm7",
    hours: {
      "Mon–Fri": "7:00 AM – 9:00 PM",
      "Sat–Sun": "8:00/9:00 AM – 8:00 PM",
    },
  },
  {
    name: "Xvertuz Rock Springs",
    address: "1301 Elk St",
    city: "Rock Springs",
    state: "WY",
    zip: "82901",
    phone: "(307) 522-5785",
    flagship: false,
    rating: 4.9,
    reviewCount: 50,
    googleMapsUrl: "https://maps.app.goo.gl/7Z8in8rVwFtoefAc9",
    hours: {
      "Mon–Thu": "8:00 AM – 9:00 PM",
      "Fri–Sat": "8:00 AM – 10:00 PM",
      "Sunday": "8:00 AM – 9:00 PM",
    },
  },
];

export default function Locations() {
  return (
    <section id="locations" className="py-24 px-4 sm:px-6 bg-[#0B1320]">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-[#8A2BE2] text-sm font-semibold tracking-widest uppercase mb-3">
            Visit Us
          </p>
          <h2
            className="text-6xl sm:text-7xl text-[#F2F6FF] mb-4"
            style={{ fontFamily: "var(--font-bebas), cursive" }}
          >
            Our Locations
          </h2>
          <p className="text-[#A9B4C7] text-lg max-w-xl mx-auto">
            Four stores across the region — each stocked with premium products
            and staffed by people who genuinely know what they&apos;re talking about.
          </p>
        </div>

        {/* Location grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {LOCATIONS.map((loc, i) => (
            <div
              key={i}
              className="loc-card relative bg-[#101B2E] border border-[#1E2D45] rounded-xl overflow-hidden card-glow transition-all duration-300 hover:-translate-y-1"
            >
              <div className="p-6">
                {/* Header row */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3
                        className="text-2xl text-[#F2F6FF]"
                        style={{ fontFamily: "var(--font-bebas), cursive" }}
                      >
                        {loc.city}, {loc.state}
                      </h3>
                      {loc.flagship && (
                        <span className="bg-[#8A2BE2]/20 border border-[#8A2BE2]/40 text-[#8A2BE2] text-xs px-2 py-0.5 rounded-full font-semibold">
                          ★ Flagship
                        </span>
                      )}
                    </div>
                    <p className="text-[#A9B4C7] text-sm">{loc.name}</p>
                  </div>
                  {/* Rating badge */}
                  <div className="text-right">
                    <div className="flex items-center gap-1 justify-end">
                      <Star size={14} className="text-[#F59E0B] fill-[#F59E0B]" />
                      <span className="text-[#F2F6FF] font-bold">{loc.rating}</span>
                    </div>
                    <p className="text-[#A9B4C7] text-xs">{loc.reviewCount} reviews</p>
                  </div>
                </div>

                {/* Divider */}
                <div className="section-divider mb-4" />

                {/* Address & Phone */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-start gap-2 text-sm text-[#A9B4C7]">
                    <MapPin size={14} className="text-[#8A2BE2] mt-0.5 shrink-0" />
                    <span>
                      {loc.address}, {loc.city}, {loc.state} {loc.zip}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Phone size={14} className="text-[#39D353] shrink-0" />
                    <a
                      href={`tel:${loc.phone.replace(/\D/g, "")}`}
                      className="text-[#F2F6FF] hover:text-[#39D353] transition-colors font-medium"
                    >
                      {loc.phone}
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="bg-[#0B1320]/60 rounded-lg p-3 mb-5">
                  <div className="flex items-center gap-1.5 mb-2">
                    <Clock size={13} className="text-[#8A2BE2]" />
                    <span className="text-xs text-[#A9B4C7] uppercase tracking-wider font-semibold">
                      Hours
                    </span>
                  </div>
                  <div className="space-y-1">
                    {Object.entries(loc.hours).map(([days, hours]) => (
                      <div key={days} className="flex justify-between text-xs">
                        <span className="text-[#A9B4C7]">{days}</span>
                        <span className="text-[#F2F6FF]">{hours}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <a
                  href={loc.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-[#8A2BE2]/15 border border-[#8A2BE2]/40 text-[#F2F6FF] rounded-lg py-3 text-sm font-semibold hover:bg-[#8A2BE2]/30 hover:border-[#8A2BE2]/70 transition-all"
                >
                  <MapPin size={15} className="text-[#39D353]" />
                  Get Directions
                  <ExternalLink size={12} className="text-[#A9B4C7]" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
