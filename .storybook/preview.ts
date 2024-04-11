import { setup, type Preview } from "@storybook/vue3";
import { registerPlugins } from "../src/plugins";
import { withVuetifyTheme } from "./withVuetifyTheme.decorator";

setup((app) => {
  // Registers your app's plugins into Storybook
  registerPlugins(app);
});

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

// export const parameters = {
//   // actions: { argTypesRegex: "^on[A-Z].*" },
//   layout: "fullscreen",
// };

export const decorators = [withVuetifyTheme];
