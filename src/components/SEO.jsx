import { Helmet } from 'react-helmet-async'
import { seoDefaults, siteConfig } from '../data/seoContent'
import { absoluteUrl } from '../lib/seo'

function SEO({
  title = seoDefaults.title,
  description = seoDefaults.description,
  keywords = seoDefaults.keywords,
  canonical = '/',
  image = siteConfig.ogImage,
  type = 'website',
  robots = 'index, follow',
}) {
  const canonicalUrl = absoluteUrl(canonical)
  const imageUrl = absoluteUrl(image)

  return (
    <Helmet prioritizeSeoTags>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteConfig.name} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:url" content={canonicalUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  )
}

export default SEO
