import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-baseline mb-4">
              <Image src="/logo.svg" alt="O" width={32} height={35} className="h-[1.45em] w-auto self-end relative bottom-[0.18em] -mr-[1px] invert" />
              <span className="text-xl font-bold font-[family-name:var(--font-heading)] text-brand-gold">
                ffert
              </span>
              <span className="text-xl font-bold font-[family-name:var(--font-heading)] text-white ml-1">
                Direkt
              </span>
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              Skapa professionella offerter snabbt och enkelt. Byggd för svenska hantverkare.
            </p>
          </div>

          {/* Produkt */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Produkt
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/#funktioner" className="text-sm hover:text-brand-gold transition-colors">
                  Funktioner
                </Link>
              </li>
              <li>
                <Link href="/#priser" className="text-sm hover:text-brand-gold transition-colors">
                  Priser
                </Link>
              </li>
              <li>
                <Link href="/docs" className="text-sm hover:text-brand-gold transition-colors">
                  Dokumentation
                </Link>
              </li>
            </ul>
          </div>

          {/* Företaget */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Företaget
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm hover:text-brand-gold transition-colors">
                  Om oss
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-brand-gold transition-colors">
                  Kontakt
                </Link>
              </li>
              <li>
                <Link href="/#boka-demo" className="text-sm hover:text-brand-gold transition-colors">
                  Boka demo
                </Link>
              </li>
            </ul>
          </div>

          {/* Ladda ner */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Ladda ner
            </h4>
            <div className="space-y-3">
              <Link
                href="#download"
                className="flex items-center gap-2 text-sm hover:text-brand-gold transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                </svg>
                App Store
              </Link>
              <Link
                href="#download"
                className="flex items-center gap-2 text-sm hover:text-brand-gold transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-1.707l2.386 1.381c.528.306.528 1.073 0 1.379l-2.386 1.382-2.54-2.54 2.54-2.602zM5.864 2.658L16.8 8.99l-2.301 2.302-8.635-8.634z" />
                </svg>
                Google Play
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-white/40">
          &copy; {new Date().getFullYear()} OffertDirekt. Alla rättigheter förbehållna.
        </div>
      </div>
    </footer>
  );
}
