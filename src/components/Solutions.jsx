import { motion } from 'framer-motion'
import {
  FaGraduationCap,
  FaHospital,
  FaShoppingCart,
  FaUniversity,
} from 'react-icons/fa'
import { FiRepeat, FiServer } from 'react-icons/fi'
import SectionHeader from './SectionHeader'

const solutions = [
  {
    title: 'Healthcare Software',
    description: 'Clinic management, appointment systems, patient records, and operational dashboards.',
    icon: FaHospital,
  },
  {
    title: 'Education Platforms',
    description: 'Learning management, academic portals, assessments, attendance, and communication tools.',
    icon: FaGraduationCap,
  },
  {
    title: 'E-commerce Systems',
    description: 'Storefronts, order management, payments, inventory sync, and customer analytics.',
    icon: FaShoppingCart,
  },
  {
    title: 'Banking & Fintech Solutions',
    description: 'Secure transaction experiences, account workflows, onboarding, and financial portals.',
    icon: FaUniversity,
  },
  {
    title: 'Business Automation',
    description: 'Workflow automation, approvals, reports, alerts, and integrated back-office processes.',
    icon: FiRepeat,
  },
  {
    title: 'SaaS Applications',
    description: 'Subscription platforms, admin consoles, tenant architecture, billing, and analytics.',
    icon: FiServer,
  },
]

function Solutions() {
  return (
    <section
      id="solutions"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#071a33_0%,#020617_100%)] px-5 py-24 md:py-32"
    >
      <div className="absolute left-1/2 top-20 h-80 w-[42rem] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Solutions"
          title="Industry-ready platforms for practical business outcomes"
          description="Our solution teams translate complex operations into clear, secure, and scalable digital systems."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution, index) => {
            const Icon = solution.icon

            return (
              <motion.article
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/55 p-7 shadow-xl shadow-slate-950/25 backdrop-blur transition hover:-translate-y-2 hover:border-cyan-300/35"
                key={solution.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
              >
                <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-cyan-300/10 blur-2xl transition group-hover:bg-cyan-300/[0.18]" />
                <Icon className="mb-6 text-4xl text-cyan-200 transition group-hover:scale-110" />
                <h3 className="text-xl font-semibold text-white">{solution.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{solution.description}</p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Solutions
