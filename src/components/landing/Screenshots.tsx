"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";

const screenshots = [
  {
    src: "/screenshots/2.jpeg",
    title: "Tydlig översikt",
    subtitle: "Se status på alla offerter",
  },
  {
    src: "/screenshots/3.jpeg",
    title: "Beskriv jobbet",
    subtitle: "AI sköter resten",
  },
  {
    src: "/screenshots/4.jpeg",
    title: "Godkänn & skicka",
    subtitle: "Signera med BankID",
  },
];

function PhoneCard({
  src,
  title,
  subtitle,
}: {
  src: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="flex flex-col items-center text-center">
      {/* Title & subtitle */}
      <h3 className="text-2xl sm:text-3xl font-bold font-[family-name:var(--font-heading)] mb-1">
        {title}
      </h3>
      <p className="text-base sm:text-lg text-brand-muted mb-6 min-h-[1.75rem]">
        {subtitle}
      </p>

      {/* Phone mockup */}
      <div className="relative w-[240px] sm:w-[280px]">
        <div className="relative rounded-[2.5rem] bg-gradient-to-b from-gray-700 to-gray-900 p-[6px] shadow-2xl shadow-brand-dark/25">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-gray-900 rounded-b-2xl z-10" />
          <div className="rounded-[2.3rem] overflow-hidden bg-brand-cream">
            <Image
              src={src}
              alt={title}
              width={560}
              height={1218}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Screenshots() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  // Track which card is in view (mobile)
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onScroll = () => {
      const cardWidth = el.scrollWidth / screenshots.length;
      const idx = Math.round(el.scrollLeft / cardWidth);
      setActiveIdx(Math.max(0, Math.min(screenshots.length - 1, idx)));
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (idx: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.scrollWidth / screenshots.length;
    el.scrollTo({ left: cardWidth * idx, behavior: "smooth" });
  };

  return (
    <section id="screenshots" className="py-20 sm:py-28 bg-brand-beige/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Se appen i aktion"
          subtitle="En smidig upplevelse – från att skapa offerter till att följa upp projekt."
        />
      </div>

      {/* Desktop: grid */}
      <div className="hidden md:block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {screenshots.map((s) => (
            <PhoneCard key={s.title} {...s} />
          ))}
        </div>
      </div>

      {/* Mobile: horizontal scroll carousel */}
      <div className="md:hidden">
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide scroll-smooth pb-2"
          style={{
            scrollPaddingInline: "12%",
            paddingInline: "12%",
          }}
        >
          {screenshots.map((s) => (
            <div
              key={s.title}
              className="snap-center flex-shrink-0 w-full transition-transform duration-300"
            >
              <PhoneCard {...s} />
            </div>
          ))}
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {screenshots.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              aria-label={`Gå till skärmdump ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIdx === i
                  ? "w-8 bg-brand-gold"
                  : "w-2 bg-brand-gold/30 hover:bg-brand-gold/50"
              }`}
            />
          ))}
        </div>

        {/* Swipe hint */}
        <p className="text-center text-xs text-brand-muted/60 mt-4 flex items-center justify-center gap-1.5">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          Svep för att se fler
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </p>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}
