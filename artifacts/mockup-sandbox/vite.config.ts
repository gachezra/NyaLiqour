import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  // Force base to / so Vercel doesn't download as a file
  base: "/", 
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Use absolute pathing to avoid Monorepo confusion
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // We force the output to 'dist'. 
    // If it was going to 'dist/public' before, this fixes it.
    outDir: "dist",
    emptyOutDir: true,
    sourcemap: false, // Turn off to stop that Tooltip error from crashing the build
  },
});
