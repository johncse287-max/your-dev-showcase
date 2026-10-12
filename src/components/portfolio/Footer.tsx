import { ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Imtiaz Rafsan. Built with React &amp;
          Tailwind CSS.
        </p>
        <a
          href="#home"
          className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm transition-colors hover:bg-accent"
          aria-label="Back to top"
        >
          <ArrowUp size={16} /> Back to top
        </a>
      </div>
    </footer>
  );
}
