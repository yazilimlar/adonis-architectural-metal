import type { Metadata } from "next";
import { LocaleProvider } from "@/components/LocaleProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Adonis Architectural Metal", template: "%s | Adonis Architectural Metal" },
  description: "Özel üretim mimari metal işleri, mobilya ve sanatsal imalat çözümleri.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000")
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="tr"><body><LocaleProvider>{children}</LocaleProvider></body></html>;
}
