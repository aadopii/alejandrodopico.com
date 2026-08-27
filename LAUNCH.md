# Launch checklist — alejandrodopico.com

Literal, ordered steps to take this repo from "pushed to GitHub" to "live at alejandrodopico.com, indexed by Google." These are steps *you* do — I don't have Netlify, registrar, or Search Console access from this machine, so nothing here has been done for you yet.

Repo: https://github.com/aadopico/alejandrodopico.com

---

## 1. Deploy on Netlify

1. Go to [app.netlify.com](https://app.netlify.com) and log in.
2. **Add new site → Import an existing project → Deploy with GitHub.**
3. Authorize Netlify's GitHub app if prompted, then pick the `alejandrodopico.com` repo.
4. Netlify reads `netlify.toml` from the repo root automatically, so the build settings should already show:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - **Environment variables:** none required — leave this section empty.
5. Click **Deploy**. First build takes ~1 minute. Netlify gives you a random `*.netlify.app` URL — open it and confirm the site looks right before moving to DNS.

## 2. Point alejandrodopico.com at it

In Netlify: **Site settings → Domain management → Add a custom domain** → enter `alejandrodopico.com` → Netlify will detect it isn't using Netlify DNS and give you records to add at your registrar instead. Add these at whatever registrar `alejandrodopico.com` is registered with:

| Type | Name / Host | Value |
|------|-------------|-------|
| A | `@` (apex, i.e. `alejandrodopico.com` itself) | `75.2.60.5` |
| CNAME | `www` | `<your-site-name>.netlify.app` (the subdomain Netlify assigned you in step 1 — check Site settings → Domain management for the exact value, it may differ from what's written here) |

Notes:
- Apex domains can't use a CNAME (DNS spec limitation) — that's why `@` gets an A record pointing at Netlify's shared load balancer IP, while `www` gets a proper CNAME.
- If your registrar supports ALIAS/ANAME/flattened-CNAME records instead of a plain A record for the apex, Netlify's docs say those work too and are slightly more robust to Netlify changing IPs in the future — use one if your registrar offers it, otherwise the A record above is correct and standard.
- DNS propagation can take anywhere from a few minutes to ~24 hours depending on your registrar and previous TTL settings. Don't panic if it's not instant.

## 3. Verify HTTPS provisioned correctly

Netlify auto-provisions a free Let's Encrypt certificate once DNS resolves to it — no action needed beyond waiting, but confirm it actually happened:

1. In Netlify: **Site settings → Domain management → HTTPS** should show "Netlify manages your certificate" with a green/active state, not a pending or error banner.
2. From a terminal: `curl -svo /dev/null https://alejandrodopico.com 2>&1 | grep -i "SSL certificate"` — should show a valid cert issued by Let's Encrypt (`R-something` / `E-something` issuer), not an error.
3. Load `http://alejandrodopico.com` (plain HTTP) in a browser — it should redirect to `https://` automatically. Netlify does this by default; if it doesn't, enable **Force HTTPS** in the same Domain management → HTTPS panel.

## 4. Confirm the deployed site matches your local build

Don't trust that "it deployed" means "it deployed correctly" — check the live site actually serves the same content as your local build.

```bash
npm run build && npm run preview &
# note the port preview prints, e.g. 4321

# compare a distinctive string on each locale, local vs live
curl -s http://localhost:4321/ | grep -o "Complex problems"
curl -s https://alejandrodopico.com/ | grep -o "Complex problems"

curl -s http://localhost:4321/es/ | grep -o "Nacido en Caracas"
curl -s https://alejandrodopico.com/es/ | grep -o "Nacido en Caracas"
```

All four greps should print a match. Also spot-check in a browser: nav avatar loads, all six talk cards show images (not broken-image icons), and `/es/` shows Spanish nav labels (`trabajo` / `artículos` / `entrevistas`).

## 5. Google Search Console

1. Go to [search.google.com/search-console](https://search.google.com/search-console).
2. **Add property → URL prefix** → enter `https://alejandrodopico.com`.
3. Verify ownership. Since the domain is already pointed at Netlify, the simplest method is usually the **HTML tag** option: Search Console gives you a `<meta name="google-site-verification" content="...">` tag — add it inside `<head>` in [src/layouts/Layout.astro](src/layouts/Layout.astro), commit, push, wait for Netlify to redeploy, then click Verify in Search Console. (Alternative: DNS TXT record at your registrar, if you'd rather not touch the repo.)
4. Once verified, go to **Sitemaps** in the left sidebar → enter `sitemap.xml` → Submit. The site already serves one at [public/sitemap.xml](public/sitemap.xml) listing both `/` and `/es/` with hreflang alternates.
5. Go to **URL Inspection**, enter `https://alejandrodopico.com/`, wait for it to fetch, then click **Request indexing**. Repeat for `https://alejandrodopico.com/es/`.
6. Indexing isn't instant — expect anywhere from a few hours to a couple of weeks for Google to actually crawl and show the pages in search results. The "Request indexing" step just moves you up the crawl queue, it doesn't guarantee immediate indexing.

---

## Do I need to do anything else?

No Netlify CLI, account, or cached auth exists on this machine — I can't deploy this for you. Everything above is yours to run. If you'd like me to make repo-side changes as part of any step (e.g. adding the Search Console verification meta tag), ask and I'll do that part; the actual clicking-through-dashboards parts (Netlify, your registrar, Search Console) need your accounts.
