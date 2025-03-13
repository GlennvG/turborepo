const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/*
 * This is a custom ESLint configuration for use with
 * Next.js apps.
 *
 * This config extends the Vercel Engineering Style Guide.
 * For more information, see https://github.com/vercel/style-guide
 *
 */

module.exports = {
  extends: [
    "eslint-config-turbo"
  ].map(require.resolve),
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project,
  },
  globals: {
    React: true,
    JSX: true,
  },
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: ["node_modules/", "dist/"],
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
    "@next/next/no-html-link-for-pages": "off",
    "turbo/no-undeclared-env-vars": [
      "error",
      {
        "allowList": [
          "^JSS_MODE$",
          "^FETCH_WITH$",
          "^FETCH_DICTIONARY_WITH$",
          "^GRAPH_QL_SERVICE_RETRIES$",
          "^NODE_ENV$",
          "^EXPORT_MODE$",
          "^DISABLE_SSG_FETCH$",
          "^VERCEL_ENV$",
          "^NEXTAUTH_SECRET$",
          "^KEYCLOAK_CLIENT_ID$",
          "^KEYCLOAK_CLIENT_SECRET$",
          "^KEYCLOAK_ISSUER$",
          "^KEYCLOAK_TOKEN$",
          "^KEYCLOAK_LOGOUT$",
          "^KEYCLOAK_ADMIN_URL$",
          "^KEYCLOAK_REALM$",
          "^NEXTAUTH_URL$",
          "^NEXTAUTH_URL_INTERNAL$",
          "^PERSONALIZE_MIDDLEWARE_EDGE_TIMEOUT$",
          "^PERSONALIZE_MIDDLEWARE_CDP_TIMEOUT$",
          "^NEXT_PUBLIC_PERSONALIZE_SCOPE$",
          "^HTTP_HEADERS_QUERY_PAGE_SIZE$",
          "^SITECORE_SEARCH_API_KEY$",
          "^SITECORE_SEARCH_CUSTOMER_KEY$",
          "^SITECORE_SEARCH_ENDPOINT_URL$",
          "^SITECORE_SEARCH_ENVIRONMENT$",
          "^RAI_PROFILE_SERVICE_API$",
          "^SITECORE_API_KEY$",
          "^NEXT_PUBLIC_RAI_PROFILE_SERVICE_PROXY_HOSTNAME$",
          "^SITECORE_GLOBAL_SEARCH_ENTITY$",
          "^SITECORE_GLOBAL_SEARCH_WIDGET_ID$",
          "^SITECORE_PROGRAMS_WIDGET_ID$",
          "^SITECORE_PROGRAMS_SOURCE_ID$",
          "^NEXT_PUBLIC_SITECORE_SEARCH_ALLOWED_LOCALES$",
          "^NEXT_PUBLIC_WEB_API_PROXY_HOSTNAME$",
          "^REDIS_URL$",
          "^ADMIN_API_KEY$",
          "^SITECORE_EDGE_CONTEXT_ID$",
          "^RAI_API_PORTAL_ENDPOINT$",
          "^RAI_API_PORTAL_VERSION$",
          "^RAI_API_PORTAL_SUBSCRIPTION_KEY$",
          "^BUCKETS_QUERY_PAGE_SIZE$",
          "^DEBUG$",
          "^DB_USER$",
          "^DB_PASSWORD$",
          "^DB_SERVER$",
          "^DB_DATABASE$",
          "^APPLICATIONINSIGHTS_CONNECTION_STRING$",
        ]
      }
    ],
  },
};
