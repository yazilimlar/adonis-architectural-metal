import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Adonis Architectural Metal | Custom Furniture & Metalwork", template: "%s | Adonis Architectural Metal" },
  description: "Made-to-order architectural metalwork, luxury furniture and artistic fabrication for residential, hospitality, office and commercial spaces.",
  keywords: ["custom metal furniture", "architectural metalwork", "luxury gates", "hotel furniture", "metal fabrication", "custom desks", "decorative metalwork"],
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  openGraph: {
    title: "Adonis Architectural Metal",
    description: "Metal, elevated into art. Custom furniture, architectural systems and functional objects.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
