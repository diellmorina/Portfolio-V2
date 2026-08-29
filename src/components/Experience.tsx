import { useRevealGroup } from "@/hooks/use-reveal";
import { currentlyLearning, experienceFocus } from "@/data/portfolio";

export function Experience() {
  const ref = useRevealGroup<HTMLDivElement>();

  return (
    <section id="experience" className="relative py-24 sm:py-32" ref={ref}>
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div data-reveal className="reveal max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-primary">Experience</p>
          <h2 className="mt-4 text-4xl sm:text-5xl">Frontend development with a focus on clean execution.</h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          <article
            data-reveal
            className="reveal card-glow rounded-3xl border border-border bg-card/60 p-6 backdrop-blur-sm sm:p-8"
            style={{ "--reveal-delay": "90ms" } as React.CSSProperties}
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-primary">Frontend Developer</p>
                <h3 className="mt-3 text-2xl font-semibold">Independent / Freelance</h3>
              </div>
              <span className="inline-flex w-fit rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
                Web
              </span>
            </div>

            <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground">
              Building modern responsive websites and web applications with a strong focus on clean
              design, usability, and performance.
            </p>

            <div className="mt-8">
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-muted-foreground">Focus</p>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {experienceFocus.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-foreground/90">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>

          <aside
            data-reveal
            className="reveal card-glow rounded-3xl border border-border bg-card/60 p-6 backdrop-blur-sm sm:p-8"
            style={{ "--reveal-delay": "180ms" } as React.CSSProperties}
          >
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-primary">Education</p>
            <h3 className="mt-4 text-xl font-semibold">Digital School of Kosovo</h3>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">Web Development / Programming</p>
          </aside>
        </div>

        <div
          data-reveal
          className="reveal mt-10 border-t border-border pt-8"
          style={{ "--reveal-delay": "220ms" } as React.CSSProperties}
        >
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-primary">Currently learning</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {currentlyLearning.map((item) => (
              <span
                key={item}
                className="rounded-full border border-border bg-surface/40 px-3 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
