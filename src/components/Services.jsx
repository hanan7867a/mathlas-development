import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  FaBullhorn,
  FaCode,
  FaHospitalUser,
  FaMobileAlt,
  FaUniversity,
} from 'react-icons/fa'
import { FiLayers, FiLink, FiPenTool, FiRefreshCcw, FiSettings } from 'react-icons/fi'
import { servicePages } from '../data/seoContent'
import SectionHeader from './SectionHeader'

const services = [
  {
    title: 'Digital Marketing Services',
    description: 'Growth-focused campaigns, analytics, content systems, and conversion strategy for digital-first brands.',
    icon: FaBullhorn,
  },
  {
    title: 'Application Modernization',
    description: 'Upgrade legacy products into faster, cleaner, cloud-ready applications without business disruption.',
    icon: FiRefreshCcw,
  },
  {
    title: 'Application Integration',
    description: 'Connect ERPs, CRMs, payment systems, APIs, and internal tools into one reliable workflow.',
    icon: FiLink,
  },
  {
    title: 'Customized ERP Solutions',
    description: 'Purpose-built ERP modules for operations, inventory, finance, HR, reporting, and approvals.',
    icon: FiSettings,
  },
  {
    title: 'Mobile Banking Solutions',
    description: 'Secure mobile banking and fintech experiences designed for speed, trust, and compliance.',
    icon: FaMobileAlt,
  },
  {
    title: 'Web & Full Stack Development',
    description: 'Modern websites, dashboards, portals, APIs, and full-stack platforms built for scale.',
    icon: FaCode,
  },
  {
    title: 'UI/UX Design',
    description: 'User-centered interfaces with clean journeys, polished design systems, and practical prototypes.',
    icon: FiPenTool,
  },
  {
    title: 'Software Development',
    description: 'Reliable custom software, automation tools, and digital products engineered around business goals.',
    icon: FiLayers,
  },
  {
    title: 'Health Solutions',
    description: 'Appointment, patient, clinic, and health operations platforms with secure data handling.',
    icon: FaHospitalUser,
  },
  {
    title: 'Academia Solutions',
    description: 'Learning portals, campus systems, assessment tools, and student management platforms.',
    icon: FaUniversity,
  },
]

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const card = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
}

const servicePathByTitle = {
  'Application Modernization': '/services/application-modernization',
  'Customized ERP Solutions': '/services/erp-solutions',
  'Mobile Banking Solutions': '/services/mobile-app-development',
  'Web & Full Stack Development': '/services/web-development',
  'UI/UX Design': '/services/ui-ux-design',
  'Software Development': '/services/web-development',
}

function Services() {
  return (
    <section id="services" className="relative bg-slate-950 px-5 py-24 md:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent" />
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Services"
          title="Engineering services for every stage of digital growth"
          description="From strategy and design to full-stack engineering, Mathlas Development builds resilient software that can evolve with your business."
        />

        <motion.div
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.16 }}
        >
          {services.map((service) => {
            const Icon = service.icon

            return (
              <motion.article
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.055] p-6 shadow-xl shadow-slate-950/20 backdrop-blur transition hover:-translate-y-2 hover:border-cyan-300/35 hover:bg-white/[0.075] hover:shadow-cyan-950/25"
                key={service.title}
                variants={card}
                transition={{ duration: 0.48, ease: 'easeOut' }}
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-300 to-blue-500 opacity-0 transition group-hover:opacity-100" />
                <div className="mb-6 inline-grid h-14 w-14 place-items-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-2xl text-cyan-200 transition group-hover:scale-110 group-hover:bg-cyan-300 group-hover:text-slate-950">
                  <Icon />
                </div>
                <h3 className="text-lg font-semibold leading-7 text-white">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{service.description}</p>
                <Link
                  className="mt-5 inline-flex text-sm font-semibold text-cyan-200 transition hover:text-white"
                  to={servicePathByTitle[service.title] || servicePages[0].path}
                >
                  View service
                </Link>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Services
