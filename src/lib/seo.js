import { serviceFaqs, servicePages, siteConfig } from '../data/seoContent'

export function absoluteUrl(path = '/') {
  if (path.startsWith('http')) return path
  return `${siteConfig.baseUrl}${path.startsWith('/') ? path : `/${path}`}`
}

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.baseUrl,
    logo: siteConfig.logo,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    sameAs: siteConfig.socialLinks,
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: siteConfig.email,
      areaServed: ['PK', 'US', 'GB', 'AE'],
      availableLanguage: ['English', 'Urdu'],
    },
    makesOffer: servicePages.map((service) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: service.title,
        url: absoluteUrl(service.path),
      },
    })),
  }
}

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: siteConfig.name,
    image: siteConfig.ogImage,
    url: siteConfig.baseUrl,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      ...siteConfig.address,
    },
    areaServed: {
      '@type': 'Country',
      name: 'Pakistan',
    },
  }
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.baseUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteConfig.baseUrl}/blog?search={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  }
}

export function breadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}

export function faqSchema(faqs = serviceFaqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}
