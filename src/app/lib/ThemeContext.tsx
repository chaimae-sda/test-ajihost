"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import { THEME_COLORS } from "./constants";
import type { ThemeColor } from "./types";

/* ──────────────────────────────────────────────
   Contexte partagé pour la couleur du thème.
   Permet à la page Personnalisation d'écrire
   la couleur et à la page Repas de la lire.
   ────────────────────────────────────────────── */

interface ThemeContextValue {
  themeColor: ThemeColor;
  setThemeColor: (color: ThemeColor) => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [themeColor, setThemeColor] = useState<ThemeColor>(THEME_COLORS[0]);

  return (
    <ThemeContext.Provider value={{ themeColor, setThemeColor }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within a <ThemeProvider>");
  }
  return ctx;
}
