# TICKET-0008: Host the web demo in /demo/ + "Prova demon" CTA

## State

- **status:** in-progress — all dev items done and locally verified; **Deployed**
  checkbox remains open (push + live spot-check is the strategist's step, not the
  developer's)
- **commit:** a952781 (demo/ artifact copy from Platform 6b764a0 + .gitattributes
  `demo/** -text`), c18ed17 (Prova demon CTAs + .nojekyll)
- **tests:** headless verification 2026-06-11 (Python http.server + Playwright
  headless Chromium, no foreground input): repo served at
  `http://127.0.0.1:8123/website/` to match the published lowercase
  `<base href="/website/demo/">`. Checked: landing loads (200); exactly two
  "Prova demon" CTAs with relative href `demo/` resolving to `/website/demo/`;
  real click on hero CTA navigates into demo; Blazor boots (no error UI); demo
  opens on onboarding ("Kom igång — Vi har satt ihop ditt team", screenshot
  confirmed); clicking "Ändra teamet" changed the DOM (interaction responds);
  zero failed requests, zero external (non-localhost) requests, zero console
  errors. Landing screenshots at 1280px and 375px confirm both CTA rows render.
  Artifact integrity: all 136 committed `demo/` blobs verified byte-identical
  to Platform publish output via `git show | cmp` (required amending the copy
  commit with `.gitattributes demo/** -text` — autocrlf had normalized
  `_framework/dotnet.js`, which would have broken Blazor's SHA-256 integrity
  check on Pages). NOT tested: the real GitHub Pages deployment (not pushed).
- **opened:** 2026-06-11
- **closed:**

## Ask

Owner decisions 2026-06-11: the Blazor WASM demo lives as a published artifact in
this repo's `demo/` folder (live at `https://jakupguven-ab.github.io/website/demo/`),
reached via a "Prova demon" CTA on the site. The owner accepts the demo as a
frozen snapshot — it is NOT kept in sync with the desktop app.

## Definition of done

- [x] Platform TICKET-0009's publish output copied into `demo/` verbatim; the
      commit message cites the Platform commit SHA it was built from
      (`Publish from Platform <sha>`). — commit a952781; all 136 blobs verified
      byte-identical to the publish output.
- [x] `.nojekyll` added at the repo root (Pages must serve Blazor's `_framework/`
      directory). — commit c18ed17.
- [x] A **"Prova demon"** CTA linking to `demo/` (relative URL), placed in the
      hero CTA row and the final CTA section — exact arrangement is the
      developer's taste within the kit's visual language, weighed against the
      existing "Boka demo". — commit c18ed17; arrangement rationale in the report.
- [x] Verified locally served under a subpath (simulating Pages): the demo loads,
      opens on onboarding, interactions respond; the CTA resolves. — headless
      check recorded in `tests:` below.
- [x] Standing rules for the handwritten site root unchanged: no prices, no
      BankID, no external requests, no build step *for the site itself* (the
      `demo/` folder is a published artifact — owner-scoped exception, recorded in
      HQ decisions.md), fake data stays fake. — only CTA hrefs/labels changed in
      index.html; headless check confirmed zero external requests site-wide.
- [x] `tests:` field records what was actually checked, honestly.
- [ ] **Deployed:** pushed and live render spot-checked per the established
      procedure — both the landing page CTA and the live demo URL.

## Notes

Cross-repo trail: HQ TICKET-0001 (setup), Platform TICKET-0009 (WASM host source).
Do not start until TICKET-0009's output exists.
