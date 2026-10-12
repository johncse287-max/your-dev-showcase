import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Check, Mail } from "lucide-react";

export const Route = createFileRoute("/demo/business-website")({
  component: DemoBusiness,
  head: () => ({
    meta: [
      { title: "Demo: Responsive Business Website — Imtiaz Rafsan" },
      {
        name: "description",
        content:
          "A demonstration business website built by Imtiaz Rafsan to showcase responsive design patterns. Demo project, not a real client site.",
      },
      { property: "og:title", content: "Demo: Responsive Business Website — Imtiaz Rafsan" },
      { property: "og:type", content: "website" },
      { name: "robots", content: "noindex" },
    ],
  }),
});

const services = [
  { title: "Consulting", text: "Sample service description for this demonstration layout." },
  { title: "Support", text: "Sample service description for this demonstration layout." },
  { title: "Solutions", text: "Sample service description for this demonstration layout." },
];

function DemoBusiness() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <header className="border-b border-border">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
          <span className="font-display text-lg font-bold">
            Demo<span className="text-gradient">Biz</span>
          </span>
          <span className="rounded-full bg-violet-accent/15 px-3 py-1 text-xs font-medium text-violet-accent">
            Demo project
          </span>
        </div>
      </header>
      <main>
        <section className="mx-auto max-w-5xl px-4 py-20 text-center sm:px-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            A clean, responsive <span className="text-gradient">business website</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            This is a demonstration page built to showcase responsive layout,
            clear hierarchy, and a simple contact UI. It is not a real client
            project.
          </p>
          <a
            href="#demo-services"
            className="mt-8 inline-flex min-h-11 items-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
          >
            Explore Services
          </a>
        </section>

        <section id="demo-services" className="bg-surface py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <h2 className="text-2xl font-bold">Services</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {services.map((s) => (
                <div key={s.title} className="rounded-xl border border-border bg-card p-6">
                  <Check size={20} className="text-primary" />
                  <h3 className="mt-3 font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
          <h2 className="text-2xl font-bold">About</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            This section demonstrates an about block with readable measure and
            comfortable spacing — the same patterns used on production sites.
          </p>
        </section>

        <section className="bg-surface py-16">
          <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
            <h2 className="text-2xl font-bold">Contact</h2>
            <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
              A contact call-to-action like this would connect to a real form or
              email on a production site.
            </p>
            <span className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm text-muted-foreground">
              <Mail size={16} /> Demo only — no form attached
            </span>
          </div>
        </section>
      </main>
      <footer className="border-t border-border py-8">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <Link
            to="/"
            className="inline-flex min-h-11 items-center gap-2 text-sm text-primary underline-offset-4 hover:underline"
          >
            <ArrowLeft size={16} /> Back to portfolio
          </Link>
        </div>
      </footer>
    </div>
  );
}
