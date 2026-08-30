# Report — TICKET-0005 — 2026-06-11

<!-- This is the DEVELOPER'S OWN ACCOUNT of how the work went. It is provisional
     context, not proof of done. The operator may quote it (attributed) but never
     treats it as verified status. Be candid — uncertainty stated here is more useful
     than confidence asserted. -->

## What I did

Rebuilt the public site from the owner's concept page with the three overrides
applied (no prices, Jakup Güven AB branding with org.nr and info@ contact, no
BankID anywhere). Vendored the component kit into `kit/` — the repo copy is
canonical now — and repointed all 20 kit pages from Google Fonts/jsDelivr to
self-hosted assets (`assets/fonts/` Inter variable woff2 latin+latin-ext,
`assets/icons/` Tabler webfont trimmed to a woff2-only @font-face). Replaced the
device-showcase placeholder frames with three real kit components inlined per the
kit README's embedding instructions: desktop reception (matches the hero's
approval story), tablet economy, mobile team. `styles.css` was rebuilt on the
kit's design tokens (incl. the dark block); `assets/site.js` merges the concept
page's section reveal with the kit's staggered component reveal.

Checks are recorded in the ticket's `tests:` field. Two real bugs were found by
checking rather than assuming: (1) the page overflowed horizontally on phone
widths because the showcase flex items refused to shrink (`min-width:auto`) —
fixed with `min-width:0` plus scroll-inside-frame for the wide mocks; (2) with
JavaScript disabled the concept's `.r` sections stayed invisible — the concept
page itself has this flaw; I gated the hiding rule on the `.js` class as the kit
already does.

## Decisions I made

- **Price inside the kit's academy screens.** The academy mocks listed a premium
  course at a monthly amount — a product price, which override 1 ("no prices
  anywhere") wins over "as-is". I removed the amount (the Premium badge stays)
  from all three academy files. Fake *customer* amounts (offert 1 850 kr, invoice
  sums) are explicitly allowed canned data and stay.
- **BankID band cell: replaced, not dropped.** The ticket allows either. I kept
  the 4-column composition by substituting a human-in-the-loop cell ("Du
  godkänner allt"), reusing the exact claim already made in "Så funkar det" —
  no new capability invented.
- **Inert concept buttons became real links.** "Boka demo" → mailto with a
  subject, "Möt ditt team" → #teamet, "Se hur det funkar" → #sa-funkar; nav
  "Priser" became "Kontakt". A live site with dead buttons felt worse than this
  small departure from as-is.
- **Footer links.** The concept's Integritet/Villkor/Kontakt point at "#" and no
  such pages exist; I replaced them with the visible mailto address (which
  override 2 requires anyway). If the owner wants privacy/terms pages, that's a
  new ticket.
- **Embedded mocks are decorative for assistive tech**: `aria-hidden` wrappers
  and `tabindex="-1"` on their placeholder controls, so keyboard/screen-reader
  users don't land in dead UI. Carried over the previous site's skip-link and
  `<main>` landmark.
- Kit README and styles comment updated so the canonical copies describe the
  self-hosted reality.

## What I'm unsure about

- **Contrast** in both schemes is inherited from the kit's tokens on trust; I did
  not measure ratios. Some kit text (11px tertiary on secondary background) may
  be below WCAG AA — but it sits inside decorative mocks.
- Only **headless Chrome 149** was used. No Firefox/Safari, no real phone, no
  screen reader. `color-mix()` in the header and variable-font weights are
  modern-browser features; older browsers degrade (solid header, default weight).
- On narrow phones the desktop/tablet mocks show their left edge and scroll
  sideways inside their frames. It works and is honest to the pixel-tuned kit,
  but a designer might prefer scaled-down images there.
- The favicon does not exist (browsers probe and get 404). Harmless; cosmetic.

## What I think remains

- The **Deployed** DoD item: push to origin and live spot-check — explicitly the
  owner's/strategist's step under the 2026-06-10 grant, not mine.
- Owner read-through of the judgment calls above, especially the academy price
  scrub and the band-cell replacement, in case he wants them resolved differently.
