import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Briefcase, Clock, ChevronDown, ChevronUp, Upload, Plane, GraduationCap, HeartPulse, Globe, TrendingUp, Users } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import SectionWrapper, { SectionHeading } from "@/components/SectionWrapper";
import { mockCareers } from "@/data/mockData";

const benefits = [
  { icon: TrendingUp, en: "Career Growth", ar: "النمو الوظيفي", desc_en: "Structured progression paths across all five business sectors with clear promotion timelines.", desc_ar: "مسارات ترقي منظمة عبر القطاعات الخمسة مع جداول زمنية واضحة للترقية." },
  { icon: Globe, en: "Regional Mobility", ar: "التنقل الإقليمي", desc_en: "Opportunities to work across 12 countries in the GCC and MENA with relocation support.", desc_ar: "فرص للعمل في 12 دولة في الخليج والشرق الأوسط مع دعم الانتقال." },
  { icon: GraduationCap, en: "Learning & Development", ar: "التعلم والتطوير", desc_en: "AED 15,000 annual learning budget, sponsored certifications, and the Axinova Leadership Academy.", desc_ar: "ميزانية تعليمية سنوية بقيمة 15,000 درهم وشهادات مدعومة وأكاديمية القيادة." },
  { icon: HeartPulse, en: "Health & Wellbeing", ar: "الصحة والرفاهية", desc_en: "Comprehensive medical insurance for employees and families, plus mental health support programs.", desc_ar: "تأمين طبي شامل للموظفين والعائلات، إضافة إلى برامج دعم الصحة النفسية." },
  { icon: Plane, en: "Annual Leave", ar: "الإجازة السنوية", desc_en: "30 days annual leave, air ticket allowance, and generous end-of-service benefits.", desc_ar: "30 يوم إجازة سنوية وبدل تذاكر طيران ومكافآت نهاية خدمة سخية." },
  { icon: Users, en: "Diverse Teams", ar: "فرق متنوعة", desc_en: "Work alongside 8,000+ professionals from 40+ nationalities in an inclusive environment.", desc_ar: "العمل جنباً إلى جنب مع أكثر من 8,000 محترف من 40 جنسية في بيئة شاملة." },
];

