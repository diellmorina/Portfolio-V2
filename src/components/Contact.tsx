import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Check, Copy, Github, Linkedin, Mail, Phone, Send } from "lucide-react";
import { useRevealGroup } from "@/hooks/use-reveal";
import { contact } from "@/data/portfolio";
import { Button } from "@/components/ui/button";

export function Contact() {
  const ref = useRevealGroup<HTMLDivElement>();
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  const copyTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => () => { if (copyTimer.current) clearTimeout(copyTimer.current); }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      if (copyTimer.current) clearTimeout(copyTimer.current);
      setCopyError(false);
      setCopied(true);
      copyTimer.current = setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopyError(true);
    }
  };

  return (
    <section id="contact" className="contact-band relative py-24 sm:py-32" ref={ref}>
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div>
          <p
            data-reveal
            className="reveal font-mono text-xs uppercase tracking-[0.28em] text-primary"
          >
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
              className="magnetic-link group inline-flex max-w-full flex-wrap items-center gap-2 rounded-full bg-primary px-5 py-4 text-sm font-semibold text-primary-foreground sm:gap-3 sm:px-7"
            >
              <Mail size={17} />
              {contact.email}
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
            <Button variant="outline"
              type="button"
              onClick={copyEmail}
              className="magnetic-link h-auto rounded-full bg-surface/50 px-5 py-4"
            >
              {copied ? <Check size={16} className="text-primary" /> : <Copy size={16} />}
              {copied ? "Copied!" : "Copy email"}
            </Button>
          </div>

          <p role="status" aria-live="polite" className="mt-3 min-h-5 text-sm text-muted-foreground">
            {copied ? "Email address copied." : copyError ? "Couldn't copy the address. You can email me using the link above." : ""}
          </p>

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
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="link-underline inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <Linkedin size={15} />
              LinkedIn
            </a>
          </div>

          <form
            action="https://formspree.io/f/mbgjayon"
            method="POST"
            data-reveal
            className="reveal contact-form mt-10 grid gap-5 border-t border-border pt-8 sm:grid-cols-2"
          >
            <div className="contact-field grid gap-2">
              <label htmlFor="contact-name" className="text-sm font-semibold">
                Name
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                autoComplete="name"
                className="rounded-xl border border-border bg-surface/50 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary"
                placeholder="Your name"
              />
            </div>
            <div className="contact-field grid gap-2">
              <label htmlFor="contact-email" className="text-sm font-semibold">
                Email
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="rounded-xl border border-border bg-surface/50 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary"
                placeholder="you@example.com"
              />
            </div>
            <div className="contact-field grid gap-2 sm:col-span-2">
              <label htmlFor="contact-message" className="text-sm font-semibold">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                className="resize-y rounded-xl border border-border bg-surface/50 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary"
                placeholder="Tell me about your project"
              />
            </div>
            <input type="hidden" name="_subject" value="New portfolio contact" />
            <Button
              type="submit"
              className="magnetic-link h-auto w-fit rounded-full px-6 py-3"
            >
              Send message
              <Send size={16} />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
