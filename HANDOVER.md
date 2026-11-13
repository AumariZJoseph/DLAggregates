# DL Equipment & Aggregates Website — Handover

Last updated: 12 November 2026

## Project objective

Build a client-ready website for DL Equipment & Aggregates Ltd that positions the company for major B2B construction, demolition and land-development work in Saint Lucia.

The primary audience is government contractors, commercial developers, major construction firms and overseas contractors working locally. Block and aggregate sales already perform well; the website's main commercial job is to help DL win larger projects.

The owner has reviewed the demo and approved its overall look, feel and direction.

## Confirmed business information

- Company: DL Equipment & Aggregates Ltd
- Founder/owner: Denis Louis, originally from Cacao, Babonneau
- Denis's wife, Lindy Louis, has helped build the company from day one.
- Founded in 2014 with one dump truck.
- Expanded into heavy equipment, aggregates and construction materials in 2017.
- Based at Hill 20, Babonneau, Saint Lucia.
- Hill 20 is a store, sales depot, equipment yard and office.
- DL can lead projects as a general contractor or support another contractor as a specialist partner.
- Core work: construction, major demolition, land development, excavation, site clearing/preparation, road development, equipment rental, haulage and material supply.
- Major demolition is a genuine DL speciality. Its work is not limited to the named projects currently shown on the website.
- Materials available from Hill 20 include concrete blocks manufactured in-house, sand, gravel, crushed stone, cement and ready-mix concrete. Customers can arrange collection or discuss site delivery with DL.
- Rental fleet includes seven excavators from approximately 3.5 to 35 tonnes, a bulldozer, one grader, rollers, a backhoe, dumpers, forklifts, 20-tonne dump trucks, smaller trucks and trailer trucks with lowboys, flatbeds and 20- and 40-foot beds.
- Crane trucks have rated lifting capacities from 2.5 to 45 tonnes. Heavy equipment haulage capacity is up to 30 tonnes, subject to the load, route and site access.
- Approximately 27–28 employees, with staffing increased for larger projects.
- DL maintains its fleet through an in-house garage with mechanics, electricians, welders and body technicians.
- Opening hours: Monday–Friday 8:00 AM–4:00 PM; Saturday closed; Sunday 8:00 AM–1:00 PM.
- Main phone: +1 758 450 5997
- Alternate phone: +1 758 719 6705
- Email: dlequipment.aggregates@gmail.com

Founder statements worth preserving:

- “From scratch—from nothing to something—we develop it.”
- “Whatever we don't have, we can source. We don't back down from the work.”

## Information that remains provisional or incomplete

- Material grades, product sizes and pricing can be handled by the depot when customers enquire. The site lists the confirmed product types.
- Formal equipment schedule with makes, models, years, attachments and machine-specific capacities. Operations can confirm availability and individual requirements for each hire.
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
- `equipment-rental/index.html` — confirmed fleet, hire information and quote links
- `aggregates-materials/index.html` — Hill 20 materials, collection guidance and hours
- `haulage-services/index.html` — equipment, container, materials and general trucking capabilities
- `site-works/index.html` — general contracting, construction and site works
- `projects/index.html` — named project records and field photographs
- `404.html`

### Other routes

- `blog/index.html` — coming-soon page
- `contact/index.html` — redirects to the homepage contact section

### Important implementation notes

- `/demolition/` is the dedicated demolition route.
- Homepage and About-page demolition links already point to `/demolition/`.
- Construction and land-development links still point to `/site-works/`.
- `sitemap.xml` has not yet been updated to include `/demolition/`.
- The homepage quote form is connected to Web3Forms. Confirm delivery to DL’s inbox before launch.
- Homepage testimonials are explicitly marked illustrative and must be replaced with approved testimonials before launch.
- `script2.js` appears unused. There is no current `index2.html`; the alternate homepage experiments were deleted.

## Recent design/content decisions

- Keep the existing industrial red/yellow/black/limestone visual system.
- Display type is Oswald; body type is Inter.
- The client prefers the original homepage over alternate homepage experiments.
- Avoid making the site feel overly blocky, templated or “conformist.”
- The red capability strip below the homepage hero was recently enlarged for readability and changed to a two-by-two grid on mobile.
- Retain the homepage service-reach element.
- The About page should tell DL's company story, not read primarily as Denis's biography.
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

The `Content/images/` and `Content/videos/` directories contain the photography and footage used by the site, including:

- Rex St. Lucian demolition (2018)
- Queenslane demolition
- LaCroix Chabeaux Road Repairs
- Paix Bouche retaining-wall construction (2026)
- Buckeye project field media
- Fleet photography

The homepage currently previews Rex St. Lucian, Queenslane and LaCroix Chabeaux Road Repairs.

## Technical setup

- Static HTML/CSS/JavaScript; no package manager or build step
- Tailwind CSS CDN
- Google Fonts: Inter and Oswald
- Font Awesome CDN
- Shared styles: `styles.css`
- Equipment Rental, Aggregates & Materials and Haulage share `service-pages.css` and use local layout styles.
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

Deploy both `Content/` subdirectories with the site. See [Media naming and storage](MEDIA_NAMING.md) for how to add and name assets.

## Strong next steps

1. Update `sitemap.xml` with `/demolition/` and review site-wide navigation consistency.
2. Gather approved project details for more substantial case studies.
3. Replace illustrative testimonials with approved client quotes.
4. Verify receipt of a test quote enquiry with DL.
5. Confirm the final domain, social URLs, analytics, Search Console and production deployment setup.

## Primary reference files

- `README.md` — detailed business, SEO and content source of truth
- `DESIGN_SYSTEM.md` — mandatory design rules
- `index.html` / `styles.css` — established homepage system
- `about/index.html` / `about/about.css` — approved About direction
- `demolition/index.html` / `demolition/demolition.css` — completed service-page pattern
- `DL Aggregates Marketting Plan 2.md` — broader marketing context

