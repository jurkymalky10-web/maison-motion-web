"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import type { StoredConsent } from "@/lib/cookieConsent";
import {
  getConsentSnapshot,
  getServerConsentSnapshot,
  setConsentPreferences,
  subscribeConsent,
} from "@/lib/cookieConsentStore";

type CookieConsentContextValue = {
  consent: StoredConsent | null;
  hydrated: boolean;
  isPreferencesOpen: boolean;
  acceptAll: () => void;
  rejectNonEssential: () => void;
  savePreferences: (analytics: boolean) => void;
  openPreferences: () => void;
  closePreferences: () => void;
};

const CookieConsentContext = createContext<CookieConsentContextValue | null>(null);

const getHydratedSnapshot = () => true;
const getServerHydratedSnapshot = () => false;

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const consent = useSyncExternalStore(subscribeConsent, getConsentSnapshot, getServerConsentSnapshot);
  const hydrated = useSyncExternalStore(subscribeConsent, getHydratedSnapshot, getServerHydratedSnapshot);
  const [isPreferencesOpen, setIsPreferencesOpen] = useState(false);

  const applyConsent = useCallback((analytics: boolean) => {
    setConsentPreferences({ analytics });
    setIsPreferencesOpen(false);
  }, []);

  const acceptAll = useCallback(() => applyConsent(true), [applyConsent]);
  const rejectNonEssential = useCallback(() => applyConsent(false), [applyConsent]);
  const savePreferences = useCallback((analytics: boolean) => applyConsent(analytics), [applyConsent]);
  const openPreferences = useCallback(() => setIsPreferencesOpen(true), []);
  const closePreferences = useCallback(() => setIsPreferencesOpen(false), []);

  const value = useMemo<CookieConsentContextValue>(
    () => ({
      consent,
      hydrated,
      isPreferencesOpen,
      acceptAll,
      rejectNonEssential,
      savePreferences,
      openPreferences,
      closePreferences,
    }),
    [consent, hydrated, isPreferencesOpen, acceptAll, rejectNonEssential, savePreferences, openPreferences, closePreferences]
  );

  return <CookieConsentContext.Provider value={value}>{children}</CookieConsentContext.Provider>;
}

export function useCookieConsent() {
  const ctx = useContext(CookieConsentContext);
  if (!ctx) {
    throw new Error("useCookieConsent must be used within a CookieConsentProvider");
  }
  return ctx;
}
