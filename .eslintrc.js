module.exports = {
  root: true,
  env: {
    node: true,
    'cypress/globals': true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:cypress/recommended'],
  plugins: ['cypress'],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'script',
  },
  rules: {
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'no-console': 'off',
    'prefer-const': 'error',
    eqeqeq: ['error', 'always'],
    'no-duplicate-imports': 'error',
  },
  ignorePatterns: ['node_modules', 'cypress/videos', 'cypress/screenshots', 'cypress/reports'],
};
