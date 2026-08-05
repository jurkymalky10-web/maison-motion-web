"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import PageHeader from "@/components/PageHeader";
import RevealOnScroll from "@/components/RevealOnScroll";
import { siteConfig } from "@/lib/site";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialForm: FormState = { name: "", email: "", subject: "", message: "" };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactContent() {
  const t = useTranslations("contact");
  const tf = useTranslations("contact.form");

  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (field: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
  };

  const validate = () => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) next.name = tf("required");
    if (!form.email.trim()) next.email = tf("required");
    else if (!EMAIL_RE.test(form.email.trim())) next.email = tf("invalidEmail");
    if (!form.message.trim()) next.message = tf("required");
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("success");
      setForm(initialForm);
    } catch {
      setStatus("error");
    }
  };

  const inputClass = (hasError: boolean) =>
    `w-full border bg-transparent px-4 py-3 text-sm text-foreground placeholder:text-foreground/30 outline-none transition-colors ${
      hasError ? "border-red-400/60" : "border-hairline focus:border-bronze"
    }`;

  return (
    <>
      <PageHeader
        eyebrow={t("pageHeader.eyebrow")}
        title={t("pageHeader.title")}
        subtitle={t("pageHeader.subtitle")}
      />

      <section className="relative bg-black py-28 md:py-36">
        <div className="container-lux flex flex-col items-center">
          <RevealOnScroll className="mx-auto w-full max-w-2xl">
            {status === "success" ? (
              <div className="border border-bronze/40 bg-bronze/[0.04] px-8 py-14 text-center">
                <p className="text-xs uppercase tracking-[0.35em] text-bronze">{tf("successTitle")}</p>
                <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-foreground/80">
                  {tf("successMessage")}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-foreground/60">
                      {tf("name")} *
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={handleChange("name")}
                      className={inputClass(!!errors.name)}
                    />
                    {errors.name && <p className="mt-2 text-xs text-red-400">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-foreground/60">
                      {tf("email")} *
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={handleChange("email")}
                      className={inputClass(!!errors.email)}
                    />
                    {errors.email && <p className="mt-2 text-xs text-red-400">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-foreground/60">
                    {tf("subject")}
                  </label>
                  <input
                    type="text"
                    value={form.subject}
                    onChange={handleChange("subject")}
                    className={inputClass(false)}
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-foreground/60">
                    {tf("message")} *
                  </label>
                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={handleChange("message")}
                    className={inputClass(!!errors.message)}
                  />
                  {errors.message && <p className="mt-2 text-xs text-red-400">{errors.message}</p>}
                </div>

                {status === "error" && (
                  <p className="text-center text-sm text-red-400">{tf("errorMessage")}</p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="mt-2 inline-flex items-center justify-center bg-bronze px-10 py-4 text-xs uppercase tracking-[0.25em] text-black transition-all duration-[400ms] ease-out hover:shadow-[0_0_24px_rgba(198,138,78,0.45)] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {status === "sending" ? tf("sending") : tf("submit")}
                </button>
              </form>
            )}
          </RevealOnScroll>

          <RevealOnScroll delay={0.15} className="mt-16 flex flex-wrap items-center justify-center gap-6">
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-sm text-foreground/70 transition-colors hover:text-bronze"
            >
              {siteConfig.email}
            </a>
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center border border-foreground/30 px-8 py-3 text-xs uppercase tracking-[0.2em] text-foreground transition-all duration-300 ease-out hover:border-bronze hover:text-bronze"
            >
              {t("visitFacebook")}
            </a>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
