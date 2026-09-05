import type { SiteContent } from './types';

// Transcribed verbatim from website-content.md. Do not rephrase or
// summarize prose here -- edit website-content.md's intent, then mirror
// the exact change into this file's `md` / string fields.
export const en: SiteContent = {
  lang: 'en',
  name: 'Alejandro Dopico',
  tagline: 'Complex problems | Money & AI',
  metaDescription:
    'Alejandro Dopico is Co-Founder & CEO of Sail, where he built and open-sourced Sailor and Sail Protocol and grew a stablecoin yield agent to $700M in volume. Before Sail he cofounded Boveda, a Filecoin storage provider, and worked in banking and asset management at Allfunds and Santander.',
  contact: [
    { label: 'aadopii@gmail.com', href: 'mailto:aadopii@gmail.com' },
    { label: 'X', href: 'https://x.com/aadopico', rel: ['me'] },
    { label: 'GitHub', href: 'https://github.com/aadopii', rel: ['me'] },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/alejandro-dopico', rel: ['me'] },
  ],
  bio: [
    'Born in Caracas. Made in Madrid.',
    "I like to build and sell solutions to complex problems. Technology and business are two natural places to do that, though I'm also interested in second-order derivatives in non-scientific areas like philosophy, history, economics, and politics.",
    "My main areas of interest over the past few years have been AI agents and onchain finance. First, because I think we're witnessing the birth of the agentic economy, and second, because I think that economy will run on crypto rails.",
  ],
  work: {
    introMd:
      'I cofounded and ran [Sail](https://sail.money/) (previously Fungi) as CEO, a venture-backed startup that built and operated money agents at scale. At Sail, I personally built and open-sourced:',
    bullets: [
      {
        md: '[Sailor](https://github.com/sail-money/Sailor) — open source harness for non-custodial money agents.',
      },
      {
        md: '[Sail Protocol](https://github.com/sail-money/Protocol) — open source onchain primitive for separately managed accounts (SMAs). [Whitepaper](https://github.com/sail-money/Protocol/blob/main/docs/whitepaper/Sail_Protocol_Whitepaper.pdf).',
      },
      {
        md: '[Stablecoin Yield Agent](https://youtu.be/uDXk01aoYNo) — deposit USD and EUR stablecoins to get an AI agent that autonomously reallocates them across DeFi protocols to maximize yield, powered by a proprietary [optimization engine](https://github.com/aadopii/aadopii/blob/main/assets/papers/sail_v2_optimization_engine.pdf).',
        subBullets: [
          { md: '+$1M AUM, $700M volume, 300 users.' },
          {
            md: 'First live-production AI agent in the world to conduct autonomous swaps & bridges non-custodially.',
            flag: 'firstLiveProduction',
          },
          {
            md: 'Two consecutive quarters outperforming the DeFi market — [Q4 2025](https://github.com/aadopii/aadopii/blob/main/assets/papers/q4_2025_performance_report.pdf) and [Q1 2026](https://github.com/aadopii/aadopii/blob/main/assets/papers/q1_2026_performance_report.pdf).',
          },
          {
            md: '[Sonar](https://github.com/aadopii/aadopii/blob/main/assets/papers/sonar_production_system.pdf), our security agent, caught [four DeFi exploits](https://x.com/SaildotMoney/status/2046296862794170412).',
          },
          {
            md: '60+ yield sources for USDC and USDT, live on Base and Arbitrum, on protocols like Aave, Morpho, Fluid, Euler, and more.',
          },
        ],
      },
      {
        md: '[Fungi](https://youtu.be/jX2rEc2g1kg) — natural language interface for DeFi. Swap, lend, borrow, and trade using natural language.',
      },
    ],
    outroMd:
      'Before Sail, I cofounded **Boveda**, a decentralized storage provider on Filecoin, where we stored over 1 PiB of real data across facilities in Madrid and California. Before that, I worked in banking and asset management, at companies like **Allfunds** and **Santander Bank**.',
  },
  writing: [
    { title: 'Sailor: the money agent', href: 'https://x.com/aadopico/status/2085771230578086193', year: '2026' },
    { title: 'Sail Protocol', href: 'https://x.com/aadopico/status/2082877804899639621', year: '2026' },
    { title: 'When was the last time you tried something new in DeFi?', href: 'https://x.com/aadopico/status/2074195705531449851', year: '2026' },
    { title: 'The internet is personal. Internet money is not', href: 'https://x.com/aadopico/status/2000701333079244849', year: '2025' },
    { title: 'Crypto is the best money for AI', href: 'https://microdosis.substack.com/p/crypto-is-the-best-money-for-ai', year: '2024' },
    { title: 'Smart Wallets', href: 'https://microdosis.substack.com/p/smart-wallets', year: '2024' },
    { title: 'A crypto wallet is not a wallet', href: 'https://microdosis.substack.com/p/a-crypto-wallet-is-not-a-wallet', year: '2024' },
    { title: 'Decentralized Finance', href: 'https://microdosis.substack.com/p/decentralized-finance-2ca', year: '2024' },
  ],
  talks: [
    {
      id: 'cambrian',
      title: 'Money agents with Cambrian',
      href: 'https://x.com/i/broadcasts/1DxleVBWZBMKL',
      year: '2026',
      venue: 'Cambrian',
      type: 'x',
    },
    {
      id: 'decasonic',
      title: 'Crypto & AI with Decasonic',
      href: 'https://x.com/i/spaces/1PJqrNgWraNxb/peek',
      year: '2026',
      venue: 'Decasonic',
      type: 'x',
    },
    {
      id: 'hanseatic',
      title: 'Personal AI agents for digital money with the Hanseatic Blockchain Institute',
      href: 'https://www.youtube.com/watch?v=62D2MHDYUBs',
      year: '2026',
      venue: 'Hanseatic Blockchain Institute',
      type: 'youtube',
      videoId: '62D2MHDYUBs',
    },
    {
      id: 'token2049-sg',
      title: 'On-Chain AI: Automating DeFi and Governance panel at Token2049 Singapore',
      href: 'https://www.youtube.com/watch?v=Y6qN68xVEPw',
      year: '2025',
      venue: 'Token2049 Singapore',
      type: 'youtube',
      videoId: 'Y6qN68xVEPw',
    },
    {
      id: 'seedclub-yield-agent',
      title: 'Explaining our Stablecoin Yield Agent with Seed Club at the 11am show',
      href: 'https://www.youtube.com/watch?v=EcTisvBrcWw',
      year: '2025',
      venue: 'Seed Club',
      type: 'youtube',
      videoId: 'EcTisvBrcWw',
    },
    {
      id: 'seedclub-1',
      title: 'Intersection of Crypto & AI with Seed Club at the 11am show',
      href: 'https://x.com/i/broadcasts/1dRKZYLVeZzxB',
      year: '2025',
      venue: 'Seed Club',
      type: 'x',
    },
  ],
  ui: {
    navWork: 'work',
    navWriting: 'writing',
    navTalks: 'talks',
    sectionWork: 'Work',
    sectionWriting: 'Writing',
    sectionTalks: 'Talks',
  },
};
