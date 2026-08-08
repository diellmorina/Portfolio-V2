import { useRevealGroup, useInView } from "@/hooks/use-reveal";
import { useEffect, useState } from "react";

const stats = [
  { value: 10, suffix: "", label: "Projects shipped" },
  { value: 11, suffix: "", label: "Technologies used" },
  { value: 10, suffix: "", label: "Live websites" },
  { value: 5, suffix: "", label: "Client businesses" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const { ref, inView } = useInView<HTMLSpanElement>(0.4);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(value);
      return;
    }
    const duration = 1200;
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.round(eased * value));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value]);

  return (
    <span ref={ref} className="font-display text-4xl font-bold sm:text-5xl">
      {display}
      {suffix}
    </span>
  );
}

export function Stats() {
  const ref = useRevealGroup<HTMLDivElement>();

  return (
    <section className="relative py-6" ref={ref}>
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              data-reveal
              className="reveal card-glow rounded-2xl border border-border bg-card/60 p-6 backdrop-blur-sm"
              style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties}
            >
              <Counter value={s.value} suffix={s.suffix} />
              <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
