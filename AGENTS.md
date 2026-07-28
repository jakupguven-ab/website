<!-- Local-loop rules for Website. Extends ~/.config/opencode/AGENTS.md; on specifics, this wins. -->

# Website — local-loop rules

The **PUBLIC** business website (live at github.io). Whatever lands here can be read by
anyone.

## Hard rules

- **Nothing confidential, ever.** No business-plan detail, financials, client names, client
  data, internal strategy, or ticket internals. If a change would leak any of that, stop.
- **Never push.** Publishing is a human action for this repo. Make the change on a branch,
  leave it for review.
- Keep the honest, non-hype voice the site already uses; don't invent claims or metrics.

## Bulk edits — verify per item, stage per path

Both rules below come from a measured failure on 2026-07-25, not from caution.

- **Verify every file you changed with a structural diff, not with the test suite.** In a
  35-file bulk run the model deleted the opening paragraph of 5 registry entries — including a
  load-bearing kontering on a live public site — and the build, all four test suites **and** the
  domain accuracy gate stayed green. Errors cluster by generation *batch*, not by file, so
  spot-checking one file tells you only about that batch. Assert per file on what must be
  **preserved**, or change one file per run.
- **Stage explicit paths after any local-model run — never `git add -A`, `.`, or a directory.**
  The harness writes its own chat transcript into the repo root (`.aider.chat.history.md`,
  `.aider.input.history`, `.aider.tags.cache.v4/`). A blanket add commits the model's
  conversation into the repo; on a public-site repo, that publishes it.

Evidence: `HQ/local-loop/FINDINGS-2026-07-25.md` §1 and §8. Policy adopted by the owner
2026-07-28 (WAITING-ON-JAKUP item 9).
