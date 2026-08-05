"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useCookieConsent } from "./CookieConsentContext";

export default function CookieConsentBanner() {
  const t = useTranslations("cookieConsent.banner");
  const { consent, hydrated, isPreferencesOpen, acceptAll, rejectNonEssential, openPreferences } =
    useCookieConsent();

  const visible = hydrated && !consent && !isPreferencesOpen;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          role="dialog"
          aria-label={t("title")}
          className="fixed inset-x-0 bottom-0 z-[100] border-t border-hairline bg-black/95 backdrop-blur-md"
        >
          <div className="container-lux flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-[0.3em] text-bronze">{t("title")}</p>
              <p className="mt-3 text-sm leading-relaxed text-foreground/70">{t("description")}</p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={openPreferences}
                className="text-xs uppercase tracking-[0.2em] text-foreground/60 underline-offset-4 transition-colors hover:text-foreground hover:underline"
              >
                {t("customize")}
              </button>
              <button
                type="button"
                onClick={rejectNonEssential}
                className="inline-flex items-center justify-center border border-foreground/30 px-6 py-3 text-xs uppercase tracking-[0.2em] text-foreground transition-all duration-300 ease-out hover:border-bronze hover:text-bronze"
              >
                {t("rejectNonEssential")}
              </button>
              <button
                type="button"
                onClick={acceptAll}
                className="inline-flex items-center justify-center bg-bronze px-6 py-3 text-xs uppercase tracking-[0.2em] text-black transition-all duration-300 ease-out hover:shadow-[0_0_24px_rgba(198,138,78,0.45)]"
              >
                {t("acceptAll")}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
