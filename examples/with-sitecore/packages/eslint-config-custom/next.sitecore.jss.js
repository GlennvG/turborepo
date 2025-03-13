module.exports = {
  extends: [    
    "next",
    "./base.js",
    "./next.js",
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:yaml/recommended",
    "plugin:prettier/recommended"
  ],
  ignorePatterns: [".generated/**/*", "**/*.d.ts", "**/*.js"],
  rules: {
    "@next/next/no-img-element": "off", // Don't force next/image
    "jsx-a11y/alt-text": ["warn", { "elements": ["img"] }], // Don't force alt for <Image/> (sourced from Sitecore media)
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        "caughtErrorsIgnorePattern": "."
      }
    ],
    "jsx-quotes": ["error", "prefer-double"]
  }
};
