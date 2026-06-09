# TICKET-0004: Styling improvements

## State

- **status:** todo
- **commit:**
- **tests:**
- **opened:** 2026-06-09
- **closed:**

## Ask

Owner directive (2026-06-09): he expects **visible improvements to the styling**, not
just the copy rework. TICKET-0003's analysis judged the plain look sufficient; the
owner has overridden that — raise the visual quality.

## Definition of done

- [ ] A meaningfully more polished visual design: deliberate typographic scale and
      rhythm, refined spacing, a stronger hero, polished header/nav (including how it
      behaves at mobile widths), styled section transitions, and a footer that looks
      finished. The bar: a skeptical Swedish småföretagare should think "this person
      sweats the details."
- [ ] Choices still trace to the customer-trust analysis in
      `reports/TICKET-0003-report.md`: competent and trustworthy, not flashy or
      startup-glossy. No stock imagery. Restraint is part of the brief — but restraint
      executed with evident craft, which is different from default-styled HTML.
- [ ] Constraints hold: fully static, no build step, no frameworks; system font stack
      or self-hosted assets only (no external font/CDN requests — no tracking,
      privacy-clean); vanilla CSS; JS only if truly needed and degradable; relative
      URLs; works from disk and under the Pages subpath.
- [ ] Accessible: contrast ratios hold, focus states visible, semantic structure
      untouched or improved.
- [ ] `tests:` records what was actually checked (structural review minimum; note
      honestly what couldn't be verified without a browser).
- [ ] Committed with ticket id; ticket state updated with real values. Do NOT push —
      the assistant publishes after this lands (owner has approved publishing).

## Assumptions

- Color direction stays in the current family (light, dark-blue accent) unless a
  better-reasoned palette is argued from the trust analysis — note the reasoning
  either way.

## Notes

The live site (currently the pre-TICKET-0003 version) is at
https://jakupguven-ab.github.io/website/ . This ticket + TICKET-0003's voice rework
will be published together.
