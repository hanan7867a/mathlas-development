import { Link, useParams } from 'react-router-dom'
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi'
import Breadcrumbs from '../components/Breadcrumbs'
import FAQ from '../components/FAQ'
import PageHero from '../components/PageHero'
import SEO from '../components/SEO'
import StructuredData from '../components/StructuredData'
import { serviceFaqs, servicePages, siteConfig } from '../data/seoContent'
import { breadcrumbSchema, faqSchema } from '../lib/seo'

function ServicePage() {
  const { slug } = useParams()
  const service = servicePages.find((item) => item.slug === slug) || servicePages[0]
  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: service.shortTitle, path: service.path },
  ]

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.baseUrl,
    },
    areaServed: ['Pakistan', 'United States', 'United Kingdom', 'United Arab Emirates'],
    serviceType: service.title,
    url: `${siteConfig.baseUrl}${service.path}`,
  }

  return (
    <>
      <SEO
        title={`${service.title} | Mathlas Development`}
        description={service.description}
        keywords={service.keywords}
        canonical={service.path}
      />
      <StructuredData data={[breadcrumbSchema(breadcrumbs), serviceSchema, faqSchema(serviceFaqs)]} />
      <PageHero
        eyebrow="Service"
        title={service.title}
        description={service.hero}
        breadcrumbs={breadcrumbs}
      />

      <section className="bg-slate-950 px-5 py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <aside className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-6 lg:sticky lg:top-28 lg:self-start">
            <h2 className="text-2xl font-semibold text-white">Explore Services</h2>
            <nav className="mt-6 grid gap-2" aria-label="Service pages">
              {servicePages.map((item) => (
                <Link
                  className={`rounded-xl px-4 py-3 text-sm font-semibold transition ${
                    item.slug === service.slug
                      ? 'bg-cyan-300 text-slate-950'
                      : 'text-slate-300 hover:bg-white/[0.08] hover:text-white'
                  }`}
                  to={item.path}
                  key={item.slug}
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </aside>

          <article className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-6 shadow-2xl shadow-slate-950/20 md:p-8">
            <Breadcrumbs items={breadcrumbs} />
            <h2 className="text-3xl font-semibold text-white">
              SEO-focused {service.shortTitle.toLowerCase()} for measurable growth
            </h2>
            <p className="mt-5 leading-8 text-slate-300">
              As a software development company, Mathlas Development builds custom
              software solutions that combine clean UI UX services, stable
              architecture, cloud infrastructure services, and maintainable code.
              Our work supports startups, SMEs, and enterprises looking for a
              web development company Pakistan teams can trust.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {service.services.map((item) => (
                <div
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-slate-950/55 p-5"
                  key={item}
                >
                  <FiCheckCircle className="mt-1 shrink-0 text-xl text-cyan-200" aria-hidden="true" />
                  <h3 className="font-semibold text-white">{item}</h3>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-6 py-3 font-bold text-slate-950 transition hover:-translate-y-1 hover:bg-white"
                to="/contact"
              >
                Request a consultation <FiArrowRight aria-hidden="true" />
              </Link>
              <Link
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3 font-bold text-white transition hover:-translate-y-1 hover:border-cyan-300/40"
                to="/portfolio"
              >
                View related work
              </Link>
            </div>
          </article>
        </div>
      </section>

      <FAQ />
    </>
  )
}

export default ServicePage
