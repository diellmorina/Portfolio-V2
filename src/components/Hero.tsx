import { ArrowDown, Download, ArrowUpRight } from "lucide-react";

const techLabels = [
  { label: "React", className: "left-[2%] top-[12%]", delay: "0s", duration: "11s" },
  { label: "JavaScript", className: "right-[4%] top-[8%]", delay: "1.4s", duration: "13s" },
  { label: "HTML", className: "left-[8%] bottom-[16%]", delay: "0.8s", duration: "10s" },
  { label: "CSS", className: "right-[10%] bottom-[24%]", delay: "2.1s", duration: "12s" },
  { label: "GitHub", className: "right-[2%] top-[46%]", delay: "0.4s", duration: "14s" },
  { label: "Vercel", className: "left-[1%] top-[52%]", delay: "1.8s", duration: "12.5s" },
];

const titleWords = [
  "Building",
  "polished,",
  "high-performance",
  "web",
  "experiences",
  "for",
  "modern",
  "brands.",
];

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-20">
      {/* floating tech labels — desktop only, extremely subtle */}
      <div aria-hidden className="pointer-events-none absolute inset-0 hidden lg:block">
        {techLabels.map((t) => (
          <span
            key={t.label}
            className="animate-float-soft absolute rounded-full border border-border bg-surface/50 px-3.5 py-1.5 font-mono text-xs text-muted-foreground/80 backdrop-blur-sm"
            style={
              {
                "--float-delay": t.delay,
                "--float-duration": t.duration,
              } as React.CSSProperties
            }
            data-pos={t.className}
          >
            <span className={`absolute ${t.className}`} />
            {t.label}
          </span>
        ))}
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <div
            className="animate-rise-in inline-flex items-center gap-2.5 rounded-full border border-primary/25 bg-primary/8 px-4 py-1.5"
            style={{ "--rise-delay": "60ms" } as React.CSSProperties}
          >
            <span className="relative flex h-2 w-2">
              <span
                className="absolute inline-flex h-full w-full rounded-full bg-primary"
                style={{ animation: "pulse-ring 2.4s ease-out infinite" }}
              />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            <span className="font-mono text-xs tracking-wide text-primary">Available for work</span>
          </div>

          <p
            className="animate-rise-in mt-8 font-mono text-sm uppercase tracking-[0.28em] text-muted-foreground"
            style={{ "--rise-delay": "140ms" } as React.CSSProperties}
          >
            Diell Morina — Front-End Developer
          </p>

          <h1 className="mt-5 text-[2.6rem] leading-[1.03] sm:text-6xl lg:text-[4.6rem]">
            {titleWords.map((word, i) => (
              <span
                key={word + i}
                className="animate-rise-in mr-[0.28em] inline-block"
                style={{ "--rise-delay": `${220 + i * 70}ms` } as React.CSSProperties}
              >
                {i >= 5 ? <span className="text-gradient-brand">{word}</span> : word}
              </span>
            ))}
          </h1>

          <p
            className="animate-rise-in mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
            style={{ "--rise-delay": "820ms" } as React.CSSProperties}
          >
            I translate ideas into responsive interfaces with clean code, crisp design, and subtle
            motion. My work focuses on accessible websites, elegant product pages, and memorable
            digital experiences.
          </p>

          <div
            className="animate-rise-in mt-9 flex flex-wrap items-center gap-3"
            style={{ "--rise-delay": "920ms" } as React.CSSProperties}
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_50px_-20px_oklch(0.878_0.165_158_/_0.85)]"
            >
              See Projects
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
            <a
              href="https://www.diellmorina.dev/Diell%20Morina%20-%20CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-surface/40 px-6 py-3.5 text-sm font-semibold text-foreground backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
            >
              <Download size={16} className="transition-transform duration-300 group-hover:translate-y-0.5" />
              Download My CV
            </a>
          </div>

          <div
            className="animate-rise-in mt-12 flex flex-wrap gap-2"
            style={{ "--rise-delay": "1020ms" } as React.CSSProperties}
          >
            {["HTML", "CSS", "Bootstrap", "JavaScript", "React"].map((t) => (
              <span
                key={t}
                className="rounded-lg border border-border bg-surface/40 px-3 py-1.5 font-mono text-xs text-muted-foreground transition-colors duration-300 hover:border-primary/40 hover:text-primary"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 text-muted-foreground transition-colors hover:text-primary sm:block"
      >
        <ArrowDown size={20} className="animate-float-soft" />
      </a>
    </section>
  );
}
