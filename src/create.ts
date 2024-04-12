import type { App, ObjectPlugin } from "vue";
import { registerPlugins, type RegisterOptions } from "@/plugins/index";

export function createUI(options: RegisterOptions): ObjectPlugin {
  const install = (app: App) => {
    registerPlugins(app, options);
  };
  
  return { install };
}
