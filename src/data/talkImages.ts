// Local talk screenshots, keyed by TalkEntry.id. Astro's image pipeline
// (resize + webp) requires a static import per file, which is why this
// lives in its own module rather than being a runtime path lookup.
//
// decasonic: source screenshot shows Host/Co-host/Speaker rows with
// "Following" buttons and "Follows you" badges painted out (solid black,
// matching the true-black source background). The real content is
// left-clustered in the frame, not centered -- a plain centered 4:3
// cover-crop would have clipped the "Host"/"Co-host"/"Speaker" labels
// on the left edge, so the source is pre-cropped to exactly 4:3
// (1123x842) before this import, making the card's object-fit:cover a
// no-op. Same CSS treatment as every other card; the fix lives in the
// asset, not a per-card style override.
import cambrian from '../assets/talks/cambrian_talk.png';
import decasonic from '../assets/talks/decasonic_talk.png';
import seedclub1 from '../assets/talks/seedclub_1_talk.png';

export const talkImages: Record<string, ImageMetadata> = {
  cambrian,
  decasonic,
  'seedclub-1': seedclub1,
};
