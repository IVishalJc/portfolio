# Vishal JC — Portfolio

Personal portfolio site for an AI engineer working on hybrid retrieval,
ontologies and knowledge graphs, multi-agent orchestration, and evaluation.

Dark "broadcast" visual direction: CRT scanlines and signal glitch, RGB-split
display type, neon accents on near-black, a boot sequence on load, and an
animated schematic for each project (knowledge graph with TBox/ABox staging,
prompt-to-scaffold generation, vector space, agent pipeline, shelf scan).

## Stack

- Next.js 16 (App Router, Turbopack)
- Tailwind CSS v4
- Framer Motion
- TypeScript

## Running locally

```bash
npm install
npm run dev
```

Opens on http://localhost:3000.

```bash
npm run build
```

Builds the production bundle; the site prerenders fully static.

## Content

All resume content — profile, work groups, projects, experience, education,
certifications — lives in `src/data/resume.ts`. Editing that file is enough to
update the site; no component changes needed.
