import {IExperience, IProject} from '@/types';

export const GENERAL_INFO = {
  email: 'mykyta.lavreniuk@gmail.com',
  emailSubject: "Let's work together",
  emailBody: 'Hi Nikita, I am reaching out because...',
};

export const SOCIAL_LINKS = [
  {name: 'github', url: 'https://github.com/nikita-lav'},
  {name: 'linkedin', url: 'https://www.linkedin.com/in/nikita-lavreniuk'},
];

export const MY_STACK = {
  frontend: [
    {name: 'JavaScript', icon: '/logo/js.png'},
    {name: 'TypeScript', icon: '/logo/ts.png'},
    {name: 'React', icon: '/logo/react.png'},
    {name: 'Vue.js', icon: '/logo/vue.svg'},
    {name: 'Next.js', icon: '/logo/next.png'},
    {name: 'Nuxt.js', icon: '/logo/nuxt.svg'},
    {name: 'HTML5', icon: '/logo/html.svg'},
    {name: 'Tailwind CSS', icon: '/logo/tailwind.png'},
    {name: 'Sass', icon: '/logo/sass.png'},
  ],
  backend: [
    {name: 'Node.js', icon: '/logo/node.png'},
    {name: 'NestJS', icon: '/logo/nest.svg'},
    {name: 'Express.js', icon: '/logo/express.png'},
    {name: 'tRPC', icon: '/logo/trpc.svg'},
    {name: 'GraphQL', icon: '/logo/graphql.svg'},
  ],
  database: [
    {name: 'PostgreSQL', icon: '/logo/postgreSQL.png'},
    {name: 'Supabase', icon: '/logo/supabase.svg'},
    {name: 'MongoDB', icon: '/logo/mongodb.svg'},
    {name: 'MySQL', icon: '/logo/mysql.svg'},
    {name: 'Prisma', icon: '/logo/prisma.png'},
  ],
  tools: [
    {name: 'Git', icon: '/logo/git.png'},
    {name: 'Docker', icon: '/logo/docker.svg'},
    {name: 'AWS', icon: '/logo/aws.png'},
    {name: 'GitHub Actions', icon: '/logo/github-actions.svg'},
    {name: 'Vercel', icon: '/logo/vercel.svg'},
    {name: 'Firebase', icon: '/logo/firebase.svg'},
  ],
  ui: [
    {name: 'Material UI', icon: '/logo/mui.svg'},
    {name: 'Chakra UI', icon: '/logo/chakra.svg'},
    {name: 'Chart.js', icon: '/logo/chartjs.svg'},
    {name: 'D3.js', icon: '/logo/d3.svg'},
    {name: 'MapBox', icon: '/logo/mapbox.svg'},
    {name: 'Highcharts', icon: '/logo/highcharts.svg'},
  ],
  cms: [
    {name: 'Algolia', icon: '/logo/algolia.svg'},
    {name: 'Contentful', icon: '/logo/contentful.svg'},
    {name: 'Contentstack', icon: '/logo/contentstack.svg'},
    {name: 'Decap CMS', icon: '/logo/decap.svg'},
  ],
};

