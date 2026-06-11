# Report — TICKET-0008 — 2026-06-11

<!-- This is the DEVELOPER'S OWN ACCOUNT of how the work went. It is provisional
     context, not proof of done. The operator may quote it (attributed) but never
     treats it as verified status. Be candid — uncertainty stated here is more useful
     than confidence asserted. -->

## What I did

- Copied Platform TICKET-0009's publish output (136 files, ~17 MB) verbatim into
  `demo/` and committed it as `a952781` ("TICKET-0008: Publish from Platform
  6b764a0"). The Platform source tree was untouched.
- Added `.nojekyll` at the repo root so Pages serves `_framework/`.
- Added the "Prova demon" CTA in the hero and the final CTA section, both as
  relative `demo/` links (commit `c18ed17`).
- Verified locally under a simulated Pages subpath: a Python static server mapped
  `http://127.0.0.1:8123/website/` (lowercase, matching the published base href)
  onto the repo, and headless Playwright Chromium clicked through. Landing loads,
  both CTAs resolve to `/website/demo/`, the demo boots to the onboarding screen,
  an interaction ("Ändra teamet") visibly responds, and there were no failed
  requests, no external requests, and no console errors. Screenshots checked by
  eye at 1280px and 375px.

## Decisions I made

- **Caught and fixed a real integrity hazard:** the repo has `core.autocrlf=true`,
  and the first commit of `demo/` silently normalized line endings in
  `_framework/dotnet.js`. Blazor verifies SHA-256 integrity hashes at boot, so the
  deployed demo would have failed even though it worked from the working tree. I
  added a root `.gitattributes` with `demo/** -text` and amended the (unpushed)
  copy commit; afterwards all 136 committed blobs verify byte-identical to the
  publish output via `git show | cmp`.
- **CTA arrangement:** every CTA row on the page uses the kit's two-button rhythm
  (one solid accent, one ghost), so I kept it. Hero: "Prova demon" took the
  primary slot, replacing the "Möt ditt team" scroll anchor — a live demo is a
  strictly stronger exploratory action, and that section is the very next screen
  and in the nav. "Boka demo" stays as the hero ghost. Final CTA: "Boka demo"
  stays primary (it is the conversion goal); "Prova demon" replaced the
  "Se hur det funkar" back-scroll as the ghost. Net effect: every visitor sees
  both "try it now" and "talk to us" at top and bottom, with emphasis flipped to
  match intent at each position.
- Demo links open in the same tab (no `target="_blank"`); browser back returns to
  the landing page, and the kit has no precedent for new-tab links.

## What I'm unsure about

- The removal of the hero's "Möt ditt team" button is the most taste-driven call
  here. The ticket granted latitude, but if the owner liked the soft anchor, it is
  a one-line revert.
- I verified against my local subpath simulation, not real GitHub Pages. Pages'
  exact response headers (e.g. content types for `.wasm`/`.dat`) are known-good
  for Blazor in general, but the live spot-check after push is the real test —
  especially that `.nojekyll` does its job.
- The published demo ships `.br`/`.gz` siblings that plain Pages will never
  serve (no content-negotiation). Harmless, but ~2/3 of the 17 MB in the repo is
  dead weight; a future publish could drop compressed variants.

## What I think remains

- Push and live spot-check (strategist/owner step) — Deployed checkbox is
  deliberately unchecked; nothing was pushed.
- HQ decisions.md note about the owner-scoped "published artifact" exception is
  referenced by this ticket; a human should confirm it is recorded there (I do
  not write to any decisions.md).
