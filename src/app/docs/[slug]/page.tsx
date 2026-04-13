import { notFound } from "next/navigation";
import Link from "next/link";
import { getArticle, getAllSlugs } from "@/content/docs";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const article = getArticle(slug);
    if (!article) return { title: "Inte hittad – OffertDirekt" };
    return {
      title: `${article.title} – OffertDirekt Docs`,
      description: `Lär dig om ${article.title} i OffertDirekt.`,
    };
  });
}

export default async function DocPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    notFound();
  }

  return (
    <article>
      <div className="mb-6">
        <Link
          href="/docs"
          className="text-sm text-brand-gold hover:underline"
        >
          &larr; Tillbaka till dokumentation
        </Link>
      </div>
      <span className="text-xs font-medium uppercase tracking-wider text-brand-muted">
        {article.category}
      </span>
      <h1 className="text-3xl font-bold font-[family-name:var(--font-heading)] mt-1 mb-8">
        {article.title}
      </h1>
      <div className="prose prose-lg max-w-none [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:font-[family-name:var(--font-heading)] [&_h3]:mt-8 [&_h3]:mb-3 [&_p]:text-brand-dark/80 [&_p]:leading-relaxed [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-1 [&_li]:text-brand-dark/80 [&_strong]:text-brand-dark">
        {article.content}
      </div>
    </article>
  );
}
