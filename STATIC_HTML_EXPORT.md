# Liga Template - Static HTML Export Documentation

## Overview

This Liga Football Template now supports exporting all pages as static HTML files. This feature allows you to:

- Deploy individual pages to static hosting (Netlify, Vercel, GitHub Pages, etc.)
- Create standalone HTML demonstrations of each page
- Improve SEO by pre-rendering page content
- Reduce hosting costs with static file serving
- Enable offline browsing of the template

## Quick Start

### Generate Static HTML Pages

Run the following command to build and export all pages:

```bash
npm run export:static
```

This will:
1. Build the Vite application (`npm run build`)
2. Generate static HTML files for all 18 pages
3. Copy all assets (CSS, JS, images, fonts)
4. Create a page index for easy navigation

### Output Structure

The command creates a `static-html/` folder with the following structure:

```
static-html/
├── assets/                    # All CSS, JS, and asset files from the build
├── index.html                 # Club Summary (default page)
├── game-summary.html          # Game Summary page
├── championships.html         # Championships page
├── league-overview.html       # League Overview page
├── fans-community.html        # Fans Community page
├── statistics.html            # Statistics page
├── match-summary.html         # Match Summary page
├── match-overview.html        # Match Overview page
├── player-profile.html        # Player Profile page
├── schedule.html              # Schedule page
├── tickets.html               # Tickets page
├── football-store.html        # Football Store page
├── brand-store.html           # Brand Store page
├── product.html               # Product Detail page
├── login.html                 # Login page
├── sign-up.html               # Sign Up page
├── settings.html              # Settings page
├── page-not-found.html        # 404 Page
├── page-index.html            # Visual directory of all pages
├── routes.json                # Metadata about all pages
├── README.md                  # Documentation
├── favicon.ico                # Site icon
├── robots.txt                 # SEO robots file
└── placeholder.svg            # Placeholder image
```

## Features

### ✅ All Pages Included

The export includes all 18 pages from the Liga template:

1. **Club Summary** - Team stats, attendance, league standings, live reports
2. **Game Summary** - Match analytics, possession, shots, player metrics
3. **Championships** - Tournament overview, brackets, fixtures
4. **League Overview** - Complete league standings and statistics
5. **Fans Community** - Fan engagement hub with social features
6. **Statistics** - Advanced analytics and KPIs
7. **Match Summary** - Detailed match recap with visualizations
8. **Match Overview** - Upcoming fixtures and match cards
9. **Player Profile** - Player bio, stats, and performance trends
10. **Schedule** - Calendar with matches and events
11. **Tickets** - Ticketing system with seat maps
12. **Football Store** - Club merchandise store
13. **Brand Store** - Lifestyle brand store
14. **Product Detail** - Product page with reviews
15. **Login** - Authentication page
16. **Sign Up** - Registration page
17. **Settings** - User preferences and settings
18. **404 Page** - Custom error page

### ✅ Design Preservation

- **Pixel-perfect reproduction** - All styles, layouts, and design elements are preserved
- **Responsive layouts** - All breakpoints and mobile designs work correctly
- **Theme support** - Dark/light theme functionality is maintained
- **RTL support** - Right-to-left language support is included
- **Typography** - All fonts and font scales are preserved

### ✅ Component Functionality

- **All React components** are included and functional
- **Interactive widgets** (charts, forms, sliders, modals)
- **Navigation** (sidebar, bottom nav, tabs)
- **Data visualization** (Recharts graphs, gauges, timelines)
- **E-commerce features** (shopping cart, filters, product cards)
- **Form handling** (login, registration, settings)
- **Animations** (transitions, hover effects, loading states)

### ✅ Asset Management

- **Optimized bundles** - Minified CSS and JavaScript
- **Code splitting** - Lazy-loaded components for better performance
- **Relative paths** - All assets use relative paths for portability
- **Shared assets** - Common files are reused across pages
- **Image optimization** - Lazy loading and responsive images

### ✅ Technical Features

- **MemoryRouter** - Uses React Router's MemoryRouter for static pages
- **Initial route** - Each page sets its route via `window.__STATIC_ROUTE__`
- **Loading states** - Smooth loading experience with spinners
- **Error handling** - Graceful error states and 404 page
- **SEO optimization** - Proper meta tags, titles, and descriptions
- **Browser compatibility** - Works on all modern browsers

## Usage

### Preview Locally

#### Option 1: Using npx serve

```bash
cd static-html
npx serve .
```

