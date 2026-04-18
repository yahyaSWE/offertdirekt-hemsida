import { notFound } from "next/navigation";
import Link from "next/link";
import { getArticle, getAllSlugs } from "@/content/docs";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) {
    return {
      title: "Inte hittad",
      robots: { index: false, follow: false },
    };
  }
  return {
    title: article.title,
    description: `Lär dig om ${article.title.toLowerCase()} i OffertDirekt. Del av kategorin ${article.category}.`,
    alternates: {
      canonical: `/docs/${slug}/`,
    },
    openGraph: {
      title: `${article.title} – OffertDirekt Docs`,
      description: `Guide: ${article.title} i OffertDirekt (${article.category}).`,
      type: "article",
    },
  };
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
      <div className="prose prose-lg max-w-none [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:font-[family-name:var(--font-heading)] [&_h3]:mt-8 [&_h3]:mb-3 [&_p]:text-brand-dark/80 [&_p]:leading-relaxed [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-1 [&_li]:text-brand-dark/80 [&_strong]:text-brand-dark [&_table]:w-full [&_table]:border-collapse [&_table]:my-4 [&_th]:bg-brand-beige [&_th]:text-left [&_th]:px-4 [&_th]:py-2 [&_th]:text-sm [&_th]:font-semibold [&_td]:border-t [&_td]:border-brand-beige [&_td]:px-4 [&_td]:py-2 [&_td]:text-sm [&_td]:text-brand-dark/80 [&_blockquote]:border-l-4 [&_blockquote]:border-brand-gold/30 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-brand-muted [&_code]:bg-brand-beige [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm [&_em]:text-brand-muted">
        {article.content}
      </div>
    </article>
  );
}
