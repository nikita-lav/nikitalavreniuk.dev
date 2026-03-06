import {IExperience, IProject} from '@/types';

export const GENERAL_INFO = {
  email: 'mykyta.lavreniuk@gmail.com',
  emailSubject: "Let's work together",
  emailBody: 'Hi Nikita, I am reaching out because...',
};

export const SOCIAL_LINKS = [
  {name: 'github', url: 'https://github.com/nikita-lav'},
  {name: 'linkedin', url: 'https://www.linkedin.com/in/nikita-lavreniuk-83bb98178'},
];

export const MY_STACK = {
  frontend: [
    {name: 'JavaScript', icon: '/logo/js.png'},
    {name: 'TypeScript', icon: '/logo/ts.png'},
    {name: 'React', icon: '/logo/react.png'},
    {name: 'Vue.js', icon: '/logo/vue.svg'},
    {name: 'Next.js', icon: '/logo/next.png'},
    {name: 'Nuxt.js', icon: '/logo/nuxt.svg'},
    {name: 'Angular', icon: '/logo/angular.svg'},
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
        <li>Designed and implemented 5 feature-rich analytics modules: Sales &amp; Profit Dashboard, Profit &amp; Loss Analytics with multi-dimensional KPI comparison, Cohort Retention Analysis with heatmap visualisations, inventory management, and order management — built in Angular with NGXS state management</li>
        <li>Developed Customer Purchase Journey flow analysis with conversion rate tracking and retention statistics, processing thousands of daily transaction records</li>
        <li>Built and optimised NestJS backend services — controllers, modules, database schemas, and Prisma migrations — improving query response times through strategic indexing</li>
        <li>Engineered a BullMQ queue system with 15+ processors for parallel async imports from the TikTok Shop API (products, orders, inventory, FBT, statements), integrated Socket.IO WebSockets for real-time live metrics</li>
        <li>Implemented Stripe subscription management with webhook processing for billing events and a self-serve customer portal</li>
      </ul>
      `,
    techStack: ['Angular', 'NestJS', 'PostgreSQL', 'Redis', 'TypeScript', 'BullMQ', 'Socket.IO', 'TikTok Shop API', 'Stripe', 'ApexCharts', 'AG-Grid', 'd3.js'],
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
    techStack: ['Nuxt', 'TypeScript', 'Sass'],
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
      <p>I worked on the Exerfly platform as a Frontend Developer at Broxbe, building the training content experience on top of a Nuxt 2 and GraphQL stack.</p>

      <ul>
        <li>Developed the platform frontend with Nuxt 2 and Vue.js, implementing page routing, layouts, and reusable components</li>
        <li>Integrated GraphQL API for fetching training content, exercise data, and user resources</li>
        <li>Built video training module pages with structured playback and supporting content</li>
      </ul>
      `,
    techStack: ['Nuxt 2', 'Vue.js', 'GraphQL', 'JavaScript', 'Sass'],
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
    duration: 'Oct 2025 – Feb 2026',
    description: [
      'Built YourPath platform — an AI-driven platform that provides tailored roadmap for seniors to find ideal communities for their needs and circumstances',
      'Integrated Retell AI and Twilio for real-time voice intake flows',
      'Implemented PostGIS geographic matching for location-aware recommendations',
      'Automated PDF report generation via n8n workflows',
      'Wired up SMS notifications, JWT auth, Resend email, and Klaviyo marketing flows',
    ],
    techStack: ['Next.js', 'React', 'TypeScript', 'PostgreSQL', 'tRPC', 'PostGIS', 'OpenAI GPT', 'Retell AI', 'Twilio', 'n8n'],
  },
  {
    title: 'Senior Full-Stack Developer',
    company: 'Dashboardly',
    duration: 'Jan 2025 – Oct 2025',
    description: [
      'Sole developer of a SaaS TikTok analytics platform built with Angular and NestJS',
      'Delivered 5 analytics modules covering creator performance, audience insights, and trend analysis',
      'Designed P&L, Cohort, and Sales dashboards for business decision-making',
      'Built NestJS backend with Prisma ORM and PostgreSQL for scalable data management',
    ],
    techStack: ['Angular', 'TypeScript', 'Node.js', 'NestJS', 'Prisma', 'PostgreSQL', 'Docker', 'AG-Grid', 'D3.js', 'Chart.js'],
  },
  {
    title: 'Frontend Engineer',
    company: 'DoorFeed',
    duration: 'Aug 2024 – Jan 2025',
    description: [
      'Built a dashboard visualising 50k+ property data points with real-time filtering',
      'Integrated MapBox for geospatial property search and map interactions',
      'Wired up ChatGPT API for AI-assisted property insights',
      'Wrote and optimised complex SQL queries for data aggregation',
      'Conducted code reviews and maintained frontend quality standards',
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
        name: 'Specsavers',
        description: [
          'Led Algolia search migration — autocomplete, faceted filtering, and relevance tuning',
          'Integrated Contentstack CMS for flexible content management across storefronts',
          'Optimised LCP and Core Web Vitals, achieving measurable performance improvements',
          'Enforced WCAG 2.1 AA accessibility compliance across all new features',
          'Presented progress and demos to senior stakeholders and product owners',
        ],
        techStack: ['Vue 3', 'Nuxt 3', 'TypeScript', 'Contentstack', 'GraphQL', 'Algolia', 'Jest', 'Cypress'],
      },
      {
        name: 'Mitchell & Butlers',
        description: [
          'Migrated All Bar One, Harvester, and Miller & Carter from Nuxt 2 to Nuxt 3',
          'Adopted MACH architecture (Microservices, API-first, Cloud-native, Headless)',
          'Structured codebase into domain-based modules for maintainability at scale',
          'Set up Docker environments and CI/CD pipelines for streamlined deployments',
          'Established a testing strategy covering unit, integration, and E2E layers',
        ],
        techStack: ['Vue 2/3', 'React', 'Nuxt 2/3', 'TypeScript', 'React Query', 'Contentful', 'Docker', 'Jest', 'Cypress'],
      },
      {
        name: 'ASML',
        description: [
          'Delivered a Vue 2 + Sitecore job search feature used by thousands of applicants',
          'Refactored legacy components to reduce initial load time significantly',
          'Collaborated with stakeholders in demos and iterative feedback sessions',
        ],
        techStack: ['Vue 2', 'Sitecore', 'JavaScript', 'Cypress', 'Jest'],
      },
      {
        name: 'Ericsson',
        description: [
          'Built an innovation articles platform using React and Gatsby for Ericsson',
          'Implemented GraphQL data layer for efficient content fetching and caching',
          'Created performance-optimised dynamic pages with server-side rendering',
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
      'Built a React CRM platform for 24/7 international emergency response and risk management',
      'Reduced load times from 1–3 seconds through memoisation and React Query caching',
      'Implemented OAuth2 authentication with role-based access control',
      'Developed custom hooks for reusable data-fetching and UI logic',
    ],
    techStack: ['React.js', 'TypeScript', 'React Query', 'OAuth2', 'Jest', 'Cypress'],
  },
  {
    title: 'Frontend Developer',
    company: 'Broxbe',
    duration: 'May 2020 – Mar 2022',
    description: [
      'Developed the Exerfly fitness platform with Nuxt 2, GraphQL, and video training modules',
      'Built Austin & Blake ring customisation tool with a recommendation algorithm',
      'Integrated Decap CMS for client-managed content across multiple projects',
    ],
    techStack: ['Vue.js', 'Nuxt 2', 'GraphQL', 'Decap CMS'],
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
