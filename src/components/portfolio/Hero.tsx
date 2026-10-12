import { ArrowRight, Mail, Terminal } from "lucide-react";

const codeLines = [
  { text: "const developer = {", cls: "text-muted-foreground" },
  { text: '  name: "Imtiaz Rafsan",', cls: "text-foreground" },
  { text: '  role: "Full Stack Web Developer",', cls: "text-foreground" },
  { text: '  focus: ["frontend", "design",', cls: "text-foreground" },
  { text: '          "troubleshooting"],', cls: "text-foreground" },
  { text: '  location: "Bangladesh",', cls: "text-foreground" },
  { text: "  remote: true,", cls: "text-primary" },
  { text: "};", cls: "text-muted-foreground" },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-dvh items-center overflow-hidden pt-16"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 70% 20%, color-mix(in oklab, var(--primary) 18%, transparent), transparent), radial-gradient(40% 40% at 15% 80%, color-mix(in oklab, var(--violet-accent) 12%, transparent), transparent)",
        }}
      />
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2">
        <div className="animate-fade-up">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-medium text-secondary-foreground">
            <span className="inline-block size-2 rounded-full bg-primary" />
            Available for remote opportunities
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Imtiaz <span className="text-gradient">Rafsan</span>
          </h1>
          <p className="mt-4 text-lg font-medium text-muted-foreground sm:text-xl">
            Full Stack Web Developer | Web Designer
          </p>
          <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
            I build responsive, user-friendly web experiences and enjoy solving
            technical problems. My interests include modern frontend
            development, website maintenance, backend fundamentals, and
            creating practical solutions for real-world needs.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 glow-ring"
            >
              View My Projects <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 text-sm font-semibold transition-colors hover:bg-accent"
            >
              <Mail size={16} /> Contact Me
            </a>
          </div>
        </div>

        <div className="animate-float-slow hidden lg:block" aria-hidden="true">
          <div className="card-glass glow-ring rounded-2xl p-1">
            <div className="flex items-center gap-2 border-b border-border px-4 py-3">
              <span className="size-3 rounded-full bg-destructive/70" />
              <span className="size-3 rounded-full bg-primary/70" />
              <span className="size-3 rounded-full bg-violet-accent/70" />
              <span className="ml-2 flex items-center gap-1.5 text-xs text-muted-foreground">
                <Terminal size={12} /> developer.ts
              </span>
            </div>
            <pre className="overflow-x-auto p-5 font-mono text-sm leading-7">
              {codeLines.map((l, i) => (
                <div key={i} className={l.cls}>
                  {l.text}
                </div>
              ))}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