export default function Careers() {
  const { t } = useLang();
  const [expanded, setExpanded] = useState<string | null>(null);
  const [applying, setApplying] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState<string | null>(null);

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative bg-[hsl(220,60%,8%)] py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(hsl(220,80%,45%) 1px, transparent 1px), linear-gradient(90deg, hsl(220,80%,45%) 1px, transparent 1px)", backgroundSize: "50px 50px" }} />
        <div className="relative max-w-screen-xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-block h-0.5 w-12 bg-[hsl(42,90%,50%)] mb-4" />
            <h1 className="text-4xl sm:text-5xl font-bold text-white max-w-2xl">
              {t("Careers at Axinova", "الوظائف في أكسينوفا")}
            </h1>
            <p className="mt-6 text-lg text-white/60 max-w-2xl leading-relaxed">
              {t(
                "Join a company that builds the infrastructure, industry, and commerce of the GCC. Shape the region's next era.",
                "انضم إلى شركة تبني بنية تحتية وصناعة وتجارة الخليج. شكّل الحقبة القادمة للمنطقة."
              )}
            </p>
            <div className="flex flex-wrap gap-8 mt-10">
              {[
                { n: "8,000+", en: "Employees", ar: "موظف" },
                { n: "40+", en: "Nationalities", ar: "جنسية" },
                { n: "12", en: "Countries", ar: "دولة" },
              ].map((s) => (
                <div key={s.en}>
                  <div className="text-2xl font-bold text-[hsl(42,90%,50%)]">{s.n}</div>
                  <div className="text-xs text-white/40 uppercase tracking-widest mt-0.5">{t(s.en, s.ar)}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <SectionWrapper>
        <SectionHeading
          title={t("Life at Axinova", "الحياة في أكسينوفا")}
          subtitle={t("We invest in our people the same way we invest in our projects — with ambition and long-term commitment.", "نستثمر في موظفينا بنفس الطريقة التي نستثمر بها في مشاريعنا — بطموح والتزام طويل الأمد.")}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={b.en}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="p-6 rounded-xl border border-border bg-card"
                data-testid={`benefit-${b.en.toLowerCase().replace(/ /g, "-")}`}
              >
                <div className="w-11 h-11 rounded-lg bg-[hsl(220,80%,45%)]/10 flex items-center justify-center mb-4">
                  <Icon size={20} className="text-[hsl(220,80%,45%)]" />
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-2">{t(b.en, b.ar)}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t(b.desc_en, b.desc_ar)}</p>
              </motion.div>
            );
          })}
        </div>
      </SectionWrapper>

      {/* Graduate Program Callout */}
      <section className="py-16 bg-[hsl(220,80%,45%)] px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/60 mb-2">
              {t("New for 2025", "جديد لعام 2025")}
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              {t("Graduate Talent Program", "برنامج المواهب للخريجين")}
            </h2>
            <p className="mt-3 text-white/70 max-w-xl">
              {t(
                "A two-year rotational placement across all five sectors — for 150 engineering and business graduates. Applications now open.",
                "برنامج تدريب دوري لمدة عامين عبر القطاعات الخمسة — لـ 150 خريج في الهندسة والأعمال. التقديم مفتوح الآن."
              )}
            </p>
          </div>
          <a
            href="#jobs"
            className="shrink-0 px-8 py-4 bg-white text-[hsl(220,60%,10%)] font-semibold rounded-md hover:bg-white/90 transition-colors whitespace-nowrap"
            data-testid="grad-program-cta"
          >
            {t("Apply Now", "التقديم الآن")}
          </a>
        </div>
      </section>

      {/* Job Listings */}
      <SectionWrapper id="jobs">
        <SectionHeading
          title={t("Open Positions", "الوظائف الشاغرة")}
          subtitle={t(`${mockCareers.length} positions currently available across our five business sectors.`, `${mockCareers.length} وظيفة متاحة حالياً عبر قطاعاتنا الخمسة.`)}
        />

        <div className="space-y-4">
          {mockCareers.map((job, i) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="rounded-xl border border-border bg-card overflow-hidden"
              data-testid={`job-card-${job.id}`}
            >
              {/* Job header */}
              <div
                className="flex items-start justify-between gap-4 p-6 cursor-pointer hover:bg-muted/30 transition-colors"
                onClick={() => setExpanded(expanded === job.id ? null : job.id)}
                data-testid={`job-toggle-${job.id}`}
              >
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="text-xs font-semibold uppercase tracking-widest text-[hsl(42,90%,50%)]">{job.department}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                      job.type === "Full-time" ? "bg-emerald-500/10 text-emerald-500" : "bg-amber-500/10 text-amber-500"
                    }`}>{job.type}</span>
                  </div>
                  <h3 className="text-base font-semibold text-foreground">{job.title}</h3>
                  <div className="flex flex-wrap items-center gap-4 mt-2 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5"><MapPin size={11} /> {job.location}</span>
                    <span className="flex items-center gap-1.5"><Briefcase size={11} /> {job.department}</span>
                    <span className="flex items-center gap-1.5"><Clock size={11} /> {job.type}</span>
                  </div>
                </div>
                <div className="shrink-0 text-muted-foreground mt-1">
                  {expanded === job.id ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </div>
              </div>

              {/* Expanded detail */}
              {expanded === job.id && (
                <div className="px-6 pb-6 border-t border-border">
                  <p className="text-sm text-muted-foreground leading-relaxed mt-4 mb-4">{job.description}</p>
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-foreground mb-2">{t("Requirements", "المتطلبات")}</h4>
                  <ul className="space-y-1.5 mb-6">
                    {job.requirements.map((req) => (
                      <li key={req} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[hsl(42,90%,50%)] shrink-0" />
                        {req}
                      </li>
                    ))}
                  </ul>

                  {submitted === job.id ? (
                    <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-sm text-emerald-500 text-center font-medium">
                      ✓ {t("Application submitted. We'll be in touch within 5 business days.", "تم إرسال طلبك. سنتواصل معك خلال 5 أيام عمل.")}
                    </div>
                  ) : applying === job.id ? (
                    <form
                      className="space-y-4 p-5 rounded-xl border border-border bg-background"
                      onSubmit={(e) => { e.preventDefault(); setSubmitted(job.id); setApplying(null); }}
                      data-testid={`application-form-${job.id}`}
                    >
                      <h4 className="text-sm font-semibold text-foreground">
                        {t("Apply for:", "التقديم على:")} <span className="text-[hsl(220,80%,45%)]">{job.title}</span>
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-medium text-foreground mb-1">{t("Full Name", "الاسم الكامل")}</label>
                          <input required className="w-full px-3 py-2 rounded-md border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-[hsl(220,80%,45%)]" data-testid="input-applicant-name" />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-foreground mb-1">{t("Email", "البريد الإلكتروني")}</label>
                          <input type="email" required className="w-full px-3 py-2 rounded-md border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-[hsl(220,80%,45%)]" data-testid="input-applicant-email" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-foreground mb-1">{t("Phone", "رقم الهاتف")}</label>
                        <input type="tel" className="w-full px-3 py-2 rounded-md border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-[hsl(220,80%,45%)]" data-testid="input-applicant-phone" />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-foreground mb-1">{t("Upload CV", "رفع السيرة الذاتية")}</label>
                        <label className="flex items-center gap-3 px-4 py-3 rounded-md border border-dashed border-border bg-muted cursor-pointer hover:border-[hsl(220,80%,45%)] transition-colors">
                          <Upload size={16} className="text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">{t("Click to upload PDF or DOCX", "انقر لرفع ملف PDF أو DOCX")}</span>
                          <input type="file" className="sr-only" accept=".pdf,.doc,.docx" />
                        </label>
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-foreground mb-1">{t("Cover Message", "رسالة التقديم")}</label>
                        <textarea rows={3} className="w-full px-3 py-2 rounded-md border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-[hsl(220,80%,45%)] resize-none" />
                      </div>
                      <div className="flex gap-3">
                        <button type="submit" className="flex-1 py-2.5 bg-[hsl(220,80%,45%)] text-white text-sm font-semibold rounded-md hover:bg-[hsl(220,80%,40%)] transition-colors" data-testid={`btn-submit-application-${job.id}`}>
                          {t("Submit Application", "إرسال الطلب")}
                        </button>
                        <button type="button" onClick={() => setApplying(null)} className="px-4 py-2.5 border border-border rounded-md text-sm text-muted-foreground hover:text-foreground transition-colors">
                          {t("Cancel", "إلغاء")}
                        </button>
                      </div>
                    </form>
                  ) : (
                    <button
                      onClick={() => setApplying(job.id)}
                      className="px-6 py-2.5 bg-[hsl(220,80%,45%)] text-white text-sm font-semibold rounded-md hover:bg-[hsl(220,80%,40%)] transition-colors"
                      data-testid={`btn-apply-${job.id}`}
                    >
                      {t("Apply Now", "التقديم الآن")}
                    </button>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
}
