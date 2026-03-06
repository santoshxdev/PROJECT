/*!
 * DigitalHub Store – script.js
 * 150+ Products | Pagination | Sort | Search | Filter | Dark/Light Toggle
 */

// ── COMPACT PRODUCT DEFINITIONS ──────────────────────────────────────────────
// [id, title, category, price, rating, emoji, colorClass, desc, isNew]
var RAW = [
    // ── UI Kits (40) ─────────────────────────────────────────────────────────
    [1, 'Aurora UI Kit', 'UI Kits', 49, 4.9, '🎨', 'grad-purple', '200+ components for Figma with auto-layout, dark/light modes and a complete design-token system.', true],
    [2, 'Glassmorphism UI Pack', 'UI Kits', 39, 4.8, '💎', 'grad-indigo', '80+ frosted-glass components for Figma and CSS with gradient backdrop variants.', false],
    [3, 'Icon Vault Pro', 'UI Kits', 24, 4.8, '🎯', 'grad-violet', '5,000+ SVG icons in 6 styles – line, solid, duotone, colour, bulk and broken.', false],
    [4, 'NeonFlow Design System', 'UI Kits', 69, 4.9, '✨', 'grad-fuchsia', 'Full neon-themed design system: 300+ components, motion specs and token library.', true],
    [5, 'Minimal Cards Kit', 'UI Kits', 19, 4.6, '🃏', 'grad-slate', '50 minimalist card layouts for dashboards, e-commerce and portfolios.', false],
    [6, 'Mobile UI Kit Pro', 'UI Kits', 59, 4.9, '📱', 'grad-blue', 'Complete iOS/Android UI kit – 400+ screens and 600+ components.', true],
    [7, 'Dashboard UI System', 'UI Kits', 79, 4.8, '📊', 'grad-navy', 'Enterprise dashboard kit with 250+ widgets, charts and table variants.', false],
    [8, 'Illustration Pack Vol.1', 'UI Kits', 29, 4.7, '🖼️', 'grad-amber', '120 handcrafted SVG illustrations in flat and outline styles.', false],
    [9, 'Form Elements Kit', 'UI Kits', 15, 4.5, '📝', 'grad-teal', 'Every form element you need: inputs, selects, toggles, checkboxes and more.', false],
    [10, 'Avatar & Avatar Group', 'UI Kits', 9, 4.6, '👤', 'grad-green', '300+ diverse avatar illustrations + group layout presets.', false],
    [11, 'SaaS Components Kit', 'UI Kits', 55, 4.8, '⚡', 'grad-purple', 'Pricing tables, testimonials, feature grids and all SaaS page blocks.', true],
    [12, 'Typography System', 'UI Kits', 12, 4.7, '🔤', 'grad-indigo', '20 type scales, font pairings and responsive text utility set.', false],
    [13, 'Color Palette Pro', 'UI Kits', 14, 4.8, '🎨', 'grad-rose', '500+ curated swatches, 40 full palettes and Figma color-style library.', false],
    [14, 'Ecommerce UI Kit', 'UI Kits', 65, 4.9, '🛍️', 'grad-blue2', '300+ product, cart, checkout and account screens for online stores.', true],
    [15, 'Landing Page Kit', 'UI Kits', 45, 4.7, '🚀', 'grad-violet', '25 complete landing page Figma templates covering SaaS, apps and agencies.', false],
    [16, 'Navigation Patterns', 'UI Kits', 18, 4.6, '🧭', 'grad-navy', '50+ nav bar, sidebar, breadcrumb and tab-bar layout variants.', false],
    [17, 'Dark Mode UI Kit', 'UI Kits', 44, 4.8, '🌙', 'grad-slate', '150+ dark-mode-first components with glow and neon accents.', false],
    [18, '3D Icon Pack', 'UI Kits', 34, 4.9, '🔮', 'grad-fuchsia', '200 clay-style 3D icons rendered in Blender, available as PNG and SVG.', true],
    [19, 'social Media Templates', 'UI Kits', 22, 4.5, '📣', 'grad-amber', 'Instagram, LinkedIn and Twitter post templates in Figma.', false],
    [20, 'Wireframe Kit', 'UI Kits', 16, 4.6, '✏️', 'grad-green', '300 low-fidelity wireframe components for rapid prototyping.', false],
    [21, 'Animation UI Kit', 'UI Kits', 48, 4.7, '🎞️', 'grad-cyan', 'Micro-interaction specs and Lottie animation files for 80+ UI states.', false],
    [22, 'Charts & Dataviz Kit', 'UI Kits', 36, 4.8, '📈', 'grad-teal', '60+ chart and data-vis templates – bar, line, pie, donut and scatter.', true],
    [23, 'Accessibility UI Kit', 'UI Kits', 28, 4.9, '♿', 'grad-blue', 'WCAG-AA compliant components with keyboard-nav and screen-reader notes.', false],
    [24, 'Crypto Dashboard Kit', 'UI Kits', 52, 4.7, '₿', 'grad-violet', 'Portfolio, trade and analytics screens for a crypto/DeFi product.', false],
    [25, 'Admin Panel Kit', 'UI Kits', 58, 4.8, '🗂️', 'grad-stone', 'Full admin panel: user tables, role management, settings and CRUD views.', false],
    [26, 'Onboarding Screens Kit', 'UI Kits', 26, 4.6, '🎉', 'grad-rose', '40 onboarding and empty-state screen designs for mobile and web.', false],
    [27, 'Blog & Editorial UI', 'UI Kits', 20, 4.5, '📰', 'grad-navy', 'Article layouts, reading progress bars and comment section components.', false],
    [28, 'ChatUI Kit', 'UI Kits', 32, 4.7, '💬', 'grad-indigo', 'Chat bubbles, reactions, voice-note UI, thread layouts and notification panels.', true],
    [29, 'Photo Gallery Kit', 'UI Kits', 18, 4.6, '🖼️', 'grad-green', 'Grid, masonry and lightbox gallery templates in Figma.', false],
    [30, 'Finance App UI', 'UI Kits', 62, 4.8, '💳', 'grad-emerald', 'Banking, budgeting and investment screen kit – 200+ mobile screens.', true],
    [31, 'Map & Location Kit', 'UI Kits', 24, 4.5, '📍', 'grad-teal', 'Maps, markers, search panels and nearby-place card components.', false],
    [32, 'Notification UI Kit', 'UI Kits', 14, 4.6, '🔔', 'grad-amber', 'Toasts, banners, badge and notification-center designs.', false],
    [33, 'CRM UI System', 'UI Kits', 72, 4.9, '🤝', 'grad-blue2', 'Lead pipeline, contact cards, activity feed and deal-room layouts.', true],
    [34, 'Podcast App UI', 'UI Kits', 22, 4.5, '🎙️', 'grad-slate', 'Player screen, episode list, discovery and subscription flows.', false],
    [35, 'Recipe App UI', 'UI Kits', 16, 4.4, '🍳', 'grad-lime', 'Ingredient cards, step-by-step cook view and meal planner screens.', false],
    [36, 'Fitness App UI', 'UI Kits', 28, 4.7, '💪', 'grad-red', 'Workout tracker, progress charts and coach-chat screens.', false],
    [37, 'Travel Booking Kit', 'UI Kits', 44, 4.7, '✈️', 'grad-sky', 'Flight, hotel and experience booking flows in Figma.', true],
    [38, 'Real Estate UI Kit', 'UI Kits', 54, 4.8, '🏠', 'grad-emerald', 'Property listings, map search and agent profile screens.', false],
    [39, 'Video Platform UI', 'UI Kits', 38, 4.6, '🎬', 'grad-rose', 'Video player, channel page, comment section and creator dashboard.', false],
    [40, 'Design Tokens Library', 'UI Kits', 21, 4.7, '🔑', 'grad-purple2', '600+ design tokens: colour, spacing, radius, shadow and motion.', false],

    // ── E-books (40) ─────────────────────────────────────────────────────────
    [41, 'Mastering React in 2025', 'E-books', 29, 4.8, '📘', 'grad-green', 'Complete React guide – hooks, context, performance patterns and production architecture.', false],
    [42, 'Zero to TypeScript', 'E-books', 35, 4.9, '📗', 'grad-cyan', 'From JS basics to advanced generics, decorators and monorepo setups.', false],
    [43, 'The Developer Mindset', 'E-books', 0, 4.6, '🧠', 'grad-teal', 'Free: build better habits and problem-solving strategies as a developer.', false],
    [44, 'CSS Architecture Handbook', 'E-books', 24, 4.7, '📙', 'grad-blue', 'BEM, CSS Modules, Tailwind and design-token strategies at scale.', false],
    [45, 'Node.js in Production', 'E-books', 32, 4.8, '📕', 'grad-red', 'Clustering, PM2, Docker, health checks and zero-downtime deploys.', true],
    [46, 'Python for Data Science', 'E-books', 27, 4.7, '🐍', 'grad-emerald', 'NumPy, Pandas, Matplotlib and sci-kit learn with real datasets.', false],
    [47, 'Fullstack Fundamentals', 'E-books', 39, 4.9, '🌐', 'grad-blue2', 'HTML/CSS/JS → Node → SQL → Docker → CI/CD in one cohesive guide.', true],
    [48, 'System Design Primer', 'E-books', 44, 4.9, '🏗️', 'grad-slate', 'Scalable architecture: load balancers, caches, queues and DB sharding.', false],
    [49, 'Web Performance Guide', 'E-books', 22, 4.8, '⚡', 'grad-amber', 'Core Web Vitals, lazy loading, code splitting and CDN strategies.', false],
    [50, 'Git & GitHub Mastery', 'E-books', 18, 4.7, '🐙', 'grad-stone', 'Branching, rebasing, PRs, Actions and team workflow best practices.', false],
    [51, 'UX Research Methods', 'E-books', 26, 4.6, '🔍', 'grad-violet', 'Interviews, usability testing, surveys and synthesis frameworks.', false],
    [52, 'PostgreSQL Deep Dive', 'E-books', 33, 4.8, '🐘', 'grad-green', 'Indexes, query planning, JSONB, partitioning and performance tuning.', true],
    [53, 'GraphQL in Practice', 'E-books', 28, 4.7, '◈', 'grad-purple', 'Schema design, resolvers, subscriptions and Apollo caching.', false],
    [54, 'Docker & Kubernetes', 'E-books', 38, 4.8, '🐳', 'grad-blue', 'Containers, pods, services, helm charts and production Kubernetes.', false],
    [55, 'Clean Code Principles', 'E-books', 21, 4.9, '✨', 'grad-lime', 'Naming, functions, error handling and code-review culture.', false],
    [56, 'REST API Design Guide', 'E-books', 19, 4.7, '🔗', 'grad-cyan', 'Versioning, auth, pagination, rate limiting and OpenAPI docs.', false],
    [57, 'Security for Developers', 'E-books', 31, 4.9, '🔒', 'grad-rose', 'OWASP Top 10, JWT pitfalls, CSRF, XSS and dependency scanning.', true],
    [58, 'Figma for Developers', 'E-books', 16, 4.6, '🖌️', 'grad-indigo', 'Inspect, extract tokens, connect to Storybook and collaborate with designers.', false],
    [59, 'Building SaaS Products', 'E-books', 42, 4.8, '💼', 'grad-navy', 'Ideation to launch: stack choices, billing, onboarding and growth loops.', true],
    [60, 'Machine Learning Basics', 'E-books', 36, 4.7, '🤖', 'grad-fuchsia', 'Supervised/unsupervised learning, neural nets and model evaluation with Python.', false],
    [61, 'Regex Mastery', 'E-books', 12, 4.5, '🔎', 'grad-amber', 'All regex features explained with 200+ real-world patterns.', false],
    [62, 'Linux Command Line', 'E-books', 15, 4.7, '🐧', 'grad-green', 'Bash scripting, cron, permissions, networking and sysadmin tasks.', false],
    [63, 'Vue.js 3 Complete Guide', 'E-books', 27, 4.8, '💚', 'grad-emerald', 'Composition API, Pinia, Vue Router and SSR with Nuxt 3.', false],
    [64, 'Svelte & SvelteKit', 'E-books', 24, 4.7, '🔥', 'grad-red', 'Reactivity model, stores, routing and edge deployment.', false],
    [65, 'The Freelance Developer', 'E-books', 19, 4.6, '💰', 'grad-slate', 'Finding clients, pricing, contracts, invoicing and building a portfolio.', false],
    [66, 'Algorithms & Data Structures', 'E-books', 35, 4.9, '📊', 'grad-blue', 'Big-O, sorting, trees, graphs and dynamic programming with JS examples.', false],
    [67, 'Next.js Full-Stack', 'E-books', 33, 4.8, '▲', 'grad-stone', 'App Router, Server Actions, auth, SEO and Vercel deployment.', true],
    [68, 'Tailwind CSS Master Class', 'E-books', 22, 4.7, '💨', 'grad-sky', 'Utility-first CSS, custom themes, plugins and DX best practices.', false],
    [69, 'Startup CTO Handbook', 'E-books', 47, 4.8, '🚀', 'grad-violet', 'Tech stack choices, hiring engineers, managing tech debt and scaling infra.', true],
    [70, 'Design Systems at Scale', 'E-books', 39, 4.8, '📐', 'grad-purple2', 'Building, documenting and adopting a design system across a large org.', false],
    [71, 'Accessibility Deep Dive', 'E-books', 17, 4.7, '♿', 'grad-teal', 'ARIA, focus management, colour contrast and assistive tech testing.', false],
    [72, 'Testing JavaScript Apps', 'E-books', 28, 4.8, '🧪', 'grad-green', 'Jest, Testing Library, Playwright, MSW and coverage strategies.', false],
    [73, 'AWS for Developers', 'E-books', 41, 4.7, '☁️', 'grad-blue2', 'EC2, S3, Lambda, RDS, CloudFront and IAM in plain English.', false],
    [74, 'Web3 & Solidity', 'E-books', 44, 4.6, '⛓️', 'grad-fuchsia', 'Smart contracts, ERC-20, wallets, gas and dApp architecture.', false],
    [75, 'Career Growth for Devs', 'E-books', 0, 4.5, '📈', 'grad-lime', 'Free: navigating promotions, mentorship and influence as a developer.', false],
    [76, 'Animation with CSS & JS', 'E-books', 20, 4.6, '🎞️', 'grad-cyan', 'Keyframes, spring physics, GSAP and scroll-driven animations.', false],
    [77, 'Microservices Patterns', 'E-books', 37, 4.8, '🔀', 'grad-navy', 'Event sourcing, CQRS, saga pattern and inter-service communication.', true],
    [78, 'Soft Skills for Engineers', 'E-books', 16, 4.6, '🗣️', 'grad-rose', 'Communication, negotiation, conflict resolution and leadership.', false],
    [79, 'Monetising Open Source', 'E-books', 18, 4.5, '💵', 'grad-amber', 'Sponsorships, dual licensing, SaaS wrappers and consulting.', false],
    [80, 'The Indie Hacker Playbook', 'E-books', 25, 4.7, '🦄', 'grad-purple', 'Validated ideas, building in public, launch strategies and retention.', false],

    // ── Templates (40) ───────────────────────────────────────────────────────
    [81, 'SaaS Dashboard Template', 'Templates', 79, 4.9, '📊', 'grad-blue', 'Next.js 14, Tailwind, shadcn/ui – auth, charts, tables, dark mode.', false],
    [82, 'Portfolio Website Template', 'Templates', 29, 4.7, '🖥️', 'grad-navy', 'Animated hero, project modals, skill bars, contact form – pure HTML/CSS/JS.', false],
    [83, 'Startup Landing Pack', 'Templates', 59, 4.8, '🚀', 'grad-slate', '10 landing page templates for SaaS, apps and agencies.', false],
    [84, 'Blog Platform Template', 'Templates', 39, 4.7, '📰', 'grad-stone', 'Next.js 14 blog with MDX, tags, search and RSS feed.', false],
    [85, 'E-commerce Store Template', 'Templates', 89, 4.9, '🛍️', 'grad-blue2', 'Full Shopify/Next.js store: product pages, cart, checkout and account.', true],
    [86, 'Restaurant Website', 'Templates', 24, 4.5, '🍽️', 'grad-emerald', 'Menu, reservation form, gallery and Google Maps – HTML/CSS/JS.', false],
    [87, 'Agency Website Template', 'Templates', 44, 4.7, '🏢', 'grad-rose', 'Multi-page agency site with case studies and team section.', false],
    [88, 'Event Landing Page', 'Templates', 19, 4.6, '🎟️', 'grad-amber', 'Countdown timer, speaker cards, schedule and ticketing integration.', false],
    [89, 'Job Board Template', 'Templates', 54, 4.8, '💼', 'grad-violet', 'Filterable listings, apply flow, employer dashboard – Next.js.', true],
    [90, 'Documentation Site', 'Templates', 32, 4.7, '📚', 'grad-teal', 'Docusaurus-style doc site with versioning, search and dark mode.', false],
    [91, 'Podcast Website Template', 'Templates', 22, 4.5, '🎙️', 'grad-sky', 'Episode list, Spotify embed, Patreon integration.', false],
    [92, 'Non-Profit Template', 'Templates', 0, 4.6, '❤️', 'grad-green', 'Free: donation form, volunteer sign-up and events calendar.', false],
    [93, 'Real Estate Template', 'Templates', 64, 4.8, '🏡', 'grad-purple', 'Property listings with map search, agent profiles and CRM hooks.', true],
    [94, 'Mobile App Landing', 'Templates', 18, 4.6, '📱', 'grad-indigo', 'App-store app landing page with feature showcase and download CTA.', false],
    [95, 'Newsletter Template', 'Templates', 12, 4.5, '📧', 'grad-cyan', 'Responsive HTML email template with 6 layout variants.', false],
    [96, 'Crypto Project Site', 'Templates', 34, 4.7, '₿', 'grad-fuchsia', 'Token homepage, whitepaper section, roadmap and team – dark only.', false],
    [97, 'Wedding Website Template', 'Templates', 26, 4.6, '💍', 'grad-rose', 'RSVP form, gallery, countdown and gift registry.', false],
    [98, 'Fitness Studio Site', 'Templates', 21, 4.5, '💪', 'grad-red', 'Class schedule, trainer profiles, membership plans.', false],
    [99, 'Photography Portfolio', 'Templates', 28, 4.7, '📷', 'grad-stone', 'Lightbox gallery, client proof portal and contact form.', false],
    [100, 'Admin Dashboard (HTML)', 'Templates', 35, 4.7, '🗂️', 'grad-slate', 'Pure HTML/JS admin panel – tables, charts, forms, sidebars.', false],
    [101, 'Course Platform Template', 'Templates', 75, 4.9, '🎓', 'grad-blue', 'LMS-style site: course cards, lessons, quizzes and progress.', true],
    [102, 'SaaS Pricing Page', 'Templates', 16, 4.6, '💰', 'grad-lime', 'Toggle annual/monthly, feature comparison table and FAQ.', false],
    [103, 'Directory Site Template', 'Templates', 48, 4.7, '📍', 'grad-teal', 'Listing directory with filters, map view and submission form.', false],
    [104, 'Personal Finance App', 'Templates', 42, 4.8, '💳', 'grad-green', 'Budget tracker, expense charts and savings goals – React.', true],
    [105, 'Travel Blog Template', 'Templates', 23, 4.6, '✈️', 'grad-sky', 'Destination cards, route map and photo story layouts.', false],
    [106, 'SaaS Waitlist Page', 'Templates', 11, 4.5, '⏳', 'grad-amber', 'Email capture, referral counter and social-share flow.', false],
    [107, 'Dev Portfolio v2', 'Templates', 34, 4.8, '👨‍💻', 'grad-navy', 'Terminal-style developer portfolio with command-line easter egg.', true],
    [108, 'Coming Soon Page', 'Templates', 9, 4.4, '🔜', 'grad-purple', 'Countdown, email subscribe and social links – one HTML file.', false],
    [109, 'Healthcare Clinic Site', 'Templates', 38, 4.6, '🏥', 'grad-emerald', 'Appointment booking, doctor profiles and insurance info.', false],
    [110, 'SaaS Status Page', 'Templates', 15, 4.5, '✅', 'grad-cyan', 'Incident history, uptime graphs and subscribe to updates.', false],
    [111, 'Marketplace Template', 'Templates', 82, 4.8, '🏪', 'grad-blue2', 'Buyer/seller marketplace: listings, bids, ratings and messaging.', true],
    [112, 'Music Artist Site', 'Templates', 20, 4.5, '🎸', 'grad-fuchsia', 'Discography, tour dates, merch shop and Spotify embeds.', false],
    [113, 'Law Firm Website', 'Templates', 31, 4.6, '⚖️', 'grad-stone', 'Practice areas, attorney profiles and case consultation form.', false],
    [114, 'Startup Pitch Deck (Web)', 'Templates', 27, 4.7, '📊', 'grad-rose', 'Animated slide-style web pitch deck built in HTML/CSS.', false],
    [115, 'Interior Design Site', 'Templates', 36, 4.6, '🛋️', 'grad-lime', 'Project gallery with before/after slider and consultation form.', false],
    [116, 'Kanban Board Template', 'Templates', 29, 4.7, '📋', 'grad-slate', 'Drag-and-drop Kanban board in pure JS with localStorage.', false],
    [117, 'SaaS Changelog Page', 'Templates', 13, 4.5, '📝', 'grad-indigo', 'Version-tagged changelog with emoji indicators.', false],
    [118, 'NFT Project Landing', 'Templates', 30, 4.6, '🎨', 'grad-violet', 'Mint button, roadmap, team and whitelist flow.', false],
    [119, 'Dentist Clinic Template', 'Templates', 25, 4.5, '🦷', 'grad-teal', 'Services, smile gallery, appointment booking and FAQ.', false],
    [120, 'Tech News Site', 'Templates', 45, 4.7, '📡', 'grad-blue', 'Category feed, breaking news ticker and newsletter subscribe.', true],

    // ── Tools (35) ───────────────────────────────────────────────────────────
    [121, 'DevFlow CLI Toolkit', 'Tools', 19, 4.7, '⚙️', 'grad-amber', 'One command for scaffolding, git automation and cloud deploys.', false],
    [122, 'APIForge REST Tester', 'Tools', 49, 4.9, '🔧', 'grad-red', 'Desktop REST/GraphQL client with test scripts and HTML reports.', false],
    [123, 'GitFlow Automator', 'Tools', 15, 4.6, '🌿', 'grad-stone', 'PR labelling, changelog generation and release tagging via YAML.', false],
    [124, 'CSS Grid Generator', 'Tools', 0, 4.8, '🏁', 'grad-lime', 'Free: visual CSS grid builder with live code output.', false],
    [125, 'Color Contrast Checker', 'Tools', 0, 4.7, '🎨', 'grad-teal', 'Free: WCAG AA/AAA checker with palette suggestions.', false],
    [126, 'SVG Optimizer Pro', 'Tools', 12, 4.6, '✂️', 'grad-emerald', 'Batch-compress SVGs, strip metadata and output as web-ready files.', false],
    [127, 'JSON Formatter Plus', 'Tools', 0, 4.8, '{ }', 'grad-blue', 'Free: format, validate, diff and minify JSON in-browser.', false],
    [128, 'Regex Playground', 'Tools', 0, 4.7, '🔍', 'grad-cyan', 'Free: test regexes with live match highlighting and explanations.', false],
    [129, 'Favicon Generator', 'Tools', 8, 4.5, '⭐', 'grad-amber', 'Upload SVG/PNG, get all favicon sizes plus manifest.json.', false],
    [130, 'Font Pairing Tool', 'Tools', 0, 4.6, '🅰️', 'grad-indigo', 'Free: preview 1000+ Google Font combinations live.', false],
    [131, 'Markdown Editor Pro', 'Tools', 14, 4.7, '📝', 'grad-violet', 'Two-pane markdown editor with live preview and export to PDF/HTML.', false],
    [132, 'Code Snippet Manager', 'Tools', 22, 4.7, '📌', 'grad-navy', 'Desktop snippet library with tags, search and one-click copy.', false],
    [133, 'Database Schema Builder', 'Tools', 34, 4.8, '🗄️', 'grad-blue2', 'Visual ERD editor that exports SQL and Prisma schema.', true],
    [134, 'Image Compressor Pro', 'Tools', 16, 4.6, '🖼️', 'grad-rose', 'Batch compress JPG/PNG/WebP with quality presets.', false],
    [135, 'SEO Analyser', 'Tools', 28, 4.7, '📡', 'grad-lime', 'Crawl any URL: meta tags, heading structure, speed and Core Web Vitals.', false],
    [136, 'Tailwind Config Builder', 'Tools', 0, 4.8, '💨', 'grad-sky', 'Free: visual tailwind.config generator with live preview.', false],
    [137, 'Mock API Server', 'Tools', 18, 4.7, '🔀', 'grad-fuchsia', 'Spin up a JSON REST API in seconds from a schema file.', false],
    [138, 'Cron Expression Helper', 'Tools', 0, 4.5, '⏰', 'grad-amber', 'Free: build and explain cron expressions in plain English.', false],
    [139, 'CI/CD Pipeline Builder', 'Tools', 36, 4.8, '🔁', 'grad-red', 'Visual GitHub Actions/GitLab CI workflow builder.', true],
    [140, 'Bundle Analyser', 'Tools', 14, 4.6, '📦', 'grad-stone', 'Visualise webpack/vite bundle sizes and find bloat.', false],
    [141, 'Accessibility Linter', 'Tools', 22, 4.8, '♿', 'grad-teal', 'Scans HTML/JSX for WCAG violations and suggests fixes.', false],
    [142, 'Dark Mode Preview', 'Tools', 0, 4.6, '🌙', 'grad-indigo', 'Free: preview any website in dark mode via URL.', false],
    [143, 'Password Generator Pro', 'Tools', 0, 4.5, '🔒', 'grad-slate', 'Free: generate strong passwords with entropy display.', false],
    [144, 'URL Shortener Kit', 'Tools', 17, 4.5, '🔗', 'grad-lime', 'Self-hosted URL shortener with click analytics – Node.js.', false],
    [145, 'Webhook Tester', 'Tools', 0, 4.7, '📩', 'grad-blue', 'Free: receive, inspect and replay webhooks via a temp URL.', false],
    [146, 'CSS Animation Builder', 'Tools', 12, 4.6, '🎞️', 'grad-violet', 'Visual keyframe builder that outputs clean CSS animations.', false],
    [147, 'Package.json Validator', 'Tools', 0, 4.4, '📜', 'grad-emerald', 'Free: validate and audit your package.json for issues.', false],
    [148, 'Load Testing Suite', 'Tools', 41, 4.7, '💥', 'grad-rose', 'HTTP load tester with ramp-up curves, latency histograms and report export.', true],
    [149, 'Monorepo Setup Kit', 'Tools', 29, 4.7, '🏗️', 'grad-navy', 'Turborepo + pnpm workspace scaffold with shared configs.', false],
    [150, 'Figma to Code Plugin', 'Tools', 39, 4.9, '🎨', 'grad-purple2', 'Export Figma frames to clean React/Vue/HTML in one click.', true],
    [151, 'Env Variable Manager', 'Tools', 24, 4.6, '🔑', 'grad-sky', 'Desktop .env manager with per-project encryption.', false],
    [152, 'Chrome DevTools Cheatsheet', 'Tools', 0, 4.8, '🛠️', 'grad-teal', 'Free: printable PDF of all essential DevTools shortcuts.', false],
    [153, 'Lottie Animation Viewer', 'Tools', 0, 4.5, '🎬', 'grad-amber', 'Free: preview and export Lottie JSON animations in-browser.', false],
    [154, 'Cloudflare Workers Starter', 'Tools', 18, 4.6, '☁️', 'grad-blue2', 'Template repo for deploying edge functions on Cloudflare Workers.', false],
    [155, 'Browser Extension Boilerplate', 'Tools', 22, 4.7, '🧩', 'grad-fuchsia', 'Chrome/Firefox extension starter with manifest v3, popup and background scripts.', false],
];

