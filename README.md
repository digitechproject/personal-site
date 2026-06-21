# Site Personnel de Fernando HOUSSOU

Ce dépôt contient le code source du site portfolio de **Fernando HOUSSOU**, entrepreneur tech et designer produit béninois.

**[Voir le site en ligne →](#)**

## Technologies utilisées

- **Framework** : [Next.js](https://nextjs.org/) (App Router, statique)
- **Langage** : [TypeScript](https://www.typescriptlang.org/)
- **Styling** : [Tailwind CSS](https://tailwindcss.com/)
- **Qualité & Formatage** : [Biome](https://biomejs.dev/) & [Prettier](https://prettier.io/)
- **Tests** : [Vitest](https://vitest.dev/)

## Commandes utiles

```bash
npm install      # Installer les dépendances
npm run dev      # Lancer le serveur de développement local (http://localhost:3000)
npm run build    # Compiler et générer l'export statique pour la production
npm run lint     # Analyser le code avec Biome
npm run format   # Formater automatiquement le code
npm test         # Lancer la suite de tests unitaires
```

## Structure du projet

- `app/` : Pages du site (App Router) et styles globaux.
- `src/components/` : Composants React réutilisables.
- `src/data/` : Données statiques du portfolio (CV, projets, statistiques, formations).
- `content/writing/` : Articles du blog rédigés en Markdown.
- `public/` : Ressources statiques (images de profil, captures de projets, favicon).

## Licence

[MIT](./LICENSE).
