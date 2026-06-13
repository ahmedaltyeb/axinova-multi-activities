import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Briefcase, Clock, ChevronDown, ChevronUp, Upload } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import SectionWrapper, { SectionHeading } from "@/components/SectionWrapper";
import { mockCareers } from "@/data/mockData";

export default function Careers() {
  const { t } = useLang();
  const [expanded, setExpanded] = useState<string | null>(null);
  const [applying, setApplying] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState<string | null>(null);

  return (
    <div className="pt-16">
      <section className="bg-[hsl(220,60%,8%)] py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-block h-0.5 w-12 bg-[hsl(42,90%,50%)] mb-4" />
            <h1 className="text-4xl sm:text-5xl font-bold text-white max-w-2xl">
              {t("Careers at Axinova", "الوظائف في أكسينوفا")}
            </h1>
            <p className="mt-6 text-lg text-white/60 max-w-2xl">
              {t(
                "Join a company that builds the infrastructure, industry, and commerce of the GCC. Shape the region's next era.",
                "انضم إلى شركة تبني بنية تحتية وصناعة وتجارة الخليج. شكّل الحقبة القادمة للمنطقة."
              )}
            </p>
          </motion.div>
        </div>
      </section>

      <SectionWrapper>
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
                      job.type === "Full-time" ? "bg-emerald-500/10 text-emerald-600" : "bg-amber-500/10 text-amber-600"
                    }`}>{job.type}</span>
                  </div>
                  <h3 className="text-base font-semibold text-foreground">{job.title}</h3>
                  <div className="flex flex-wrap items-center gap-4 mt-2 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><MapPin size={11} /> {job.location}</span>
                    <span className="flex items-center gap-1"><Briefcase size={11} /> {job.department}</span>
                    <span className="flex items-center gap-1"><Clock size={11} /> {job.type}</span>
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
                  <ul className="space-y-1 mb-6">
                    {job.requirements.map((req) => (
                      <li key={req} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[hsl(42,90%,50%)] shrink-0" />
                        {req}
                      </li>
                    ))}
                  </ul>

                  {submitted === job.id ? (
                    <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-sm text-emerald-600 text-center">
                      {t("Application submitted successfully. We'll be in touch.", "تم إرسال طلبك بنجاح. سنتواصل معك قريباً.")}
                    </div>
                  ) : applying === job.id ? (
                    <form
                      className="space-y-4 p-5 rounded-xl border border-border bg-background"
                      onSubmit={(e) => { e.preventDefault(); setSubmitted(job.id); setApplying(null); }}
                      data-testid={`application-form-${job.id}`}
                    >
                      <h4 className="text-sm font-semibold text-foreground">{t("Apply for:", "التقديم على:")} {job.title}</h4>
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
                          <input type="file" className="sr-only" accept=".pdf,.doc,.docx" data-testid="input-applicant-cv" />
                        </label>
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-foreground mb-1">{t("Cover Message", "رسالة التقديم")}</label>
                        <textarea rows={3} className="w-full px-3 py-2 rounded-md border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-[hsl(220,80%,45%)] resize-none" data-testid="textarea-applicant-message" />
                      </div>
                      <div className="flex gap-3">
                        <button type="submit" className="flex-1 py-2.5 bg-[hsl(220,80%,45%)] text-white text-sm font-semibold rounded-md hover:bg-[hsl(220,80%,40%)] transition-colors" data-testid={`btn-submit-application-${job.id}`}>
                          {t("Submit Application", "إرسال الطلب")}
                        </button>
                        <button type="button" onClick={() => setApplying(null)} className="px-4 py-2.5 border border-border rounded-md text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="btn-cancel-application">
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
