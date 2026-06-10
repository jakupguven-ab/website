# TICKET-0005: Adopt the "Virtuella medarbetare" concept design and content

## State

- **status:** in-progress — all development DoD items implemented and committed;
  the single remaining item is **Deployed** (push + live spot-check), which is
  explicitly not the developer's to perform (owner/strategist per the 2026-06-10
  grant). Everything below "Deployed" is ready for that step.
- **commit:** be6afbf (in-progress), 0f4a509 (vendor kit + self-hosted fonts/icons),
  6b20127 (site rework), plus the state/report commit referencing this ticket
- **tests:** all checks run 2026-06-10/11 with headless Chrome 149 (no other
  browsers, no real devices, no screen reader):
  - external requests: page loaded over local HTTP with CDP network capture —
    8 requests, all same-origin (html, css x3, js, woff2 x2, + browser's
    automatic /favicon.ico probe, 404, no favicon exists); grep of all served
    HTML/CSS/JS found no absolute URLs (one `https://tabler.io` inside the
    Tabler license *comment* only — not a request)
  - link resolution: scripted check of 122 href/src/url() references in
    index.html, all 20 kit pages, and all CSS — all relative, all resolve on disk
  - opened from disk: file:// renders verified (screenshots inspected)
  - GitHub Pages subpath simulation: served repo parent as web root, loaded
    /Website/index.html — all assets resolved, zero 404 besides favicon probe
  - responsive: visual inspection at 1280px (light + dark) and true 390px via
    CDP device emulation; at 390px scrollWidth == clientWidth == 390 (no page
    overflow; wide mock components scroll inside their own frames — found and
    fixed a flex min-width overflow bug during this check); widths 360/390/760/
    820/1280 probed programmatically for overflow — none. No *visual* inspection
    at 760–820px (probe only; headless window clamps below ~500px without CDP)
  - dark mode: CDP-emulated prefers-color-scheme: dark — body bg = dark token
    #18120f, full-page screenshot inspected
  - reduced motion: CDP-emulated prefers-reduced-motion — all 26 reveal-marked
    elements fully visible, no animation
  - no-JS: script execution disabled — all 26 reveal-marked elements visible
    (found and fixed: `.r` was hidden without the `.js` gate; now gated)
  - content greps: zero BankID matches; zero price patterns (kr/mån, per månad,
    priser); canned fake amounts (1 850 kr etc.) intentionally retained;
    org.nr 559582-8921 and info@jakupguven.se present
  - accessibility: semantic landmarks/skip-link/aria-labels reviewed in code;
    mock UIs aria-hidden with controls taken out of tab order; NOT tested with
    a screen reader; contrast taken on trust from the kit tokens, not measured
- **opened:** 2026-06-10
- **closed:**

## Ask

Rework the public site to adopt the concept-art website (single HTML page supplied by
the owner) and its component kit, per owner decisions of 2026-06-10: concept content
and claims published **as-is**, with exactly two overrides — **no pricing anywhere**,
and **branding stays Jakup Güven AB**. Where "as-is" conflicts with those two
decisions, the decisions win.

## Definition of done

- [x] Site adopts the concept design system: design tokens from the kit's
      `assets/styles.css` (CSS custom properties incl. the `prefers-color-scheme:
      dark` block), Inter, Tabler icons, and the reveal-on-scroll animation
      (`prefers-reduced-motion` respected, no-JS shows everything).
- [x] Concept page structure and copy carried over as-is: hero with approval-card
      mock, "Så funkar det", "Lär känna teamet" (Vera/Emil/Siv), device showcase,
      integrations band, final CTA, footer.
- [x] **Override 1 — no prices:** the pricing section ("Ett team du kan växa med",
      all price cards and amounts) is removed entirely. No prices anywhere on the
      site, per the standing rule from TICKET-0001.
- [x] **Override 2 — brand:** all branding is **Jakup Güven AB** (header, title,
      footer with real org.nr 559582-8921), contact **info@jakupguven.se** as visible
      text + mailto. "Virtuella medarbetare" may describe the concept in copy but is
      not the site's brand mark.
- [x] **Override 3 — no BankID claims:** every BankID mention is removed (the hero
      trust-badge row and the "BankID-inloggning" item in the integrations band —
      replace or drop the band cell so the grid still composes). Owner decision
      2026-06-10 after strategist objection; the other capability claims stand as-is.
- [x] Device-showcase placeholder frames replaced with the real components from the
      kit (`desktop/`, `tablet/`, `mobile/`) per the developer note embedded in the
      concept page. The component kit is copied into this repo (it currently lives
      only at `C:\Users\Jakup\Downloads\ve` — fragile location).
- [x] Fonts and the Tabler icon webfont **self-hosted** — no Google Fonts or jsDelivr
      requests (GDPR; the page itself claims "data lagrad inom EU").
- [x] Still fully static: no build step, no frameworks, no cookies/analytics;
      relative URLs only; works opened from disk and under the GitHub Pages subpath.
- [x] All canned data stays visibly fake ("Glasmästeri Svensson AB", "Anders P.",
      placeholder amounts); nothing about real estate, financial targets, internal
      plans, or prices anywhere in content, comments, filenames, or commit messages.
- [x] Responsive and accessible: semantic HTML, alt text/aria labels on icon-only
      controls, sufficient contrast in both color schemes.
- [x] `tests:` field records what was actually checked (browser widths, dark mode,
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
