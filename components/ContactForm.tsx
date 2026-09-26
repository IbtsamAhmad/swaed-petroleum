"use client";

import { useState, type FormEvent } from "react";
import Button from "./Button";

type Errors = Partial<Record<"name" | "email" | "message", string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success">("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);

  function validate(data: FormData): Errors {
    const next: Errors = {};
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (name.length < 2) next.name = "Please enter your full name.";
    if (!EMAIL_RE.test(email)) next.email = "Please enter a valid email address.";
    if (message.length < 10) next.message = "Tell us a little more about your enquiry.";

    return next;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const nextErrors = validate(data);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setSubmitting(true);
    // NOTE: no backend endpoint was supplied in source material.
    // Wire this to an API route / CRM webhook when one is available.
    await new Promise((resolve) => setTimeout(resolve, 700));
    setSubmitting(false);
    setStatus("success");
    e.currentTarget.reset();
  }

  const inputClass =
    "w-full border-b border-border bg-transparent py-3.5 text-base text-navy-950 placeholder:text-text-tertiary focus:border-navy-900 focus:outline-none transition-colors";

  if (status === "success") {
    return (
      <div className="border border-border bg-white p-10 text-center">
        <p className="eyebrow text-gold-600">Message received</p>
        <h3 className="mt-4 text-2xl font-extrabold text-navy-950">Thank you for reaching out.</h3>
        <p className="mt-3 text-sm text-text-secondary">
          A member of the SWAED team will be in touch shortly.
        </p>
        <Button className="mt-8" variant="secondary" onClick={() => setStatus("idle")}>
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-8">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-text-secondary">
            Full Name
          </label>
          <input id="name" name="name" type="text" placeholder="Your name" className={inputClass} aria-invalid={!!errors.name} />
          {errors.name && <p className="mt-2 text-xs text-red-600">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="company" className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-text-secondary">
            Company (optional)
          </label>
          <input id="company" name="company" type="text" placeholder="Organization" className={inputClass} />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-text-secondary">
            Email
          </label>
          <input id="email" name="email" type="email" placeholder="you@company.com" className={inputClass} aria-invalid={!!errors.email} />
          {errors.email && <p className="mt-2 text-xs text-red-600">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-text-secondary">
            Phone (optional)
          </label>
          <input id="phone" name="phone" type="tel" placeholder="+90 000 000 0000" className={inputClass} />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-text-secondary">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Tell us about your project or enquiry"
          className={inputClass + " resize-none"}
          aria-invalid={!!errors.message}
        />
        {errors.message && <p className="mt-2 text-xs text-red-600">{errors.message}</p>}
      </div>

      <Button type="submit" onClick={undefined} className="bg-navy-950">
        {submitting ? "Sending…" : "Send Message"}
      </Button>
    </form>
  );
}
