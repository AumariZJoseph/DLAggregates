# DL Equipment & Aggregates Website — Handover

Last updated: 5 November 2026

## Project objective

Build a client-ready website for DL Equipment & Aggregates Ltd that positions the company for major B2B construction, demolition and land-development work in Saint Lucia.

The primary audience is government contractors, commercial developers, major construction firms and overseas contractors working locally. Block and aggregate sales already perform well; the website's main commercial job is to help DL win larger projects.

The owner has reviewed the demo and approved its overall look, feel and direction.

## Confirmed business information

- Company: DL Equipment & Aggregates Ltd
- Founder/owner: Dennis Louis, originally from Cacao, Babonneau
- Dennis's wife, Lindy Louis, has helped build the company from day one.
- Founded in 2014 with one 10-wheel dump truck.
- Expanded into heavy equipment, aggregates and construction materials in 2017.
- Based at Hill 20, Babonneau, Saint Lucia.
- Hill 20 is a store, sales depot, equipment yard and office.
- DL can lead projects as a general contractor or support another contractor as a specialist partner.
- Core work: construction, major demolition, land development, excavation, site clearing/preparation, road development, equipment rental, haulage and material supply.
- Major demolition is a genuine DL speciality. Its work is not limited to the named projects currently shown on the website.
- DL produces concrete blocks and sand in-house and supplies aggregates, cement and ready-mix.
- Blocks and aggregates can be bought and collected at Hill 20.
- Approximately 27–28 employees, with staffing increased for larger projects.
- DL maintains its fleet through an in-house garage with mechanics, electricians, welders and body technicians.
- Opening hours: Monday–Friday 8:00 AM–4:00 PM; Sunday 8:00 AM–1:00 PM.
- Main phone: +1 758 450 5997
- Other numbers: +1 758 715 0830 and +1 758 719 6705
- Email: dlequipment.aggregates@gmail.com

Founder statements worth preserving:

- “From scratch—from nothing to something—we develop it.”
- “Whatever we don't have, we can source. We don't back down from the work.”

## Information that remains provisional or incomplete

- Exact aggregate/material catalogue, grades, sizes and pricing
- Formal equipment schedule with makes, models, years, attachments, quantities and individual capacities
- The transcript mentioned seven excavators from approximately 3.5–35 tonnes, five 10-wheel dump trucks, four tractor heads, two cranes and other plant. Treat these as useful company context, not a final technical fleet specification.
- Detailed credentials, licences, insurance, safety certifications and procurement documentation
- Full project list, dates, locations, client permissions and measurable outcomes
- Approved client testimonials
- Confirmed social media URLs

Do not invent claims about hazardous-material removal, demolition permits, recycling rates, engineered demolition plans, aggregate specifications, equipment attachments or certifications.

## Current website status

### Substantially complete

- `index.html` — primary homepage
- `about/index.html` with `about/about.css` — full, copy-led company story
- `demolition/index.html` with `demolition/demolition.css` — full demolition service page
- `404.html`

### Contextual coming-soon pages

These contain relevant introductory copy but are not finished service/portfolio pages:

- `equipment-rental/index.html`
- `aggregates-materials/index.html`
- `haulage-services/index.html`
- `site-works/index.html` — currently covers construction/land development at a high level
- `projects/index.html`
- `contact/index.html`
- `blog/index.html`

### Important implementation notes

- `/demolition/` is the dedicated demolition route.
- Homepage and About-page demolition links already point to `/demolition/`.
- Construction and land-development links still point to `/site-works/`.
- `sitemap.xml` has not yet been updated to include `/demolition/`.
- The homepage quote form is a demo only. Validation works, but submissions are not sent anywhere.
- Homepage testimonials are explicitly marked illustrative and must be replaced with approved testimonials before launch.
- The project portfolio page is still a placeholder even though project previews appear on the homepage.
- `script2.js` appears unused. There is no current `index2.html`; the alternate homepage experiments were deleted.

## Recent design/content decisions

