# Theming & Colour Customisation

All colours used across the resume are defined as **Tailwind CSS v4 theme tokens** in a single file:

```
src/index.css
```

## The colour palette

Open `src/index.css` and look for the `@theme` block:

```css
@theme {
  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
  --color-primary: #1e293b;
  --color-accent: #f72585;
  --color-muted: #64748b;
  --color-surface: #f8fafc;
  --color-divider: #e2e8f0;
  --color-page-bg: #e5e7eb;
}
```

Each token maps to a Tailwind utility class that is used throughout every component:

| Token             | Tailwind class   | Where it's used                                    |
| ----------------- | ---------------- | -------------------------------------------------- |
| `--color-primary` | `text-primary`   | Headings, body text                                |
| `--color-accent`  | `text-accent`    | Section headings, bullet markers, links on hover   |
| `--color-muted`   | `text-muted`     | Dates, subtitles, secondary text                   |
| `--color-surface` | `bg-surface`     | Skill pill backgrounds                             |
| `--color-divider` | `border-divider` | Section dividers, skill pill borders, separators   |
| `--color-page-bg` | `bg-page-bg`     | Page background behind the A4 paper (desktop only) |

## Changing the accent colour

To switch the accent to any colour, edit the single line:

```css
--color-accent: #f72585;
```

For example, to use a teal accent:

```css
--color-accent: #14b8a6;
```

Save the file -- Vite hot-reloads instantly and every section heading, bullet point, link hover state, and promotion badge updates at once.

## Changing the background

The grey area behind the paper is controlled by `--color-page-bg`. Set it to any colour:

```css
--color-page-bg: #0f172a; /* dark background */
```

On mobile the background is hidden (the white page fills the viewport), so this only affects desktop and tablet views.

## Changing fonts

The font family is also a theme token:

```css
--font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
```

Swap `"Inter"` for any Google Font (and update the `<link>` in `index.html` to load it).

## Full theme swap example

Here is a dark-navy theme with gold accents:

```css
@theme {
  --font-sans: "IBM Plex Sans", ui-sans-serif, system-ui, sans-serif;
  --color-primary: #f1f5f9;
  --color-accent: #fbbf24;
  --color-muted: #94a3b8;
  --color-surface: #1e293b;
  --color-divider: #334155;
  --color-page-bg: #0f172a;
}
```

You would also need to update the `.page` background from `bg-white` to match (e.g. `bg-slate-900`) in the `@layer base` section of the same file.

## Tips

- **Contrast matters.** Always verify that your accent colour has sufficient contrast against white (WCAG AA). Tools like [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) help.
- **One file, one change.** Because every component uses the theme tokens rather than hard-coded colours, changing the palette never requires editing a component.
- **Print styles.** The print stylesheet inherits the same tokens, so your colour choices carry over to PDF exports via the browser's print dialog.
