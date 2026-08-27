// Minimal markdown-lite -> HTML for the `md` strings in content files.
// Handles `[label](href)` links and `**bold**` spans; everything else is
// escaped plain text. External (http/https) links get target="_blank"
// rel="noopener" automatically -- content files never need to specify
// that themselves. mailto:/tel: links are left as normal same-context
// links since they don't navigate the browser to another page.

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

const LINK_RE = /\[([^\]]+)\]\(([^)]+)\)/g;
const BOLD_RE = /\*\*([^*]+)\*\*/g;

export function renderInline(md: string): string {
  const placeholders: string[] = [];
  const stash = (html: string) => {
    placeholders.push(html);
    return `\x00${placeholders.length - 1}\x00`;
  };

  let withLinks = '';
  let last = 0;
  for (const m of md.matchAll(LINK_RE)) {
    const [full, label, href] = m;
    const start = m.index ?? 0;
    withLinks += md.slice(last, start);
    const isExternal = /^https?:\/\//i.test(href);
    const attrs = isExternal ? ' target="_blank" rel="noopener"' : '';
    withLinks += stash(`<a href="${escapeHtml(href)}"${attrs}>${escapeHtml(label)}</a>`);
    last = start + full.length;
  }
  withLinks += md.slice(last);

  let withBold = '';
  last = 0;
  for (const m of withLinks.matchAll(BOLD_RE)) {
    const [full, inner] = m;
    const start = m.index ?? 0;
    withBold += escapeHtml(withLinks.slice(last, start));
    withBold += stash(`<strong>${escapeHtml(inner)}</strong>`);
    last = start + full.length;
  }
  withBold += escapeHtml(withLinks.slice(last));

  // Loop (not a single replace pass): a bold span can wrap a link, which
  // leaves one placeholder nested inside another. String.replace does not
  // re-scan its own replacement text, so a single pass would leave the
  // inner token unresolved -- keep resolving until none remain.
  let result = withBold;
  while (/\x00\d+\x00/.test(result)) {
    result = result.replace(/\x00(\d+)\x00/g, (_, i) => placeholders[Number(i)]);
  }
  return result;
}
