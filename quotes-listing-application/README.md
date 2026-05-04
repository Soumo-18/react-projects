# Quotes Listing Application

A React app that fetches and displays a curated collection of quotes from the [FreeAPI](https://freeapi.app) public API.

## Features

- Fetches quotes from `https://api.freeapi.app/api/v1/public/quotes`
- Displays quotes in a responsive 3-column grid with author attribution
- Shows tags as badge labels per quote
- Loading and error states with a retry option
- Refresh button to reload quotes

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
│   └── QuoteCard.jsx   # Individual quote card component
├── App.jsx             # Root component with fetch logic
└── main.jsx            # Entry point
```