// ── EXPAND RAW TO FULL PRODUCT OBJECTS ───────────────────────────────────────
var FULL_DESCS = {
    'UI Kits': 'Meticulously crafted components built for speed and consistency. Includes Figma source files, editable variables, responsive grids and detailed documentation. Ships with both dark and light mode variants and is free to update indefinitely.',
    'E-books': 'A deep-dive written by a practitioner with 10+ years of experience. Includes real-world code examples, exercises, cheat-sheets and a digital certificate of completion. Delivered as PDF and EPUB with all future revisions included.',
    'Templates': 'Production-ready, clean-coded templates with commented source files. Responsive across all screen sizes, SEO-optimised from the ground up and easy to customise. Includes a setup guide and 6 months of email support.',
    'Tools': 'Battle-tested developer tool with an intuitive interface. Available for macOS, Windows and Linux (or browser-based). Regular feature updates and a public GitHub repo for bug reports.'
};

var FEATURES_MAP = {
    'UI Kits': ['Figma Source Files', 'Dark & Light Mode', 'Auto-Layout Ready', 'Design Tokens', 'Editable Variables', 'Free Updates'],
    'E-books': ['PDF + EPUB Format', 'Code Examples Included', 'Exercise Sheets', 'Cheat-Sheet PDF', 'Certificate of Completion', 'Lifetime Updates'],
    'Templates': ['Clean, Commented Code', 'Fully Responsive', 'SEO Optimised', 'Cross-browser Tested', 'Setup Guide Included', '6 Months Support'],
    'Tools': ['Cross-platform', 'Detailed Documentation', 'Regular Updates', 'GitHub Repo Access', 'Keyboard Shortcuts', 'Dark Mode UI']
};

