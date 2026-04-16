import { Zap, Droplets, Settings, FlaskConical, Layers, Package } from "lucide-react";

const CATEGORIES = [
  {
    icon: Zap,
    name: "Disposables",
    desc: "Single-use devices in 5%, 3%, and 0% nicotine strengths. Try before you commit.",
    accent: "#39D353",
  },
  {
    icon: Droplets,
    name: "Salt Nic",
    desc: "High-strength nicotine salts for smooth hits. Wide range of flavors in stock.",
    accent: "#00BFFF",
  },
  {
    icon: Settings,
    name: "Coils & Pods",
    desc: "Replacement coils and pods for all major brands. We keep the essentials stocked.",
    accent: "#8A2BE2",
  },
  {
    icon: FlaskConical,
    name: "E-Juice",
    desc: "House blends and top brand juices. Can't find your flavor? We'll order it.",
    accent: "#F59E0B",
  },
  {
    icon: Layers,
    name: "Tanks & Mods",
    desc: "Open-system tanks and regulated mods for experienced vapers who want more control.",
    accent: "#39D353",
  },
  {
    icon: Package,
    name: "Smoke Accessories",
    desc: "Hookahs, flavors, pipes, incense — plus CBD, kratom, and more under one roof.",
    accent: "#00BFFF",
  },
];

const FEATURE_PILLS = [
  "CBD & Delta Products",
  "Kratom",
  "Hookah Supplies",
  "Special Orders",
  "In-Store Demos",
  "Multi-Strength Options",
];

export default function Products() {
  return (
    <section id="products" className="py-24 px-4 sm:px-6 bg-[#101B2E]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#8A2BE2] text-sm font-semibold tracking-widest uppercase mb-3">
            Inventory
          </p>
          <h2
            className="text-6xl sm:text-7xl text-[#F2F6FF] mb-4"
            style={{ fontFamily: "var(--font-bebas), cursive" }}
          >
            What We Carry
          </h2>
          <p className="text-[#A9B4C7] text-lg max-w-xl mx-auto">
            A vast, diverse selection — and if we don&apos;t have it, we&apos;ll order it
            for you and let you know when it arrives.
          </p>
        </div>

        {/* Product category grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {CATEGORIES.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <div
                key={i}
                className="bg-[#0B1320] border border-[#1E2D45] rounded-xl p-6 card-glow transition-all duration-300 hover:-translate-y-1 group"
                style={{
                  borderLeft: `3px solid ${cat.accent}`,
                }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${cat.accent}20` }}
                >
                  <Icon size={20} style={{ color: cat.accent }} />
                </div>
                <h3
                  className="text-2xl text-[#F2F6FF] mb-2"
                  style={{ fontFamily: "var(--font-bebas), cursive" }}
                >
                  {cat.name}
                </h3>
                <p className="text-[#A9B4C7] text-sm leading-relaxed">{cat.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Feature pills */}
        <div className="flex flex-wrap justify-center gap-3">
          {FEATURE_PILLS.map((pill, i) => (
            <span
              key={i}
              className="bg-[#0B1320] border border-[#8A2BE2]/30 text-[#A9B4C7] text-sm px-4 py-1.5 rounded-full"
            >
              {pill}
            </span>
          ))}
        </div>

        {/* Messaging hook */}
        <div className="mt-12 text-center">
          <p
            className="text-3xl sm:text-4xl text-[#F2F6FF]"
            style={{ fontFamily: "var(--font-bebas), cursive" }}
          >
            Can&apos;t find it?{" "}
            <span className="text-neon">We&apos;ll order it for you.</span>
          </p>
          <p className="text-[#A9B4C7] mt-2">
            Ask any staff member — special orders are free and we&apos;ll notify you when it arrives.
          </p>
        </div>
      </div>
    </section>
  );
}
