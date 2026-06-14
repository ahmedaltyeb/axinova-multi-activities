import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Building2, TrendingUp, Users, FileText } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import SectionWrapper from "@/components/SectionWrapper";
import { useSEO } from "@/hooks/useSEO";
import { getLocalBusinessSchema } from "@/lib/seo";

const CONTACT_SCHEMAS = [getLocalBusinessSchema()];

type FormType = "general" | "quote" | "investor" | "career";

const tabs: { id: FormType; en: string; ar: string }[] = [
  { id: "general", en: "General Inquiry", ar: "استفسار عام" },
  { id: "quote", en: "Quote Request", ar: "طلب عرض سعر" },
  { id: "investor", en: "Investor Inquiry", ar: "استفسار المستثمرين" },
  { id: "career", en: "Career Application", ar: "طلب وظيفة" },
];

const deptCards = [
  { icon: Building2, tab: "general" as FormType, en: "Corporate Affairs", ar: "الشؤون المؤسسية", email: "info@axinova.com", desc_en: "General inquiries, partnerships, media", desc_ar: "الاستفسارات العامة، الشراكات، الإعلام" },
  { icon: FileText, tab: "quote" as FormType, en: "Commercial", ar: "التجاري", email: "commercial@axinova.com", desc_en: "Quotes, project scopes, procurement", desc_ar: "عروض الأسعار، نطاق المشاريع، المشتريات" },
  { icon: TrendingUp, tab: "investor" as FormType, en: "Investor Relations", ar: "علاقات المستثمرين", email: "ir@axinova.com", desc_en: "Investment, partnerships, pre-IPO", desc_ar: "الاستثمار، الشراكات، ما قبل الاكتتاب" },
  { icon: Users, tab: "career" as FormType, en: "Talent & HR", ar: "المواهب والموارد البشرية", email: "careers@axinova.com", desc_en: "Job applications, graduate program", desc_ar: "طلبات التوظيف، برنامج الخريجين" },
];

function FormSuccess({ onReset, t }: { onReset: () => void; t: (a: string, b: string) => string }) {
  return (
    <div className="py-12 text-center">
      <div className="w-14 h-14 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-4">
        <span className="text-2xl text-emerald-500">✓</span>
      </div>
      <h3 className="text-lg font-semibold text-foreground">{t("Message Sent", "تم الإرسال")}</h3>
      <p className="text-muted-foreground mt-2 text-sm">{t("Our team will respond within 1–2 business days.", "سيرد فريقنا خلال 1-2 يوم عمل.")}</p>
      <button onClick={onReset} className="mt-6 text-sm text-[hsl(220,80%,45%)] hover:underline" data-testid="btn-reset-form">
        {t("Send another message", "إرسال رسالة أخرى")}
      </button>
    </div>
  );
}

