export const NAV_LINKS = [
  { label: "Funktioner", href: "#funktioner" },
  { label: "Skärmdumpar", href: "#screenshots" },
  { label: "Priser", href: "#priser" },
  { label: "Dokumentation", href: "/docs" },
];

export const DEMO_URL = "#boka-demo";
export const DOWNLOAD_URL = "#download";

export const FEATURES = [
  {
    title: "Röst till offert",
    description:
      "Beskriv jobbet med din röst – AI skapar en professionell offert åt dig på sekunder.",
    icon: "microphone",
  },
  {
    title: "Mallar & snabbval",
    description:
      "Spara mallar för vanliga jobb som badrumsrenovering, takbyte eller målning och återanvänd dem.",
    icon: "document",
  },
  {
    title: "ROT-avdrag automatiskt",
    description:
      "Beräkna ROT-avdrag direkt i offerten. 50% av arbetskostnaden, max 50 000 kr/år.",
    icon: "calculator",
  },
  {
    title: "AI-genererade beskrivningar",
    description:
      "Vår AI skriver detaljerade arbetsbeskrivningar baserat på din input. Säkerhetsklass ingår.",
    icon: "sparkle",
  },
  {
    title: "Kundhantering",
    description:
      "Håll koll på alla kunder, kontaktuppgifter och offerthistorik på ett ställe.",
    icon: "users",
  },
  {
    title: "Schemalägg arbeten",
    description:
      "Planera och schemalägg projekt direkt i appen. Koppla till godkända offerter.",
    icon: "calendar",
  },
  {
    title: "BankID-signering",
    description:
      "Juridiskt bindande signering via BankID. Kunden godkänner offerten digitalt.",
    icon: "shield",
  },
  {
    title: "Fortnox & Visma",
    description:
      "Integrera med ditt bokföringssystem. Synka offerter och fakturor automatiskt.",
    icon: "link",
  },
];

export const PRICING_TIERS = [
  {
    name: "Starter",
    price: 590,
    description: "Perfekt för dig som vill komma igång snabbt.",
    features: [
      "Skapa offerter med röst",
      "Skicka offerter digitalt",
      "Schemaläggning av arbete",
      "Godkännande via länk",
    ],
    highlighted: false,
  },
  {
    name: "Basic",
    price: 990,
    description: "För dig som vill ha juridisk trygghet.",
    features: [
      "Allt i Starter",
      "BankID-signering",
      "Juridiskt bindande offerter",
    ],
    highlighted: false,
  },
  {
    name: "Pro",
    price: 1490,
    description: "Mest populär – fullständig automatisering.",
    features: [
      "Allt i Basic",
      "Självlärande AI",
      "Prislista & logik",
      "Fortnox-integration",
      "Visma-integration",
    ],
    highlighted: true,
  },
  {
    name: "Team",
    price: 2490,
    description: "Pro för hela teamet.",
    features: ["Allt i Pro", "Upp till 5 användare", "Delad kundlista"],
    highlighted: false,
  },
  {
    name: "Business",
    price: 4990,
    description: "För större företag med fler användare.",
    features: ["Allt i Pro", "Upp till 10 användare", "Delad kundlista"],
    highlighted: false,
  },
];

export const DOC_CATEGORIES = [
  {
    title: "Komma igång",
    articles: [
      { slug: "kom-igang", title: "Snabbstart" },
      { slug: "skapa-konto", title: "Skapa konto" },
    ],
  },
  {
    title: "Funktioner",
    articles: [
      { slug: "skapa-offert", title: "Skapa en offert" },
      { slug: "mallar", title: "Mallar & snabbval" },
      { slug: "rot-avdrag", title: "ROT-avdrag" },
      { slug: "kundhantering", title: "Kundhantering" },
      { slug: "schemalagga", title: "Schemalägg projekt" },
      { slug: "bankid", title: "BankID-signering" },
    ],
  },
  {
    title: "Integrationer",
    articles: [
      { slug: "fortnox", title: "Fortnox" },
      { slug: "visma", title: "Visma" },
    ],
  },
];
