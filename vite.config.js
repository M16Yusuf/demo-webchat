import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// Fixed port so the widget's allowed origin stays http://localhost:5180.
export default defineConfig({
  plugins: [react()],
  server: { port: 5180, strictPort: true },
  preview: { port: 5180, strictPort: true },
});
