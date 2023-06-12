This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Routing Feature

1. Added static nested route accessible at
  1. /blog/first
  2. /blog/second
2. Added dynamic nested article route accessible at
  1. Article List: /articles
  2. Article detail pages for ex: /articles/1
  3. Article detail pages with reviews for ex: /articles/1/reviews/2
3. Catch all segments
  Next.js provides the catch-all segments feature which allows for flexible routing.
  Let's say we want to create a documentation site with multiple features and concepts,
  where each concept has its own unique route. Instead of creating separate files for each route,
  we can use the catch-all segments route.

  For ex:
  /docs/routing/nested-routing
  /docs/routing/catch-all-segments
  /docs/manual/articles

4. Private folders which are not accessible publicly.
  Private folders in Next.js are a feature that allows for effective project organization.
  By prefixing a folder name with an underscore,
  it becomes a private implementation detail and is excluded from routing.

  For example, accessing localhost:3000/_private-route with the following folder structure /app/_private-route,
  containing a page.tsx file.
  This file is unroutable and trying to access it in the browser will result in a 404 error.
  Private folders are useful for separating UI logic from routing logic, organizing internal files,
  sorting and grouping files in code editors, and avoiding naming conflicts.
