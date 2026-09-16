# Photo Gallery

A responsive photo gallery application built with Next.js and the Unsplash API.

The application allows users to browse photos in a masonry-style gallery, search for images, switch between different gallery layouts, navigate through paginated results, and view detailed information about individual photos.

## Live Demo

[View Live Demo](https://photo-gallery-ns2p8utj3-liudmylas-projects-db11072d.vercel.app/)

## Features

- Responsive masonry photo gallery
- 3-column and 5-column layout switcher
- Persistent gallery layout preference using `localStorage`
- Photo search
- Pagination
- Individual photo details page
- Photo metadata including dimensions, likes, camera information, aperture, focal length, and ISO when available
- Search by photo tags
- Loading, empty, error, and not-found states
- Responsive layouts for desktop, tablet, and mobile
- Server-side data fetching with Next.js
- Optimized images using `next/image`

## Tech Stack

- Next.js
- React
- TypeScript
- SCSS Modules
- Unsplash API
- Lucide React

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/milaandrushchenko/photo-gallery.git
cd photo-gallery
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env.local` file in the root of the project:

```env
UNSPLASH_ACCESS_KEY=your_unsplash_access_key
```

You can obtain an API access key from the Unsplash Developers platform.

> The Unsplash access key is used only on the server and should not be committed to the repository.

### 4. Run the development server

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## Available Scripts

```bash
npm run dev
```

Starts the development server.

```bash
npm run build
```

Creates a production build.

```bash
npm run start
```

Starts the production server.

```bash
npm run lint
```

Runs ESLint.

## Responsive Behavior

The gallery adapts its layout based on the viewport width:

- Desktop: 3 or 5 columns
- Up to 1024px: 3 columns
- Up to 768px: 2 columns
- Up to 375px: 1 column

The gallery layout switcher is available on desktop screens.

## API

Photo data is provided by the Unsplash API.

The application uses server-side requests to keep the API access key private.

## Deployment

The application can be deployed on Vercel.

When deploying, add the following environment variable to the deployment configuration:

```env
UNSPLASH_ACCESS_KEY=your_unsplash_access_key
```
