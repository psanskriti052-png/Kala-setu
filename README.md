# Kala Setu

Kala Setu ("bridge of art") is a mobile-first web app that connects people with India's folk art and the artisans behind it. Scan an artwork to learn what it is, then explore its story and discover the artisans who create it.

**Live prototype:** https://kala-setu-scan.base44.app

## Features
- **Scan:** upload or capture an image of a folk artwork and get an identification result
- **Result:** shows the art form, its origin and its story
- **Explore:** browse folk art styles
- **Learn:** short lessons on art forms and their cultural background
- **Artisans:** discover the artisans behind the art
- **Profile and Auth:** sign up, login, password reset and multi-factor authentication

## Tech Stack
- React + Vite
- Tailwind CSS
- shadcn/ui components
- Base44 (hosting and backend)

## Project Structure
src/
├── pages/        Home, Scan, Result, Explore, Learn, Artisans, Profile, auth pages
├── components/   AppLayout, BottomNav, BottomSheet, ActionButton, MandalaCorner, ui/
├── data/         Static app data
├── hooks/        Custom React hooks
├── lib/          Utility helpers
└── utils/        Shared utilities

## Run Locally
npm install
npm run dev

## Status
Working prototype. The scan feature uses a swappable vision model, so a real one can be plugged in later.

## Author
Sanskriti, BTech student, Pune
