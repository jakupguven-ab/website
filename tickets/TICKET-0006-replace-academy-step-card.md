# TICKET-0006: Replace the akademi step card in "Så funkar det"

## State

- **status:** todo
- **commit:**
- **tests:**
- **opened:** 2026-06-11
- **closed:**

## Ask

Owner feedback on the live site (2026-06-11): the middle "Så funkar det" card —
"Lär dem mer i akademin / Skicka dem på kurs när du vill. Nya färdigheter, samma
trygga upplägg." — is overwhelming for someone who doesn't understand the product
yet. Remove it and replace it with a step a first-time visitor can grasp.

## Definition of done

- [ ] The "Lär dem mer i akademin" card is removed from the "Så funkar det" grid in
      `index.html`.
- [ ] Replaced with a connect-your-tools step so the narrative reads: meet the team
      → connect your tools → you approve. Proposed copy (adjust phrasing for flow,
      keep the meaning): heading **"Koppla dina verktyg"**, body **"Fortnox,
      kalendern och ditt telefonnummer — dina medarbetare arbetar i de system du
      redan använder."** Icon: swap `ti-school` for a connection icon from the kit's
      vocabulary (e.g. `ti-plug-connected`).
- [ ] The three-card grid still composes correctly at all widths; reveal animation
      intact.
- [ ] Sweep the served page for other "akademin"/course references that would now
      dangle or confuse a first-time visitor; adjust only what the removal breaks
      (the vendored `kit/` reference pages are not part of this — leave them).
- [ ] No regressions on the standing rules: no prices, no BankID, no external
      requests, fully static, fake data stays fake.
- [ ] `tests:` field records what was actually checked, honestly.
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
