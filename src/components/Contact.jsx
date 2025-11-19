import { Phone, Mail, MapPin } from 'lucide-react'

export default function Contact() {
  return (
    <section id="kontakt" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Kontakta oss</h2>
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input placeholder="Förnamn" className="bg-white/10 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500" />
              <input placeholder="Efternamn" className="bg-white/10 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500" />
              <input placeholder="E-post" type="email" className="bg-white/10 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 sm:col-span-2" />
              <textarea placeholder="Meddelande" rows="4" className="bg-white/10 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 sm:col-span-2" />
              <button type="button" className="inline-flex items-center justify-center rounded-lg bg-sky-500 text-white font-semibold px-6 py-3 hover:bg-sky-600 transition sm:col-span-2">Skicka</button>
            </form>
          </div>
          <div className="space-y-4 text-slate-300">
            <div className="flex items-center gap-3"><Phone className="text-sky-300" size={18} /> 0470-00 00 00</div>
            <div className="flex items-center gap-3"><Mail className="text-sky-300" size={18} /> info@ebo.nu</div>
            <div className="flex items-center gap-3"><MapPin className="text-sky-300" size={18} /> Storgatan 1, 352 30 Växjö</div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-2">
              <img src="https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop" alt="Kontor" className="rounded-xl object-cover w-full h-64" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
