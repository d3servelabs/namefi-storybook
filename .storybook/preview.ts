import type { Preview } from "@storybook/react";
import {themes} from "@storybook/theming";
import theme from "./theme";

const preview: Preview = {
  parameters: {
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
