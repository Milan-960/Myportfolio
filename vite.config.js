import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      "@": "/src",
      "react-matrix-parallax": "react-matrix-parallax/matrix-parallax.jsx", // Ensure correct file path
    },
  },
  server: {
    port: 3000,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor libraries into separate chunks
          react: ["react", "react-dom"],
          redux: ["redux", "react-redux"],
          three: ["three", "tone"],
          router: ["react-router-dom"],
        },
      },
    },
    chunkSizeWarningLimit: 500, // Adjust the warning limit if necessary
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
        sourceMap: true,
      },
    },
  },
});
