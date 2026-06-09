# TICKET-0002: Host the site on GitHub Pages

## State

- **status:** todo
- **commit:**
- **tests:**
- **opened:** 2026-06-09
- **closed:**

## Ask

Publish the v1 site using GitHub's free static hosting (GitHub Pages), per the owner's
instruction.

## Definition of done

- [ ] Repo exists on GitHub under `jakupguven-ab` as **public** (Pages on the free
      plan requires a public repo) with this repo's history pushed.
- [ ] GitHub Pages enabled, serving from `main` branch root.
- [ ] The site loads at its Pages URL; all assets and links resolve (relative paths).
- [ ] The Pages URL is recorded in this ticket and in README.

## Assumptions

- Default Pages URL (`jakupguven-ab.github.io/<repo>`) is fine for v1; the custom
  domain `jakupguven.se` is a later iteration requiring the owner's DNS access (see
  knowledge/working-notes.md).

## Notes

Repo creation, pushing, and enabling Pages are outward-facing actions performed by the
owner or the assistant under the owner's explicit instruction (given 2026-06-09) — not
by the developer agent, whose limits forbid pushing.
