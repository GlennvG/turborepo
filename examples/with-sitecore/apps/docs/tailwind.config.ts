// tailwind config is required for editor support

import type { Config } from "tailwindcss";
import sharedConfig from "tailwind-branding/tailwind.config"

const config: Pick<Config, "presets"> = {
  presets: [sharedConfig],
};

export default config;
