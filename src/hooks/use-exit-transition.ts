'use client';

import { useEffect, useState } from 'react';

/**
 * Garde un élément monté le temps de son animation de sortie, puis le démonte.
 *
 * Remplace `AnimatePresence` de Motion pour les deux surfaces modales du site. Le
 * choix tient à deux raisons : cela retire une dépendance de 30 ko du bundle pour
 * deux composants, et le démontage devient explicite, donc vérifiable en test.
 *
 * Aucun `requestAnimationFrame` ici : rAF ne se déclenche pas dans un onglet
 * masqué, ce qui empêcherait le panneau de s'ouvrir. Les timers, eux, se
 * déclenchent. C'est également ce qui bloquait `AnimatePresence` en test
 * automatisé : sa boucle d'animation est pilotée par rAF, donc l'animation de
 * sortie ne se terminait jamais et l'élément n'était jamais retiré du DOM.
 *
 * L'état d'entrée n'est pas géré ici : les composants utilisent la variante
 * `starting:` de Tailwind, qui s'appuie sur `@starting-style`.
 *
 * @param open état souhaité
 * @param durationMs durée de l'animation de sortie, à garder alignée avec le CSS
 * @returns `true` tant que l'élément doit rester dans le DOM
 */
export function useExitTransition(open: boolean, durationMs: number) {
  const [mounted, setMounted] = useState(open);

  useEffect(() => {
    if (open) {
      // Timer plutôt qu'un setState synchrone, que React 19 déconseille dans un effet.
      const timer = setTimeout(() => setMounted(true), 0);
      return () => clearTimeout(timer);
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const timer = setTimeout(() => setMounted(false), prefersReducedMotion ? 0 : durationMs);

    return () => clearTimeout(timer);
  }, [open, durationMs]);

  return mounted;
}
