// JSON-LD schema — url will be set to placeholder and updated after deploy

const SCHEMA = [
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Xvertuz Vapes",
    description:
      "Premium vape and smoke shop offering disposables, salt nic, CBD, kratom, hookahs and accessories. Founded by two sisters in Vernal, Utah.",
    telephone: "(435) 789-8273",
    url: "https://site-xvertuz.vercel.app",
    logo: "https://xvertuz.com/wp-content/uploads/2024/09/cropped-xvertuz-logo_2-270x270.png",
    image: "https://xvertuz.com/wp-content/uploads/2024/09/cropped-xvertuz-logo_2-270x270.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1089 US-40",
      addressLocality: "Vernal",
      addressRegion: "UT",
      postalCode: "84078",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 40.4534051,
      longitude: -109.5071206,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "08:00",
        closes: "21:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday"],
        opens: "09:00",
        closes: "20:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.7",
      reviewCount: "179",
    },
    sameAs: [
      "https://www.facebook.com/xvertuz/",
      "https://www.instagram.com/xvertuzvapes/",
      "https://www.yelp.com/biz/xvertuz-vapes-vernal",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Xvertuz Vapes — Dinosaur",
    telephone: "(970) 449-0331",
    url: "https://site-xvertuz.vercel.app",
    address: {
      "@type": "PostalAddress",
      streetAddress: "206 Brontosaurus Blvd",
      addressLocality: "Dinosaur",
      addressRegion: "CO",
      postalCode: "81610",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 40.2455863,
      longitude: -109.00794979999999,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.7",
      reviewCount: "16",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Xvertuz — Pocatello",
    telephone: "(208) 417-4419",
    url: "https://site-xvertuz.vercel.app",
    address: {
      "@type": "PostalAddress",
      streetAddress: "301 S 4th Ave",
      addressLocality: "Pocatello",
      addressRegion: "ID",
      postalCode: "83201",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 42.8639261,
      longitude: -112.442882,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.7",
      reviewCount: "24",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Xvertuz Rock Springs",
    telephone: "(307) 522-5785",
    url: "https://site-xvertuz.vercel.app",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1301 Elk St",
      addressLocality: "Rock Springs",
      addressRegion: "WY",
      postalCode: "82901",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 41.598831499999996,
      longitude: -109.23102879999999,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "50",
    },
  },
];

export default function Schema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }}
    />
  );
}
