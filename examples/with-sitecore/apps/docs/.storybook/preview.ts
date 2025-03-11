import type { Preview } from "@storybook/react";
import "tailwind-branding/styles.css";
import { INITIAL_VIEWPORTS, DEFAULT_VIEWPORT } from '@storybook/addon-viewport';
import { withActions } from "@storybook/addon-actions/decorator";
import { customViewports } from "./viewports";
import { withDictionary } from './withDictionary';
import { withFlowbiteTheme } from './withFlowbiteTheme';
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

export const decorators = [withActions, withDictionary, withFlowbiteTheme, 
  withThemeByDataAttribute({
    themes: {
      'RAI': 'rai',
      'Blueprint': 'blueprint',
      'Amsterdam Baby Week': 'amsterdam-baby-week',
      'Amsterdam Drone Week Hybrid': 'amsterdam-drone-week-hybrid',
      'Aquatech': 'aquatech',
      'Aquatech EP': 'aquatech-ep',
      'Aquatech Amsterdam': 'aquatech-amsterdam',
      'Aquatech China': 'aquatech-china',
      'Aquatech Mexico': 'aquatech-mexico',
      'Aquatech Innovation Forum': 'aquatech-innovation-forum',
      'Aquatech Master Of Water': 'aquatech-master-of-water',
      'Greentech': 'greentech',
      'Greentech EP': 'greentech-ep',
      'Greentech Amsterdam': 'greentech-amsterdam',
      'Greentech Americas': 'greentech-americas',
      'Horecava': 'horecava',
      'Interclean': 'interclean',
      'Interclean EP': 'interclean-ep',
      'Interclean Amsterdam': 'interclean-amsterdam',
      'Interclean China': 'interclean-china',
      'Interclean Healthcare': 'interclean-healthcare',
      'Intertraffic': 'intertraffic',
      'Intertraffic Amsterdam': 'intertraffic-amsterdam',
      'Intertraffic Mexico': 'intertraffic-mexico',
      'Intertraffic China': 'intertraffic-china',
      'Intertraffic Istanbul': 'intertraffic-istanbul',
      'Metstrade': 'metstrade',
      'Negenmaandenbeurs': 'negenmaandenbeurs',
      'Huishoudbeurs': 'huishoudbeurs',
      'Rematec': 'rematec',
      'Rematec Amsterdam': 'rematec-amsterdam',
      'Rematec Asia': 'rematec-asia',
      'Rematec Live Connected': 'rematec-live-connected',
    },
    defaultTheme: 'rai',
    attributeName: 'data-theme',
  }),]