var BADGE_MAP = { 'UI Kits': 'badge-ui', 'E-books': 'badge-ebook', 'Templates': 'badge-template', 'Tools': 'badge-tool' };

var products = RAW.map(function (r) {
    return {
        id: r[0], title: r[1], category: r[2], price: r[3], rating: r[4],
        emoji: r[5], colorClass: r[6], description: r[7],
        fullDescription: r[7] + ' ' + FULL_DESCS[r[2]],
        features: FULL_DESCS[r[2]] ? FEATURES_MAP[r[2]] : [],
        badgeStyle: BADGE_MAP[r[2]] || 'badge-ui',
        isNew: r[8] || false
    };
});

// ── STATE ─────────────────────────────────────────────────────────────────────
var state = {
    category: 'all', search: '', sort: 'default',
    page: 1, perPage: 12, viewMode: 'grid'
};

// ── HELPERS ───────────────────────────────────────────────────────────────────
function fmtPrice(p) { return p === 0 ? '<span class="free">Free</span>' : '<span class="currency">$</span>' + p; }
function fmtPriceModal(p) { return p === 0 ? 'Free' : '$' + p; }

function getFiltered() {
    var f = products.filter(function (p) {
        var mc = state.category === 'all' || p.category === state.category;
        var q = state.search.toLowerCase();
        var ms = !q || p.title.toLowerCase().indexOf(q) > -1 || p.category.toLowerCase().indexOf(q) > -1 || p.description.toLowerCase().indexOf(q) > -1;
        return mc && ms;
    });
    if (state.sort === 'price-asc') f.sort(function (a, b) { return a.price - b.price; });
    if (state.sort === 'price-desc') f.sort(function (a, b) { return b.price - a.price; });
    if (state.sort === 'rating') f.sort(function (a, b) { return b.rating - a.rating; });
    if (state.sort === 'name') f.sort(function (a, b) { return a.title.localeCompare(b.title); });
    return f;
}

