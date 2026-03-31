import {dirname} from 'node:path'
import {fileURLToPath} from 'node:url'

import {FlatCompat} from '@eslint/eslintrc'

const compat = new FlatCompat({
  baseDirectory: dirname(fileURLToPath(import.meta.url)),
})

export default [
  {
    ignores: [
      '.next/**',
      'public/**',
      'static/**',
      'pages/**',
      'plugins/**',
      'layouts/**',
      'store/**',
      'env/**',
      'src/gcv2/**',
    ],
  },
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
]
