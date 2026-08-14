import coreWebVitals from 'eslint-config-next/core-web-vitals';
import typescript from 'eslint-config-next/typescript';

// eslint-config-next 16 expose directement des flat configs :
// pas de FlatCompat, qui casse sur ESLint 10 (structure circulaire).
const eslintConfig = [
  { ignores: ['.next/**', 'node_modules/**', 'design/**', 'next-env.d.ts'] },
  ...coreWebVitals,
  ...typescript,
];

export default eslintConfig;
