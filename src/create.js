import { registerPlugins } from "@/plugins/index";
export const createUI = {
    install: (app) => {
        registerPlugins(app);
    },
};
