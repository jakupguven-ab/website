# Working notes — WORKING tier (Website scope)

Assumptions and open questions. Provisional, dated, sourced. Public repo — keep notes
public-safe.

---

## Swedish is the primary site language
- **note:** Audience is Swedish småföretagare, so v1 is in Swedish; English version is
  a possible later iteration. Not explicitly confirmed by the owner.
- **source:** assistant inference from the target market
- **date:** 2026-06-09
- **status:** open

## info@jakupguven.se mailbox may not exist yet
- **note:** The site displays info@jakupguven.se as instructed. Whether the mailbox is
  actually set up at the mail provider is the owner's action and unconfirmed — verify
  before the site is promoted anywhere.
- **source:** owner instruction gave the address; no confirmation the inbox exists
- **date:** 2026-06-09
- **status:** confirmed 2026-06-10 — owner states the mailbox exists

## v1 design choices made without owner sign-off (TICKET-0001)
- **note:** Developer choices, all open to iteration: (1) single page rather than
  multiple pages — content volume didn't justify more; (2) no images or logo, pure
  text-first as briefed; (3) light theme, system font stack, dark-blue accent
  (#0b4f8a) chosen for contrast, no brand palette exists yet; (4) tone is "du" form,
  plain Swedish; (5) the about-section wording ("Litet med avsikt…") is the
  developer's framing of credibility for a one-person company — owner should read and
  confirm it sounds like him; (6) footer says "Malmö" per the brief but no street
  address/org-nr is published — common on Swedish company sites to include org-nr,
  owner's call whether to add it.
- **source:** developer (TICKET-0001 implementation)
- **date:** 2026-06-09
- **status:** open

## Voice is "jag" + company-as-subject at entity level (TICKET-0003)
- **note:** Per owner directive, all "vi/oss" copy was reworked to a one-person
  voice. Choice: "jag" as primary voice, "Jakup Güven AB" as subject only where
  the legal entity is the natural subject (title, meta, hero opening, footer).
  Rationale (full analysis in reports/TICKET-0003-report.md): "jag" answers the
  size question honestly instead of dodging it, and the target audience deals
  with one-person firms daily. Owner should read the new "Vem du pratar med" and
  Kontakt sections and confirm the voice sounds like him.
- **source:** developer (TICKET-0003 implementation)
- **date:** 2026-06-09
- **status:** open — awaiting owner read-through

## Org-nr in footer — developer recommendation: add it (TICKET-0003)
- **note:** Still the owner's open call (see TICKET-0001 note above), but
  TICKET-0003's customer analysis strengthens the case for publishing it: the
  target audience routinely checks suppliers on allabolag.se, the org-nr is
  already public there, it's standard practice on Swedish company sites, and its
  absence is more conspicuous than its presence. Not added pending owner
  decision.
- **source:** developer (TICKET-0003 customer-expectation analysis)
- **date:** 2026-06-09
- **status:** open — owner decision

## Concept adoption: judgment calls inside the overrides (TICKET-0005)
- **note:** Developer choices where the ticket left room, all open to owner
  revision: (1) the kit academy screens showed a premium-course monthly amount —
  treated as a product price and removed under override 1; fake customer amounts
  kept as allowed canned data; (2) the BankID band cell was *replaced* (not
  dropped) with a "Du godkänner allt" cell reusing existing page copy, keeping
  the 4-column band; (3) the concept's inert buttons became mailto/anchor links,
  and the footer's dead Integritet/Villkor "#" links were replaced by the visible
  mailto (no such pages exist — separate ticket if wanted); (4) embedded product
  mocks are aria-hidden and out of tab order; on narrow phones they scroll
  sideways inside their frames rather than shrinking.
- **source:** developer (TICKET-0005 implementation; details in
  reports/TICKET-0005-report.md)
- **date:** 2026-06-11
- **status:** open — owner read-through

## Custom domain (jakupguven.se) comes later
- **note:** v1 hosts on the default GitHub Pages URL. Pointing jakupguven.se (or
  www/subdomain) at Pages needs DNS changes at the registrar — owner action, later
  iteration.
- **source:** assistant; GitHub Pages custom-domain mechanics
- **date:** 2026-06-09
- **status:** open
