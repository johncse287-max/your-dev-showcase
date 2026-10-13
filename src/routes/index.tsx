import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { DigitalMarketing } from "@/components/portfolio/DigitalMarketing";
import { Services } from "@/components/portfolio/Services";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Imtiaz Rafsan | Web Development & Digital Marketing" },
      {
        name: "description",
        content:
          "Explore Imtiaz Rafsan’s portfolio for website design and development, SEO, social media marketing, Google Ads, and analytics, with verified work and clearly labeled demos.",
      },
      { property: "og:title", content: "Imtiaz Rafsan | Web Development & Digital Marketing" },
      {
        property: "og:description",
        content:
          "Explore Imtiaz Rafsan’s portfolio for website design and development, SEO, social media marketing, Google Ads, and analytics, with verified work and clearly labeled demos.",
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
        <DigitalMarketing />
        <Services />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
