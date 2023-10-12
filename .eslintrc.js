/**
 * This is intended to be a basic starting point for linting in the Indie Stack.
 * It relies on recommended configs out of the box for simplicity, but you can
 * and should modify this configuration to best suit your team's needs.
 */

/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  settings: {
    "import/internal-regex": "^~/",
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    // ecmaFeatures: {
    //   jsx: true,
    // },
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },

  // Base config
  plugins: ["prefer-let"],
  extends: ["eslint:recommended"],
  rules: {
    "prefer-const": "off",
    "prefer-let/prefer-let": "error",
  },

  overrides: [
    // React
    {
      files: ["**/*.{jsx,tsx}"],
      plugins: ["react", "jsx-a11y"],
      extends: [
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:jsx-a11y/recommended",
        "prettier",
      ],
      settings: {
        react: {
          version: "detect",
        },
        formComponents: ["Form"],
        linkComponents: [
          { name: "Link", linkAttribute: "to" },
          { name: "NavLink", linkAttribute: "to" },
        ],
      },
      rules: {
        "react/jsx-no-leaked-render": [
          "warn",
          { validStrategies: ["ternary"] },
        ],
      },
    },

    // Typescript
    {
      files: ["**/*.{ts,tsx}"],
      plugins: ["@typescript-eslint", "import"],
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/stylistic",
        "plugin:import/recommended",
        "plugin:import/typescript",
        "prettier",
      ],
      rules: {
        "prefer-const": "off",
        // "import/order": [
        //   "error",
        //   {
        //     alphabetize: { caseInsensitive: true, order: "asc" },
        //     groups: ["builtin", "external", "internal", "parent", "sibling"],
        //     "newlines-between": "always",
        //   },
        // ],
      },
    },

    // Markdown
    {
      files: ["**/*.md"],
      plugins: ["markdown"],
      extends: ["plugin:markdown/recommended", "prettier"],
    },

    // Jest/Vitest
    {
      files: ["**/__tests__/*.{js,jsx,ts,tsx}"],
      plugins: ["jest", "jest-dom", "testing-library"],
      extends: [
        "plugin:jest/recommended",
        "plugin:jest-dom/recommended",
        "plugin:testing-library/react",
        "prettier",
      ],
      env: {
        "jest/globals": true,
      },
    },

    // Node
    {
      files: [
        ".eslintrc.js",
        "rollup.utils.js",
        "examples/**/vite.config.js",
        "examples/**/server.js",
        "packages/**/rollup.config.js",
        "scripts/**/*.js",
        "tutorial/vite.config.js",
      ],
      env: {
        node: true,
      },
    },
  ],
};
