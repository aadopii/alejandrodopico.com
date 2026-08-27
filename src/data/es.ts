import type { SiteContent } from './types';

// Transcribed verbatim from website-content-es.md. Do not rephrase or
// summarize prose here -- edit website-content-es.md's intent, then
// mirror the exact change into this file's `md` / string fields.
//
// Two things worth knowing, both noted in website-content-es.md itself:
//
// 1. This content has NO [label](href) link syntax anywhere in the
//    source -- product names (Sailor, Sail Protocol, Stablecoin Yield
//    Agent, Fungi) are bold-only, "Whitepaper" is plain text, and the
//    Q4/Q1/Sonar/exploits sub-bullet items carry no links either. That
//    is a real link-parity gap versus English (which links all of
//    these), implemented literally because the source has no bracket
//    syntax and the instruction was "content is final, don't rewrite
//    it." Flagged, not silently equalized with English.
//
// 2. Authorship wording differs from English by the source's own
//    admission (its Notes section): English says "I personally built
//    and open-sourced"; this says "construimos" / "los productos que
//    construimos" (we built). Kept as written.
export const es: SiteContent = {
  lang: 'es',
  name: 'Alejandro Dopico',
  tagline: 'Complex problems | Money & AI',
  metaDescription:
    'Alejandro Dopico. Nacido en Caracas, hecho en Madrid. Cofundador y CEO de Sail, startup respaldada por venture capital donde construimos y distribuimos money agents a escala: +$1M en AUM, $700M en volumen, 300 usuarios. Antes, cofundé Boveda (almacenamiento descentralizado en Filecoin) y trabajé en banca y gestión de activos en Allfunds y Banco Santander.',
  contact: [
    { label: 'aadopii@gmail.com', href: 'mailto:aadopii@gmail.com' },
    { label: 'X', href: 'https://x.com/aadopico', rel: ['me'] },
    { label: 'GitHub', href: 'https://github.com/aadopii', rel: ['me'] },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/alejandro-dopico', rel: ['me'] },
  ],
  bio: [
    'Nacido en Caracas. Hecho en Madrid.',
    'Me gusta construir y vender soluciones a problemas complejos. La tecnología y los negocios son dos lugares naturales para ello, aunque también me interesan las derivadas de segundo orden en áreas no científicas como la filosofía, la historia, la economía y la política.',
    'Mis principales áreas de interés en los últimos años han sido los agentes de IA y las finanzas onchain. Primero, porque creo que estamos viendo nacer la economía agéntica, y segundo, porque creo que esa economía funcionará sobre infraestructura cripto.',
  ],
  work: {
    introMd:
      'Cofundador y CEO de **Sail** (antes Fungi), startup respaldada por fondos de venture capital donde construimos y distribuimos money agents a escala. Entre los productos que construimos se encuentran:',
    bullets: [
      {
        md: '**Sailor** — harness open source para money agents.',
      },
      {
        md: '**Sail Protocol** — protocolo onchain open source para cuentas de inversión personalizadas (SMAs). Whitepaper.',
      },
      {
        md: '**Stablecoin Yield Agent** — deposita stablecoins en dólares y euros para obtener un agente de IA que las mueve de forma autónoma entre protocolos DeFi para maximizar el rendimiento, con un motor de optimización propio.',
        subBullets: [
          { md: '+$1M en AUM, $700M en volumen, 300 usuarios.' },
          {
            md: 'Primer agente de IA en producción del mundo en ejecutar swaps y bridges autónomos de forma no custodial.',
            flag: 'firstLiveProduction',
          },
          { md: 'Dos trimestres consecutivos superando al mercado DeFi — Q4 2025 y Q1 2026.' },
          { md: 'Sonar, nuestro agente de seguridad, detectó cuatro exploits en DeFi.' },
          {
            md: 'Más de 60 fuentes de rendimiento para USDC y USDT, en Base y Arbitrum, en protocolos como Aave, Morpho, Fluid, Euler y más.',
          },
        ],
      },
      {
        md: '**Fungi** — interfaz de lenguaje natural para DeFi. Intercambia, presta, pide prestado y opera usando lenguaje natural.',
      },
    ],
    outroMd:
      'Antes de Sail, cofundé **Boveda**, un proveedor de almacenamiento descentralizado en Filecoin, donde almacenamos más de 1 PiB de datos reales en instalaciones de Madrid y California. Antes de eso, trabajé en banca y gestión de activos, en empresas como **Allfunds** y **Banco Santander**.',
  },
  // Titles verbatim in English -- deliberate (website-content-es.md note 4):
  // published at English URLs, translating would imply Spanish versions
  // exist and make the real ones unfindable. Years and hrefs unchanged.
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
  // Same six cards, same ids (-> same local images / same YouTube
  // thumbnails), same hrefs, same venue/year, titles verbatim in English.
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
      id: 'coinix',
      title: 'Personal AI agents for digital money with CoinIX',
      href: 'https://www.youtube.com/watch?v=WeSiThcpOWQ',
      year: '2026',
      venue: 'CoinIX',
      type: 'youtube',
      videoId: 'WeSiThcpOWQ',
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
    navWork: 'trabajo',
    navWriting: 'artículos',
    navTalks: 'entrevistas',
    sectionWork: 'Trabajo',
    sectionWriting: 'Artículos',
    sectionTalks: 'Entrevistas',
  },
};
