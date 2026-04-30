# Tiles Gallery

Tiles Gallery is a Next.js App Router project for showcasing a curated tile collection with authentication, a searchable gallery, and profile management.

## Purpose

The app helps users browse tile designs, view tile details, sign in with email/password or Google, and manage a personal profile.

## Live URL

TODO: add the deployed Vercel URL after hosting is complete.

## Key Features

- Home page with featured tile content
- All Tiles gallery with search
- Single tile details pages
- Email/password and Google authentication with Better Auth
- Private profile routes with route protection
- JSON Server-backed tile data
- Responsive layout for mobile, tablet, and desktop

## npm Packages Used

- `next`
- `react`
- `react-dom`
- `better-auth`
- `mongodb`
- `json-server`
- `axios`
- `daisyui`
- `react-hot-toast`
- `swiper`
- `mongoose`

## Environment Variables

Copy `.env.example` to your local environment and provide the real values for:

- `BETTER_AUTH_URL`
- `BETTER_AUTH_SECRET`
- `BETTER_AUTH_TRUSTED_ORIGINS`
- `MONGODB_URI`
- `MONGODB_DB_NAME`
- `GOOGLE_CLIENT_ID`
- `GOOGLE_CLIENT_SECRET`
- `NEXT_PUBLIC_TILES_API_URL`

## Vercel Deployment

This project is intended to be deployed on Vercel.

Set these variables in the Vercel project settings:

- `BETTER_AUTH_URL`
  - Use your production URL, for example `https://your-project.vercel.app`
- `BETTER_AUTH_SECRET`
  - Use the same strong secret you use locally, or a new production secret
- `BETTER_AUTH_TRUSTED_ORIGINS`
  - Include your live domain and any preview patterns you want to allow
- `MONGODB_URI`
  - Your production MongoDB connection string
- `MONGODB_DB_NAME`
  - The production database name
- `GOOGLE_CLIENT_ID`
- `GOOGLE_CLIENT_SECRET`
- `NEXT_PUBLIC_TILES_API_URL`
  - Use the production JSON server URL if you host that separately, or replace it with another production data source if needed

Important Google OAuth callback:

- `https://your-project.vercel.app/api/auth/callback/google`

## Development

Run the Next.js app and the JSON server in separate terminals:

```bash
npm run dev
npm run dev:api
```
