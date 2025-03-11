import type { StorybookConfig } from "@storybook/nextjs";
import path, { dirname, join } from 'path'; // Import the path module
import webpack from 'webpack';
//import type { Configuration } from 'webpack';

//const TerserPlugin = require('terser-webpack-plugin');
//const threadLoader = require('thread-loader');

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  staticDirs: ["../public"],
  //👈 Configures the static asset folder in Storybook
  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-actions"),
    getAbsolutePath("@storybook/addon-a11y"),
    {
      name: "@storybook/addon-themes",
      options: {
        default: "rai",
      },
    },
    getAbsolutePath("@storybook/addon-viewport"), 
    //getAbsolutePath("@storybook/addon-mdx-gfm")
    getAbsolutePath("@storybook/addon-interactions"),

  ],
  framework: {
    name: getAbsolutePath("@storybook/nextjs"),
    options: {}
  },
  docs: {
    autodocs: "tag"
  },
  webpackFinal: async (config) => {
    if (!config.plugins) config.plugins = [];
    config.plugins.push(
      new webpack.IgnorePlugin({
        resourceRegExp: /^applicationinsights$/,
      })
    );
    return config;
  },
 };


export default config;

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}