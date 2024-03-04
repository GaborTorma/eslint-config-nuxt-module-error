// eslint.config.js
import antfu from '@antfu/eslint-config'

export default antfu({
  typescript: {
    tsconfigPath: 'tsconfig.json',
    parserOptions: {
      extraFileExtensions: ['.vue'],
    },
  },
  rules: {
    'no-console': 'off',
    'ts/method-signature-style': ['error', 'method'],
  },
})
