import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Globe2, DollarSign, BarChart2 } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import SectionWrapper, { SectionHeading } from "@/components/SectionWrapper";

const roadmap = [
  { year: "2024", en: "Complete Jubail and Dubai mega-projects. Achieve AED 10B revenue milestone.", ar: "إتمام مشروعي الجبيل ودبي الكبيرين. تحقيق هدف الإيرادات 10 مليار درهم." },
  { year: "2025", en: "IPO readiness assessment. Expand into Egyptian and Iraqi markets.", ar: "تقييم الاستعداد للطرح العام. التوسع في الأسواق المصرية والعراقية." },
  { year: "2026", en: "Launch Axinova Capital — a dedicated infrastructure investment vehicle.", ar: "إطلاق أكسينوفا كابيتال — مركبة استثمارية مخصصة للبنية التحتية." },
  { year: "2027", en: "Targeted regional IPO on Tadawul or ADX. AED 20B valuation objective.", ar: "طرح عام إقليمي مستهدف في تداول أو أبوظبي للأوراق المالية. هدف التقييم 20 مليار درهم." },
];

const opportunities = [
  { icon: TrendingUp, en_title: "GCC Infrastructure Pipeline", ar_title: "خط أنابيب البنية التحتية الخليجية", en_body: "$4 trillion in planned infrastructure spend across GCC by 2030, driven by Vision 2030, UAE 2071, and Qatar National Vision.", ar_body: "4 تريليون دولار من الإنفاق المخطط على البنية التحتية في الخليج بحلول 2030." },
  { icon: Globe2, en_title: "MENA Market Expansion", ar_title: "التوسع في سوق الشرق الأوسط وشمال أفريقيا", en_body: "Untapped markets in Egypt, Iraq, and North Africa with rising industrialization and urban development demand.", ar_body: "أسواق غير مستغلة في مصر والعراق وشمال أفريقيا مع تصاعد الطلب على التصنيع والتطوير العمراني." },
  { icon: DollarSign, en_title: "Integrated Revenue Model", ar_title: "نموذج إيرادات متكامل", en_body: "Five diversified revenue streams insulate against sector-specific cycles and provide consistent cash generation.", ar_body: "خمسة تدفقات إيرادات متنوعة تحمي من دورات القطاع المحددة وتوفر توليدًا ثابتًا للنقد." },
  { icon: BarChart2, en_title: "18% Revenue Growth CAGR", ar_title: "معدل نمو سنوي مركب 18%", en_body: "Consistent 18% compound annual revenue growth over the past 5 years, outpacing GCC industry averages.", ar_body: "نمو إيرادات سنوي مركب ثابت بنسبة 18% على مدى السنوات الخمس الماضية، يتجاوز متوسطات صناعة الخليج." },
];

