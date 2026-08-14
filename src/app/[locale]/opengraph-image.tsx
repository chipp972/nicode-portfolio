import { ImageResponse } from 'next/og';
import { hasLocale } from 'next-intl';
import { getContent } from '@/content';
import { routing } from '@/i18n/routing';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'Nicode — Nicolas Pierre-Charles';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

/**
 * Image de partage générée au build, à partir du contenu réel.
 *
 * Évite d'avoir à maintenir un PNG à la main et garantit que l'aperçu ne diverge
 * jamais du texte de la page. Fraunces n'est pas chargée ici : le rendu utilise la
 * police par défaut du moteur, ce qui suffit pour un aperçu et évite d'embarquer
 * un fichier de police dans la fonction.
 */
export default async function OpengraphImage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const content = getContent(hasLocale(routing.locales, locale) ? locale : routing.defaultLocale);

  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        background: '#EDEFF3',
        color: '#10141B',
        padding: 80,
      }}>
      <div
        style={{
          display: 'flex',
          fontSize: 24,
          letterSpacing: 4,
          textTransform: 'uppercase',
          color: '#4A525F',
        }}>
        {content.hero.eyebrow}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <div style={{ display: 'flex', fontSize: 68, lineHeight: 1.1, letterSpacing: -2 }}>
          {content.hero.titleLead}
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 68,
            lineHeight: 1.1,
            letterSpacing: -2,
            color: '#1F3BE0',
          }}>
          {content.hero.titleAccent}
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: 26,
          color: '#4A525F',
          borderTop: '2px solid #C7CDD7',
          paddingTop: 28,
        }}>
        <span>Nicolas Pierre-Charles</span>
        <span>nicode.fr</span>
      </div>
    </div>,
    size,
  );
}
