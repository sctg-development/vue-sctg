/*!
=========================================================
* © 2022 Ronan LE MEILLAT for Les Ailes du Mont-Blanc
=========================================================
This website use:
- Vite, Vue3, FontAwesome 6, TailwindCss 3
- And many others
*/
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vitePluginFontawesomeminify from "@highcanfly-club/fontawesome";
import path from "path";

export default defineConfig({

  plugins: [
    vue(),
    vitePluginFontawesomeminify({ glyphWhitelist: ["\f111"] }),
    // vitePluginAddLicense()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "~": path.resolve(__dirname, "./node_modules"),
      "§": path.resolve(__dirname, "./"),
    },
  },
  build: {
    // minify: "terser",
    // terserOptions: {},
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html")
      },
    },
  },
 // optimizeDeps: { include: ["lodash.throttle", "lodash.orderby"] },
});
