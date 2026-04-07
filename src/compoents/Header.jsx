import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'

const linkBase =
  'font-nicky shrink-0 whitespace-nowrap text-[9px] sm:text-[10px] md:text-[14px] uppercase tracking-[0.08em] text-[#776760] hover:text-[#4f443f] transition-colors duration-200'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Signature Programs', to: '/signature-programs' },
  { label: 'Why Work With Me', to: '/why-work-with-me' },
  { label: 'MG Effect', to: '/meera-grover-effect' },
  { label: 'Blog', to: '/blogs' },
]

export default function HeaderStrip() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen((prev) => !prev)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="w-full bg-[#f3f1ef] border-b border-[#d8d1cc]">
      <div className="mx-auto max-w-[95rem] px-5 sm:px-12">
        <div className="relative flex items-center py-3 md:py-4">
          <div className="shrink-0 z-10">
            <NavLink to="/" aria-label="Go to home" onClick={closeMenu}>
              <img
                src={logo}
                alt="Meera Grover Logo"
                className="h-12 sm:h-14 md:h-16 w-auto object-contain"
              />
            </NavLink>
          </div>

          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
            className="ml-auto z-10 md:hidden inline-flex h-10 w-10 items-center justify-center rounded border border-[#cfc5be] text-[#776760]"
          >
            <span className="sr-only">Open main menu</span>
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-[2px] w-5 bg-current transition-transform duration-200 ${
                  isMenuOpen ? 'translate-y-[7px] rotate-45' : ''
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] h-[2px] w-5 bg-current transition-opacity duration-200 ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`absolute left-0 top-[14px] h-[2px] w-5 bg-current transition-transform duration-200 ${
                  isMenuOpen ? '-translate-y-[7px] -rotate-45' : ''
                }`}
              />
            </span>
          </button>

          <nav className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center justify-center gap-3 sm:gap-5 md:gap-8 lg:gap-10 text-sm lg:text-2xl font-medium">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `${linkBase} ${isActive ? 'text-[#7E6E61]' : ''}`
                }
                onClick={closeMenu}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <NavLink
                key={`mobile-${item.to}`}
                to={item.to}
                className={({ isActive }) =>
                  `font-nicky text-[12px] uppercase tracking-[0.08em] text-[#776760] ${
                    isActive ? 'text-[#7E6E61]' : ''
                  }`
                }
                onClick={closeMenu}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
