import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    rules: {
      semi: ['warn', 'never'],
      quotes: ['warn', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
      indent: ['warn', 2],
      'jsx-quotes': ['warn', 'prefer-single'],
      'comma-dangle': ['warn', 'always-multiline'],
      'max-lines-per-function': ['warn', { max: 200, IIFEs: false }],
      'max-lines': ['warn', { max: 500 }],
      'no-await-in-loop': ['error'],
      'no-constant-condition': ['error'],
      'no-duplicate-imports': ['error'],
      'no-import-assign': ['error'],
      'no-irregular-whitespace': ['warn'],
      'no-sparse-arrays': ['error'],
      'no-useless-assignment': ['error'],
      'camelcase': ['warn'],
      'complexity': ['warn'],
      'yoda': ['warn', 'never'],
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
  ]),
])

export default eslintConfig
