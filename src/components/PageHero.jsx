import { motion } from 'framer-motion'
import Breadcrumbs from './Breadcrumbs'

function PageHero({ eyebrow, title, description, breadcrumbs }) {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_28%),linear-gradient(135deg,#020617_0%,#071a33_100%)] px-5 pb-16 pt-32 md:pt-40">
      <div className="absolute inset-0 animated-gradient opacity-60" />
      <div className="relative mx-auto max-w-7xl">
        {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}
        {eyebrow && (
          <motion.span
            className="mb-5 inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-semibold uppercase text-cyan-200"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            {eyebrow}
          </motion.span>
        )}
        <motion.h1
          className="max-w-4xl text-4xl font-semibold leading-tight text-white md:text-6xl"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05 }}
        >
          {title}
        </motion.h1>
        <motion.p
          className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.12 }}
        >
          {description}
        </motion.p>
      </div>
    </section>
  )
}

export default PageHero
