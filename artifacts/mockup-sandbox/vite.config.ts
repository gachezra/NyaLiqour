import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// Check if we are in Replit to load Replit-specific things
const isReplit = !!process.env.REPL_ID;

export default defineConfig(async () => {
  // Define plugins array
  const plugins = [react(), tailwindcss()];

  // Only load Replit plugins if actually on Replit
  if (isReplit) {
    try {
      const { mockupPreviewPlugin } = await import("./mockupPreviewPlugin");
      const runtimeErrorOverlay = (await import("@replit/vite-plugin-runtime-error-modal")).default;
      plugins.push(mockupPreviewPlugin(), runtimeErrorOverlay());
    } catch (e) {
      console.warn("Replit plugins failed to load, skipping...");
    }
  }

  return {
    plugins,
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    build: {
      outDir: "dist",
      emptyOutDir: true,
    },
  };
});
