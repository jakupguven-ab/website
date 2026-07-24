# TICKET-0007: Mobile mockup proportions in the device showcase (pinned)

## State

- **status:** todo (pinned 2026-06-11 — owner: "the 'mobile' concept art doesn't
  look like a mobile, more like a fat small tablet. Let's also pick that up later")
- **commit:**
- **tests:**
- **opened:** 2026-06-11
- **closed:**

## Ask

The mobile-device mockup in the site's device showcase (and possibly the kit's
`mobile/` tier proportions it derives from) reads as a small fat tablet rather
than a phone. Rework the mockup's aspect ratio/sizing so it reads unmistakably as
a phone, without touching the showcase's overall composition.

## Diagnosis (strategist, 2026-07-24) — why it reads as a tablet

Shaped, not built. The cause is concrete and worth recording before anyone touches CSS:

Every `kit/mobile/*.html` component (7 files: academy, course, customize, economy,
onboarding, reception, team) renders as
`<div class="app" style="width:320px;max-width:100%;…">` — **a fixed 320px width with no
height constraint at all.** Height is therefore purely content-driven. A card with only a
few rows of content ends up roughly as tall as it is wide, which is exactly the "fat small
tablet" silhouette the owner described. It is not a styling-polish problem; the component
has **no aspect ratio** to be wrong about.

For reference, real phones sit around **2.0–2.2:1** (height:width) — e.g. 390×844 ≈ 2.16:1.
320px wide therefore wants roughly **≥ 620–700px tall** to read unmistakably as a phone.

Note also that 320px is itself narrow by modern standards (that's iPhone-SE-era). Whether to
widen to ~360–390px and scale up, or keep 320px and add height, is a **design call** — the
two produce visibly different showcases. See "Open decision" below.

## Open decision for the owner (this is a taste call, not a technical one)

- **(a) Keep 320px, enforce a min-height** (~620–700px) so short components letterbox into a
  phone silhouette. Cheapest, least disruptive to the existing showcase composition.
- **(b) Re-base the tier to ~390px wide × ~844px tall** (a real modern phone), and rescale
  the contents. Truer to life; changes the showcase's visual balance against the desktop and
  tablet tiers, which the owner explicitly asked not to disturb.

**Recommendation: (a)** — it satisfies the stated complaint ("doesn't look like a mobile")
without touching the composition the same review approved. But this is the owner's call and
the ticket should not be built until he picks.

## Definition of done

- [ ] Owner picks (a) or (b) above. *(Blocking — do not build before this.)*
- [ ] All **7** `kit/mobile/*.html` components share one phone-like aspect ratio; the
      resulting height:width lands in **2.0–2.2:1** at the tier's nominal width. Checkable by
      measuring the rendered box of each of the 7, not by eyeballing one.
- [ ] The device showcase's **overall composition is unchanged** — `.devs` still lays out
      desktop/tablet/mobile in one bottom-aligned row with the same gap, and the mobile tier
      does not become the tallest element and dominate the row. Before/after screenshots at
      desktop width recorded in the ticket.
- [ ] Components still **scroll sideways inside their frame** rather than overflowing, on
      viewports narrower than the component (the behaviour `styles.css` documents at
      `.dev .appwrap { overflow-x: auto }`). Verified at 320px and 375px viewport widths.
- [ ] The grid still composes with **no horizontal page scroll** at 320 / 768 / 1024 / 1440.
- [ ] Standing site rules unchanged: **static, no external requests**, no new assets fetched
      at runtime.
- [ ] Deploy + live check per the established procedure — **owner's step, not the builder's**
      (this is a PUBLIC repo that publishes on merge).

## Non-goals / don't touch

- Do **not** restyle the desktop or tablet tiers; this ticket is the mobile tier only.
- Do **not** change any component's *content* (copy, rows, icons) to force a taller box —
  the fix is the frame's proportions, not padding the content.
- Do **not** alter `.devs` / `.dev` layout rules beyond what the aspect change strictly
  requires.

## Test anchors

- Phone aspect reference: 390×844 ≈ **2.16:1**; acceptance band **2.0–2.2:1**.
- The 7 component files listed in the Diagnosis — all must match; a fix applied to one is
  the classic partial here.
- `styles.css` lines ~133–140 (`.devs`, `.dev`, `.dev .appwrap`, `.devcap`) are the
  composition rules that must survive unchanged.

## Dependencies / blocked-by

- **Blocked-by: the owner's (a)/(b) decision above.** No code dependency otherwise.
- Related: [TICKET-0005](TICKET-0005-adopt-concept-design.md) (adopted the concept design this
  showcase came from) and [TICKET-0006](TICKET-0006-replace-academy-step-card.md).

## Notes

Raised by the owner reviewing the live site after [TICKET-0005](TICKET-0005-adopt-concept-design.md)/0006.
DoD shaped 2026-07-24 by the strategist (diagnosis + options only — **nothing built, nothing
deployed**), so the ticket is executable the moment the owner picks a resolution.
