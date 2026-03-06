import { IExperience, IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'mykyta.lavreniuk@gmail.com',
    emailSubject: "Let's work together",
    emailBody: 'Hi Nikita, I am reaching out because...',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/nikita-lav' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/nikita-lavreniuk-83bb98178' },
];

export const MY_STACK = {
    frontend: [
        { name: 'JavaScript',   icon: '/logo/js.png' },
        { name: 'TypeScript',   icon: '/logo/ts.png' },
        { name: 'React',        icon: '/logo/react.png' },
        { name: 'Vue.js',       icon: '/logo/vue.svg' },
        { name: 'Next.js',      icon: '/logo/next.png' },
        { name: 'Nuxt.js',      icon: '/logo/nuxt.svg' },
        { name: 'Angular',      icon: '/logo/angular.svg' },
        { name: 'HTML5',        icon: '/logo/html.svg' },
        { name: 'Tailwind CSS', icon: '/logo/tailwind.png' },
        { name: 'Sass',         icon: '/logo/sass.png' },
    ],
    backend: [
        { name: 'Node.js',    icon: '/logo/node.png' },
        { name: 'NestJS',     icon: '/logo/nest.svg' },
        { name: 'Express.js', icon: '/logo/express.png' },
        { name: 'tRPC',       icon: '/logo/trpc.svg' },
        { name: 'GraphQL',    icon: '/logo/graphql.svg' },
    ],
    database: [
        { name: 'PostgreSQL', icon: '/logo/postgreSQL.png' },
        { name: 'Supabase',   icon: '/logo/supabase.svg' },
        { name: 'MongoDB',    icon: '/logo/mongodb.svg' },
        { name: 'MySQL',      icon: '/logo/mysql.svg' },
        { name: 'Prisma',     icon: '/logo/prisma.png' },
    ],
    tools: [
        { name: 'Git',            icon: '/logo/git.png' },
        { name: 'Docker',         icon: '/logo/docker.svg' },
        { name: 'AWS',            icon: '/logo/aws.png' },
        { name: 'GitHub Actions', icon: '/logo/github-actions.svg' },
        { name: 'Vercel',         icon: '/logo/vercel.svg' },
        { name: 'Firebase',       icon: '/logo/firebase.svg' },
    ],
    ui: [
        { name: 'Material UI', icon: '/logo/mui.svg' },
        { name: 'Chakra UI',   icon: '/logo/chakra.svg' },
        { name: 'Chart.js',    icon: '/logo/chartjs.svg' },
        { name: 'D3.js',       icon: '/logo/d3.svg' },
        { name: 'MapBox',      icon: '/logo/mapbox.svg' },
        { name: 'Highcharts',  icon: '/logo/highcharts.svg' },
    ],
    cms: [
        { name: 'Algolia',      icon: '/logo/algolia.svg' },
        { name: 'Contentful',   icon: '/logo/contentful.svg' },
        { name: 'Contentstack', icon: '/logo/contentstack.svg' },
        { name: 'Decap CMS',    icon: '/logo/decap.svg' },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'Sanctuary Villas',
        slug: 'sanctuaryvillas',
        liveUrl: 'https://sanctuaryvillas.co/',
        description: `
      A premium villa rental platform built to showcase and book luxury holiday properties. <br/><br/>

      Key Features:<br/>
      <ul>
        <li>Property listings with rich media galleries and detailed amenity breakdowns</li>
        <li>Search and filtering by location, capacity, and dates</li>
        <li>Fully responsive design optimised for mobile and tablet</li>
        <li>CMS-driven content for easy property management</li>
      </ul>
      `,
        role: `
      Frontend Developer <br/>
      <ul>
        <li>Built and styled all UI components from design mockups</li>
        <li>Integrated CMS content model for property listings</li>
        <li>Implemented search, filtering, and booking enquiry flows</li>
        <li>Optimised images and performance for Core Web Vitals</li>
      </ul>
      `,
        techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Contentful'],
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
        title: 'YourPath',
        slug: 'yourpath',
        liveUrl: 'https://www.yourpath.care/',
        description: `
      A career guidance and personal development platform helping users map their professional journey. <br/><br/>

      Key Features:<br/>
      <ul>
        <li>Interactive career path builder with step-by-step goal setting</li>
        <li>User authentication and personalised dashboards</li>
        <li>Progress tracking and milestone visualisation</li>
        <li>Responsive design across all screen sizes</li>
      </ul>
      `,
        role: `
      Full-Stack Developer <br/>
      <ul>
        <li>Designed and built the full application from scratch</li>
        <li>Implemented authentication and user session management</li>
        <li>Developed interactive UI components for path building and progress tracking</li>
        <li>Set up API layer and database schema</li>
      </ul>
      `,
        techStack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
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
      A data visualisation and analytics dashboard platform enabling teams to monitor KPIs and business metrics in real time. <br/><br/>

      Key Features:<br/>
      <ul>
        <li>Configurable widgets: charts, tables, KPI cards, and maps</li>
        <li>Real-time data updates via WebSocket integration</li>
        <li>Role-based access control for multi-user teams</li>
        <li>Export reports as PDF or CSV</li>
      </ul>
      `,
        role: `
      Frontend Developer <br/>
      <ul>
        <li>Built all dashboard UI components and layout system</li>
        <li>Integrated Highcharts and AG-Grid for charts and data tables</li>
        <li>Implemented drag-and-drop widget configuration</li>
        <li>Developed real-time data binding with WebSocket feeds</li>
      </ul>
      `,
        techStack: ['Angular', 'TypeScript', 'Highcharts', 'AG-Grid', 'Sass'],
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
        title: 'Austen & Blake',
        slug: 'austen-blake',
        liveUrl: 'https://www.austenblake.com/',
        description: `
      A luxury diamond jewellery e-commerce website for one of the UK's leading bespoke jewellers. <br/><br/>

      Key Features:<br/>
      <ul>
        <li>Ring builder tool allowing customers to customise stone, setting, and metal</li>
        <li>Rich product catalogue with advanced filtering and search powered by Algolia</li>
        <li>CMS-managed editorial content and landing pages via Sitecore</li>
        <li>Fully accessible and SEO-optimised across all pages</li>
      </ul>
      `,
        role: `
      Frontend Developer <br/>
      <ul>
        <li>Developed new features and components within the Sitecore + React architecture</li>
        <li>Integrated Algolia search for product discovery and filtering</li>
        <li>Worked with the design team to implement pixel-perfect UI across the site</li>
        <li>Improved performance and accessibility scores</li>
      </ul>
      `,
        techStack: ['React', 'TypeScript', 'Sitecore', 'Algolia', 'Sass'],
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
      [Placeholder — please fill in a description for Exerfly.] <br/><br/>

      Key Features:<br/>
      <ul>
        <li>[Feature 1]</li>
        <li>[Feature 2]</li>
        <li>[Feature 3]</li>
      </ul>
      `,
        role: `
      [Role] <br/>
      <ul>
        <li>[Responsibility 1]</li>
        <li>[Responsibility 2]</li>
        <li>[Responsibility 3]</li>
      </ul>
      `,
        techStack: ['[Tech 1]', '[Tech 2]', '[Tech 3]'],
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
