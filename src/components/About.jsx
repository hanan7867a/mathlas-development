import { motion } from 'framer-motion'
import { FiCheckCircle } from 'react-icons/fi'
import SectionHeader from './SectionHeader'

const highlights = [
  'Product discovery and technical planning',
  'Design, development, QA, and deployment',
  'Maintenance roadmaps for long-term growth',
]

function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#020617_0%,#071a33_100%)] px-5 py-24 md:py-32"
    >
      <div className="absolute -right-24 top-24 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="absolute -inset-5 rounded-[2rem] bg-cyan-400/[0.12] blur-3xl" />
          <picture>
            <source srcSet="/assets/mathlas-technology-illustration.webp" type="image/webp" />
            <img
              src="/assets/mathlas-technology-illustration.png"
              alt="Mathlas Development software systems illustration"
              className="relative aspect-[16/10] w-full rounded-[2rem] border border-white/10 object-cover shadow-2xl shadow-slate-950/40"
              loading="lazy"
              decoding="async"
            />
          </picture>
          <motion.div
            className="absolute -bottom-8 left-5 max-w-[16rem] rounded-2xl border border-cyan-300/30 bg-slate-950/90 p-5 shadow-2xl shadow-cyan-950/40 backdrop-blur-xl md:left-10"
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.2 }}
          >
            <div className="text-4xl font-bold text-cyan-200">5+</div>
            <p className="mt-2 text-sm font-semibold leading-6 text-white">
              Years of Development Excellence
            </p>
          </motion.div>
        </motion.div>

        <div className="pt-8 lg:pt-0">
          <SectionHeader
            align="left"
            eyebrow="About Mathlas Development"
            title="A modern software partner for reliable digital products"
            description="Mathlas Development is a modern software development company helping startups, businesses, and enterprises build reliable digital products."
          />
          <motion.div
            className="grid gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } },
            }}
          >
            {highlights.map((item) => (
              <motion.div
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.055] p-5"
                key={item}
                variants={{
                  hidden: { opacity: 0, x: 20 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.45 }}
              >
                <FiCheckCircle className="mt-1 shrink-0 text-xl text-cyan-200" />
                <p className="text-slate-200">{item}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
