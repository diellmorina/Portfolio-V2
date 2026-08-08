import { useRevealGroup } from "@/hooks/use-reveal";

const details = [
  {
    title: "Projects",
    body: "Responsive web apps, business sites, and interactive portfolios.",
  },
  {
    title: "Approach",
    body: "Clean visual hierarchy, micro-interactions, and fast load times.",
  },
  {
    title: "Focus",
    body: "Accessible layouts, mobile-first design, and polished execution.",
  },
];

const badges = ["HTML", "CSS", "Bootstrap", "JavaScript", "React", "UI/UX", "Responsive"];

export function About() {
  const ref = useRevealGroup<HTMLDivElement>();

  return (
    <section id="about" className="relative py-24 sm:py-32" ref={ref}>
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <div className="relative">
          <span
            aria-hidden
            className="animate-float-soft absolute -left-6 top-10 hidden h-24 w-24 rounded-full blur-2xl lg:block"
            style={{ background: "color-mix(in oklab, var(--primary) 20%, transparent)" }}
          />
          <p data-reveal className="reveal font-mono text-xs uppercase tracking-[0.28em] text-primary">
            About Me
          </p>
          <h2
            data-reveal
            className="reveal mt-4 text-4xl leading-[1.08] sm:text-5xl"
            style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
          >
            Design-driven development for a strong digital presence.
          </h2>
          <p
            data-reveal
            className="reveal mt-6 max-w-lg leading-relaxed text-muted-foreground"
            style={{ "--reveal-delay": "160ms" } as React.CSSProperties}
          >
            I am a Front-End Developer from Kosovo, currently studying at the Digital School of
            Kosovo. I build responsive websites using HTML, CSS, and JavaScript, and I am exploring
            React while sharpening my skills in modern UI, performance, and accessibility.
          </p>

          <div
            data-reveal
            className="reveal mt-8 flex flex-wrap gap-2"
            style={{ "--reveal-delay": "240ms" } as React.CSSProperties}
          >
            {badges.map((b) => (
              <span
                key={b}
                className="rounded-xl border border-border bg-surface/50 px-3.5 py-2 font-mono text-xs text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
              >
                {b}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {details.map((d, i) => (
            <div
              key={d.title}
              data-reveal
              className="reveal card-glow group rounded-2xl border border-border bg-card/60 p-6 backdrop-blur-sm"
              style={{ "--reveal-delay": `${120 + i * 110}ms` } as React.CSSProperties}
            >
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-xs text-primary">0{i + 1}</span>
                <h3 className="font-display text-lg font-semibold">{d.title}</h3>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
