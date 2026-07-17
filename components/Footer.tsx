"use client";

import { useLocale } from "@/components/LocaleProvider";

const copy = {
  tr: { tagline: "Özel mobilya, mimari metal işleri ve sanatsal imalat.", rights: "Tüm hakları saklıdır.", sales: "Satış Müdürü", developer: "Geliştirici", email: "E-posta" },
  en: { tagline: "Custom furniture, architectural metalwork and artistic fabrication.", rights: "All rights reserved.", sales: "Sales Manager", developer: "Developer", email: "Email" },
  de: { tagline: "Maßgefertigte Möbel, Architekturmetallbau und kunstvolle Fertigung.", rights: "Alle Rechte vorbehalten.", sales: "Vertriebsleiter", developer: "Entwickler", email: "E-Mail" },
  ru: { tagline: "Мебель на заказ, архитектурный металл и художественное производство.", rights: "Все права защищены.", sales: "Менеджер по продажам", developer: "Разработчик", email: "Эл. почта" }
} as const;

export function Footer() {
  const { locale } = useLocale();
  const t = copy[locale];

  return (
    <footer>
      <div>
        <strong>Adonis Architectural Metal</strong>
        <p>{t.tagline}</p>
        <p>
          <strong>{t.sales}:</strong> <a href="tel:+905366088778">+90 536 608 8778</a> · <a href="https://wa.me/905366088778" target="_blank" rel="noreferrer">WhatsApp</a><br />
          <strong>{t.developer}:</strong> <a href="tel:+15167324019">+1 516 732 4019</a> · <a href="https://wa.me/15167324019" target="_blank" rel="noreferrer">WhatsApp</a><br />
          <strong>{t.email}:</strong> <a href="mailto:georgeoktem@gmail.com">georgeoktem@gmail.com</a>
        </p>
      </div>
      <p>© {new Date().getFullYear()} Adonis Architectural Metal. {t.rights}</p>
    </footer>
  );
}
