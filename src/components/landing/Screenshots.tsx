import SectionHeading from "@/components/ui/SectionHeading";

const screenshots = [
  { src: "/screenshots/screen1.png", alt: "Skapa ny mall" },
  { src: "/screenshots/screen2.png", alt: "Redigera offert" },
  { src: "/screenshots/screen3.png", alt: "Granska offert" },
  { src: "/screenshots/screen4.png", alt: "Översikt" },
];

export default function Screenshots() {
  return (
    <section id="screenshots" className="py-20 sm:py-28 bg-brand-beige/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Se appen i aktion"
          subtitle="En smidig upplevelse – från att skapa offerter till att följa upp projekt."
        />

        {/* Scroll container */}
        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 -mx-4 px-4 scrollbar-hide">
          {screenshots.map((screen) => (
            <div
              key={screen.alt}
              className="snap-center flex-shrink-0 w-[260px] sm:w-[280px]"
            >
              <div className="rounded-[2.5rem] bg-brand-dark p-2.5 shadow-xl shadow-brand-dark/20">
                <div className="rounded-[2rem] bg-brand-cream overflow-hidden aspect-[9/19.5] flex items-center justify-center">
                  <div className="text-center p-6">
                    <svg
                      className="w-12 h-12 mx-auto mb-3 text-brand-gold/30"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5a1.5 1.5 0 001.5-1.5V4.5a1.5 1.5 0 00-1.5-1.5H3.75a1.5 1.5 0 00-1.5 1.5v15a1.5 1.5 0 001.5 1.5z"
                      />
                    </svg>
                    <p className="text-xs text-brand-muted/60">{screen.alt}</p>
                  </div>
                </div>
              </div>
              <p className="text-center text-sm text-brand-muted mt-3 font-medium">
                {screen.alt}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}
