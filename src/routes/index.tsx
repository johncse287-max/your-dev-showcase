import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Imtiaz Rafsan | Full Stack Web Developer" },
      {
        name: "description",
        content:
          "Explore the portfolio of Imtiaz Rafsan, a Computer Science graduate focused on web development, responsive design, website maintenance, and technical problem-solving.",
      },
      { property: "og:title", content: "Imtiaz Rafsan | Full Stack Web Developer" },
      {
        property: "og:description",
        content:
          "Explore the portfolio of Imtiaz Rafsan, a Computer Science graduate focused on web development, responsive design, website maintenance, and technical problem-solving.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Index() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
