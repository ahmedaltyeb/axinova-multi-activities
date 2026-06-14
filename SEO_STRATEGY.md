# SEO_STRATEGY.md
# Axinova Multi Activities Company — SEO Strategy

---

## 1. SEO Objectives

1. Rank for Arabic and English keywords in GCC/MENA for all 5 sectors
2. Establish Google Business presence for Axinova brand searches
3. Create a technical SEO foundation that scales with content growth
4. Enable Arabic-language search discoverability in Google MENA markets
5. Support future content marketing and lead generation through organic search

---

## 2. Target Keywords

### 2.1 Brand Keywords
```
axinova
axinova company
axinova multi activities
شركة أكسينوفا
أكسينوفا للأنشطة المتعددة
```

### 2.2 Primary Keywords by Sector

**Industrial:**
```
Arabic:
- شركة تصنيع في الخليج
- إنتاج المعكرونة في السعودية / الإمارات
- شركة تغليف في الخليج
- تصنيع البلاستيك في الإمارات

English:
- industrial manufacturing company GCC
- pasta manufacturing company UAE
- packaging solutions Middle East
- plastic manufacturing Gulf
```

**Trading:**
```
Arabic:
- توريد معدات صناعية في الخليج
- تجارة قطع الغيار الصناعية
- خطوط الإنتاج للبيع في الإمارات

English:
- industrial equipment supplier GCC
- production line supply Middle East
- spare parts trading UAE
```

**Technical Services:**
```
Arabic:
- خدمات الأتمتة الصناعية
- الدعم التقني للمنشآت الصناعية
- حلول الأتمتة في الخليج

English:
- industrial automation services GCC
- technical support manufacturing UAE
- automation solutions Middle East
```

**Logistics:**
```
Arabic:
- خدمات اللوجستيات في الإمارات
- شركة شحن وتخزين في الخليج
- إدارة سلسلة التوريد

English:
- logistics company UAE
- freight handling Middle East
- supply chain management GCC
```

**Construction:**
```
Arabic:
- مقاولات عامة في الإمارات
- شركة إنشاءات وبنية تحتية
- مشاريع هندسية في الخليج

English:
- general contracting company GCC
- infrastructure development UAE
- engineering projects Middle East
```

---

## 3. Technical SEO Implementation

### 3.1 Metadata Implementation

Every page must implement the Next.js Metadata API with full bilingual support:

```typescript
// Example: Home page metadata
// src/app/[locale]/page.tsx

import type { Metadata } from 'next';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const isArabic = locale === 'ar';

  return {
    title: isArabic
      ? 'شركة أكسينوفا للأنشطة المتعددة | حلول متكاملة لقطاعات متعددة'
      : 'Axinova Multi Activities Company | Integrated Multi-Sector Solutions',
    description: isArabic
      ? 'شركة أكسينوفا — حلول متكاملة في القطاعات الصناعية والتجارية والخدمية واللوجستية والإنشائية في منطقة الخليج والشرق الأوسط.'
      : 'Axinova Multi Activities Company — integrated solutions across industrial, trading, technical services, logistics, and construction sectors in the GCC and MENA.',
    keywords: isArabic
      ? ['أكسينوفا', 'شركة متعددة الأنشطة', 'حلول صناعية', 'لوجستيات الخليج']
      : ['Axinova', 'multi activities company', 'GCC solutions', 'industrial services'],
    openGraph: {
      type: 'website',
      url: `https://axinova.com/${locale}`,
      title: isArabic ? 'شركة أكسينوفا للأنشطة المتعددة' : 'Axinova Multi Activities Company',
      description: isArabic ? '...' : '...',
      images: [
        {
          url: 'https://axinova.com/og/home.jpg',
          width: 1200,
          height: 630,
          alt: isArabic ? 'شركة أكسينوفا' : 'Axinova Company',
        },
      ],
      locale: isArabic ? 'ar_AE' : 'en_US',
      siteName: 'Axinova',
    },
    twitter: {
      card: 'summary_large_image',
      title: isArabic ? 'شركة أكسينوفا للأنشطة المتعددة' : 'Axinova Multi Activities Company',
      description: '...',
      images: ['https://axinova.com/og/home.jpg'],
    },
    alternates: {
      canonical: `https://axinova.com/${locale}`,
      languages: {
        'ar': 'https://axinova.com/ar',
        'en': 'https://axinova.com/en',
        'x-default': 'https://axinova.com/ar',
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}
```

---

### 3.2 Structured Data (JSON-LD)

#### Organization Schema (All Pages)
```typescript
// src/lib/seo.ts
export function getOrganizationSchema(locale: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://axinova.com/#organization',
    name: 'Axinova Multi Activities Company',
    alternateName: 'شركة أكسينوفا للأنشطة المتعددة',
    url: 'https://axinova.com',
    logo: 'https://axinova.com/images/axinova-logo.svg',
    description: locale === 'ar'
      ? 'شركة أكسينوفا للأنشطة المتعددة'
      : 'Axinova Multi Activities Company — integrated multi-sector solutions',
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'info@axinova.com',
      contactType: 'customer service',
      availableLanguage: ['Arabic', 'English'],
    },
    sameAs: [
      'https://linkedin.com/company/axinova',
      'https://twitter.com/axinova',
    ],
  };
}
```

#### BreadcrumbList Schema (Inner Pages)
```typescript
export function getBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
```

#### LocalBusiness Schema (Contact Page)
```typescript
export function getLocalBusinessSchema(locale: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Axinova Multi Activities Company',
    email: 'info@axinova.com',
    url: 'https://axinova.com',
    description: locale === 'ar'
      ? 'شركة متعددة الأنشطة في الخليج العربي'
      : 'Multi-sector company in the GCC',
    areaServed: ['AE', 'SA', 'QA', 'KW', 'BH', 'OM'],
    knowsLanguage: ['ar', 'en'],
  };
}
```

---

### 3.3 Sitemap Configuration

```javascript
// next-sitemap.config.js
const config = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://axinova.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/api/*', '/404'],
  alternateRefs: [
    {
      href: 'https://axinova.com/ar',
      hreflang: 'ar',
    },
    {
      href: 'https://axinova.com/en',
      hreflang: 'en',
    },
    {
      href: 'https://axinova.com/ar',
      hreflang: 'x-default',
    },
  ],
  robotsTxtOptions: {
    additionalSitemaps: [],
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: '*',
        disallow: ['/api/'],
      },
    ],
  },
  transform: async (config, path) => {
    // Custom priority per page type
    const priorities = {
      '/ar': 1.0,
      '/en': 1.0,
      '/ar/contact': 0.9,
      '/en/contact': 0.9,
      '/ar/industries': 0.9,
      '/en/industries': 0.9,
    };
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: priorities[path] ?? config.priority,
      lastmod: new Date().toISOString(),
    };
  },
};

