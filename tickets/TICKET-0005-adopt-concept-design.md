# TICKET-0005: Adopt the "Virtuella medarbetare" concept design and content

## State

- **status:** todo
- **commit:**
- **tests:**
- **opened:** 2026-06-10
- **closed:**

## Ask

Rework the public site to adopt the concept-art website (single HTML page supplied by
the owner) and its component kit, per owner decisions of 2026-06-10: concept content
and claims published **as-is**, with exactly two overrides — **no pricing anywhere**,
and **branding stays Jakup Güven AB**. Where "as-is" conflicts with those two
decisions, the decisions win.

## Definition of done

- [ ] Site adopts the concept design system: design tokens from the kit's
      `assets/styles.css` (CSS custom properties incl. the `prefers-color-scheme:
      dark` block), Inter, Tabler icons, and the reveal-on-scroll animation
      (`prefers-reduced-motion` respected, no-JS shows everything).
- [ ] Concept page structure and copy carried over as-is: hero with approval-card
      mock, "Så funkar det", "Lär känna teamet" (Vera/Emil/Siv), device showcase,
      integrations band, final CTA, footer.
- [ ] **Override 1 — no prices:** the pricing section ("Ett team du kan växa med",
      all price cards and amounts) is removed entirely. No prices anywhere on the
      site, per the standing rule from TICKET-0001.
- [ ] **Override 2 — brand:** all branding is **Jakup Güven AB** (header, title,
      footer with real org.nr 559582-8921), contact **info@jakupguven.se** as visible
      text + mailto. "Virtuella medarbetare" may describe the concept in copy but is
      not the site's brand mark.
- [ ] **Override 3 — no BankID claims:** every BankID mention is removed (the hero
      trust-badge row and the "BankID-inloggning" item in the integrations band —
      replace or drop the band cell so the grid still composes). Owner decision
      2026-06-10 after strategist objection; the other capability claims stand as-is.
- [ ] Device-showcase placeholder frames replaced with the real components from the
      kit (`desktop/`, `tablet/`, `mobile/`) per the developer note embedded in the
      concept page. The component kit is copied into this repo (it currently lives
      only at `C:\Users\Jakup\Downloads\ve` — fragile location).
- [ ] Fonts and the Tabler icon webfont **self-hosted** — no Google Fonts or jsDelivr
      requests (GDPR; the page itself claims "data lagrad inom EU").
- [ ] Still fully static: no build step, no frameworks, no cookies/analytics;
      relative URLs only; works opened from disk and under the GitHub Pages subpath.
- [ ] All canned data stays visibly fake ("Glasmästeri Svensson AB", "Anders P.",
      placeholder amounts); nothing about real estate, financial targets, internal
      plans, or prices anywhere in content, comments, filenames, or commit messages.
- [ ] Responsive and accessible: semantic HTML, alt text/aria labels on icon-only
      controls, sufficient contrast in both color schemes.
- [ ] `tests:` field records what was actually checked (browser widths, dark mode,
      no-JS, link resolution, no external requests), honestly; `none` if nothing was.
- [ ] **Deployed:** the reworked site is live at the GitHub Pages URL and the live
      render is spot-checked. The push to origin is not the developer's to make — it
      is performed by the owner, or by the strategist under the owner's explicit
      2026-06-10 grant ("I want the website deployed … without having me in the
      loop for these two tickets").

## Assumptions

- Source files, both in a fragile location (Downloads) — copy into this repo as part
  of the work, then treat the repo copies as canonical:
  - concept page: `C:\Users\Jakup\Downloads\virtuella-medarbetare-webbplats.html`
    (encoding verified clean UTF-8, 2026-06-10)
  - component kit: `C:\Users\Jakup\Downloads\ve\`
  Not blocked — ready for pickup.

## Notes

Owner decision trail: HQ `knowledge/decisions.md`, "Website blend + desktop demo —
owner selections" (2026-06-10). The tension between publishing unbuilt capabilities
(BankID, ROT/RUT, inköp, akademin) and TICKET-0003's honest-voice principle was
flagged to the owner explicitly; the owner chose full concept copy regardless. Do not
water the copy down citing the earlier ticket — that decision is made.
