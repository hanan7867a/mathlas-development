import { motion } from 'framer-motion'
import {
  FiClock,
  FiCpu,
  FiHeadphones,
  FiLock,
  FiSliders,
  FiZap,
} from 'react-icons/fi'
import SectionHeader from './SectionHeader'

const reasons = [
  {
    title: 'Custom Software Solutions',
    description: 'Every product is shaped around your workflows, goals, and operating model.',
    icon: FiSliders,
  },
  {
    title: 'Scalable Architecture',
    description: 'We design foundations that support growing teams, data, users, and integrations.',
    icon: FiCpu,
  },
  {
    title: 'Clean UI/UX',
    description: 'Interfaces stay simple, accessible, and efficient for real business users.',
    icon: FiZap,
  },
  {
    title: 'Secure Development',
    description: 'Security-minded engineering, access control, and data protection from day one.',
    icon: FiLock,
  },
  {
    title: 'Fast Delivery',
    description: 'Clear milestones, focused releases, and visible progress from concept to launch.',
    icon: FiClock,
  },
  {
    title: 'Long-Term Support',
    description: 'Ongoing improvements, monitoring, fixes, and feature evolution after launch.',
    icon: FiHeadphones,
  },
]

function WhyChooseUs() {
  return (
    <section className="bg-slate-950 px-5 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Why Choose Us"
          title="Built with engineering discipline and product empathy"
          description="We combine clean implementation with practical business thinking so your software feels excellent today and remains adaptable tomorrow."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => {
            const Icon = reason.icon

            return (
              <motion.article
                className="group rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.075] to-white/[0.035] p-7 shadow-xl shadow-slate-950/20 transition hover:-translate-y-2 hover:border-blue-300/35"
                key={reason.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
              >
                <div className="mb-6 inline-grid h-14 w-14 place-items-center rounded-2xl bg-blue-500/[0.12] text-2xl text-cyan-200 transition group-hover:scale-110 group-hover:bg-cyan-300 group-hover:text-slate-950">
                  <Icon />
                </div>
                <h3 className="text-xl font-semibold text-white">{reason.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{reason.description}</p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
