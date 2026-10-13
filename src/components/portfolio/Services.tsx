import { ArrowRight, Code2, Megaphone, MousePointer2, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "./SectionHeading";

const services = [
  { icon: Code2, title: "Website Design & Development", description: "Responsive websites with clear layouts, maintainable code, and ongoing website maintenance.", detail: "Design · Development · Maintenance", accent: "text-primary" },
  { icon: Search, title: "SEO", description: "On-page optimization, keyword research, and technical fundamentals that support discoverability and website performance.", detail: "Search visibility · Site health", accent: "text-marketing-teal" },
  { icon: Megaphone, title: "Social Media Marketing", description: "Content planning, audience engagement, and campaign support for Facebook, Instagram, and LinkedIn.", detail: "Content · Community · Campaigns", accent: "text-violet-accent" },
  { icon: MousePointer2, title: "Google Ads Management", description: "Search and Shopping campaign support, optimization, conversion tracking, and reporting aligned with your goals.", detail: "Search · Shopping · Measurement", accent: "text-marketing-amber" },
];

export function Services() {
  return (
    <section id="services" aria-labelledby="services-heading" className="section-pad">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading id="services-heading" eyebrow="// services" title="Web & Marketing Services" description="Practical support for your website and digital presence, with scope tailored to your business needs." />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article key={service.title} className="capability-card flex flex-col rounded-lg border border-border bg-card p-6">
              <service.icon size={26} aria-hidden="true" className={service.accent} />
              <h3 className="mt-5 text-lg font-semibold">{service.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
              <p className="mt-6 border-t border-border pt-4 text-xs leading-relaxed text-muted-foreground">{service.detail}</p>
              <Button asChild variant="link" className="mt-3 min-h-11 justify-start self-start px-0">
                <a href="#contact" aria-label={`Discuss ${service.title}`}>
                  Let’s discuss <ArrowRight aria-hidden="true" />
                </a>
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}