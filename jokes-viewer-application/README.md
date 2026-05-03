# Jokes Viewer Application

A React app that fetches and displays a collection of random jokes from the [FreeAPI](https://freeapi.app) public API.

## Features

- Fetches random jokes from `https://api.freeapi.app/api/v1/public/randomjokes`
- Displays jokes in a responsive 3-column masonry grid
- Shows joke categories as badge tags
- Loading and error states with a retry option
- Refresh button to load a new set of jokes

## Tech Stack

- React 19
- Vite
- Tailwind CSS v4

## Getting Started

```bash
npm install
npm run dev
```

## Project Structure

```
src/
├── components/
│   └── JokeCard.jsx   # Individual joke card component
├── App.jsx            # Root component with fetch logic
└── main.jsx           # Entry point
```