export const PROJECTS: IProject[] = [
  {
    title: 'SotaProxy',
    slug: 'sotaproxy',
    liveUrl: 'https://sotaproxy.com/',
    description: `
      A pay-as-you-go proxy platform that resells mobile, residential, and datacenter (IPv4/IPv6/ISP) proxies bought wholesale from upstream vendors, marked up, and sold on a prepaid crypto-balance model. Customers buy and manage proxies through a web dashboard or a versioned public wholesale API. The product spans four independent apps — a hexagonal Fastify backend, a React 19 customer dashboard, a separate React 19 admin panel, and a Next.js 16 marketing/SEO site — all backed by Supabase Postgres with GoTrue auth and row-level security.
      `,
    keyFeatures: `
      <ul>
        <li>Buy and renew 8 proxy types sourced from three upstream vendors</li>
        <li><strong>Prepaid wallet</strong> with a full transaction ledger, crypto top-ups, and refund-on-failure</li>
        <li>Idempotent quote → create → provision → renew order lifecycle</li>
        <li>Versioned public wholesale API with scoped, hashed API keys</li>
        <li>Reseller sub-accounts plus referral and affiliate programmes</li>
        <li>Mobile-proxy control — rotation, reboot, fingerprint, and carrier selection</li>
        <li>Claude-auto-translated blog across 4 languages and 320 programmatic-SEO pages</li>
        <li>Full admin P&amp;L control plane with per-vendor kill-switches</li>
        <li>TOTP two-factor authentication and Google OAuth</li>
      </ul>
      `,
    role: `
      <p>I built SotaProxy end to end — architecture, backend, both frontends, the marketing site, and production infrastructure. The core challenge was safe, fully automated proxy sales across multiple vendors while real money moves through every single order.</p>

      <ul>
        <li>Architected a hexagonal Fastify backend — 280+ routes and 100+ use-cases behind 4 ports isolating the domain from vendors, storage, and transport</li>
        <li>Built money-safe commerce on atomic row-locked PostgreSQL RPCs with debit-before-provision, so a failed provision refunds instead of silently charging</li>
        <li>Integrated 3 proxy vendors and 2 crypto payment gateways behind a unified catalog, under strict supplier anonymity</li>
        <li>Engineered a 14-job cron scheduler with balance kill-switches that halt purchasing before upstream credit runs dry</li>
        <li>Shipped the Next.js 16 SEO site with a Claude-translated blog and on-demand ISR revalidation</li>
      </ul>
      `,
    techStack: [
      'Fastify',
      'React 19',
      'PostgreSQL',
      'TypeScript',
      'Next.js 16',
      'Supabase',
      'Vite',
      'TanStack Query',
      'Tailwind CSS',
      'Zod',
      'Claude API',
      'Caddy',
      'Railway',
      'Cloudflare',
    ],
    thumbnail: '/projects/thumbnail/sotaproxy.webp',
    longThumbnail: '/projects/long/sotaproxy.webp',
    images: [
      '/projects/images/sotaproxy-1.webp',
      '/projects/images/sotaproxy-2.webp',
      '/projects/images/sotaproxy-3.webp',
      '/projects/images/sotaproxy-4.webp',
      '/projects/images/sotaproxy-5.webp',
      '/projects/images/sotaproxy-6.webp',
      '/projects/images/sotaproxy-7.webp',
      '/projects/images/sotaproxy-8.webp',
    ],
  },
  {
    title: 'YourPath',
    slug: 'yourpath',
    liveUrl: 'https://www.yourpath.care/',
    description: `
      A senior living guidance platform that matches older adults and their families with personalised community recommendations — completely free, funded by partner communities.
      `,
    keyFeatures: `
      <ul>
        <li>Multi-step assessment survey that captures care needs, lifestyle preferences, location, and budget to generate a personalised path within hours</li>
        <li><strong>AI voice intake:</strong> Users can complete the entire assessment via a phone call — a Retell AI voice agent conducts the conversation and GPT extracts all required information</li>
        <li>AI-powered matching algorithm that ranks senior living communities based on individual profiles</li>
        <li>Personalised path report including matched communities, financial snapshots, a 90-day action plan, tour guides, and ongoing support resources</li>
        <li>Partner CRM portal for senior living communities to manage leads, track engagement, and communicate with prospective residents</li>
        <li>Admin dashboard for managing surveys, community profiles, blog content (with AI generation via OpenAI), and user overrides</li>
        <li>Email and SMS communication via Resend, Klaviyo, and Twilio — with Handlebars-based email templates</li>
        <li>N8N and Zapier webhook automation for workflow orchestration</li>
        <li>State-by-state community browsing, guides, testimonials, and FAQ</li>
      </ul>
      `,
    role: `
      <p>I built this platform end to end — from architecture to production. The challenge was taking someone's care needs, location, budget, and lifestyle and automatically matching them with the right senior living communities, then delivering a fully personalised recommendation — all without manual intervention. The most interesting part was making the entire journey work through a phone call as well as a web form.</p>

      <ul>
        <li>Integrated Retell AI voice agent with Twilio so users can complete the full assessment via phone — OpenAI GPT extracts 30+ structured fields from the transcript with multi-step validation and retry logic</li>
        <li>Built a geographic matching algorithm using PostGIS and Supabase RPC functions, scoring distance and multi-factor compatibility across 40+ communities simultaneously</li>
        <li>Created an n8n automation pipeline that triggers on intake completion, runs the matching algorithm, and uses OpenAI to generate a personalised HTML/PDF recommendation document — delivered automatically</li>
        <li>Implemented SMS verification (Twilio + JWT), transactional email (Resend), and CRM sync (Klaviyo)</li>
        <li>Architected a Turborepo monorepo with five Next.js apps — survey portal, admin dashboard, partner CRM, user portal, and blog — sharing a tRPC API and Drizzle ORM schema on Supabase</li>
      </ul>
      `,
    techStack: ['Next.js', 'PostgreSQL', 'OpenAI', 'tRPC', 'TypeScript' , 'Supabase', 'PostGIS', 'Retell AI', 'Twilio', 'Tailwind CSS', 'n8n'],
    thumbnail: '/projects/thumbnail/yourpath.webp',
    longThumbnail: '/projects/long/yourpath.webp',
    images: [
      '/projects/images/yourpath-1.webp',
      '/projects/images/yourpath-2.webp',
      '/projects/images/yourpath-3.webp',
      '/projects/images/yourpath-4.webp',
      '/projects/images/yourpath-5.webp',
      '/projects/images/yourpath-6.webp',
      '/projects/images/yourpath-7.webp',
      '/projects/images/yourpath-8.webp',
    ],
  },
  {
    title: 'Dashboardly',
    slug: 'dashboardly',
    liveUrl: 'https://www.dashboardly.io/',
    description: `
      A full-stack business intelligence platform built for TikTok Shop sellers — aggregating sales, inventory, financials, and customer data from the TikTok Shop API into a single real-time analytics dashboard.
      `,
    keyFeatures: `
      <ul>
        <li>Real-time sales and profit dashboard with live metrics via WebSocket, date range filtering, and configurable KPI widgets</li>
        <li>Profit & Loss tracking including cost of goods, storage fees, fulfilment costs, ad spend, refunds, and manual adjustments</li>
        <li>Inventory management with FBT (Fulfilled by TikTok) warehouse support, inbound order tracking, and stock level monitoring</li>
        <li>Customer analytics — lifetime value (LTV), cohort retention analysis, and customer segmentation</li>
        <li>Order management with geographic distribution maps, order statements, and financial reconciliation</li>
        <li>TikTok Ads integration for campaign performance reporting alongside organic sales data</li>
        <li>Team collaboration with role-based access control (owner, collaborator, spy mode)</li>
        <li>Stripe subscription management with metered billing and a customer portal</li>
        <li>Demo mode for exploring the full product without an account</li>
      </ul>
      `,
    role: `
      <p>I was a core contributor on Dashboardly, owning full-cycle development of major features end-to-end — from architectural design to production delivery. The platform pulls large volumes of data from the TikTok Shop API and surfaces it as fast, accurate analytics for sellers managing thousands of orders.</p>

      <ul>
        <li>Designed and implemented 5 feature-rich analytics modules: Sales &amp; Profit Dashboard, Profit &amp; Loss Analytics with multi-dimensional KPI comparison, Cohort Retention Analysis with heatmap visualisations, inventory management, and order management — built in Next.js with React state management</li>
        <li>Developed Customer Purchase Journey flow analysis with conversion rate tracking and retention statistics, processing thousands of daily transaction records</li>
        <li>Built and optimised NestJS backend services — controllers, modules, database schemas, and Prisma migrations — improving query response times through strategic indexing</li>
        <li>Engineered a BullMQ queue system with 15+ processors for parallel async imports from the TikTok Shop API (products, orders, inventory, FBT, statements), integrated Socket.IO WebSockets for real-time live metrics</li>
        <li>Implemented Stripe subscription management with webhook processing for billing events and a self-serve customer portal</li>
      </ul>
      `,
    techStack: ['Next.js', 'NestJS', 'PostgreSQL', 'Redis', 'TypeScript', 'BullMQ', 'Socket.IO', 'TikTok Shop API', 'Stripe', 'Recharts', 'd3.js'],
    thumbnail: '/projects/thumbnail/dashboardly.webp',
    longThumbnail: '/projects/long/dashboardly.webp',
    images: [
      '/projects/images/dashboardly-1.webp',
      '/projects/images/dashboardly-2.webp',
      '/projects/images/dashboardly-3.webp',
      '/projects/images/dashboardly-4.webp',
      '/projects/images/dashboardly-5.webp',
      '/projects/images/dashboardly-6.webp',
      '/projects/images/dashboardly-7.webp',
      '/projects/images/dashboardly-8.webp',
    ],
  },
  {
    title: 'Sanctuary Villas',
    slug: 'sanctuaryvillas',
    liveUrl: 'https://sanctuaryvillas.co/',
    description: `
      A luxury villa rental platform for Sanctuary Villas Ubud — a high-end property in Bali featuring traditional Javanese (Villa Joglo) and Minangkabau-inspired (Villa Minang) villas, each with private pools, outdoor bathtubs, and premium amenities including a treehouse yoga shala.
      `,
    keyFeatures: `
      <ul>
        <li>Direct booking system with check-in/check-out date picker, guest count selector, and real-time availability powered by Guesty API</li>
        <li>Stripe payment integration for secure online reservations</li>
        <li>Villa listing pages with high-resolution galleries, full amenity breakdowns, and room configurations (1BR, 2BR, 3BR, Signature)</li>
        <li>Guest testimonials, FAQ, and Google Maps integration</li>
        <li>SEO-optimised with Schema.org structured data (Hotel, LodgingBusiness, FAQPage, Review) and Google Analytics</li>
        <li>Fully responsive across all devices</li>
      </ul>
      `,
    role: `
      <p>I built this platform from scratch for a luxury villa resort in Bali. The goal was to move guests away from third-party booking platforms — where the property loses margin — and convert them through a direct booking flow with a best-price guarantee. My job was to make that experience seamless, trustworthy, and fast.</p>

      <ul>
        <li>Integrated Guesty API for real-time villa availability, syncing reservations across all booking channels</li>
        <li>Implemented Stripe payment flow for secure direct bookings with confirmation emails</li>
        <li>Built villa listing pages with high-resolution galleries, amenity breakdowns, and room configuration details (1BR, 2BR, 3BR, Signature)</li>
        <li>Implemented Schema.org structured data (Hotel, LodgingBusiness, FAQPage, Review) for rich search results and local SEO</li>
        <li>Optimised images and Core Web Vitals for fast load times on mobile</li>
        <li>Deployed on Vercel with custom domain, environment configuration, and Google Analytics</li>
      </ul>
      `,
    techStack: ['Next.js', 'Tailwind CSS', 'Stripe', 'TypeScript', 'GuestyAPI'],
    thumbnail: '/projects/thumbnail/sanctuaryvillas.webp',
    longThumbnail: '/projects/long/sanctuaryvillas.webp',
    images: [
      '/projects/images/sanctuaryvillas-1.webp',
      '/projects/images/sanctuaryvillas-2.webp',
      '/projects/images/sanctuaryvillas-3.webp',
      '/projects/images/sanctuaryvillas-4.webp',
    ],
  },
  {
    title: 'Korisu',
    slug: 'korisu',
    liveUrl: 'https://t.me/korisu_bot',
    description: `
      <p>Korisu is a Telegram ordering bot built for a sushi restaurant in Strasbourg, France. Customers browse the full menu by category, view individual dishes with photos and pricing, manage a cart, and place delivery or pickup orders — all without leaving Telegram. Confirmed orders are pushed in real time to a private Telegram group for the restaurant team and logged to Google Sheets.</p>
      `,
    keyFeatures: `
      <ul>
        <li>Multi-language support — English, French, Ukrainian, and Russian</li>
        <li>Menu browsing by category with dish photos, ingredients, weight, and euro pricing</li>
        <li>Cart with quantity controls and item removal</li>
        <li>Full checkout flow: name, phone, delivery address, day and time slot selection</li>
        <li>Delivery fee calculation with Strasbourg area coverage</li>
        <li>Order confirmation summary before placing</li>
        <li>Real-time order notifications to a private Telegram group, visible to all restaurant members</li>
        <li>Orders logged to Google Sheets for the owner</li>
      </ul>
      `,
    role: `
      <p>I built this bot from scratch as a freelance project for a local sushi restaurant in Strasbourg. The goal was to let customers order directly through Telegram, removing friction from third-party apps and giving the owner full visibility over orders in a channel and spreadsheet they already used.</p>

      <ul>
        <li>Designed and built the full bot using Python and aiogram 3, with FSM-based conversation flows for menu browsing, cart management, and multi-step checkout</li>
        <li>Implemented multi-language support (EN, FR, UK, RU) with a custom i18n layer</li>
        <li>Integrated Google Sheets API to log every order automatically for the restaurant owner</li>
        <li>Built a real-time order notification system that posts structured order summaries to a private Telegram group for the restaurant team</li>
        <li>Deployed on Render with a Procfile and nixpacks configuration</li>
      </ul>
      `,
    techStack: ['Python', 'aiogram', 'Google Sheets API', 'Pydantic'],
    thumbnail: '/projects/thumbnail/korisu.webp',
    longThumbnail: '/projects/long/korisu.webp',
    images: [
      '/projects/images/korisu-1.webp',
      '/projects/images/korisu-2.webp',
      '/projects/images/korisu-3.webp',
      '/projects/images/korisu-4.webp',
      '/projects/images/korisu-5.webp',
      '/projects/images/korisu-6.webp',
      '/projects/images/korisu-7.webp',
    ],
  },
  {
    title: 'Austen & Blake',
    slug: 'austen-blake',
    liveUrl: 'https://www.austenblake.com/',
    description: `
      A luxury diamond jewellery e-commerce platform for one of the UK's leading bespoke jewellers — spanning engagement rings, wedding rings, diamond rings, and fine jewellery.
      `,
    keyFeatures: `
      <ul>
        <li>Multi-step ring customisation tool: choose diamond type (natural or lab-created), shape (round, oval, emerald, pear, cushion, marquise and more), carat weight, clarity grade, and metal (9K–18K white/yellow/rose gold and platinum) — with dynamic pricing throughout</li>
        <li>Product catalogue across engagement, wedding, and diamond rings with filtering by style, shape, and metal via Algolia-powered search</li>
        <li>Shopping bag with coupon codes, gift cards, and integrated jewellery insurance (TH March)</li>
        <li>Checkout with guest and registered flows, 0% APR finance (V12), and multiple payment methods</li>
        <li>In-store appointment booking and UK store locator</li>
      </ul>
      `,
    role: `
      <p>I worked on Austen & Blake as a Frontend Developer at Broxbe, building features for a high-traffic luxury jewellery platform serving customers across the UK.</p>

      <ul>
        <li>Built the ring customisation tool — allowing customers to configure diamond type (lab or natural), shape, carat, clarity, and metal, with real-time price updates on each selection</li>
        <li>Integrated Algolia search for fast product discovery and multi-faceted filtering across the full catalogue</li>
        <li>Developed new features and components working closely with design to deliver pixel-perfect UI to brand standards</li>
        <li>Improved performance and accessibility scores across key pages</li>
      </ul>
      `,
    techStack: ['Next.js', 'React', 'TypeScript', 'Sass'],
    thumbnail: '/projects/thumbnail/austen-blake.webp',
    longThumbnail: '/projects/long/austen-blake.webp',
    images: [
      '/projects/images/austen-blake-1.webp',
      '/projects/images/austen-blake-2.webp',
      '/projects/images/austen-blake-3.webp',
      '/projects/images/austen-blake-4.webp',
      '/projects/images/austen-blake-5.webp',
      '/projects/images/austen-blake-6.webp',
    ],
  },
  {
    title: 'Exerfly',
    slug: 'exerfly',
    liveUrl: 'https://www.exerflysport.com/',
    description: `
      <p>Exerfly is a US-based manufacturer of flywheel resistance training equipment used by elite sports organisations including UFC, NBA, NFL, and Premier League clubs. I worked on the Exerfly fitness platform — a web application providing athletes and coaches with structured training content and resources.</p>
      `,
    keyFeatures: `
      <ul>
        <li>Video training modules covering flywheel-based exercises and programming</li>
        <li>Exercise library with categorised drills and coaching cues</li>
        <li>CMS-managed educational content including research, case studies, and equipment guides</li>
      </ul>
      `,
    role: `
      <p>I worked on the Exerfly platform as a Frontend Developer at Broxbe, building the training content experience on top of a Next.js and React stack.</p>

      <ul>
        <li>Developed the platform frontend with Next.js and React, implementing page routing, layouts, and reusable components</li>
        <li>Integrated GraphQL API for fetching training content, exercise data, and user resources</li>
        <li>Built video training module pages with structured playback and supporting content</li>
      </ul>
      `,
    techStack: ['Next.js', 'React', 'GraphQL', 'JavaScript', 'Sass'],
    thumbnail: '/projects/thumbnail/exarfly.webp',
    longThumbnail: '/projects/long/exarfly.webp',
    images: [
      '/projects/images/exarfly-1.webp',
      '/projects/images/exarfly-2.webp',
      '/projects/images/exarfly-3.webp',
      '/projects/images/exarfly-4.webp',
      '/projects/images/exarfly-5.webp',
    ],
  },
];

