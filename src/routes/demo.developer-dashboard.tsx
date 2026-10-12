import { createFileRoute, Link } from "@tanstack/react-router";
import { Activity, ArrowLeft, CheckCircle2, Clock, ListTodo } from "lucide-react";

export const Route = createFileRoute("/demo/developer-dashboard")({
  component: DemoDashboard,
  head: () => ({
    meta: [
      { title: "Demo: Developer Dashboard UI — Imtiaz Rafsan" },
      {
        name: "description",
        content:
          "A demonstration dashboard interface with responsive cards and data tables, built by Imtiaz Rafsan. All data is sample data.",
      },
      { property: "og:title", content: "Demo: Developer Dashboard UI — Imtiaz Rafsan" },
      { property: "og:type", content: "website" },
      { name: "robots", content: "noindex" },
    ],
  }),
});

const stats = [
  { icon: ListTodo, label: "Open tasks", value: "12" },
  { icon: CheckCircle2, label: "Completed", value: "34" },
  { icon: Clock, label: "In review", value: "5" },
  { icon: Activity, label: "Deployments", value: "8" },
];

const rows = [
  { task: "Fix responsive nav on mobile", status: "In progress", priority: "High" },
  { task: "Update landing page copy", status: "Done", priority: "Medium" },
  { task: "Add contact form validation", status: "In review", priority: "High" },
  { task: "Optimize image assets", status: "Done", priority: "Low" },
  { task: "Set up staging deployment", status: "In progress", priority: "Medium" },
];

const statusCls: Record<string, string> = {
  Done: "bg-primary/15 text-primary",
  "In progress": "bg-violet-accent/15 text-violet-accent",
  "In review": "bg-secondary text-secondary-foreground",
};

function DemoDashboard() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <header className="border-b border-border">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <span className="font-display text-lg font-bold">
            Dev<span className="text-gradient">Dash</span>
          </span>
          <span className="rounded-full bg-violet-accent/15 px-3 py-1 text-xs font-medium text-violet-accent">
            Demo project — sample data
          </span>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <h1 className="text-3xl font-bold tracking-tight">Project Dashboard</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          A UI demonstration. All numbers and tasks below are sample data.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-xl border border-border bg-card p-5">
              <s.icon size={20} className="text-primary" />
              <p className="mt-3 text-2xl font-bold">{s.value}</p>
              <p className="text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 overflow-x-auto rounded-xl border border-border bg-card">
          <table className="w-full min-w-[560px] text-left text-sm">
            <caption className="sr-only">Sample task list</caption>
            <thead>
              <tr className="border-b border-border text-muted-foreground">
                <th scope="col" className="px-5 py-3 font-medium">Task</th>
                <th scope="col" className="px-5 py-3 font-medium">Status</th>
                <th scope="col" className="px-5 py-3 font-medium">Priority</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.task} className="border-b border-border last:border-0">
                  <td className="px-5 py-3">{r.task}</td>
                  <td className="px-5 py-3">
                    <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${statusCls[r.status]}`}>
                      {r.status}
                    </span>
                  </td>
                  <td className="px-5 py-3 text-muted-foreground">{r.priority}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Link
          to="/"
          className="mt-10 inline-flex min-h-11 items-center gap-2 text-sm text-primary underline-offset-4 hover:underline"
        >
          <ArrowLeft size={16} /> Back to portfolio
        </Link>
      </main>
    </div>
  );
}
