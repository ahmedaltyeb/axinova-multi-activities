import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ClipboardList, Users, Cog, CheckCircle } from "lucide-react";
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

export default function Services() {
  const { t } = useLang();

  return (
    <div className="pt-16">
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
                    transition={{ delay: i * 0.08 }}
                    className="p-5 rounded-lg border border-border bg-card hover:border-[hsl(220,80%,45%)] transition-colors"
                    data-testid={`service-card-${svc.id}`}
                  >
                    <CheckCircle size={16} className="text-[hsl(220,80%,45%)] mb-3" />
                    <h3 className="text-sm font-semibold text-foreground mb-1">{svc.name}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{svc.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          );
        })}
      </SectionWrapper>

      {/* Process */}
      <SectionWrapper dark>
        <SectionHeading title={t("How We Work", "كيف نعمل")} light subtitle={t("A proven process that delivers results at every scale.", "عملية مجربة تُنتج نتائج على كل مستوى.")} />
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
              <div className="text-5xl font-bold text-white/5 mb-2">{step.step}</div>
              <h3 className="text-base font-semibold text-white mb-2">{t(step.en, step.ar)}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{t(step.desc_en, step.desc_ar)}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper>
        <div className="text-center max-w-2xl mx-auto py-8">
          <h2 className="text-3xl font-bold text-foreground">{t("Ready to get started?", "هل أنت مستعد للبدء؟")}</h2>
          <p className="mt-4 text-muted-foreground">{t("Contact our team to discuss how Axinova can serve your business.", "تواصل مع فريقنا لمناقشة كيف يمكن لأكسينوفا خدمة أعمالك.")}</p>
          <Link href="/contact" className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-[hsl(220,80%,45%)] text-white font-semibold rounded-md hover:bg-[hsl(220,80%,40%)] transition-colors" data-testid="services-cta">
            {t("Request a Consultation", "طلب استشارة")} <ArrowRight size={16} />
          </Link>
        </div>
      </SectionWrapper>
    </div>
  );
}
