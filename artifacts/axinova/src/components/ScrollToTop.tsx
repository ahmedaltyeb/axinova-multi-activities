import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";

export function ScrollRestorer() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location]);
  return null;
}

export function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 end-6 z-50 w-11 h-11 rounded-full bg-[hsl(42,90%,50%)] text-[hsl(220,60%,10%)] shadow-lg flex items-center justify-center hover:bg-[hsl(42,90%,45%)] transition-colors"
          aria-label="Scroll to top"
          data-testid="scroll-to-top"
        >
          <ChevronUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
