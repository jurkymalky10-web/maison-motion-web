"use client";

import { useEffect } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";
import { GA_MEASUREMENT_ID } from "@/lib/analytics";
import { useCookieConsent } from "@/components/cookies/CookieConsentContext";

export default function AnalyticsLoader() {
  const { consent, hydrated } = useCookieConsent();
  const analyticsGranted = hydrated && consent?.analytics === true;

  useEffect(() => {
    if (!hydrated) return;
    (window as unknown as Record<string, boolean>)[`ga-disable-${GA_MEASUREMENT_ID}`] = !analyticsGranted;
  }, [hydrated, analyticsGranted]);

  if (!analyticsGranted) return null;

  return <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />;
}
