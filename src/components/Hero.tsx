import { useEffect, useState } from "react";
import { ArrowDown, Download, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import cvAsset from "@/assets/cv.pdf.asset.json";
import { projects } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { usePrefersReducedMotion } from "@/hooks/use-reveal";

const showcase = projects.slice(0, 3);

export function Hero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduced = usePrefersReducedMotion();
  const current = showcase[active];

  useEffect(() => {
    if (reduced || paused) return;
    const timer = window.setInterval(() => {
      if (!document.hidden && window.scrollY < window.innerHeight) {
        setActive((value) => (value + 1) % showcase.length);
      }
    }, 6500);
    return () => window.clearInterval(timer);
  }, [reduced, paused]);

  return (
    <section id="home" className="portfolio-hero relative isolate overflow-hidden border-b border-border">
      <div aria-hidden className="hero-media absolute inset-0 -z-10">
        {showcase.map((project, index) => (
          <img key={project.id} src={project.image} alt="" fetchPriority={index === 0 ? "high" : "auto"}
            className={`hero-project-image ${active === index ? "is-active" : ""}`} />
        ))}
        <div className="hero-media-shade absolute inset-0" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-5 pt-32 pb-12 sm:px-8 sm:pt-40 sm:pb-16">
        <div className="animate-rise-in flex items-center gap-3 font-mono text-xs text-primary">
          <span className="availability-dot h-2 w-2 rounded-full bg-primary" />
          Available for work <span className="ml-3 hidden text-muted-foreground sm:inline">Kosovo · Front-End Developer</span>
        </div>
        <h1 className="hero-name mt-8 font-display font-semibold leading-[0.95]">
          <span className="hero-word block">Diell</span>
          <span className="hero-word hero-word-accent block text-primary">Morina<span className="text-gold">.</span></span>
        </h1>
        <p className="animate-rise-in mt-7 max-w-xl font-display text-2xl font-medium leading-tight sm:text-3xl" style={{ "--rise-delay": "350ms" } as React.CSSProperties}>
          Polished code. <span className="text-muted-foreground">Memorable experiences.</span>
        </p>
        <p className="animate-rise-in mt-4 max-w-lg text-sm leading-7 text-muted-foreground sm:text-base" style={{ "--rise-delay": "480ms" } as React.CSSProperties}>
          I translate ideas into responsive interfaces with clean code, crisp design, and considered motion.
        </p>
        <div className="animate-rise-in mt-8 flex flex-wrap gap-3" style={{ "--rise-delay": "600ms" } as React.CSSProperties}>
          <Button asChild size="lg" className="magnetic-link h-12 rounded-full px-6"><a href="#projects">Explore my work <ArrowUpRight /></a></Button>
          <Button asChild variant="outline" size="lg" className="magnetic-link h-12 rounded-full bg-background/70 px-6"><a href={cvAsset.url} download="Diell Morina - CV.pdf"><Download /> Download My CV</a></Button>
        </div>

        {current && <div className="hero-showcase mt-12 flex items-center justify-between gap-5 border-t border-border pt-5 sm:mt-16"
          onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocusCapture={() => setPaused(true)} onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false); }}>
          <a href="#about" aria-label="Scroll to about" className="group flex items-center gap-3 font-mono text-xs text-muted-foreground"><ArrowDown className="scroll-arrow h-4 w-4 text-primary" /><span className="hidden sm:inline">SCROLL TO EXPLORE</span></a>
          <div className="flex min-w-0 items-center gap-3 sm:gap-5">
            <a key={current.id} href={current.url} target="_blank" rel="noreferrer" className="animate-rise-in min-w-0 text-right">
              <span className="block font-mono text-[10px] text-muted-foreground">IN THE SPOTLIGHT / 0{active + 1}</span>
              <span className="mt-1 flex items-center justify-end gap-2 text-sm font-medium">{current.title}<ArrowUpRight size={15} className="text-primary" /></span>
            </a>
            <div className="flex gap-1">
              <Button variant="outline" size="icon" className="rounded-full bg-background/70" aria-label="Previous spotlight project" onClick={() => setActive((active + showcase.length - 1) % showcase.length)}><ChevronLeft /></Button>
              <Button variant="outline" size="icon" className="rounded-full bg-background/70" aria-label="Next spotlight project" onClick={() => setActive((active + 1) % showcase.length)}><ChevronRight /></Button>
            </div>
          </div>
        </div>}
      </div>
    </section>
  );
}