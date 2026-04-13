"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DOC_CATEGORIES } from "@/lib/constants";

export default function DocsSidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const sidebar = (
    <nav className="space-y-6">
      {DOC_CATEGORIES.map((category) => (
        <div key={category.title}>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-brand-muted mb-2">
            {category.title}
          </h4>
          <ul className="space-y-1">
            {category.articles.map((article) => {
              const href = `/docs/${article.slug}`;
              const isActive = pathname === href;
              return (
                <li key={article.slug}>
                  <Link
                    href={href}
                    onClick={() => setOpen(false)}
                    className={`block px-3 py-1.5 rounded-lg text-sm transition-colors ${
                      isActive
                        ? "bg-brand-gold/10 text-brand-gold font-medium"
                        : "text-brand-dark/70 hover:text-brand-gold hover:bg-brand-gold/5"
                    }`}
                  >
                    {article.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );

  return (
    <>
      {/* Mobile toggle */}
      <div className="lg:hidden mb-4">
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2 text-sm font-medium text-brand-dark/70 hover:text-brand-gold transition-colors"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          Meny
        </button>
        {open && <div className="mt-4 p-4 bg-white/60 rounded-xl border border-brand-beige">{sidebar}</div>}
      </div>

      {/* Desktop sidebar */}
      <aside className="hidden lg:block w-60 flex-shrink-0">
        <div className="sticky top-24">{sidebar}</div>
      </aside>
    </>
  );
}
