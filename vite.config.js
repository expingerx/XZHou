import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        home: resolve(process.cwd(), "index.html"),
        notes: resolve(process.cwd(), "notes.html"),
        miscellaneous: resolve(process.cwd(), "miscellaneous.html"),
        talks: resolve(process.cwd(), "talks.html"),
        resume: resolve(process.cwd(), "resume.html"),
        projects: resolve(process.cwd(), "projects.html"),
        athletics: resolve(process.cwd(), "athletics.html"),
      },
    },
  },
});
