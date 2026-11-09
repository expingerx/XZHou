import { readFileSync, readdirSync } from "node:fs";
import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  base: "./",
  plugins: [
    {
      name: "include-pdf-downloads",
      apply: "build",
      generateBundle() {
        for (const directory of ["papers", "notes"]) {
          const pdfDirectory = resolve(process.cwd(), directory);
          for (const entry of readdirSync(pdfDirectory, { withFileTypes: true })) {
            if (!entry.isFile() || !entry.name.toLowerCase().endsWith(".pdf")) continue;
            this.emitFile({
              type: "asset",
              fileName: `${directory}/${entry.name}`,
              source: readFileSync(resolve(pdfDirectory, entry.name)),
            });
          }
        }
      },
    },
  ],
  build: {
    rollupOptions: {
      input: {
        home: resolve(process.cwd(), "index.html"),
        notes: resolve(process.cwd(), "notes.html"),
        talks: resolve(process.cwd(), "talks.html"),
        resume: resolve(process.cwd(), "resume.html"),
        projects: resolve(process.cwd(), "projects.html"),
        athletics: resolve(process.cwd(), "athletics.html"),
      },
    },
  },
});