// ── RENDER PRODUCTS ───────────────────────────────────────────────────────────
function renderProducts() {
    var grid = document.getElementById('productsGrid');
    var noRes = document.getElementById('noResults');
    var countEl = document.getElementById('resultCount');
    var filtered = getFiltered();
    var total = filtered.length;
    var start = (state.page - 1) * state.perPage;
    var page = filtered.slice(start, start + state.perPage);

    grid.innerHTML = '';
    grid.className = 'products-grid' + (state.viewMode === 'list' ? ' list-view' : '');

    if (countEl) countEl.innerHTML = 'Showing <strong>' + total + '</strong> product' + (total !== 1 ? 's' : '');

    if (total === 0) {
        noRes.style.display = 'block'; renderPagination(0); return;
    }
    noRes.style.display = 'none';

    page.forEach(function (p, i) {
        var card = document.createElement('article');
        card.className = 'product-card';
        card.setAttribute('data-id', p.id);
        card.style.animationDelay = (i * 0.05) + 's';
        var h = '';
        h += '<div class="card-image-wrapper">';
        h += '<div class="card-image-fallback ' + p.colorClass + '"><span>' + p.emoji + '</span></div>';
        h += '<div class="card-badge ' + p.badgeStyle + '">' + p.category + '</div>';
        if (p.isNew) h += '<div class="card-new-tag">New</div>';
        h += '<div class="card-overlay"><button class="overlay-btn" data-id="' + p.id + '">View Details</button></div>';
        h += '</div>';
        h += '<div class="card-body">';
        h += '<div class="card-category-tag">' + p.category + '</div>';
        h += '<h3 class="card-title">' + p.title + '</h3>';
        h += '<p class="card-desc">' + p.description + '</p>';
        h += '<div class="card-footer">';
        h += '<div class="card-price">' + fmtPrice(p.price) + '</div>';
        h += '<button class="view-btn" data-id="' + p.id + '">View Details</button>';
        h += '</div></div>';
        card.innerHTML = h;
        grid.appendChild(card);
    });

    renderPagination(total);
}

