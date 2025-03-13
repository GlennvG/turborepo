import type { Preview } from "@storybook/react";
import "@repo/tailwind-config/styles.css";
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { withActions } from "@storybook/addon-actions/decorator";
import { customViewports } from "./viewports";
import { withDictionary } from './withDictionary';
import { withThemeByDataAttribute } from '@storybook/addon-themes';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: 'fullscreen',
  viewport: {
    viewports: {
      Desktop: {
        name: 'Desktop',
        styles: {
          width: '1440px',
          height: '1080px',
        },
      },
      TabletP: {
        name: 'Tablet portrait',
        styles: {
          width: '834px',
          height: '1194px',
        },
      },
      TabletL: {
        name: 'Tablet landscape',
        styles: {
          width: '1194px',
          height: '834px',
        },
      },
      Mobile: {
        name: 'Mobile phone',
        styles: {
          width: '390px',
          height: '844px',
        },
      },
    },
    defaultViewport: 'Desktop'
  },
}


const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    viewport: {
      viewports: {
        ...customViewports,
        ...INITIAL_VIEWPORTS,
      },
      defaultViewport: 'Mobile Phone'
    },
  },
}

export const decorators = [withActions, withDictionary, 
  withThemeByDataAttribute({
    themes: {
      'Theme 1': 'theme1',
      'Theme 2': 'theme2',
    },
    defaultTheme: 'default',
    attributeName: 'data-theme',
  }),]

