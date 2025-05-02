import { defineConfig } from "vite";

export default defineConfig({
  server: {
    proxy: { "/Forelesning06/api": "http://localhost:3000" },
  },
});
