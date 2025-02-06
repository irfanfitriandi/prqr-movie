// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
import prettier from 'eslint-plugin-prettier/recommended'

export default withNuxt([
  {
    files: ['**/*.ts', '**/*.vue', '*.mjs'],
    ...prettier,
  },
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/no-unused-expressions': 'off',
    },
  },
  {
    files: ['*.vue', '**/*.ts'],
    ignores: ['error.vue'],
    rules: {
      'vue/multi-word-component-names': 'error',
    },
  },
])
