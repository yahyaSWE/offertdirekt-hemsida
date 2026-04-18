import type { Metadata } from "next";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import Screenshots from "@/components/landing/Screenshots";
import Pricing from "@/components/landing/Pricing";
import Team from "@/components/landing/Team";
import CtaSection from "@/components/landing/CtaSection";

export const metadata: Metadata = {
  title: "OffertDirekt – Skapa offerter med rösten för hantverkare",
  description:
    "Skapa professionella offerter på sekunder med röststyrning och AI. BankID-signering, ROT-avdrag, kundregister och projektplanering – allt i en app för svenska hantverkare.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Screenshots />
      <Pricing />
      <Team />
      <CtaSection />
    </>
  );
}
