export default {
  printWidth: 80,
  tabWidth: 2,
  singleQuote: false,
  trailingComma: "none",
  useTabs: false,
  endOfLine: "auto",
  semi: true,
  arrowParens: "always",
  bracketSpacing: true,
  bracketSameLine: false,
  proseWrap: "preserve",
  quoteProps: "as-needed",
  overrides: [
    {
      files: "*.json",
      options: {
        printWidth: 200,
      },
    },
  ],
};
