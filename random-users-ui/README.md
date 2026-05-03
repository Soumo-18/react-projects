# Random Users UI

A React app that fetches and displays randomly generated user profiles from the [FreeAPI](https://freeapi.app) public API.

## Features

- Fetches random user data from `https://api.freeapi.app/api/v1/public/randomusers`
- Displays user cards with profile picture, name, username, email, location, age, and gender
- Loading and error states
- Responsive grid layout (1–4 columns)
- Styled with Tailwind CSS v4

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
├── App.jsx           # Root component, data fetching & layout
├── components/
│   └── UserCard.jsx  # Individual user card component
└── index.css         # Tailwind import
```
