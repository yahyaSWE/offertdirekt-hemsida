import { ReactNode } from "react";

type DocArticle = {
  slug: string;
  title: string;
  category: string;
  content: ReactNode;
};

export const articles: DocArticle[] = [
  {
    slug: "kom-igang",
    title: "Snabbstart",
    category: "Komma igång",
    content: (
      <>
        <p>
          Välkommen till OffertDirekt! Här visar vi dig hur du snabbt kommer
          igång med att skapa och skicka offerter.
        </p>
        <h3>1. Ladda ner appen</h3>
        <p>
          OffertDirekt finns tillgänglig för både iOS och Android. Ladda ner
          appen från App Store eller Google Play.
        </p>
        <h3>2. Skapa ditt konto</h3>
        <p>
          Öppna appen och registrera dig med din e-postadress. Fyll i ditt
          företagsnamn, organisationsnummer och kontaktuppgifter.
        </p>
        <h3>3. Ställ in ditt företag</h3>
        <p>
          Gå till <strong>Inst.</strong> (Inställningar) i navigeringen och
          fyll i:
        </p>
        <ul>
          <li>Företagsnamn och logotyp</li>
          <li>Adress och kontaktuppgifter</li>
          <li>Betalningsvillkor</li>
          <li>Om du erbjuder ROT-avdrag</li>
        </ul>
        <h3>4. Skapa din första offert</h3>
        <p>
          Tryck på <strong>+ Skapa ny offert</strong> på översiktssidan. Välj
          en kund, beskriv jobbet med din röst eller skriv manuellt, och
          granska offerten innan du skickar.
        </p>
      </>
    ),
  },
  {
    slug: "skapa-konto",
    title: "Skapa konto",
    category: "Komma igång",
    content: (
      <>
        <p>
          Att skapa ett konto i OffertDirekt tar mindre än en minut.
        </p>
        <h3>Registrering</h3>
        <ol>
          <li>Öppna appen och tryck på &quot;Skapa konto&quot;</li>
          <li>Ange din e-postadress och välj ett lösenord</li>
          <li>Fyll i ditt företagsnamn</li>
          <li>Bekräfta din e-post via länken som skickas till dig</li>
        </ol>
        <h3>Välj paket</h3>
        <p>
          Du kan börja med en gratis provperiod och sedan välja det paket som
          passar ditt behov. Alla paket inkluderar obegränsat antal offerter.
        </p>
      </>
    ),
  },
  {
    slug: "skapa-offert",
    title: "Skapa en offert",
    category: "Funktioner",
    content: (
      <>
        <p>
          OffertDirekt gör det enkelt att skapa professionella offerter – antingen
          med rösten eller genom att skriva manuellt.
        </p>
        <h3>Med röst</h3>
        <ol>
          <li>Tryck på <strong>+ Skapa ny offert</strong></li>
          <li>Välj eller lägg till en kund</li>
          <li>Tryck på mikrofonikonen och beskriv jobbet</li>
          <li>AI:n skapar en detaljerad arbetsbeskrivning och prisförslag</li>
          <li>Granska, justera vid behov och skicka</li>
        </ol>
        <h3>Manuellt</h3>
        <p>
          Du kan också välja att skriva jobbeskrivningen manuellt. Lägg till
          rader med antal, enhet och à-pris. Summan beräknas automatiskt.
        </p>
        <h3>Granska och skicka</h3>
        <p>
          Innan du skickar kan du förhandsgranska offerten precis som kunden
          kommer att se den. Tryck på <strong>Fortsätt till
          förhandsgranskning</strong> för att se resultatet. Offerten skickas
          via e-post eller SMS.
        </p>
      </>
    ),
  },
  {
    slug: "mallar",
    title: "Mallar & snabbval",
    category: "Funktioner",
    content: (
      <>
        <p>
          Spara tid genom att skapa mallar för vanliga jobb. En mall innehåller
          en fördefinierad arbetsbeskrivning som du kan återanvända.
        </p>
        <h3>Skapa en mall</h3>
        <ol>
          <li>Gå till <strong>Ny Offert</strong> och välj &quot;Ny mall&quot;</li>
          <li>Ge mallen ett namn, t.ex. &quot;Badrumsrenovering&quot;</li>
          <li>Välj en kategori (Badrum, Tak, Måleri, Kök, m.m.)</li>
          <li>Skriv en detaljerad jobbeskrivning/prompt</li>
          <li>Tryck på <strong>Skapa mall</strong></li>
        </ol>
        <h3>Använda en mall</h3>
        <p>
          När du skapar en ny offert kan du välja en sparad mall. Beskrivningen
          fylls i automatiskt och du kan anpassa den efter det specifika jobbet.
        </p>
        <h3>Kategorier</h3>
        <p>
          Använd kategorier som Badrum, Tak, Måleri, Kök, Golv, Fasad, Snickeri,
          VVS, El och Övrigt för att organisera dina mallar.
        </p>
      </>
    ),
  },
  {
    slug: "rot-avdrag",
    title: "ROT-avdrag",
    category: "Funktioner",
    content: (
      <>
        <p>
          OffertDirekt hanterar ROT-avdrag automatiskt i dina offerter.
        </p>
        <h3>Vad är ROT-avdrag?</h3>
        <p>
          ROT-avdraget innebär att kunden får 50% avdrag på arbetskostnaden,
          max 50 000 kr per person och år. Det gäller reparation, om- och
          tillbyggnad av bostäder.
        </p>
        <h3>Aktivera ROT-avdrag</h3>
        <ol>
          <li>Markera kunden som berättigad till ROT-avdrag i kundkortet</li>
          <li>När du skapar en offert, aktivera ROT-avdrags-reglaget</li>
          <li>Systemet beräknar automatiskt avdraget och visar totalpriset</li>
        </ol>
        <h3>I offerten</h3>
        <p>
          Kunden ser tydligt vad totalpriset är före och efter ROT-avdrag. Det
          framgår också vilken del som är arbetskostnad respektive material.
        </p>
      </>
    ),
  },
  {
    slug: "kundhantering",
    title: "Kundhantering",
    category: "Funktioner",
    content: (
      <>
        <p>
          Håll koll på alla dina kunder, deras kontaktuppgifter och offerthistorik.
        </p>
        <h3>Lägg till kund</h3>
        <p>
          Du kan lägga till kunder manuellt eller så skapas de automatiskt
          när du skickar en offert till en ny kund.
        </p>
        <h3>Kundinformation</h3>
        <ul>
          <li>Namn och kontaktuppgifter (e-post, telefon)</li>
          <li>Adress</li>
          <li>ROT-avdrag möjligt (ja/nej)</li>
          <li>Offerthistorik</li>
        </ul>
        <h3>Kundlistan</h3>
        <p>
          Gå till <strong>Kunder</strong> i navigeringen för att se alla dina
          kunder. Tryck på en kund för att se detaljer och tidigare offerter.
        </p>
      </>
    ),
  },
  {
    slug: "schemalagga",
    title: "Schemalägg projekt",
    category: "Funktioner",
    content: (
      <>
        <p>
          Koppla godkända offerter till projekt och schemalägg arbetet direkt
          i appen.
        </p>
        <h3>Skapa projekt från offert</h3>
        <ol>
          <li>Öppna en godkänd offert</li>
          <li>Tryck på <strong>Schemalägg projekt</strong></li>
          <li>Välj startdatum och beräknad slutdatum</li>
          <li>Projektet visas i din projektvy</li>
        </ol>
        <h3>Projektvyn</h3>
        <p>
          Under <strong>Projekt</strong> i navigeringen ser du alla pågående
          och kommande projekt i en kalendervy. Du kan enkelt flytta och
          omplanera jobb.
        </p>
      </>
    ),
  },
  {
    slug: "bankid",
    title: "BankID-signering",
    category: "Funktioner",
    content: (
      <>
        <p>
          Med BankID-signering blir dina offerter juridiskt bindande dokument.
          Tillgängligt från Basic-paketet och uppåt.
        </p>
        <h3>Hur det fungerar</h3>
        <ol>
          <li>Skapa och granska offerten som vanligt</li>
          <li>Skicka offerten till kunden</li>
          <li>Kunden öppnar offerten via länken i e-post/SMS</li>
          <li>Kunden godkänner och signerar med BankID</li>
          <li>Du får en notifikation att offerten är godkänd</li>
        </ol>
        <h3>Juridisk giltighet</h3>
        <p>
          En BankID-signerad offert är juridiskt bindande. Signaturens
          giltighet kan verifieras i efterhand. Offerten kan inte redigeras
          efter signering.
        </p>
      </>
    ),
  },
  {
    slug: "fortnox",
    title: "Fortnox",
    category: "Integrationer",
    content: (
      <>
        <p>
          Koppla OffertDirekt till Fortnox för att synka offerter och
          kunduppgifter automatiskt. Tillgängligt i Pro-paketet och uppåt.
        </p>
        <h3>Aktivera integration</h3>
        <ol>
          <li>Gå till <strong>Inst.</strong> &gt; <strong>Integrationer</strong></li>
          <li>Välj Fortnox och logga in med ditt Fortnox-konto</li>
          <li>Godkänn behörigheter</li>
          <li>Klart! Offerter synkas automatiskt</li>
        </ol>
        <h3>Vad synkas?</h3>
        <ul>
          <li>Godkända offerter skapas som offerter/order i Fortnox</li>
          <li>Kunduppgifter synkas mellan systemen</li>
          <li>Artiklar och prislistor kan importeras</li>
        </ul>
      </>
    ),
  },
  {
    slug: "visma",
    title: "Visma",
    category: "Integrationer",
    content: (
      <>
        <p>
          Integrera OffertDirekt med Visma eEkonomi för smidig bokföring.
          Tillgängligt i Pro-paketet och uppåt.
        </p>
        <h3>Aktivera integration</h3>
        <ol>
          <li>Gå till <strong>Inst.</strong> &gt; <strong>Integrationer</strong></li>
          <li>Välj Visma och logga in med ditt Visma-konto</li>
          <li>Godkänn behörigheter</li>
          <li>Klart!</li>
        </ol>
        <h3>Vad synkas?</h3>
        <ul>
          <li>Godkända offerter exporteras till Visma</li>
          <li>Kundregister hålls uppdaterat</li>
          <li>Fakturor kan skapas direkt från godkända offerter</li>
        </ul>
      </>
    ),
  },
];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}

export function getAllSlugs() {
  return articles.map((a) => a.slug);
}
