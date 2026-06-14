export const SITE_URL = "https://ahmedaltyeb.github.io/axinova-multi-activities";
export const OG_IMAGE = `${SITE_URL}/opengraph.jpg`;

export interface PageSEO {
  titleEn: string;
  titleAr: string;
  descEn: string;
  descAr: string;
  keywordsEn: string[];
  keywordsAr: string[];
  path: string;
}

export const pageSEO: Record<string, PageSEO> = {
  "/": {
    titleEn: "Axinova Multi Activities Company | Integrated Multi-Sector Solutions GCC",
    titleAr: "شركة أكسينوفا للأنشطة المتعددة | حلول متكاملة لقطاعات متعددة",
    descEn: "Axinova Multi Activities Company — integrated solutions across industrial, trading, technical services, logistics, and construction sectors in the GCC and MENA.",
    descAr: "شركة أكسينوفا — حلول متكاملة في القطاعات الصناعية والتجارية والخدمية واللوجستية والإنشائية في منطقة الخليج والشرق الأوسط.",
    keywordsEn: ["Axinova", "multi activities company", "GCC industrial solutions", "MENA construction", "industrial services Gulf"],
    keywordsAr: ["أكسينوفا", "شركة متعددة الأنشطة", "حلول صناعية خليجية", "إنشاءات الشرق الأوسط", "خدمات صناعية الخليج"],
    path: "/",
  },
  "/about": {
    titleEn: "About Axinova | 25 Years of Multi-Sector Excellence in GCC",
    titleAr: "عن أكسينوفا | 25 عاماً من التميز المتعدد القطاعات في الخليج",
    descEn: "Founded in 1999, Axinova has grown into a multi-sector powerhouse spanning industrial, trading, logistics, and construction across 12 GCC and MENA countries.",
    descAr: "تأسست أكسينوفا عام 1999 لتصبح قوة متعددة القطاعات في الصناعة والتجارة واللوجستيات والبناء عبر 12 دولة في الخليج والشرق الأوسط.",
    keywordsEn: ["Axinova company history", "GCC industrial company", "multi-sector GCC", "Axinova about us"],
    keywordsAr: ["تاريخ أكسينوفا", "شركة صناعية خليجية", "متعددة القطاعات", "عن أكسينوفا"],
    path: "/about",
  },
  "/industries": {
    titleEn: "Industries & Sectors | Axinova Multi Activities GCC",
    titleAr: "القطاعات الصناعية | أكسينوفا للأنشطة المتعددة",
    descEn: "Axinova operates across 5 integrated sectors: Industrial Manufacturing, Trading, Technical Services, Logistics, and Construction across the GCC and MENA.",
    descAr: "تعمل أكسينوفا في 5 قطاعات متكاملة: التصنيع الصناعي، التجارة، الخدمات الفنية، اللوجستيات، والبناء في منطقة الخليج والشرق الأوسط.",
    keywordsEn: ["industrial manufacturing company GCC", "logistics company UAE", "construction GCC", "technical services Middle East", "pasta manufacturing UAE"],
    keywordsAr: ["شركة تصنيع في الخليج", "لوجستيات الإمارات", "إنشاءات الخليج", "خدمات فنية الشرق الأوسط", "إنتاج المعكرونة في السعودية"],
    path: "/industries",
  },
  "/services": {
    titleEn: "Services | Axinova Technical & Industrial Services GCC",
    titleAr: "الخدمات | خدمات أكسينوفا الفنية والصناعية في الخليج",
    descEn: "Axinova provides industrial automation, equipment maintenance, technical consulting, and integrated project management services across the GCC.",
    descAr: "تقدم أكسينوفا خدمات الأتمتة الصناعية وصيانة المعدات والاستشارات الفنية وإدارة المشاريع المتكاملة في منطقة الخليج.",
    keywordsEn: ["industrial automation services GCC", "technical support manufacturing UAE", "automation solutions Middle East", "equipment maintenance Gulf"],
    keywordsAr: ["خدمات الأتمتة الصناعية", "الدعم التقني للمنشآت الصناعية", "حلول الأتمتة في الخليج", "صيانة المعدات الخليج"],
    path: "/services",
  },
  "/products": {
    titleEn: "Products | Industrial & Commercial Products Axinova GCC",
    titleAr: "المنتجات | منتجات أكسينوفا الصناعية والتجارية في الخليج",
    descEn: "Explore Axinova's product range: industrial equipment, food processing machinery, packaging solutions, and technical components serving the GCC market.",
    descAr: "تصفح منتجات أكسينوفا: المعدات الصناعية وآلات معالجة الأغذية وحلول التغليف والمكونات الفنية لسوق الخليج.",
    keywordsEn: ["industrial equipment supplier GCC", "production line supply Middle East", "spare parts trading UAE", "packaging solutions Gulf"],
    keywordsAr: ["توريد معدات صناعية في الخليج", "تجارة قطع الغيار الصناعية", "خطوط الإنتاج للبيع في الإمارات", "تغليف الخليج"],
    path: "/products",
  },
  "/projects": {
    titleEn: "Projects | Axinova Multi-Sector Project Portfolio GCC",
    titleAr: "المشاريع | محفظة مشاريع أكسينوفا المتعددة القطاعات",
    descEn: "Browse Axinova's portfolio of 500+ completed projects across industrial, logistics, and construction sectors in Saudi Arabia, UAE, Kuwait, and the GCC.",
    descAr: "استعرض محفظة أكسينوفا من أكثر من 500 مشروع منجز في القطاعات الصناعية واللوجستية والإنشائية في السعودية والإمارات والكويت والخليج.",
    keywordsEn: ["Axinova projects portfolio", "GCC construction projects", "industrial projects Middle East", "infrastructure projects GCC"],
    keywordsAr: ["مشاريع أكسينوفا", "مشاريع إنشاء الخليج", "مشاريع صناعية الشرق الأوسط", "مشاريع بنية تحتية الخليج"],
    path: "/projects",
  },
  "/investors": {
    titleEn: "Investor Relations | Axinova Multi Activities Company",
    titleAr: "علاقات المستثمرين | شركة أكسينوفا للأنشطة المتعددة",
    descEn: "Explore investment opportunities with Axinova — a multi-sector industrial leader in the GCC preparing for IPO. Review financial highlights and partnership models.",
    descAr: "استكشف فرص الاستثمار مع أكسينوفا — الرائد الصناعي متعدد القطاعات في الخليج المستعد للطرح العام الأولي. استعرض النتائج المالية ونماذج الشراكة.",
    keywordsEn: ["Axinova investor relations", "GCC industrial investment", "MENA IPO", "multi-sector investment Gulf"],
    keywordsAr: ["علاقات المستثمرين أكسينوفا", "استثمار صناعي خليجي", "اكتتاب الشرق الأوسط", "استثمار متعدد القطاعات"],
    path: "/investors",
  },
  "/news": {
    titleEn: "News & Updates | Axinova Multi Activities Company",
    titleAr: "الأخبار والتحديثات | شركة أكسينوفا للأنشطة المتعددة",
    descEn: "Latest news, press releases, and industry updates from Axinova Multi Activities Company — covering industrial, trading, and construction developments across the GCC.",
    descAr: "أحدث الأخبار والبيانات الصحفية من شركة أكسينوفا — تغطي التطورات الصناعية والتجارية والإنشائية في منطقة الخليج.",
    keywordsEn: ["Axinova news", "GCC industrial news", "MENA construction news", "Axinova press release"],
    keywordsAr: ["أخبار أكسينوفا", "أخبار صناعية خليجية", "أخبار إنشاءات الشرق الأوسط", "بيانات أكسينوفا الصحفية"],
    path: "/news",
  },
  "/careers": {
    titleEn: "Careers | Join Axinova Multi Activities GCC",
    titleAr: "الوظائف | انضم إلى أكسينوفا للأنشطة المتعددة في الخليج",
    descEn: "Explore career opportunities at Axinova — hiring engineers, project managers, logistics specialists, and business professionals across the GCC and MENA.",
    descAr: "استكشف فرص العمل في أكسينوفا — توظيف مهندسين ومديري مشاريع ومتخصصين في اللوجستيات والمهنيين التجاريين عبر منطقة الخليج والشرق الأوسط.",
    keywordsEn: ["Axinova careers", "jobs GCC", "engineering jobs UAE", "logistics jobs Middle East", "construction jobs Gulf"],
    keywordsAr: ["وظائف أكسينوفا", "وظائف الخليج", "وظائف هندسية الإمارات", "وظائف لوجستيات الشرق الأوسط"],
    path: "/careers",
  },
  "/contact": {
    titleEn: "Contact Us | Axinova Multi Activities Company GCC",
    titleAr: "تواصل معنا | شركة أكسينوفا للأنشطة المتعددة",
    descEn: "Contact Axinova Multi Activities Company for project inquiries, commercial quotes, investor relations, or career applications. Serving the GCC and MENA region.",
    descAr: "تواصل مع شركة أكسينوفا للاستفسارات عن المشاريع وعروض الأسعار وعلاقات المستثمرين وطلبات التوظيف. نخدم منطقة الخليج والشرق الأوسط.",
    keywordsEn: ["contact Axinova", "Axinova GCC office", "industrial company contact UAE", "Axinova email"],
    keywordsAr: ["تواصل مع أكسينوفا", "مكتب أكسينوفا الخليج", "بريد أكسينوفا", "استفسار أكسينوفا"],
    path: "/contact",
  },
};

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "Axinova Multi Activities Company",
    alternateName: "شركة أكسينوفا للأنشطة المتعددة",
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.svg`,
    description: "Axinova Multi Activities Company — integrated multi-sector solutions across industrial, trading, technical services, logistics, and construction in the GCC and MENA.",
    contactPoint: {
      "@type": "ContactPoint",
      email: "info@axinova.com",
      contactType: "customer service",
      availableLanguage: ["Arabic", "English"],
    },
    areaServed: ["AE", "SA", "QA", "KW", "BH", "OM"],
    knowsLanguage: ["ar", "en"],
    sameAs: [
      "https://linkedin.com/company/axinova",
      "https://twitter.com/axinova",
    ],
  };
}

export function getBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#localbusiness`,
    name: "Axinova Multi Activities Company",
    alternateName: "شركة أكسينوفا للأنشطة المتعددة",
    email: "info@axinova.com",
    url: SITE_URL,
    description: "Multi-sector industrial company serving the GCC and MENA region — industrial manufacturing, trading, technical services, logistics, and construction.",
    areaServed: ["AE", "SA", "QA", "KW", "BH", "OM"],
    knowsLanguage: ["ar", "en"],
  };
}
