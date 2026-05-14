import { Link, useParams } from 'react-router-dom'
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'
import { FiArrowRight } from 'react-icons/fi'
import PageHero from '../components/PageHero'
import SEO from '../components/SEO'
import StructuredData from '../components/StructuredData'
import { blogPosts, servicePages, siteConfig } from '../data/seoContent'
import { absoluteUrl, breadcrumbSchema } from '../lib/seo'

function BlogPost() {
  const { slug } = useParams()
  const post = blogPosts.find((item) => item.slug === slug) || blogPosts[0]
  const related = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 3)
  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Blog', path: '/blog' },
    { name: post.title, path: post.path },
  ]
  const articleUrl = absoluteUrl(post.path)
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    image: absoluteUrl(post.image),
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Organization',
      name: siteConfig.name,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: siteConfig.logo,
      },
    },
    mainEntityOfPage: articleUrl,
  }

  return (
    <>
      <SEO
        title={`${post.title} | Mathlas Development Blog`}
        description={post.description}
        keywords={post.keywords}
        canonical={post.path}
        image={post.image}
        type="article"
      />
      <StructuredData data={[breadcrumbSchema(breadcrumbs), articleSchema]} />
      <PageHero
        eyebrow={post.category}
        title={post.title}
        description={post.description}
        breadcrumbs={breadcrumbs}
      />

      <article className="bg-slate-950 px-5 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,1fr)_18rem]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-6 shadow-2xl shadow-slate-950/20 md:p-8">
            <picture>
              <source srcSet="/assets/mathlas-technology-illustration.webp" type="image/webp" />
              <img
                src={post.image}
                alt={`${post.title} by Mathlas Development`}
                className="mb-8 aspect-[16/8] w-full rounded-2xl object-cover"
                loading="eager"
                decoding="async"
              />
            </picture>
            <p className="text-sm font-semibold text-cyan-200">
              {post.date} · {post.readTime}
            </p>
            <div className="prose-content mt-6">
              <p>
                For companies searching for a software development company, the
                strongest digital products are built around real business outcomes.
                Mathlas Development focuses on custom software solutions that improve
                operations, reduce manual processes, and create reliable digital
                experiences for customers and internal teams.
              </p>
              <h2>Why technical SEO and product quality work together</h2>
              <p>
                Search visibility improves when a website loads quickly, uses clear
                semantic HTML, includes structured data, and offers helpful content.
                The same discipline applies to web development, mobile app
                development, ERP software development, UI UX services, and cloud
                infrastructure services.
              </p>
              <h2>How Mathlas Development approaches implementation</h2>
              <p>
                We define the user journey, select scalable architecture, build clean
                interfaces, and connect the system to secure APIs and cloud
                infrastructure. This creates software that is easier to maintain,
                easier to index, and easier for users to trust.
              </p>
              <h2>Recommended next step</h2>
              <p>
                Review our service pages and portfolio to see how a web development
                company Pakistan businesses can partner with can support growth,
                automation, and long-term product evolution.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {servicePages.slice(0, 3).map((service) => (
                <Link
                  className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-300 hover:text-slate-950"
                  to={service.path}
                  key={service.slug}
                >
                  {service.shortTitle}
                </Link>
              ))}
            </div>
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-2xl border border-white/10 bg-white/[0.055] p-6">
              <h2 className="text-xl font-semibold text-white">Share</h2>
              <div className="mt-5 flex gap-3">
                {[
                  { icon: FaLinkedinIn, label: 'LinkedIn', url: `https://www.linkedin.com/sharing/share-offsite/?url=${articleUrl}` },
                  { icon: FaFacebookF, label: 'Facebook', url: `https://www.facebook.com/sharer/sharer.php?u=${articleUrl}` },
                  { icon: FaXTwitter, label: 'X', url: `https://twitter.com/intent/tweet?url=${articleUrl}&text=${encodeURIComponent(post.title)}` },
                ].map((item) => {
                  const Icon = item.icon
                  return (
                    <a className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 text-slate-200 transition hover:bg-cyan-300 hover:text-slate-950" href={item.url} aria-label={`Share on ${item.label}`} key={item.label} target="_blank" rel="noreferrer">
                      <Icon />
                    </a>
                  )
                })}
              </div>
            </div>

            <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.055] p-6">
              <h2 className="text-xl font-semibold text-white">Related Posts</h2>
              <div className="mt-5 grid gap-4">
                {related.map((item) => (
                  <Link className="group rounded-xl border border-white/10 p-4 transition hover:border-cyan-300/35" to={item.path} key={item.slug}>
                    <h3 className="font-semibold leading-6 text-white group-hover:text-cyan-200">{item.title}</h3>
                    <span className="mt-3 inline-flex items-center gap-2 text-sm text-cyan-200">
                      Read more <FiArrowRight aria-hidden="true" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </article>
    </>
  )
}

export default BlogPost
