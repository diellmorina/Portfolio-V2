import { useRevealGroup } from "@/hooks/use-reveal";
import { projects } from "@/data/portfolio";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  const ref = useRevealGroup<HTMLDivElement>();
  const [featured, ...rest] = projects;

  return (
    <section id="projects" className="relative py-24 sm:py-32" ref={ref}>
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="reveal max-w-2xl" data-reveal>
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-primary">Selected Work</p>
          <h2 className="mt-4 text-4xl sm:text-5xl">Featured Projects</h2>
          <p className="mt-4 text-muted-foreground">
            Real client work and personal builds — responsive web apps, business sites, and
            interactive portfolios.
          </p>
        </div>

        <div className="mt-14 space-y-8">
          {featured && <ProjectCard project={featured} index={0} featured />}

          <div className="grid gap-8 sm:grid-cols-2">
            {rest.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i + 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
