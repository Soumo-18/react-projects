# Random Cat Viewer

A React app that fetches and displays a random cat breed on demand from the [FreeAPI](https://freeapi.app) database.

## Features

- Fetches a random cat breed from `https://api.freeapi.app/api/v1/public/cats/cat/random`
- Displays breed image, origin, life span, temperament tags, and description
- Visual rating bars for child-friendliness and dog-friendliness
- "Discover Another Cat" button to fetch a new random breed
- Loading spinner and error state with retry button

## Tech Stack

- React 19
- Tailwind CSS 4
- Vite 8

## Getting Started

```bash
npm install
npm run dev
```

## Project Structure

```
src/
├── components/
│   └── CatCard.jsx   # Displays breed details in a card layout
├── App.jsx           # Root component — fetches and renders the random cat
└── main.jsx          # Entry point
```

## API

Data is sourced from the public FreeAPI random cat endpoint. Each card displays:

| Field | Description |
|---|---|
| `name` | Breed name |
| `image` | Breed photo |
| `origin` | Country of origin |
| `life_span` | Average lifespan (years) |
| `temperament` | Personality traits |
| `description` | Breed description |
| `child_friendly` | Child-friendliness score (0–5) |
| `dog_friendly` | Dog-friendliness score (0–5) |
