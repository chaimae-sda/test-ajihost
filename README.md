# 🏨 Ajihost — Plateforme de gestion de Riad

> Application web Next.js permettant aux propriétaires de riads de personnaliser l'expérience digitale de leurs clients : apparence visuelle, module de restauration avec commande WhatsApp intégrée.

---

## 📸 Aperçu

| Personnalisation (Admin) | Module Repas (Guest) |
|:---:|:---:|
| Formulaire + preview mobile en temps réel | Menu mobile-first avec commande WhatsApp |

---

## ✨ Fonctionnalités

### 🎨 Étape 01 — Personnalisation
- Upload d'image de fond avec **prévisualisation en temps réel**
- Sélecteur de **couleur principale** (6 couleurs)
- Sélecteur de **couleur du texte** (blanc / noir)
- Champ de saisie du **nom du riad**
- Simulation mobile (frame téléphone) mise à jour instantanément, **sans appel serveur**
- Bouton **Suivant** toujours actif

### 🍽️ Module Repas — Expérience Guest
- Interface **mobile-first** simulant l'écran du client
- Liste de plats avec **photos professionnelles** et prix
- Horaires de disponibilité
- Bouton **Commander par WhatsApp** avec message pré-rempli
- **Couleur du thème partagée** depuis la page de personnalisation

---

## 🛠️ Stack technique

| Technologie | Rôle |
|---|---|
| [Next.js 15](https://nextjs.org/) (App Router) | Framework React avec routing basé sur le système de fichiers |
| [TypeScript](https://www.typescriptlang.org/) | Typage statique et sécurité du code |
| [Tailwind CSS](https://tailwindcss.com/) | Styling utility-first, responsive design |
| [Lucide React](https://lucide.dev/) | Icônes SVG légères |
| React Context API | Partage de l'état du thème entre les pages |

---

## 📁 Structure du projet

```
src/app/
├── components/           # Composants réutilisables
│   ├── Navbar.tsx          → Navigation globale avec lien actif
│   ├── ColorPicker.tsx     → Sélecteur de couleur générique
│   ├── ImageUpload.tsx     → Dropzone d'upload avec preview
│   ├── PhonePreview.tsx    → Maquette mobile (prévisualisation)
│   └── PlatCard.tsx        → Carte de plat avec photo + WhatsApp
├── lib/                  # Logique partagée
│   ├── types.ts            → Interfaces TypeScript
│   ├── constants.ts        → Données hardcodées (plats, couleurs)
│   ├── utils.ts            → Fonctions utilitaires
│   └── ThemeContext.tsx    → Contexte React pour la couleur du thème
├── repas/
│   └── page.tsx           # Page du module Repas
├── wizard/
│   └── page.tsx           # Page Personnalisation (Wizard Step 1)
├── layout.tsx             # Layout racine + ThemeProvider
├── globals.css            # Styles globaux
└── wizard.module.css      # Variables CSS pour les thèmes couleur
```

---

## 🚀 Lancer le projet en local

### Prérequis

- [Node.js](https://nodejs.org/) version **18** ou supérieure
- [npm](https://www.npmjs.com/) (inclus avec Node.js)

### Installation

```bash
# 1. Cloner le dépôt
git clone https://github.com/chaimae-sda/test-ajihost.git
cd test-ajihost

# 2. Installer les dépendances
npm install

# 3. Lancer le serveur de développement
npm run dev
```

L'application sera accessible à l'adresse : **[http://localhost:3000](http://localhost:3000)**

> **💡 Astuce** : le serveur de développement supporte le Hot Reload — toute modification de code sera reflétée instantanément dans le navigateur.
