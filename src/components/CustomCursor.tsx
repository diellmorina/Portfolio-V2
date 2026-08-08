import { useEffect, useRef, useState } from "react";

/**
 * Desktop-only custom cursor. Uses rAF + transforms, never blocks the real
 * pointer, and is fully disabled for touch/coarse pointers and reduced motion.
 */
export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const [enabled, setEnabled] = useState(false);
  const [state, setState] = useState<"default" | "hover" | "view">("default");

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;
    setEnabled(true);
    document.documentElement.classList.add("cursor-none-desktop");
    return () => document.documentElement.classList.remove("cursor-none-desktop");
  }, []);

  useEffect(() => {
    if (!enabled) return;
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let frame = 0;
    let visible = false;

    const onMove = (e: PointerEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!visible) {
        visible = true;
        if (dotRef.current) dotRef.current.style.opacity = "1";
        if (ringRef.current) ringRef.current.style.opacity = "1";
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      }
      const target = e.target as HTMLElement | null;
      if (target?.closest("[data-cursor='view']")) setState("view");
      else if (target?.closest("a, button, [role='button'], input, textarea")) setState("hover");
      else setState("default");
    };

    const loop = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      }
      frame = requestAnimationFrame(loop);
    };

    const onLeave = () => {
      visible = false;
      if (dotRef.current) dotRef.current.style.opacity = "0";
      if (ringRef.current) ringRef.current.style.opacity = "0";
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);
    frame = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
      cancelAnimationFrame(frame);
    };
  }, [enabled]);

  if (!enabled) return null;

  const ringSize = state === "view" ? 64 : state === "hover" ? 46 : 30;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[9999]">
      <div
        ref={dotRef}
        className="absolute left-0 top-0 h-1.5 w-1.5 rounded-full bg-primary opacity-0 transition-opacity duration-300"
      />
      <div
        ref={ringRef}
        className="absolute left-0 top-0 flex items-center justify-center rounded-full border border-primary/60 opacity-0 transition-[width,height,background-color,opacity] duration-300 ease-out"
        style={{
          width: ringSize,
          height: ringSize,
          backgroundColor:
            state === "default" ? "transparent" : "color-mix(in oklab, var(--primary) 12%, transparent)",
        }}
      >
        <span
          className="font-mono text-[10px] font-semibold tracking-[0.2em] text-primary transition-opacity duration-200"
          style={{ opacity: state === "view" ? 1 : 0 }}
        >
          VIEW
        </span>
      </div>
    </div>
  );
}
