# Project context — business website

## What this is
The public website for **Jakup Güven AB**'s AI business: AI automation for Swedish
småföretagare. A simple, fast, **fully static** site whose job is credibility and
contact — the first 2–3 clients come through network and presence, and this site is
what they find when they look the company up.

## Content scope — strict
The site presents **only the AI automation business**. Explicitly out of scope: the
company's property/real-estate activity, financial targets, pricing internals, personal
goals, or anything from the company's internal planning. If a piece of content can't be
said to a prospective client's face, it doesn't go on the site.

What the site says (the public-safe story):
- Jakup Güven AB builds **narrow, vertical AI agents for Swedish small businesses** —
  automating recurring admin (bookkeeping, receipts, invoices) by sitting **on top of
  the tools the business already uses** (Fortnox first), not replacing them.
- **Human-in-the-loop by design:** the AI proposes, deterministic checks validate, the
  owner approves — nothing is sent or booked without a human decision. This is the
  trust story; lead with it.
- **Swedish-first:** Swedish integrations (Fortnox, more coming), Swedish accounting
  rules done right, a local Malmö company you can talk to.
- Engagement model: it starts with a paid audit of the client's admin workflows, then a
  build, then ongoing iteration on retainer. Describe the shape; **publish no prices**.
- Contact: **info@jakupguven.se**. No forms, no backend — a mailto and the address in
  text is enough for v1.

## Technical constraints
- **Fully static** — plain HTML + CSS (vanilla JS only if truly needed). No frameworks,
  no build step, no CMS, no analytics/cookies in v1 (avoids the consent banner).
  Maintainable by one person around a day job.
- Will be hosted on **GitHub Pages**; keep everything relative-path friendly. The repo
  will be public — never put anything non-public in it, including in comments and
  commit messages.
- Swedish is the primary language of the site (the audience is Swedish småföretagare).
  An English version is a possible later iteration, not v1.
- Responsive, accessible, fast. No stock-photo clutter; text-first and honest.

## Direction and iteration
The owner has given direction in broad strokes and expects iteration: make reasonable,
flagged choices rather than stalling on uncertainty. Put open design questions in
`knowledge/working-notes.md` and ship the best honest v1.

---

# How this team operates

This repo follows the company's team model. **No layer is trusted to describe itself.
Ground truth lives in files**: `tickets/` (what's asked + state), the git log (what
changed), `knowledge/` (what's known/decided), `reports/` (the developer's own
provisional narrative).

- **State vs narration:** a ticket's status/commit/tests fields are trusted; prose
  about how it went is context, never proof. "Is it done" is answered by separating
  **claimed-done** from **verified-done** (linked commit + recorded test/check result).
- **The team:** you + the assistant shape tickets here; the **developer** (defined in
  HQ, `C:\Users\Jakup\HQ`) is fired at this repo and commits here; this repo's
  **@operator** is read-only, anchored here, and reports claimed-vs-verified. Nothing
  auto-routes.
- **Two-tier knowledge:** `knowledge/decisions.md` (verified, provenance required) vs
  `knowledge/working-notes.md` (provisional, dated, sourced). Never promote without
  evidence.
- **Human-in-the-loop:** publishing the site, custom domains/DNS, and anything
  outward-facing as the company is the owner's call. Build up to that line and stop.

Company-level context lives in HQ (`C:\Users\Jakup\HQ\knowledge\`) — read there if
needed; never copy it into this public repo.

@knowledge/CLAUDE.md
