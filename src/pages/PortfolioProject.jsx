import { Link, useParams } from 'react-router-dom'
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi'
import PageHero from '../components/PageHero'
import SEO from '../components/SEO'
import StructuredData from '../components/StructuredData'
import { projectPages } from '../data/seoContent'
import { breadcrumbSchema } from '../lib/seo'

function PortfolioProject() {
  const { slug } = useParams()
  const project = projectPages.find((item) => item.slug === slug) || projectPages[0]
  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: project.title, path: project.path },
  ]

  return (
    <>
      <SEO
        title={`${project.title} | Mathlas Development Portfolio`}
        description={project.description}
        keywords={project.keywords}
        canonical={project.path}
      />
      <StructuredData data={breadcrumbSchema(breadcrumbs)} />
      <PageHero
        eyebrow="Portfolio"
        title={project.title}
        description={project.description}
        breadcrumbs={breadcrumbs}
      />
      <section className="bg-slate-950 px-5 py-20 md:py-24">
        <article className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-white/[0.055] p-6 shadow-2xl shadow-slate-950/20 md:p-8">
          <h2 className="text-3xl font-semibold text-white">Project scope</h2>
          <p className="mt-5 leading-8 text-slate-300">
            This portfolio concept demonstrates how Mathlas Development plans and
            builds custom software solutions with clean UI UX services, stable
            database design, secure APIs, cloud infrastructure services, and
            performance-focused web development.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {['Discovery', 'Design & Development', 'Launch & Support'].map((item) => (
              <div className="rounded-2xl border border-white/10 bg-slate-950/55 p-5" key={item}>
                <FiCheckCircle className="mb-4 text-2xl text-cyan-200" aria-hidden="true" />
                <h3 className="font-semibold text-white">{item}</h3>
              </div>
            ))}
          </div>
          <Link className="mt-10 inline-flex items-center gap-2 rounded-full bg-cyan-300 px-6 py-3 font-bold text-slate-950 transition hover:-translate-y-1 hover:bg-white" to="/contact">
            Discuss a similar project <FiArrowRight aria-hidden="true" />
          </Link>
        </article>
      </section>
    </>
  )
}

export default PortfolioProject
