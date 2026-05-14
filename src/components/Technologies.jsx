import { motion } from 'framer-motion'
import { FaAws, FaJava } from 'react-icons/fa'
import {
  SiDocker,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiReact,
  SiSpringboot,
} from 'react-icons/si'
import SectionHeader from './SectionHeader'

const technologies = [
  { name: 'React', icon: SiReact },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'Java', icon: FaJava },
  { name: 'Spring Boot', icon: SiSpringboot },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'MySQL', icon: SiMysql },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'Firebase', icon: SiFirebase },
  { name: 'AWS', icon: FaAws },
  { name: 'Docker', icon: SiDocker },
]

function Technologies() {
  return (
    <section className="bg-slate-950 px-5 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Technologies"
          title="Modern tools for maintainable, high-performing systems"
          description="We choose proven technologies that balance developer velocity, stability, security, and long-term ownership."
        />

        <motion.div
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.05 } },
          }}
        >
          {technologies.map((tech) => {
            const Icon = tech.icon

            return (
              <motion.div
                className="group grid min-h-36 place-items-center rounded-2xl border border-white/10 bg-white/[0.055] p-5 text-center shadow-lg shadow-slate-950/20 transition hover:-translate-y-2 hover:border-cyan-300/35 hover:bg-white/[0.075]"
                key={tech.name}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.42 }}
              >
                <Icon className="mb-4 text-4xl text-cyan-200 transition group-hover:scale-110 group-hover:text-white" />
                <span className="text-sm font-semibold text-slate-100">{tech.name}</span>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Technologies