// ── PAGINATION ────────────────────────────────────────────────────────────────
function renderPagination(total) {
    var pag = document.getElementById('pagination');
    if (!pag) return;
    var pages = Math.ceil(total / state.perPage);
    if (pages <= 1) { pag.innerHTML = ''; return; }
    var h = '';
    h += '<button class="page-btn page-prev" ' + (state.page === 1 ? 'disabled' : '') + ' data-pg="' + (state.page - 1) + '">&#8592; Prev</button>';
    var s = Math.max(1, state.page - 2), e = Math.min(pages, state.page + 2);
    if (s > 1) { h += '<button class="page-btn" data-pg="1">1</button>'; if (s > 2) h += '<span style="color:var(--text-muted);padding:0 4px">…</span>'; }
    for (var x = s; x <= e; x++) h += '<button class="page-btn' + (x === state.page ? ' active' : '') + '" data-pg="' + x + '">' + x + '</button>';
    if (e < pages) { if (e < pages - 1) h += '<span style="color:var(--text-muted);padding:0 4px">…</span>'; h += '<button class="page-btn" data-pg="' + pages + '">' + pages + '</button>'; }
    h += '<button class="page-btn page-next" ' + (state.page === pages ? 'disabled' : '') + ' data-pg="' + (state.page + 1) + '">Next &#8594;</button>';
    pag.innerHTML = h;
    pag.addEventListener('click', function (e) {
        var btn = e.target.closest('[data-pg]');
        if (!btn || btn.disabled) return;
        var pg = parseInt(btn.getAttribute('data-pg'), 10);
        if (pg < 1 || pg > pages) return;
        state.page = pg;
        renderProducts();
        document.getElementById('products').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
}

// ── MODAL ─────────────────────────────────────────────────────────────────────
function openModal(id) {
    var p = null;
    for (var i = 0; i < products.length; i++) { if (products[i].id === id) { p = products[i]; break; } }
    if (!p) return;
    var fh = p.features.map(function (f) { return '<div class="modal-feature">' + f + '</div>'; }).join('');
    var h = '';
    h += '<div class="modal-img-wrapper"><div class="modal-img-fallback ' + p.colorClass + '"><span>' + p.emoji + '</span></div></div>';
    h += '<div class="modal-body">';
    h += '<div class="modal-meta"><span class="modal-category">' + p.category + '</span>';
    if (p.isNew) h += '<span class="card-new-tag" style="position:static;font-size:0.7rem">New</span>';
    h += '<span class="modal-rating">&#9733; ' + p.rating + ' / 5.0</span></div>';
    h += '<h2 id="modalTitle">' + p.title + '</h2>';
    h += '<p class="modal-description">' + p.fullDescription + '</p>';
    h += '<div class="modal-features">' + fh + '</div>';
    h += '<div class="modal-footer"><div class="modal-price-block"><div class="modal-price-label">Price</div>';
    h += '<div class="modal-price' + (p.price === 0 ? ' free-price' : '') + '">' + fmtPriceModal(p.price) + '</div></div>';
    h += '<div class="modal-actions"><button class="btn-wishlist" title="Wishlist">&#9825;</button>';
    h += '<button class="btn-buy">' + (p.price === 0 ? '&#11015; Download Free' : '&#128722; Buy Now') + '</button>';
    h += '</div></div></div>';
    document.getElementById('modalContent').innerHTML = h;
    document.getElementById('modalOverlay').classList.add('open');
    document.body.style.overflow = 'hidden';
}
function closeModal() {
    document.getElementById('modalOverlay').classList.remove('open');
    document.body.style.overflow = '';
}

// ── SCROLL REVEAL ─────────────────────────────────────────────────────────────
function initReveal() {
    if (!('IntersectionObserver' in window)) {
        document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('in-view'); }); return;
    }
    var ob = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in-view'); ob.unobserve(e.target); } });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.reveal').forEach(function (el) { ob.observe(el); });
}

