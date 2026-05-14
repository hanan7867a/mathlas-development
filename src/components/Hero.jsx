import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiMessageCircle } from 'react-icons/fi'

const fadeUp = {
  hidden: { opacity: 0, y: 34 },
  visible: { opacity: 1, y: 0 },
}

function Hero() {
  return (
    <section
      id="home"
      className="relative isolate min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.22),transparent_28%),radial-gradient(circle_at_75%_15%,rgba(37,99,235,0.28),transparent_30%),linear-gradient(135deg,#020617_0%,#07172d_48%,#0f172a_100%)] px-5 pb-20 pt-32 md:pt-40"
    >
      <div className="absolute inset-0 animated-gradient opacity-70" />
      <motion.div
        className="absolute left-[8%] top-[18%] h-28 w-28 rounded-full border border-cyan-300/30 bg-cyan-300/10 blur-[1px]"
        animate={{ y: [0, -22, 0], rotate: [0, 14, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-[10%] top-[24%] h-36 w-36 rounded-[2rem] border border-blue-300/20 bg-blue-500/10"
        animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[15%] left-[16%] h-20 w-20 rounded-2xl border border-white/15 bg-white/[0.06]"
        animate={{ x: [0, 22, 0], y: [0, -12, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:64px_64px] mask-fade" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.02fr_0.98fr]">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <motion.span
            className="mb-6 inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100"
            variants={fadeUp}
          >
            Software engineering for ambitious businesses
          </motion.span>
          <motion.h1
            className="text-5xl font-semibold leading-[1.05] text-white md:text-7xl"
            variants={fadeUp}
            transition={{ duration: 0.7, delay: 0.08, ease: 'easeOut' }}
          >
            Digital Technology Services
          </motion.h1>
          <motion.p
            className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl"
            variants={fadeUp}
            transition={{ duration: 0.7, delay: 0.16, ease: 'easeOut' }}
          >
            We build modern software solutions that help businesses grow,
            automate, and scale.
          </motion.p>
          <motion.div
            className="mt-10 flex flex-col gap-4 sm:flex-row"
            variants={fadeUp}
            transition={{ duration: 0.7, delay: 0.24, ease: 'easeOut' }}
          >
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-7 py-4 text-sm font-bold text-slate-950 shadow-xl shadow-cyan-500/25 transition hover:-translate-y-1 hover:bg-white"
            >
              Explore Services <FiArrowRight />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.08] px-7 py-4 text-sm font-bold text-white backdrop-blur transition hover:-translate-y-1 hover:border-cyan-200/40 hover:bg-white/[0.12]"
            >
              <FiMessageCircle /> Contact Us
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-xl"
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.22, ease: 'easeOut' }}
        >
          <div className="absolute -inset-6 rounded-[2.5rem] bg-cyan-400/[0.16] blur-3xl" />
          <div className="relative rounded-[2rem] border border-white/[0.12] bg-white/[0.08] p-4 shadow-2xl shadow-cyan-950/40 backdrop-blur-xl">
            <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-5">
              <div className="mb-5 flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-cyan-300" />
                <span className="h-3 w-3 rounded-full bg-blue-400" />
                <span className="h-3 w-3 rounded-full bg-white/50" />
              </div>
              <div className="grid gap-4">
                {[
                  ['Product Strategy', '88%'],
                  ['Modern APIs', '76%'],
                  ['Cloud Delivery', '94%'],
                ].map(([label, width]) => (
                  <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4" key={label}>
                    <div className="mb-3 flex items-center justify-between text-sm">
                      <span className="font-semibold text-white">{label}</span>
                      <span className="text-cyan-200">{width}</span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-800">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-blue-500"
                        initial={{ width: 0 }}
                        animate={{ width }}
                        transition={{ duration: 1.2, delay: 0.7 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-5 grid grid-cols-3 gap-3">
                {['ERP', 'SaaS', 'Fintech'].map((item) => (
                  <div
                    className="rounded-2xl border border-cyan-300/15 bg-cyan-300/[0.08] px-3 py-5 text-center text-sm font-semibold text-cyan-100"
                    key={item}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
