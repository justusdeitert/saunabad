# Saunabad Berlin

A modern, performant static website for **Saunabad Berlin** – a cozy neighborhood sauna & wellness center located in Prenzlauer Berg, Berlin.

🌐 **Live Site:** [saunabad-berlin.de](https://www.saunabad-berlin.de)

---

## ✨ Features

- **Static Site Generation** with [Eleventy 3.x](https://www.11ty.dev/)
- **Liquid Templating** for flexible, reusable components
- **Tailwind CSS 4.x** for utility-first styling
- **TypeScript** for type-safe JavaScript
- **GSAP Animations** for smooth, performant animations
- **Highway.js** for seamless page transitions
- **Swiper** for touch-friendly image galleries
- **Responsive Images** with automatic WebP/JPEG generation
- **HTML Minification** in production builds
- **SEO Optimized** with OpenGraph & Twitter meta tags

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| Static Site Generator | Eleventy 3.x |
| Templating | Liquid |
| Styling | Tailwind CSS 4.x, SCSS, PostCSS |
| Scripts | TypeScript, ES Modules |
| Animations | GSAP |
| Page Transitions | Highway.js |
| Gallery | Swiper |
| Build Tools | esbuild, PostCSS CLI |
| Package Manager | Yarn |

---

## 📁 Project Structure

```
saunabad/
├── dist/                    # Build output (generated)
├── src/
│   ├── images/              # Source images
│   ├── scripts/
│   │   └── main.ts          # Main TypeScript entry
│   └── styles/
│       ├── main.scss        # Main SCSS entry
│       ├── _accordion.scss  # Accordion component styles
│       ├── _font.scss       # Typography styles
│       ├── _general.scss    # General styles
│       ├── _swiper.scss     # Swiper overrides
│       └── _tailwind.scss   # Tailwind imports
├── views/
│   ├── data/                # Global data files
│   │   ├── faqs.ts          # FAQ content
│   │   ├── gallery.ts       # Gallery images
│   │   └── meta.ts          # SEO metadata
│   ├── includes/
│   │   ├── icons/           # SVG icon partials
│   │   └── partials/        # Reusable components
│   │       ├── accordion.liquid
│   │       ├── footer.liquid
│   │       ├── nav.liquid
│   │       └── sections/    # Page sections
│   ├── layouts/
│   │   └── base.liquid      # Base HTML template
│   ├── index.liquid         # Homepage
│   ├── datenschutz.liquid   # Privacy policy
│   ├── impressum.liquid     # Legal notice
│   └── sitemap.liquid       # XML sitemap
├── types/                   # TypeScript type definitions
├── utils/                   # Utility functions
├── colors.json              # Custom color palette
├── eleventy.config.ts       # Eleventy configuration
├── postcss.config.ts        # PostCSS configuration
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [Yarn](https://yarnpkg.com/) package manager

### Installation

```bash
# Install dependencies
yarn install
```

### Development

```bash
# Start development server with hot reload
yarn dev
```

This runs three parallel processes:
- **Eleventy** – watches templates and rebuilds HTML
- **PostCSS** – compiles SCSS with Tailwind and watches for changes
- **esbuild** – bundles TypeScript with sourcemaps

### Production Build

```bash
# Create optimized production build
yarn build
```

Production builds include:
- HTML minification
- CSS minification via cssnano
- JavaScript minification via esbuild
- Optimized responsive images (WebP + JPEG)

### Preview Production Build

```bash
# Serve the dist folder locally
yarn serve
```

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `yarn dev` | Start development server with hot reload |
| `yarn build` | Create production build |
| `yarn serve` | Serve production build locally |
| `yarn dev:11ty` | Run only Eleventy in dev mode |
| `yarn dev:postcss` | Run only PostCSS in watch mode |
| `yarn dev:esbuild` | Run only esbuild in watch mode |

---

## 🎨 Color Palette

The project uses a custom color palette defined in [colors.json](colors.json):

| Color | Default | Usage |
|-------|---------|-------|
| 🔵 Blue | `#468AA4` | Primary brand color |
| 🟡 Yellow | `#FFD76E` | Accent color |
| 🟢 Green | `#7BB665` | Secondary accent |

---

## 🔧 Configuration

### Eleventy

Configuration is in [eleventy.config.ts](eleventy.config.ts):
- Custom `{% image %}` shortcode for responsive images
- Cache-busting `{% hash %}` shortcode
- HTML minification transform (production only)
- Navigation plugin

### Tailwind CSS

Tailwind 4.x is configured via PostCSS with custom colors imported from `colors.json`.

### TypeScript

TypeScript is configured for ES Modules with strict type checking. See [tsconfig.json](tsconfig.json).

---

## 📝 Code Style

- **Indentation:** Tabs
- **Quotes:** Single quotes
- **Semicolons:** Required
- **Module System:** ES Modules

---

## 📄 License

This project is licensed under the MIT License.

---

## 🙏 Acknowledgments

- [Eleventy](https://www.11ty.dev/) – Static site generator
- [Tailwind CSS](https://tailwindcss.com/) – Utility-first CSS framework
- [GSAP](https://greensock.com/gsap/) – Animation library
- [Highway.js](https://highway.js.org/) – Page transitions
- [Swiper](https://swiperjs.com/) – Touch slider
