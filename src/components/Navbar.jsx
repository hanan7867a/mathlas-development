import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, NavLink } from 'react-router-dom'
import { FiChevronDown, FiMenu, FiX } from 'react-icons/fi'
import { servicePages } from '../data/seoContent'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setOpen(false)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-white/10 bg-slate-950/[0.88] shadow-2xl shadow-cyan-950/20 backdrop-blur-xl'
          : 'bg-slate-950/40 backdrop-blur-md'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link to="/" className="group flex items-center gap-3" onClick={closeMenu}>
          <span className="grid h-11 w-11 place-items-center rounded-xl border border-cyan-300/25 bg-cyan-300/10 text-lg font-bold text-cyan-200 shadow-lg shadow-cyan-900/20 transition group-hover:scale-105">
            M
          </span>
          <span className="text-lg font-semibold text-white md:text-xl">
            Mathlas Development
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) =>
            link.label === 'Services' ? (
              <div className="group relative" key={link.label}>
                <NavLink
                  to={link.href}
                  className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-slate-200 transition hover:bg-white/[0.08] hover:text-white"
                >
                  Services <FiChevronDown className="text-cyan-200 transition group-hover:rotate-180" />
                </NavLink>
                <div className="invisible absolute left-0 top-full w-72 translate-y-3 rounded-2xl border border-white/10 bg-slate-900/95 p-3 opacity-0 shadow-2xl shadow-slate-950/40 backdrop-blur-xl transition duration-200 group-hover:visible group-hover:translate-y-2 group-hover:opacity-100">
                  {servicePages.map((service) => (
                    <Link
                      to={service.path}
                      className="block rounded-xl px-4 py-3 text-sm text-slate-300 transition hover:bg-cyan-300/10 hover:text-cyan-100"
                      key={service.slug}
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <NavLink
                to={link.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-slate-200 transition hover:bg-white/[0.08] hover:text-white"
                key={link.label}
              >
                {link.label}
              </NavLink>
            ),
          )}
        </div>

        <Link
          to="/contact"
          className="hidden rounded-full bg-cyan-300 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:-translate-y-0.5 hover:bg-white lg:inline-flex"
        >
          Start a Project
        </Link>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/5 text-xl text-white lg:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="border-t border-white/10 bg-slate-950/[0.96] px-5 py-5 backdrop-blur-xl lg:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  to={link.href}
                  className="rounded-xl px-4 py-3 text-base font-medium text-slate-200 transition hover:bg-white/[0.08] hover:text-white"
                  key={link.label}
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-2 rounded-2xl border border-white/10 bg-white/5 p-2">
                {servicePages.map((service) => (
                  <Link
                    to={service.path}
                    className="block rounded-xl px-4 py-2.5 text-sm text-slate-300 transition hover:bg-cyan-300/10 hover:text-cyan-100"
                    key={service.slug}
                    onClick={closeMenu}
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
