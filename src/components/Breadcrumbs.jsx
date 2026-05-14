import { Link } from 'react-router-dom'
import { FiChevronRight } from 'react-icons/fi'

function Breadcrumbs({ items }) {
  return (
    <nav className="mb-8 flex flex-wrap items-center gap-2 text-sm text-slate-300" aria-label="Breadcrumb">
      {items.map((item, index) => {
        const isLast = index === items.length - 1

        return (
          <span className="flex items-center gap-2" key={item.path}>
            {isLast ? (
              <span className="font-semibold text-cyan-100" aria-current="page">
                {item.name}
              </span>
            ) : (
              <Link className="transition hover:text-cyan-200" to={item.path}>
                {item.name}
              </Link>
            )}
            {!isLast && <FiChevronRight aria-hidden="true" />}
          </span>
        )
      })}
    </nav>
  )
}

export default Breadcrumbs
