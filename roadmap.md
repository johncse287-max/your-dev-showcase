# Roadmap

- [x] Add Digital Marketing capabilities and Services sections; update positioning and navigation.
- [x] Verify internal routes, anchor links, contact validation/enquiry flow, and layouts at 375/768/1024/1280px; external website availability and email delivery require manual verification.

- [x] Design system: dark navy + blue/violet tokens in src/styles.css, fonts via link
- [x] Nav (sticky, mobile menu), Hero, About, Skills, Projects, Experience, Education, Contact sections
- [x] Demo routes: /demo/business-website, /demo/developer-dashboard
- [x] Contact form: mailto fallback, validated, honest limitations
- [x] SEO head metadata, favicon, 404, back-to-top
- [x] QA: build clean, no console errors, mobile menu + form validation verified in browser
- [x] Recruiter AI Q&A assistant (#ask)
- [x] CV PDF wired: Download CV + View CV in Hero; assistant cites CV
- [x] WordPress website setup added as a service (owner-confirmed; no project evidence claimed)

## Upgrade brief (owner, Nov 2026) — SEO, socials, showcase, conversion, monetization-ready
- [ ] Site config module (src/config/site.ts): social URLs, analytics IDs, ad/affiliate toggles — disabled by default
- [ ] Social links section: GitHub (from owner CV), personal website, email real; others placeholder "coming soon", no invented URLs
- [ ] JSON-LD: Person + WebSite + ProfessionalService on /, CreativeWork + BreadcrumbList on project detail pages
- [ ] Web app metadata in __root (theme-color, apple-touch) + heading hierarchy check
- [ ] Projects upgrade: screenshots (real captures), technologies, key features, live/GitHub links, category filters (Web Development, WordPress, Python, Game Dev, Programming), Growth Connect Hub added from owner CV
- [ ] Project detail pages: /projects/* with unique head metadata, CreativeWork JSON-LD, demos noindex
- [ ] Conversion: Hire Me CTA, Get a Free Consultation CTA, FAQ section (honest Q&A only), Fiverr placeholders
- [ ] Ad slots: AdSense-ready AdSlot component, disabled by default, never over hero/nav/projects/contact; affiliate + sponsored config with disclosure; "Advertise / Partnership Inquiry" contact option
- [ ] Analytics prep: GA4/GTM/GSC/Bing via env config, disabled by default, cookie consent banner when enabled
- [ ] Performance: lazy loading images, rel on external links
- [ ] sitemap.xml: deferred — no public project URL yet (per SEO policy); add after publish
- [ ] Final audit: routes, responsive, links, metadata, structured data; report manual items
- [ ] Do NOT publish without owner approval

Awaiting from owner: real LinkedIn/Fiverr/Facebook/YouTube/Instagram URLs, GA4/GTM IDs if wanted, affiliate links. GitHub URL available from owner's CV (github.com/imtiaz-Rafsan).
