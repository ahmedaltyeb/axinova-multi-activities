import { Link } from "wouter";
import { Linkedin, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { useLang } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="bg-[hsl(220,60%,6%)] text-white border-t border-white/10">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold tracking-widest uppercase mb-4">
              Axinova<span className="text-[hsl(42,90%,50%)]">.</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              {t(
                "A multi-sector enterprise building the industrial and commercial future of the GCC and MENA region.",
                "مؤسسة متعددة القطاعات تبني المستقبل الصناعي والتجاري لمنطقة الخليج العربي والشرق الأوسط."
              )}
            </p>
            <div className="flex items-center gap-4">
              <a href="#" aria-label="LinkedIn" className="text-white/40 hover:text-[hsl(42,90%,50%)] transition-colors" data-testid="footer-linkedin">
                <Linkedin size={18} />
              </a>
              <a href="#" aria-label="Twitter" className="text-white/40 hover:text-[hsl(42,90%,50%)] transition-colors" data-testid="footer-twitter">
                <Twitter size={18} />
              </a>
              <a href="#" aria-label="Instagram" className="text-white/40 hover:text-[hsl(42,90%,50%)] transition-colors" data-testid="footer-instagram">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-[hsl(42,90%,50%)] mb-4">
              {t("Company", "الشركة")}
            </h4>
            <ul className="space-y-2.5">
              {[
                { href: "/about", en: "About Axinova", ar: "عن أكسينوفا" },
                { href: "/news", en: "News & Media", ar: "الأخبار والإعلام" },
                { href: "/careers", en: "Careers", ar: "الوظائف" },
                { href: "/investors", en: "Investor Relations", ar: "علاقات المستثمرين" },
                { href: "/contact", en: "Contact Us", ar: "تواصل معنا" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-white/50 hover:text-white transition-colors">
                    {t(item.en, item.ar)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sectors */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-[hsl(42,90%,50%)] mb-4">
              {t("Sectors", "القطاعات")}
            </h4>
            <ul className="space-y-2.5">
              {[
                { en: "Industrial", ar: "الصناعة" },
                { en: "Trading", ar: "التجارة" },
                { en: "Technical Services", ar: "الخدمات الفنية" },
                { en: "Logistics", ar: "الخدمات اللوجستية" },
                { en: "Construction", ar: "البناء والتشييد" },
              ].map((item) => (
                <li key={item.en}>
                  <Link href="/industries" className="text-sm text-white/50 hover:text-white transition-colors">
                    {t(item.en, item.ar)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-[hsl(42,90%,50%)] mb-4">
              {t("Contact", "التواصل")}
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-white/50">
                <MapPin size={14} className="shrink-0 mt-0.5 text-[hsl(42,90%,50%)]" />
                {t("King Abdullah Financial District, Riyadh, KSA", "حي الملك عبدالله المالي، الرياض، المملكة العربية السعودية")}
              </li>
              <li className="flex items-center gap-2.5 text-sm text-white/50">
                <Phone size={14} className="text-[hsl(42,90%,50%)]" />
                +966 11 000 0000
              </li>
              <li className="flex items-center gap-2.5 text-sm text-white/50">
                <Mail size={14} className="text-[hsl(42,90%,50%)]" />
                info@axinova.com
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} Axinova Multi Activities Company. {t("All rights reserved.", "جميع الحقوق محفوظة.")}
          </p>
          <div className="flex gap-6 text-xs text-white/30">
            <a href="#" className="hover:text-white/60 transition-colors">{t("Privacy Policy", "سياسة الخصوصية")}</a>
            <a href="#" className="hover:text-white/60 transition-colors">{t("Terms of Use", "شروط الاستخدام")}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
