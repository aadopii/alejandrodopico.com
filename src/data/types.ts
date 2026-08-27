export interface ContactLink {
  label: string;
  href: string;
  /** Extra rel tokens beyond the automatic external-link noopener, e.g. ['me']. */
  rel?: string[];
}

export interface SubBullet {
  /** Markdown-lite text, may contain [label](href) links. */
  md: string;
  /** Optional key into FLAGS gating whether this line renders. */
  flag?: string;
}

export interface WorkBullet {
  /** Markdown-lite text for the whole bullet, e.g. "[Sailor](url) — open source harness...". */
  md: string;
  subBullets?: SubBullet[];
}

export interface WritingEntry {
  title: string;
  href: string;
  year: string;
}

export interface TalkEntry {
  /** Stable key into talkImages.ts for entries with a local screenshot. */
  id: string;
  title: string;
  href: string;
  year: string;
  venue: string;
  type: 'youtube' | 'x';
  /** Required when type === 'youtube'. */
  videoId?: string;
}

export interface SiteContent {
  lang: 'en' | 'es';
  name: string;
  /** Short tagline used in the <title> tag / OG image. */
  tagline: string;
  /** Per-locale <meta name="description"> / og:description / twitter:description text. */
  metaDescription: string;
  contact: ContactLink[];
  bio: string[];
  work: {
    /** Markdown-lite intro paragraph, e.g. contains a [Sail](url) link. */
    introMd: string;
    bullets: WorkBullet[];
    /** Markdown-lite outro paragraph (no links in v2 content). */
    outroMd: string;
  };
  writing: WritingEntry[];
  talks: TalkEntry[];
  /** Nav + UI strings, kept separate from content prose so labels can be
   * localized independently of whether the prose itself is translated. */
  ui: {
    navWork: string;
    navWriting: string;
    navTalks: string;
    sectionWork: string;
    sectionWriting: string;
    sectionTalks: string;
    stubNotice?: string;
  };
}
