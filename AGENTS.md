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

## Architecture
- Single-page portfolio at `src/routes/index.tsx` composed of section components in `src/components/portfolio/` (Nav, Hero, About, Skills, Projects, Experience, Contact, Footer); sections use anchor navigation, not separate routes.
- Demo projects live as standalone routes under `src/routes/demo.*.tsx` with `noindex`; they carry their own minimal chrome, not the portfolio Nav.
- Design tokens (dark navy theme, fonts, utilities like `text-gradient`, `card-glass`) are defined in `src/styles.css` via Tailwind v4 `@theme inline` + `@utility`; components must use tokens, never hardcoded colors.
