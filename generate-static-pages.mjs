import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pages = [
  {
    slug: 'club-summary',
    route: '/',
    title: 'Club Summary',
    description: 'Club statistics, league standings, live reports, and attendance.',
    isDefault: true,
  },
  {
    slug: 'game-summary',
    route: '/game-summary',
    title: 'Game Summary',
    description: 'Match analytics with possession, shots, cards, and player metrics.',
  },
  {
    slug: 'championships',
    route: '/championships',
    title: 'Championships',
    description: 'Tournament overview, tables, fixtures, and live brackets.',
  },
  {
    slug: 'league-overview',
    route: '/league-overview',
    title: 'League Overview',
    description: 'Complete league picture with rankings, forms, and stats.',
  },
  {
    slug: 'fans-community',
    route: '/fans-community',
    title: 'Fans Community',
    description: 'Fan engagement hub with chats, highlights, and polls.',
  },
  {
    slug: 'statistics',
    route: '/statistics',
    title: 'Statistics',
    description: 'Advanced analytics, KPIs, and comparative data.',
  },
  {
    slug: 'match-summary',
    route: '/match-summary',
    title: 'Match Summary',
    description: 'Detailed recap with data visualizations and commentary.',
  },
  {
    slug: 'match-overview',
    route: '/match-overview',
    title: 'Match Overview',
    description: 'Upcoming fixtures, odds, match cards, and deadlines.',
  },
  {
    slug: 'player-profile',
    route: '/player-profile',
    title: 'Player Profile',
    description: 'Player bio, performance trends, and scouting data.',
  },
  {
    slug: 'schedule',
    route: '/schedule',
    title: 'Schedule',
    description: 'Calendar with matches, training sessions, and events.',
  },
  {
    slug: 'tickets',
    route: '/tickets',
    title: 'Tickets',
    description: 'Smart ticketing with seat maps, offers, and filters.',
  },
  {
    slug: 'football-store',
    route: '/football-store',
    title: 'Football Store',
    description: 'Club store with kits, accessories, and team collections.',
  },
  {
    slug: 'brand-store',
    route: '/brand-store',
    title: 'Brand Store',
    description: 'Lifestyle store for premium drops and collaborations.',
  },
  {
    slug: 'product',
    route: '/product',
    title: 'Product Detail',
    description: 'Product hero page with rich media, specs, and reviews.',
  },
  {
    slug: 'login',
    route: '/login',
    title: 'Login',
    description: 'Secure authentication with modern UI.',
  },
  {
    slug: 'sign-up',
    route: '/sign-up',
    title: 'Sign Up',
    description: 'Self-service onboarding and profile creation.',
  },
  {
    slug: 'settings',
    route: '/settings',
    title: 'Settings',
    description: 'Preferences for theme, notifications, and security.',
  },
  {
    slug: 'page-not-found',
    route: '/404',
    title: '404 - Page Not Found',
    description: 'Friendly error state for unknown routes.',
  },
];

const distDir = path.join(__dirname, 'dist');
const distIndexPath = path.join(distDir, 'index.html');

if (!fs.existsSync(distIndexPath)) {
  console.error('✖ Missing dist/index.html. Please run `npm run build` first.');
  process.exit(1);
}

const templateHtml = fs.readFileSync(distIndexPath, 'utf-8');

const normalizePaths = (snippet) =>
  snippet
    .replace(/href="\/assets\//g, 'href="./assets/')
    .replace(/src="\/assets\//g, 'src="./assets/')
    .replace(/href="\/favicon\.ico"/g, 'href="./favicon.ico"')
    .replace(/href="\/robots\.txt"/g, 'href="./robots.txt"')
    .replace(/href="\/placeholder\.svg"/g, 'href="./placeholder.svg"');

const cssLinks = Array.from(templateHtml.matchAll(/<link[^>]+rel="stylesheet"[^>]*>/g)).map((match) =>
  normalizePaths(match[0])
);

const modulePreloads = Array.from(templateHtml.matchAll(/<link[^>]+rel="modulepreload"[^>]*>/g)).map((match) =>
  normalizePaths(match[0])
);

const moduleScripts = Array.from(templateHtml.matchAll(/<script[^>]+type="module"[^>]*><\/script>/g)).map((match) =>
  normalizePaths(match[0])
);

const outputDir = path.join(__dirname, 'static-html');
if (fs.existsSync(outputDir)) {
  fs.rmSync(outputDir, { recursive: true, force: true });
}
fs.mkdirSync(outputDir, { recursive: true });

const copyIfExists = (filename) => {
  const src = path.join(distDir, filename);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, path.join(outputDir, filename));
  }
};

copyIfExists('favicon.ico');
copyIfExists('robots.txt');
copyIfExists('placeholder.svg');

const distAssetsPath = path.join(distDir, 'assets');
const outputAssetsPath = path.join(outputDir, 'assets');
fs.cpSync(distAssetsPath, outputAssetsPath, { recursive: true });

const loaderMarkup = `      <div class="static-loader">
        <div class="static-loader__spinner"></div>
        <p>Loading Liga dashboard...</p>
      </div>`;

