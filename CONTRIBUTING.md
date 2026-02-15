# Contributing

Thanks for your interest in contributing! This document covers how to get set up, what to work on, and how to submit changes.

## Prerequisites

- **Node 22** -- use [nvm](https://github.com/nvm-sh/nvm) and run `nvm use` in the project root (the `.nvmrc` file handles the rest).
- **npm** -- ships with Node.

## Getting started

```bash
git clone <repo-url>
cd resume
nvm use
npm install
npm run dev
```

The dev server starts at `http://localhost:5173/` with hot-reload.

## What to contribute

Contributions generally fall into these categories:

### Content fixes

Typos, outdated dates, broken links. Edit `src/data/resume.ts` and open a PR.

### New sections

Want to add a "Projects" or "Certifications" section? Follow the pattern:

1. Add a type to `src/types/resume.ts`.
2. Add data to `src/data/resume.ts`.
3. Create a component in `src/components/` using the `Section` wrapper.
4. Export it from `src/components/index.ts`.
5. Place it in `src/App.tsx`.

See [docs/guidelines.md](docs/guidelines.md) for conventions.

### Theming & styling

Colour and font changes go in `src/index.css` theme tokens. See [docs/theming.md](docs/theming.md) for a full walkthrough.

### Bug fixes & improvements

Layout issues, accessibility improvements, print rendering fixes -- all welcome.

## Submitting a pull request

1. **Fork** the repository and create a branch from `main`:

   ```bash
   git checkout -b feat/my-change
   ```

2. **Make your changes.** Follow the conventions in [docs/guidelines.md](docs/guidelines.md).

3. **Verify** everything works:

   ```bash
   npm run lint      # no lint errors
   npm run build     # production build succeeds
   ```

   Also visually check the page in the browser (`npm run dev`) and the print preview (`Ctrl+P`).

4. **Commit** with a [Conventional Commit](https://www.conventionalcommits.org/) message:

   ```bash
   git commit -m "feat: add certifications section"
   ```

5. **Push** and open a pull request against `main`.

## Code review

- PRs should contain **one logical change**. Split unrelated work into separate PRs.
- All existing lint rules and type checks must pass.
- New components must follow the existing patterns (typed props, `Section` wrapper, theme tokens for colours).

## Style guide

- **TypeScript** -- strict mode, no `any`.
- **Tailwind** -- utility classes only, no inline styles, no hard-coded colour values.
- **Commits** -- conventional commits, granular (one change per commit).
- **Files** -- PascalCase for components, camelCase for data/types, kebab-case for docs.

See [docs/guidelines.md](docs/guidelines.md) for the full reference.

## License

By contributing, you agree that your contributions will be licensed under the project's [MIT License](LICENSE).
