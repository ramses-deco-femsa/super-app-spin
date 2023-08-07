module.exports = {
  root: true,
  extends: ['@react-native', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['import', 'jest', '@typescript-eslint', 'prettier'],
  ignorePatterns: [
    // Files excluded on tsconfig
    'node_modules',
    'babel.config.js',
    'metro.config.js',
  ],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: '<root>/tsconfig.json',
      },
    },
  },
  rules: {
    'prettier/prettier': 'error',
    'import/no-unresolved': 'error',
    'import/order': [
      'error',
      {
        groups: [
          ['external', 'builtin'],
          'internal',
          ['sibling', 'parent'],
          'index',
        ],
        pathGroups: [
          {
            pattern: '@(react|react-native)',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@super-app-theme',
            group: 'external',
            position: 'after',
          },
          {
            pattern: '@sas/**',
            group: 'internal',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['internal', 'react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
};
