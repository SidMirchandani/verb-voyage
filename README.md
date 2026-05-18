# Spanish III — Unit 7 Study

**Live site:** [spanishu7.vercel.app](https://spanishu7.vercel.app)

An interactive study site for **Spanish III, Unit 7**: vocabulary practice with a Mafia-themed flashcard game, grammar reference for the **present perfect** and **past perfect**, and bilingual Mad Libs that reinforce both tenses.

Built by **Sid Mirchandani**, **Anay Tandon**, **Sahil Ghosh**, and **Vaibhav Sitaraman**.

## Features

### Vocab Mafia flashcards

- **95 vocabulary terms** across seven themes: technology, science & inventions, astronomy, scientists, on-screen/media, literature, and culture.
- Flip cards in English or Spanish first; filter by category or shuffle the deck.
- Includes **Mafia: Vocab Edition** rules — when a player is eliminated, they get one last chance to translate four flashcards correctly to stay in the game.

### Grammar hub

Quick-reference cards on the home page for:

| Tense | Formula | Example |
|-------|---------|---------|
| **Present perfect** | *haber* (present) + past participle | *He estudiado mucho.* |
| **Past perfect** | *haber* (imperfect) + past participle | *Había estudiado antes del examen.* |

Each section covers signal words, irregular participles, and when to use the tense.

### Mad Libs (8 stories)

Four **present perfect** and four **past perfect** fill-in-the-blank stories. For each blank you enter English nouns and verbs; the app builds:

- An English story with correct perfect-tense verb forms
- A Spanish story with auto-translated vocabulary (editable per blank)

Stories include titles like *Lab Day Disaster*, *Space Mission Gone Wrong*, and more.

## Tech stack

| Layer | Tools |
|-------|--------|
| Framework | [TanStack Start](https://tanstack.com/start) + [TanStack Router](https://tanstack.com/router) |
| UI | React 19, [Tailwind CSS](https://tailwindcss.com/) 4, [shadcn/ui](https://ui.shadcn.com/) (Radix) |
| Build | [Vite](https://vite.dev/) 7, [Nitro](https://nitro.build/) (Vercel-compatible SSR output) |
| Language | TypeScript |

Optional Cloudflare Workers config (`wrangler.jsonc`) is included; production builds use Nitro for **Vercel** deployment.

## Project structure

```
src/
├── routes/       # Pages (home, mad lib player)
├── components/   # MafiaFlashcards, UI primitives
└── lib/
    ├── vocab.ts  # Unit 7 word list + translation helpers
    └── madlibs.ts# Story templates and tense builders
```

## Getting started

### Prerequisites

- **Node.js** 20+ (recommended)
- npm, pnpm, or Bun

### Install and run

```bash
npm install
npm run dev
```

Open the URL Vite prints (typically `http://localhost:5173`).

### Other scripts

| Command | Description |
|---------|-------------|
| `npm run build` | Production build (outputs to `.output/` via Nitro) |
| `npm run start` | Serve the production build locally |
| `npm run preview` | Preview the Vite production client bundle |
| `npm run lint` | Run ESLint |
| `npm run format` | Format with Prettier |

## Routes

| Path | Description |
|------|-------------|
| `/` | Study hub — flashcards, grammar, Mad Lib picker |
| `/madlib/present/:num` | Present perfect Mad Lib (`num` = 1–4) |
| `/madlib/past/:num` | Past perfect Mad Lib (`num` = 1–4) |

## Deployment

The app is deployed on **Vercel** (Nitro adapter; Cloudflare plugin disabled in `vite.config.ts`).

- **Build command:** `npm run build`
- **Output:** handled by Nitro / Vercel integration (`.vercel/output` after build)

For local production testing:

```bash
npm run build
npm run start
```

## Customizing content

- **Vocabulary:** edit `src/lib/vocab.ts` (`VOCAB` array and `CATEGORIES`).
- **Mad Libs:** edit `src/lib/madlibs.ts` (`PRESENT_PERFECT_MADLIBS`, `PAST_PERFECT_MADLIBS`). Each story defines blanks and `buildEnglish` / `buildSpanish` template functions.

## License

Educational project for classroom use. Add a license file here if you plan to publish or share the repo publicly.
