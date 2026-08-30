# Report — TICKET-0004 — 2026-06-09

<!-- This is the DEVELOPER'S OWN ACCOUNT of how the work went. It is provisional
     context, not proof of done. The operator may quote it (attributed) but never
     treats it as verified status. Be candid — uncertainty stated here is more useful
     than confidence asserted. -->

## What I did

Raised the visual quality of the single page (index.html + styles.css) per the
owner's directive, holding every choice against the TICKET-0003 trust analysis:
competent and deliberate, never agency-glossy. No copy was changed.

- **Typographic scale and rhythm.** Fluid clamp()-based scale for h1/h2/lead,
  tighter heading line-heights, slight negative letter-spacing on headings,
  `text-wrap: balance` (progressive enhancement), body line-height 1.7, section
  spacing widened to 4.5rem with a 600px breakpoint that compresses everything
  proportionally. System font stack unchanged — zero external requests.
- **Header.** Border now runs the full window width while content stays in the
  44rem column (new `.header-inner` wrapper, the only structural HTML addition).
  Nav links slightly smaller and muted, with an offset-underline hover. Stacks
  cleanly at mobile widths.
- **Hero.** Short accent rule above the h1, larger balanced heading, refined
  lead, and a calmer, better-proportioned button with a transition and active
  state. The same 2.25rem accent-rule motif repeats above every h2 — one small
  consistent mark, which is exactly the "sweats the details" signal the ticket
  asks for, at near-zero gloss cost.
- **Section rhythm.** Two sections — "Människan bestämmer" (the trust story) and
  "Vem du pratar med" (the named-person story) — sit on full-bleed tinted bands.
  Those two were chosen deliberately: they are trust-builders #1–#3 in the
  TICKET-0003 analysis, so they get the visual emphasis. The full-bleed is done
  with the box-shadow + clip-path technique inside an `@supports` guard; browsers
  without clip-path get a plain white page, nothing broken.
- **Components.** Principle list gets numbered accent circles via CSS counters;
  step cards get a 3px accent left edge, hairline border, and a barely-there
  shadow; bullet markers take the accent color; the contact email keeps its
  prominence with a tuned underline.
- **Footer.** Now a finished band: tinted background, top border, generous
  padding, muted links that warm to accent on hover.
- **Accessibility.** `:focus-visible` outlines site-wide; smooth scroll wrapped
  in `prefers-reduced-motion: no-preference`; `scroll-margin-top` on sections so
  anchor jumps don't pin headings to the viewport edge; `role="list"` added to
  both `list-style: none` ordered lists (Safari/VoiceOver drops list semantics
  otherwise — a real fix, not decoration). All color pairs hand-checked ≥ 7:1.

## Decisions I made

- **Stayed in the existing palette** (light, dark-blue accent) per the ticket's
  assumption. I deepened the alt background a touch (#f4f6f8 → #eef2f6) so the
  bands are perceptible rather than imaginary, and verified contrast still holds.
  Reasoning for staying: the analysis says glossy signals "expensive consultant";
  a restrained navy-on-white reads bank-like/competent, which is the target.
- **No sticky header, no JS, no animation beyond one 120ms button transition.**
  All were considered and rejected as gloss without trust payoff.
- **Which sections get bands** — chosen from the trust analysis, not symmetry:
  the human-in-the-loop principle and the named-person section are the two
  highest-trust-value passages, so they carry the emphasis.
- **clip-path full-bleed instead of restructuring the HTML** into wrapper divs.
  Keeps the markup semantic and the diff small; degrades to white via
  `@supports`. The trade-off is one moderately clever CSS technique in an
  otherwise boring stylesheet — flagged below as my main untested risk.

## What I'm unsure about

- **No browser render check was possible.** This is a visual ticket verified
  without eyes on pixels — the single biggest caveat. Structural checks all pass
  (see ticket `tests:`), and every technique used is one I'd consider
  well-supported, but someone should load the page (desktop + narrow window)
  before publishing. Specific things to eyeball: the full-bleed bands (no
  horizontal scrollbar, color reaches the window edges), the principle-number
  circles' vertical alignment, and the header wrap between ~480–600px.
- **The accent-circle numbers on the principle list** are read by most screen
  readers (CSS counter content is exposed) but pronunciation/ordering can vary;
  the surrounding `<strong>` lead-ins carry the meaning regardless, so the risk
  is cosmetic.
- Whether the owner finds this "visible enough." It is a clearly different page
  — bands, marks, cards, finished footer — but it is deliberately on the
  restrained end. If he wants more, the next honest lever is a real photo of him
  (the TICKET-0003 report already flagged that as owner-supplied or not at all),
  not more decoration.

## What I think remains

- Human eyeball pass in a real browser, desktop and mobile widths, before the
  assistant publishes.
- The org-nr-in-footer recommendation from TICKET-0003 is still open (owner
  decision); the footer now has a finished home for it whenever decided.
- Publishing itself — owner/assistant step, per the ticket I did not push.
