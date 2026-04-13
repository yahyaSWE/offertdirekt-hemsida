import { ReactNode } from "react";

type DocArticle = {
  slug: string;
  title: string;
  category: string;
  content: ReactNode;
};

export const articles: DocArticle[] = [
  /* ===========================
     KOMMA IGÅNG
     =========================== */
  {
    slug: "kom-igang",
    title: "Kom igång",
    category: "Komma igång",
    content: (
      <>
        <h3>Skapa konto</h3>
        <ol>
          <li>Öppna OffertDirekt-appen</li>
          <li>Tryck <strong>&quot;Skapa konto&quot;</strong></li>
          <li>Ange din <strong>e-postadress</strong> och ett <strong>lösenord</strong> (minst 6 tecken)</li>
          <li>Fyll i ditt <strong>företagsnamn</strong> (obligatoriskt)</li>
          <li>Välj din <strong>bransch</strong> — AI:n anpassar offertförslag efter detta</li>
          <li>Fyll eventuellt i telefon, e-post och adress (kan göras senare)</li>
          <li>Tryck <strong>&quot;Kom igång&quot;</strong></li>
        </ol>
        <p>Du får automatiskt <strong>14 dagars gratis provperiod</strong> på Starter-planen.</p>

        <h3>Logga in på befintligt konto</h3>
        <ol>
          <li>Tryck <strong>&quot;Logga in&quot;</strong> på startsidan</li>
          <li>Ange e-post och lösenord</li>
          <li>Tryck <strong>&quot;Logga in&quot;</strong></li>
        </ol>

        <h3>Logga ut</h3>
        <p>Gå till <strong>Inställningar → Logga ut</strong> längst ner på sidan.</p>
      </>
    ),
  },
  {
    slug: "oversikt",
    title: "Översikt / Startsida",
    category: "Komma igång",
    content: (
      <>
        <p>Startsidan ger dig en snabb överblick över din affär:</p>
        <table>
          <thead>
            <tr><th>Sektion</th><th>Vad visas</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>Statistik</strong></td><td>Antal offerter denna månad, antal godkända och konverteringsgrad, totalt värde av godkända offerter</td></tr>
            <tr><td><strong>Väntar på svar</strong></td><td>Offerter du skickat som kunden ännu inte svarat på</td></tr>
            <tr><td><strong>Kommande projekt</strong></td><td>Projekt inplanerade de närmaste dagarna</td></tr>
            <tr><td><strong>Senaste offerter</strong></td><td>Dina 5 senaste offerter med status och belopp</td></tr>
          </tbody>
        </table>
        <p>Tryck på valfri offert eller projekt för att öppna detaljvyn.</p>
      </>
    ),
  },

  /* ===========================
     OFFERTER
     =========================== */
  {
    slug: "skapa-offert",
    title: "Skapa offert med AI",
    category: "Offerter",
    content: (
      <>
        <p>Tryck på <strong>&quot;+ Ny offert&quot;</strong> i navigationsfältet.</p>

        <h3>Textinmatning</h3>
        <p>Beskriv jobbet med egna ord i textrutan, t.ex.:</p>
        <blockquote>&quot;Badrumsrenovering 8 kvm, byta kakel och klinker, ny toalett och handfat, inkl. rivning&quot;</blockquote>
        <p>AI:n genererar sedan en komplett offert med rader, priser och beskrivning.</p>

        <h3>Röstinmatning</h3>
        <ol>
          <li>Tryck på <strong>mikrofon-ikonen</strong></li>
          <li>Bevilja mikrofonbehörighet om du uppmanas</li>
          <li>Beskriv jobbet muntligt</li>
          <li>Tryck för att avsluta inspelningen</li>
          <li>Texten transkriberas automatiskt</li>
        </ol>
        <p>Du kan kombinera röst och text — lägg till mer information efter transkriberingen.</p>

        <h3>Använda en mall</h3>
        <ol>
          <li>Tryck på <strong>mall-ikonen</strong> längst upp</li>
          <li>Sök efter eller välj en mall (t.ex. &quot;Takrenovering&quot;, &quot;Fönsterputs&quot;)</li>
          <li>Mallen fyller i beskrivningsfältet — anpassa sedan med specifika detaljer</li>
        </ol>

        <h3>Tips för bästa resultat</h3>
        <ul>
          <li>Ange <strong>yta eller mängd</strong> (t.ex. &quot;20 kvm&quot;, &quot;15 meter&quot;)</li>
          <li>Nämn <strong>specifika material</strong> om du vet</li>
          <li>Beskriv om jobbet <strong>inkluderar rivning/bortforsling</strong></li>
          <li>Ange om det gäller <strong>ROT-avdragsberättigat arbete</strong></li>
        </ul>
      </>
    ),
  },
  {
    slug: "granska-offert",
    title: "Granska & redigera offert",
    category: "Offerter",
    content: (
      <>
        <p>Efter att AI:n genererat offerten kommer du till granskningsskärmen.</p>

        <h3>Välj kund</h3>
        <ol>
          <li>Tryck på <strong>&quot;Välj kund&quot;</strong></li>
          <li>Sök bland befintliga kunder eller skapa en ny</li>
          <li>Vid ny kund: fyll i namn, telefon, e-post och eventuellt personnummer (för ROT)</li>
        </ol>

        <h3>Offert-rader</h3>
        <p>Varje rad visar:</p>
        <ul>
          <li><strong>Beskrivning</strong> — vad som ingår</li>
          <li><strong>Antal &amp; enhet</strong> — t.ex. 10 tim, 5 m²</li>
          <li><strong>À-pris</strong> — pris per enhet</li>
          <li><strong>Summa</strong> — automatiskt beräknat</li>
        </ul>

        <p><strong>Radfärger:</strong></p>
        <ul>
          <li><strong>Grön</strong> — hämtad från din prislista</li>
          <li><strong>Orange</strong> — ROT-berättigad arbetsinsats</li>
          <li><strong>Grå</strong> — övrigt material/tjänst</li>
        </ul>

        <p><strong>Åtgärder:</strong></p>
        <ul>
          <li><strong>Redigera en rad:</strong> Tryck direkt på raden</li>
          <li><strong>Ta bort en rad:</strong> Tryck på papperskorgs-ikonen</li>
          <li><strong>Lägg till rad manuellt:</strong> Tryck &quot;+ Lägg till rad&quot;</li>
          <li><strong>Lägg till från prislista:</strong> Tryck &quot;Lägg till från prislista&quot;</li>
        </ul>

        <h3>ROT-avdrag</h3>
        <p>Om kunden har personnummer kan du aktivera ROT-avdrag:</p>
        <ol>
          <li>Aktivera <strong>ROT-toggle</strong> längst upp</li>
          <li>Markera vilka rader som är arbetsinsats</li>
          <li>Ange <strong>arbetskostnad</strong> per rad</li>
          <li>Appen beräknar automatiskt 50% avdrag och visar vad kunden betalar</li>
        </ol>

        <h3>Summering</h3>
        <ul>
          <li><strong>Exkl. moms</strong> — totalt belopp utan moms</li>
          <li><strong>Moms (25%)</strong> — momsbelopp</li>
          <li><strong>Inkl. moms</strong> — totalt att betala</li>
          <li><strong>ROT-avdrag</strong> — om aktiverat, visas avdraget och kundens nettopris</li>
        </ul>
        <p>Tryck <strong>&quot;Spara offert&quot;</strong> när du är nöjd.</p>
      </>
    ),
  },
  {
    slug: "offertlista",
    title: "Offertlista",
    category: "Offerter",
    content: (
      <>
        <p>Nås via <strong>&quot;Offerter&quot;</strong> i navigationsfältet.</p>

        <h3>Filtrera offerter</h3>
        <p>Använd filterknappar längst upp:</p>
        <table>
          <thead>
            <tr><th>Filter</th><th>Beskrivning</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>Alla</strong></td><td>Visar samtliga offerter</td></tr>
            <tr><td><strong>Utkast</strong></td><td>Offerter som inte skickats</td></tr>
            <tr><td><strong>Skickade</strong></td><td>Offerter kunden fått men inte svarat</td></tr>
            <tr><td><strong>Godkända</strong></td><td>Offerter kunden accepterat</td></tr>
            <tr><td><strong>Nekade</strong></td><td>Offerter kunden avböjt</td></tr>
          </tbody>
        </table>

        <h3>Söka</h3>
        <p>Skriv i sökrutan för att filtrera på kundnamn, beskrivning eller offertnummer.</p>

        <h3>Svep-åtgärder</h3>
        <ul>
          <li><strong>Svep vänster</strong> på ett utkast → <strong>Ta bort</strong></li>
          <li><strong>Svep vänster</strong> på en skickad/godkänd offert → <strong>Arkivera</strong></li>
        </ul>
        <p>Dra nedåt för att <strong>uppdatera listan</strong>.</p>
      </>
    ),
  },
  {
    slug: "offertdetaljer",
    title: "Offertdetaljer",
    category: "Offerter",
    content: (
      <>
        <p>Tryck på valfri offert i listan för att öppna detaljvyn.</p>

        <h3>Utkast</h3>
        <ul>
          <li>Redigera alla fält</li>
          <li>Skicka till kund</li>
          <li>Ta bort</li>
          <li>Duplicera</li>
        </ul>

        <h3>Skickad</h3>
        <ul>
          <li>Se om kunden öppnat</li>
          <li>Skicka för BankID-signering <em>(Basic-plan och uppåt)</em></li>
          <li>Skicka om</li>
        </ul>

        <h3>Godkänd</h3>
        <ul>
          <li>Ladda ner signerad PDF</li>
          <li>Skapa projekt</li>
          <li>Duplicera</li>
        </ul>

        <h3>PDF-export</h3>
        <p>Tryck på <strong>dela-ikonen</strong> för att generera och dela offerten som PDF via e-post, AirDrop, eller andra appar.</p>
      </>
    ),
  },
  {
    slug: "skicka-offert",
    title: "Skicka offert till kund",
    category: "Offerter",
    content: (
      <>
        <ol>
          <li>Öppna offerten</li>
          <li>Tryck <strong>&quot;Skicka offert&quot;</strong></li>
          <li>Bekräfta kundens e-postadress</li>
          <li>Tryck <strong>&quot;Bekräfta &amp; skicka&quot;</strong></li>
        </ol>

        <p>Kunden får ett <strong>professionellt e-postmeddelande</strong> med:</p>
        <ul>
          <li>Offertsammanfattning</li>
          <li>Alla rader med priser</li>
          <li>Länk för att godkänna offerten</li>
        </ul>

        <p>Du får en <strong>push-notis</strong> när kunden öppnar eller svarar på offerten.</p>
      </>
    ),
  },
  {
    slug: "kunden-godkanner",
    title: "Kunden godkänner offerten",
    category: "Offerter",
    content: (
      <>
        <p>Kunden klickar på länken i e-postmeddelandet och kommer till en webbsida där de kan godkänna offerten.</p>

        <h3>Utan BankID (Starter-plan)</h3>
        <p>Kunden ser offerten och trycker <strong>&quot;Godkänn offert&quot;</strong> — du får omedelbart en notis och offertens status ändras till <strong>Godkänd</strong>.</p>

        <h3>Med BankID (Basic-plan och uppåt)</h3>
        <p>Kunden klickar på <strong>&quot;Godkänn med BankID&quot;</strong> i e-postmeddelandet och förs direkt till signeringstjänsten.</p>
      </>
    ),
  },

  /* ===========================
     FUNKTIONER
     =========================== */
  {
    slug: "bankid",
    title: "BankID-signering",
    category: "Funktioner",
    content: (
      <>
        <p><em>Kräver Basic-plan eller högre samt aktiverat BankID-certifikat.</em></p>

        <h3>Hur det fungerar</h3>
        <ol>
          <li>Du skickar offerten som vanligt</li>
          <li>Kunden klickar på <strong>&quot;Godkänn med BankID&quot;</strong> i mailet</li>
          <li>Kunden signerar med sin BankID-app</li>
          <li>En <strong>juridiskt bindande PDF</strong> skapas automatiskt</li>
          <li>Signaturen arkiveras och offerten markeras som <strong>Godkänd</strong></li>
        </ol>

        <h3>Starta BankID från appen</h3>
        <p>På en skickad offert kan du trycka <strong>&quot;Skicka för BankID-signering&quot;</strong> — kunden får då ett separat signeringsmail.</p>

        <h3>Statusindikatorer</h3>
        <ul>
          <li><strong>Väntar på signering</strong> — BankID-processen pågår</li>
          <li><strong>Signerad med BankID</strong> — offerten är juridiskt signerad</li>
        </ul>
      </>
    ),
  },
  {
    slug: "kundregister",
    title: "Kundregister",
    category: "Funktioner",
    content: (
      <>
        <p>Nås via <strong>&quot;Kunder&quot;</strong> i navigationsfältet.</p>

        <h3>Lägg till ny kund</h3>
        <p>Tryck på <strong>&quot;+&quot;</strong>-knappen och fyll i:</p>
        <ul>
          <li><strong>Namn</strong> (obligatoriskt)</li>
          <li><strong>Telefonnummer</strong></li>
          <li><strong>E-postadress</strong></li>
          <li><strong>Adress</strong></li>
          <li><strong>Personnummer</strong> (för ROT-avdrag)</li>
        </ul>

        <h3>Redigera kund</h3>
        <p>Tryck på kundens namn för att öppna och redigera uppgifterna.</p>

        <h3>Ta bort kund</h3>
        <p>Svep vänster på kunden och tryck <strong>&quot;Ta bort&quot;</strong>. Observera att kunden tas bort permanent.</p>

        <h3>ROT-indikator</h3>
        <p>Kunder med personnummer visas med en grön <strong>&quot;ROT&quot;</strong>-badge, vilket visar att de kan nyttja ROT-avdrag.</p>
      </>
    ),
  },
  {
    slug: "projekt",
    title: "Projekt & schemaläggning",
    category: "Funktioner",
    content: (
      <>
        <p>Nås via <strong>&quot;Projekt&quot;</strong> i navigationsfältet.</p>

        <h3>Skapa projekt</h3>
        <ol>
          <li>Tryck <strong>&quot;+ Nytt projekt&quot;</strong> eller tryck på en godkänd offert i den gula bannern</li>
          <li>Välj <strong>godkänd offert</strong> (om inte redan vald)</li>
          <li>Ange <strong>startdatum</strong> och <strong>slutdatum</strong></li>
          <li>Lägg till <strong>kommentar</strong> om du vill (t.ex. &quot;Nycklar hos grannen&quot;, &quot;Parkering på baksidan&quot;)</li>
          <li>Välj om offerten ska <strong>arkiveras</strong> efter schemaläggning</li>
          <li>Tryck <strong>&quot;Spara&quot;</strong></li>
        </ol>

        <h3>Projektstatus</h3>
        <table>
          <thead>
            <tr><th>Status</th><th>Betydelse</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>Kommande</strong></td><td>Startdatum är i framtiden</td></tr>
            <tr><td><strong>Aktiv</strong></td><td>Pågår idag</td></tr>
            <tr><td><strong>Försenat</strong></td><td>Slutdatum passerat</td></tr>
            <tr><td><strong>Klart</strong></td><td>Markerat som genomfört</td></tr>
          </tbody>
        </table>

        <h3>Filtrera projekt</h3>
        <p>Använd filterknappar: <strong>Alla / Kommande / Aktiva / Försenade / Klara</strong></p>
        <p>Tryck <strong>&quot;Mina projekt&quot;</strong> för att bara se projekt kopplade till dig.</p>

        <h3>Exportera till kalender</h3>
        <ol>
          <li>Öppna ett projekt</li>
          <li>Tryck <strong>&quot;Exportera till kalender&quot;</strong></li>
          <li>En <code>.ics</code>-fil skapas som du kan importera i valfri kalenderapp (Google, Apple, Outlook)</li>
        </ol>
      </>
    ),
  },
  {
    slug: "rot-avdrag",
    title: "ROT-avdrag",
    category: "Funktioner",
    content: (
      <>
        <p>ROT-avdrag ger privatpersoner rätt att dra av 50% av arbetskostnaden, upp till 50 000 kr per år.</p>

        <h3>Förutsättningar</h3>
        <ul>
          <li>Kunden måste vara <strong>privatperson</strong> med <strong>personnummer</strong></li>
          <li>Arbetet måste vara <strong>ROT-berättigat</strong> (renovering, ombyggnad, tillbyggnad av bostad)</li>
        </ul>

        <h3>Så aktiverar du ROT i en offert</h3>
        <ol>
          <li>Se till att kunden har personnummer i kundregistret</li>
          <li>På granskningsskärmen: aktivera <strong>ROT-toggle</strong></li>
          <li>Markera rader med arbetsinsats som <strong>&quot;ROT&quot;</strong></li>
          <li>Ange <strong>arbetskostnad</strong> per rad</li>
          <li>Appen beräknar automatiskt:
            <ul>
              <li>Arbetskostnad totalt</li>
              <li>ROT-avdrag (50%)</li>
              <li><strong>Vad kunden faktiskt betalar</strong></li>
            </ul>
          </li>
        </ol>

        <h3>Visning på offerten</h3>
        <p>Kunden ser tydligt hur mycket de sparar och vad de faktiskt betalar efter avdraget.</p>
      </>
    ),
  },

  /* ===========================
     INSTÄLLNINGAR
     =========================== */
  {
    slug: "installningar",
    title: "Inställningar",
    category: "Inställningar",
    content: (
      <>
        <p>Nås via <strong>&quot;Inställningar&quot;</strong> i navigationsfältet.</p>

        <h3>Företagsinfo</h3>
        <p>Uppdatera din företagsinformation som visas på offerter och PDF:er:</p>
        <ul>
          <li>Företagsnamn, organisationsnummer</li>
          <li>Telefon och e-postadress</li>
          <li>Företagsadress</li>
          <li>Betalningsvillkor (t.ex. &quot;30 dagar netto&quot;)</li>
          <li>Bankgiro / Plusgiro</li>
          <li>Logotyp (ange URL till din logga)</li>
        </ul>

        <h3>Offertutseende</h3>
        <p>Anpassa hur dina offerter ser ut:</p>
        <ul>
          <li><strong>Mall:</strong> Klassisk, Modern eller Elegant</li>
          <li><strong>Accentfärg:</strong> Välj en färg som matchar din profil</li>
          <li><strong>Detaljnivå:</strong> Fullständig (alla rader) eller Sammanfattad</li>
        </ul>

        <h3>Bransch &amp; AI-inriktning</h3>
        <p>Välj vilken bransch du verkar i. Detta påverkar:</p>
        <ul>
          <li>Vilka AI-förslag du får</li>
          <li>Standardkategorier i prislistor och mallar</li>
          <li>Branschanpassade offerttexter</li>
        </ul>
      </>
    ),
  },
  {
    slug: "prislista",
    title: "Prislista",
    category: "Inställningar",
    content: (
      <>
        <p>Nås via <strong>Inställningar → Prislista</strong>.</p>
        <p>Bygg upp en katalog med dina produkter och tjänster för snabb offertbyggning.</p>

        <h3>Lägg till artikel</h3>
        <p>Tryck <strong>&quot;+&quot;</strong> och fyll i:</p>
        <ul>
          <li><strong>Beskrivning</strong> — namn på tjänst eller produkt</li>
          <li><strong>Pris</strong> — à-pris</li>
          <li><strong>Enhet</strong> — tim, st, m, m², m³, paket, pall, fast pris</li>
          <li><strong>Kategori</strong> — gruppera dina artiklar</li>
          <li><strong>Artikelnummer</strong> — valfritt SKU</li>
          <li><strong>ROT-berättigad</strong> — ja/nej</li>
        </ul>

        <h3>Använda prislistan i offerter</h3>
        <p>På granskningsskärmen trycker du <strong>&quot;Lägg till från prislista&quot;</strong> och väljer artikel — den läggs till med rätt pris och enhet automatiskt.</p>

        <h3>Tips</h3>
        <ul>
          <li>Lägg in dina <strong>vanligaste tjänster</strong> med standardpriser</li>
          <li>Märk arbetsmoment som <strong>ROT-berättigade</strong> för automatisk beräkning</li>
          <li>Använd <strong>kategorier</strong> för att hålla ordning (t.ex. &quot;Arbete&quot;, &quot;Material&quot;, &quot;Transport&quot;)</li>
        </ul>
      </>
    ),
  },
  {
    slug: "regler",
    title: "Regler för AI",
    category: "Inställningar",
    content: (
      <>
        <p>Nås via <strong>Inställningar → Regler</strong>.</p>
        <p>Regler är instruktioner som AI:n alltid följer när den genererar offerter.</p>

        <h3>Exempel på regler</h3>
        <ul>
          <li>&quot;Minsta debiteringstid är 2 timmar per besök&quot;</li>
          <li>&quot;Material ska alltid läggas på med 20% påslag&quot;</li>
          <li>&quot;Inkludera alltid restid vid jobb utanför Stockholm&quot;</li>
          <li>&quot;Erbjud alltid ROT-avdrag om kunden är privatperson&quot;</li>
        </ul>

        <h3>Skapa en regel</h3>
        <ol>
          <li>Tryck <strong>&quot;+&quot;</strong></li>
          <li>Skriv regelbeskrivningen</li>
          <li>Välj kategori: <strong>Prissättning / ROT-RUT / Arbetsvillkor / Material / Övrigt</strong></li>
          <li>Spara</li>
        </ol>

        <h3>Aktivera/inaktivera regler</h3>
        <p>Tryck på regeln för att slå på eller av den utan att ta bort den.</p>
      </>
    ),
  },
  {
    slug: "mallar",
    title: "Offertmallar",
    category: "Inställningar",
    content: (
      <>
        <p>Nås via <strong>Inställningar → Mallar</strong>.</p>
        <p>Mallar är färdiga jobbeskrivningar för vanliga uppdrag.</p>

        <h3>Skapa en mall</h3>
        <ol>
          <li>Tryck <strong>&quot;+&quot;</strong></li>
          <li>Ge mallen ett <strong>namn</strong> (t.ex. &quot;Totalrenovering badrum&quot;)</li>
          <li>Välj <strong>kategori</strong></li>
          <li>Skriv en <strong>detaljerad beskrivning</strong> av vad jobbet innebär</li>
          <li>Spara</li>
        </ol>

        <h3>Använda mallar</h3>
        <p>På skärmen &quot;Ny offert&quot; trycker du på <strong>mall-ikonen</strong> och väljer önskad mall. Beskrivningen klistras in och du kan redigera den för det specifika jobbet.</p>

        <h3>Tips</h3>
        <ul>
          <li>Skapa mallar för dina <strong>5 vanligaste jobbtyper</strong></li>
          <li>Var detaljerad i beskrivningen — ju mer AI:n vet, desto bättre offert</li>
          <li>Inkludera vad som <strong>ingår och inte ingår</strong> i jobbet</li>
        </ul>
      </>
    ),
  },

  /* ===========================
     TEAM & INTEGRATIONER
     =========================== */
  {
    slug: "team",
    title: "Team & inbjudningar",
    category: "Team & Integrationer",
    content: (
      <>
        <p>Nås via <strong>Inställningar → Team</strong>.</p>
        <p><em>Kräver Team-plan eller Business-plan.</em></p>

        <h3>Bjud in medarbetare</h3>
        <ol>
          <li>Kopiera din <strong>inbjudningskod</strong> (6 tecken, t.ex. BYGG12)</li>
          <li>Dela koden med medarbetaren</li>
          <li>Medarbetaren laddar ner appen, skapar konto och väljer <strong>&quot;Gå med&quot;</strong></li>
          <li>Anger inbjudningskoden — är nu med i ditt företag</li>
        </ol>

        <h3>Teammedlemmar</h3>
        <ul>
          <li><strong>Ägare</strong> — full åtkomst, kan hantera prenumeration och ta bort medlemmar</li>
          <li><strong>Medlem</strong> — kan skapa och hantera offerter</li>
        </ul>

        <h3>Ta bort en medarbetare</h3>
        <p>Tryck på medarbetaren → <strong>&quot;Ta bort ur team&quot;</strong></p>

        <h3>Ny inbjudningskod</h3>
        <p>Om din kod hamnat i fel händer trycker du <strong>&quot;Generera ny kod&quot;</strong> — den gamla slutar fungera omedelbart.</p>
      </>
    ),
  },
  {
    slug: "integrationer",
    title: "Fortnox & Visma",
    category: "Team & Integrationer",
    content: (
      <>
        <p>Nås via <strong>Inställningar → Integrationer</strong>.</p>
        <p><em>Kräver Pro-plan eller högre.</em></p>

        <h3>Fortnox</h3>
        <ol>
          <li>Tryck <strong>&quot;Anslut Fortnox&quot;</strong></li>
          <li>Logga in i Fortnox i webbläsaren som öppnas</li>
          <li>Godkänn åtkomst — du skickas tillbaka till appen</li>
          <li>Aktivera <strong>&quot;Automatisk faktura&quot;</strong> om du vill att godkända offerter skapar fakturor direkt i Fortnox</li>
        </ol>

        <h3>Visma</h3>
        <p>Samma flöde som Fortnox — tryck <strong>&quot;Anslut Visma&quot;</strong> och följ instruktionerna.</p>

        <h3>Automatisk fakturering</h3>
        <p>När aktiverat: varje gång en kund <strong>godkänner en offert</strong> skapas automatiskt en faktura i ditt bokföringsprogram med alla offertens rader, belopp och kunduppgifter.</p>
      </>
    ),
  },

  /* ===========================
     ÖVRIGT
     =========================== */
  {
    slug: "prenumeration",
    title: "Prenumeration & planer",
    category: "Övrigt",
    content: (
      <>
        <p>Nås via <strong>Inställningar → Prenumeration &amp; Plan</strong>.</p>

        <h3>Planöversikt</h3>
        <table>
          <thead>
            <tr><th>Plan</th><th>Pris</th><th>Ingår</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>Starter</strong></td><td>590 kr/mån</td><td>Offerter, PDF, kundregister, godkännande via länk</td></tr>
            <tr><td><strong>Basic</strong></td><td>990 kr/mån</td><td>+ BankID-signering</td></tr>
            <tr><td><strong>Pro</strong></td><td>1 490 kr/mån</td><td>+ Självlärande AI, Fortnox &amp; Visma</td></tr>
            <tr><td><strong>Team</strong></td><td>2 490 kr/mån</td><td>+ Upp till 5 användare, teamhantering</td></tr>
            <tr><td><strong>Business</strong></td><td>4 990 kr/mån</td><td>+ Upp till 10 användare</td></tr>
          </tbody>
        </table>
        <p><em>Alla priser exkl. moms. Betalning via faktura med 30 dagars betalningsvillkor.</em></p>

        <h3>Byta plan</h3>
        <ol>
          <li>Välj önskad plan</li>
          <li>Ange <strong>fakturamail</strong> (dit fakturan skickas)</li>
          <li>Ange <strong>organisationsnummer</strong></li>
          <li>Tryck <strong>&quot;Aktivera plan&quot;</strong></li>
        </ol>
        <p>Du behåller din trial-period och fakturan skickas när den löper ut, <strong>eller</strong> tryck <strong>&quot;Köp nu&quot;</strong> för att få fakturan direkt.</p>

        <h3>Provperiod</h3>
        <p>Nya konton får <strong>14 dagars gratis provperiod</strong>. Appen visar en nedräkning och en progress-bar under hela perioden.</p>
      </>
    ),
  },
  {
    slug: "vanliga-fragor",
    title: "Vanliga frågor",
    category: "Övrigt",
    content: (
      <>
        <h3>Kan kunden se offerten utan att logga in?</h3>
        <p>Ja — kunden får en unik länk via e-post och behöver inget konto.</p>

        <h3>Vad händer om kunden nekar offerten?</h3>
        <p>Offerten markeras som &quot;Nekad&quot;. Du kan duplicera den, göra ändringar och skicka en ny version.</p>

        <h3>Kan jag ha flera företag?</h3>
        <p>Nej, varje konto är kopplat till ett företag. För att byta företag behöver du ett nytt konto.</p>

        <h3>Kan jag redigera en offert efter att den skickats?</h3>
        <p>Nej — skickade offerter är låsta för att säkerställa integritet. Duplicera offerten för att skapa en ny version.</p>

        <h3>Hur lång är provperioden?</h3>
        <p>14 dagar gratis från det att du skapar konto.</p>

        <h3>Vad händer när provperioden går ut?</h3>
        <p>Du uppmanas att välja en plan. Du kan fortfarande se dina data men inte skicka nya offerter.</p>

        <h3>Kan jag exportera mina offerter?</h3>
        <p>Ja — varje offert kan exporteras som PDF och delas via e-post eller andra appar.</p>

        <h3>Hur säker är BankID-signeringen?</h3>
        <p>Signeringen sker via Idura (Criipto), en certifierad e-signeringstjänst. Den signerade PDF:en är juridiskt bindande.</p>
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
