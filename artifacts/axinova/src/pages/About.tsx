import { motion } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import SectionWrapper, { SectionHeading } from "@/components/SectionWrapper";
import { mockTeam } from "@/data/mockData";
import { User } from "lucide-react";

const milestones = [
  { year: "1999", en: "Founded in Riyadh as a civil contracting firm.", ar: "التأسيس في الرياض كشركة مقاولات مدنية." },
  { year: "2003", en: "Expanded into Industrial sector with first steel processing facility.", ar: "التوسع في القطاع الصناعي مع أول منشأة لمعالجة الصلب." },
  { year: "2008", en: "Launched Logistics division to support regional supply chains.", ar: "إطلاق قسم اللوجستيات لدعم سلاسل التوريد الإقليمية." },
  { year: "2012", en: "Operations expanded to 8 GCC and MENA countries.", ar: "توسعت العمليات إلى 8 دول في الخليج والشرق الأوسط." },
  { year: "2016", en: "Trading and Technical Services divisions established.", ar: "إنشاء أقسام التجارة والخدمات الفنية." },
  { year: "2020", en: "Surpassed 400 completed projects across the region.", ar: "تجاوز 400 مشروع منجز عبر المنطقة." },
  { year: "2023", en: "Awarded largest contract in company history — $600M Jubail expansion.", ar: "الحصول على أكبر عقد في تاريخ الشركة — توسعة الجبيل بقيمة 600 مليون دولار." },
  { year: "2024", en: "Opened new regional HQ in King Abdullah Financial District, Riyadh.", ar: "افتتاح المقر الإقليمي الجديد في حي الملك عبدالله المالي بالرياض." },
];

export default function About() {
  const { t } = useLang();

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-[hsl(220,60%,8%)] py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-block h-0.5 w-12 bg-[hsl(42,90%,50%)] mb-4" />
            <h1 className="text-4xl sm:text-5xl font-bold text-white max-w-2xl">
              {t("About Axinova", "عن أكسينوفا")}
            </h1>
            <p className="mt-6 text-lg text-white/60 max-w-2xl">
              {t(
                "25 years of building, trading, and serving the industrial ambitions of the GCC and MENA region.",
                "25 عاماً من البناء والتجارة وخدمة الطموحات الصناعية لمنطقة الخليج والشرق الأوسط."
              )}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <SectionWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading
              title={t("Our Story", "قصتنا")}
              subtitle={t(
                "From a small contracting firm in Riyadh to a multi-billion enterprise spanning 12 countries.",
                "من شركة مقاولات صغيرة في الرياض إلى مؤسسة متعددة المليارات تمتد عبر 12 دولة."
              )}
            />
            <p className="text-muted-foreground leading-relaxed mt-4">
              {t(
                "Axinova was founded in 1999 with a simple conviction: that a single, integrated enterprise could do more for the GCC than any collection of specialists working in silos. Over 25 years, that conviction has built five world-class divisions, delivered 500+ landmark projects, and created sustainable employment for over 8,000 professionals.",
                "تأسست أكسينوفا عام 1999 بقناعة بسيطة: أن مؤسسة واحدة متكاملة يمكنها تقديم خدمة أفضل لمنطقة الخليج من أي مجموعة من المتخصصين. على مدى 25 عاماً، أسست خمسة أقسام عالمية المستوى."
              )}
            </p>
          </div>
          <div className="relative aspect-square rounded-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
              alt="Axinova headquarters"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </SectionWrapper>

      {/* Mission / Vision / Values */}
      <SectionWrapper dark>
        <SectionHeading title={t("Mission, Vision & Values", "الرسالة والرؤية والقيم")} light />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              en_title: "Mission",
              ar_title: "الرسالة",
              en_body: "To deliver integrated industrial, commercial, and infrastructure solutions that accelerate the economic development of the GCC and MENA region.",
              ar_body: "تقديم حلول صناعية وتجارية وبنية تحتية متكاملة تُسرّع التنمية الاقتصادية في منطقة الخليج والشرق الأوسط."
            },
            {
              en_title: "Vision",
              ar_title: "الرؤية",
              en_body: "To be the defining enterprise of the Gulf's next industrial era — the company that others measure themselves against.",
              ar_body: "أن نكون المؤسسة المحددة للحقبة الصناعية القادمة في الخليج — الشركة التي يقيس بها الآخرون أنفسهم."
            },
            {
              en_title: "Values",
              ar_title: "القيم",
              en_body: "Scale with integrity. Precision without compromise. Partnership built for the long term. Excellence that sets the standard.",
              ar_body: "الحجم مع النزاهة. الدقة دون تنازل. شراكة مبنية على المدى البعيد. التميز الذي يضع المعيار."
            },
          ].map((item) => (
            <div key={item.en_title} className="p-6 rounded-xl border border-white/10 bg-[hsl(220,60%,10%)]" data-testid={`value-card-${item.en_title.toLowerCase()}`}>
              <div className="h-0.5 w-8 bg-[hsl(42,90%,50%)] mb-4" />
              <h3 className="text-lg font-semibold text-white mb-3">{t(item.en_title, item.ar_title)}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{t(item.en_body, item.ar_body)}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Team */}
      <SectionWrapper>
        <SectionHeading title={t("Leadership Team", "فريق القيادة")} subtitle={t("The executives driving Axinova's strategy and growth.", "المديرون التنفيذيون الذين يقودون استراتيجية أكسينوفا ونموها.")} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockTeam.map((member, i) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="p-6 rounded-xl border border-border bg-card"
              data-testid={`team-card-${member.id}`}
            >
              <div className="w-14 h-14 rounded-full bg-[hsl(220,80%,45%)]/10 flex items-center justify-center mb-4">
                <User size={24} className="text-[hsl(220,80%,45%)]" />
              </div>
              <h3 className="text-base font-semibold text-foreground">{t(member.name, member.arabicName)}</h3>
              <p className="text-sm text-[hsl(220,80%,45%)] font-medium mb-3">{t(member.title, member.arabicTitle)}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Milestones */}
      <SectionWrapper dark>
        <SectionHeading title={t("Company Milestones", "معالم الشركة")} light />
        <div className="relative">
          <div className="absolute start-6 top-0 bottom-0 w-px bg-white/10" />
          <div className="space-y-8">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="relative flex gap-6 items-start ps-12"
                data-testid={`milestone-${m.year}`}
              >
                <div className="absolute start-0 top-1 w-12 h-12 rounded-full border-2 border-[hsl(42,90%,50%)] bg-[hsl(220,60%,8%)] flex items-center justify-center shrink-0">
                  <span className="text-[10px] font-bold text-[hsl(42,90%,50%)]">{m.year}</span>
                </div>
                <div className="pt-2">
                  <p className="text-white/70 text-sm">{t(m.en, m.ar)}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
