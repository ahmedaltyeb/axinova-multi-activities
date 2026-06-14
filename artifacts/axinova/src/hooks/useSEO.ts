import { useEffect, useRef } from "react";
import { useLang } from "@/context/LanguageContext";
import { pageSEO, SITE_URL, OG_IMAGE, getOrganizationSchema } from "@/lib/seo";

const JSONLD_CLASS = "axinova-jsonld";

function setMeta(attrName: string, attrValue: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attrName}="${CSS.escape(attrValue)}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attrName, attrValue);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(href: string) {
  let el = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.rel = "canonical";
    document.head.appendChild(el);
  }
  el.href = href;
}

function injectJsonLd(schemas: object[]) {
  document.querySelectorAll(`script.${JSONLD_CLASS}`).forEach((el) => el.remove());
  schemas.forEach((schema) => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.className = JSONLD_CLASS;
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
  });
}

/**
 * Updates document.head with page-specific SEO metadata.
 * @param path - Route path, e.g. "/" or "/about"
 * @param extraSchemas - Optional additional JSON-LD schemas (define at module level to keep reference stable)
 */
export function useSEO(path: string, extraSchemas?: object[]) {
  const { lang } = useLang();
  const schemasRef = useRef(extraSchemas);

  useEffect(() => {
    const config = pageSEO[path];
    if (!config) return;

    const isAr = lang === "ar";
    const title = isAr ? config.titleAr : config.titleEn;
    const desc = isAr ? config.descAr : config.descEn;
    const keywords = isAr ? config.keywordsAr.join("، ") : config.keywordsEn.join(", ");
    const canonicalUrl = path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;
    const ogLocale = isAr ? "ar_AE" : "en_US";
    const ogLocaleAlt = isAr ? "en_US" : "ar_AE";
    const ogImageAlt = isAr ? "شركة أكسينوفا للأنشطة المتعددة" : "Axinova Multi Activities Company";

    // Document title
    document.title = title;

    // Standard meta
    setMeta("name", "description", desc);
    setMeta("name", "keywords", keywords);
    setMeta("name", "robots", "index, follow, max-image-preview:large, max-snippet:-1");

    // Open Graph
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", desc);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:url", canonicalUrl);
    setMeta("property", "og:image", OG_IMAGE);
    setMeta("property", "og:image:width", "1200");
    setMeta("property", "og:image:height", "630");
    setMeta("property", "og:image:alt", ogImageAlt);
    setMeta("property", "og:locale", ogLocale);
    setMeta("property", "og:locale:alternate", ogLocaleAlt);
    setMeta("property", "og:site_name", "Axinova");

    // Twitter / X card
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", desc);
    setMeta("name", "twitter:image", OG_IMAGE);
    setMeta("name", "twitter:image:alt", ogImageAlt);

    // Canonical
    setCanonical(canonicalUrl);

    // JSON-LD: Organization on every page + BreadcrumbList on inner pages + page-specific extras
    const schemas: object[] = [getOrganizationSchema()];
    if (path !== "/") {
      const pageLabel = isAr ? config.titleAr.split("|")[0].trim() : config.titleEn.split("|")[0].trim();
      schemas.push({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: isAr ? "الرئيسية" : "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: pageLabel, item: `${SITE_URL}${path}` },
        ],
      });
    }
    schemas.push(...(schemasRef.current ?? []));
    injectJsonLd(schemas);
  }, [lang, path]);
}
