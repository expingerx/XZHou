# Xuanzhe Hou personal website

A static, responsive personal website inspired by the structure of a traditional
academic homepage. It uses plain HTML, CSS, JavaScript, and a minimal Vite build.

## Preview

Run:

```sh
pnpm install
pnpm dev
```

Create a production build with `pnpm build`.

Paper PDFs live in `papers/`, and the currently available reading notes live in
`notes/`. Their relative links work when opening the
HTML pages directly as well as in the development server. The production build
copies these PDFs into `dist/papers/` and `dist/notes/` automatically and uses
relative asset URLs. Course notes, The Theory of Learning in Games notes, and the
mechanism design notes and exercise solutions are temporarily withheld; keep their
PDFs outside the website directory until they are ready to make available again.

## Personalize

- Replace the bracketed biography, awards, and publication entries in
  `index.html`.
- Replace the placeholder entries in `talks.html`, `resume.html`,
  `projects.html`, and `athletics.html`.
- The current background is `assets/yuelu-academy-autumn.png`. The previous
  `assets/aiwan-pavilion.jpg` is retained as an alternate and can be restored by
  updating the preload in `index.html` and the `.hero-media` URL in `styles.css`.
- Replace the `XH` profile placeholder with a real portrait when available.
- Update the email, CV, research statement, and paper links before publishing.
