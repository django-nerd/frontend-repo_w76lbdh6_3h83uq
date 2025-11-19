import { Building2, Leaf, MapPin, ShieldCheck } from 'lucide-react'

export default function Features() {
  const items = [
    { icon: Building2, title: 'Välplanerade bostäder', text: 'Smarta planlösningar, hög standard och cykelvänliga lägen.' },
    { icon: MapPin, title: 'Lägesoptimerat', text: 'Alltid nära campus, service och kollektivtrafik.' },
    { icon: Leaf, title: 'Hållbarhet i fokus', text: 'Gröna tak, lågenergi och material med låg miljöpåverkan.' },
    { icon: ShieldCheck, title: 'Trygg förvaltning', text: 'Egen förvaltning och personlig service – året runt.' },
  ]
  return (
    <section id="om" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-slate-200">
              <div className="h-10 w-10 rounded-lg bg-sky-500/20 text-sky-300 flex items-center justify-center mb-4">
                <Icon size={20} />
              </div>
              <h3 className="text-white font-semibold mb-2">{title}</h3>
              <p className="text-sm text-slate-300">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