const buildPageHtml = (page) => {
  const description = page.description || `${page.title} - Liga Football Template`;
  const metadata = templateHtml
    .replace(/<title>[\s\S]*?<\/title>/i, `<title>${page.title} - Liga Football Template<\/title>`)
    .replace(
      /<meta name="description" content="[^"]*"\s*\/>/i,
      `<meta name="description" content="${description}"/>`
    )
    .replace(
      /<meta property="og:title" content="[^"]*"\s*\/>/i,
      `<meta property="og:title" content="${page.title} - Liga Football Template"/>`
    )
    .replace(
      /<meta property="og:description" content="[^"]*"\s*\/>/i,
      `<meta property="og:description" content="${description}"/>`
    );

  const headWithAssets = metadata
    .replace(/<link[^>]+rel="stylesheet"[^>]*>/g, '')
    .replace(/<link[^>]+rel="modulepreload"[^>]*>/g, '')
    .replace(/<script[^>]+type="module"[^>]*><\/script>/g, '');

  const stylesheetsMarkup = cssLinks.join('\n    ');
  const preloadsMarkup = modulePreloads.join('\n    ');
  const scriptsMarkup = moduleScripts.join('\n    ');

  const routeScript = `    <script>
      window.__STATIC_ROUTE__ = '${page.route}';
      window.__INITIAL_ROUTE__ = '${page.route}';
      window.__STATIC_PAGE__ = '${page.slug}';
    <\/script>`;

  const loaderStyles = `    <style>
      :root {
        color-scheme: dark;
      }
      .static-loader {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        font-family: 'Inter', 'Segoe UI', system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
        background: radial-gradient(circle at top, rgba(59, 130, 246, 0.2), transparent 55%);
        color: #fff;
      }
      .static-loader__spinner {
        width: 48px;
        height: 48px;
        border-radius: 999px;
        border: 3px solid rgba(255, 255, 255, 0.15);
        border-top-color: rgba(59, 130, 246, 0.85);
        animation: spin 0.9s linear infinite;
      }
      @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
    </style>`;

  const injection = [
    loaderStyles,
    stylesheetsMarkup,
    preloadsMarkup,
    routeScript,
    scriptsMarkup,
  ]
    .filter(Boolean)
    .join('\n    ');

  return headWithAssets
    .replace('</head>', `    ${injection}\n  </head>`)
    .replace(
      '<div id="root"></div>',
      `<div id="root">\n${loaderMarkup}\n    </div>`
    );
};

const timestamp = new Date().toISOString();

pages.forEach((page) => {
  const html = buildPageHtml(page);
  const fileName = `${page.slug}.html`;
  fs.writeFileSync(path.join(outputDir, fileName), html, 'utf8');
  if (page.isDefault) {
    fs.writeFileSync(path.join(outputDir, 'index.html'), html, 'utf8');
  }
  console.log(`✓ Generated ${fileName}`);
});

const manifest = {
  generatedAt: timestamp,
  totalPages: pages.length,
  pages,
};

fs.writeFileSync(path.join(outputDir, 'routes.json'), JSON.stringify(manifest, null, 2));

const readme = `# Liga Template - Static HTML Export

This folder contains fully static, production-ready HTML exports for every Liga template page.

## Pages

${pages
  .map((page) => `- **${page.title}** → ${page.slug}.html (route: ${page.route})`)
  .join('\n')}

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

Generated at ${timestamp}.
`;

fs.writeFileSync(path.join(outputDir, 'README.md'), readme);

const pageCards = pages
  .map(
    (page) => `
      <a class="card" href="${page.slug}.html">
        <p class="card-title">${page.title}</p>
        <p class="card-route">${page.route}</p>
        <p class="card-desc">${page.description}</p>
      </a>`
  )
  .join('\n');

const indexPage = `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Liga Template - Static Pages Directory</title>
  <style>
    :root {
      color-scheme: dark;
      font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: #050913;
      color: #f8fafc;
    }
    body {
      margin: 0;
      padding: clamp(2rem, 5vw, 4rem);
      min-height: 100vh;
      background: radial-gradient(circle at top, rgba(59, 130, 246, 0.15), transparent 60%);
    }
    .grid {
      display: grid;
      gap: 1.5rem;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      margin-top: 2rem;
    }
    .card {
      display: block;
      padding: 1.5rem;
      border-radius: 1rem;
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.1);
      text-decoration: none;
      color: inherit;
      transition: transform 0.2s ease, border 0.2s ease, background 0.2s ease;
    }
    .card:hover {
      transform: translateY(-4px);
      border-color: rgba(59, 130, 246, 0.6);
      background: rgba(15, 23, 42, 0.75);
    }
    .card-title {
      font-size: 1.25rem;
      font-weight: 600;
      margin-bottom: 0.35rem;
    }
    .card-route {
      font-size: 0.85rem;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      color: #38bdf8;
      margin-bottom: 0.75rem;
    }
    .card-desc {
      color: #cbd5f5;
      font-size: 0.95rem;
      line-height: 1.5;
    }
    h1 {
      font-weight: 700;
      font-size: clamp(2.5rem, 4vw, 3.25rem);
      margin-bottom: 0.5rem;
    }
    p.subtitle {
      color: #94a3b8;
      margin-bottom: 3rem;
      max-width: 640px;
      font-size: 1.05rem;
    }
  </style>
</head>
<body>
  <main>
    <h1>🏆 Liga Template</h1>
    <p class="subtitle">Static HTML export of every Envato Liga dashboard page (${pages.length} total).</p>
    <section class="grid">
      ${pageCards}
    </section>
  </main>
</body>
</html>`;

fs.writeFileSync(path.join(outputDir, 'page-index.html'), indexPage);

console.log('✓ Generated routes.json');
console.log('✓ Generated README.md');
console.log('✓ Generated page-index.html');
console.log('\n✨ Static HTML export ready in static-html/');
