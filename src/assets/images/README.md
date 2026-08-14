# Images du site

Les visuels de l'ancien site étaient servis par DatoCMS et imgix : aucun n'est
récupérable depuis le dépôt. Les fichiers listés ci-dessous restent à fournir.

Les images sont importées comme modules pour que `next/image` génère les variantes,
le hash de cache et le placeholder flou. Format attendu : AVIF ou WebP, recompressé
avant commit.

| Fichier attendu | Usage | Cadrage |
| --- | --- | --- |
| `portrait.avif` | Section Approche | Portrait, ratio 4/5, 1000 px de large minimum |
| `og.png` | Aperçu de partage | 1200 × 630 px exactement |

Tant qu'une image manque, le composant concerné affiche un cadre neutre : la page
reste valide et le build ne casse pas.