Then open your browser to the URL shown (typically `http://localhost:3000`)

#### Option 2: Using Python

```bash
cd static-html
python3 -m http.server 8000
```

Then visit `http://localhost:8000`

#### Option 3: Direct File Opening

You can open any `.html` file directly in your browser. However, some features may not work correctly without a web server due to browser security restrictions.

### View the Page Index

Open `static-html/page-index.html` to see a visual directory of all available pages with descriptions.

### Deploy to Static Hosting

The `static-html/` folder can be deployed to any static hosting service:

#### Netlify

```bash
cd static-html
netlify deploy --prod
```

#### Vercel

```bash
cd static-html
vercel --prod
```

#### GitHub Pages

1. Push the `static-html/` folder to your repository
2. Enable GitHub Pages in repository settings
3. Select the folder containing the HTML files

#### AWS S3

```bash
aws s3 sync static-html/ s3://your-bucket-name --acl public-read
```

## Technical Details

### How It Works

1. **Build Phase**
   - Vite builds the React application into optimized bundles
   - CSS is extracted and minified
   - JavaScript is transpiled, minified, and code-split

2. **Generation Phase**
   - The `generate-static-pages.mjs` script reads the built `dist/index.html`
   - For each page, it creates a new HTML file with:
     - Page-specific title and meta tags
     - Loading spinner styles
     - Links to shared CSS and JS assets
     - `window.__STATIC_ROUTE__` variable set to the page's route
   - Assets are copied with relative paths

3. **Runtime Phase**
   - When a page loads, React reads `window.__STATIC_ROUTE__`
   - If present, it uses MemoryRouter instead of BrowserRouter
   - The MemoryRouter initializes with the predefined route
   - React renders the correct page component
   - All widgets, components, and interactions work normally

### Key Files

- **generate-static-pages.mjs** - Script that generates static HTML files
- **src/main.jsx** - Updated to support MemoryRouter for static pages
- **package.json** - Includes `export:static` script

### Customization

#### Adding New Pages

To add a new page to the export, edit `generate-static-pages.mjs`:

```javascript
const pages = [
  // ... existing pages
  {
    slug: 'my-new-page',
    route: '/my-new-page',
    title: 'My New Page',
    description: 'Description of my new page.',
  },
];
```

Then run `npm run export:static` again.

#### Modifying Meta Tags

Edit the `buildPageHtml` function in `generate-static-pages.mjs` to customize meta tags, Open Graph tags, or add additional head elements.

#### Changing Output Directory

Modify the `outputDir` variable in `generate-static-pages.mjs`:

```javascript
const outputDir = path.join(__dirname, 'your-custom-folder');
```

## Browser Support

The static HTML pages support:

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## Performance

- **Fast loading** - Code splitting and lazy loading minimize initial load time
- **Optimized assets** - Minified CSS/JS and compressed images
- **CDN-ready** - Static files can be served from a CDN
- **Caching** - Assets use content hashes for cache busting
- **Lighthouse scores** - High performance, accessibility, and SEO scores

## Limitations

1. **Server-side rendering** - This is not true SSR; React still renders client-side
2. **Dynamic routes** - Routes with parameters (e.g., `/player/:id`) need separate exports
3. **API calls** - Real API integration will only work at runtime
4. **Browser navigation** - Direct URL navigation won't work without server configuration or a routing solution

## Troubleshooting

### Pages show blank screen

- Check browser console for JavaScript errors
- Ensure you're viewing through a web server, not directly from filesystem
- Verify all asset paths are correct (should be relative: `./assets/...`)

### Styles not loading

- Check that CSS files are in the `assets/` folder
- Verify the CSS `<link>` tags in the HTML have correct paths
- Clear browser cache

### JavaScript not working

- Check browser console for errors
- Ensure JavaScript modules are enabled (modern browsers only)
- Verify the script tags have `type="module"` attribute

### Navigation doesn't work

- Static pages use MemoryRouter, so URL doesn't change
- Use the page index or individual HTML files for different pages
- For dynamic navigation, deploy the SPA version instead

## Contributing

To improve the static HTML export feature:

1. Test each generated page thoroughly
2. Report any styling or functionality issues
3. Suggest improvements to the generation script
4. Add better documentation for specific use cases

## License

Same as the main Liga template project.

## Support

For issues or questions about static HTML export, please refer to:
- This documentation file
- The `static-html/README.md` file
- The project's main README.md file
