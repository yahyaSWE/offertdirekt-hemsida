import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "OffertDirekt – Skapa offerter med rösten",
    short_name: "OffertDirekt",
    description:
      "Skapa professionella offerter på sekunder med röststyrning och AI. Byggd för svenska hantverkare.",
    start_url: "/",
    display: "standalone",
    background_color: "#F5F0E8",
    theme_color: "#B8860B",
    lang: "sv-SE",
    categories: ["business", "productivity"],
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/apple-icon.svg",
        sizes: "180x180",
        type: "image/svg+xml",
      },
    ],
  };
}
