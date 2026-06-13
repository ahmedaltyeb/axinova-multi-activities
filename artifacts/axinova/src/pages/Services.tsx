import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, CheckCircle, Layers, ShieldCheck, Clock4, Handshake } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import SectionWrapper, { SectionHeading } from "@/components/SectionWrapper";
import { mockServices } from "@/data/mockData";

const sectors = ["Industrial", "Trading", "Technical Services", "Logistics", "Construction"];

const process = [
  { step: "01", en: "Discovery & Assessment", ar: "الاكتشاف والتقييم", desc_en: "We analyze your needs, constraints, and goals to define the right scope.", desc_ar: "نحلل احتياجاتك وقيودك وأهدافك لتحديد النطاق الصحيح." },
  { step: "02", en: "Proposal & Planning", ar: "الاقتراح والتخطيط", desc_en: "A detailed execution plan with milestones, resources, and risk mitigation.", desc_ar: "خطة تنفيذ مفصلة مع مراحل رئيسية وموارد وتخفيف للمخاطر." },
  { step: "03", en: "Execution & Delivery", ar: "التنفيذ والتسليم", desc_en: "Our integrated teams execute with precision, accountability, and quality.", desc_ar: "تنفذ فرقنا المتكاملة بدقة ومسؤولية وجودة." },
  { step: "04", en: "Commissioning & Handover", ar: "التشغيل والتسليم", desc_en: "Full commissioning, documentation, and post-handover support.", desc_ar: "تشغيل كامل وتوثيق ودعم بعد التسليم." },
];

const differentiators = [
  { icon: Layers, en: "Integrated Model", ar: "النموذج المتكامل", desc_en: "One partner for engineering, procurement, construction, and operations. No fragmented accountability.", desc_ar: "شريك واحد للهندسة والمشتريات والبناء والعمليات. لا تشتت في المسؤولية." },
  { icon: ShieldCheck, en: "Proven Track Record", ar: "سجل مثبت", desc_en: "500+ projects delivered across 12 countries. 97% client satisfaction. ISO 9001:2015 certified.", desc_ar: "أكثر من 500 مشروع مُنجز في 12 دولة. رضا العملاء 97%. شهادة ISO 9001:2015." },
  { icon: Clock4, en: "On-Time, On-Budget", ar: "في الوقت والميزانية", desc_en: "92% of our projects completed within original timeline and budget commitments.", desc_ar: "92% من مشاريعنا مكتملة في الإطار الزمني والميزانية الأصليين." },
  { icon: Handshake, en: "Long-Term Partnership", ar: "شراكة طويلة الأمد", desc_en: "78% of our revenue comes from returning clients — a testament to how we operate.", desc_ar: "78% من إيراداتنا تأتي من العملاء العائدين — دليل على طريقة عملنا." },
];

export default function Services() {
  const { t } = useLang();

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-[hsl(220,60%,8%)] py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-block h-0.5 w-12 bg-[hsl(42,90%,50%)] mb-4" />
            <h1 className="text-4xl sm:text-5xl font-bold text-white max-w-2xl">
              {t("Our Services", "خدماتنا")}
            </h1>
            <p className="mt-6 text-lg text-white/60 max-w-2xl">
              {t(
                "Comprehensive service offerings across five sectors — delivered by one integrated partner.",
                "عروض خدمات شاملة عبر خمسة قطاعات — تقدمها شريك واحد متكامل."
              )}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services by sector */}
      <SectionWrapper>
        {sectors.map((sector) => {
          const services = mockServices.filter((s) => s.sector === sector);
          return (
            <div key={sector} className="mb-14" data-testid={`services-sector-${sector.toLowerCase().replace(/ /g, "-")}`}>
              <h2 className="text-xl font-bold text-foreground mb-6 pb-3 border-b border-border flex items-center gap-3">
                <span className="inline-block w-2 h-2 rounded-full bg-[hsl(42,90%,50%)]" />
                {sector}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {services.map((svc, i) => (
                  <motion.div
                    key={svc.id}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    className="p-5 rounded-lg border border-border bg-card hover:border-[hsl(220,80%,45%)] transition-colors"
                    data-testid={`service-card-${svc.id}`}
                  >
                    <CheckCircle size={15} className="text-[hsl(220,80%,45%)] mb-3" />
                    <h3 className="text-sm font-semibold text-foreground mb-1">{svc.name}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{svc.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          );
        })}
      </SectionWrapper>

      {/* Why Axinova */}
      <SectionWrapper dark>
        <SectionHeading
          title={t("Why Choose Axinova", "لماذا تختار أكسينوفا")}
          light
          subtitle={t("Four reasons the region's largest clients keep coming back.", "أربعة أسباب تجعل أكبر عملاء المنطقة يعودون دائماً.")}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {differentiators.map((d, i) => {
            const Icon = d.icon;
            return (
              <motion.div
                key={d.en}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.09 }}
                className="flex gap-5 p-6 rounded-xl border border-white/10 bg-[hsl(220,60%,10%)]"
                data-testid={`differentiator-${i}`}
              >
                <div className="w-11 h-11 rounded-lg bg-[hsl(42,90%,50%)]/15 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon size={20} className="text-[hsl(42,90%,50%)]" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white mb-2">{t(d.en, d.ar)}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">{t(d.desc_en, d.desc_ar)}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </SectionWrapper>

      {/* Process */}
      <SectionWrapper>
        <SectionHeading title={t("How We Work", "كيف نعمل")} subtitle={t("A proven process that delivers results at every scale.", "عملية مجربة تُنتج نتائج على كل مستوى.")} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {process.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative"
              data-testid={`process-step-${step.step}`}
            >
              <div className="text-6xl font-bold text-muted/50 mb-2 leading-none">{step.step}</div>
              <h3 className="text-base font-semibold text-foreground mb-2">{t(step.en, step.ar)}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{t(step.desc_en, step.desc_ar)}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <section className="py-20 bg-[hsl(42,90%,50%)] px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[hsl(220,60%,10%)]">{t("Ready to get started?", "هل أنت مستعد للبدء؟")}</h2>
          <p className="mt-3 text-[hsl(220,60%,10%)]/70 max-w-xl mx-auto">{t("Contact our team to discuss how Axinova can serve your business.", "تواصل مع فريقنا لمناقشة كيف يمكن لأكسينوفا خدمة أعمالك.")}</p>
          <Link href="/contact" className="inline-flex items-center gap-2 mt-7 px-8 py-4 bg-[hsl(220,60%,10%)] text-white font-semibold rounded-md hover:bg-[hsl(220,60%,14%)] transition-colors" data-testid="services-cta">
            {t("Request a Consultation", "طلب استشارة")} <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
