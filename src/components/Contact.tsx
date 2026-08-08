import { useState } from "react";
import { ArrowUpRight, Check, Copy, Github, Mail, Phone } from "lucide-react";
import { useRevealGroup } from "@/hooks/use-reveal";
import { contact } from "@/data/portfolio";

export function Contact() {
  const ref = useRevealGroup<HTMLDivElement>();
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32" ref={ref}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[420px]"
        style={{
          background:
            "radial-gradient(50% 60% at 50% 100%, color-mix(in oklab, var(--primary) 14%, transparent), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="glass-panel rounded-[2rem] p-8 sm:p-14">
          <p data-reveal className="reveal font-mono text-xs uppercase tracking-[0.28em] text-primary">
            Contact
          </p>
          <h2
            data-reveal
            className="reveal mt-4 max-w-3xl text-4xl leading-[1.05] sm:text-6xl"
            style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
          >
            Let's build <span className="text-gradient-brand">something.</span>
          </h2>
          <p
            data-reveal
            className="reveal mt-5 max-w-xl text-muted-foreground"
            style={{ "--reveal-delay": "150ms" } as React.CSSProperties}
          >
            If you have a project idea or want to collaborate, I'm available to help with front-end
            development and polished UI execution.
          </p>

          <div
            data-reveal
            className="reveal mt-9 flex flex-wrap items-center gap-3"
            style={{ "--reveal-delay": "220ms" } as React.CSSProperties}
          >
            <a
              href={`mailto:${contact.email}`}
              className="group inline-flex items-center gap-3 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_55px_-20px_oklch(0.878_0.165_158_/_0.9)]"
            >
              <Mail size={17} />
              {contact.email}
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 px-5 py-4 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
            >
              {copied ? <Check size={16} className="text-primary" /> : <Copy size={16} />}
              {copied ? "Copied!" : "Copy email"}
            </button>
          </div>

          <div
            data-reveal
            className="reveal mt-10 flex flex-wrap gap-6 border-t border-border pt-8"
            style={{ "--reveal-delay": "300ms" } as React.CSSProperties}
          >
            <a
              href={contact.phoneHref}
              className="link-underline inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <Phone size={15} />
              {contact.phone}
            </a>
            <a
              href={contact.github}
              target="_blank"
              rel="noreferrer"
              className="link-underline inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <Github size={15} />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
