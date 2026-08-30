# Report — TICKET-0006 — 2026-06-11

<!-- This is the DEVELOPER'S OWN ACCOUNT of how the work went. It is provisional
     context, not proof of done. The operator may quote it (attributed) but never
     treats it as verified status. Be candid — uncertainty stated here is more useful
     than confidence asserted. -->

## What I did

Replaced the middle "Så funkar det" card in `index.html` (one-line change, commit
`afd9c39`). The akademi card ("Lär dem mer i akademin" / kurs copy, `ti-school`) is
gone; in its place is "Koppla dina verktyg" / "Fortnox, kalendern och ditt
telefonnummer — dina medarbetare arbetar i de system du redan använder." with
`ti-plug-connected`. The strategist's proposed copy read fine as-is, so I used it
verbatim rather than rewording. The card keeps the exact same markup shell
(`card step r`, `.n` icon box), so the grid CSS and the IntersectionObserver reveal
are untouched by construction — and I confirmed by rendering, not just by reasoning:
headless Edge screenshots of the local file at 1280px, 800px and 390px show the three
cards composing (row / row / single column) in the order meet team → connect tools →
you approve, with the reveal animation mid-fade at capture time.

## Decisions I made

- **Left the akademi traces inside the device mockups.** After the swap, the only
  remaining "akademi"/`ti-school` occurrences on the served page are inside the three
  `aria-hidden` device mockups: a small sidebar icon in the desktop and tablet mocks
  (aria-labels invisible to assistive tech because of the hidden ancestor) and a
  visible "Akademin" tab label in the mobile mock's bottom bar. I judged these as
  product depiction — a screenshot of the app as it is — not page copy that the card
  removal breaks, and the ticket notes this is "not a reopening of the claims-as-is
  decision". So I adjusted nothing there.
- Used the proposed copy and `ti-plug-connected` exactly as the ticket suggested;
  verified the glyph exists in the vendored Tabler CSS (it's already used by the
  tablet mockup's Fortnox chip).

## What I'm unsure about

- The judgement call above is the one to review: the **mobile mockup's visible
  "Akademin" tab label** is now the only place a first-time visitor sees the word, with
  no explanation anywhere on the page. I think an unexplained feature name inside a
  fake phone screen is normal screenshot texture, not confusion — but if the owner
  disagrees, it's a one-word swap in the mobile mock's tab bar.
- I verified composition via headless-Edge screenshots of the local file, not in a
  live browser session or on real devices; intermediate widths between my three test
  points are covered only by the CSS logic (single breakpoint at 720px), not by
  observation.

## What I think remains

- The **Deployed** DoD item: push to origin and spot-check the live render — the
  owner's/strategist's step under the 2026-06-10 deploy grant, deliberately not done
  by me. The ticket stays `in-progress` until then.
- Owner may want to reword the new card after seeing it live (anticipated in the
  ticket's Assumptions).
