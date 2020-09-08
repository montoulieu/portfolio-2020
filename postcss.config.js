module.exports = {
  plugins: [
    'postcss-import',
    'tailwindcss',
    'postcss-nested',
    process.env.NODE_ENV === 'production'
      ? [
        '@fullhuman/postcss-purgecss',
        {
          content: [
            './pages/**/*.{js,jsx,ts,tsx}',
            './components/**/*.{js,jsx,ts,tsx}',
          ],
          whitelist: ['pagination', 'active', 'disabled', 'xl:block'],
          whitelistPatterns: [/^slick/, /^ril/, /^wp/, /^bg-/, /^w-/, /^p-/, /^xl:w-/],
          defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
        },
      ]
      : undefined,
    'autoprefixer',
  ],
};
