"use client";

import { useState } from "react";
import { Star, Quote } from "lucide-react";

const REVIEWS = [
  {
    author: "marika neis",
    rating: 5,
    text: "Decent selection of hookahs and flavors, incense, some cute backpacks and tons of other goodies available inside! There was a green haired lady that helped me this morning. She was the sweetest ever! I'll definitely be returning!",
    date: "2026-01-03",
    location: "Vernal, UT",
  },
  {
    author: "James Delheimer",
    rating: 5,
    text: "Love this place! The selection is vast and wide. Although recent changes in the laws in Utah have seriously screwed them, because big tobacco has Utah in their pocket! The employees are awesome, super kind and helpful people. Thank you for your great customer service folks!",
    date: "2025-08-30",
    location: "Vernal, UT",
  },
  {
    author: "ellen Zurcher",
    rating: 5,
    text: "This is a great store!! There's an amazing selection of items and if they don't have what you'd like they order it for you! Highly recommend.",
    date: "2025-12-17",
    location: "Vernal, UT",
  },
  {
    author: "Page",
    rating: 5,
    text: "Very knowledgeable and friendly! Took their time helping me look at different products.",
    date: "2025-10-24",
    location: "Vernal, UT",
  },
  {
    author: "Dustin Kearney",
    rating: 5,
    text: "Great vape shop with a very diverse selection and the best prices in the Basin\n\nHighly recommended for all vape, CBD, smoking accessories as well as a huge Kratom selection!\n\nAsk for Robert, he is very knowledgeable about every product they have in stock and they also take recommendations for new products and will usually order them for you.\nThey will even let you know when they arrive.",
    date: "2020-08-29",
    location: "Vernal, UT",
  },
  {
    author: "Mandy Jenne",
    rating: 5,
    text: "The lady working was Very helpful and very friendly.\nThe have 5%, 3% and 0% vapes and that makes it nice for those trying to quit or those that want less nicotine. Highly recommend!",
    date: "2025-07-06",
    location: "Vernal, UT",
  },
  {
    author: "Jeremy Bennett",
    rating: 5,
    text: "Fantastic service and product selections.  These guys and gals are always on top of the game, and always have fantastic customer service.  I will absolutely continue doing business with Xvertus!",
    date: "2025-10-30",
    location: "Vernal, UT",
  },
  {
    author: "frank richins",
    rating: 5,
    text: "I shop here regularly. Awesome people and decent prices. I definitely recommend shopping here.😎",
    date: "2025-12-05",
    location: "Vernal, UT",
  },
  {
    author: "Levi McFadden",
    rating: 5,
    text: "Great service and decent prices even though they can charge what they want sence utah banned vapes",
    date: "2025-08-18",
    location: "Vernal, UT",
  },
  {
    author: "Charlie Muir",
    rating: 4,
    text: "Only place to get a vape. It has a good variety of the flavor you would want. They are loosing some very good vaped(geekbar). Good service can explain very well what each one is. There talking about opening a small café there, will be intrested to see the food that will be served.",
    date: "2025-08-26",
    location: "Vernal, UT",
  },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          size={14}
          className={i <= rating ? "text-[#F59E0B] fill-[#F59E0B]" : "text-[#1E2D45]"}
        />
      ))}
    </div>
  );
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  });
}

export default function Reviews() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? REVIEWS : REVIEWS.slice(0, 6);

  return (
    <section id="reviews" className="py-24 px-4 sm:px-6 bg-[#0B1320]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#8A2BE2] text-sm font-semibold tracking-widest uppercase mb-3">
            Social Proof
          </p>
          <h2
            className="text-6xl sm:text-7xl text-[#F2F6FF] mb-4"
            style={{ fontFamily: "var(--font-bebas), cursive" }}
          >
            What Customers Say
          </h2>

          {/* Aggregate rating */}
          <div className="inline-flex items-center gap-3 bg-[#101B2E] border border-[#1E2D45] rounded-full px-6 py-3 mt-2">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={16} className="text-[#F59E0B] fill-[#F59E0B]" />
              ))}
            </div>
            <span className="text-[#F2F6FF] font-bold">4.7 avg rating</span>
            <span className="text-[#A9B4C7] text-sm">across all locations</span>
          </div>
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {visible.map((review, i) => (
            <div
              key={i}
              className="bg-[#101B2E] border border-[#1E2D45] rounded-xl p-5 card-glow transition-all duration-300 flex flex-col"
            >
              {/* Quote icon */}
              <Quote size={24} className="text-[#8A2BE2]/40 mb-3" />

              {/* Review text — verbatim */}
              <p className="text-[#A9B4C7] text-sm leading-relaxed flex-1 whitespace-pre-line">
                &quot;{review.text}&quot;
              </p>

              {/* Footer */}
              <div className="mt-4 pt-4 border-t border-[#1E2D45]">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[#F2F6FF] font-semibold text-sm">{review.author}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Stars rating={review.rating} />
                      <span className="text-[#A9B4C7] text-xs">
                        {formatDate(review.date)}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs bg-[#8A2BE2]/15 border border-[#8A2BE2]/30 text-[#8A2BE2] px-2.5 py-1 rounded-full">
                    {review.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show more / less */}
        {REVIEWS.length > 6 && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="border border-[#8A2BE2]/40 text-[#F2F6FF] px-8 py-3 rounded-full text-sm font-semibold hover:bg-[#8A2BE2]/10 hover:border-[#8A2BE2]/70 transition-all cursor-pointer"
            >
              {showAll ? "Show Less" : `Show All ${REVIEWS.length} Reviews`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
