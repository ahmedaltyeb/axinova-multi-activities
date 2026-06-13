import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, User, ArrowRight, Mail } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import SectionWrapper, { SectionHeading } from "@/components/SectionWrapper";
import { mockNews } from "@/data/mockData";

const categories = ["All", "Business", "Operations", "Sustainability", "Partnerships", "Quality", "Corporate", "Careers", "Financial"];

function NewsletterSignup() {
  const { t } = useLang();
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <section className="py-20 bg-[hsl(220,80%,45%)] px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-5">
            <Mail size={20} className="text-white" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            {t("Stay Ahead of the Market", "ابقَ في مقدمة السوق")}
          </h2>
          <p className="text-white/70 mb-8">
            {t(
              "Get Axinova's quarterly investor briefing and strategic updates delivered to your inbox.",
              "احصل على نشرة أكسينوفا الاستثمارية الفصلية والتحديثات الاستراتيجية مباشرة في بريدك الإلكتروني."
            )}
          </p>
          {done ? (
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 rounded-md text-white font-medium">
              <span>✓</span> {t("You're subscribed!", "أنت مشترك الآن!")}
            </div>
          ) : (
            <form
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              onSubmit={(e) => { e.preventDefault(); if (email) setDone(true); }}
              data-testid="newsletter-form"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t("Your work email", "بريدك الإلكتروني المهني")}
                className="flex-1 px-4 py-3 rounded-md bg-white/15 border border-white/30 text-white placeholder:text-white/50 text-sm focus:outline-none focus:ring-2 focus:ring-white/50"
                data-testid="newsletter-email"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-white text-[hsl(220,60%,10%)] font-semibold rounded-md hover:bg-white/90 transition-colors text-sm shrink-0"
                data-testid="newsletter-submit"
              >
                {t("Subscribe", "اشترك")}
              </button>
            </form>
          )}
          <p className="mt-4 text-xs text-white/40">
            {t("No spam. Unsubscribe anytime. Quarterly dispatch only.", "لا بريد مزعج. إلغاء الاشتراك في أي وقت. إرسال فصلي فقط.")}
          </p>
        </div>
      </div>
    </section>
  );
}

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
            <button onClick={() => setSelected(null)} className="text-sm text-white/50 hover:text-white mb-6 flex items-center gap-1 transition-colors" data-testid="news-back">
              ← {t("Back to News", "العودة إلى الأخبار")}
            </button>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-semibold uppercase tracking-widest bg-[hsl(42,90%,50%)]/10 text-[hsl(42,90%,50%)]">
              {selected.category}
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mt-4 max-w-3xl leading-tight">
              {t(selected.title, selected.arabicTitle)}
            </h1>
            <div className="flex flex-wrap items-center gap-5 mt-4 text-sm text-white/40">
              <span className="flex items-center gap-1.5"><Calendar size={13} /> {selected.date}</span>
              <span className="flex items-center gap-1.5"><User size={13} /> {selected.author}</span>
            </div>
          </div>
        </section>
        <SectionWrapper>
          <div className="max-w-3xl">
            <p className="text-muted-foreground text-xl leading-relaxed mb-8 font-medium">{selected.summary}</p>
            <div className="w-full h-px bg-border mb-8" />
            <p className="text-muted-foreground leading-relaxed text-base">{selected.body}</p>
          </div>
        </SectionWrapper>
        <NewsletterSignup />
      </div>
    );
  }

  return (
    <div className="pt-16">
      {/* Hero */}
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

      {/* Featured article — first item */}
      <section className="px-4 sm:px-6 lg:px-8 py-10 border-b border-border">
        <div className="max-w-screen-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="group grid grid-cols-1 lg:grid-cols-5 gap-8 items-start cursor-pointer"
            onClick={() => setSelected(mockNews[0])}
            data-testid="news-featured"
          >
            <div className="lg:col-span-3">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-semibold uppercase tracking-widest bg-[hsl(42,90%,50%)]/10 text-[hsl(42,90%,50%)] mb-3">
                {t("Featured", "المميز")} · {mockNews[0].category}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground group-hover:text-[hsl(220,80%,45%)] transition-colors leading-tight mb-4">
                {t(mockNews[0].title, mockNews[0].arabicTitle)}
              </h2>
              <p className="text-muted-foreground leading-relaxed">{mockNews[0].summary}</p>
              <div className="flex items-center gap-2 mt-5 text-sm font-medium text-[hsl(220,80%,45%)]">
                {t("Read full story", "اقرأ القصة كاملة")} <ArrowRight size={14} />
              </div>
            </div>
            <div className="lg:col-span-2 flex items-center justify-end">
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5"><Calendar size={11} /> {mockNews[0].date}</span>
                <span className="flex items-center gap-1.5"><User size={11} /> {mockNews[0].author}</span>
              </div>
            </div>
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
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group rounded-xl border border-border bg-card overflow-hidden hover:border-[hsl(220,80%,45%)] transition-colors cursor-pointer flex flex-col"
              onClick={() => setSelected(article)}
              data-testid={`news-card-${article.id}`}
            >
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold uppercase tracking-widest text-[hsl(42,90%,50%)] bg-[hsl(42,90%,50%)]/10 px-2 py-0.5 rounded">
                    {article.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{article.date}</span>
                </div>
                <h3 className="text-base font-semibold text-foreground mb-3 group-hover:text-[hsl(220,80%,45%)] transition-colors leading-snug flex-1">
                  {t(article.title, article.arabicTitle)}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{article.summary}</p>
                <div className="flex items-center gap-1 mt-5 text-sm font-medium text-[hsl(220,80%,45%)]">
                  {t("Read more", "اقرأ أكثر")} <ArrowRight size={13} />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </SectionWrapper>

      <NewsletterSignup />
    </div>
  );
}
