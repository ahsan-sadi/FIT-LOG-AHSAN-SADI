# FitLog — Workout Library

FitLog is a workout tracking web app that lets users browse a library of exercises, build a daily workout plan, save exercises for later, and track progress through simple stats like total exercises, minutes, and calories burned.

## Technologies Used

- **Next.js** (App Router, Server & Client Components)
- **React** (Context API for global state via `PlanProvider`)
- **Tailwind CSS** (utility-first, fully responsive styling)
- **React Icons** (`react-icons`)
- **Next.js `<Image>`** for optimized image loading
- **REST API** (Cloudflare Workers-hosted `fitlog` API for exercise data)

## Key Features

1. **Exercise Library & Detail Pages**
   Browse individual workouts with full details — equipment, difficulty, sets, reps, duration, calories burned, rating, and step-by-step instructions.

2. **Today's Plan**
   Add exercises to a running daily plan and track them as a dedicated "Today's Plan" tab.

3. **Save for Later**
   Bookmark exercises into a separate "Saved" list to build a workout for another day.

4. **Live Stats Dashboard**
   Automatically calculated totals for exercises, minutes, and calories burned update as the plan changes.

5. **Sortable, Responsive Plan View**
   Sort your plan by duration, calories, or rating, with a fully responsive layout that adapts cleanly from mobile to desktop.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.
