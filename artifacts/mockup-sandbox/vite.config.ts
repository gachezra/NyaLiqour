import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import { mockupPreviewPlugin } from "./mockupPreviewPlugin";

// 1. Make PORT and BASE_PATH optional so Vercel doesn't crash
const port = Number(process.env.PORT) || 3000;
const basePath = process.env.BASE_PATH || "/";

export default defineConfig({
  // Use "/" by default for Vercel, or BASE_PATH for Replit
  base: basePath, 
  plugins: [
    mockupPreviewPlugin(),
    react(),
    tailwindcss(),
    // Only include Replit-specific plugins if we are actually on Replit
    ...(process.env.REPL_ID ? [runtimeErrorOverlay()] : []),
    ...(process.env.REPL_ID !== undefined && process.env.NODE_ENV !== "production"
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer({
              root: path.resolve(import.meta.dirname, ".."),
            }),
          ),
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
    },
  },
  // Ensure the root is explicitly current dir
  root: path.resolve(import.meta.dirname),
  build: {
    // Force the output to "dist" at the root of this project folder
    outDir: "dist",
    emptyOutDir: true,
    reportCompressedSize: true,
  },
  server: {
    port,
    host: "0.0.0.0",
    allowedHosts: true,
  },
});
