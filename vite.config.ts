import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dts({
      tsconfigPath: "./tsconfig.app.json",
      exclude: ["**/*.stories.ts", "**/*.spec.ts", "**/*.test.ts"],
      insertTypesEntry: true,
    }),
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
      entry: fileURLToPath(new URL("./src/main.ts", import.meta.url)),
      name: "ClearLife UI Library",
      fileName: (format) => `main.${format}.js`,
    },
    cssCodeSplit: true,
    rollupOptions: {
      external: ["vue", "vuetify"], // replace 'vue' with your library's peer dependencies
      output: {
        globals: {
          vue: "Vue",
          vuetify: "Vuetify",
        },
      },
      // Exclude .stories.ts files
      treeshake: {
        moduleSideEffects: (id) => !id.endsWith(".stories.ts"),
      },
    },
  },
});
