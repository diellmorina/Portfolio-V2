<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Portfolio frontend
- Keep coordinated page motion in PortfolioMotion and global CSS, with browser-only effects initialized after hydration; this keeps SSR stable and reduced-motion behavior consistent.
- Hero project previews reuse the portfolio data and local images; this keeps showcased work accurate without extra network dependencies.
