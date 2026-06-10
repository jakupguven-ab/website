# TICKET-0006: Replace the akademi step card in "Så funkar det"

## State

- **status:** in-progress — development DoD items met (see checkboxes); awaiting the
  **Deployed** step, which is the owner's/strategist's per the DoD, not the developer's.
- **commit:** afd9c39d66d145e7321b83b1b6261778ef0618bd (index.html card swap)
- **tests:** no automated tests (static site — none exist). Checks actually run:
  (1) grep sweep of index.html for `akademi|kurs|ti-school` — after the swap the only
  remaining occurrences are inside the three aria-hidden device mockups (desktop/tablet
  sidebar icon, mobile tab label); judged product depiction, not dangling copy — left
  per scope, flagged in the report for owner judgement. (2) grep of index.html for
  `https?://|BankID|pris|kostar` — no matches; page stays fully local/static, no
  prices/BankID in copy (mockup fake kr amounts unchanged from before this ticket).
  (3) `ti-plug-connected` glyph confirmed present in vendored
  assets/icons/tabler-icons.min.css (and already used by the tablet mockup).
  (4) Rendered file:///index.html in headless Edge at 1280px, 800px and 390px widths
  and inspected screenshots: three-card grid composes at all three (one row at
  1280/800, single column at 390), narrative order meet team → connect tools → approve,
  reveal animation runs (captured mid-fade). NOT checked: live deployed render, real
  devices, screen reader.
- **opened:** 2026-06-11
- **closed:**

## Ask

Owner feedback on the live site (2026-06-11): the middle "Så funkar det" card —
"Lär dem mer i akademin / Skicka dem på kurs när du vill. Nya färdigheter, samma
trygga upplägg." — is overwhelming for someone who doesn't understand the product
yet. Remove it and replace it with a step a first-time visitor can grasp.

## Definition of done

- [x] The "Lär dem mer i akademin" card is removed from the "Så funkar det" grid in
      `index.html`.
- [x] Replaced with a connect-your-tools step so the narrative reads: meet the team
      → connect your tools → you approve. Proposed copy (adjust phrasing for flow,
      keep the meaning): heading **"Koppla dina verktyg"**, body **"Fortnox,
      kalendern och ditt telefonnummer — dina medarbetare arbetar i de system du
      redan använder."** Icon: swap `ti-school` for a connection icon from the kit's
      vocabulary (e.g. `ti-plug-connected`). *(Copy used verbatim as proposed; icon
      `ti-plug-connected`.)*
- [x] The three-card grid still composes correctly at all widths; reveal animation
      intact. *(Checked via headless-Edge renders at 1280/800/390px — see tests.)*
- [x] Sweep the served page for other "akademin"/course references that would now
      dangle or confuse a first-time visitor; adjust only what the removal breaks
      (the vendored `kit/` reference pages are not part of this — leave them).
      *(Sweep done; remaining mentions are inside the aria-hidden device mockups —
      judged product depiction, not broken by the removal; flagged in report.)*
- [x] No regressions on the standing rules: no prices, no BankID, no external
      requests, fully static, fake data stays fake. *(Grep-checked; only copy in the
      one card changed.)*
- [x] `tests:` field records what was actually checked, honestly.
- [ ] **Deployed:** pushed to origin and live render spot-checked — push performed
      by the owner or by the strategist per the same procedure as TICKET-0005
      (owner's 2026-06-10 deploy grant; this ticket is a correction to that same
      live deliverable).

## Assumptions

- Replacement copy above is the strategist's proposal under the owner's delegation
  ("replace with something else"); the owner may reword after seeing it live.

## Notes

Owner decision trail: HQ `knowledge/decisions.md` ("Website blend + desktop demo —
owner selections" and its amendments). This is a comprehension fix, not a reopening
of the claims-as-is decision.
