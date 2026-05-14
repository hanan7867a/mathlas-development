export const siteConfig = {
  name: 'Mathlas Development',
  baseUrl: 'https://mathlasdevelopment.com',
  logo: 'https://mathlasdevelopment.com/favicon.svg',
  ogImage: 'https://mathlasdevelopment.com/assets/mathlas-technology-illustration.png',
  email: 'info@mathlasdevelopment.com',
  phone: '+92 XXX XXXXXXX',
  location: 'Pakistan',
  address: {
    addressCountry: 'PK',
    addressRegion: 'Islamabad Capital Territory',
    addressLocality: 'Islamabad',
  },
  socialLinks: [
    'https://www.linkedin.com/company/mathlas-development',
    'https://www.facebook.com/mathlasdevelopment',
    'https://twitter.com/mathlasdev',
    'https://github.com/mathlas-development',
  ],
}

export const seoDefaults = {
  title: 'Mathlas Development | Software Development Company',
  description:
    'Mathlas Development provides web development, mobile apps, ERP solutions, UI/UX design, cloud solutions, and custom software development services.',
  keywords:
    'software development company, web development company, ERP software, mobile app development, cloud solutions, Pakistan software house, custom software company Islamabad',
}

export const servicePages = [
  {
    slug: 'web-development',
    title: 'Web & Full Stack Development',
    shortTitle: 'Web Development',
    description:
      'Premium web development services for business websites, SaaS platforms, portals, dashboards, and secure full-stack applications.',
    keywords:
      'web development company, full stack development, React development, custom web application development, web development company Pakistan',
    hero:
      'Mathlas Development builds fast, secure, and scalable web platforms using modern frontend, backend, API, and cloud practices.',
    services: ['React web applications', 'Admin dashboards', 'API development', 'SaaS platforms'],
    path: '/services/web-development',
  },
  {
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    shortTitle: 'Mobile Apps',
    description:
      'Custom mobile app development for Android, iOS, fintech, booking, e-commerce, education, and business automation products.',
    keywords:
      'mobile app development, mobile app development Pakistan, fintech app development, Android app development, iOS app development',
    hero:
      'We design and develop polished mobile experiences that keep business workflows, customers, and teams connected anywhere.',
    services: ['Android apps', 'iOS apps', 'Cross-platform apps', 'Mobile banking solutions'],
    path: '/services/mobile-app-development',
  },
  {
    slug: 'erp-solutions',
    title: 'ERP Software Development',
    shortTitle: 'ERP Solutions',
    description:
      'Custom ERP software development for inventory, finance, HR, reporting, approvals, and enterprise workflow automation.',
    keywords:
      'ERP software development, custom ERP solutions, ERP software Pakistan, business automation, enterprise software development',
    hero:
      'Mathlas Development creates ERP systems that simplify operations, centralize data, and give leadership clearer visibility.',
    services: ['Inventory management', 'Finance modules', 'HR workflows', 'Reporting dashboards'],
    path: '/services/erp-solutions',
  },
  {
    slug: 'cloud-solutions',
    title: 'Cloud Infrastructure Services',
    shortTitle: 'Cloud Solutions',
    description:
      'Cloud infrastructure services for deployment, scaling, backups, DevOps, monitoring, Docker, AWS, Firebase, and secure hosting.',
    keywords:
      'cloud infrastructure services, AWS development, DevOps services Pakistan, Docker deployment, cloud solutions',
    hero:
      'We help businesses deploy, monitor, and scale software on reliable cloud infrastructure with practical DevOps workflows.',
    services: ['Cloud deployment', 'Docker setup', 'Monitoring', 'Backup strategy'],
    path: '/services/cloud-solutions',
  },
  {
    slug: 'ui-ux-design',
    title: 'UI UX Services',
    shortTitle: 'UI/UX Design',
    description:
      'Professional UI UX services for SaaS dashboards, mobile apps, websites, ERP products, and user-centered digital platforms.',
    keywords:
      'UI UX services, UI UX design Pakistan, SaaS design, mobile app UI design, product design services',
    hero:
      'Our design process turns complex business requirements into clean, usable, and conversion-friendly digital experiences.',
    services: ['UX research', 'Wireframes', 'Design systems', 'Clickable prototypes'],
    path: '/services/ui-ux-design',
  },
  {
    slug: 'application-modernization',
    title: 'Application Modernization',
    shortTitle: 'Modernization',
    description:
      'Application modernization services for legacy software, outdated portals, slow systems, and cloud-ready product upgrades.',
    keywords:
      'application modernization, legacy software modernization, software upgrade services, cloud migration Pakistan',
    hero:
      'We refactor, redesign, and modernize older systems so they become faster, safer, and easier to maintain.',
    services: ['Legacy audits', 'Frontend refresh', 'API migration', 'Performance tuning'],
    path: '/services/application-modernization',
  },
]

