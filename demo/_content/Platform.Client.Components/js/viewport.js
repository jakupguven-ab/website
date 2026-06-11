// Viewport-tier probe (TICKET-0011). The responsive tiers are defined in CSS
// (css/app.css, TICKET-0010): desktop ≥960px, tablet 640–959px, mobile <640px.
// Routing is tier-agnostic, but one navigation decision (where onboarding lands)
// depends on the tier — this module lets C# ask the SAME question CSS answers,
// using the identical media query, so the two can never disagree.
export function isMobile() {
  return window.matchMedia("(max-width: 639.98px)").matches;
}
