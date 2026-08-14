# nicode-portfolio — nicode.fr

Portfolio freelance de Nicolas Pierre-Charles. Site vitrine bilingue FR/EN, contenu local (plus de CMS), déployé sur Netlify.

## Stack

- Next.js 16 App Router (Turbopack) + React 19 + TypeScript strict
- Tailwind CSS v4 (config CSS-first dans `src/app/globals.css`, **pas** de shadcn)
- next-intl 4 — FR par défaut · EN · messages dans `messages/{fr,en}.json`
- Motion + View Transitions pour les animations
- Zod pour la validation du contenu
- Vitest + Testing Library
- Netlify via `@netlify/plugin-nextjs`

Node 22 (`.nvmrc`). ESLint reste en **9.x** : `eslint-config-next` 16 embarque un `eslint-plugin-react` incompatible ESLint 10.

## Commandes

```bash
npm run dev          # serveur de dev
npm run build        # build de production
npm run type-check   # tsc --noEmit
npm run lint         # eslint
npm test             # vitest
```

## Architecture

```
src/app/[locale]/     routage uniquement, pas de logique métier
src/features/         une section = un dossier (hero, about, projects, contact)
src/components/       générique et réutilisable, sans connaissance du domaine
src/content/          contenu éditorial local, typé Zod, une source par locale
src/i18n/             routing, request, navigation next-intl
src/proxy.ts          négociation de locale (convention Next 16, ex-middleware.ts)
messages/             chaînes d'interface FR/EN
design/prototypes/    maquettes HTML des directions visuelles (hors build)
```

## Règles

- **Named exports uniquement**, pas de default export (hors fichiers imposés par Next : pages, layouts, config).
- **Server Components par défaut** — `'use client'` seulement si l'interactivité l'exige. Les seuls clients prévus : drawer projet, sélecteur de langue, nav mobile, embed Calendly.
- **Toute chaîne visible passe par i18n.** Ajouter la clé dans `messages/fr.json` **et** `messages/en.json` avant usage : un test vérifie que les deux jeux de clés sont identiques.
- **Le contenu éditorial ne vit pas dans les composants** : il est dans `src/content/{fr,en}/`, validé par Zod au build. Un contenu incomplet doit faire échouer le build.
- Animations : toujours respecter `prefers-reduced-motion`.
- Ne jamais committer sans demande explicite de Nicolas.

## Rédaction des textes (contraintes de positionnement)

Source de vérité : `../claude-prospection-freelance/CLAUDE.md`.

- **OVHcloud est terminé (mars 2026)** — toujours au passé.
- **Jamais « j'ai architecturé / piloté / défini »** : « j'ai contribué à », « participé à ». Nicolas n'a jamais été architecte en titre.
- **React Native = intermédiaire**, jamais senior.
- **Performance web rattachée à Axa France uniquement**, jamais à OVHcloud.
- Cible : **grands comptes et scale-ups**.
- Ne pas revendiquer : npm public/CDN, UMD, semver formel, Angular moderne, Vue, Web Components/Stencil, Style Dictionary, Cypress, audit RGAA, Capacitor, Electron.
- Style : pas de tiret cadratin en milieu de phrase (utiliser « : »), pas de « → » dans le texte courant (écrire « vers »). Ton direct, sans superlatifs.

## Déploiement

L'intégration Git Netlify déploie `master` en production et crée un Deploy Preview par PR. `.github/workflows/ci.yml` fait tourner les quality gates bloquants (types, lint, tests, build).
