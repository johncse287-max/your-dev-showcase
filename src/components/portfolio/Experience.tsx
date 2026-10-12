import { Briefcase } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const areas = [
  {
    title: "Website Development & Maintenance",
    detail:
      "Built and maintain the MONTECH Global Services website — handling layout, content updates, deployment, and ongoing upkeep.",
  },
  {
    title: "Technical Troubleshooting",
    detail:
      "Diagnose and resolve website issues using browser DevTools and systematic debugging — from layout bugs to broken integrations.",
  },
  {
    title: "Customer Communication",
    detail:
      "Experience communicating with clients and stakeholders to understand requirements and deliver practical web solutions.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="section-pad bg-surface">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="// experience"
          title="Relevant Experience"
          description="Hands-on experience from real website work. A detailed employment history is available on request."
        />
        <ol className="relative space-y-8 border-l border-border pl-8">
          {areas.map((a) => (
            <li key={a.title} className="relative">
              <span className="absolute -left-[41px] flex size-5 items-center justify-center rounded-full border border-primary bg-background">
                <Briefcase size={10} className="text-primary" />
              </span>
              <h3 className="font-semibold">{a.title}</h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                {a.detail}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
