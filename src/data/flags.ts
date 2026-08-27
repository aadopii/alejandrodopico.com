// Content-layer decision flags. Each flag gates one specific claim in the
// content files so it can be cut without touching markup or content prose
// — flip the boolean, rebuild. See website-content.md's [DECISION FLAG] note.
export const FLAGS = {
  // "First live-production AI agent in the world to conduct autonomous
  // swaps & bridges non-custodially." Default per website-content.md: ships.
  firstLiveProduction: true,
};
