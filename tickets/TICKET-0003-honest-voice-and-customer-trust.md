# TICKET-0003: Honest one-person voice + design for target-customer trust

## State

- **status:** in-progress
- **commit:**
- **tests:**
- **opened:** 2026-06-09
- **closed:**

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
