import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";

const screenshots = [
  {
    src: "/screenshots/2.png",
    title: "Tydlig översikt",
    subtitle: "",
  },
  {
    src: "/screenshots/3.png",
    title: "Beskriv jobbet",
    subtitle: "AI sköter resten",
  },
  {
    src: "/screenshots/4.png",
    title: "Godkänn & skicka",
    subtitle: "Signera med BankID\nIntegrera för automatisk faktura",
  },
];

export default function Screenshots() {
  return (
    <section id="screenshots" className="py-20 sm:py-28 bg-brand-beige/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Se appen i aktion"
          subtitle="En smidig upplevelse – från att skapa offerter till att följa upp projekt."
        />

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {screenshots.map((screen) => (
            <div key={screen.title} className="flex flex-col items-center text-center">
              {/* Title & subtitle */}
              <h3 className="text-2xl sm:text-3xl font-bold font-[family-name:var(--font-heading)] mb-1">
                {screen.title}
              </h3>
              {screen.subtitle && (
                <p className="text-base sm:text-lg text-brand-muted mb-6 whitespace-pre-line">
                  {screen.subtitle}
                </p>
              )}
              {!screen.subtitle && <div className="mb-6" />}

              {/* Phone mockup */}
              <div className="relative w-[240px] sm:w-[280px]">
                <div className="rounded-[2.5rem] bg-gradient-to-b from-gray-700 to-gray-900 p-[6px] shadow-2xl shadow-brand-dark/25">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-gray-900 rounded-b-2xl z-10" />
                  <div className="rounded-[2.3rem] overflow-hidden bg-brand-cream">
                    <Image
                      src={screen.src}
                      alt={screen.title}
                      width={560}
                      height={1218}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
