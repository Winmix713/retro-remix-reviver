# Liga Template - Static HTML Export

This folder contains fully static, production-ready HTML exports for every Liga template page.

## Pages

- **Club Summary** → club-summary.html (route: /)
- **Game Summary** → game-summary.html (route: /game-summary)
- **Championships** → championships.html (route: /championships)
- **League Overview** → league-overview.html (route: /league-overview)
- **Fans Community** → fans-community.html (route: /fans-community)
- **Statistics** → statistics.html (route: /statistics)
- **Match Summary** → match-summary.html (route: /match-summary)
- **Match Overview** → match-overview.html (route: /match-overview)
- **Player Profile** → player-profile.html (route: /player-profile)
- **Schedule** → schedule.html (route: /schedule)
- **Tickets** → tickets.html (route: /tickets)
- **Football Store** → football-store.html (route: /football-store)
- **Brand Store** → brand-store.html (route: /brand-store)
- **Product Detail** → product.html (route: /product)
- **Login** → login.html (route: /login)
- **Sign Up** → sign-up.html (route: /sign-up)
- **Settings** → settings.html (route: /settings)
- **404 - Page Not Found** → page-not-found.html (route: /404)

## Contents

- assets/: Production JS/CSS bundles from Vite build
- *.html: Individual static pages bootstrapping the Liga React app
- routes.json: Metadata describing the generated pages
- page-index.html: Visual directory of all pages
- Favicon + robots.txt + placeholder assets

## How to Preview

1. Run: cd static-html && npx serve .
2. Open http://localhost:3000/page-index.html (or any HTML file directly)

Each HTML file bootstraps the React widgets with a preset route using an in-memory router, so they work even when opened directly from the filesystem.

Generated at 2025-12-05T19:32:51.694Z.
