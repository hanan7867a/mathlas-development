import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
}

function SectionHeader({ eyebrow, title, description, align = 'center' }) {
  const isCenter = align === 'center'

  return (
    <motion.div
      className={`mb-12 max-w-3xl ${isCenter ? 'mx-auto text-center' : ''}`}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
    >
      {eyebrow && (
        <span className="mb-4 inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-semibold uppercase text-cyan-200">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl font-semibold text-white md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-8 text-slate-300 md:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  )
}

export default SectionHeader