export const staticRoutes = [
  { path: '/', label: 'Home', priority: '1.0' },
  { path: '/about', label: 'About', priority: '0.8' },
  { path: '/services', label: 'Services', priority: '0.9' },
  { path: '/solutions', label: 'Solutions', priority: '0.8' },
  { path: '/portfolio', label: 'Portfolio', priority: '0.8' },
  { path: '/blog', label: 'Blog', priority: '0.8' },
  { path: '/contact', label: 'Contact', priority: '0.9' },
]

export const blogPosts = [
  {
    slug: 'how-custom-software-solutions-help-businesses-scale',
    title: 'How Custom Software Solutions Help Businesses Scale',
    category: 'Software Engineering',
    description:
      'Learn how custom software solutions help growing businesses automate operations, reduce manual work, and scale with confidence.',
    keywords:
      'custom software solutions, software development company, business automation, scalable software architecture',
    date: '2026-05-10',
    readTime: '5 min read',
    image: '/assets/mathlas-technology-illustration.png',
    path: '/blog/how-custom-software-solutions-help-businesses-scale',
  },
  {
    slug: 'erp-software-development-for-modern-operations',
    title: 'ERP Software Development for Modern Operations',
    category: 'Business Automation',
    description:
      'A practical guide to ERP software development for inventory, finance, approvals, reporting, and operational visibility.',
    keywords:
      'ERP software development, custom ERP solutions, business automation, ERP software Pakistan',
    date: '2026-05-08',
    readTime: '6 min read',
    image: '/assets/mathlas-technology-illustration.png',
    path: '/blog/erp-software-development-for-modern-operations',
  },
  {
    slug: 'cloud-infrastructure-services-for-growing-products',
    title: 'Cloud Infrastructure Services for Growing Products',
    category: 'Cloud Infrastructure',
    description:
      'Explore cloud infrastructure services that improve deployment speed, reliability, backups, monitoring, and scalability.',
    keywords:
      'cloud infrastructure services, DevOps services, AWS deployment, Docker deployment, cloud solutions Pakistan',
    date: '2026-05-05',
    readTime: '4 min read',
    image: '/assets/mathlas-technology-illustration.png',
    path: '/blog/cloud-infrastructure-services-for-growing-products',
  },
  {
    slug: 'ui-ux-services-that-improve-software-adoption',
    title: 'UI UX Services That Improve Software Adoption',
    category: 'UI/UX',
    description:
      'Discover how professional UI UX services make business software easier to use, faster to learn, and more valuable.',
    keywords:
      'UI UX services, product design, SaaS UI design, software usability, mobile app UI UX',
    date: '2026-05-01',
    readTime: '4 min read',
    image: '/assets/mathlas-technology-illustration.png',
    path: '/blog/ui-ux-services-that-improve-software-adoption',
  },
]

export const blogCategories = [
  'Web Development',
  'Cloud Infrastructure',
  'Mobile Apps',
  'UI/UX',
  'Software Engineering',
  'Business Automation',
]

export const projectPages = [
  {
    slug: 'erp-management-system',
    title: 'ERP Management System',
    path: '/portfolio/erp-management-system',
    description:
      'A custom ERP management system concept covering inventory, finance, HR workflows, approvals, and executive reporting.',
    keywords: 'ERP management system, ERP software development, custom ERP solutions',
  },
  {
    slug: 'healthcare-appointment-platform',
    title: 'Healthcare Appointment Platform',
    path: '/portfolio/healthcare-appointment-platform',
    description:
      'A healthcare appointment platform concept for patient booking, doctor scheduling, clinic administration, and secure records.',
    keywords: 'healthcare appointment platform, healthcare software, custom software solutions',
  },
  {
    slug: 'ecommerce-web-application',
    title: 'E-commerce Web Application',
    path: '/portfolio/ecommerce-web-application',
    description:
      'An e-commerce web application concept with product management, checkout, inventory, payments, and analytics.',
    keywords: 'e-commerce web application, web development company, ecommerce software development',
  },
]

export const serviceFaqs = [
  {
    question: 'Why choose Mathlas Development?',
    answer:
      'Mathlas Development combines product thinking, clean UI/UX, scalable engineering, and long-term support for businesses that need reliable digital products.',
  },
  {
    question: 'Do you build custom ERP systems?',
    answer:
      'Yes. We build custom ERP systems for inventory, finance, HR, reporting, approvals, and business automation workflows.',
  },
  {
    question: 'Do you provide cloud solutions?',
    answer:
      'Yes. Our cloud infrastructure services include deployment, Docker setup, AWS and Firebase workflows, monitoring, backups, and scalability planning.',
  },
]
