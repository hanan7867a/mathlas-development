import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiCalendar } from 'react-icons/fi'
import { blogPosts } from '../data/seoContent'
import SectionHeader from './SectionHeader'

function BlogPreview({ limit = 3 }) {
  return (
    <section id="blog" className="bg-slate-950 px-5 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Insights"
          title="Software development insights for growing companies"
          description="Keyword-rich guides on web development, cloud infrastructure services, mobile app development, UI UX services, ERP software development, and business automation."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {blogPosts.slice(0, limit).map((post, index) => (
            <motion.article
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.055] shadow-xl shadow-slate-950/20 transition hover:-translate-y-2 hover:border-cyan-300/35"
              key={post.slug}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.48, delay: index * 0.06 }}
            >
              <Link to={post.path} aria-label={`Read ${post.title}`}>
                <picture>
                  <source srcSet="/assets/mathlas-technology-illustration.webp" type="image/webp" />
                  <img
                    src={post.image}
                    alt={`${post.title} featured visual`}
                    className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
              </Link>
              <div className="p-6">
                <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-slate-400">
                  <span className="rounded-full bg-cyan-300/10 px-3 py-1 font-semibold text-cyan-100">
                    {post.category}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <FiCalendar aria-hidden="true" /> {post.date}
                  </span>
                </div>
                <h3 className="text-xl font-semibold leading-8 text-white">
                  <Link className="transition hover:text-cyan-200" to={post.path}>
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-3 leading-7 text-slate-300">{post.description}</p>
                <Link
                  className="mt-6 inline-flex items-center gap-2 font-semibold text-cyan-200 transition hover:text-white"
                  to={post.path}
                >
                  Read article <FiArrowRight aria-hidden="true" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            className="inline-flex items-center gap-2 rounded-full border border-cyan-300/25 px-6 py-3 font-semibold text-cyan-100 transition hover:-translate-y-1 hover:bg-cyan-300 hover:text-slate-950"
            to="/blog"
          >
            View all insights <FiArrowRight aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default BlogPreview
