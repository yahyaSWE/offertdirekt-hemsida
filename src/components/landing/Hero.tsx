import Image from "next/image";
import Button from "@/components/ui/Button";
import { DEMO_URL, DOWNLOAD_URL } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-beige/50 to-brand-cream" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-10 sm:pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-brand-gold/10 text-brand-gold text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
              </svg>
              AI-driven offerthantering
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight font-[family-name:var(--font-heading)]">
              Skapa offerter med{" "}
              <span className="text-brand-gold">din röst.</span>
              <br />
              Signera med{" "}
              <span className="text-brand-gold">BankID.</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-brand-muted leading-relaxed max-w-lg">
              OffertDirekt hjälper hantverkare att skapa professionella offerter
              på sekunder, hålla koll på kunder och projekt – direkt från mobilen.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button href={DOWNLOAD_URL} size="lg">
                Ladda ner appen
              </Button>
              <Button href={DEMO_URL} variant="outline" size="lg">
                Boka demo
              </Button>
            </div>

            <div className="mt-8 flex items-center gap-6 text-sm text-brand-muted">
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-brand-green" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Gratis att testa
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-brand-green" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Ingen bindningstid
              </div>
            </div>
          </div>

          {/* Phone mockup with hero screenshot */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-[280px] sm:w-[320px]">
              {/* Phone frame */}
              <div className="relative rounded-[3rem] bg-gradient-to-b from-gray-700 to-gray-900 p-[6px] shadow-2xl shadow-brand-dark/30">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl z-10" />
                <div className="rounded-[2.7rem] overflow-hidden bg-brand-cream">
                  <Image
                    src="/screenshots/1.jpeg"
                    alt="OffertDirekt-appen visar startsida för hantverkare med offertöversikt"
                    width={640}
                    height={1386}
                    className="w-full h-auto"
                    priority
                  />
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-brand-gold/10 rounded-full blur-2xl -z-0" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-brand-gold/5 rounded-full blur-3xl -z-0" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
