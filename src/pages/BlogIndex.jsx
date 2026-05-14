import BlogPreview from '../components/BlogPreview'
import PageHero from '../components/PageHero'
import SEO from '../components/SEO'
import StructuredData from '../components/StructuredData'
import { blogCategories } from '../data/seoContent'
import { breadcrumbSchema } from '../lib/seo'

function BlogIndex() {
  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Blog', path: '/blog' },
  ]

  return (
    <>
      <SEO
        title="Software Development Blog | Mathlas Development"
        description="Read Mathlas Development insights on web development, cloud infrastructure, mobile apps, UI/UX, software engineering, and business automation."
        keywords="software development blog, web development, cloud infrastructure, mobile apps, UI UX, business automation"
        canonical="/blog"
      />
      <StructuredData data={breadcrumbSchema(breadcrumbs)} />
      <PageHero
        eyebrow="Blog"
        title="SEO insights for software, cloud, mobile, and automation"
        description="Practical articles for businesses evaluating custom software solutions, ERP software development, cloud infrastructure services, mobile app development, and UI UX services."
        breadcrumbs={breadcrumbs}
      />
      <section className="bg-slate-950 px-5 pb-4 pt-12">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-3">
          {blogCategories.map((category) => (
            <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100" key={category}>
              {category}
            </span>
          ))}
        </div>
      </section>
      <BlogPreview limit={10} />
    </>
  )
}

export default BlogIndex
