module.exports = {
  root: true,
  extends: ['@react-native', 'plugin:@typescript-eslint/recommended'],
  plugins: ['jest', '@typescript-eslint', 'prettier'],
  parser: '@typescript-eslint/parser',
  ignorePatterns: [
    // Files excluded on tsconfig
    'node_modules',
    'babel.config.js',
    'metro.config.js',
    'jest.config.js',
  ],
  rules: {
    'prettier/prettier': 'error',
  },
};
