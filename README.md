# alejandrodopico.com

Alejandro Dopico's personal site. Static (Astro, `output: 'static'`), zero client-side JavaScript. English at `/` (canonical), Spanish at `/es/` — both fully populated, same structure, same six talk cards, same section order. Built to be fully readable by AI crawlers and search engines straight from raw static HTML: nothing on the page is rendered by JavaScript, so a crawler that never executes JS still sees every word.

## Stack

- **Astro** (`output: 'static'`) — static site generator, zero-JS by default.
- **Plain TypeScript data modules** for content (`src/data/en.ts`, `src/data/es.ts`) instead of a CMS or Astro content collections — this is a small, fixed-shape single page per locale, not a growing collection of documents, so a typed object is simpler and gives compile-time safety (`SiteContent` in `src/data/types.ts`).
- **Astro's built-in image pipeline** (`astro:assets`) for the avatar and local talk screenshots — automatic resize + WebP conversion at build time. The four raw source images total ~14MB; the built site ships well under 100KB of image weight from them combined.
- No CSS framework, no font service — one system font stack, one inlined stylesheet (`src/styles/global.css`).
- No backend, no database, no forms.

## Local development

```bash
npm install
npm run dev       # hot-reload dev server
```

## Build and preview

```bash
npm run build      # outputs static files to dist/
npm run preview    # serves dist/ locally -- this is what actually ships, check it before deploying
```

`npm run preview` prints the URL (it picks a free port automatically).

## Editing content — `src/data/en.ts` and `src/data/es.ts`, never the templates

All page copy lives in two data files, never in the `.astro` component files. If you want to change what the site *says*, you're editing `src/data/en.ts` (or `es.ts`), never a component under `src/components/` or `src/pages/`.

`website-content.md` and `website-content-es.md` in the project root are the original content briefs each locale's `.ts` file was transcribed from verbatim — keep them in sync if you revise content directly in the briefs first, but the `.ts` files are what the site actually reads at build time.

Body text (`work.introMd`, `work.outroMd`, each bullet's `md`, each sub-bullet's `md`) uses a tiny markdown-lite syntax handled by `src/data/renderInline.ts`:

- `[label](https://url)` → a real link. External (`http`/`https`) links automatically get `target="_blank" rel="noopener"` — you never write that yourself.
- `**text**` → `<strong>text</strong>`. This also works wrapped around a link (`**[text](url)**`) if you ever need bold + linked in the same span.

Everything else is escaped plain text.

### Adding a new Writing entry

Open the relevant locale file, find the `writing: [...]` array, add one object at the position matching reverse-chronological order:

```ts
{ title: 'Your title here', href: 'https://...', year: '2027' },
```

That's the whole change — `src/components/WritingSection.astro` handles the list markup, the link, and the year formatting. You never touch that file. Note: on `/es/`, writing and talk *titles* stay in English by design (they're published at English URLs; translating the title would make the real thing unfindable) — only the surrounding site chrome is Spanish.

### Adding a new Talk entry

Same file, the `talks: [...]` array. Every entry needs a stable `id` (used to look up its image — see below). Two shapes depending on whether it has a public YouTube video:

```ts
// YouTube talk — real video thumbnail, grayscale by default, full color on hover
{
  id: 'unique-slug',
  title: 'Talk title',
  href: 'https://www.youtube.com/watch?v=XXXXXXXXXXX',
  year: '2027',
  venue: 'Venue Name',
  type: 'youtube',
  videoId: 'XXXXXXXXXXX', // the ?v= value from the URL
},

// Anything else with no public thumbnail (X Space/broadcast, etc.)
{
  id: 'unique-slug',
  title: 'Talk title',
  href: 'https://x.com/i/broadcasts/XXXXXXXXXXXXX',
  year: '2027',
  venue: 'Venue Name',
  type: 'x',
},
```

If you have a screenshot for a non-YouTube talk, drop it in `src/assets/talks/`, import it in `src/data/talkImages.ts`, and add it to the `talkImages` map keyed by the same `id`. `TalkCard.astro` checks that map for any `type: 'x'` entry and renders the image (same grayscale/hover treatment as YouTube cards) instead of a plain black title-only card. Cropping tip if you add one: the card is a fixed 4:3 box rendered with `object-fit: cover`, which crops to fill — if your screenshot has real content pinned to one edge (not centered), pre-crop the source to close to 4:3 yourself so cover doesn't clip it. `venue` also isn't automatic — set it explicitly per entry.

