/** A quiet, token-based grid keeps motion focused on the content. */
export function SiteBackground() {
  return <div aria-hidden className="site-grid pointer-events-none fixed inset-0 -z-10" />;
}