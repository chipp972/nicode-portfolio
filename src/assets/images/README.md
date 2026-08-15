# Images du site

Les images sont importées comme modules pour que `next/image` génère les variantes
AVIF et WebP, le hash de cache et le placeholder flou. Elles sont recadrées et
recompressées avant commit.

| Fichier | Usage | Format |
| --- | --- | --- |
| `portrait.jpg` | Section Approche | 864 × 1080 (ratio 4/5) |

L'aperçu de partage n'est pas un fichier : il est généré au build par
`src/app/[locale]/opengraph-image.tsx`, à partir du contenu réel.
