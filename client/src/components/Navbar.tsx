import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="border-b border-slate-700 bg-slate-900">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <NavLink
          to="/"
          className="text-xl font-bold text-white"
        >
          Luis Santiago
        </NavLink>

        <div className="flex gap-6">
          <NavLink
            to="/"
            className="text-slate-300 hover:text-white"
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className="text-slate-300 hover:text-white"
          >
            About
          </NavLink>

          <NavLink
            to="/projects"
            className="text-slate-300 hover:text-white"
          >
            Projects
          </NavLink>

          <NavLink
            to="/blog"
            className="text-slate-300 hover:text-white"
          >
            Blog
          </NavLink>

          <NavLink
            to="/contact"
            className="text-slate-300 hover:text-white"
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar