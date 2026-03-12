# Swiss Hidden Bases MVP

Next.js MVP for ranking hidden Swiss base locations in Graubunden, Bern and Lucerne.

## What is included

- Homepage
- Ranking page
- Place detail pages
- Methodology page
- Sources page
- Local JSON data model for 36 starter places
- Adjustable score weights in `config/weights.json`
- Google Analytics support via `NEXT_PUBLIC_GA_ID`

## Run locally

```bash
npm install
npm run dev
```

## Build static export

```bash
npm install
npm run build
```

The static site will be generated in `out/`.

## Suggested Render deployment

- Service type: Static Site
- Build command: `npm install && npm run build`
- Publish directory: `out`

## Data structure

- `data/processed/places.json` - starter place data and current MVP scores
- `config/weights.json` - score weights
- `config/sources.json` - public source list
- `data/raw/` - drop public source files here later
- `content/places/` - reserved for markdown/place notes later

## Important MVP note

The current one-hour access logic is intentionally modeled and curated. The app structure is ready to swap in public data connectors later.
