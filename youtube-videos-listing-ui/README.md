# YouTube Videos Listing UI

A React app that fetches and displays a YouTube video feed from the [FreeAPI](https://freeapi.app) public API, styled as a minimalist dark-mode video browser.

## Features

- Fetches videos from `https://api.freeapi.app/api/v1/public/youtube/videos`
- Displays videos in a responsive 4-column grid
- Each card shows thumbnail, title, channel name, view count, and publish date
- Hover overlay reveals like count, comment count, and video tags
- Clicking a card opens the video directly on YouTube
- Sticky navbar with a refresh feed button
- Loading and error states with a retry option

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
│   └── VideoCard.jsx   # Individual video card component
├── App.jsx             # Root component with fetch logic
└── main.jsx            # Entry point
```
