const styleguide = require('@vercel/style-guide/prettier');

module.exports = {
  endOfLine: 'auto',
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  printWidth: 120,
  arrowParens: 'always',
  ...styleguide,
  plugins: [...styleguide.plugins, 'prettier-plugin-tailwindcss'],
};
