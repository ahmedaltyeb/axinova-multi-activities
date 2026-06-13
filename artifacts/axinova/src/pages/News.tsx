import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, User, ArrowRight } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import SectionWrapper, { SectionHeading } from "@/components/SectionWrapper";
import { mockNews } from "@/data/mockData";

const categories = ["All", "Business", "Operations", "Sustainability", "Partnerships", "Quality", "Corporate", "Careers", "Financial"];

export default function News() {
  const { t } = useLang();
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState<typeof mockNews[0] | null>(null);

  const filtered = active === "All" ? mockNews : mockNews.filter((n) => n.category === active);

  if (selected) {
    return (
      <div className="pt-16">
        <section className="bg-[hsl(220,60%,8%)] py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-screen-xl mx-auto">
            <button onClick={() => setSelected(null)} className="text-sm text-white/50 hover:text-white mb-6 flex items-center gap-1" data-testid="news-back">
              ← {t("Back to News", "العودة إلى الأخبار")}
            </button>
            <span className="text-xs font-semibold uppercase tracking-widest text-[hsl(42,90%,50%)]">{selected.category}</span>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mt-3 max-w-3xl">
              {t(selected.title, selected.arabicTitle)}
            </h1>
            <div className="flex items-center gap-4 mt-4 text-sm text-white/40">
              <span className="flex items-center gap-1"><Calendar size={12} /> {selected.date}</span>
              <span className="flex items-center gap-1"><User size={12} /> {selected.author}</span>
            </div>
          </div>
        </section>
        <SectionWrapper>
          <div className="max-w-3xl">
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">{selected.summary}</p>
            <p className="text-muted-foreground leading-relaxed">{selected.body}</p>
          </div>
        </SectionWrapper>
      </div>
    );
  }

  return (
    <div className="pt-16">
      <section className="bg-[hsl(220,60%,8%)] py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-block h-0.5 w-12 bg-[hsl(42,90%,50%)] mb-4" />
            <h1 className="text-4xl sm:text-5xl font-bold text-white max-w-2xl">
              {t("News & Media", "الأخبار والإعلام")}
            </h1>
            <p className="mt-6 text-lg text-white/60 max-w-2xl">
              {t("Latest updates from Axinova — milestones, partnerships, and strategic news.", "آخر التحديثات من أكسينوفا — الإنجازات والشراكات والأخبار الاستراتيجية.")}
            </p>
          </motion.div>
        </div>
      </section>

      <SectionWrapper>
        {/* Category filters */}
        <div className="flex flex-wrap gap-2 mb-10" data-testid="news-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 text-sm font-medium rounded-full border transition-colors ${
                active === cat
                  ? "bg-[hsl(220,80%,45%)] border-[hsl(220,80%,45%)] text-white"
                  : "border-border text-muted-foreground hover:border-[hsl(220,80%,45%)] hover:text-foreground"
              }`}
              data-testid={`news-filter-${cat.toLowerCase()}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Article grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((article, i) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group rounded-xl border border-border bg-card overflow-hidden hover:border-[hsl(220,80%,45%)] transition-colors cursor-pointer"
              onClick={() => setSelected(article)}
              data-testid={`news-card-${article.id}`}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold uppercase tracking-widest text-[hsl(42,90%,50%)] bg-[hsl(42,90%,50%)]/10 px-2 py-0.5 rounded">
                    {article.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{article.date}</span>
                </div>
                <h3 className="text-base font-semibold text-foreground mb-3 group-hover:text-[hsl(220,80%,45%)] transition-colors leading-snug">
                  {t(article.title, article.arabicTitle)}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{article.summary}</p>
                <div className="flex items-center gap-1 mt-4 text-sm font-medium text-[hsl(220,80%,45%)]">
                  {t("Read more", "اقرأ أكثر")} <ArrowRight size={13} />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
}
