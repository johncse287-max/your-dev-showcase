import { useState, type FormEvent } from "react";
import { Mail, MessageCircle, Phone, Send } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const EMAIL = "info@montechglobalservices.com";
const PHONE = "+8801576768207";
const WHATSAPP_URL = "https://wa.me/8801576768207";

type Errors = { name?: string; email?: string; subject?: string; message?: string };

export function Contact() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "ready">("idle");

  function validate(data: FormData): Errors {
    const e: Errors = {};
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const subject = String(data.get("subject") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    if (!name) e.name = "Please enter your name.";
    else if (name.length > 100) e.name = "Name must be under 100 characters.";
    if (!email) e.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      e.email = "Please enter a valid email address.";
    if (!subject) e.subject = "Please enter a subject.";
    else if (subject.length > 150) e.subject = "Subject must be under 150 characters.";
    if (!message) e.message = "Please enter a message.";
    else if (message.length > 2000) e.message = "Message must be under 2000 characters.";
    return e;
  }

  function onSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const form = ev.currentTarget;
    const data = new FormData(form);
    const e = validate(data);
    setErrors(e);
    if (Object.keys(e).length > 0) {
      setStatus("idle");
      return;
    }
    const subject = encodeURIComponent(String(data.get("subject")).trim());
    const body = encodeURIComponent(
      `Name: ${String(data.get("name")).trim()}\nEmail: ${String(data.get("email")).trim()}\n\n${String(data.get("message")).trim()}`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setStatus("ready");
  }

  const inputCls =
    "w-full rounded-lg border border-input bg-card px-4 py-3 text-sm placeholder:text-muted-foreground focus-visible:outline-2 focus-visible:outline-ring";

  return (
    <section id="contact" className="section-pad">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="// contact"
          title="Get In Touch"
          description="Interested in working together or have a question? Send me a message — I usually reply via email."
        />
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="rounded-xl border border-border bg-card p-6">
              <ul className="space-y-5 text-sm">
                <li>
                  <h3 className="flex items-center gap-2 font-semibold">
                    <Mail size={18} className="text-primary" /> Email
                  </h3>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="mt-1.5 block break-all text-primary underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                  >
                    {EMAIL}
                  </a>
                </li>
                <li>
                  <h3 className="flex items-center gap-2 font-semibold">
                    <Phone size={18} className="text-primary" /> Phone
                  </h3>
                  <a
                    href={`tel:${PHONE.replace(/[^\d+]/g, "")}`}
                    className="mt-1.5 block text-primary underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                  >
                    {PHONE}
                  </a>
                </li>
                <li>
                  <h3 className="flex items-center gap-2 font-semibold">
                    <MessageCircle size={18} className="text-primary" /> WhatsApp
                  </h3>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1.5 block break-all text-primary underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                  >
                    wa.me/8801576768207
                  </a>
                </li>
              </ul>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                >
                  <Mail size={16} /> Email Me
                </a>
                <a
                  href={`tel:${PHONE.replace(/[^\d+]/g, "")}`}
                  className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-semibold transition-colors hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                >
                  <Phone size={16} /> Call
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-semibold transition-colors hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                >
                  <MessageCircle size={16} /> WhatsApp
                </a>
              </div>

              <p className="mt-7 text-sm leading-relaxed text-muted-foreground">
                This form opens your email app with the message pre-filled, so
                nothing is sent without you seeing it first. A direct
                server-side form can be added later.
              </p>
            </div>
          </div>
          <form onSubmit={onSubmit} noValidate className="lg:col-span-3">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium">
                  Name
                </label>
                <input id="contact-name" name="name" type="text" maxLength={100} className={inputCls} aria-invalid={!!errors.name} aria-describedby={errors.name ? "err-name" : undefined} />
                {errors.name && <p id="err-name" className="mt-1 text-xs text-destructive">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium">
                  Email
                </label>
                <input id="contact-email" name="email" type="email" maxLength={255} className={inputCls} aria-invalid={!!errors.email} aria-describedby={errors.email ? "err-email" : undefined} />
                {errors.email && <p id="err-email" className="mt-1 text-xs text-destructive">{errors.email}</p>}
              </div>
            </div>
            <div className="mt-5">
              <label htmlFor="contact-subject" className="mb-1.5 block text-sm font-medium">
                Subject
              </label>
              <input id="contact-subject" name="subject" type="text" maxLength={150} className={inputCls} aria-invalid={!!errors.subject} aria-describedby={errors.subject ? "err-subject" : undefined} />
              {errors.subject && <p id="err-subject" className="mt-1 text-xs text-destructive">{errors.subject}</p>}
            </div>
            <div className="mt-5">
              <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium">
                Message
              </label>
              <textarea id="contact-message" name="message" rows={5} maxLength={2000} className={inputCls} aria-invalid={!!errors.message} aria-describedby={errors.message ? "err-message" : undefined} />
              {errors.message && <p id="err-message" className="mt-1 text-xs text-destructive">{errors.message}</p>}
            </div>
            <button
              type="submit"
              className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              <Send size={16} /> Send Message
            </button>
            <p aria-live="polite" className="mt-3 text-sm text-muted-foreground">
              {status === "ready" &&
                "Your email app should now open with the message pre-filled. If it didn't, email me directly at the address shown."}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
