export type ConsentPreferences = {
  analytics: boolean;
};

export type StoredConsent = ConsentPreferences & {
  necessary: true;
  version: number;
  timestamp: string;
};

const STORAGE_KEY = "mms-cookie-consent";
const CONSENT_VERSION = 1;

export function readStoredConsent(): StoredConsent | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<StoredConsent>;
    if (parsed.version !== CONSENT_VERSION || typeof parsed.analytics !== "boolean") {
      return null;
    }
    return {
      necessary: true,
      analytics: parsed.analytics,
      version: CONSENT_VERSION,
      timestamp: parsed.timestamp ?? new Date().toISOString(),
    };
  } catch {
    return null;
  }
}

export function writeStoredConsent(preferences: ConsentPreferences): StoredConsent {
  const consent: StoredConsent = {
    necessary: true,
    analytics: preferences.analytics,
    version: CONSENT_VERSION,
    timestamp: new Date().toISOString(),
  };
  if (typeof window !== "undefined") {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
    } catch {
      // localStorage unavailable (private browsing, storage disabled) — consent still applies in-memory for this session
    }
  }
  return consent;
}
