import { useRevealGroup, useInView } from "@/hooks/use-reveal";
import { useEffect, useState } from "react";

const stats = [
  { value: 10, suffix: "", label: "Projects shipped" },
  { value: 11, suffix: "", label: "Technologies used" },
  { value: 10, suffix: "", label: "Live websites" },
  { value: 5, suffix: "", label: "Client businesses" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const { ref, inView } = useInView<HTMLSpanElement>(0.35);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) {
      setDisplay(0);
      return;
    }

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

      if (p < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value]);

  return (
    <span ref={ref} className="block font-display text-4xl font-bold leading-none tracking-[-0.06em] sm:text-5xl">
      {display}
      {suffix}
    </span>
  );
}

export function Stats() {
  const ref = useRevealGroup<HTMLDivElement>();

  return (
    <section className="relative pt-12 pb-14 sm:pt-16 sm:pb-20" ref={ref}>
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              data-reveal
              className="reveal card-glow min-h-[168px] rounded-2xl border border-border bg-card/60 p-5 backdrop-blur-sm sm:p-6"
              style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties}
            >
              <div className="flex h-full flex-col justify-center">
                <Counter value={s.value} suffix={s.suffix} />
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
