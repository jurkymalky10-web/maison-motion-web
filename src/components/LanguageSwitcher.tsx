"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { AnimatePresence, motion } from "framer-motion";
import { locales, localeMeta, localeCookieName, type Locale } from "@/i18n/config";

function setLocaleCookie(next: Locale) {
  document.cookie = `${localeCookieName}=${next}; path=/; max-age=31536000`;
}

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const locale = useLocale() as Locale;
  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const selectLocale = (next: Locale) => {
    setOpen(false);
    if (next === locale) return;
    setLocaleCookie(next);
    router.refresh();
  };

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Change language"
        aria-expanded={open}
        className="flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] text-foreground/70 transition-colors duration-300 ease-out hover:text-bronze"
      >
        <span aria-hidden className="text-sm leading-none">
          🌐
        </span>
        <span>{localeMeta[locale].flag}</span>
        <svg
          width="10"
          height="10"
          viewBox="0 0 24 24"
          fill="none"
          className={`transition-transform duration-300 ease-out ${open ? "rotate-180" : ""}`}
        >
          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="absolute right-0 top-full z-50 mt-3 min-w-[160px] border border-bronze/30 bg-black/95 py-2 backdrop-blur-md"
          >
            {locales.map((code) => (
              <button
                key={code}
                onClick={() => selectLocale(code)}
                className={`flex w-full items-center gap-3 px-4 py-2.5 text-left text-xs uppercase tracking-[0.15em] transition-colors duration-200 ease-out hover:bg-bronze/10 hover:text-bronze ${
                  code === locale ? "text-bronze" : "text-foreground/70"
                }`}
              >
                <span aria-hidden>{localeMeta[code].flag}</span>
                {localeMeta[code].label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
