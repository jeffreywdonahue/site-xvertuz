import { ShoppingBag, Users, MapPin, Coffee } from "lucide-react";

const FEATURES = [
  {
    icon: ShoppingBag,
    title: "Special Orders",
    desc: "Can't find it in-store? We'll order anything you need and notify you when it arrives.",
  },
  {
    icon: Users,
    title: "Staff Who Listen",
    desc: "Knowledgeable team that takes time to help you find exactly the right product.",
  },
  {
    icon: MapPin,
    title: "4 Locations",
    desc: "Vernal UT, Dinosaur CO, Pocatello ID & Rock Springs WY — serving the whole region.",
  },
  {
    icon: Coffee,
    title: "More Than a Vape Shop",
    desc: "Coffee, kombucha on tap, an oxygen bar, and pool tables at select locations.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 bg-[#0B1320]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#8A2BE2] text-sm font-semibold tracking-widest uppercase mb-3">
            Our Story
          </p>
          <h2
            className="text-6xl sm:text-7xl text-[#F2F6FF] mb-4"
            style={{ fontFamily: "var(--font-bebas), cursive" }}
          >
            About Xvertuz
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: story text */}
          <div className="space-y-6">
            <p className="text-[#A9B4C7] text-lg leading-relaxed border-l-2 border-[#8A2BE2]/50 pl-5">
              Discover premium smoke goods and accessories crafted for the ultimate
              experience. From high-quality pipes to unique accessories, we&apos;ve got
              everything you need to elevate your sessions.
            </p>
            <p className="text-[#A9B4C7] text-lg leading-relaxed border-l-2 border-[#39D353]/50 pl-5">
              Founded by two sisters, we&apos;ve grown into a vibrant space offering premium
              vape products, coffee, kombucha on tap, an oxygen bar, and pool tables.
              With exceptional service and a welcoming atmosphere, we&apos;re proud to be a
              hub for connection and relaxation.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {[
                { num: "4", label: "Locations" },
                { num: "4.7★", label: "Avg Rating" },
                { num: "270+", label: "Reviews" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-[#101B2E] border border-[#1E2D45] rounded-xl p-4 text-center"
                >
                  <p
                    className="text-3xl text-[#39D353]"
                    style={{ fontFamily: "var(--font-bebas), cursive" }}
                  >
                    {stat.num}
                  </p>
                  <p className="text-[#A9B4C7] text-xs uppercase tracking-wide mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: feature grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {FEATURES.map((feat, i) => {
              const Icon = feat.icon;
              return (
                <div
                  key={i}
                  className="bg-[#101B2E] border border-[#1E2D45] rounded-xl p-5 card-glow transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#8A2BE2]/15 flex items-center justify-center mb-3">
                    <Icon size={20} className="text-[#8A2BE2]" />
                  </div>
                  <h3
                    className="text-xl text-[#F2F6FF] mb-2"
                    style={{ fontFamily: "var(--font-bebas), cursive" }}
                  >
                    {feat.title}
                  </h3>
                  <p className="text-[#A9B4C7] text-sm leading-relaxed">{feat.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
