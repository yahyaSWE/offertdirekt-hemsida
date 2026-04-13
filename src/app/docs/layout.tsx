import type { Metadata } from "next";
import DocsSidebar from "@/components/docs/DocsSidebar";

export const metadata: Metadata = {
  title: "Dokumentation – OffertDirekt",
  description: "Lär dig hur du använder OffertDirekt. Guider för alla funktioner.",
};

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex gap-10">
        <DocsSidebar />
        <div className="flex-1 min-w-0">{children}</div>
      </div>
    </div>
  );
}
