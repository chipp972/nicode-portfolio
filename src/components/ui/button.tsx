import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

type Variant = 'solid' | 'ghost';

const VARIANTS: Record<Variant, string> = {
  solid: 'bg-ink text-paper border-ink',
  ghost: 'bg-transparent border-ink hover:bg-accent-soft hover:border-accent',
};

const BASE =
  'inline-flex items-center gap-2 rounded-[2px] border px-6 py-3 text-[0.95rem] font-medium no-underline transition-transform transition-colors duration-200 hover:-translate-y-0.5 motion-reduce:hover:translate-y-0';

function classesFor(variant: Variant, className: string) {
  return `${BASE} ${VARIANTS[variant]} ${className}`;
}

export function ButtonLink({
  variant = 'solid',
  className = '',
  children,
  ...props
}: { variant?: Variant; children: ReactNode } & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a className={classesFor(variant, className)} {...props}>
      {children}
    </a>
  );
}

export function Button({
  variant = 'solid',
  className = '',
  children,
  ...props
}: { variant?: Variant; children: ReactNode } & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={`${classesFor(variant, className)} cursor-pointer`} {...props}>
      {children}
    </button>
  );
}
