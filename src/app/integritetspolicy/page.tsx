import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Integritetspolicy",
  description:
    "Så hanterar OffertDirekt dina personuppgifter enligt GDPR. Läs vad vi samlar in, hur vi lagrar data och dina rättigheter.",
  alternates: {
    canonical: "/integritetspolicy/",
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-8">
        <Link href="/" className="text-sm text-brand-gold hover:underline">
          &larr; Tillbaka till startsidan
        </Link>
      </div>

      <h1 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-heading)] mb-2">
        Integritetspolicy
      </h1>
      <p className="text-brand-muted mb-10">Senast uppdaterad: 2026-04-14</p>

      <div className="space-y-10 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:font-[family-name:var(--font-heading)] [&_h2]:mb-3 [&_p]:text-brand-dark/80 [&_p]:leading-relaxed [&_p]:mb-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1 [&_li]:text-brand-dark/80 [&_strong]:text-brand-dark">
        {/* 1 */}
        <section>
          <h2>1. Introduktion</h2>
          <p>
            OffertDirekt (&quot;vi&quot;, &quot;oss&quot;, &quot;vår&quot;) värnar om din personliga
            integritet. Denna integritetspolicy förklarar hur vi samlar in,
            använder, lagrar och skyddar dina personuppgifter när du använder
            vår mobilapp och tillhörande tjänster.
          </p>
          <p>
            Genom att använda OffertDirekt godkänner du denna policy. Om du
            inte samtycker ber vi dig att inte använda tjänsten.
          </p>
        </section>

        {/* 2 */}
        <section>
          <h2>2. Personuppgiftsansvarig</h2>
          <p>
            Personuppgiftsansvarig för behandlingen av dina uppgifter är det
            företag som tillhandahåller OffertDirekt-tjänsten. Kontakta oss
            via e-post om du har frågor om vår hantering av personuppgifter.
          </p>
        </section>

        {/* 3 */}
        <section>
          <h2>3. Vilka uppgifter vi samlar in</h2>
          <p>Vi samlar in följande kategorier av personuppgifter:</p>

          <p><strong>Kontouppgifter</strong></p>
          <ul>
            <li>Namn och e-postadress</li>
            <li>Telefonnummer</li>
            <li>Företagsnamn och organisationsnummer</li>
            <li>Lösenord (krypterat)</li>
          </ul>

          <p><strong>Kunduppgifter du registrerar</strong></p>
          <ul>
            <li>Kunders namn, e-post, telefon och adress</li>
            <li>Personnummer (om ROT-avdrag används)</li>
          </ul>

          <p><strong>Offert- och projektdata</strong></p>
          <ul>
            <li>Offertinnehåll, priser och beskrivningar</li>
            <li>Projektdatum och kommentarer</li>
            <li>Signeringsdata (vid BankID-signering)</li>
          </ul>

          <p><strong>Teknisk data</strong></p>
          <ul>
            <li>Enhetstyp och operativsystem</li>
            <li>IP-adress</li>
            <li>Appversion</li>
            <li>Kraschloggar och prestationsdata</li>
          </ul>

          <p><strong>Röstdata</strong></p>
          <ul>
            <li>
              Röstinspelningar som du gör för att skapa offerter transkriberas
              till text och sparas <strong>inte</strong> som ljudfiler efter
              transkribering
            </li>
          </ul>
        </section>

        {/* 4 */}
        <section>
          <h2>4. Hur vi använder dina uppgifter</h2>
          <p>Vi behandlar dina personuppgifter för att:</p>
          <ul>
            <li>Tillhandahålla och förbättra OffertDirekt-tjänsten</li>
            <li>Skapa och hantera ditt konto</li>
            <li>Generera offerter med hjälp av AI baserat på din beskrivning</li>
            <li>Skicka offerter till dina kunder via e-post</li>
            <li>Hantera BankID-signering via vår signeringspartner</li>
            <li>Beräkna ROT-avdrag med kundens personnummer</li>
            <li>Synka data med Fortnox eller Visma (om du aktiverat integrationen)</li>
            <li>Skicka tjänstemeddelanden, fakturor och notifikationer</li>
            <li>Förebygga missbruk och säkerställa tjänstens säkerhet</li>
          </ul>
        </section>

        {/* 5 */}
        <section>
          <h2>5. Rättslig grund</h2>
          <p>Vi behandlar dina uppgifter med stöd av följande rättsliga grunder:</p>
          <ul>
            <li>
              <strong>Avtal</strong> — behandlingen är nödvändig för att
              tillhandahålla tjänsten du begärt (Art. 6.1.b GDPR)
            </li>
            <li>
              <strong>Berättigat intresse</strong> — för att förbättra tjänsten,
              förebygga bedrägerier och säkerställa IT-säkerhet (Art. 6.1.f GDPR)
            </li>
            <li>
              <strong>Rättslig förpliktelse</strong> — bokföring och
              skattelagstiftning (Art. 6.1.c GDPR)
            </li>
            <li>
              <strong>Samtycke</strong> — för marknadsföring via e-post, om
              tillämpligt (Art. 6.1.a GDPR)
            </li>
          </ul>
        </section>

        {/* 6 */}
        <section>
          <h2>6. Delning med tredje part</h2>
          <p>Vi delar dina uppgifter med följande kategorier av mottagare:</p>
          <ul>
            <li>
              <strong>E-postleverantör</strong> — för att skicka offerter och
              notifikationer till dig och dina kunder
            </li>
            <li>
              <strong>BankID / Signeringstjänst</strong> — personnummer och
              offertdata skickas till vår signeringspartner vid BankID-signering
            </li>
            <li>
              <strong>Fortnox / Visma</strong> — offert- och kunddata synkas
              om du aktiverat integrationen
            </li>
            <li>
              <strong>Hosting- och molntjänster</strong> — data lagras hos
              certifierade leverantörer inom EU/EES
            </li>
            <li>
              <strong>AI-tjänst</strong> — anonymiserad text skickas för att
              generera offertbeskrivningar
            </li>
          </ul>
          <p>
            Vi säljer <strong>aldrig</strong> dina personuppgifter till tredje part.
          </p>
        </section>

        {/* 7 */}
        <section>
          <h2>7. Lagring och säkerhet</h2>
          <p>
            Dina uppgifter lagras på servrar inom EU/EES. Vi använder
            branschstandardiserad kryptering (TLS/SSL) för data i transit och
            krypterad lagring för känsliga uppgifter som lösenord och
            personnummer.
          </p>
          <p>
            Vi behåller dina uppgifter så länge du har ett aktivt konto. Om du
            avslutar ditt konto raderas dina personuppgifter inom 30 dagar,
            med undantag för data vi är skyldiga att behålla enligt lag
            (t.ex. bokföringslagen, 7 år).
          </p>
        </section>

        {/* 8 */}
        <section>
          <h2>8. Dina rättigheter</h2>
          <p>Enligt GDPR har du rätt att:</p>
          <ul>
            <li>
              <strong>Få tillgång</strong> — begära en kopia av dina
              personuppgifter
            </li>
            <li>
              <strong>Rättelse</strong> — korrigera felaktiga eller ofullständiga
              uppgifter
            </li>
            <li>
              <strong>Radering</strong> — begära att vi raderar dina uppgifter
              (&quot;rätten att bli glömd&quot;)
            </li>
            <li>
              <strong>Begränsning</strong> — begränsa behandlingen av dina
              uppgifter under vissa omständigheter
            </li>
            <li>
              <strong>Dataportabilitet</strong> — få dina uppgifter i ett
              maskinläsbart format
            </li>
            <li>
              <strong>Invändning</strong> — invända mot behandling baserad på
              berättigat intresse
            </li>
            <li>
              <strong>Återkalla samtycke</strong> — om behandlingen baseras på
              samtycke kan du när som helst återkalla det
            </li>
          </ul>
          <p>
            Kontakta oss via e-post för att utöva dina rättigheter. Vi
            besvarar din begäran inom 30 dagar.
          </p>
        </section>

        {/* 9 */}
        <section>
          <h2>9. Cookies och spårning</h2>
          <p>
            Vår webbplats använder nödvändiga cookies för att säkerställa
            grundläggande funktionalitet. Vi använder inga tredjepartscookies
            för spårning eller reklam.
          </p>
          <p>
            Mobilappen använder inga cookies. Anonymiserad
            användningsstatistik kan samlas in för att förbättra tjänsten.
          </p>
        </section>

        {/* 10 */}
        <section>
          <h2>10. Barns integritet</h2>
          <p>
            OffertDirekt riktar sig till företag och yrkesverksamma. Vi samlar
            inte medvetet in personuppgifter från barn under 16 år.
          </p>
        </section>

        {/* 11 */}
        <section>
          <h2>11. Ändringar i policyn</h2>
          <p>
            Vi kan uppdatera denna integritetspolicy. Vid väsentliga ändringar
            meddelar vi dig via e-post eller i appen. Den senaste versionen
            finns alltid tillgänglig på denna sida.
          </p>
        </section>

        {/* 12 */}
        <section>
          <h2>12. Kontakt och tillsynsmyndighet</h2>
          <p>
            Har du frågor om vår integritetspolicy eller hur vi behandlar dina
            uppgifter? Kontakta oss:
          </p>
          <ul>
            <li>
              <strong>E-post:</strong> info@offertdirekt.app
            </li>
          </ul>
          <p>
            Du har även rätt att lämna klagomål till{" "}
            <strong>Integritetsskyddsmyndigheten (IMY)</strong> om du anser att
            vi behandlar dina uppgifter felaktigt.
          </p>
          <ul>
            <li>Webb: <a href="https://www.imy.se" className="text-brand-gold hover:underline" target="_blank" rel="noopener noreferrer">www.imy.se</a></li>
          </ul>
        </section>
      </div>
    </div>
  );
}
