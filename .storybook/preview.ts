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
