import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  const linkClasses = ({ isActive }: { isActive: boolean }) =>
    `relative py-2 text-sm font-medium transition ${
      isActive
        ? "text-blue-400"
        : "text-slate-300 hover:text-blue-400"
    }`;

  return (
    <nav className="border-b border-slate-800 bg-[#0b1120]">
      <div className="mx-auto max-w-6xl px-6">
        {/* Top Navigation */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <NavLink
            to="/"
            onClick={closeMenu}
            className="text-xl font-bold tracking-tight text-white transition hover:text-blue-400"
          >
            Luis Santiago
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            <NavLink to="/" className={linkClasses}>
              {({ isActive }) => (
                <>
                  Home
                  {isActive && (
                    <span className="absolute inset-x-0 -bottom-4 h-0.5 bg-blue-500" />
                  )}
                </>
              )}
            </NavLink>

            <NavLink to="/about" className={linkClasses}>
              {({ isActive }) => (
                <>
                  About
                  {isActive && (
                    <span className="absolute inset-x-0 -bottom-4 h-0.5 bg-blue-500" />
                  )}
                </>
              )}
            </NavLink>

            <NavLink to="/projects" className={linkClasses}>
              {({ isActive }) => (
                <>
                  Projects
                  {isActive && (
                    <span className="absolute inset-x-0 -bottom-4 h-0.5 bg-blue-500" />
                  )}
                </>
              )}
            </NavLink>

            <NavLink to="/blog" className={linkClasses}>
              {({ isActive }) => (
                <>
                  Blog
                  {isActive && (
                    <span className="absolute inset-x-0 -bottom-4 h-0.5 bg-blue-500" />
                  )}
                </>
              )}
            </NavLink>

            <NavLink to="/contact" className={linkClasses}>
              {({ isActive }) => (
                <>
                  Contact
                  {isActive && (
                    <span className="absolute inset-x-0 -bottom-4 h-0.5 bg-blue-500" />
                  )}
                </>
              )}
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="rounded-md border border-slate-700 px-3 py-2 text-lg text-slate-300 transition hover:border-blue-500 hover:text-blue-400 md:hidden"
            aria-label={
              isMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="border-t border-slate-800 py-4 md:hidden">
            <div className="flex flex-col gap-2">
              <NavLink
                to="/"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `rounded-md px-3 py-2 text-sm font-medium transition ${
                    isActive
                      ? "bg-slate-800 text-blue-400"
                      : "text-slate-300 hover:bg-slate-800 hover:text-blue-400"
                  }`
                }
              >
                Home
              </NavLink>

              <NavLink
                to="/about"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `rounded-md px-3 py-2 text-sm font-medium transition ${
                    isActive
                      ? "bg-slate-800 text-blue-400"
                      : "text-slate-300 hover:bg-slate-800 hover:text-blue-400"
                  }`
                }
              >
                About
              </NavLink>

              <NavLink
                to="/projects"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `rounded-md px-3 py-2 text-sm font-medium transition ${
                    isActive
                      ? "bg-slate-800 text-blue-400"
                      : "text-slate-300 hover:bg-slate-800 hover:text-blue-400"
                  }`
                }
              >
                Projects
              </NavLink>

              <NavLink
                to="/blog"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `rounded-md px-3 py-2 text-sm font-medium transition ${
                    isActive
                      ? "bg-slate-800 text-blue-400"
                      : "text-slate-300 hover:bg-slate-800 hover:text-blue-400"
                  }`
                }
              >
                Blog
              </NavLink>

              <NavLink
                to="/contact"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `rounded-md px-3 py-2 text-sm font-medium transition ${
                    isActive
                      ? "bg-slate-800 text-blue-400"
                      : "text-slate-300 hover:bg-slate-800 hover:text-blue-400"
                  }`
                }
              >
                Contact
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;