export default function Contact() {
  const { t } = useLang();
  useSEO("/contact", CONTACT_SCHEMAS);
  const [activeTab, setActiveTab] = useState<FormType>("general");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
  };

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-[hsl(220,60%,8%)] py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-block h-0.5 w-12 bg-[hsl(42,90%,50%)] mb-4" />
            <h1 className="text-4xl sm:text-5xl font-bold text-white max-w-2xl">
              {t("Contact Axinova", "تواصل مع أكسينوفا")}
            </h1>
            <p className="mt-6 text-lg text-white/60 max-w-2xl">
              {t("Reach our teams across Corporate, Commercial, Investor Relations, and Careers.", "تواصل مع فرقنا في الشؤون المؤسسية والتجارة وعلاقات المستثمرين والوظائف.")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Department Quick-Contact Cards */}
      <section className="px-4 sm:px-6 lg:px-8 py-10 border-b border-border bg-card">
        <div className="max-w-screen-xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6">
            {t("Select a department", "اختر قسماً")}
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {deptCards.map((dept, i) => {
              const Icon = dept.icon;
              const isActive = activeTab === dept.tab;
              return (
                <motion.button
                  key={dept.tab}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => { setActiveTab(dept.tab); setSubmitted(false); document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth", block: "start" }); }}
                  className={`text-start p-4 rounded-xl border transition-all ${
                    isActive
                      ? "border-[hsl(220,80%,45%)] bg-[hsl(220,80%,45%)]/5"
                      : "border-border hover:border-[hsl(220,80%,45%)]/50"
                  }`}
                  data-testid={`dept-card-${dept.tab}`}
                >
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center mb-3 ${isActive ? "bg-[hsl(220,80%,45%)]/15" : "bg-muted"}`}>
                    <Icon size={16} className={isActive ? "text-[hsl(220,80%,45%)]" : "text-muted-foreground"} />
                  </div>
                  <div className="text-sm font-semibold text-foreground mb-0.5">{t(dept.en, dept.ar)}</div>
                  <div className="text-xs text-muted-foreground">{t(dept.desc_en, dept.desc_ar)}</div>
                  <div className="text-xs text-[hsl(220,80%,45%)] mt-2">{dept.email}</div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      <SectionWrapper id="contact-form">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-xl font-bold text-foreground mb-6">{t("Our Offices", "مكاتبنا")}</h2>
            <div className="space-y-6">
              {[
                { city_en: "Riyadh — Headquarters", city_ar: "الرياض — المقر الرئيسي", address: "King Abdullah Financial District, Tower 3, Riyadh 11564, KSA" },
                { city_en: "Dubai", city_ar: "دبي", address: "DIFC, Gate Village, Building 5, Dubai, UAE" },
                { city_en: "Abu Dhabi", city_ar: "أبوظبي", address: "Al Maryah Island, ADGM Square, Abu Dhabi, UAE" },
              ].map((office) => (
                <div key={office.city_en} className="flex gap-3" data-testid={`office-${office.city_en.toLowerCase().replace(/[ —]/g, "-")}`}>
                  <MapPin size={16} className="text-[hsl(42,90%,50%)] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">{t(office.city_en, office.city_ar)}</p>
                    <p className="text-sm text-muted-foreground mt-0.5">{office.address}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 space-y-4 text-sm border-t border-border pt-6">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone size={14} className="text-[hsl(42,90%,50%)] shrink-0" />
                +966 11 000 0000
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail size={14} className="text-[hsl(42,90%,50%)] shrink-0" />
                info@axinova.com
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Clock size={14} className="text-[hsl(42,90%,50%)] shrink-0" />
                {t("Sun–Thu: 8:00 AM – 5:00 PM AST", "الأحد–الخميس: 8:00 ص – 5:00 م")}
              </div>
            </div>
          </div>

          {/* Forms */}
          <div className="lg:col-span-2">
            {/* Tabs */}
            <div className="flex flex-wrap gap-1 mb-6 p-1 rounded-lg border border-border bg-muted" data-testid="contact-tabs">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => { setActiveTab(tab.id); setSubmitted(false); }}
                  className={`flex-1 min-w-[120px] py-2 px-3 text-sm font-medium rounded-md transition-colors ${
                    activeTab === tab.id ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
                  }`}
                  data-testid={`contact-tab-${tab.id}`}
                >
                  {t(tab.en, tab.ar)}
                </button>
              ))}
            </div>

            {submitted ? (
              <FormSuccess onReset={handleReset} t={t} />
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" data-testid={`form-${activeTab}`}>
                {/* Common fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">{t("Full Name", "الاسم الكامل")}</label>
                    <input required className="w-full px-4 py-2.5 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-[hsl(220,80%,45%)]" data-testid="input-contact-name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">{t("Email", "البريد الإلكتروني")}</label>
                    <input type="email" required className="w-full px-4 py-2.5 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-[hsl(220,80%,45%)]" data-testid="input-contact-email" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">{t("Phone", "رقم الهاتف")}</label>
                  <input type="tel" className="w-full px-4 py-2.5 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-[hsl(220,80%,45%)]" data-testid="input-contact-phone" />
                </div>

                {/* Quote-specific */}
                {activeTab === "quote" && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">{t("Company Name", "اسم الشركة")}</label>
                      <input className="w-full px-4 py-2.5 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-[hsl(220,80%,45%)]" data-testid="input-quote-company" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">{t("Service Required", "الخدمة المطلوبة")}</label>
                      <select className="w-full px-4 py-2.5 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-[hsl(220,80%,45%)]" data-testid="select-quote-service">
                        <option value="">{t("Select a service", "اختر خدمة")}</option>
                        <option>{t("Industrial", "الصناعة")}</option>
                        <option>{t("Trading", "التجارة")}</option>
                        <option>{t("Technical Services", "الخدمات الفنية")}</option>
                        <option>{t("Logistics", "اللوجستيات")}</option>
                        <option>{t("Construction", "البناء")}</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">{t("Project Budget (USD)", "ميزانية المشروع (دولار)")}</label>
                      <select className="w-full px-4 py-2.5 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-[hsl(220,80%,45%)]" data-testid="select-quote-budget">
                        <option value="">{t("Select range", "اختر النطاق")}</option>
                        <option>{"< $500K"}</option>
                        <option>{"$500K – $5M"}</option>
                        <option>{"$5M – $50M"}</option>
                        <option>{"$50M – $500M"}</option>
                        <option>{"$500M+"}</option>
                      </select>
                    </div>
                  </>
                )}

                {/* Investor-specific */}
                {activeTab === "investor" && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">{t("Organization", "المؤسسة")}</label>
                      <input className="w-full px-4 py-2.5 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-[hsl(220,80%,45%)]" data-testid="input-investor-org2" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">{t("Investment Interest", "الاهتمام الاستثماري")}</label>
                      <select className="w-full px-4 py-2.5 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-[hsl(220,80%,45%)]" data-testid="select-investor-interest">
                        <option value="">{t("Select...", "اختر...")}</option>
                        <option>{t("Equity", "الأسهم")}</option>
                        <option>{t("Project Financing", "تمويل المشاريع")}</option>
                        <option>{t("Strategic Partnership", "الشراكة الاستراتيجية")}</option>
                        <option>{t("Pre-IPO", "ما قبل الاكتتاب")}</option>
                      </select>
                    </div>
                  </>
                )}

                {/* Career-specific */}
                {activeTab === "career" && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">{t("Position Applied For", "الوظيفة المتقدم إليها")}</label>
                      <input className="w-full px-4 py-2.5 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-[hsl(220,80%,45%)]" data-testid="input-career-position" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">{t("Upload CV", "رفع السيرة الذاتية")}</label>
                      <label className="flex items-center gap-3 px-4 py-3 rounded-md border border-dashed border-border bg-muted cursor-pointer hover:border-[hsl(220,80%,45%)] transition-colors">
                        <span className="text-sm text-muted-foreground">{t("Click to upload PDF or DOCX", "انقر لرفع ملف PDF أو DOCX")}</span>
                        <input type="file" className="sr-only" accept=".pdf,.doc,.docx" data-testid="input-career-cv" />
                      </label>
                    </div>
                  </>
                )}

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">{t("Message", "الرسالة")}</label>
                  <textarea rows={4} className="w-full px-4 py-2.5 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-[hsl(220,80%,45%)] resize-none" data-testid="textarea-contact-message" />
                </div>

                <button type="submit" className="w-full py-3.5 bg-[hsl(220,80%,45%)] text-white font-semibold rounded-md hover:bg-[hsl(220,80%,40%)] transition-colors" data-testid="btn-contact-submit">
                  {t("Send Message", "إرسال الرسالة")}
                </button>
              </form>
            )}
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
