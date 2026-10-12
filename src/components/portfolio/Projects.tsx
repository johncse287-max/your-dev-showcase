import { ExternalLink, Globe, LayoutDashboard, MonitorSmartphone } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SectionHeading } from "./SectionHeading";

const projects = [
  {
    icon: Globe,
    title: "MONTECH Global Services",
    badge: "Live client website",
    badgeClass: "bg-primary/15 text-primary",
    description:
      "A website for a Bangladesh-based BPO and call center services business. Built with a responsive layout, clear service presentation, a consultation request workflow, and deployed to production.",
    tags: ["Web Design", "Responsive Layout", "Deployment", "Maintenance"],
    live: "https://montechglobalservices.com",
    demo: null as string | null,
  },
  {
    icon: MonitorSmartphone,
    title: "Responsive Business Website",
    badge: "Demo project",
    badgeClass: "bg-violet-accent/15 text-violet-accent",
    description:
      "A demonstration business website with a landing page, services, about section, and contact UI — built to showcase responsive design patterns. This is a demo, not a real client project.",
    tags: ["React", "Tailwind CSS", "Responsive Design"],
    live: null,
    demo: "/demo/business-website",
  },
  {
    icon: LayoutDashboard,
    title: "Developer Dashboard UI",
    badge: "Demo project",
    badgeClass: "bg-violet-accent/15 text-violet-accent",
    description:
      "A demonstration dashboard interface with responsive cards, data tables, and a clean layout. All data shown is sample data — this is a UI demo, not a real product.",
    tags: ["React", "TypeScript", "Data Tables", "UI Design"],
    live: null,
    demo: "/demo/developer-dashboard",
  },
];

export function Projects() {
  return (
    <section id="projects" className="section-pad">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="// projects"
          title="Featured Projects"
          description="Real work and clearly labeled demonstrations of what I can build."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.title}
              className="flex flex-col rounded-xl border border-border bg-card p-6 transition-transform hover:-translate-y-1"
            >
              <div className="flex items-center justify-between">
                <p.icon size={26} className="text-primary" />
                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${p.badgeClass}`}
                >
                  {p.badge}
                </span>
              </div>
              <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {p.description}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <li
                    key={t}
                    className="rounded-full bg-secondary px-2.5 py-0.5 text-xs text-secondary-foreground"
                  >
                    {t}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex gap-3">
                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    Live Website <ExternalLink size={14} />
                  </a>
                )}
                {p.demo && (
                  <Link
                    to={p.demo}
                    className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-semibold transition-colors hover:bg-accent"
                  >
                    View Demo <ExternalLink size={14} />
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
