import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";

const navLinks = [
  { href: "/", en: "Home", ar: "الرئيسية" },
  { href: "/about", en: "About", ar: "عن الشركة" },
  { href: "/industries", en: "Industries", ar: "القطاعات" },
  { href: "/services", en: "Services", ar: "الخدمات" },
  { href: "/products", en: "Products", ar: "المنتجات" },
  { href: "/projects", en: "Projects", ar: "المشاريع" },
  { href: "/investors", en: "Investors", ar: "المستثمرون" },
  { href: "/news", en: "News", ar: "الأخبار" },
  { href: "/careers", en: "Careers", ar: "الوظائف" },
  { href: "/contact", en: "Contact", ar: "تواصل معنا" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { lang, setLang, t } = useLang();
  const { isDark, toggleTheme } = useTheme();
  const [location] = useLocation();

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[hsl(220,60%,14%)] dark:bg-[hsl(220,60%,8%)] border-b border-white/10 shadow-lg">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0" data-testid="nav-logo">
            <span className="text-xl font-bold tracking-widest text-white uppercase">
              Axinova<span className="text-[hsl(42,90%,50%)]">.</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1" data-testid="nav-desktop">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  location === link.href
                    ? "text-[hsl(42,90%,50%)]"
                    : "text-white/70 hover:text-white"
                }`}
                data-testid={`nav-link-${link.en.toLowerCase()}`}
              >
                {t(link.en, link.ar)}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-2">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              className="p-2 rounded-md text-white/70 hover:text-white hover:bg-white/10 transition-colors"
              data-testid="nav-theme-toggle"
            >
              {isDark ? <Sun size={17} /> : <Moon size={17} />}
            </button>

            {/* Language toggle */}
            <button
              onClick={() => setLang(lang === "en" ? "ar" : "en")}
              className="px-3 py-1.5 text-sm font-medium border border-white/20 rounded-md text-white/70 hover:text-white hover:border-white/40 transition-colors"
              data-testid="nav-lang-toggle"
            >
              {lang === "en" ? "العربية" : "English"}
            </button>

            <Link
              href="/contact"
              className="px-4 py-2 text-sm font-semibold bg-[hsl(42,90%,50%)] text-[hsl(220,60%,10%)] rounded-md hover:bg-[hsl(42,90%,45%)] transition-colors"
              data-testid="nav-cta"
            >
              {t("Get in Touch", "تواصل معنا")}
            </Link>
          </div>

          {/* Mobile header controls — always visible, never inside the dropdown */}
          <div className="lg:hidden flex items-center gap-1">
            <button
              onClick={toggleTheme}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              className="p-2 text-white/70 hover:text-white transition-colors"
              data-testid="nav-mobile-theme-toggle"
            >
              {isDark ? <Sun size={17} /> : <Moon size={17} />}
            </button>
            <button
              onClick={() => setLang(lang === "en" ? "ar" : "en")}
              className="px-2.5 py-1 text-xs font-medium border border-white/20 rounded-md text-white/70 hover:text-white hover:border-white/40 transition-colors"
              data-testid="nav-mobile-lang"
              aria-label={lang === "en" ? "Switch to Arabic" : "Switch to English"}
            >
              {lang === "en" ? "ع" : "EN"}
            </button>
            <button
              className="text-white p-2"
              onClick={() => setOpen(!open)}
              data-testid="nav-mobile-toggle"
              aria-label="Toggle menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-[hsl(220,60%,14%)] dark:bg-[hsl(220,60%,8%)] border-t border-white/10 px-4 pb-4" data-testid="nav-mobile-menu">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`block py-3 text-sm font-medium border-b border-white/10 transition-colors ${
                location === link.href ? "text-[hsl(42,90%,50%)]" : "text-white/70 hover:text-white"
              }`}
              data-testid={`nav-mobile-link-${link.en.toLowerCase()}`}
            >
              {t(link.en, link.ar)}
            </Link>
          ))}
          <div className="mt-4">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="inline-block px-4 py-2 text-sm font-semibold bg-[hsl(42,90%,50%)] text-[hsl(220,60%,10%)] rounded-md"
              data-testid="nav-mobile-cta"
            >
              {t("Get in Touch", "تواصل معنا")}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
