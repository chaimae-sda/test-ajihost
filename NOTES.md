## 1. La règle du bouton « Suivant » jamais bloqué

### Mon Analyse
Dans le cadre de la solution SaaS **AjiHost**, cette règle privilégie le "Momentum" du propriétaire du Riad. En ne bloquant pas le flux, on réduit la friction et on favorise l'onboarding. C'est une bonne décision d'un point de vue conversion.

Cependant, c'est une décision **risquée pour l'intégrité de la donnée et l'image de marque**. Le risque n'est pas seulement la donnée manquante, mais aussi la donnée erronée validée trop vite.

### Cas concrets de problèmes
1. **Donnée manquante (Rupture de service) :** Le propriétaire passe l'étape sans configurer son WhatsApp. Sur l'interface Guest (Module Repas), le bouton « Commander » est présent mais inopérant, ce qui frustre le client final et fait perdre des ventes.
2. **Donnée erronée (Friction esthétique/Erreur humaine) :** Poussé par la fluidité du bouton "Suivant", le propriétaire tape trop vite ("Riad al braka" au lieu de "Baraka"), choisit accidentellement la mauvaise pastille de couleur, ou uploade une photo non recadrée, et passe à l'étape suivante sans s'en rendre compte.

### Solutions proposées (sans casser la règle de fluidité)
Pour maintenir la liberté de navigation tout en prévenant et guérissant les erreurs, je propose :

1. **La Prévention par la Preview (Déjà partiellement en place) :** La force du Wizard est sa preview en temps réel. C'est notre première ligne de défense pour que le client repère lui-même sa faute de frappe ou sa mauvaise couleur.
2. **"Graceful Defaults" (Valeurs de repli) :** Si un champ critique comme le nom est vide, injecter une valeur par défaut élégante (ex: "Mon Riad") plutôt que de faire "crasher" l'UI.
3. **Le Récapitulatif de Santé (Validation différée) :** Laisser l'utilisateur naviguer librement jusqu'à la fin. Sur le tout dernier écran "Publier mon Riad", afficher un panneau de contrôle (Health Check) :
   - Signaler les éléments vides (ex: ⚠️ *Numéro WhatsApp manquant*).
   - Afficher un résumé clair des choix effectués (Nom, Couleur, Photo) avec un bouton d'édition rapide (Inline edit) pour corriger facilement une faute de frappe ou une mauvaise couleur juste avant la mise en ligne finale.

## 2. Choix Techniques clés
- **Stack :** Next.js avec TypeScript pour une gestion rigoureuse des types (Interfaces pour les objets `Plat` et `RiadConfig`).
- **State Management :** Utilisation d'un état centralisé (Lifting state up) pour synchroniser les inputs du Wizard avec la frame de prévisualisation mobile en temps réel, garantissant un feedback immédiat à l'utilisateur pour l'aider à repérer ses erreurs.
- **Expérience Utilisateur :** Implémentation via `URL.createObjectURL` pour l'upload d'image : l'aperçu est instantané, ce qui permet à l'utilisateur de voir tout de suite si sa photo est la bonne, sans attendre un retour serveur.