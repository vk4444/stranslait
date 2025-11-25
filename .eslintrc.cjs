module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
    'prettier',
  ],
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'import', 'prettier'],
  overrides: [
    {
      // Use the default ESLint parser for JS/CJS config files so typescript-eslint's
      // `parserOptions.project` (type-aware linting) is not applied to them.
      files: [
        '.eslintrc.cjs',
        '.eslintrc.js',
        '*.config.js',
        '*.config.cjs',
        'webpack.config.js',
      ],
      parser: 'espree',
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'script',
      },
    },
  ],
  rules: {
    'prettier/prettier': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
