# Axinova Multi Activities Company — Corporate Website

A bilingual (EN/AR) corporate website for Axinova Multi Activities Company, a multi-sector GCC/MENA enterprise operating across Industrial, Trading, Technical Services, Logistics, and Construction.

## Run & Operate

- `pnpm --filter @workspace/axinova run dev` — run the Axinova website (port 18790, preview at `/`)
- `pnpm --filter @workspace/api-server run dev` — run the API server (port 8080)
- `pnpm run typecheck` — full typecheck across all packages

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Axinova: React + Vite, Tailwind CSS v4, Framer Motion, wouter routing, lucide-react
- API: Express 5, PostgreSQL + Drizzle ORM

## Where things live

```
artifacts/axinova/src/
  App.tsx                   — routes, providers (LanguageProvider, QueryClient, WouterRouter)
  context/LanguageContext.tsx — EN/AR toggle, sets html dir="rtl" for Arabic
  data/mockData.ts          — all mock data (sectors, projects, stats, team, services, news, careers, products, partners)
  components/
    Navbar.tsx              — fixed top nav, mobile drawer, lang toggle
    Footer.tsx              — multi-column footer
    SectionWrapper.tsx      — fade-in-on-scroll section wrapper + SectionHeading
    StatCounter.tsx         — count-up animation on scroll (framer-motion useInView)
    ScrollToTop.tsx         — ScrollRestorer (resets scroll on route change) + floating button
    Marquee.tsx             — infinite CSS marquee for partner logos
  pages/
    Home.tsx                — hero, sectors, overview, stats, projects, testimonials, partners marquee, CTA
    About.tsx               — story, mission/vision/values, ESG/certifications, team, milestones
    Industries.tsx          — 5 sector detail blocks with alternating layout
    Services.tsx            — services grouped by sector, how-we-work process
    Products.tsx            — filterable product grid (15 items)
    Projects.tsx            — filterable project grid (8 items)
    Investors.tsx           — financial metrics banner, revenue mix bars, opportunities, roadmap, form
    News.tsx                — featured article, filterable grid, newsletter signup
    Careers.tsx             — benefits, grad program callout, expandable job listings with inline apply forms
    Contact.tsx             — 4-tab contact form (General, Quote, Investor, Career)
    not-found.tsx           — branded 404
```

## Architecture decisions

- **Dark-by-default**: `<html class="dark">` in index.html. All light sections use Tailwind CSS `bg-background`/`bg-card` which resolve to dark navy via CSS vars.
- **Bilingual RTL**: `useLang()` returns `t(en, ar)` helper. Language toggle sets `document.documentElement.dir` — CSS logical properties (`start`/`end`, `ps-`/`pe-`) handle all layout flipping automatically.
- **Frontend-only**: No backend integration. All data is mock. Forms show success states on submit.
- **Framer Motion**: All section wrappers animate on scroll via `whileInView`. Stats count up via `useInView` hook.
- **Theme**: Deep navy `hsl(220,60%,8%)` backgrounds, `hsl(220,80%,45%)` accent blue, `hsl(42,90%,50%)` gold — all as hard-coded HSL values (not CSS vars) for dark-section overrides.

## Product

Full 10-page bilingual corporate website for a GCC multi-sector enterprise:
- Public-facing marketing site with professional navy + gold design
- Bilingual EN/AR with RTL layout switching
- Animated statistics, project gallery, filterable grids
- Investor relations page with financial metrics and inquiry form
- Careers page with expandable job listings and inline application forms
- Contact page with 4 form types

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

- Do NOT run `pnpm dev` at the workspace root — use `restart_workflow` instead
- Tailwind CSS v4 uses `@import "tailwindcss"` not `@tailwind` directives
- `dark` class on `<html>` is set statically in `index.html` — LanguageContext only manages `dir` and `lang`
- CSS logical properties (`ps-`, `pe-`, `start-`, `end-`) are used throughout for automatic RTL support
- Axinova uses `BASE_URL` from `import.meta.env.BASE_URL` in the Wouter `base` prop for path-based routing

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
- See `artifacts/axinova/src/data/mockData.ts` for all content/copy — edit here to change site content
