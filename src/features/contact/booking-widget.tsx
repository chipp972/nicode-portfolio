'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { CalendarIcon } from '@/components/icons';
import { Button } from '@/components/ui/button';

const CALENDLY_URL = 'https://calendly.com/nicolas-178/30min';

/**
 * Calendly n'est chargé qu'après un clic explicite.
 *
 * L'embed pèse environ 200 ko de JavaScript tiers et pose des cookies : le charger
 * au rendu de la page le ferait payer à tous les visiteurs, y compris ceux qui ne
 * prennent jamais rendez-vous. C'est aussi ce qui permet d'affirmer, dans les
 * mentions légales, qu'aucun tiers n'est sollicité sans action de l'utilisateur.
 */
export function BookingWidget() {
  const [loaded, setLoaded] = useState(false);
  const t = useTranslations('contact');

  if (!loaded) {
    return (
      <Button type="button" onClick={() => setLoaded(true)}>
        <CalendarIcon className="size-4" />
        {t('bookingCta')}
      </Button>
    );
  }

  return (
    <div className="border-rule w-full border">
      <iframe
        src={`${CALENDLY_URL}?hide_gdpr_banner=1&background_color=ffffff`}
        title={t('bookingCta')}
        loading="lazy"
        className="block h-[680px] w-full border-0"
      />
    </div>
  );
}
