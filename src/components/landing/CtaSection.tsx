import Button from "@/components/ui/Button";
import { DEMO_URL, DOWNLOAD_URL } from "@/lib/constants";

export default function CtaSection() {
  return (
    <section
      id="boka-demo"
      className="py-20 sm:py-28 bg-gradient-to-br from-brand-gold to-brand-gold-dark relative overflow-hidden"
    >
      {/* Decorative circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-[family-name:var(--font-heading)] leading-tight">
          Redo att effektivisera ditt offertarbete?
        </h2>
        <p className="mt-6 text-lg text-white/80 max-w-xl mx-auto">
          Boka en kostnadsfri demo och se hur OffertDirekt kan spara dig timmar
          varje vecka.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button href={DEMO_URL} variant="white" size="lg">
            Boka en demo
          </Button>
          <Button href={DOWNLOAD_URL} variant="white-outline" size="lg">
            Ladda ner appen
          </Button>
        </div>
      </div>
    </section>
  );
}
