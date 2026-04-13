import Link from "next/link";

type ButtonProps = {
  href: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
};

const variants = {
  primary:
    "bg-brand-gold text-white hover:bg-brand-gold-dark shadow-lg shadow-brand-gold/20",
  secondary:
    "bg-brand-brown text-white hover:bg-brand-brown/90",
  outline:
    "border-2 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function Button({
  href,
  variant = "primary",
  size = "md",
  children,
  className = "",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full font-semibold transition-all duration-200 ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </Link>
  );
}
