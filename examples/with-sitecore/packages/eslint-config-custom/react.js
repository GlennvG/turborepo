const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/*
 * This is a custom ESLint configuration for use a library
 * that utilizes React.
 *
 * This config extends the Vercel Engineering Style Guide.
 * For more information, see https://github.com/vercel/style-guide
 *
 */

module.exports = {
  extends: [
    "@vercel/style-guide/eslint/browser",
    "@vercel/style-guide/eslint/react",
    "./base.js"
  ].map(require.resolve),
  parserOptions: {
    project,
  },
  globals: {
    JSX: true,
  },
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: ["node_modules/", "dist/", ".eslintrc.js", "**/*.css"],
  // add rules configurations here
/*   rules: {
    "@next/next/no-html-link-for-pages": "off",
    "@next/next/no-img-element": "off", // Don't force next/image
    "jsx-a11y/alt-text": ["warn", { "elements": ["img"] }], // Don't force alt for <Image/> (sourced from Sitecore media)
    "turbo/no-undeclared-env-vars": [
      "error",
      {
        "allowList": ["^JSS_MODE$", "^FETCH_WITH$", "^NODE_ENV$", "^EXPORT_MODE$", "^DISABLE_SSG_FETCH$", "^VERCEL_ENV$"]
      },
    ],
  }, */
  rules: {
    "eslint-comments/require-description": "off",
    "import/no-default-export": "off",
    "import/no-named-as-default": "off",
    "import/no-named-as-default-member": "off",
    "import/no-extraneous-dependencies": "off",
    "import/no-cycle": "off",
    "import/order": "off",
    "import/newline-after-import": "off",
    "import/no-duplicates": "off",
    "tsdoc/syntax": "off",
    "unicorn/filename-case": "off",
    "@next/next/no-html-link-for-pages": "off",
    "@next/next/no-img-element": "off", // Don't force next/image
    "jsx-a11y/alt-text": ["warn", { "elements": ["img"] }], // Don't force alt for <Image/> (sourced from Sitecore media)
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-quotes": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "no-unused-vars": "off",
    "no-empty": "off",
    "no-lone-blocks": "off",
    "no-alert": "off",
    "no-empty-pattern": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-unsafe-argument": "off",
    "@typescript-eslint/no-unsafe-call": "off",
    "@typescript-eslint/consistent-type-imports": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-unnecessary-condition": "off",
    "@typescript-eslint/no-shadow": "off",
    "@typescript-eslint/naming-convention": "off",
    "@typescript-eslint/no-empty-interface" : "off",
    "@typescript-eslint/consistent-type-definitions": "off",
    "@typescript-eslint/no-redundant-type-constituents": "off",
    "@typescript-eslint/no-unsafe-return": "off",
    "@typescript-eslint/no-unsafe-enum-comparison": "off",
    "@typescript-eslint/dot-notation": "off",
    "@typescript-eslint/restrict-template-expressions": "off",
    "@typescript-eslint/no-base-to-string": "off",
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/consistent-indexed-object-style": "off",
    "@typescript-eslint/array-type": "off",
    "@typescript-eslint/no-confusing-void-expression": "off",
    "@typescript-eslint/no-empty-function": "off",
    "react/no-unescaped-entities": "off",
    "react/function-component-definition": "off",
    "react-hooks/rules-of-hooks": "off",
    "react/hook-use-state": "off",
    "react/no-array-index-key": "off",
    "react/no-unknown-property": "off",
    "react/no-unstable-nested-components": "off",
    "react/jsx-sort-props": "off",
    "react/jsx-pascal-case": "off",
    "react/no-array-index-key": "off",
    "react/jsx-no-useless-fragment": "off",
    "react/jsx-no-leaked-render": "off",
    "react/jsx-curly-brace-presence": "off",
    "react/self-closing-comp": "off",
    "react-hooks/exhaustive-deps": "off",
    "react/button-has-type": "off",
    "camelcase": "off",
    "func-names": "off",
    "object-shorthand": "off",
    "prefer-const": "off",
    "no-param-reassign": "off",
    "no-console": "off",
    "no-else-return": "off",
    "no-empty-pattern": "off",
    "turbo/no-undeclared-env-vars": "off",
    "@typescript-eslint/unbound-method": "off",
  },
};
