"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS, DEMO_URL } from "@/lib/constants";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-brand-cream/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-baseline">
            <Image src="/logo.svg" alt="O" width={32} height={35} className="h-[1.45em] w-auto self-end relative bottom-[0.18em] -mr-[1px]" />
            <span className="text-xl font-bold font-[family-name:var(--font-heading)] text-brand-gold">
              ffert
            </span>
            <span className="text-xl font-bold font-[family-name:var(--font-heading)] text-brand-dark ml-1">
              Direkt
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-brand-dark/70 hover:text-brand-gold transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={DEMO_URL}
              className="inline-flex items-center justify-center rounded-full bg-brand-gold text-white px-5 py-2.5 text-sm font-semibold hover:bg-brand-gold-dark transition-colors shadow-md shadow-brand-gold/20"
            >
              Boka demo
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-brand-dark"
            aria-label="Öppna meny"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-brand-cream/95 backdrop-blur-md border-t border-brand-beige">
          <div className="px-4 py-4 space-y-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block text-base font-medium text-brand-dark/70 hover:text-brand-gold py-2"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={DEMO_URL}
              onClick={() => setMenuOpen(false)}
              className="block text-center rounded-full bg-brand-gold text-white px-5 py-3 font-semibold hover:bg-brand-gold-dark transition-colors mt-4"
            >
              Boka demo
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
