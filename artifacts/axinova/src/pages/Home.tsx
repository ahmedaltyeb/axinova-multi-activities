import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Factory, Globe, Wrench, Truck, Building2, ChevronRight } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import SectionWrapper, { SectionHeading } from "@/components/SectionWrapper";
import StatCounter from "@/components/StatCounter";
import { mockSectors, mockProjects, mockStats, mockPartners } from "@/data/mockData";

const iconMap: Record<string, React.FC<{ size?: number; className?: string }>> = {
  Factory, Globe, Wrench, Truck, Building2
};

const stagger = {
  container: { hidden: {}, show: { transition: { staggerChildren: 0.12 } } },
  item: { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } } }
};

export default function Home() {
  const { t } = useLang();

  return (
    <div className="pt-16">
      {/* Hero */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ background: "linear-gradient(135deg, hsl(220,60%,6%) 0%, hsl(220,50%,12%) 60%, hsl(220,60%,8%) 100%)" }}
      >
        {/* Background grid */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "linear-gradient(hsl(220,80%,45%) 1px, transparent 1px), linear-gradient(90deg, hsl(220,80%,45%) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[hsl(220,60%,6%)]" />

        <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <motion.div variants={stagger.container} initial="hidden" animate="show">
            <motion.div variants={stagger.item} className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[hsl(42,90%,50%)]/30 bg-[hsl(42,90%,50%)]/10 text-[hsl(42,90%,50%)] text-xs font-semibold tracking-widest uppercase mb-6">
              {t("GCC & MENA Region", "منطقة الخليج والشرق الأوسط")}
            </motion.div>
            <motion.h1 variants={stagger.item} className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight max-w-4xl mx-auto">
              {t("Building the Future of", "نبني مستقبل")}{" "}
              <span className="text-[hsl(42,90%,50%)]">{t("Enterprise", "المؤسسات")}</span>{" "}
              {t("Across the Region", "عبر المنطقة")}
            </motion.h1>
            <motion.p variants={stagger.item} className="mt-6 text-lg sm:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              {t(
                "Axinova is a multi-sector powerhouse operating across Industrial, Trading, Technical Services, Logistics, and Construction — connecting capital, capability, and ambition.",
                "أكسينوفا قوة متعددة القطاعات تعمل في الصناعة والتجارة والخدمات الفنية واللوجستيات والبناء."
              )}
            </motion.p>
            <motion.div variants={stagger.item} className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/industries"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[hsl(42,90%,50%)] text-[hsl(220,60%,10%)] font-semibold rounded-md hover:bg-[hsl(42,90%,45%)] transition-colors"
                data-testid="hero-cta-explore"
              >
                {t("Explore Our Sectors", "استكشف قطاعاتنا")} <ArrowRight size={16} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white font-semibold rounded-md hover:border-white/60 hover:bg-white/5 transition-colors"
                data-testid="hero-cta-contact"
              >
                {t("Partner With Us", "تشارك معنا")}
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Sector Cards */}
      <SectionWrapper>
        <SectionHeading
          title={t("Our Five Sectors", "قطاعاتنا الخمسة")}
          subtitle={t("A diversified enterprise built to lead across every pillar of GCC industry.", "مؤسسة متنوعة تأسست لتقود في كل ركيزة من ركائز الصناعة الخليجية.")}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockSectors.map((sector, i) => {
            const Icon = iconMap[sector.icon];
            return (
              <motion.div
                key={sector.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="group p-6 rounded-xl border border-border bg-card hover:border-[hsl(220,80%,45%)] transition-all duration-300 cursor-pointer"
                data-testid={`sector-card-${sector.id}`}
              >
                <div className="w-12 h-12 rounded-lg bg-[hsl(220,80%,45%)]/10 flex items-center justify-center mb-4 group-hover:bg-[hsl(220,80%,45%)]/20 transition-colors">
                  {Icon && <Icon size={22} className="text-[hsl(220,80%,45%)]" />}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{t(sector.name, sector.arabicName)}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t(sector.description, sector.arabicDescription)}</p>
                <Link href="/industries" className="inline-flex items-center gap-1 text-sm font-medium text-[hsl(220,80%,45%)] mt-4 hover:gap-2 transition-all">
                  {t("Learn more", "اعرف أكثر")} <ChevronRight size={14} />
                </Link>
              </motion.div>
            );
          })}
          {/* 5th sector fills last slot on 3-col */}
        </div>
      </SectionWrapper>

      {/* Company Overview */}
      <SectionWrapper dark>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block h-0.5 w-12 bg-[hsl(42,90%,50%)] mb-4" />
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
              {t("25 Years of Building the GCC", "25 عاماً من بناء الخليج")}
            </h2>
            <p className="mt-4 text-white/60 leading-relaxed">
              {t(
                "Founded in 1999, Axinova has grown from a regional contractor into a fully integrated multi-sector enterprise. We operate across 12 countries, deliver projects measured in billions, and employ over 8,000 professionals dedicated to excellence.",
                "تأسست أكسينوفا عام 1999 ونمت من مقاول إقليمي إلى مؤسسة متعددة القطاعات متكاملة. نعمل في 12 دولة ونُنفذ مشاريع بمليارات الدولارات مع أكثر من 8000 متخصص."
              )}
            </p>
            <p className="mt-4 text-white/60 leading-relaxed">
              {t(
                "Our integrated model lets us serve as a single point of accountability for the most complex, capital-intensive projects in the region — from concept to commissioning.",
                "نموذجنا المتكامل يجعلنا نقطة مسؤولية واحدة للمشاريع الأكثر تعقيداً وكثافة رأسمالياً في المنطقة."
              )}
            </p>
            <Link href="/about" className="inline-flex items-center gap-2 mt-8 px-6 py-3 border border-[hsl(42,90%,50%)]/40 text-[hsl(42,90%,50%)] rounded-md hover:bg-[hsl(42,90%,50%)]/10 transition-colors font-medium">
              {t("Our Story", "قصتنا")} <ArrowRight size={16} />
            </Link>
          </div>
          <div className="relative aspect-video rounded-xl overflow-hidden bg-[hsl(220,50%,14%)]">
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
              alt="Axinova operations"
              className="w-full h-full object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[hsl(220,60%,8%)]/60 to-transparent" />
          </div>
        </div>
      </SectionWrapper>

      {/* Stats */}
      <section className="py-20 bg-[hsl(220,80%,45%)]">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
            {mockStats.map((stat) => (
              <StatCounter
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <SectionWrapper>
        <SectionHeading
          title={t("Featured Projects", "المشاريع المميزة")}
          subtitle={t("A selection of landmark projects delivered across the GCC and MENA.", "مجموعة مختارة من المشاريع التاريخية المُنجزة عبر منطقة الخليج والشرق الأوسط.")}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockProjects.slice(0, 4).map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
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
                <span className={`absolute top-3 end-3 px-2 py-0.5 text-xs font-semibold rounded-full ${
                  project.status === "completed" ? "bg-green-500/90 text-white" : "bg-[hsl(42,90%,50%)] text-[hsl(220,60%,10%)]"
                }`}>
                  {t(project.status === "completed" ? "Completed" : "Ongoing", project.status === "completed" ? "منجز" : "جاري")}
                </span>
              </div>
              <div className="p-4">
                <p className="text-xs font-medium text-[hsl(220,80%,45%)] uppercase tracking-wide mb-1">{project.category} · {project.location}</p>
                <h3 className="text-sm font-semibold text-foreground">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-md text-sm font-medium text-foreground hover:border-[hsl(220,80%,45%)] hover:text-[hsl(220,80%,45%)] transition-colors"
            data-testid="home-view-all-projects"
          >
            {t("View All Projects", "جميع المشاريع")} <ArrowRight size={14} />
          </Link>
        </div>
      </SectionWrapper>

      {/* Partners */}
      <SectionWrapper dark>
        <SectionHeading title={t("Trusted Partners", "شركاؤنا الموثوقون")} light />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px border border-white/10 rounded-lg overflow-hidden">
          {mockPartners.map((partner, i) => (
            <motion.div
              key={partner}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="flex items-center justify-center py-8 px-6 bg-[hsl(220,60%,10%)] hover:bg-[hsl(220,60%,13%)] transition-colors"
              data-testid={`partner-logo-${i}`}
            >
              <span className="text-sm font-semibold text-white/40 text-center">{partner}</span>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Final CTA */}
      <section className="py-24 bg-[hsl(42,90%,50%)]">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[hsl(220,60%,10%)]">
            {t("Ready to Build Something Exceptional?", "هل أنت مستعد لبناء شيء استثنائي؟")}
          </h2>
          <p className="mt-4 text-[hsl(220,60%,10%)]/70 text-lg max-w-xl mx-auto">
            {t(
              "Whether you're an investor, a government client, or an industrial partner — let's talk.",
              "سواء كنت مستثمراً أو عميلاً حكومياً أو شريكاً صناعياً — فلنتحدث."
            )}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[hsl(220,60%,10%)] text-white font-semibold rounded-md hover:bg-[hsl(220,60%,14%)] transition-colors"
              data-testid="cta-contact"
            >
              {t("Get in Touch", "تواصل معنا")} <ArrowRight size={16} />
            </Link>
            <Link
              href="/investors"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[hsl(220,60%,10%)]/30 text-[hsl(220,60%,10%)] font-semibold rounded-md hover:border-[hsl(220,60%,10%)]/60 transition-colors"
              data-testid="cta-investors"
            >
              {t("Investor Relations", "علاقات المستثمرين")}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
