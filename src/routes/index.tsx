import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Stats } from "@/components/Stats";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { SiteBackground } from "@/components/SiteBackground";
import { CustomCursor } from "@/components/CustomCursor";

const title = "Diell Morina — Front-End Developer";
const description =
  "Front-End Developer from Kosovo building polished, high-performance, accessible web experiences with HTML, CSS, JavaScript and React.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <SiteBackground />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stats />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
