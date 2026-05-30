---
title: Velo Coach
subtitle: AI pose coaching in the browser
description: Real-time pose detection, rep counting, and live session coaching — computer vision without a native app install.
longDescription: VELO brings AI gym coaching to the browser with pose detection, rep counting, and session feedback for athletes and experimenters.
client: Quezt Labs
industry: Fitness / AI
services:
  - Computer Vision
  - Vite / React
  - Real-time UX
portfolioId: velo-coach
domain: velo-coach.vercel.app
framework: Vite
stack:
  - React
  - Vite
  - WebRTC / CV
  - Vercel
metrics:
  - label: AI
    value: Pose + Reps
  - label: Client
    value: Browser
  - label: Deploy
    value: Vercel
image: /analytics-dashboard-data-visualization-dark-theme.jpg
color: "#c026d3"
featured: true
---

## The challenge

Gym coaching apps usually require native installs and heavy ML pipelines. We wanted to prove **browser-based** pose coaching with acceptable latency for demos and pilots.

## Our approach

- Camera access + frame processing in the client
- Rep counting and form hints surfaced in a minimal UI
- Vite for fast deploy cycles on `velo-coach.vercel.app`
- SEO/meta for discoverability as an R&D showcase

## The solution

VELO Coach runs as a lightweight web app — open the site, start a session, get live feedback without an app store round-trip.

## Technical notes

- Prefer progressive enhancement when camera APIs are blocked
- Keep models and inference paths measurable (FPS, drop frames)
- Separate **demo mode** from production coaching flows

## Impact

- Public showcase of Quezt Labs AI + fitness crossover
- Reusable patterns for vision features in client MVPs
- Validated that Vite + Vercel is enough for interactive CV experiments