### Adding or editing a Work bullet

Same file, `work.bullets[...]`. Each bullet is one markdown-lite `md` string. Nested bullets (the metrics/claims under Stablecoin Yield Agent) go in that bullet's `subBullets: [...]` array, same `{ md: '...' }` shape.

### How `FLAGS` works

One claim in the Work section — "first live-production AI agent in the world..." — is gated by a flag so it can be pulled without touching any content or template:

```ts
// src/data/flags.ts
export const FLAGS = {
  firstLiveProduction: true, // flip to false, rebuild -- the line disappears, nothing else changes
};
```

Any sub-bullet can opt into this pattern: give it `flag: 'someKey'` in `en.ts`/`es.ts`, add `someKey` to `FLAGS`, and `WorkSection.astro` will only render that line while the flag is `true`. Both locales read the same `FLAGS` object, so a flag flip applies to every language at once.

### Editing the avatar

`src/assets/avatar.jpg` (144×144, square-cropped) is imported directly in `src/components/Nav.astro` (rendered via `astro:assets`' `<Picture>`, WebP + JPEG fallback) and in `src/layouts/Layout.astro` (for the JSON-LD `image` field). Replace the file in place and rebuild — Astro regenerates every derived size automatically. If you replace it, also regenerate the favicon set from the same crop (`public/favicon.ico`, `favicon-32x32.png`, `favicon-192x192.png`, `apple-touch-icon.png`) so the browser tab and the nav avatar stay visually consistent.

## Verifying AI-crawler readability yourself

Every word must exist in the raw HTML `curl` returns, with no JavaScript involved:

```bash
npm run build && npm run preview &
curl -s http://localhost:PORT/ | grep "I like to build and sell"
curl -s http://localhost:PORT/es/ | grep "Nacido en Caracas"
```

If those greps find the sentences, the bio is real static HTML on both locales — not something a crawler that doesn't execute JS would miss.

## Deploying to Netlify

1. Push this repo to GitHub (already done if you're reading this from the published repo).
2. In Netlify: **Add new site → Import an existing project**, pick the repo. Netlify reads `netlify.toml` automatically (`npm run build`, publish directory `dist`) — no manual config needed, no environment variables required.
3. Deploy. Netlify gives you a `*.netlify.app` URL immediately.
4. **Site settings → Domain management → Add a domain** → `alejandrodopico.com` → follow Netlify's DNS instructions.

See `LAUNCH.md` for the exact, filled-in steps (DNS records, HTTPS verification, Search Console) for this specific domain.

## Project structure

```
website-content.md          English content brief -- source of truth for what the site says
website-content-es.md       Spanish content brief
src/data/en.ts               English content, structured -- edit this to change English copy
src/data/es.ts                Spanish content, structured -- edit this to change Spanish copy
src/data/types.ts             the shared content shape both files must match
src/data/renderInline.ts      markdown-lite [text](url) / **bold** -> HTML, auto new-tab external links
src/data/flags.ts             gated claims, isolated for a one-line cut
src/data/talkImages.ts        local talk screenshot imports, keyed by talk id
src/assets/avatar.jpg         nav avatar + JSON-LD image source (square-cropped)
src/assets/talks/             local talk screenshots (pre-processed, see "Adding a new Talk entry")
src/layouts/Layout.astro      <head>: meta description, OG/Twitter tags, JSON-LD, hreflang
src/components/               Nav, PageHeader, WorkSection, WritingSection, TalksSection, TalkCard, Footer
src/pages/index.astro         English page (/)
src/pages/es/index.astro      Spanish page (/es/)
public/robots.txt             explicit allow rules for GPTBot, ClaudeBot, PerplexityBot, Google-Extended, CCBot
public/llms.txt                markdown site map + bio (English and Spanish), per llmstxt.org
public/sitemap.xml             lists / and /es/ with hreflang alternates
public/og-image.png            1200x630 social preview card
public/favicon.ico, favicon-32x32.png, favicon-192x192.png, apple-touch-icon.png   full favicon set, same crop as the nav avatar
LAUNCH.md                      exact deploy/DNS/HTTPS/Search Console steps for this domain
```

## License

Code is MIT-licensed (see `LICENSE`). The site's written content, the avatar image, and the talk screenshots are Alejandro Dopico's personal content and are not covered by the MIT grant — don't reuse those without asking.
