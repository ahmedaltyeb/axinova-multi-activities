import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
}

export default function SectionWrapper({ children, className = "", id, dark }: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`py-20 px-4 sm:px-6 lg:px-8 ${dark ? "bg-[hsl(220,60%,8%)]" : "bg-background"} ${className}`}
    >
      <div className="max-w-screen-xl mx-auto">
        {children}
      </div>
    </motion.section>
  );
}

export function SectionHeading({ title, subtitle, light }: { title: string; subtitle?: string; light?: boolean }) {
  return (
    <div className="mb-12">
      <div className={`inline-block h-0.5 w-12 mb-4 ${light ? "bg-[hsl(42,90%,50%)]" : "bg-[hsl(220,80%,45%)]"}`} />
      <h2 className={`text-3xl sm:text-4xl font-bold tracking-tight ${light ? "text-white" : "text-foreground"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg max-w-2xl ${light ? "text-white/60" : "text-muted-foreground"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