- Keep the existing industrial red/yellow/black/limestone visual system.
- Display type is Oswald; body type is Inter.
- The client prefers the original homepage over alternate homepage experiments.
- Avoid making the site feel overly blocky, templated or “conformist.”
- The red capability strip below the homepage hero was recently enlarged for readability and changed to a two-by-two grid on mobile.
- Retain the homepage service-reach element.
- The About page should tell DL's company story, not read primarily as Dennis's biography.
- The About page is intentionally copy-led with one supporting image.
- The red quote section at the bottom of the About page must remain unchanged unless the user explicitly requests otherwise.
- The testimonial section should remain visually restrained and carousel-based.
- Service pages should explain the service. Specific project case studies belong in the Projects/portfolio section.
- The demolition page therefore avoids naming projects in its main content and only links to completed work.

## Demolition page decisions

The demolition page is currently the most complete service page because the service itself is confirmed and DL has strong real-world experience.

It contains:

- Demolition-specific hero and CTAs
- Service overview and project-role positioning
- Major building demolition, equipment operations, haulage and site-clearance scope
- Four-stage enquiry/delivery explanation
- Supporting plant and in-house maintenance context without relying on exact fleet counts
- FAQ and conversion section

Do not turn this page into a project gallery. Use `/projects/` for named work and case studies.

## Known project/media context

The `Images/` directory contains supplied client photography and videos, including:

- Rex St. Lucian demolition (2018)
- Queenslane demolition
- Paix Bouche retaining-wall construction (2026)
- Buckeye project field media
- Fleet photography

The homepage currently previews Rex St. Lucian, Queenslane and Paix Bouche. These are examples, not DL's complete project record.

## Technical setup

- Static HTML/CSS/JavaScript; no package manager or build step
- Tailwind CSS CDN
- Google Fonts: Inter and Oswald
- Font Awesome CDN
- Shared styles: `styles.css`
- Shared behavior: `script.js`
- Coming-soon styling: `coming-soon.css`
- Local preview has been running at `http://127.0.0.1:5500/`
- Follow `DESIGN_SYSTEM.md` before changing or building pages.
- Preserve accessibility basics: semantic headings, descriptive alt text, visible focus, 44px+ controls, functional mobile menu and no horizontal overflow.

## Responsive and QA state

- Homepage and About page have been reviewed at common desktop/mobile widths.
- The demolition page was visually checked at full desktop width and at 375px mobile.
- Demolition mobile navigation, content stacking and fixed action bar render correctly.
- `script.js` passes `node --check`.
- `git diff --check` passes apart from normal Windows LF/CRLF notices.

## Source-control/deployment warning

The worktree is intentionally dirty. Existing changes belong to the user; do not reset or overwrite them.

At handover, modified/untracked work includes the homepage, About page, service placeholders, Projects/Contact pages, shared CSS, `README.md`, the new `demolition/` directory and `Images/`.

The entire `Images/` directory is currently untracked but is required by the website. It must be added to source control or included explicitly in deployment.

## Strong next steps

1. Update `sitemap.xml` with `/demolition/` and review site-wide navigation consistency.
2. Build the next confirmed service page. Land development/site works is likely the strongest candidate after demolition.
3. Obtain the formal fleet schedule before completing Equipment Rental.
4. Obtain the material catalogue before completing Aggregates & Materials.
5. Gather approved project details and build the real Projects portfolio/case-study pages.
6. Replace illustrative testimonials with approved client quotes.
7. Connect the quote form to email/CRM and remove the demo notice.
8. Confirm the final domain, social URLs, analytics, Search Console and production deployment setup.

## Primary reference files

- `README.md` — detailed business, SEO and content source of truth
- `DESIGN_SYSTEM.md` — mandatory design rules
- `index.html` / `styles.css` — established homepage system
- `about/index.html` / `about/about.css` — approved About direction
- `demolition/index.html` / `demolition/demolition.css` — completed service-page pattern
- `DL Aggregates Marketting Plan 2.md` — broader marketing context

