import Link from "next/link";
import { DOC_CATEGORIES } from "@/lib/constants";

export default function DocsIndex() {
  return (
    <div>
      <h1 className="text-3xl font-bold font-[family-name:var(--font-heading)] mb-2">
        Dokumentation
      </h1>
      <p className="text-brand-muted mb-10">
        Lär dig använda alla funktioner i OffertDirekt.
      </p>

      <div className="space-y-10">
        {DOC_CATEGORIES.map((category) => (
          <div key={category.title}>
            <h2 className="text-lg font-semibold font-[family-name:var(--font-heading)] mb-4">
              {category.title}
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {category.articles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/docs/${article.slug}`}
                  className="group block p-5 rounded-xl bg-white/60 border border-brand-beige hover:shadow-md hover:border-brand-gold/30 transition-all"
                >
                  <h3 className="font-medium group-hover:text-brand-gold transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm text-brand-muted mt-1">
                    Läs mer &rarr;
                  </p>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
