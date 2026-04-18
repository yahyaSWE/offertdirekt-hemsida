import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const SITE_URL = "https://offertdirekt.app";
const SITE_NAME = "OffertDirekt";
const SITE_TITLE = "OffertDirekt – Skapa offerter med rösten för hantverkare";
const SITE_DESCRIPTION =
  "Skapa professionella offerter på sekunder med röststyrning och AI. BankID-signering, ROT-avdrag, kundregister och projektplanering – allt i en app för svenska hantverkare.";

export const viewport: Viewport = {
  themeColor: "#F5F0E8",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s – OffertDirekt",
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "offertapp",
    "offert app",
    "offertprogram",
    "offerthantering",
    "offerter hantverkare",
    "offert hantverkare app",
    "hantverkar-app",
    "hantverkarprogram",
    "röststyrd offert",
    "AI offert",
    "BankID signering",
    "ROT-avdrag",
    "Fortnox integration",
    "Visma integration",
    "byggoffert",
    "målare offert",
    "snickare offert",
    "VVS offert",
    "elektriker offert",
    "tak renovering offert",
    "badrum renovering offert",
    "offert direkt",
    "offertmallar",
    "digitala offerter",
    "offertsystem Sverige",
  ],
  authors: [{ name: "OffertDirekt" }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "sv_SE",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "OffertDirekt – Appen för hantverkare",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-icon.svg", type: "image/svg+xml" }],
    shortcut: ["/favicon.svg"],
  },
  category: "business",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "OffertDirekt",
  description: SITE_DESCRIPTION,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Android, iOS",
  url: SITE_URL,
  inLanguage: "sv-SE",
  offers: [
    {
      "@type": "Offer",
      name: "Starter",
      price: "590",
      priceCurrency: "SEK",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "590",
        priceCurrency: "SEK",
        unitText: "MONTH",
      },
    },
    {
      "@type": "Offer",
      name: "Basic",
      price: "990",
      priceCurrency: "SEK",
    },
    {
      "@type": "Offer",
      name: "Pro",
      price: "1490",
      priceCurrency: "SEK",
    },
    {
      "@type": "Offer",
      name: "Team",
      price: "2490",
      priceCurrency: "SEK",
    },
    {
      "@type": "Offer",
      name: "Business",
      price: "4990",
      priceCurrency: "SEK",
    },
  ],
  publisher: {
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/logo.svg`,
    },
  },
  featureList: [
    "Röststyrd offertgenerering med AI",
    "BankID-signering",
    "ROT-avdragshantering",
    "Kundregister",
    "Projektplanering och schemaläggning",
    "Fortnox-integration",
    "Visma-integration",
    "Offertmallar",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="sv"
      className={`${inter.variable} ${poppins.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
