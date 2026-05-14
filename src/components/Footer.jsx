import { FaFacebookF, FaGithub, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { servicePages } from '../data/seoContent'

const quickLinks = [
  ['Home', '/'],
  ['About', '/about'],
  ['Services', '/services'],
  ['Solutions', '/solutions'],
  ['Portfolio', '/portfolio'],
  ['Blog', '/blog'],
  ['Contact', '/contact'],
]

const socialLinks = [
  { label: 'LinkedIn', icon: FaLinkedinIn, href: '#' },
  { label: 'Facebook', icon: FaFacebookF, href: '#' },
  { label: 'X', icon: FaXTwitter, href: '#' },
  { label: 'GitHub', icon: FaGithub, href: '#' },
]

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 px-5 py-14">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr_1fr]">
        <div>
          <Link to="/" className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-xl border border-cyan-300/25 bg-cyan-300/10 text-lg font-bold text-cyan-200">
              M
            </span>
            <span className="text-xl font-semibold text-white">Mathlas Development</span>
          </Link>
          <p className="mt-5 max-w-md leading-8 text-slate-300">
            Mathlas Development builds reliable web, mobile, ERP, fintech, and
            business automation solutions for teams that need software to move work forward.
          </p>
          <div className="mt-6 flex gap-3">
            {socialLinks.map((link) => {
              const Icon = link.icon

              return (
                <a
                  aria-label={link.label}
                  className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/5 text-lg text-slate-200 transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-cyan-300 hover:text-slate-950"
                  href={link.href}
                  key={link.label}
                >
                  <Icon />
                </a>
              )
            })}
          </div>
        </div>

        <div>
          <h3 className="mb-5 text-lg font-semibold text-white">Quick Links</h3>
          <ul className="grid gap-3">
            {quickLinks.map(([label, href]) => (
              <li key={label}>
                <Link className="text-slate-300 transition hover:text-cyan-200" to={href}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-5 text-lg font-semibold text-white">Services</h3>
          <ul className="grid gap-3">
            {servicePages.slice(0, 5).map((service) => (
              <li key={service.slug}>
                <Link className="text-slate-300 transition hover:text-cyan-200" to={service.path}>
                  {service.shortTitle}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-5 text-lg font-semibold text-white">Contact</h3>
          <ul className="grid gap-3 text-slate-300">
            <li>info@mathlasdevelopment.com</li>
            <li>+92 XXX XXXXXXX</li>
            <li>Pakistan</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 pt-6 text-center text-sm text-slate-400">
        © 2026 Mathlas Development. All Rights Reserved.
      </div>
    </footer>
  )
}

export default Footer
