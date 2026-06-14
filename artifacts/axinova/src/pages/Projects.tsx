import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Calendar, CheckCircle, Clock, LayoutGrid } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import SectionWrapper from "@/components/SectionWrapper";
import { mockProjects } from "@/data/mockData";

const categories = [
  { en: "All",               ar: "الكل" },
  { en: "Industrial",        ar: "صناعي" },
  { en: "Logistics",         ar: "لوجستيات" },
  { en: "Technical Services",ar: "خدمات فنية" },
  { en: "Construction",      ar: "إنشاء" },
  { en: "Trading",           ar: "تجارة" },
];

export default function Projects() {
  const { t } = useLang();
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? mockProjects : mockProjects.filter((p) => p.category === active);
  const completedCount = mockProjects.filter((p) => p.status === "completed").length;
  const ongoingCount = mockProjects.filter((p) => p.status === "ongoing").length;

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-[hsl(220,60%,8%)] py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-block h-0.5 w-12 bg-[hsl(42,90%,50%)] mb-4" />
            <h1 className="text-4xl sm:text-5xl font-bold text-white max-w-2xl">
              {t("Our Projects", "مشاريعنا")}
            </h1>
            <p className="mt-6 text-lg text-white/60 max-w-2xl">
              {t(
                "500+ landmark projects completed across the GCC and MENA — from steel plants to logistics hubs to towers.",
                "أكثر من 500 مشروع تاريخي منجز عبر منطقة الخليج والشرق الأوسط — من مصانع الصلب إلى مراكز اللوجستيات إلى الأبراج."
              )}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-b border-border bg-card px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-3 divide-x divide-border rtl:divide-x-reverse">
            {[
              { icon: LayoutGrid, value: "500+", label_en: "Total Projects",      label_ar: "إجمالي المشاريع" },
              { icon: CheckCircle, value: `${completedCount}`, label_en: "Shown as Completed", label_ar: "منجز معروض" },
              { icon: Clock,       value: `${ongoingCount}`,  label_en: "Currently Ongoing",   label_ar: "جارٍ حالياً" },
            ].map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={i} className="flex items-center gap-4 py-6 px-6">
                  <Icon size={20} className="text-[hsl(220,80%,45%)] shrink-0" />
                  <div>
                    <div className="text-xl font-bold text-foreground">{s.value}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{t(s.label_en, s.label_ar)}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <SectionWrapper>
        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-10" data-testid="project-filters">
          {categories.map((cat) => (
            <button
              key={cat.en}
              onClick={() => setActive(cat.en)}
              className={`px-4 py-2 text-sm font-medium rounded-full border transition-colors ${
                active === cat.en
                  ? "bg-[hsl(220,80%,45%)] border-[hsl(220,80%,45%)] text-white"
                  : "border-border text-muted-foreground hover:border-[hsl(220,80%,45%)] hover:text-foreground"
              }`}
              data-testid={`project-filter-${cat.en.toLowerCase().replace(/ /g, "-")}`}
            >
              {t(cat.en, cat.ar)}
              {cat.en !== "All" && (
                <span className="ms-1.5 text-xs opacity-60">
                  ({mockProjects.filter((p) => p.category === cat.en).length})
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              whileHover={{ y: -4 }}
              className="group rounded-xl overflow-hidden border border-border bg-card"
              data-testid={`project-card-${project.id}`}
            >
              <div className="relative aspect-video overflow-hidden bg-muted">
                <img
                  src={project.imageUrl}
                  alt={t(project.title, project.arabicTitle)}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className={`absolute top-3 end-3 px-2.5 py-1 text-xs font-semibold rounded-full ${
                  project.status === "completed"
                    ? "bg-emerald-500 text-white"
                    : "bg-[hsl(42,90%,50%)] text-[hsl(220,60%,10%)]"
                }`}>
                  {t(
                    project.status === "completed" ? "Completed" : "Ongoing",
                    project.status === "completed" ? "منجز" : "جاري"
                  )}
                </span>
              </div>
              <div className="p-5">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground mb-2">
                  <span className="font-semibold text-[hsl(220,80%,45%)]">
                    {t(project.category, project.arabicCategory)}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={10} /> {t(project.location, project.arabicLocation)}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={10} /> {project.year}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2 group-hover:text-[hsl(220,80%,45%)] transition-colors">
                  {t(project.title, project.arabicTitle)}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t(project.description, project.arabicDescription)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-muted-foreground">
            {t("No projects found in this category.", "لا توجد مشاريع في هذه الفئة.")}
          </div>
        )}
      </SectionWrapper>
    </div>
  );
}
