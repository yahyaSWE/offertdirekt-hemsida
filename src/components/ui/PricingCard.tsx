import Button from "./Button";

type PricingCardProps = {
  name: string;
  price: number;
  description: string;
  features: string[];
  highlighted?: boolean;
};

export default function PricingCard({
  name,
  price,
  description,
  features,
  highlighted = false,
}: PricingCardProps) {
  return (
    <div
      className={`relative flex flex-col rounded-2xl p-8 min-w-[280px] transition-all duration-200 ${
        highlighted
          ? "bg-brand-gold text-white shadow-xl shadow-brand-gold/20 scale-105"
          : "bg-white/60 border border-brand-beige hover:shadow-lg"
      }`}
    >
      {highlighted && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-green text-white text-xs font-semibold px-4 py-1 rounded-full">
          Populärast
        </span>
      )}
      <h3 className="text-xl font-bold font-[family-name:var(--font-heading)]">
        {name}
      </h3>
      <div className="mt-4 mb-2">
        <span className="text-4xl font-bold">
          {price.toLocaleString("sv-SE")}
        </span>
        <span className={`text-sm ${highlighted ? "text-white/80" : "text-brand-muted"}`}>
          {" "}kr/mån
        </span>
      </div>
      <p
        className={`text-sm mb-6 ${
          highlighted ? "text-white/80" : "text-brand-muted"
        }`}
      >
        {description}
      </p>
      <ul className="space-y-3 mb-8 flex-1">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sm">
            <svg
              className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                highlighted ? "text-white" : "text-brand-green"
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <Button
        href="#boka-demo"
        variant={highlighted ? "outline" : "primary"}
        className={
          highlighted
            ? "border-white text-white hover:bg-white hover:text-brand-gold"
            : ""
        }
      >
        Kom igång
      </Button>
    </div>
  );
}
