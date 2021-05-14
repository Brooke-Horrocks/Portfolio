module.exports = {
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  extends: ['eslint:recommended', 'prettier', 'plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    'multiline-comment-style': ['error'],
    'no-array-constructor': ['error'],
    'no-console': ['error'],
    'no-new-object': ['error'],
    'no-new-wrappers': ['error'],
    'no-return-await': ['error'],
    'no-unused-vars': [
      1,
      { ignoreRestSiblings: true, argsIgnorePattern: 'req|res|next|^err' },
    ],
    'no-var': ['error'],
    'object-shorthand': ['error'],
    'prefer-template': ['error'],
    'react/no-unescaped-entities': 0,
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
  },
};
