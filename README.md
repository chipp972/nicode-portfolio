# nicode.fr

Portfolio de Nicolas Pierre-Charles, développeur full stack React/TypeScript freelance.

Site statique bilingue (FR/EN), contenu versionné dans le repo, déployé sur Netlify.

## Démarrer

```bash
nvm use          # Node 22
npm ci
npm run dev      # http://localhost:3000 (redirige vers /fr)
```

Aucune variable d'environnement n'est requise : le contenu est local, il n'y a plus de CMS.

## Scripts

| Commande | Rôle |
| --- | --- |
| `npm run dev` | Serveur de développement |
| `npm run build` | Build de production |
| `npm run type-check` | Vérification TypeScript |
| `npm run lint` | ESLint |
| `npm test` | Vitest |

## Où éditer le contenu

| Quoi | Où |
| --- | --- |
| Libellés d'interface (boutons, nav, aria-labels) | `messages/fr.json` et `messages/en.json` — les deux fichiers doivent avoir exactement les mêmes clés, un test le vérifie |
| Textes éditoriaux (hero, approche, case studies, contact) | `src/content/fr/` et `src/content/en/`, validés par Zod au build |
| Images | `src/assets/images/` (importées, optimisées par `next/image`) |
| Favicons et fichiers publics | `public/` |

## Maquettes

`design/prototypes/` contient les quatre directions visuelles explorées avant la refonte. `index.html` permet de les comparer. Ces fichiers ne font pas partie du build.

## Déploiement

Netlify est connecté au dépôt : un merge sur `master` déclenche la production, une PR crée un Deploy Preview. Les quality gates GitHub Actions (types, lint, tests, build) doivent passer avant merge.
