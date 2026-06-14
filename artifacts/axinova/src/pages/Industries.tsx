import { motion } from "framer-motion";
import { Factory, Globe, Wrench, Truck, Building2, Check } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import SectionWrapper, { SectionHeading } from "@/components/SectionWrapper";
import { mockSectors } from "@/data/mockData";
import { useSEO } from "@/hooks/useSEO";

const iconMap: Record<string, React.FC<{ size?: number; className?: string }>> = {
  Factory, Globe, Wrench, Truck, Building2
};

export default function Industries() {
  const { t } = useLang();
  useSEO("/industries");

  return (
    <div className="pt-16">
      <section className="bg-[hsl(220,60%,8%)] py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-block h-0.5 w-12 bg-[hsl(42,90%,50%)] mb-4" />
            <h1 className="text-4xl sm:text-5xl font-bold text-white max-w-2xl">
              {t("Our Industries", "قطاعاتنا الصناعية")}
            </h1>
            <p className="mt-6 text-lg text-white/60 max-w-2xl">
              {t(
                "Five sectors. One integrated enterprise. Total capability across every pillar of GCC industry.",
                "خمسة قطاعات. مؤسسة واحدة متكاملة. قدرة كاملة في كل ركيزة من ركائز الصناعة الخليجية."
              )}
            </p>
          </motion.div>
        </div>
      </section>

      <SectionWrapper>
        <div className="space-y-16">
          {mockSectors.map((sector, i) => {
            const Icon = iconMap[sector.icon];
            return (
              <motion.div
                key={sector.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.05 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start pb-16 ${i < mockSectors.length - 1 ? "border-b border-border" : ""}`}
                data-testid={`industry-block-${sector.id}`}
              >
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-[hsl(220,80%,45%)]/10 flex items-center justify-center">
                      {Icon && <Icon size={26} className="text-[hsl(220,80%,45%)]" />}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-foreground">{t(sector.name, sector.arabicName)}</h2>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {t(sector.description, sector.arabicDescription)}
                  </p>
                  <div className="mb-6">
                    <h4 className="text-xs font-semibold uppercase tracking-widest text-[hsl(220,80%,45%)] mb-3">
                      {t("Key Activities", "الأنشطة الرئيسية")}
                    </h4>
                    <ul className="space-y-2">
                      {sector.activities.map((act, idx) => (
                        <li key={act} className="flex items-center gap-2 text-sm text-foreground">
                          <Check size={14} className="text-[hsl(42,90%,50%)] shrink-0" />
                          {t(act, sector.arabicActivities[idx])}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-widest text-[hsl(220,80%,45%)] mb-2">
                      {t("Target Clients", "العملاء المستهدفون")}
                    </h4>
                    <p className="text-sm text-muted-foreground">{t(sector.targetClients, sector.arabicTargetClients)}</p>
                  </div>
                </div>
                <div className={`relative aspect-video rounded-xl overflow-hidden bg-muted ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <img
                    src={[
                      "https://images.unsplash.com/photo-1533422902779-babd002f6ae1?auto=format&fit=crop&w=800&q=80",
                      "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=800&q=80",
                      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80",
                      "https://images.unsplash.com/photo-1586528116311-ad8ed745eb33?auto=format&fit=crop&w=800&q=80",
                      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
                    ][i]}
                    alt={t(`Axinova ${sector.name} sector — industrial operations in GCC`, `قطاع ${sector.arabicName} في أكسينوفا — عمليات صناعية في الخليج`)}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </SectionWrapper>
    </div>
  );
}
