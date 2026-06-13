import { useState } from "react";
import { motion } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import SectionWrapper, { SectionHeading } from "@/components/SectionWrapper";
import { mockProducts } from "@/data/mockData";
import { Package } from "lucide-react";

const categories = ["All", ...Array.from(new Set(mockProducts.map((p) => p.category)))];

export default function Products() {
  const { t } = useLang();
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? mockProducts : mockProducts.filter((p) => p.category === active);

  return (
    <div className="pt-16">
      <section className="bg-[hsl(220,60%,8%)] py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-block h-0.5 w-12 bg-[hsl(42,90%,50%)] mb-4" />
            <h1 className="text-4xl sm:text-5xl font-bold text-white max-w-2xl">
              {t("Products", "المنتجات")}
            </h1>
            <p className="mt-6 text-lg text-white/60 max-w-2xl">
              {t(
                "Industrial materials, heavy equipment, and logistics solutions sourced and supplied across the GCC.",
                "مواد صناعية ومعدات ثقيلة وحلول لوجستية مُوردة ومُورّدة عبر منطقة الخليج."
              )}
            </p>
          </motion.div>
        </div>
      </section>

      <SectionWrapper>
        {/* Filter */}
        <div className="flex flex-wrap gap-2 mb-10" data-testid="product-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 text-sm font-medium rounded-full border transition-colors ${
                active === cat
                  ? "bg-[hsl(220,80%,45%)] border-[hsl(220,80%,45%)] text-white"
                  : "border-border text-muted-foreground hover:border-[hsl(220,80%,45%)] hover:text-foreground"
              }`}
              data-testid={`filter-${cat.toLowerCase().replace(/ /g, "-")}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              className="p-6 rounded-xl border border-border bg-card hover:border-[hsl(220,80%,45%)] transition-colors group"
              data-testid={`product-card-${product.id}`}
            >
              <div className="w-10 h-10 rounded-lg bg-[hsl(220,80%,45%)]/10 flex items-center justify-center mb-4 group-hover:bg-[hsl(220,80%,45%)]/20 transition-colors">
                <Package size={18} className="text-[hsl(220,80%,45%)]" />
              </div>
              <span className="text-xs font-medium text-[hsl(42,90%,50%)] uppercase tracking-wide">{product.category}</span>
              <h3 className="text-base font-semibold text-foreground mt-1 mb-2">{product.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">{product.description}</p>
              <div className="text-xs font-mono text-muted-foreground bg-muted px-3 py-2 rounded-md">
                {product.specs}
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
}
