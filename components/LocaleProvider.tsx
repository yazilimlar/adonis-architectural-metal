"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Locale = "tr" | "en" | "de" | "ru";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("tr");

  useEffect(() => {
    const saved = window.localStorage.getItem("adonis-locale") as Locale | null;
    if (saved && ["tr", "en", "de", "ru"].includes(saved)) setLocaleState(saved);
  }, []);

  function setLocale(next: Locale) {
    setLocaleState(next);
    window.localStorage.setItem("adonis-locale", next);
    document.documentElement.lang = next;
  }

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return <LocaleContext.Provider value={{ locale, setLocale }}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) throw new Error("useLocale must be used inside LocaleProvider");
  return context;
}
