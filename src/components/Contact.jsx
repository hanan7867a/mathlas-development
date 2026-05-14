import { motion } from 'framer-motion'
import { FiMail, FiMapPin, FiPhone, FiSend } from 'react-icons/fi'
import SectionHeader from './SectionHeader'

const contactInfo = [
  { label: 'Email', value: 'info@mathlasdevelopment.com', icon: FiMail },
  { label: 'Phone', value: '+92 XXX XXXXXXX', icon: FiPhone },
  { label: 'Location', value: 'Pakistan', icon: FiMapPin },
]

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault()
    event.currentTarget.reset()
  }

  return (
    <section id="contact" className="relative bg-slate-950 px-5 py-24 md:py-32">
      <div className="absolute inset-x-0 bottom-0 h-72 bg-cyan-400/[0.08] blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Contact"
          title="Let's build your next digital product."
          description="Tell us what you want to create, modernize, or automate. Mathlas Development can help shape the roadmap and deliver the product."
        />

        <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
          <motion.form
            className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-6 shadow-2xl shadow-slate-950/25 backdrop-blur md:p-8"
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
            onSubmit={handleSubmit}
          >
            <div className="grid gap-5 md:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold text-slate-200">
                Name
                <input
                  className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/60"
                  name="name"
                  placeholder="Your name"
                  required
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-slate-200">
                Email
                <input
                  className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/60"
                  name="email"
                  placeholder="you@example.com"
                  type="email"
                  required
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-slate-200 md:col-span-2">
                Phone
                <input
                  className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/60"
                  name="phone"
                  placeholder="+92"
                  type="tel"
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-slate-200 md:col-span-2">
                Message
                <textarea
                  className="min-h-40 resize-y rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/60"
                  name="message"
                  placeholder="Tell us about your project"
                  required
                />
              </label>
            </div>
            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-cyan-300 px-7 py-4 text-sm font-bold text-slate-950 shadow-xl shadow-cyan-500/20 transition hover:-translate-y-1 hover:bg-white sm:w-auto"
            >
              Send Message <FiSend />
            </button>
          </motion.form>

          <motion.aside
            className="rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(34,211,238,0.12),rgba(37,99,235,0.08))] p-6 shadow-2xl shadow-slate-950/25 md:p-8"
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: 0.08 }}
          >
            <h3 className="text-2xl font-semibold text-white">Contact Information</h3>
            <p className="mt-4 leading-8 text-slate-300">
              Reach out for web platforms, mobile apps, ERP systems, fintech products,
              healthcare tools, or long-term software partnerships.
            </p>
            <div className="mt-8 grid gap-4">
              {contactInfo.map((item) => {
                const Icon = item.icon

                return (
                  <div
                    className="flex items-start gap-4 rounded-2xl border border-white/10 bg-slate-950/45 p-5"
                    key={item.label}
                  >
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-cyan-300/[0.12] text-xl text-cyan-200">
                      <Icon />
                    </span>
                    <div>
                      <p className="text-sm text-slate-400">{item.label}</p>
                      <p className="mt-1 font-semibold text-white">{item.value}</p>
                    </div>
                  </div>
                )
              })}
            </div>
            <div className="mt-6 overflow-hidden rounded-2xl border border-white/10">
              <iframe
                title="Mathlas Development Pakistan location map"
                src="https://www.google.com/maps?q=Islamabad%20Pakistan&output=embed"
                className="h-64 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  )
}

export default Contact
