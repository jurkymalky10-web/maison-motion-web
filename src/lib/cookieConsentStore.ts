import { readStoredConsent, writeStoredConsent, type ConsentPreferences, type StoredConsent } from "./cookieConsent";

type Listener = () => void;

let currentConsent: StoredConsent | null | undefined = undefined;
const listeners = new Set<Listener>();

function emit() {
  listeners.forEach((listener) => listener());
}

export function subscribeConsent(listener: Listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function getConsentSnapshot(): StoredConsent | null {
  if (currentConsent === undefined) {
    currentConsent = readStoredConsent();
  }
  return currentConsent;
}

export function getServerConsentSnapshot(): StoredConsent | null {
  return null;
}

export function setConsentPreferences(preferences: ConsentPreferences): StoredConsent {
  const stored = writeStoredConsent(preferences);
  currentConsent = stored;
  emit();
  return stored;
}
