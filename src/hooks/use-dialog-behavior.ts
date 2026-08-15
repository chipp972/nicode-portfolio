'use client';

import { useEffect, useRef } from 'react';

const FOCUSABLE =
  'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])';

/**
 * Comportement partagé par les surfaces modales : drawer projet et nav mobile.
 *
 * Prend en charge la fermeture au clavier, le piège à focus, la restauration du
 * focus sur l'élément déclencheur et le verrouillage du scroll de la page.
 *
 * Le scroll est verrouillé en compensant la largeur de la scrollbar, pour éviter
 * le décalage horizontal de la page à l'ouverture, et les valeurs précédentes sont
 * restaurées à la fermeture. L'ancien site mutait directement
 * `document.body.style.overflowY`, sans compensation ni restauration.
 */
export function useDialogBehavior<T extends HTMLElement>(open: boolean, onClose: () => void) {
  const ref = useRef<T>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  /**
   * `onClose` est presque toujours une fonction recréée à chaque rendu côté appelant.
   * La garder dans les dépendances de l'effet le ferait se démonter et se remonter à
   * chaque rendu : le scroll se déverrouillerait et le focus se restaurerait à
   * contretemps. La ref garde l'effet dépendant du seul `open`.
   */
  const onCloseRef = useRef(onClose);

  useEffect(() => {
    onCloseRef.current = onClose;
  });

  useEffect(() => {
    if (!open) return;

    previouslyFocused.current = document.activeElement as HTMLElement | null;

    const { body, documentElement } = document;
    const scrollbarWidth = window.innerWidth - documentElement.clientWidth;
    const previousOverflow = body.style.overflow;
    const previousPaddingRight = body.style.paddingRight;

    body.style.overflow = 'hidden';
    if (scrollbarWidth > 0) body.style.paddingRight = `${scrollbarWidth}px`;

    const surface = ref.current;
    surface?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        event.preventDefault();
        onCloseRef.current();
        return;
      }

      if (event.key !== 'Tab' || !surface) return;

      const focusable = Array.from(surface.querySelectorAll<HTMLElement>(FOCUSABLE)).filter(
        (element) => element.offsetParent !== null,
      );
      if (focusable.length === 0) return;

      const first = focusable[0]!;
      const last = focusable[focusable.length - 1]!;

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      body.style.overflow = previousOverflow;
      body.style.paddingRight = previousPaddingRight;
      previouslyFocused.current?.focus();
    };
  }, [open]);

  return ref;
}