export default function Investors() {
  const { t } = useLang();
  const [sent, setSent] = useState(false);

  return (
    <div className="pt-16">
      <section className="bg-[hsl(220,60%,8%)] py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-block h-0.5 w-12 bg-[hsl(42,90%,50%)] mb-4" />
            <h1 className="text-4xl sm:text-5xl font-bold text-white max-w-2xl">
              {t("Investor Relations", "علاقات المستثمرين")}
            </h1>
            <p className="mt-6 text-lg text-white/60 max-w-2xl">
              {t(
                "Axinova offers exposure to the GCC's fastest-growing multi-sector enterprise — with a clear path to public markets.",
                "تُقدّم أكسينوفا تعرضاً لأسرع مؤسسة متعددة القطاعات نمواً في الخليج — مع مسار واضح نحو الأسواق العامة."
              )}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Opportunities */}
      <SectionWrapper>
        <SectionHeading title={t("Market Opportunity", "فرصة السوق")} subtitle={t("The structural tailwinds behind Axinova's growth thesis.", "الدوافع الهيكلية وراء أطروحة نمو أكسينوفا.")} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {opportunities.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-6 rounded-xl border border-border bg-card"
                data-testid={`opportunity-card-${i}`}
              >
                <div className="w-12 h-12 rounded-lg bg-[hsl(220,80%,45%)]/10 flex items-center justify-center mb-4">
                  <Icon size={20} className="text-[hsl(220,80%,45%)]" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">{t(item.en_title, item.ar_title)}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t(item.en_body, item.ar_body)}</p>
              </motion.div>
            );
          })}
        </div>
      </SectionWrapper>

      {/* Roadmap */}
      <SectionWrapper dark>
        <SectionHeading title={t("Growth Roadmap", "خارطة طريق النمو")} light />
        <div className="relative">
          <div className="absolute start-6 top-0 bottom-0 w-px bg-white/10" />
          <div className="space-y-10">
            {roadmap.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative flex gap-8 items-start ps-14"
                data-testid={`roadmap-${item.year}`}
              >
                <div className="absolute start-0 top-0 w-12 h-12 rounded-full border-2 border-[hsl(42,90%,50%)] bg-[hsl(220,60%,8%)] flex items-center justify-center shrink-0">
                  <span className="text-[10px] font-bold text-[hsl(42,90%,50%)]">{item.year}</span>
                </div>
                <p className="text-white/70 pt-2.5">{t(item.en, item.ar)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Investor Inquiry Form */}
      <SectionWrapper>
        <div className="max-w-2xl mx-auto">
          <SectionHeading title={t("Investor Inquiry", "استفسار المستثمرين")} subtitle={t("Contact our Investor Relations team directly.", "تواصل مع فريق علاقات المستثمرين لدينا مباشرة.")} />
          {sent ? (
            <div className="p-8 text-center rounded-xl border border-border bg-card">
              <div className="text-[hsl(42,90%,50%)] text-5xl mb-3">✓</div>
              <h3 className="text-lg font-semibold text-foreground">{t("Inquiry Submitted", "تم إرسال الاستفسار")}</h3>
              <p className="text-muted-foreground mt-2 text-sm">{t("Our IR team will respond within 2 business days.", "سيرد فريق علاقات المستثمرين لدينا خلال يومي عمل.")}</p>
            </div>
          ) : (
            <form
              className="space-y-5 p-8 rounded-xl border border-border bg-card"
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              data-testid="investor-form"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">{t("Full Name", "الاسم الكامل")}</label>
                  <input required className="w-full px-4 py-2.5 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-[hsl(220,80%,45%)]" data-testid="input-investor-name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">{t("Organization", "المؤسسة")}</label>
                  <input required className="w-full px-4 py-2.5 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-[hsl(220,80%,45%)]" data-testid="input-investor-org" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">{t("Email", "البريد الإلكتروني")}</label>
                <input type="email" required className="w-full px-4 py-2.5 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-[hsl(220,80%,45%)]" data-testid="input-investor-email" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">{t("Investment Focus", "محور الاستثمار")}</label>
                <select className="w-full px-4 py-2.5 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-[hsl(220,80%,45%)]" data-testid="select-investor-focus">
                  <option value="">{t("Select...", "اختر...")}</option>
                  <option>{t("Equity Investment", "الاستثمار في الأسهم")}</option>
                  <option>{t("Project Financing", "تمويل المشاريع")}</option>
                  <option>{t("Strategic Partnership", "الشراكة الاستراتيجية")}</option>
                  <option>{t("Pre-IPO Placement", "طرح ما قبل الاكتتاب")}</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">{t("Message", "الرسالة")}</label>
                <textarea rows={4} className="w-full px-4 py-2.5 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-[hsl(220,80%,45%)] resize-none" data-testid="textarea-investor-message" />
              </div>
              <button type="submit" className="w-full py-3 bg-[hsl(220,80%,45%)] text-white font-semibold rounded-md hover:bg-[hsl(220,80%,40%)] transition-colors" data-testid="btn-investor-submit">
                {t("Submit Inquiry", "إرسال الاستفسار")}
              </button>
            </form>
          )}
        </div>
      </SectionWrapper>
    </div>
  );
}
