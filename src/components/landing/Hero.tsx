import Image from "next/image";
import Button from "@/components/ui/Button";
import { DEMO_URL, SIGNUP_URL } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-beige/70 via-brand-cream to-brand-cream" />
      {/* Soft decorative blobs */}
      <div className="absolute -top-32 -right-20 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-3xl" />
      <div className="absolute top-1/3 -left-32 w-[400px] h-[400px] bg-brand-gold/[0.04] rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-16 sm:pt-12 sm:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* === Text content === */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm text-brand-gold text-sm font-semibold px-4 py-2 rounded-full mb-6 border border-brand-gold/10 shadow-sm">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
              </svg>
              AI-driven offerthantering
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.05] font-[family-name:var(--font-heading)]">
              Skapa offerter med{" "}
              <span className="text-brand-gold">din röst.</span>
              <br />
              Signera med{" "}
              <span className="text-brand-gold">BankID.</span>
            </h1>

            {/* Description */}
            <p className="mt-6 text-lg sm:text-xl text-brand-muted leading-relaxed max-w-xl">
              OffertDirekt hjälper hantverkare att skapa professionella offerter
              på sekunder, hålla koll på kunder och projekt – direkt från
              mobilen.
            </p>

            {/* CTA buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href={SIGNUP_URL} size="lg" className="group">
                <span className="flex items-center gap-2">
                  Skapa konto gratis
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </Button>
              <Button href={DEMO_URL} variant="outline" size="lg">
                Boka demo
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-10 grid grid-cols-3 gap-4 sm:gap-6 max-w-lg">
              <TrustIndicator
                title="Skapa på sekunder"
                subtitle="med din röst"
                icon={
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                }
              />
              <TrustIndicator
                title="Signera säkert"
                subtitle="med BankID"
                icon={
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                }
              />
              <TrustIndicator
                title="Allt samlat"
                subtitle="i mobilen"
                icon={
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
                  </svg>
                }
              />
            </div>
          </div>

          {/* === Phone mockup with badge & testimonial === */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-[280px] sm:w-[320px] lg:w-[340px]">
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

              {/* BankID circular badge */}
              <div className="hidden sm:flex absolute -top-4 -right-4 lg:-top-2 lg:-right-8 w-32 h-32 lg:w-36 lg:h-36 z-20 items-center justify-center">
                <CircularBadge />
              </div>

              {/* Testimonial card */}
              <div className="absolute -bottom-6 -left-6 sm:-left-10 lg:-left-16 w-56 sm:w-60 bg-white rounded-xl shadow-2xl shadow-brand-dark/15 p-4 border border-brand-beige/50 z-20">
                <div className="flex items-center gap-0.5 mb-2 text-brand-gold">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.922-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-brand-dark/80 leading-snug italic">
                  &quot;Snabbt, smidigt och proffsigt – en självklar del av min vardag.&quot;
                </p>
                <p className="mt-2 text-xs font-semibold text-brand-muted uppercase tracking-wider">
                  – Jonas, snickare
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* === Social proof bar === */}
      <div className="relative border-t border-brand-beige/70 bg-white/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          <ProofItem
            icon={
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M15 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm6 3a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
              </svg>
            }
            title="Byggd för"
            value="hantverkare"
          />
          <ProofItem
            icon={
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
            title="Sparar timmar"
            value="varje vecka"
          />
          <ProofItem
            icon={
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
              </svg>
            }
            title="Säkert"
            value="& pålitligt"
          />
        </div>
      </div>
    </section>
  );
}

/* === Helper components === */

function TrustIndicator({
  title,
  subtitle,
  icon,
}: {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-start gap-2">
      <div className="w-10 h-10 rounded-xl bg-brand-gold/10 text-brand-gold flex items-center justify-center">
        {icon}
      </div>
      <div>
        <div className="text-sm font-semibold text-brand-dark leading-tight">
          {title}
        </div>
        <div className="text-xs text-brand-muted leading-tight">{subtitle}</div>
      </div>
    </div>
  );
}

function ProofItem({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="text-brand-gold flex-shrink-0">{icon}</div>
      <div>
        <div className="text-sm font-semibold text-brand-dark leading-tight">
          {title}
        </div>
        <div className="text-xs text-brand-muted leading-tight">{value}</div>
      </div>
    </div>
  );
}

function CircularBadge() {
  return (
    <div className="relative w-full h-full">
      {/* Circular text using SVG path */}
      <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full animate-[spin_30s_linear_infinite]">
        <defs>
          <path
            id="circlePath"
            d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
          />
        </defs>
        <text fill="#1A1A1A" fontSize="18" fontWeight="700" letterSpacing="3" fontFamily="system-ui, sans-serif">
          <textPath href="#circlePath" startOffset="0%">
            SÄKERT &amp; ENKELT • MED BANKID •
          </textPath>
        </text>
      </svg>

      {/* Center badge */}
      <div className="absolute inset-0 m-auto w-16 h-16 lg:w-20 lg:h-20 bg-brand-gold rounded-full flex items-center justify-center shadow-lg">
        <svg className="w-8 h-8 lg:w-10 lg:h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      </div>
    </div>
  );
}
