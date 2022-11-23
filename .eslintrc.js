module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  overrides: [
    {
      files: ['**/*.spec.js', '**/*.spec.jsx'],
      env: {
        jest: true,
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'eslint-plugin-prettier'],
  rules: {
    semi: 0,
    'comma-dangle': 0,
    'no-underscore-dangle': 'off',
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
  },
};
