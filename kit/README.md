# Virtuella medarbetare — concept components

Static, self-contained HTML concept screens for the "virtual employees" platform,
one component per screen, in three responsive tiers. Built for hand-off to a
developer to integrate into the marketing site / product.

## What's here

```
index.html            Preview gallery — open this first to see everything
assets/
  styles.css          Design tokens (colors, radii, font) + reveal animation
  reveal.js           Scroll-into-view reveal controller
desktop/  tablet/  mobile/
  onboarding.html     Meet the pre-staffed team + connect tools
  reception.html      Vera — bookings, quotes, approvals (chat + voice + buttons)
  economy.html        Emil — invoice watch-list, reminders, Fortnox
  academy.html        Course catalogue ("school")
  course.html         A single course opened — what the skill does
  customize.html      A live skill's settings (the few dials) + run-now
mobile/team.html      Team home (mobile only — the rail's stand-in)
```

Desktop = 3 panes (team rail · content · context). Tablet = 2 panes (the context
panel folds into a card at the top of the content). Mobile = 1 column with a
bottom bar; you drill in from `team.html`, and detail screens use a back header.

## Using a component

Each file is standalone and, in this repo's copy, makes **no network requests**:
the pages load self-hosted Inter and the Tabler Icons webfont from the repo's
`assets/fonts/` and `assets/icons/` (one level above this folder), plus the kit's
own `assets/styles.css`. To embed a screen, lift the `<div class="app">…</div>`
block and make sure the page also loads `styles.css`, `reveal.js`, and the
Tabler webfont.

Buttons are inert placeholders — wire them to real handlers on integration.

## Theming

All colour/spacing lives in `:root` in `styles.css` as CSS custom properties
(`--color-*`, `--border-radius-*`, `--font-sans`). Change them in one place to
re-skin every screen. A `prefers-color-scheme: dark` block is included.
`--color-accent` drives filled buttons and badges.

## Animation

Structure paints immediately. Elements marked `class="reveal"` start hidden and
rise in, in document order, when the component scrolls into view — then stay.
`reveal.js` adds `.js` to `<html>` so that without JavaScript everything is shown.
`prefers-reduced-motion` is respected (no animation, everything visible).
Tune the stagger via the `STAGGER` constant in `reveal.js`.

## Notes

- Icons are the Tabler outline webfont, self-hosted in this repo (no CDN).
- Copy is Swedish placeholder content for a glazier ("Glasmästeri Svensson AB");
  swap freely.
- This repo's copy differs from the original hand-off in two ways: asset links
  point at the self-hosted fonts/icons, and the academy screens carry no
  subscription amounts (site-wide rule: no prices anywhere).
- Min font size is 11px; layouts are pixel-tuned per tier rather than fluid,
  so treat them as design references the responsive build can follow.
