import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import News from './components/News'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-100px,rgba(56,189,248,0.12),transparent)] pointer-events-none" />

      <Navbar />

      <main className="relative">
        <Hero />
        <Features />

        <section id="sok" className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex flex-col lg:flex-row items-start lg:items-end gap-6">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-white">Sök lediga bostäder</h2>
                  <p className="mt-2 text-slate-300">Filtrera efter stad, hyra och storlek. Detta kan kopplas till ett riktigt register vid behov.</p>
                </div>
                <form className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full lg:w-auto">
                  <input placeholder="Stad" className="bg-white/10 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500" />
                  <input placeholder="Maxhyra (kr)" className="bg-white/10 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500" />
                  <select className="bg-white/10 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-sky-500">
                    <option className="text-slate-900">1 rok</option>
                    <option className="text-slate-900">2 rok</option>
                    <option className="text-slate-900">3 rok</option>
                    <option className="text-slate-900">4+ rok</option>
                  </select>
                  <button type="button" className="sm:col-span-3 inline-flex items-center justify-center rounded-lg bg-sky-500 text-white font-semibold px-6 py-3 hover:bg-sky-600 transition">Visa ledigt</button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <News />
        <Contact />
      </main>

      <footer className="relative border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400">
            <p>© {new Date().getFullYear()} EBO Housing. Alla rättigheter förbehållna.</p>
            <div className="flex items-center gap-4">
              <a href="#om" className="hover:text-slate-200">Om oss</a>
              <a href="#kontakt" className="hover:text-slate-200">Kontakt</a>
              <a href="#nyheter" className="hover:text-slate-200">Nyheter</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
