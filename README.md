# CONSPORT — Website Redesign

Premium Greek-language redesign built with Next.js App Router, React, TypeScript and CSS.

## What is included

- Sticky responsive header with desktop dropdowns and mobile drawer
- Exact new primary IA: Η εταιρεία / Προϊόντα-Υπηρεσίες / Έργα / Νέα / Επικοινωνία
- Consolidated product/service architecture
- Homepage with company, quality/safety, products, projects, news and CTA
- Visual projects portfolio with category filtering
- Dedicated project pages + lightbox gallery
- News listing + article template
- Contact page with accessible validated form and mailto fallback
- Structured content in `src/data/site.ts`
- Greek SEO metadata, sitemap and robots.txt
- Reduced-motion support
- Consport green / white / orange design system
- Uploaded Consport logo at `public/images/consport-logo.jpg`
- Uploaded Projects reference screenshot at `public/images/projects-reference.png` for design reference only

## Important asset note

The redesign intentionally does **not** invent project photography. The bundled SVG artwork is a visual fallback so the application is immediately runnable. Before production, replace the files in `public/images/projects/` and `public/images/products/` with the licensed Consport project/product photographs from the current website/CMS. The filenames are already wired into the structured data, so no component changes are required.

## Install / run

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run start
```

## GitHub deployment

1. Create a repository.
2. Upload the complete folder contents, preserving the directory structure.
3. Connect the repository to Vercel or another Next.js-compatible host.
4. Set the project root to the repository root.
5. No database is required for the demo architecture.

## Contact form

The form validates required fields and opens the visitor's default mail client addressed to `info@consport.gr`. For a true server-side production submission flow, connect `ContactForm.tsx` to an approved transactional email provider/API without changing the visual component.

## Map

The contact page contains a clearly marked map slot. Replace it with the approved Google Maps or OpenStreetMap embed for the Consport address before launch.

## Content safety

No unsupported client list, project statistic, certification or company claim has been invented. Claims in the design are based on the current Consport website content supplied for the redesign brief.
