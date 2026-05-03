# Meals Listing Interface

A responsive React app that fetches and displays a global recipe collection from the [FreeAPI](https://freeapi.app) meals endpoint.

## Features

- Fetches meals from `https://api.freeapi.app/api/v1/public/meals`
- Displays meal cards with image, category, cuisine area, and instructions snippet
- Links to YouTube recipe video when available
- Loading spinner and error state handling

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
│   └── MealCard.jsx   # Individual meal card component
├── App.jsx            # Root component — fetches and renders meals
└── main.jsx           # Entry point
```

## API

Data is sourced from the public FreeAPI meals endpoint. Each meal card displays:

| Field | Description |
|---|---|
| `strMeal` | Meal name |
| `strMealThumb` | Thumbnail image |
| `strCategory` | Food category |
| `strArea` | Cuisine origin |
| `strInstructions` | Cooking instructions |
| `strYoutube` | YouTube recipe link |
