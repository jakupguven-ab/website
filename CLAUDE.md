# Business website — jakupguven-ab.github.io/website

## What this is
The public website for **Jakup Güven AB**: AI automation for Swedish småföretagare. A
simple, fast, **fully static** site whose job is credibility and contact — what a
prospect finds when they look the company up.

Company goals: HQ `C:\Users\Jakup\HQ\CLAUDE.md`. Pending work: `TODO.md`.

## Content scope — strict
The site presents **only the AI automation business**. Out of scope: financial targets,
pricing internals, personal goals, anything from internal planning. If it can't be said
to a prospective client's face, it doesn't go on the site.

The public-safe story:
- Jakup Güven AB builds **narrow, vertical AI agents for Swedish small businesses** —
  automating recurring admin (bookkeeping, receipts, invoices) by sitting **on top of the
  tools the business already uses** (Fortnox first), not replacing them.
- **Human-in-the-loop by design:** the AI proposes, deterministic checks validate, the
  owner approves — nothing is sent or booked without a human decision. Lead with it.
- **Swedish-first:** Swedish integrations, Swedish accounting rules done right, a local
  Malmö company you can talk to.
- **Publish no prices.** Contact: **info@jakupguven.se** — a mailto and the address in
  text. No forms, no backend.

## Technical constraints
- **Fully static** — plain HTML + CSS (vanilla JS only if truly needed). No frameworks,
  no build step, no CMS, no analytics/cookies (avoids the consent banner).
- Hosted on **GitHub Pages** from `main` / root; keep paths relative.
- **This repo is public** — never put anything non-public in it, including comments and
  commit messages.
- Swedish is the primary language. Responsive, accessible, fast. Text-first and honest;
  no stock-photo clutter.

## How to work
- Branch, commit, merge — fine. **Pushing `main` publishes the site**, so pushing, custom
  domains/DNS and anything outward-facing as the company is the owner's call.
- Verify by opening the page in a browser at phone and desktop widths, and say what you
  looked at.
- Make reasonable, flagged choices rather than stalling on uncertainty.
