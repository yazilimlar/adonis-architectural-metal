import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Adonis Architectural Metal", template: "%s | Adonis Architectural Metal" },
  description: "Custom architectural metalwork, furniture and artistic fabrication for residential, hospitality and commercial spaces.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000")
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
