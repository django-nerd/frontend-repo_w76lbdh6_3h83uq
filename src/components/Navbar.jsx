import { useState } from 'react'
import { Menu, X, Home, Phone, Info, Newspaper } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { href: '#hem', label: 'Hem', icon: Home },
    { href: '#sok', label: 'Sök boende', icon: Info },
    { href: '#om', label: 'Om oss', icon: Info },
    { href: '#nyheter', label: 'Nyheter', icon: Newspaper },
    { href: '#kontakt', label: 'Kontakt', icon: Phone },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900/70 backdrop-blur supports-[backdrop-filter]:bg-slate-900/50 shadow-lg">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#hem" className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-sky-500 to-indigo-500 flex items-center justify-center text-white font-bold">E</div>
              <span className="text-white font-semibold tracking-tight">EBO Housing</span>
            </a>

            <nav className="hidden md:flex items-center gap-2">
              {links.map(({ href, label }) => (
                <a key={href} href={href} className="text-sm text-slate-200 hover:text-white px-3 py-2 rounded-md hover:bg-white/5 transition">
                  {label}
                </a>
              ))}
              <a href="#sok" className="ml-2 inline-flex items-center rounded-lg bg-sky-500 text-white text-sm font-semibold px-4 py-2 hover:bg-sky-600 transition">
                Sök ledigt
              </a>
            </nav>

            <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg bg-white/5 text-white">
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 py-3">
              <div className="flex flex-col gap-1">
                {links.map(({ href, label, icon: Icon }) => (
                  <a key={href} href={href} onClick={() => setOpen(false)} className="flex items-center gap-2 text-slate-200 px-3 py-2 rounded-md hover:bg-white/5">
                    <Icon size={16} />
                    {label}
                  </a>
                ))}
                <a href="#sok" className="mt-2 inline-flex items-center justify-center rounded-lg bg-sky-500 text-white text-sm font-semibold px-4 py-2">
                  Sök ledigt
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
