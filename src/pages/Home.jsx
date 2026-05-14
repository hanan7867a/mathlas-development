import About from '../components/About'
import BlogPreview from '../components/BlogPreview'
import Contact from '../components/Contact'
import FAQ from '../components/FAQ'
import Hero from '../components/Hero'
import Portfolio from '../components/Portfolio'
import SEO from '../components/SEO'
import Services from '../components/Services'
import Solutions from '../components/Solutions'
import StructuredData from '../components/StructuredData'
import Technologies from '../components/Technologies'
import WhyChooseUs from '../components/WhyChooseUs'
import { seoDefaults } from '../data/seoContent'
import { localBusinessSchema, organizationSchema, websiteSchema } from '../lib/seo'

function Home() {
  return (
    <>
      <SEO
        title={seoDefaults.title}
        description={seoDefaults.description}
        keywords={seoDefaults.keywords}
        canonical="/"
      />
      <StructuredData data={[organizationSchema(), localBusinessSchema(), websiteSchema()]} />
      <Hero />
      <Services />
      <About />
      <WhyChooseUs />
      <Solutions />
      <Technologies />
      <Portfolio />
      <BlogPreview />
      <FAQ />
      <Contact />
    </>
  )
}

export default Home
