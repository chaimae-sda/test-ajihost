/* ──────────────────────────────────────────────
   Fonctions utilitaires réutilisables
   ────────────────────────────────────────────── */

/**
 * Génère un lien WhatsApp pré-rempli pour commander un plat.
 */
export function buildWhatsAppUrl(phone: string, riadName: string, platName: string): string {
  const text = `Bonjour ${riadName}, je souhaite commander : *${platName}*.`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}
