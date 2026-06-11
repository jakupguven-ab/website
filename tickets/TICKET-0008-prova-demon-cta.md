# TICKET-0008: Host the web demo in /demo/ + "Prova demon" CTA

## State

- **status:** todo — **blocked** on Platform TICKET-0009 producing the publish
  output
- **commit:**
- **tests:**
- **opened:** 2026-06-11
- **closed:**

## Ask

Owner decisions 2026-06-11: the Blazor WASM demo lives as a published artifact in
this repo's `demo/` folder (live at `https://jakupguven-ab.github.io/website/demo/`),
reached via a "Prova demon" CTA on the site. The owner accepts the demo as a
frozen snapshot — it is NOT kept in sync with the desktop app.

## Definition of done

- [ ] Platform TICKET-0009's publish output copied into `demo/` verbatim; the
      commit message cites the Platform commit SHA it was built from
      (`Publish from Platform <sha>`).
- [ ] `.nojekyll` added at the repo root (Pages must serve Blazor's `_framework/`
      directory).
- [ ] A **"Prova demon"** CTA linking to `demo/` (relative URL), placed in the
      hero CTA row and the final CTA section — exact arrangement is the
      developer's taste within the kit's visual language, weighed against the
      existing "Boka demo".
- [ ] Verified locally served under a subpath (simulating Pages): the demo loads,
      opens on onboarding, interactions respond; the CTA resolves.
- [ ] Standing rules for the handwritten site root unchanged: no prices, no
      BankID, no external requests, no build step *for the site itself* (the
      `demo/` folder is a published artifact — owner-scoped exception, recorded in
      HQ decisions.md), fake data stays fake.
- [ ] `tests:` field records what was actually checked, honestly.
- [ ] **Deployed:** pushed and live render spot-checked per the established
      procedure — both the landing page CTA and the live demo URL.

## Notes

Cross-repo trail: HQ TICKET-0001 (setup), Platform TICKET-0009 (WASM host source).
Do not start until TICKET-0009's output exists.
