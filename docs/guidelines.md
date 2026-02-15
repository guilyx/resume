# Project Guidelines

General conventions and principles that keep this codebase consistent and easy to extend.

## Architecture

The project follows a strict **data / type / component** separation:

```
types/   -->  define the shape of data
data/    -->  populate data (single source of truth)
components/  -->  render data (pure presentational components)
App.tsx  -->  compose components into a page layout
```

Changes to resume *content* should **never** require editing a component. Changes to *presentation* should **never** require editing the data file.

## Component conventions

- **One component per file.** File name matches the exported component name in PascalCase.
- **Use the `Section` wrapper** for any new resume section. It provides the heading, divider, and spacing that keep the page visually consistent.
- **Barrel exports.** Every component must be re-exported from `src/components/index.ts`.
- **Props over context.** Components receive data through typed props. No global state, no context, no stores -- this is a static page.
- **No inline styles.** All styling goes through Tailwind utility classes. Colour values come exclusively from the theme tokens in `src/index.css`.

## Type conventions

- All data interfaces live in `src/types/resume.ts`.
- Optional fields use `?` (e.g. `companyUrl?: string`), **not** `| undefined`.
- Use `interface` for object shapes and `type` for unions or aliases.
- Every interface and field should have a JSDoc comment explaining its purpose.

## Styling conventions

- **Theme tokens only.** Never hard-code a colour hex value in a component. Use the semantic tokens (`text-accent`, `text-muted`, `border-divider`, etc.) defined in `src/index.css`.
- **Responsive-first.** Design for mobile, then add `sm:` / `md:` overrides. The layout collapses to a single column below the `md` breakpoint.
- **Print-aware.** Any visual change should be tested with `Ctrl+P` to verify the print output still looks clean. Use `print:` variants where needed.

## File naming

| Kind       | Convention            | Example                    |
| ---------- | --------------------- | -------------------------- |
| Component  | PascalCase `.tsx`     | `WorkExperience.tsx`       |
| Type file  | camelCase `.ts`       | `resume.ts`                |
| Data file  | camelCase `.ts`       | `resume.ts`                |
| Docs       | kebab-case `.md`      | `theming.md`               |

## Commits

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add new Projects section
fix: correct date formatting in publications
chore: update dependencies
docs: add theming tutorial
```

Keep commits granular -- one logical change per commit.

## Dependencies

- Add new dependencies sparingly. This is a static resume, not a web application.
- Always install the **latest** version via `npm install <package>`.
- Dev dependencies (`-D`) for anything not needed at runtime.

## Testing changes

```bash
npm run dev       # visual check in browser
npm run build     # verify production build succeeds
npm run lint      # check for lint errors
```

Always run all three before submitting a pull request.