module.exports = config;
```

---

### 3.4 robots.txt

```
User-agent: *
Allow: /
Disallow: /api/
Disallow: /_next/

Sitemap: https://axinova.com/sitemap.xml
```

---

### 3.5 hreflang Implementation

Each page must include alternate links in metadata:
```typescript
alternates: {
  canonical: `https://axinova.com/${locale}/${slug}`,
  languages: {
    'ar': `https://axinova.com/ar/${slug}`,
    'en': `https://axinova.com/en/${slug}`,
    'x-default': `https://axinova.com/ar/${slug}`,
  },
}
```

---

## 4. On-Page SEO Requirements

### 4.1 Heading Hierarchy
Each page must use exactly one H1, followed by H2 for sections, H3 for subsections:
```
<h1> — Page primary headline (unique per page)
  <h2> — Section headings
    <h3> — Subsection or card titles
      <h4> — Minor sub-items
```

### 4.2 Image SEO
```typescript
// Every image must have descriptive, keyword-relevant alt text
<Image
  src="/images/industrial-sector.jpg"
  alt={locale === 'ar'
    ? 'القطاع الصناعي لشركة أكسينوفا — تصنيع وإنتاج'
    : 'Axinova Industrial Sector — Manufacturing and Production'
  }
  width={800}
  height={600}
/>
```

### 4.3 Internal Linking
- Every page must link to at least 2–3 related pages
- Sector cards on the home page link to /industries with anchor
- Services link back to relevant industries
- News articles link to relevant sector pages
- Contact page linked from every other page

---

## 5. Arabic SEO Specifics

### 5.1 Arabic Keyword Research Notes
- GCC users primarily use Google
- Arabic search queries often mix Arabic and English (Arabizi)
- Long-tail Arabic queries are less competitive than English equivalents
- Mobile search dominates in GCC — optimize for mobile indexing

### 5.2 Arabic Content Quality
- Use MSA (Modern Standard Arabic) — not Egyptian or Gulf dialect
- Avoid machine translation — use professional human translation
- Maintain consistency of terminology across all pages
- Use Arabic business terms that GCC decision-makers actually search

### 5.3 Arabic URL Structure
URLs use English slugs even for Arabic pages (better for sharing and crawling):
```
/ar/industries     ✅ — Arabic page, English slug
/ar/الصناعات      ❌ — Avoid Arabic in URL path
```

---

## 6. Performance SEO (Core Web Vitals)

Google uses Core Web Vitals as ranking factors. Required implementations:

```
LCP Optimization:
- Hero image must use priority={true} in next/image
- Preload hero image in document head
- Serve hero image in WebP format
- Size hero image appropriately per viewport

CLS Prevention:
- All images must have explicit width/height
- Font loading must use font-display: swap
- Reserve space for dynamically loaded content
- Avoid inserting content above existing content

FID/INP Optimization:
- Minimize client-side JavaScript
- Defer non-critical JS
- Use Server Components for non-interactive content
```

---

## 7. Google Search Console Setup Checklist

After launch:
- [ ] Verify axinova.com ownership in Search Console
- [ ] Submit sitemap: https://axinova.com/sitemap.xml
- [ ] Monitor coverage report for indexing errors
- [ ] Set target geographic region (UAE or GCC)
- [ ] Monitor Core Web Vitals report
- [ ] Set up International Targeting for Arabic/English

---

## 8. SEO Monitoring KPIs

| KPI                              | Tool                | Target           |
|----------------------------------|---------------------|------------------|
| Organic impressions (monthly)    | Search Console      | Growing MoM      |
| Average position (primary terms) | Search Console      | Top 20           |
| Click-through rate               | Search Console      | > 3%             |
| Core Web Vitals pass rate        | Search Console      | 100%             |
| Indexed pages                    | Search Console      | All 20+ pages    |
| Lighthouse SEO score             | Lighthouse          | ≥ 95             |
| Structured data errors           | Rich Results Test   | 0                |
