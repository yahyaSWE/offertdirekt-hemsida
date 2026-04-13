import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import Screenshots from "@/components/landing/Screenshots";
import Pricing from "@/components/landing/Pricing";
import Team from "@/components/landing/Team";
import CtaSection from "@/components/landing/CtaSection";

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
