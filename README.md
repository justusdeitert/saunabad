# Saunabad Berlin

[![Eleventy](https://img.shields.io/badge/Eleventy-3.x-black?logo=eleventy)](https://www.11ty.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

A modern, performant static website for **Saunabad Berlin** – a cozy neighborhood sauna & wellness center located in Prenzlauer Berg, Berlin.

🌐 **Live Site:** [saunabad-berlin.de](https://www.saunabad-berlin.de)

🧪 **Preview:** [saunabad.justusdeitert.de](https://saunabad.justusdeitert.de)

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

## 📁 Project Structure

```
saunabad/
├── dist/                    # Build output (generated)
├── lib/                     # Build utilities & config helpers
│   ├── shortcodes/
│   │   └── image.ts         # Responsive image shortcode
│   ├── transforms/
│   │   └── htmlmin.ts       # HTML minification
│   └── types/
│       ├── eleventy.d.ts    # Eleventy type definitions
│       └── highway.d.ts     # Highway.js type definitions
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
│       └── _tailwind.scss   # Tailwind config & imports
├── views/
│   ├── _data/               # Global data files (TypeScript)
│   │   ├── faqs.ts          # FAQ content
│   │   ├── gallery.ts       # Gallery images
│   │   └── meta.ts          # SEO metadata
│   ├── _includes/           # Reusable template partials
│   │   ├── components/      # UI components
│   │   │   └── accordion.liquid
│   │   ├── icons/           # SVG icon partials
│   │   ├── sections/        # Page sections
│   │   ├── footer.liquid
│   │   └── nav.liquid
│   ├── layouts/
│   │   └── base.liquid      # Base HTML template
│   ├── index.liquid         # Homepage
│   ├── datenschutz.liquid   # Privacy policy
│   ├── impressum.liquid     # Legal notice
│   └── sitemap.liquid       # XML sitemap
├── eleventy.config.ts       # Eleventy configuration
├── postcss.config.ts        # PostCSS configuration
├── tsconfig.json            # TypeScript configuration
└── package.json
```

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

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `yarn dev` | Start development server with hot reload |
| `yarn build` | Create production build |
| `yarn serve` | Serve production build locally |
| `yarn dev:11ty` | Run only Eleventy in dev mode |
| `yarn dev:postcss` | Run only PostCSS in watch mode |
| `yarn dev:esbuild` | Run only esbuild in watch mode |

## 🎨 Color Palette

The project uses a custom color palette defined in [_tailwind.scss](src/styles/_tailwind.scss):

| Color | Default | Usage |
|-------|---------|-------|
| 🔵 Blue | `#468AA4` | Primary brand color |
| 🟡 Yellow | `#FFD76E` | Accent color |
| 🟢 Green | `#7BB665` | Secondary accent |
| 🟠 Shilo | `#E8C0B1` | Warm accent |

## 🔧 Configuration

### Eleventy

Configuration is in [eleventy.config.ts](eleventy.config.ts):
- Custom `{% image %}` shortcode for responsive images (see [lib/shortcodes/image.ts](lib/shortcodes/image.ts))
- Cache-busting `{% hash %}` shortcode
- HTML minification transform (production only, see [lib/transforms/htmlmin.ts](lib/transforms/htmlmin.ts))
- Navigation plugin

### Tailwind CSS

Tailwind 4.x is configured via the `@theme` directive in [_tailwind.scss](src/styles/_tailwind.scss) — no separate config file needed.

### TypeScript

TypeScript is configured for ES Modules with strict type checking. See [tsconfig.json](tsconfig.json).

## 📝 Code Style

- **Indentation:** Tabs
- **Quotes:** Single quotes
- **Semicolons:** Required
- **Module System:** ES Modules

## 📄 License

This project uses a **dual license**:

- **Code** (templates, scripts, styles, config): [MIT License](LICENSE)
- **Content** (images, texts, brand assets): © Saunabad GbR – All Rights Reserved

See the [LICENSE](LICENSE) file for full details.

## 🙏 Acknowledgments

- [Eleventy](https://www.11ty.dev/) – Static site generator
- [Tailwind CSS](https://tailwindcss.com/) – Utility-first CSS framework
- [GSAP](https://greensock.com/gsap/) – Animation library
- [Highway.js](https://highway.js.org/) – Page transitions
- [Swiper](https://swiperjs.com/) – Touch slider
