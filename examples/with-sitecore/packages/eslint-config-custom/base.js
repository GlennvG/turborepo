module.exports = {
  extends: [    
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:yaml/recommended",
    "plugin:prettier/recommended"
  ],
  plugins: [
    "@typescript-eslint",
    "prettier",
    "yaml"
  ],
  rules: {
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-explicit-any": "error",
    "prettier/prettier": [
      "error",
      {
        "endOfLine": "auto",
        "semi": true,
        "singleQuote": true,
        "tabWidth": 2,
        "trailingComma": "es5",
        "printWidth": 100        
      }
    ]
  }
};
