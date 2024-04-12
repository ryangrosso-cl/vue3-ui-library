import type { createApp } from "vue";
import vuetify from "./vuetify";
import { createPinia } from "pinia";

export type RegisterOptions = {
  pinia?: boolean;
};

export function registerPlugins(app: ReturnType<typeof createApp>, options: RegisterOptions = {}) {
  app.use(vuetify);
  if (options.pinia ?? true) {
    app.use(createPinia());
  }
}