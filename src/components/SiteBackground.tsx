import { useEffect, useRef } from "react";

/** Ambient background: aurora glow, fine grid, gentle mouse parallax (desktop). */
export function SiteBackground() {
  const layerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;

    let targetX = 0;
    let targetY = 0;
    let x = 0;
    let y = 0;
    let frame = 0;

    const onMove = (e: PointerEvent) => {
      targetX = (e.clientX / window.innerWidth - 0.5) * 26;
      targetY = (e.clientY / window.innerHeight - 0.5) * 26;
    };
    const loop = () => {
      x += (targetX - x) * 0.05;
      y += (targetY - y) * 0.05;
      if (layerRef.current) {
        layerRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
      frame = requestAnimationFrame(loop);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    frame = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div ref={layerRef} className="absolute inset-[-10%]">
        <div
          className="absolute left-[-10%] top-[-15%] h-[70vh] w-[70vw] rounded-full blur-[130px]"
          style={{
            background: "radial-gradient(circle, color-mix(in oklab, var(--primary) 22%, transparent), transparent 65%)",
            animation: "aurora-drift 26s ease-in-out infinite",
          }}
        />
        <div
          className="absolute bottom-[-25%] right-[-15%] h-[60vh] w-[60vw] rounded-full blur-[140px]"
          style={{
            background: "radial-gradient(circle, color-mix(in oklab, var(--gold) 14%, transparent), transparent 65%)",
            animation: "aurora-drift 34s ease-in-out infinite reverse",
          }}
        />
      </div>

      {/* fine grid */}
      <div
        className="absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage:
            "linear-gradient(to right, color-mix(in oklab, var(--primary) 12%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in oklab, var(--primary) 12%, transparent) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse at 50% 0%, black 0%, transparent 78%)",
        }}
      />

      {/* noise */}
      <div
        className="absolute inset-0 opacity-[0.035] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
}
