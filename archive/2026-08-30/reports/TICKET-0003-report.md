# Report — TICKET-0003 — 2026-06-09

<!-- This is the DEVELOPER'S OWN ACCOUNT of how the work went. It is provisional
     context, not proof of done. The operator may quote it (attributed) but never
     treats it as verified status. Be candid — uncertainty stated here is more useful
     than confidence asserted. -->

## Target-customer analysis (written before any copy change)

### Who the customer is

A Swedish småföretagare: a hantverkare (snickare, elektriker, rörmokare), a
restaurant owner, a small service business. Typically 1–10 people, often the owner
doing the admin personally on evenings and weekends. Time-poor, practical,
allergic to consultant-speak. Critically: **many of them run one-person or
family firms themselves** — a one-person supplier is not exotic to them, it is
their own world.

### How they evaluate a supplier

They don't evaluate websites the way a tech buyer does. The site is a background
check, not a showroom. Typical behaviour before hiring an unfamiliar firm:

- Google the company name; look it up on allabolag.se/ratsit (org-nr, that the AB
  is real, that it isn't newly bankrupt).
- Look for **a named person** they would actually be dealing with.
- Look for a place — a town they recognize.
- Skim for what the company actually does, in words they use themselves
  ("kvitton", "fakturor", "Fortnox"), not abstractions ("digitalisering",
  "effektivisering av processer").
- Want to know what happens if they make contact — who answers, what the first
  step costs them in time and commitment.

### What builds trust for this audience

1. **A real, named person.** "You talk to the one who builds it" is a genuine
   selling point in a market where they're used to being handed between
   salespeople and "support".
2. **Honesty about size, stated plainly.** They respect a one-person firm that
   says so. What they punish is discovering the "vi" was one person all along —
   that reads as the small-time inflation they've seen from bad suppliers.
3. **Concrete, narrow promises.** "The agent prepares the bookkeeping entry, you
   approve it" beats any claim of full automation — they know bookkeeping has
   rules and an accountant, and they distrust anyone who pretends otherwise.
4. **Checkability.** An AB they can look up, an org-nr, a town, a direct email.
5. **Their tools by name.** Fortnox named explicitly signals the supplier lives
   in their world.
6. **Plain Swedish, fast plain site.** Their own sites are simple. A glossy
   agency-style site signals "expensive consultant", which repels rather than
   impresses.

### What breaks trust

- A faceless "vi" with no people behind it (the current site's main defect).
- Stock-photo gloss, buzzwords, English-isms, "AI-revolution" framing.
- Overpromising automation of regulated work (bookkeeping).
- No name, no org-nr, contact only via a form.
- Fake or vague social proof (testimonials that can't be checked).

### Voice decision

Primary voice: **"jag"**, with **"Jakup Güven AB" as subject** where the legal
entity is the natural subject (page title, meta description, hero first line,
footer). Reasons:

- "Jag" is the only register that *answers* the size question instead of dodging
  it. Company-as-subject everywhere would be grammatically honest but evasive —
  it avoids "vi" without ever admitting there's one person.
- The audience deals with one-person firms daily; "jag" is familiar and signals
  directness, not weakness.
- The company name still appears as subject at the entity level (title, hero
  opening, footer) so the site clearly belongs to a registered AB, which serves
  the checkability point above.

### Trust elements — added or rejected, traceable to the analysis

| Element | Decision | Traces to |
|---|---|---|
| Owner's name prominent (Om section, by name) | **Added** | builds-trust #1, #2 |
| "Who answers when you email" stated in Kontakt | **Added** | how-they-evaluate, builds-trust #1 |
| One-person reality stated explicitly and framed as direct access | **Added** | builds-trust #2 |
| Fortnox/kvitton/fakturor concreteness kept and kept plain | **Kept** | builds-trust #3, #5 |
| Org-nr in footer | **Not added — recommended** | builds-trust #4; it's the owner's open question (knowledge/working-notes.md), so I recommend rather than decide. My recommendation: add it. It's already public via allabolag, it's standard on Swedish company sites, and its absence is more conspicuous than its presence. |
| Photo of the owner | **Rejected for v1** | brief says text-first, no image asset exists; a missing photo breaks nothing, a bad one breaks builds-trust #6. Worth revisiting if the owner wants to supply one. |
| Testimonials/customer logos | **Rejected** | none exist yet; vague or fabricated social proof is a trust-breaker. Add real ones when they exist. |
| Phone number | **Not added** | not in the brief; publishing a personal number is the owner's call (public repo, public site). |
| Stock photos / illustrations | **Rejected** | breaks-trust list; brief explicitly says no stock-photo clutter. |

## What I did

- Wrote the analysis above first, then reworked all copy in `index.html` against
  it. Every "vi/oss/vår" implying staff is gone; voice is "jag" with the AB as
  subject at entity level.
- Renamed sections to match the voice: "Vad vi gör" → "Vad jag gör" (id
  `vad-jag-gor`), "Så arbetar vi" → "Så arbetar jag" (id `sa-arbetar-jag`).
  Internal anchors updated to match.
- Rewrote "Om företaget" → "Vem du pratar med": names Jakup Güven, states
  one-person explicitly, frames it as direct access and accountability.
- Kontakt now says who reads and answers the mail (Jakup, personally, no sales
  chain) and keeps info@jakupguven.se as the only channel.
- Hero CTA "Kontakta oss" → "Skicka ett mejl" (honest about what the action is;
  avoids the plural).
- No CSS changes — the analysis concluded the plain text-first design is already
  what this audience trusts; the defect was the voice, not the visuals.
- Added a working-notes entry with the org-nr recommendation and the voice
  decision (working tier, dated, attributed).

## Decisions I made

- "Jag" as primary voice rather than company-as-subject throughout — reasoning in
  the analysis. The owner should read the new "Vem du pratar med" and Kontakt
  sections and confirm they sound like him.
- Renaming anchor ids (`#vad-vi-gor` → `#vad-jag-gor`, `#sa-arbetar-vi` →
  `#sa-arbetar-jag`). The site is a single page and I found no external links to
  those fragments, but if anyone has shared a fragment URL it would silently
  scroll to top instead.

## What I'm unsure about

- Whether the owner wants his name in a section heading's body text ("drivs av
  mig, Jakup Güven") — the ticket's assumption says the name is acceptable, but
  the exact phrasing is mine.
- No browser render check was done (no browser automation here), and the Python
  HTML-parser check I attempted was denied by the environment. Actual checks:
  regex sweep for residual plural forms (vi/oss/vår/ni/er — zero matches),
  anchor-vs-id cross-check (all 6 fragment links resolve to existing ids), and a
  manual read-through of the full file I wrote. Tag structure is unchanged from
  the version already verified live, so render risk is low but not zero.

## What I think remains

- Owner decision: publish org-nr in the footer (recommended yes).
- Owner read-through of the new voice — does "jag" sound like him.
- Publishing is the owner's step: commit is local only, per the ticket.
