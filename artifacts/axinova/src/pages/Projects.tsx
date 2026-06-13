import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import SectionWrapper, { SectionHeading } from "@/components/SectionWrapper";
import { mockProjects } from "@/data/mockData";

const categories = ["All", "Industrial", "Logistics", "Technical Services", "Construction", "Trading"];

export default function Projects() {
  const { t } = useLang();
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? mockProjects : mockProjects.filter((p) => p.category === active);

  return (
    <div className="pt-16">
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

      <SectionWrapper>
        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-10" data-testid="project-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 text-sm font-medium rounded-full border transition-colors ${
                active === cat
                  ? "bg-[hsl(220,80%,45%)] border-[hsl(220,80%,45%)] text-white"
                  : "border-border text-muted-foreground hover:border-[hsl(220,80%,45%)] hover:text-foreground"
              }`}
              data-testid={`project-filter-${cat.toLowerCase().replace(/ /g, "-")}`}
            >
              {cat}
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
              transition={{ duration: 0.4, delay: i * 0.06 }}
              whileHover={{ y: -4 }}
              className="group rounded-xl overflow-hidden border border-border bg-card"
              data-testid={`project-card-${project.id}`}
            >
              <div className="relative aspect-video overflow-hidden bg-muted">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className={`absolute top-3 end-3 px-2.5 py-1 text-xs font-semibold rounded-full ${
                  project.status === "completed"
                    ? "bg-emerald-500 text-white"
                    : "bg-[hsl(42,90%,50%)] text-[hsl(220,60%,10%)]"
                }`}>
                  {t(project.status === "completed" ? "Completed" : "Ongoing", project.status === "completed" ? "منجز" : "جاري")}
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                  <span className="font-medium text-[hsl(220,80%,45%)]">{project.category}</span>
                  <span>·</span>
                  <MapPin size={11} />
                  <span>{project.location}</span>
                  <span>·</span>
                  <Calendar size={11} />
                  <span>{project.year}</span>
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
}
