import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { useLang } from "@/context/LanguageContext";

export default function NotFound() {
  const { t } = useLang();
  return (
    <div className="min-h-screen flex items-center justify-center bg-[hsl(220,60%,8%)] px-4">
      <div className="text-center">
        <div className="text-[10rem] font-bold leading-none text-white/[0.04] select-none mb-0">404</div>
        <div className="h-0.5 w-12 bg-[hsl(42,90%,50%)] mx-auto mb-6" />
        <h1 className="text-2xl font-bold text-white mb-3">
          {t("Page Not Found", "الصفحة غير موجودة")}
        </h1>
        <p className="text-white/50 mb-8 max-w-sm mx-auto text-sm leading-relaxed">
          {t(
            "The page you're looking for doesn't exist or has been moved.",
            "الصفحة التي تبحث عنها غير موجودة أو تم نقلها."
          )}
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[hsl(42,90%,50%)] text-[hsl(220,60%,10%)] font-semibold rounded-md hover:bg-[hsl(42,90%,45%)] transition-colors"
          data-testid="not-found-home"
        >
          <ArrowLeft size={16} />
          {t("Back to Home", "العودة للرئيسية")}
        </Link>
      </div>
    </div>
  );
}
