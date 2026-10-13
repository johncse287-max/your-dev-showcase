import { BarChart3, Megaphone, Search, Target, Check } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const capabilities = [
  {
    icon: Search,
    title: "SEO & Website Optimization",
    description: "Connect search visibility with thoughtful website structure, accessible content, and a faster browsing experience.",
    accent: "text-primary bg-primary/10",
    skills: ["On-page SEO", "Technical SEO fundamentals", "Keyword research", "Google Search Console", "Website performance", "SEO-friendly development"],
  },
  {
    icon: Megaphone,
    title: "Social Media Marketing",
    description: "Support a consistent brand presence with purposeful content planning and audience-focused communication.",
    accent: "text-violet-accent bg-violet-accent/10",
    skills: ["Facebook, Instagram & LinkedIn", "Content planning", "Audience engagement", "Campaign support"],
  },
  {
    icon: Target,
    title: "Paid Advertising",
    description: "Support search and shopping campaigns with relevant targeting, ongoing optimization, and clear reporting.",
    accent: "text-marketing-amber bg-marketing-amber/10",
    skills: ["Google Ads Search", "Google Shopping Ads", "Campaign optimization", "Conversion tracking", "Reporting"],
  },
  {
    icon: BarChart3,
    title: "Analytics",
    description: "Understand where visitors come from and how they interact with a website to inform practical improvements.",
    accent: "text-marketing-teal bg-marketing-teal/10",
    skills: ["Google Analytics 4", "Website traffic analysis", "Conversion measurement"],
  },
];

export function DigitalMarketing() {
  return (
    <section id="digital-marketing" aria-labelledby="marketing-heading" className="section-pad bg-surface">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading id="marketing-heading" eyebrow="// digital marketing" title="Digital Marketing" description="Bringing website development and digital marketing together — from search visibility to audience engagement and measurement." />
        <div className="grid gap-6 md:grid-cols-2">
          {capabilities.map((item) => (
            <article key={item.title} className="capability-card rounded-lg border border-border bg-card p-6 sm:p-8">
              <span className={`mb-5 inline-flex size-12 items-center justify-center rounded-lg ${item.accent}`}>
                <item.icon size={24} aria-hidden="true" />
              </span>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {item.skills.map((skill) => (
                  <li key={skill} className="flex items-start gap-2 text-sm text-secondary-foreground">
                    <Check size={15} aria-hidden="true" className="mt-0.5 shrink-0 text-primary" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}