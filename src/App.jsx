import { lazy, Suspense, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'
import Analytics from './components/Analytics'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

const Home = lazy(() => import('./pages/Home'))
const ServicesPage = lazy(() => import('./pages/ServicesPage'))
const ServicePage = lazy(() => import('./pages/ServicePage'))
const BlogIndex = lazy(() => import('./pages/BlogIndex'))
const BlogPost = lazy(() => import('./pages/BlogPost'))
const PortfolioProject = lazy(() => import('./pages/PortfolioProject'))
const SimplePage = lazy(() => import('./pages/SimplePage'))

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])

  return null
}

function App() {
  const location = useLocation()

  return (
    <div className="min-h-screen overflow-hidden bg-slate-950 text-white">
      <Analytics />
      <ScrollToTop />
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
        >
          <Suspense
            fallback={
              <section className="grid min-h-screen place-items-center bg-slate-950 px-5 text-center text-cyan-100">
                <p className="text-lg font-semibold">Loading Mathlas Development</p>
              </section>
            }
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<SimplePage type="about" />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/:slug" element={<ServicePage />} />
              <Route path="/solutions" element={<SimplePage type="solutions" />} />
              <Route path="/portfolio" element={<SimplePage type="portfolio" />} />
              <Route path="/portfolio/:slug" element={<PortfolioProject />} />
              <Route path="/blog" element={<BlogIndex />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/contact" element={<SimplePage type="contact" />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </Suspense>
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  )
}

export default App
