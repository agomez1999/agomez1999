"use client";

import { createContext, useContext, useState, useEffect, useCallback } from "react";
import { es, ca, en } from "./locales";

const LOCALES = { es, ca, en };
const STORAGE_KEY = "agomez-lang";
const DEFAULT_LANG = "es";

export const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(DEFAULT_LANG);

  // Lee el idioma guardado en localStorage al montar (sólo en cliente)
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && LOCALES[stored]) {
      setLangState(stored);
    }
  }, []);

  // Sincroniza el atributo lang del <html> cuando cambia el idioma
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((newLang) => {
    if (!LOCALES[newLang]) return;
    setLangState(newLang);
    localStorage.setItem(STORAGE_KEY, newLang);
  }, []);

  const t = LOCALES[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}
