import { motion } from 'framer-motion'
import { serviceFaqs } from '../data/seoContent'
import SectionHeader from './SectionHeader'

function FAQ({ faqs = serviceFaqs }) {
  return (
    <section className="bg-slate-950 px-5 py-20 md:py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          eyebrow="FAQ"
          title="Questions businesses ask before starting"
          description="Clear answers about our custom software solutions, ERP software development, cloud infrastructure services, and long-term support."
        />
        <div className="grid gap-4">
          {faqs.map((faq, index) => (
            <motion.article
              className="rounded-2xl border border-white/10 bg-white/[0.055] p-6 shadow-lg shadow-slate-950/20"
              key={faq.question}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
            >
              <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
              <p className="mt-3 leading-7 text-slate-300">{faq.answer}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
