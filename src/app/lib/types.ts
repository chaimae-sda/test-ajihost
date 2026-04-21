/* ──────────────────────────────────────────────
   Types partagées à travers l'application
   ────────────────────────────────────────────── */

export interface ThemeColor {
  id: string;
  hex: string;
}

export interface TextColor {
  id: string;
  textClass: string;
  bgClass: string;
  checkColor: string;
  label: string;
}

export interface Plat {
  id: number;
  nom: string;
  prix: number;
  horaire: string;
  image: string;
}

export interface Riad {
  nom: string;
  whatsapp: string;
}
