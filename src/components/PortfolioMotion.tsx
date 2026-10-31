import { useEffect, useRef, useState } from "react";
import { ArrowUp, Asterisk } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const length = document.documentElement.scrollHeight - window.innerHeight;
        ref.current?.style.setProperty("--scroll-progress", String(length > 0 ? Math.min(window.scrollY / length, 1) : 0));
        setShowTop(window.scrollY > window.innerHeight);
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => { window.removeEventListener("scroll", update); window.removeEventListener("resize", update); cancelAnimationFrame(frame); };
  }, []);
  return <>
    <div aria-hidden ref={ref} className="reading-progress fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-primary" />
    {showTop && <Button size="icon" variant="outline" className="animate-rise-in fixed right-5 bottom-5 z-40 rounded-full bg-background/90 backdrop-blur-md" aria-label="Back to top" title="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" })}><ArrowUp /></Button>}
  </>;
}

export function TechnologyMarquee() {
  const words = ["FRONT-END DEVELOPMENT", "REACT", "UI / UX", "JAVASCRIPT", "RESPONSIVE DESIGN"];
  return <div className="technology-marquee overflow-hidden border-b border-border bg-surface/50 py-5" aria-hidden>
    <div className="marquee-track flex w-max items-center gap-8">
      {[0, 1].map((copy) => <div key={copy} className="flex shrink-0 items-center gap-8 pr-0">{words.map((word) => <span key={word} className="flex items-center gap-8 whitespace-nowrap font-mono text-xs text-muted-foreground"><Asterisk className="marquee-star h-5 w-5 text-primary" />{word}</span>)}</div>)}
    </div>
  </div>;
}