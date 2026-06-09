# TICKET-0001: Build the static business website, v1

## State

- **status:** in-progress
- **commit:** none yet — files written but uncommitted; git (Bash) was permission-denied in the build session
- **tests:** none — no browser, validator, or other check was run (tooling denied in session). Only the developer's own static read-through of index.html/styles.css; treat as unverified.
- **opened:** 2026-06-09
- **closed:**

## Ask

Build v1 of the public website for Jakup Güven AB's AI automation business, per the
content scope and technical constraints in this repo's CLAUDE.md.

## Definition of done

- [ ] Fully static: plain HTML + CSS at the repo root (`index.html` entry), no build
      step, no frameworks, no backend, no cookies/analytics.
- [ ] Content covers, in Swedish: what the company does (vertical AI agents automating
      admin for Swedish småföretagare, on top of tools like Fortnox), the
      human-in-the-loop trust story, how an engagement works (audit → build →
      retainer, **no prices**), about/credibility, and contact.
- [ ] Contact email **info@jakupguven.se** appears as visible text and a mailto link.
- [ ] Nothing about real estate, financial targets, internal plans, or pricing
      figures anywhere in content, comments, filenames, or commit messages (public
      repo).
- [ ] Responsive (readable on mobile and desktop) and reasonably accessible (semantic
      HTML, alt text, sufficient contrast).
- [ ] Works opened directly from disk and under a subpath (relative URLs only) — it
      will live at a GitHub Pages project URL.
- [ ] `tests:` field records what was actually checked (e.g. opened in browser at
      mobile/desktop widths, links resolve, HTML validates) — honestly; `none` if
      nothing was checked.

## Assumptions

- Swedish-only v1; design taste is the developer's call within "text-first, honest,
  fast" — the owner expects to iterate (see knowledge/decisions.md).

## Notes

Keep it small: a single page or a handful of pages. v1's job is to exist, be true,
and look competent — not to be clever. TICKET-0002 handles hosting.
