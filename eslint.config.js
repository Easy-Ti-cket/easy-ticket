import globals from "globals";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginPrettier from "eslint-plugin-prettier";
import prettierConfig from "./prettierrc.js";
import pluginReactRefresh from "eslint-plugin-react-refresh";

export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    ignores: ["dist/**", ".eslintrc.cjs"],
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: globals.browser,
    },
    plugins: {
      react: pluginReact,
      "react-hooks": pluginReactHooks,
      prettier: pluginPrettier,
      "react-refresh": pluginReactRefresh,
    },
    settings: {
      react: {
        version: "18.2",
      },
    },
    rules: {
      "react/jsx-no-target-blank": "off",
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      quotes: ["error", "double"],
      "no-console": ["warn", { allow: ["warn", "error", "info"] }],
      "prettier/prettier": ["error", prettierConfig],
    },
  },
];
