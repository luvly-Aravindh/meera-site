import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'

const linkBase = 'text-xs md:text-base text-neutral-700 hover:text-neutral-900'

const navItems = [
  { label: 'Signature programs', to: '/signature-programs', strong: true },
  { label: 'Why Work With Me', to: '/why-work-with-me' },
  { label: 'The Meera Grover Effect', to: '/meera-grover-effect' },
  { label: 'Blogs', to: '/blogs' },
]

export default function HeaderStrip() {
  return (
    <section className="w-full bg-white border-t border-gray-200">
      <div className="mx-auto max-w-[95rem] px-4 sm:px-12">
        <div className="flex items-center justify-between py-2 lg:py-6">
          <div className="flex items-center gap-3">
            <NavLink to="/" aria-label="Go to home">
              <img
                src={logo}
                alt="Meera Grover Logo"
                className="h-18 w-auto object-contain"
              />
            </NavLink>
          </div>

          <div className="flex items-center justify-end gap-4 ml-auto">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `${linkBase} ${item.strong ? 'font-medium text-neutral-900' : ''} ${
                    isActive ? 'underline underline-offset-4 text-neutral-900' : ''
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}