export const DEFAULT_THEME = "light";

import { VApp } from "vuetify/components";

export const withVuetifyTheme = (story, context) => {
  const globalTheme = context.globals.theme || DEFAULT_THEME;
  return {
    components: {story, VApp},
    template: `
      <v-app theme="${globalTheme}" :full-height="false" style="max-height: 500px">
        <div class="d-flex">
          <story/>
        </div>
      </v-app>
    `,
  }
}