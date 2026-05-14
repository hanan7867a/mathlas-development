import About from '../components/About'
import Contact from '../components/Contact'
import PageHero from '../components/PageHero'
import Portfolio from '../components/Portfolio'
import SEO from '../components/SEO'
import Solutions from '../components/Solutions'
import StructuredData from '../components/StructuredData'
import { breadcrumbSchema } from '../lib/seo'

const pageMap = {
  about: {
    title: 'About Mathlas Development',
    eyebrow: 'About',
    description:
      'Mathlas Development is a software development company in Pakistan helping startups, businesses, and enterprises build custom software solutions.',
    keywords:
      'software development company Pakistan, custom software company Islamabad, software house in Pakistan',
    canonical: '/about',
    content: <About />,
  },
  solutions: {
    title: 'Industry Software Solutions',
    eyebrow: 'Solutions',
    description:
      'Explore healthcare software, education platforms, e-commerce systems, fintech solutions, business automation, and SaaS applications.',
    keywords:
      'healthcare software, education platforms, fintech solutions, SaaS applications, business automation',
    canonical: '/solutions',
    content: <Solutions />,
  },
  portfolio: {
    title: 'Software Development Portfolio',
    eyebrow: 'Portfolio',
    description:
      'View representative ERP, healthcare, e-commerce, and custom software projects by Mathlas Development.',
    keywords:
      'software development portfolio, ERP system, healthcare appointment platform, ecommerce web application',
    canonical: '/portfolio',
    content: <Portfolio />,
  },
  contact: {
    title: 'Contact Mathlas Development',
    eyebrow: 'Contact',
    description:
      'Contact Mathlas Development for web development, mobile app development, ERP software development, UI UX services, and cloud infrastructure services.',
    keywords:
      'contact software development company, software house in Pakistan, web development company Pakistan',
    canonical: '/contact',
    content: <Contact />,
  },
}

function SimplePage({ type }) {
  const page = pageMap[type]
  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: page.eyebrow, path: page.canonical },
  ]

  return (
    <>
      <SEO
        title={`${page.title} | Mathlas Development`}
        description={page.description}
        keywords={page.keywords}
        canonical={page.canonical}
      />
      <StructuredData data={breadcrumbSchema(breadcrumbs)} />
      <PageHero
        eyebrow={page.eyebrow}
        title={page.title}
        description={page.description}
        breadcrumbs={breadcrumbs}
      />
      {page.content}
    </>
  )
}

export default SimplePage
