"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useCookieConsent } from "./CookieConsentContext";
import type { StoredConsent } from "@/lib/cookieConsent";

export default function CookiePreferencesModal() {
  const { isPreferencesOpen, ...rest } = useCookieConsent();

  return (
    <AnimatePresence>
      {isPreferencesOpen && <PreferencesDialog {...rest} />}
    </AnimatePresence>
  );
}

function PreferencesDialog({
  consent,
  closePreferences,
  acceptAll,
  rejectNonEssential,
  savePreferences,
}: {
  consent: StoredConsent | null;
  closePreferences: () => void;
  acceptAll: () => void;
  rejectNonEssential: () => void;
  savePreferences: (analytics: boolean) => void;
}) {
  const t = useTranslations("cookieConsent.modal");
  const [analyticsEnabled, setAnalyticsEnabled] = useState(consent?.analytics ?? false);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closePreferences();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [closePreferences]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[110] flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm"
      onClick={closePreferences}
    >
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.98 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        role="dialog"
        aria-modal="true"
        aria-label={t("title")}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-lg border border-hairline bg-charcoal p-8 md:p-10"
      >
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-bronze">{t("title")}</p>
            <p className="mt-3 text-sm leading-relaxed text-foreground/70">{t("description")}</p>
          </div>
          <button
            type="button"
            onClick={closePreferences}
            aria-label={t("close")}
            className="shrink-0 text-foreground/50 transition-colors hover:text-foreground"
          >
            ✕
          </button>
        </div>

        <div className="mt-8 space-y-6">
          <div className="flex items-start justify-between gap-6 border-t border-hairline pt-6">
            <div>
              <p className="text-sm text-foreground">{t("necessary.title")}</p>
              <p className="mt-1 text-xs leading-relaxed text-foreground/50">{t("necessary.description")}</p>
            </div>
            <span className="mt-1 shrink-0 text-[10px] uppercase tracking-[0.2em] text-bronze/70">
              {t("necessary.alwaysActive")}
            </span>
          </div>

          <div className="flex items-start justify-between gap-6 border-t border-hairline pt-6">
            <div>
              <p className="text-sm text-foreground">{t("analytics.title")}</p>
              <p className="mt-1 text-xs leading-relaxed text-foreground/50">{t("analytics.description")}</p>
            </div>
            <button
              type="button"
              role="switch"
              aria-checked={analyticsEnabled}
              aria-label={t("analytics.title")}
              onClick={() => setAnalyticsEnabled((v) => !v)}
              className={`relative mt-1 h-6 w-11 shrink-0 rounded-full transition-colors duration-300 ${
                analyticsEnabled ? "bg-bronze" : "bg-foreground/20"
              }`}
            >
              <span
                className={`absolute top-0.5 h-5 w-5 rounded-full bg-black transition-transform duration-300 ${
                  analyticsEnabled ? "translate-x-5" : "translate-x-0.5"
                }`}
              />
            </button>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-end">
          <button
            type="button"
            onClick={rejectNonEssential}
            className="inline-flex items-center justify-center border border-foreground/30 px-6 py-3 text-xs uppercase tracking-[0.2em] text-foreground transition-all duration-300 ease-out hover:border-bronze hover:text-bronze"
          >
            {t("rejectAll")}
          </button>
          <button
            type="button"
            onClick={() => savePreferences(analyticsEnabled)}
            className="inline-flex items-center justify-center border border-bronze/60 px-6 py-3 text-xs uppercase tracking-[0.2em] text-bronze transition-all duration-300 ease-out hover:bg-bronze hover:text-black"
          >
            {t("save")}
          </button>
          <button
            type="button"
            onClick={acceptAll}
            className="inline-flex items-center justify-center bg-bronze px-6 py-3 text-xs uppercase tracking-[0.2em] text-black transition-all duration-300 ease-out hover:shadow-[0_0_24px_rgba(198,138,78,0.45)]"
          >
            {t("acceptAll")}
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
