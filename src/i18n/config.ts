export const locales = ["en", "sk", "de"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";
export const localeCookieName = "NEXT_LOCALE";

export const localeMeta: Record<Locale, { label: string; flag: string }> = {
  en: { label: "English", flag: "🇬🇧" },
  sk: { label: "Slovenčina", flag: "🇸🇰" },
  de: { label: "Deutsch", flag: "🇩🇪" },
};
