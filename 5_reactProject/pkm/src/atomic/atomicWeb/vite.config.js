import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@store", replacement: "/src/store" },
      { find: "@components", replacement: "/src/components" },
      { find: "@", rplacement: "/src" },
    ],
  },
});
