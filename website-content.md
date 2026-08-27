website-content.md — v2 — source content for alejandrodopico.com
English canonical. Spanish is phase 2 (structure must support it; see i18n note). Content mirrors the live GitHub README (github.com/aadopii) — that is the source of truth for tone and facts. One deliberate divergence: "CoinIX" spelling (README currently has "CoinIx").
Top nav (sticky, thin, black on white)
Left: Alejandro Dopico (links to top) Center/right: work · writing · talks — same-page anchor links Far right: EN | ES toggle (manual link between / and /es/, no Accept-Language detection, English default)
Sections get ids: #work, #writing, #talks — deep-linkable.
Header block (below nav, top of page)
Name: Alejandro Dopico Contact row: aadopii@gmail.com (mailto) · linkedin.com/in/alejandro-dopico · github.com/aadopii · x.com/aadopico · t.me/aadopico
Bio (no heading — verbatim from GitHub About)
I like to build and sell solutions to complex problems. Technology and business are two natural places to do that, though I'm also interested in second-order derivatives in non-scientific areas like philosophy, history, economics, and politics.
My main areas of interest over the past few years have been AI agents and onchain finance. First, because I think we're witnessing the birth of the agentic economy, and second, because I think that economy will run on crypto rails.
Work (#work) — GitHub narrative style, NOT CV style. No dates, no
job-entry list. Verbatim from README except CoinIX spelling n/a here.
I cofounded and ran [Sail](https://sail.money/) (previously Fungi) as CEO, a venture-backed startup that built and operated money agents at scale. At Sail, I personally built and open-sourced:

* [Sailor](https://github.com/sail-money/Sailor) — open source harness for non-custodial money agents.
* [Sail Protocol](https://github.com/sail-money/Protocol) — open source onchain primitive for separately managed accounts (SMAs). [Whitepaper](https://github.com/sail-money/Protocol/blob/main/docs/whitepaper/Sail_Protocol_Whitepaper.pdf).
* [Stablecoin Yield Agent](https://youtu.be/uDXk01aoYNo) — deposit USD and EUR stablecoins to get an AI agent that autonomously reallocates them across DeFi protocols to maximize yield, powered by a proprietary [optimization engine](https://github.com/aadopii/aadopii/blob/main/assets/papers/sail_v2_optimization_engine.pdf).
   * +$1M AUM, $700M volume, 300 users.
   * First live-production AI agent in the world to conduct autonomous swaps & bridges non-custodially. [DECISION FLAG: on GitHub, excluded from CVs — Alejandro confirms whether it ships on the site. Default: ships.]
   * Two consecutive quarters outperforming the DeFi market — [Q4 2025](https://github.com/aadopii/aadopii/blob/main/assets/papers/q4_2025_performance_report.pdf) and [Q1 2026](https://github.com/aadopii/aadopii/blob/main/assets/papers/q1_2026_performance_report.pdf).
   * [Sonar](https://github.com/aadopii/aadopii/blob/main/assets/papers/sonar_production_system.pdf), our security agent, caught [four DeFi exploits](https://x.com/SaildotMoney/status/2046296862794170412).
   * 60+ yield sources for USDC and USDT, live on Base and Arbitrum, on protocols like Aave, Morpho, Fluid, Euler, and more.
* [Fungi](https://youtu.be/jX2rEc2g1kg) — natural language interface for DeFi. Swap, lend, borrow, and trade using natural language.

Before Sail, I cofounded Boveda, a decentralized storage provider on Filecoin, where we stored over 1 PiB of real data across facilities in Madrid and California. Before that, I worked in banking and asset management, at companies like Allfunds and Santander Bank.
Writing (#writing) — text list, NO images. Reverse-chronological,
README order and links (note: Sailor and Sail Protocol essays are X posts; the whitepaper link lives in Work, not here).

* [Sailor: the money agent](https://x.com/aadopico/status/2085771230578086193) · 2026
* [Sail Protocol](https://x.com/aadopico/status/2082877804899639621) · 2026
* [When was the last time you tried something new in DeFi?](https://x.com/aadopico/status/2074195705531449851) · 2026
* [The internet is personal. Internet money is not](https://x.com/aadopico/status/2000701333079244849) · 2025
* [Crypto is the best money for AI](https://microdosis.substack.com/p/crypto-is-the-best-money-for-ai) · 2024
* [Smart Wallets](https://microdosis.substack.com/p/smart-wallets) · 2024
* [A crypto wallet is not a wallet](https://microdosis.substack.com/p/a-crypto-wallet-is-not-a-wallet) · 2024
* [Decentralized Finance](https://microdosis.substack.com/p/decentralized-finance-2ca) · 2024

Talks (#talks) — card grid WITH thumbnails, uniform cards.
Thumbnail rules:

* YouTube talks: real thumbnail (i.ytimg.com), rendered GRAYSCALE via CSS filter; full color on hover. Keeps the black/white aesthetic.
* X broadcasts/Spaces (no public thumbnail): plain black card, talk title set in white type — same dimensions as thumbnail cards so the grid stays uniform.
* Card = image/title block + venue + year. Whole card is the link.

Entries (README order; CoinIX spelling; Seed Club timestamp dropped):

* [Money agents with Cambrian](https://x.com/i/broadcasts/1DxleVBWZBMKL) · 2026 — X card
* [Crypto & AI with Decasonic](https://x.com/i/spaces/1PJqrNgWraNxb/peek) · 2026 — X card
* [Personal AI agents for digital money with the Hanseatic Blockchain Institute](https://www.youtube.com/watch?v=62D2MHDYUBs) · 2026 — YouTube thumb
* [Personal AI agents for digital money with CoinIX](https://www.youtube.com/watch?v=WeSiThcpOWQ) · 2026 — YouTube thumb
* [Explaining our Stablecoin Yield Agent with Seed Club at the 11am show](https://www.youtube.com/watch?v=EcTisvBrcWw) · 2025 — YouTube thumb
* [Intersection of Crypto & AI with Seed Club at the 11am show](https://x.com/i/broadcasts/1dRKZYLVeZzxB) · 2025 — X card

Footer
Repeat contact row. Nothing else. No CV download anywhere on the site.
i18n note
Content lives in per-locale files (content/en/, content/es/ stubbed). Spanish translation supplied later — never machine-translate into the live site.
