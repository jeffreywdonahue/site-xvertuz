import Image from "next/image";
import { Phone, MapPin } from "lucide-react";

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 1.09.044 1.613.115V7.93h-1.143c-1.645 0-2.155.621-2.155 2.237v1.858h3.17l-.548 3.667h-2.622v8.182C18.996 23.163 24 18.097 24 12A12 12 0 1 0 9.101 23.691z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.668 1.0745-1.3367 1.3802-2.1272.2957-.7637.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"/>
  </svg>
);

const YelpIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M20.16 12.594l-4.995 1.433c-.96.276-1.74-.8-1.176-1.63l2.905-4.308a1.072 1.072 0 0 1 1.596-.206 9.194 9.194 0 0 1 2.364 3.252 1.073 1.073 0 0 1-.693 1.459zm-4.49 3.26l4.936 1.63a1.073 1.073 0 0 1 .6 1.488 9.2 9.2 0 0 1-2.56 3.09 1.073 1.073 0 0 1-1.592-.283l-2.688-4.39c-.55-.9.336-1.96 1.304-1.535zm-3.895 1.08l.42 5.204a1.073 1.073 0 0 1-.948 1.2 9.217 9.217 0 0 1-3.969-.322 1.073 1.073 0 0 1-.677-1.396l1.925-4.86c.41-.972 1.758-.81 1.95.174zm-.87-4.552L6.69 10.86c-.876-.564-.476-1.895.57-1.895h5.173a1.073 1.073 0 0 1 .907 1.65L11.164 12.3c-.2.31-.72.392-1.012.082h.002zm-1.44-2.55L5.463 5.56a1.073 1.073 0 0 1 .102-1.595A9.2 9.2 0 0 1 8.87 2.28a1.073 1.073 0 0 1 1.307.856l.783 5.18c.15.98-.94 1.633-1.724.997z"/>
  </svg>
);

const SOCIAL_LINKS = [
  { label: "Facebook", href: "https://www.facebook.com/xvertuz/", icon: FacebookIcon },
  { label: "Instagram", href: "https://www.instagram.com/xvertuzvapes/", icon: InstagramIcon },
  { label: "Yelp", href: "https://www.yelp.com/biz/xvertuz-vapes-vernal", icon: YelpIcon },
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
                  className="w-10 h-10 bg-[#101B2E] border border-[#1E2D45] rounded-lg flex items-center justify-center text-[#A9B4C7] hover:text-[#F2F6FF] hover:border-[#8A2BE2]/60 hover:bg-[#8A2BE2]/10 transition-all duration-300 hover:scale-110"
                >
                  <s.icon />
                </a>
              ))}
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
