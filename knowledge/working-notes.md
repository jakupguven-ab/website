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
- **status:** open

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

## Custom domain (jakupguven.se) comes later
- **note:** v1 hosts on the default GitHub Pages URL. Pointing jakupguven.se (or
  www/subdomain) at Pages needs DNS changes at the registrar — owner action, later
  iteration.
- **source:** assistant; GitHub Pages custom-domain mechanics
- **date:** 2026-06-09
- **status:** open
