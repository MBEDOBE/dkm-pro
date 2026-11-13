"use client";

import Link from "next/link";
import Script from "next/script";
import { useRef,useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";

type FormInputs = {
  fullName: string;
  phone?: string;
  email: string;
  subject: string;
  message: string;
  botcheck?: boolean;
};

const fieldClass =
  "mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 placeholder:text-slate-400 focus-visible:border-orange-600 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-orange-600";
const labelClass = "block text-sm font-semibold text-slate-800";

// Web3Forms supports browser-side submissions from a static Next.js export.
// This is a public form access key, not a secret server API token.
const web3FormsAccessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

export default function ContactContent() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormInputs>();
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const formRef = useRef<HTMLFormElement>(null);
  const [captchaError, setCaptchaError] = useState("");

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    // The hidden checkbox is a simple extra spam check supported by Web3Forms.
    if (data.botcheck) return;
    setStatus("idle");
    setErrorMessage("");

    if (!web3FormsAccessKey) {
      setErrorMessage("The contact form is not configured yet. Please try again later.");
      setStatus("error");
      return;
    }

    const captchaToken = formRef.current?.querySelector<HTMLTextAreaElement>(
      'textarea[name="h-captcha-response"]',
    )?.value;

    if (!captchaToken) {
      setCaptchaError("Please confirm you're human before sending.");
      return;
    }

    setCaptchaError("");

    try {
      const payload = new FormData();
      payload.append("access_key", web3FormsAccessKey);
      payload.append("h-captcha-response", captchaToken);
      payload.append("name", data.fullName.trim());
      payload.append("email", data.email.trim());
      payload.append("subject", data.subject.trim());
      payload.append("message", data.message.trim());
      if (data.phone?.trim()) payload.append("phone", data.phone.trim());

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: payload,
      });
      const result: { success?: boolean; message?: string } =
        await response.json();
      if (!response.ok || result.success !== true) {
        throw new Error(result.message || "Submission was not accepted.");
      }

      reset();
      setStatus("success");
    } catch (error) {
      // Don't include entered contact details in logs or the error shown to visitors.
      console.error("Contact form submission failed", error);
      setErrorMessage(
        "Your message could not be sent. Please try again shortly.",
      );
      setStatus("error");
    } finally {
      const captchaWindow = window as Window & {
        hcaptcha?: { reset: () => void };
      };

      captchaWindow.hcaptcha?.reset();
    }
  };

  return (
    <>
      <section
        aria-labelledby="contact-heading"
        className="bg-[#f8fafc] pt-8 pb-16 sm:pt-10 sm:pb-20 lg:pt-12 lg:pb-24"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.19em] text-orange-700">
              Contact
            </p>
            <h1
              id="contact-heading"
              className="mt-4 text-[clamp(2.5rem,5vw,4.25rem)] font-semibold leading-[1.12] tracking-[-0.04em] text-slate-900"
            >
              Let&apos;s talk about{" "}
              <span className="text-orange-600">your website.</span>
            </h1>
            <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
              Have a landing page, small business website, or website
              improvement in mind? Send a few details and we can discuss a
              focused plan for your project.
            </p>
          </div>

          <div className="mt-12 grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
            <aside
              aria-labelledby="good-fit-heading"
              className="rounded-2xl border border-slate-200 bg-white p-7 sm:p-8"
            >
              <h2
                id="good-fit-heading"
                className="text-2xl font-semibold text-slate-900"
              >
                Good projects to reach out about
              </h2>
              <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-700">
                {[
                  "A landing page or simple website",
                  "A small multi-page business website",
                  "A mobile-friendly redesign or layout fix",
                  "A focused React or Next.js UI task",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="mt-2 h-2 w-2 shrink-0 rounded-full bg-orange-600"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 border-t border-slate-200 pt-7">
                <h3 className="text-base font-semibold text-slate-900">
                  What to include
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  A brief description of your goal, any existing website link,
                  and the changes or pages you need. We can clarify the details
                  together.
                </p>
              </div>
              <Link
                href="/portfolio"
                className="mt-7 inline-flex rounded-sm text-sm font-semibold text-orange-700 underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-700"
              >
                View previous projects{" "}
                <span className="ml-2" aria-hidden="true">
                  →
                </span>
              </Link>
            </aside>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                Tell me about your project
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Fields marked * are required.
              </p>

              <div aria-live="polite" aria-atomic="true" className="mt-5">
                {status === "success" && (
                  <div
                    role="status"
                    className="rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm leading-6 text-emerald-900"
                  >
                    <strong>Thanks for reaching out!</strong> Your message has
                    been sent successfully. I&apos;ll review your project
                    details and get back to you by email.
                  </div>
                )}
                {status === "error" && (
                  <div
                    role="alert"
                    className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm leading-6 text-red-900"
                  >
                    <strong>Message not sent.</strong> {errorMessage}
                  </div>
                )}
              </div>

              <form
                ref={formRef}
                className="mt-6 space-y-5"
                onSubmit={handleSubmit(onSubmit)}
                noValidate
              >
                {/* Hidden botcheck checkbox supported by Web3Forms. */}
                <div className="hidden" aria-hidden="true">
                  <input
                    type="checkbox"
                    tabIndex={-1}
                    autoComplete="off"
                    {...register("botcheck")}
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="fullName" className={labelClass}>
                      Full name *
                    </label>
                    <input
                      id="fullName"
                      autoComplete="name"
                      placeholder="Your name"
                      className={fieldClass}
                      aria-invalid={Boolean(errors.fullName)}
                      aria-describedby={
                        errors.fullName ? "fullName-error" : undefined
                      }
                      {...register("fullName", {
                        required: "Please enter your name.",
                      })}
                    />
                    {errors.fullName && (
                      <p
                        id="fullName-error"
                        role="alert"
                        className="mt-2 text-sm text-red-700"
                      >
                        {errors.fullName.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="phone" className={labelClass}>
                      Phone{" "}
                      <span className="font-normal text-slate-500">
                        (optional)
                      </span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="Your phone number"
                      className={fieldClass}
                      aria-invalid={Boolean(errors.phone)}
                      aria-describedby={
                        errors.phone ? "phone-error" : undefined
                      }
                      {...register("phone", {
                        validate: (value) =>
                          !value ||
                          /^[+()\d\s.\-]{7,25}$/.test(value) ||
                          "Please enter a valid phone number.",
                      })}
                    />
                    {errors.phone && (
                      <p
                        id="phone-error"
                        role="alert"
                        className="mt-2 text-sm text-red-700"
                      >
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="email" className={labelClass}>
                      Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      className={fieldClass}
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={
                        errors.email ? "email-error" : undefined
                      }
                      {...register("email", {
                        required: "Please enter your email address.",
                        pattern: {
                          value: /^\S+@\S+\.\S+$/,
                          message: "Please enter a valid email address.",
                        },
                      })}
                    />
                    {errors.email && (
                      <p
                        id="email-error"
                        role="alert"
                        className="mt-2 text-sm text-red-700"
                      >
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="subject" className={labelClass}>
                      Project subject *
                    </label>
                    <input
                      id="subject"
                      placeholder="e.g. A new landing page"
                      className={fieldClass}
                      aria-invalid={Boolean(errors.subject)}
                      aria-describedby={
                        errors.subject ? "subject-error" : undefined
                      }
                      {...register("subject", {
                        required: "Please add a short subject.",
                      })}
                    />
                    {errors.subject && (
                      <p
                        id="subject-error"
                        role="alert"
                        className="mt-2 text-sm text-red-700"
                      >
                        {errors.subject.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className={labelClass}>
                    Project details *
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    placeholder="Tell me what you want to build or improve..."
                    className={`${fieldClass} resize-y`}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={
                      errors.message
                        ? "message-error message-help"
                        : "message-help"
                    }
                    {...register("message", {
                      required: "Please describe your project.",
                    })}
                  />
                  <p
                    id="message-help"
                    className="mt-2 text-xs leading-5 text-slate-500"
                  >
                    A short description is enough to get started.
                  </p>
                  {errors.message && (
                    <p
                      id="message-error"
                      role="alert"
                      className="mt-2 text-sm text-red-700"
                    >
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <div>
                  <div className="h-captcha" data-captcha="true" />

                  {captchaError && (
                    <p role="alert" className="mt-2 text-sm text-red-700">
                      {captchaError}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-orange-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-700 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? "Sending your message…" : "Send message"}
                </button>
              </form>

              <Script
                src="https://web3forms.com/client/script.js"
                strategy="afterInteractive"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