export const MY_EXPERIENCE: IExperience[] = [
  {
    title: 'Senior Full-Stack Developer',
    company: 'Mainflow',
    duration: 'Oct 2025 – Present',
    description: [],
    techStack: [],
    clients: [
      {
        name: 'AI Workforce-Readiness Platform · May–Jul 2026',
        description: [
          'Sole developer, end to end — an AI workforce-readiness SaaS on Next.js 16 (App Router, React 19), Prisma/PostgreSQL, deployed to Google Cloud Run',
          'Architected a multi-stage Claude analysis engine with JSON-schema-constrained output, Zod validation, and a self-correcting re-prompt loop',
          'Built a deterministic scoring firewall — a pure function, no LLM — guaranteeing byte-identical output for identical inputs',
          'Added a three-layer PII boundary (dictionary, regex, local NER model) so no personal data ever reaches the LLM',
          'Shipped a human approval gate with per-field audit trail, AES-256-GCM encryption at rest, ~700 unit tests, and ~117 Playwright E2E tests',
        ],
        techStack: [
          'Next.js 16',
          'React 19',
          'TypeScript',
          'Prisma',
          'PostgreSQL',
          'Anthropic Claude',
          'Zod',
          'transformers.js',
          'Playwright',
          'Google Cloud Run',
        ],
      },
      {
        name: 'AI Sales Agent — Telehealth · Apr–Jun 2026',
        description: [
          'Built an omnichannel AI sales agent reaching leads over SMS, email, and voice within 5 minutes of form abandonment',
          'Architected a distributed Google Cloud backend — Sequencer, Adapter, and Worker services over Pub/Sub',
          'Kept a PostgreSQL database in sync with GoHighLevel for lead pipeline state and conversation history',
          'Integrated OpenAI GPT for conversation logic, intent extraction, and a 5-step price-objection playbook',
          'Wired up Vapi voice calls with warm transfer to human agents, plus guardrails routing clinical questions to dermatologist review',
        ],
        techStack: [
          'Node.js',
          'Google Cloud',
          'Pub/Sub',
          'PostgreSQL',
          'OpenAI GPT',
          'OpenRouter',
          'Vapi',
          'Twilio',
          'GoHighLevel API',
          'Sentry',
        ],
      },
      {
        name: 'SotaProxy · Feb–Apr 2026',
        description: [
          'Built a SaaS proxy marketplace across a four-package monorepo — landing, dashboard, admin panel, and Fastify API',
          'Designed the backend along DDD lines with 10+ versioned migrations and Supabase row-level security',
          'Integrated two upstream proxy providers behind a unified catalog with scheduled inventory sync',
          'Integrated the AnyMoney crypto gateway with HMAC-SHA512 signing, constant-time verification, and replay protection',
          'Built usage-based PAYG billing with markup, auto-renewal, partial refunds, and a multilingual blog (EN/RU/UK/ES)',
        ],
        techStack: [
          'Fastify',
          'TypeScript',
          'Zod',
          'Next.js',
          'React',
          'Supabase',
          'PostgreSQL',
          'AnyMoney',
        ],
      },
      {
        name: 'YourPath — Senior Living Matching · Oct 2025 – Feb 2026',
        description: [
          'Built a full-stack platform serving personalised senior-living recommendations through AI-driven analysis',
          'Integrated Retell AI and Twilio for phone-based intake, using OpenAI GPT to extract 30+ structured fields',
          'Developed a PostGIS geographic matching algorithm scoring compatibility across 40+ communities',
          'Automated AI-generated HTML/PDF recommendation documents via n8n workflows',
          'Wired up SMS verification (Twilio + JWT), Resend transactional email, and Klaviyo CRM',
        ],
        techStack: ['Next.js', 'React', 'TypeScript', 'PostgreSQL', 'tRPC', 'PostGIS', 'OpenAI GPT', 'Retell AI', 'Twilio', 'n8n'],
      },
    ],
  },
  {
    title: 'Senior Full-Stack Developer',
    company: 'Dashboardly',
    duration: 'Jan 2025 – Oct 2025',
    description: [
      'Core contributor owning full-cycle development of major features — Next.js frontend, NestJS API, PostgreSQL — from design to production',
      'Designed and built 5 analytics modules including Sales & Profit Dashboard, P&L Analytics, and Cohort Retention with heatmaps',
      'Built and optimised NestJS backend services, improving query response times through strategic indexing',
      'Developed Customer Purchase Journey analysis with conversion tracking, processing thousands of daily transactions',
    ],
    techStack: ['Next.js', 'TypeScript', 'Node.js', 'NestJS', 'Prisma', 'PostgreSQL', 'Docker', 'AG-Grid', 'D3.js', 'Chart.js'],
  },
  {
    title: 'Frontend Engineer',
    company: 'DoorFeed',
    duration: 'Aug 2024 – Jan 2025',
    description: [
      'Built a Market Data dashboard visualising 50,000+ property data points with Highcharts and global leaderboards',
      'Integrated MapBox for geospatial analytics with dynamic markers and clustering across multiple countries',
      'Incorporated ChatGPT API for AI-assisted data exploration and contextual property recommendations',
      'Modified SQL databases and crafted queries for efficient data fetching; ran code reviews across a team of 3–4',
    ],
    techStack: ['React', 'Next.js', 'TypeScript', 'React Query', 'Material UI', 'Highcharts', 'MapBox', 'ChatGPT API', 'AWS', 'SQL'],
  },
  {
    title: 'Frontend Developer',
    company: 'Valtech',
    duration: 'Mar 2022 – Aug 2024',
    description: [],
    techStack: [],
    clients: [
      {
        name: 'Specsavers — E-Commerce Search',
        description: [
          'Migrated e-commerce search to Algolia — autocomplete, instant results, and advanced filtering',
          'Integrated Contentstack CMS with reusable components and multi-market schema mapping',
          'Optimised performance via code splitting and lazy loading; ensured WCAG accessibility and SEO',
          'Presented completed features directly to client stakeholders',
        ],
        techStack: ['Vue 3', 'Nuxt 3', 'TypeScript', 'Contentstack', 'GraphQL', 'Algolia', 'Jest', 'Cypress'],
      },
      {
        name: 'Mitchell & Butlers — Multi-Brand Platform',
        description: [
          'Led front-end migration (All Bar One, Harvester, Miller & Carter) from a Nuxt 2 monolith to Nuxt 3 per MACH principles',
          'Extracted coupled features into reusable, domain-based modules (menus, booking, locations)',
          'Configured Docker environments and CI/CD pipelines for consistent deployments',
          'Implemented a comprehensive testing strategy (unit, integration, E2E) with Jest and Cypress',
        ],
        techStack: ['Vue 2/3', 'React', 'Nuxt 2/3', 'TypeScript', 'React Query', 'Contentful', 'Docker', 'Jest', 'Cypress'],
      },
      {
        name: 'ASML — Global Careers Platform',
        description: [
          'Redeveloped the core job search feature using Next.js and Sitecore, improving filtering logic',
          'Refactored components to reduce load times with lightweight rendering patterns and optimised API usage',
          'Presented complex technical details to non-technical stakeholders through regular demos',
        ],
        techStack: ['Next.js', 'Sitecore', 'TypeScript', 'Cypress', 'Jest'],
      },
      {
        name: 'Ericsson — Innovation Articles Platform',
        description: [
          'Built a content-driven technology innovation platform using React, Gatsby, and Chakra UI with a GraphQL data layer',
          'Created dynamic article pages optimised for performance, reusability, and content-driven workflows',
        ],
        techStack: ['React', 'Gatsby', 'TypeScript', 'Chakra UI', 'GraphQL'],
      },
    ],
  },
  {
    title: 'Frontend Developer (Part-time)',
    company: 'Northcott Global Solutions',
    duration: 'Feb 2023 – Aug 2023',
    description: [
      'Developed a data-driven CRM platform with React and TypeScript, focused on front-end architecture',
      'Reduced page load times by 1–3 seconds vs the legacy PHP platform via memoisation and React Query caching',
      'Implemented OAuth2 authentication with role-based permissions',
      'Created custom hooks and modularised common functionality for clean, reusable code',
    ],
    techStack: ['React.js', 'TypeScript', 'React Query', 'OAuth2', 'Jest', 'Cypress'],
  },
  {
    title: 'Frontend Developer',
    company: 'Broxbe',
    duration: 'May 2020 – Mar 2022',
    description: [
      'Developed the Exerfly fitness platform (New Zealand) with workout data aggregation and video-based training modules',
      'Built the Austin & Blake ring customisation platform with a gem/band recommendation algorithm',
      'Integrated Decap CMS across both projects for efficient content and product management',
    ],
    techStack: ['Vue', 'Nuxt', 'React', 'Next.js', 'GraphQL', 'Decap CMS'],
  },
  {
    title: 'Frontend Developer',
    company: 'WarmDevs',
    duration: 'Nov 2019 – May 2020',
    description: [
      'Delivered bespoke websites and web applications for various clients',
      'Integrated Firebase authentication for secure user management',
      'Automated client workflows with Zapier integrations',
    ],
    techStack: ['HTML', 'CSS', 'JavaScript', 'Webflow', 'Firebase', 'Zapier'],
  },
];
