# DL Equipment & Aggregates Ltd website handover

Updated 13 November 2026

## Current state

The site is a static HTML, CSS and JavaScript project prepared for launch testing. The approved hero copy and industrial design are intact. Search priorities are commercial demolition first, heavy equipment rental second, construction and civil works third, and haulage and trucking fourth. The Hill 20 materials depot has its own service page.

The homepage, About, five service pages, and Projects have indexable page content and are listed in the XML sitemap. The coming-soon Project Notes page stays available with a noindex directive. The Contact route takes visitors to the homepage contact section. The custom 404 page is available for the host to serve with an HTTP 404 status.

The illustrative testimonials have been removed from the homepage and its scripts and styles. Approved testimonials can be added after launch. Rex St. Lucian and Queenslane lead the demolition proof, with Buckeye and LaCroix Chabeaux supporting equipment and civil works. The existing galleries have direct links. A standalone Rex case study can follow once DL approves the project scope, location, dates, permissions and any outcomes to publish.

## Domain decision deferred

- Preferred domain: dlequipmentaggregatesltd.com. It is already owned by another party. The user has contacted the owner through GoDaddy and is exploring recovery. Ownership and hosting access remain unconfirmed.
- Fallback: dlequipmentaggregates.com. This is the strongest alternative identified by the user if the preferred domain cannot be recovered. Registration and control remain unconfirmed.
- The draft currently uses dlequipmentaggregates.com in the canonical links, Open Graph metadata, JSON-LD, sitemap and robots.txt. Treat those URLs as provisional until the final public hostname is chosen. Keep the preview access-controlled if it is hosted publicly before launch.
- Once ownership is confirmed, connect the chosen host, verify HTTPS, and make all public URLs use the same hostname. Redirect any controlled legacy domain and known old paths to their relevant equivalents. Confirm the WWW and HTTP variants, the slash policy and the Contact redirect on the actual host.

## Confirmed business information

- DL Equipment & Aggregates Ltd was founded in 2014 by Denis Louis of Cacao, Babonneau, with Lindy Louis involved from the beginning. DL expanded into heavy equipment and materials in 2017.
- Hill 20, Babonneau, Saint Lucia is the store, sales depot, equipment yard and office. Hours are Monday to Friday 8:00 AM to 4:00 PM, Saturday closed and Sunday 8:00 AM to 1:00 PM.
- Main phone +1 758 450 5997. Alternate phone +1 758 719 6705. Email dlequipment.aggregates@gmail.com. The former 715 number should be removed from directory listings.
- DL can lead an agreed scope as general contractor or work alongside a principal contractor. Core services include commercial and hotel demolition, construction, excavation, land development, site preparation, road works, equipment hire, haulage and materials.
- Hill 20 supplies in-house concrete blocks, sand, gravel, crushed stone, cement and ready-mix concrete. The depot handles pricing, grades, sizes, availability, collection and delivery enquiries.
- The fleet includes seven excavators from approximately 3.5 to 35 tonnes, one grader, a bulldozer, rollers, a backhoe, dumpers, forklifts, 20-tonne dump trucks, smaller trucks, trailer trucks, lowboys, flatbeds and 20- and 40-foot beds.
- Crane trucks have rated lifting capacities of 2.5 to 45 tonnes. Heavy equipment haulage is available up to 30 tonnes, subject to the load, route and site access. The in-house garage supports fleet maintenance.

Operations can confirm the specific machine, attachments and hire schedule for each job. Credentials, licences, insurance, safety certifications and procurement documents require confirmation before publication. Use only approved project outcomes and customer endorsements.

## Technical setup

- Static hosting serves the HTML files, stylesheets, shared script, fonts and Content folders directly. No Node runtime is required. Publish both Content subfolders and the fonts directory, alongside logo.jpg at the root.
- tailwind.css is the checked-in production stylesheet for templates that use Tailwind utility classes. The source is tailwind.input.css. If utility classes change, regenerate it from the repository root using the command below. The three newer service templates use styles.css and service-pages.css directly.
- Inter and Oswald use local WOFF2 files with licence notices in fonts/. Font Awesome 6.5.2 is pinned with integrity checking on pages that use it. The quote form uses Web3Forms and its captcha integration. The map uses Google Maps.
- The homepage hero uses a local poster and a deferred, muted loop. It pauses offscreen and serves the still to people with reduced motion enabled. Project and demolition videos are click-to-play. English caption tracks are present on the demolition and LaCroix videos. Have DL review the demolition captions against the spoken audio and replace the earlier website address in the video once the public domain is final. The page currently directs visitors to the correct enquiry details.
- See [Media naming and storage](MEDIA_NAMING.md) for the deployed assets. Keep Images/, NewContent/ and local working files out of the deploy.

    npx --yes tailwindcss@3.4.17 -i tailwind.input.css -o tailwind.css --content "index.html,about/index.html,blog/index.html,contact/index.html,demolition/index.html,projects/index.html,site-works/index.html" --minify

## Launch checklist

1. **Confirm the domain and hosting access.** Once available, set DNS and HTTPS, replace the provisional hostname everywhere, and verify live redirect behavior, a genuine HTTP 404, crawlable assets and sitemap URLs. Configure host-side caching, compression and security headers. Test any CSP with the captcha, quote form and map before enforcement.
2. **Verify enquiry delivery and contact details.** Send an agreed test from the live domain to the actual Web3Forms destination. Confirm receipt, reply-to details and error behavior with DL. Verify both phone links and the Hill 20 Maps pin. The website’s local tests use simulated form responses.
3. **Complete local listings and measurement.** Obtain Google Business Profile and Search Console access. Update FindYello and other controlled listings to the final domain, verified hours and two current numbers. Submit the live sitemap, inspect priority URLs, and set up analytics and lead measurement if approved. Track organic search separately from Maps.
4. **Review the published pages.** Check the final mobile experience, accessibility and Core Web Vitals. Local Chrome QA covered 11 routes at three widths, sitemap and metadata consistency, caption loading, and simulated quote success and failure. The homepage mobile Lighthouse LCP improved from 3.6 to about 2.7 seconds. Equipment Rental transferred fewer bytes, while its simulated mobile LCP was about 3.5 seconds versus 2.9 seconds in the earlier baseline. Investigate that result on the deployed host. Live performance, Google indexing and rankings require verification after deployment.
5. **Gather optional additions.** Obtain approved case-study details, testimonials, social URLs and any credentials DL wants published. Publish Project Notes and remove its noindex directive once there is substantive content. These additions can follow launch.
