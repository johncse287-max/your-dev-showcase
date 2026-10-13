import { GraduationCap, HeartHandshake } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const interests = [
  "Full stack web development",
  "Responsive web design",
  "Website maintenance",
  "SEO-friendly development & digital marketing",
  "Debugging & technical troubleshooting",
  "Learning new technologies",
  "Remote collaboration with international teams",
];

export function About() {
  return (
    <section id="about" className="section-pad">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="// about me" title="About Me" />
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <p className="leading-relaxed text-muted-foreground">
              I'm Imtiaz Rafsan, a Computer Science graduate from Bangladesh
              focused on building clean, responsive, and practical web
              experiences. I completed my BSc in Computer Science &amp;
              Technology at Chongqing University of Science &amp; Technology in
              2022, and I've been developing my craft in web design, frontend
              development, and technical problem-solving ever since. My focus
              also includes digital marketing — connecting website quality with
              search visibility, content, and measurement.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              I enjoy the full lifecycle of a website — from designing
              interfaces and writing maintainable code, to deploying,
              maintaining, and debugging sites so they keep running smoothly.
              I'm currently deepening my skills in modern frameworks like React
              and looking for remote opportunities with international teams
              where I can contribute, learn, and grow.
            </p>
            <div className="mt-8 flex items-start gap-4 rounded-xl border border-border bg-card p-5">
              <GraduationCap className="mt-1 shrink-0 text-primary" size={24} />
              <div>
                <h3 className="font-semibold">
                  BSc in Computer Science &amp; Technology
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Chongqing University of Science &amp; Technology, China
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Completed: 2022
                </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="flex items-center gap-2 font-semibold">
                <HeartHandshake size={18} className="text-primary" />
                What I care about
              </h3>
              <ul className="mt-4 space-y-3">
                {interests.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-muted-foreground"
                  >
                    <span className="mt-1.5 inline-block size-1.5 shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
