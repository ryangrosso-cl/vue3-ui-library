import type { createApp } from "vue";
import vuetify from "./vuetify";
import { createPinia } from "pinia";

export function registerPlugins(app: ReturnType<typeof createApp>) {
  app.use(vuetify);
  app.use(createPinia());
}