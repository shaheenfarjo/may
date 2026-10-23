# Mohammed Ali Yassin — Portfolio

Single-page architecture portfolio built with Next.js (App Router), statically prerendered.

## Develop

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm lint
pnpm typecheck
pnpm build
```

## Editing content

All text, links and projects live in [`lib/site.ts`](lib/site.ts). To add a project, drop the image in `public/` and add an entry to the `projects` array — the page, layout and metadata pick it up automatically.

Set `NEXT_PUBLIC_SITE_URL` (e.g. `https://example.com`) to use a custom domain for canonical URLs, Open Graph, `robots.txt` and `sitemap.xml`. On Vercel it falls back to the production deployment URL.
