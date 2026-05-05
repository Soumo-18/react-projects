# Authentication App

A vanilla JavaScript authentication app using the [FreeAPI](https://freeapi.app) Auth Module. Implements a complete auth flow across three pages with a dark-mode UI styled using Tailwind CSS CDN.

## Features

- Register a new user account
- Login with username or email
- Protected dashboard showing current user details (username, email, role)
- Logout with server-side session invalidation
- Token stored in `localStorage` and sent via `Authorization: Bearer` header
- Redirects unauthenticated users to login automatically
- Success and error messages on all forms
- Loading spinners on all async actions

## API Endpoints Used

| Action | Method | Endpoint |
|---|---|---|
| Register | POST | `/api/v1/users/register` |
| Login | POST | `/api/v1/users/login` |
| Logout | POST | `/api/v1/users/logout` |
| Current User | GET | `/api/v1/users/current-user` |

## Tech Stack

- Vanilla JavaScript
- HTML5
- Tailwind CSS (CDN)

## Getting Started

No build step required. Open any of the HTML files directly in a browser or serve with a static file server:

```bash
npx serve .
```

Then open `http://localhost:3000/register.html` to get started.

## Project Structure

```
authentication-app/
├── register.html   # Registration form
├── register.js     # Register API logic
├── login.html      # Login form
├── login.js        # Login API logic + token storage
├── index.html      # Protected dashboard (current user details + logout)
└── index.js        # Auth guard + fetch current user + logout logic
```
