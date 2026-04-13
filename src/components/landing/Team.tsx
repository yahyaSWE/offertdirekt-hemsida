import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";

const team = [
  {
    name: "Shahrayar Ranyai",
    role: "Medgrundare & Affärsutvecklare",
    image: "/team/shahrayar.jpg",
    quote: "Jag ser till att systemet löser era verkliga problem ute på fältet.",
    linkedin: "#",
  },
  {
    name: "Johan Blomdahl",
    role: "Medgrundare & Teknisk Chef",
    image: "/team/johan.jpg",
    quote: "Jag bygger tekniken som gör det krångliga enkelt och säkert.",
    linkedin: "#",
  },
];

export default function Team() {
  return (
    <section id="om-oss" className="py-20 sm:py-28 bg-brand-beige/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Vi som bygger OffertDirekt"
          subtitle="Ett team med passion för att förenkla vardagen för svenska hantverkare."
        />

        <div className="grid md:grid-cols-2 gap-8">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-white/60 border border-brand-beige rounded-2xl p-8 flex flex-col"
            >
              {/* Top: photo + name */}
              <div className="flex items-center gap-5 mb-6">
                <div className="relative w-28 h-28 flex-shrink-0">
                  <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-brand-beige bg-brand-beige">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={112}
                      height={112}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold font-[family-name:var(--font-heading)]">
                    {member.name}
                  </h3>
                  <p className="text-sm text-brand-muted">{member.role}</p>
                </div>
              </div>

              {/* Quote */}
              <blockquote className="border-l-3 border-brand-gold/40 pl-4 text-brand-dark/70 italic mb-6 flex-1">
                &quot;{member.quote}&quot;
              </blockquote>

              {/* LinkedIn */}
              <a
                href={member.linkedin}
                className="inline-flex items-center gap-2 text-sm text-brand-muted hover:text-brand-gold transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
