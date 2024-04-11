import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    sourcemap: true,
    target: "esnext",
    minify: false,
    lib: {
      entry: fileURLToPath(new URL("./src/create.ts", import.meta.url)),
      name: "ClearLife UI Library",
      fileName: (format) => `create-ui.${format}.js`,
    },
    rollupOptions: {
      external: ["vue", "vuetify"], // replace 'vue' with your library's peer dependencies
      output: {
        globals: {
          vue: "Vue",
          vuetify: "Vuetify",
        },
      },
    },
  },
});
