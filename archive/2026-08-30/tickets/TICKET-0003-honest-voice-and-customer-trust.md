# TICKET-0003: Honest one-person voice + design for target-customer trust

## State

- **status:** done
- **commit:** 4426a7d0594f426663d16bb6b5a1ee19f8032298
- **tests:** No automated test suite exists (static HTML). Checks actually run:
  (1) regex sweep of index.html for residual plural forms
  `\b(vi|oss|vår|våra|vårt|ni|er|era|ert)\b` case-insensitive — zero matches;
  (2) anchor/id cross-check — all 6 `href="#…"` fragments resolve to existing
  ids; (3) manual read-through of the full rewritten file. NOT done: browser
  render check (no browser automation available) and Python HTML-parser
  well-formedness check (execution denied by environment). Site not pushed —
  publishing is the owner's step.
- **opened:** 2026-06-09
- **closed:** 2026-06-09

## Ask

Two owner directives (2026-06-09):

1. **Do not pretend there are more employees than the owner.** Right now it's one
   person. The current copy uses "vi/oss" throughout, which implies a team.
2. **Think deliberately about the target customer:** what would a Swedish
   småföretagare (hantverkare, restaurant owner, small service business) *expect* this
   company's website to look like? What would impress them, and what would make them
   trust the company? Then apply those conclusions to the site.

## Definition of done

- [ ] Written analysis first (in the report or ticket notes): who the target customer
      is, what they expect from a supplier's site, what builds trust for that audience
      (e.g. plain language, a real person with a name, org-nr, no inflated claims,
      signs of competence without jargon) and what *breaks* trust (stock-photo gloss,
      vague "we", buzzwords). Design/content decisions below must trace to it.
- [ ] All copy reworked to an honest one-person framing — no implied staff. (Swedish
      gives options: "jag", or company-as-subject like "Jakup Güven AB bygger…";
      choose deliberately and note why.) The one-person reality framed as the strength
      it is for this audience: you talk directly to the person who builds.
- [ ] Trust elements appropriate for a Swedish B2B audience considered and either
      added or explicitly rejected with a reason (e.g. owner's name prominent, org-nr
      in the footer, what happens when you email — who answers).
- [ ] All existing constraints hold: fully static, Swedish, relative URLs, no real
      estate, no prices, no internal details, info@jakupguven.se as contact,
      public-repo-safe.
- [ ] What was actually checked is recorded honestly in `tests:` (structural HTML
      review at minimum; browser check if possible).
- [ ] Committed with ticket id; ticket state updated with real values.

## Assumptions

- The owner's name appearing prominently is acceptable (it's the company name).
- Org-nr publication is the owner's open question (knowledge/working-notes.md) — make
  a recommendation, don't decide.

## Notes

The deployed site auto-updates on push to main (GitHub Pages). Do NOT push — commit
locally; publishing the revision is the owner's/assistant's step.

Implementation notes (developer, 2026-06-09): the required customer-expectation
analysis is in `reports/TICKET-0003-report.md` (written before the copy changes),
including the voice decision ("jag" primary, AB-as-subject at entity level, with
rationale) and the trust-element table (added: owner named, who-answers-email,
explicit one-person framing; recommended-not-decided: org-nr in footer — see
knowledge/working-notes.md; rejected with reasons: photo, testimonials, phone
number, stock imagery). Owner follow-ups surfaced: org-nr decision, read-through
of the new voice, and the push itself.
