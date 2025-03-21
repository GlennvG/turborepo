import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    // app content
    `src/**/*.{js,ts,jsx,tsx}`,
    // include packages if not transpiling
    "../../packages/**/*.{js,ts,jsx,tsx}",
    "!../../packages/*/node_modules/**/*", 
  ],
  plugins: [],
};

export default config;
