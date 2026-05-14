import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import PageHero from '../components/PageHero'
import SEO from '../components/SEO'
import StructuredData from '../components/StructuredData'
import { servicePages } from '../data/seoContent'
import { breadcrumbSchema } from '../lib/seo'

function ServicesPage() {
  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
  ]

  return (
    <>
      <SEO
        title="Software Development Services | Mathlas Development"
        description="Explore Mathlas Development services including web development, mobile app development, ERP software development, UI UX services, and cloud infrastructure services."
        keywords="software development services, web development company, mobile app development, ERP software development, UI UX services, cloud infrastructure services"
        canonical="/services"
      />
      <StructuredData data={breadcrumbSchema(breadcrumbs)} />
      <PageHero
        eyebrow="Services"
        title="Custom software solutions for modern businesses"
        description="Explore SEO-friendly service pages for software development, ERP software development, mobile app development, web platforms, UI UX services, and cloud infrastructure."
        breadcrumbs={breadcrumbs}
      />
      <section className="bg-slate-950 px-5 py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {servicePages.map((service) => (
            <article className="rounded-2xl border border-white/10 bg-white/[0.055] p-7 shadow-xl shadow-slate-950/20 transition hover:-translate-y-2 hover:border-cyan-300/35" key={service.slug}>
              <h2 className="text-2xl font-semibold text-white">{service.title}</h2>
              <p className="mt-4 leading-8 text-slate-300">{service.description}</p>
              <Link className="mt-6 inline-flex items-center gap-2 font-semibold text-cyan-200 transition hover:text-white" to={service.path}>
                Learn more <FiArrowRight aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

export default ServicesPage
