# Product Listing Interface

A React app that fetches and displays a collection of random products from the [FreeAPI](https://freeapi.app) public API, styled as a cyberpunk-themed storefront.

## Features

- Fetches products from `https://api.freeapi.app/api/v1/public/randomproducts`
- Displays products in a responsive 4-column grid
- Shows product image, brand, category, description, star rating, original price, and discounted price
- Discount badge on each product card
- Add to cart button per product
- Sticky navbar with a refresh stock button
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
│   └── ProductCard.jsx   # Individual product card component
├── App.jsx               # Root component with fetch logic
└── main.jsx              # Entry point
```