// ── DARK / LIGHT TOGGLE ───────────────────────────────────────────────────────
function initTheme() {
    var saved = localStorage.getItem('dh-theme') || 'dark';
    document.documentElement.setAttribute('data-theme', saved);
    var btn = document.getElementById('themeToggle');
    if (!btn) return;
    btn.addEventListener('click', function () {
        var cur = document.documentElement.getAttribute('data-theme');
        var next = cur === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('dh-theme', next);
    });
}

// ── INIT ──────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function () {
    initTheme();
    renderProducts();
    initReveal();

    // Search
    var si = document.getElementById('searchInput');
    var sc = document.getElementById('searchClear');
    si.addEventListener('input', function () {
        state.search = si.value; state.page = 1;
        sc.classList.toggle('visible', state.search.length > 0);
        renderProducts();
    });
    sc.addEventListener('click', function () {
        si.value = ''; state.search = ''; state.page = 1;
        sc.classList.remove('visible'); si.focus(); renderProducts();
    });

    // Reset filters button
    var rb = document.getElementById('resetSearch');
    if (rb) rb.addEventListener('click', function () {
        si.value = ''; state.search = ''; state.page = 1; state.category = 'all'; state.sort = 'default';
        sc.classList.remove('visible');
        document.querySelectorAll('.filter-btn').forEach(function (b) { b.classList.remove('active'); });
        var all = document.getElementById('filterAll');
        if (all) all.classList.add('active');
        var sel = document.getElementById('sortSelect');
        if (sel) sel.value = 'default';
        renderProducts();
    });

    // Category filter
    document.querySelectorAll('.filter-btn').forEach(function (btn) {
        btn.addEventListener('click', function () {
            document.querySelectorAll('.filter-btn').forEach(function (b) { b.classList.remove('active'); });
            btn.classList.add('active');
            state.category = btn.getAttribute('data-category'); state.page = 1;
            renderProducts();
            setTimeout(function () { document.getElementById('products').scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 100);
        });
    });

    // Sort
    var ss = document.getElementById('sortSelect');
    if (ss) ss.addEventListener('change', function () { state.sort = ss.value; state.page = 1; renderProducts(); });

    // Grid / List toggle
    var vg = document.getElementById('viewGrid'), vl = document.getElementById('viewList');
    function setView(m) {
        state.viewMode = m;
        vg.classList.toggle('active', m === 'grid');
        vl.classList.toggle('active', m === 'list');
        renderProducts();
    }
    if (vg) vg.addEventListener('click', function () { setView('grid'); });
    if (vl) vl.addEventListener('click', function () { setView('list'); });

    // Product card click delegation
    document.getElementById('productsGrid').addEventListener('click', function (e) {
        var btn = e.target.closest('[data-id]');
        if (btn) openModal(parseInt(btn.getAttribute('data-id'), 10));
    });

    // Modal close
    document.getElementById('modalClose').addEventListener('click', closeModal);
    document.getElementById('modalOverlay').addEventListener('click', function (e) { if (e.target === this) closeModal(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeModal(); });

    // Hamburger
    var hb = document.getElementById('hamburger'), nl = document.getElementById('navLinks');
    hb.addEventListener('click', function () { hb.classList.toggle('open'); nl.classList.toggle('open'); });
    nl.querySelectorAll('.nav-link').forEach(function (l) {
        l.addEventListener('click', function () { hb.classList.remove('open'); nl.classList.remove('open'); });
    });

    // Navbar scroll + back-to-top + active link
    var nb = document.getElementById('navbar'), bt = document.getElementById('backToTop');
    window.addEventListener('scroll', function () {
        var y = window.scrollY || window.pageYOffset;
        nb.classList.toggle('scrolled', y > 40);
        bt.classList.toggle('visible', y > 500);
        var secs = ['home', 'categories', 'products', 'about'], cur = 'home';
        secs.forEach(function (id) { var el = document.getElementById(id); if (el && el.getBoundingClientRect().top < 150) cur = id; });
        document.querySelectorAll('.nav-link').forEach(function (l) {
            l.classList.toggle('active', l.getAttribute('href').replace('#', '') === cur);
        });
    }, { passive: true });
    bt.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });

    // Explore button
    var eb = document.getElementById('exploreBtn');
    if (eb) eb.addEventListener('click', function (e) { e.preventDefault(); document.getElementById('products').scrollIntoView({ behavior: 'smooth', block: 'start' }); });

    // 3D tilt on card hover
    document.addEventListener('mousemove', function (e) {
        var c = e.target && e.target.closest ? e.target.closest('.product-card') : null;
        if (!c) return;
        var r = c.getBoundingClientRect();
        var x = ((e.clientX - r.left) / r.width - 0.5) * 8, y = ((e.clientY - r.top) / r.height - 0.5) * -8;
        c.style.transform = 'translateY(-6px) rotateY(' + x + 'deg) rotateX(' + y + 'deg)';
    });
    document.addEventListener('mouseleave', function (e) {
        if (e.target && e.target.closest) { var c = e.target.closest('.product-card'); if (c) c.style.transform = ''; }
    }, true);
});
