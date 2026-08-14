import type { ReactNode } from 'react';

/** Largeur de page unique, partagée par toutes les sections. */
export function Container({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`mx-auto w-[min(1240px,100%-3rem)] ${className}`}>{children}</div>;
}

export function Section({
  id,
  children,
  className = '',
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`py-[clamp(4rem,8vw,7rem)] ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

/**
 * En-tête de section : eyebrow puis titre, souligné d'un filet.
 * Le filet est la seule ornementation de la direction éditoriale.
 */
export function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="border-rule mb-14 border-b pb-6">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="font-display mt-2 max-w-[22ch] text-[clamp(1.9rem,4.6vw,3.2rem)] leading-[1.08] font-light tracking-tight">
        {title}
      </h2>
    </div>
  );
}
