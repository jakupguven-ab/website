# TICKET-0001: Build the static business website, v1

## State

- **status:** done — closed 2026-06-12 by the strategist as record hygiene
  (owner instruction "perform hygiene tasks"). The state was stale: the checks
  this ticket was waiting on were run and recorded under successor tickets while
  this one stayed open. The v1 this ticket built has since been reworked
  (TICKET-0003 voice, TICKET-0004 styling, TICKET-0005 concept adoption); the
  DoD criteria below are verified-met on the live successor site.
- **commit:** 2c3ae97 (committed by the assistant on the developer's behalf — background
  agents cannot run git; authorship noted in the commit message)
- **tests:** assistant content-scope review of index.html 2026-06-09 (Swedish, no real
  estate/prices/internals, info@jakupguven.se as text + mailto, relative URLs only).
  The remaining checks (browser render, responsive, links) were performed on the
  successor site and recorded in TICKET-0005's tests field (headless Chrome 149,
  2026-06-10/11: file:// render, Pages-subpath simulation, responsive 390/1280 +
  programmatic overflow probes, 122 link references resolved, content greps — no
  prices, org.nr + info@ present) and TICKET-0002 (live fetch of the Pages URL).
  HTML-validator pass was never run — recorded honestly per the DoD's own rule.
  Owner approved the live site 2026-06-12 (knowledge/decisions.md).
- **opened:** 2026-06-09
- **closed:** 2026-06-12

## Ask

Build v1 of the public website for Jakup Güven AB's AI automation business, per the
content scope and technical constraints in this repo's CLAUDE.md.

## Definition of done

- [x] Fully static: plain HTML + CSS at the repo root (`index.html` entry), no build
      step, no frameworks, no backend, no cookies/analytics.
- [x] Content covers, in Swedish: what the company does (vertical AI agents automating
      admin for Swedish småföretagare, on top of tools like Fortnox), the
      human-in-the-loop trust story, how an engagement works (audit → build →
      retainer, **no prices**), about/credibility, and contact.
- [x] Contact email **info@jakupguven.se** appears as visible text and a mailto link.
- [x] Nothing about real estate, financial targets, internal plans, or pricing
      figures anywhere in content, comments, filenames, or commit messages (public
      repo).
- [x] Responsive (readable on mobile and desktop) and reasonably accessible (semantic
      HTML, alt text, sufficient contrast).
- [x] Works opened directly from disk and under a subpath (relative URLs only) — it
      will live at a GitHub Pages project URL.
- [x] `tests:` field records what was actually checked (e.g. opened in browser at
      mobile/desktop widths, links resolve, HTML validates) — honestly; `none` if
      nothing was checked.

## Assumptions

- Swedish-only v1; design taste is the developer's call within "text-first, honest,
  fast" — the owner expects to iterate (see knowledge/decisions.md).

## Notes

Keep it small: a single page or a handful of pages. v1's job is to exist, be true,
and look competent — not to be clever. TICKET-0002 handles hosting.
