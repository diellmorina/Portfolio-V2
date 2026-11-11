import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Stats } from "@/components/Stats";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { SiteBackground } from "@/components/SiteBackground";
import { CustomCursor } from "@/components/CustomCursor";
import { ScrollProgress, TechnologyMarquee } from "@/components/PortfolioMotion";

const title = "Diell Morina — Front-End Developer";
const description =
  "Front-End Developer from Kosovo building polished, high-performance, accessible web experiences with HTML, CSS, JavaScript and React.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "index, follow" },
      { name: "author", content: "Diell Morina" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.diellmorina.dev/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "https://www.diellmorina.dev/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <SiteBackground />
      <CustomCursor />
      <Navbar />
      <ScrollProgress />
      <main>
        <Hero />
        <TechnologyMarquee />
        <About />
        <Stats />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
