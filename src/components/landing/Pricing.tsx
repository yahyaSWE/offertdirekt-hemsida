import SectionHeading from "@/components/ui/SectionHeading";
import PricingCard from "@/components/ui/PricingCard";
import { PRICING_TIERS } from "@/lib/constants";

export default function Pricing() {
  return (
    <section id="priser" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Välj den plan som passar dig"
          subtitle="Alla planer inkluderar obegränsat antal offerter. Ingen bindningstid – uppgradera eller avsluta när du vill."
        />

        {/* Mobile: horizontal scroll, Desktop: flex row */}
        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 -mx-4 px-4 lg:overflow-visible lg:mx-0 lg:px-0 lg:justify-center lg:items-end scrollbar-hide">
          {PRICING_TIERS.map((tier) => (
            <div key={tier.name} className="snap-center flex-shrink-0 w-[280px] lg:w-auto lg:flex-1 lg:max-w-[260px]">
              <PricingCard {...tier} />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}
