import { useState } from "react";
import { useRevealGroup } from "@/hooks/use-reveal";
import { skillCategories } from "@/data/portfolio";

export function Skills() {
  const ref = useRevealGroup<HTMLDivElement>();
  const [active, setActive] = useState(skillCategories[0]!.id);
  const current = skillCategories.find((c) => c.id === active) ?? skillCategories[0]!;

  return (
    <section id="skills" className="relative py-24 sm:py-32" ref={ref}>
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div data-reveal className="reveal max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-primary">Toolkit</p>
          <h2 className="mt-4 text-4xl sm:text-5xl">Technologies I work with</h2>
        </div>

        <div
          data-reveal
          className="reveal mt-10 flex flex-wrap gap-2"
          style={{ "--reveal-delay": "90ms" } as React.CSSProperties}
        >
          {skillCategories.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setActive(c.id)}
              aria-pressed={active === c.id}
              className={`rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                active === c.id
                  ? "border-primary/40 bg-primary/12 text-primary"
                  : "border-border bg-surface/40 text-muted-foreground hover:-translate-y-0.5 hover:border-primary/25 hover:text-foreground"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div key={current.id} className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {current.items.map((item, i) => (
            <div
              key={item}
              className="animate-rise-in card-glow group flex items-center gap-4 rounded-2xl border border-border bg-card/60 p-5 backdrop-blur-sm"
              style={{ "--rise-delay": `${i * 60}ms` } as React.CSSProperties}
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-primary/25 bg-primary/10 font-mono text-sm font-semibold text-primary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                {item.slice(0, 2).toUpperCase()}
              </span>
              <div className="min-w-0">
                <p className="truncate font-medium">{item}</p>
                <p className="font-mono text-xs text-muted-foreground">{current.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
