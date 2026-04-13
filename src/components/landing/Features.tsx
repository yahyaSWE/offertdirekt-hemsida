import SectionHeading from "@/components/ui/SectionHeading";
import FeatureCard from "@/components/ui/FeatureCard";
import { FEATURES } from "@/lib/constants";

export default function Features() {
  return (
    <section id="funktioner" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Allt du behöver för att vinna fler jobb"
          subtitle="Från offert till signering – OffertDirekt täcker hela processen så att du kan fokusera på det du gör bäst."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
