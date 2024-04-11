import type { ObjectPlugin } from "vue";
import { registerPlugins } from "@/plugins/index";

export const createUI: ObjectPlugin =  {
  install: (app) => {
    registerPlugins(app);
  },
};
