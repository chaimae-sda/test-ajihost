/* ──────────────────────────────────────────────
   Données statiques / constantes de l'app
   ────────────────────────────────────────────── */

import type { ThemeColor, TextColor, Plat, Riad } from "./types";

// ── Wizard : Personnalisation ────────────────

export const THEME_COLORS: ThemeColor[] = [
  { id: "indigo",  hex: "#6366f1" },
  { id: "rose",    hex: "#f43f5e" },
  { id: "emerald", hex: "#10b981" },
  { id: "amber",   hex: "#f59e0b" },
  { id: "sky",     hex: "#0ea5e9" },
  { id: "violet",  hex: "#8b5cf6" },
];

export const TEXT_COLORS: TextColor[] = [
  { id: "white", textClass: "text-white",    bgClass: "bg-white",    checkColor: "text-gray-900", label: "Blanc" },
  { id: "black", textClass: "text-gray-900", bgClass: "bg-gray-900", checkColor: "text-white",    label: "Noir"  },
];

// ── Module Repas ─────────────────────────────

export const PLATS: Plat[] = [
  { id: 1, nom: "Tajine poulet citron",  prix: 80, horaire: "12h-22h", image: "/images/tajine-poulet-citron.png" },
  { id: 2, nom: "Briouates au fromage",  prix: 45, horaire: "8h-23h",  image: "/images/briouates-fromage.png" },
];

export const RIAD: Riad = {
  nom: "Riad Al Baraka",
  whatsapp: "212600000000",
};
