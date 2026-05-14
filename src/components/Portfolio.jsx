import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowUpRight, FiBarChart2, FiCalendar, FiShoppingBag } from 'react-icons/fi'
import { projectPages } from '../data/seoContent'
import SectionHeader from './SectionHeader'

const projects = [
  {
    title: 'ERP Management System',
    path: projectPages[0].path,
    description: 'A modular ERP platform for operations, inventory, staff workflows, finance, and executive reporting.',
    icon: FiBarChart2,
    tags: ['ERP', 'Automation', 'Dashboards'],
  },
  {
    title: 'Healthcare Appointment Platform',
    path: projectPages[1].path,
    description: 'A secure booking and clinic management experience for patients, doctors, and administrators.',
    icon: FiCalendar,
    tags: ['Healthcare', 'Scheduling', 'Portal'],
  },
  {
    title: 'E-commerce Web Application',
    path: projectPages[2].path,
    description: 'A responsive commerce platform with product management, checkout, inventory, and analytics.',
    icon: FiShoppingBag,
    tags: ['Commerce', 'Payments', 'Analytics'],
  },
]

function Portfolio() {
  return (
    <section
      id="portfolio"
      className="bg-[linear-gradient(180deg,#020617_0%,#071a33_100%)] px-5 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Portfolio"
          title="Representative digital products"
          description="A snapshot of the kinds of systems Mathlas Development designs, builds, and supports for business-critical use."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => {
            const Icon = project.icon

            return (
              <motion.article
                className="group overflow-hidden rounded-2xl border border-white/10 bg-slate-950/60 shadow-2xl shadow-slate-950/25 transition hover:-translate-y-2 hover:border-cyan-300/35"
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.28 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <div className="relative h-48 overflow-hidden bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.22),transparent_26%),linear-gradient(135deg,rgba(14,165,233,0.22),rgba(15,23,42,0.95))]">
                  <div className="absolute inset-6 rounded-2xl border border-white/10 bg-white/[0.08] p-5 backdrop-blur-sm">
                    <div className="mb-5 flex items-center justify-between">
                      <Icon className="text-4xl text-cyan-200 transition group-hover:scale-110" />
                      <FiArrowUpRight className="text-2xl text-white/70 transition group-hover:text-cyan-200" />
                    </div>
                    <div className="space-y-3">
                      <div className="h-3 w-4/5 rounded-full bg-white/35" />
                      <div className="h-3 w-3/5 rounded-full bg-cyan-200/70" />
                      <div className="h-3 w-2/3 rounded-full bg-blue-300/55" />
                    </div>
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="text-xl font-semibold text-white">
                    <Link className="transition hover:text-cyan-200" to={project.path}>
                      {project.title}
                    </Link>
                  </h3>
                  <p className="mt-3 leading-7 text-slate-300">{project.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-100"
                        key={tag}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
