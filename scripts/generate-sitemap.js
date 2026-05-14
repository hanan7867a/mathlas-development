import { writeFileSync } from 'node:fs'
import {
  blogPosts,
  projectPages,
  servicePages,
  siteConfig,
  staticRoutes,
} from '../src/data/seoContent.js'

const today = new Intl.DateTimeFormat('en-CA', {
  timeZone: 'Asia/Karachi',
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
}).format(new Date())

const routes = [
  ...staticRoutes,
  ...servicePages.map((service) => ({
    path: service.path,
    priority: '0.8',
  })),
  ...blogPosts.map((post) => ({
    path: post.path,
    priority: '0.7',
    lastmod: post.date,
  })),
  ...projectPages.map((project) => ({
    path: project.path,
    priority: '0.7',
  })),
]

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map((route) => {
    const loc = `${siteConfig.baseUrl}${route.path === '/' ? '' : route.path}`
    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${route.lastmod || today}</lastmod>
    <changefreq>${route.path.startsWith('/blog/') ? 'monthly' : 'weekly'}</changefreq>
    <priority>${route.priority || '0.7'}</priority>
  </url>`
  })
  .join('\n')}
</urlset>
`

writeFileSync('public/sitemap.xml', sitemap)
console.log(`Generated sitemap.xml with ${routes.length} URLs`)
