import type { Preview } from "@storybook/react";
import {themes} from "@storybook/theming";
import theme from "./theme";
import '../src/index.css'
import '../src/App.css'
import { INITIAL_VIEWPORTS, MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';

const customViewports = {
  FullHdPC: {
    name: 'PC Monitor Full HD',
    styles: {
      width: '1920px',
      height: '1080px',
    },
  },
  mediumDesktop: {
    name: 'Medium Desktop',
    styles: {
      width: '992px',
      height: '768px',
    },
  },
  iphone14ProMaxPortrait: {
    name: 'iPhone 14 Pro Max Portrait',
    styles: {
      width: '428px',
      height: '926px',
    },
  },
  small: { name: "Small", styles: { width: "640px", height: "800px" } },
  large: { name: "Large", styles: { width: "1024px", height: "1000px" } },
};
const preview: Preview = {
  parameters: {
    viewport: {
      viewports: {
        ...INITIAL_VIEWPORTS,
        ...MINIMAL_VIEWPORTS,
        ...customViewports,
      },
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },

    },
    docs: {
      theme: theme,
    }
  },
};

export default preview;
