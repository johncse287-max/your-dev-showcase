import { Code2, Database, Server, Wrench } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const categories = [
  {
    icon: Code2,
    title: "Frontend",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Bootstrap",
      "Responsive Web Design",
      "Vue.js",
      "React (learning / project use)",
    ],
  },
  {
    icon: Server,
    title: "Backend & Programming",
    skills: ["Python", "C++", "API integration", "Backend fundamentals"],
  },
  {
    icon: Database,
    title: "Databases",
    skills: ["MySQL", "MongoDB"],
  },
  {
    icon: Wrench,
    title: "Tools & Workflow",
    skills: ["Git", "GitHub", "Browser DevTools", "Technical debugging"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="section-pad bg-surface">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="// skills"
          title="Skills & Technologies"
          description="Technologies I work with or am actively learning — grouped by area, with no exaggerated ratings."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="rounded-xl border border-border bg-card p-6 transition-transform hover:-translate-y-1"
            >
              <cat.icon size={22} className="text-primary" />
              <h3 className="mt-3 font-semibold">{cat.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <li
                    key={s}
                    className="rounded-full border border-border bg-secondary px-3 py-1 text-xs text-secondary-foreground"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
