import vuetify from "./vuetify";
import { createPinia } from "pinia";
export function registerPlugins(app) {
    app.use(vuetify);
    app.use(createPinia());
}
