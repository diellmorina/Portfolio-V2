import { useRef, useState } from "react";
import { ArrowUpRight, Github, X } from "lucide-react";
import type { Project } from "@/data/portfolio";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

function useTilt(strength = 6) {
  const ref = useRef<HTMLDivElement | null>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.setProperty("--rx", `${(-py * strength).toFixed(2)}deg`);
    el.style.setProperty("--ry", `${(px * strength).toFixed(2)}deg`);
    el.style.setProperty("--px", `${(px * 12).toFixed(2)}px`);
    el.style.setProperty("--py", `${(py * 12).toFixed(2)}px`);
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
    el.style.setProperty("--px", "0px");
    el.style.setProperty("--py", "0px");
  };

  return { ref, onMove, onLeave };
}

export function ProjectCard({
  project,
  index,
  featured = false,
}: {
  project: Project;
  index: number;
  featured?: boolean;
}) {
  const { ref, onMove, onLeave } = useTilt(featured ? 4 : 6);
  const [open, setOpen] = useState(false);

  return (
    <>
      <article
        data-reveal
        data-cursor="view"
        className="reveal group"
        style={{ "--reveal-delay": `${Math.min(index, 5) * 90}ms` } as React.CSSProperties}
      >
        <div
          ref={ref}
          onMouseMove={onMove}
          onMouseLeave={onLeave}
          className={`card-glow relative overflow-hidden rounded-3xl border border-border bg-card/70 backdrop-blur-sm ${
            featured ? "lg:grid lg:grid-cols-[1.15fr_1fr]" : ""
          }`}
          style={{
            transform: "perspective(1100px) rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg))",
            transformStyle: "preserve-3d",
            transition: "transform 500ms var(--ease-out-soft), box-shadow 400ms var(--ease-out-soft), border-color 400ms",
          }}
        >
          {/* preview */}
          <div className={`relative overflow-hidden ${featured ? "aspect-[16/10] lg:aspect-auto lg:h-full" : "aspect-[16/10]"}`}>
            <img
              src={project.image}
              alt={`${project.title} website preview`}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.06]"
              style={{ transform: "translate3d(var(--px, 0px), var(--py, 0px), 0)" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/25 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />
            <div
              className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                background:
                  "radial-gradient(60% 60% at 50% 100%, color-mix(in oklab, var(--primary) 18%, transparent), transparent 70%)",
              }}
            />
            <span className="absolute left-5 top-5 rounded-full border border-border bg-background/70 px-3 py-1 font-mono text-xs text-muted-foreground backdrop-blur-sm">
              {project.tag}
            </span>
            <span className="absolute right-5 top-4 font-display text-4xl font-bold text-foreground/15 transition-colors duration-500 group-hover:text-primary/35">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          {/* body */}
          <div className={`relative flex flex-col gap-4 p-6 sm:p-7 ${featured ? "lg:justify-center lg:p-10" : ""}`}>
            {featured && (
              <span className="w-fit rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-primary">
                Featured project
              </span>
            )}
            <h3
              className={`font-display font-semibold tracking-tight ${featured ? "text-3xl sm:text-4xl" : "text-xl"}`}
            >
              {project.title}
            </h3>
            <p className={`text-sm leading-relaxed text-muted-foreground ${featured ? "sm:text-base" : "line-clamp-3"}`}>
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.languages.map((lang, i) => (
                <span
                  key={lang}
                  className="rounded-lg border border-border bg-surface-2/60 px-2.5 py-1 font-mono text-[11px] text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-primary/30 group-hover:text-primary"
                  style={{ transitionDelay: `${i * 40}ms` }}
                >
                  {lang}
                </span>
              ))}
            </div>

            <div className="mt-1 flex flex-wrap items-center gap-2">
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="group/btn inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-20px_oklch(0.878_0.165_158_/_0.9)]"
              >
                Live Demo
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                />
              </a>
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/40 px-5 py-2.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
                aria-label={`Open details for ${project.title}`}
              >
                Details
              </button>
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/40 px-5 py-2.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
                >
                  <Github size={16} />
                  Code
                </a>
              )}
            </div>
          </div>
        </div>
      </article>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-2xl border border-border bg-background/95 p-0 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)] sm:rounded-[1.75rem]">
          <div className="max-h-[85vh] overflow-y-auto">
            <div className="border-b border-border p-6 sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-primary">
                    {project.tag}
                  </span>
                  <DialogTitle className="mt-4 text-3xl font-semibold tracking-tight text-foreground">
                    {project.title}
                  </DialogTitle>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="grid h-10 w-10 place-items-center rounded-full border border-border bg-surface/40 text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                  aria-label="Close project details"
                >
                  <X size={16} />
                </button>
              </div>
              <DialogDescription className="mt-4 max-w-lg text-sm leading-7 text-muted-foreground">
                {project.description}
              </DialogDescription>
            </div>

            <div className="space-y-6 p-6 sm:p-8">
              <section>
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-primary">Overview</p>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{project.description}</p>
              </section>

              <section>
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-primary">Technologies</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.languages.map((lang) => (
                    <span
                      key={lang}
                      className="rounded-lg border border-border bg-surface/40 px-2.5 py-1.5 font-mono text-[11px] text-muted-foreground"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </section>

              <div className="flex flex-wrap items-center gap-2 border-t border-border pt-6">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5"
                >
                  Live Demo
                  <ArrowUpRight size={16} />
                </a>
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/40 px-5 py-2.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
                  >
                    <Github size={16} />
                    Repository
                  </a>
                )}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
