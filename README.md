# Resume

A single-page, statically generated resume built with React, TypeScript, Tailwind CSS v4, and Vite. Designed to look like an A4 sheet of paper, fully responsive on mobile, and deployable to [Vercel](https://vercel.com) (or any static hosting) in one click.

## Quick Start

```bash
# Use Node 22
nvm use 22

# Install dependencies
npm install

# Start dev server
npm run dev

# Production build (outputs to dist/)
npm run build
```

## Customising Your Resume

All resume content lives in **one file**: [`src/data/resume.ts`](src/data/resume.ts).

Edit that file to change your name, title, summary, work experience, education, publications, skills, and contact info. The TypeScript types in [`src/types/resume.ts`](src/types/resume.ts) ensure you can't accidentally break the structure -- your editor will guide you.

### Adding a new work experience

Add an entry to the `experience` array:

```ts
{
  company: "Acme Corp",
  companyUrl: "https://acme.com",   // optional -- makes the name a link
  location: "Paris",                // optional
  role: "Senior Engineer",
  period: "2024 - Present",
  promotions: "Promoted in 2025",   // optional
  bullets: [
    { text: "Led migration to microservices." },
  ],
}
```

### Adding a publication

Add an entry to the `publications` array:

```ts
{
  title: "My Great Paper",
  venue: "IEEE ICRA 2026",
  date: "May 2026",
  url: "https://doi.org/...",  // optional -- makes the title a link
}
```

### Adding a new section

1. Define a type in `src/types/resume.ts` and add the field to `ResumeData`.
2. Create a component in `src/components/` (use `Section` as a wrapper for consistent styling).
3. Export it from `src/components/index.ts`.
4. Drop it into `src/App.tsx`.

## Project Structure

```
src/
├── types/resume.ts          # TypeScript interfaces for all resume data
├── data/resume.ts           # Single source of truth for CV content
├── components/
│   ├── index.ts             # Barrel export
│   ├── Section.tsx          # Reusable section wrapper (heading + divider)
│   ├── Header.tsx           # Name, title, contact links
│   ├── ProfessionalSummary.tsx
│   ├── WorkExperience.tsx   # Job entries with bullets and promotions
│   ├── Publications.tsx     # Condensed academic publications
│   ├── EducationSection.tsx # Degree entries
│   └── Skills.tsx           # Skill pills grouped by category
├── App.tsx                  # Page layout (two-column on desktop, stacked on mobile)
├── main.tsx                 # React entry point
└── index.css                # Tailwind v4 theme tokens and base styles
```

## Deploy to Vercel

1. Push this repository to GitHub.
2. Import it in [Vercel](https://vercel.com/new).
3. Vercel auto-detects Vite -- no configuration needed.
4. Every push to `main` triggers a new deploy.

Alternatively, deploy manually:

```bash
npm run build
npx vercel --prod
```

## Tech Stack

| Layer     | Tool                  |
| --------- | --------------------- |
| Framework | React 19              |
| Language  | TypeScript 5          |
| Styling   | Tailwind CSS v4       |
| Bundler   | Vite 7                |
| Runtime   | Node 22               |

## License

This project is licensed under the [MIT License](LICENSE).
