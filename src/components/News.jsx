import { useEffect, useState } from 'react'

export default function News() {
  const [news, setNews] = useState([
    { id: 1, title: 'Nytt kvarter i Växjö', date: '2025-05-01', excerpt: 'Vi utökar med 120 energieffektiva lägenheter nära Linnéuniversitetet.' },
    { id: 2, title: 'Solceller på taken', date: '2025-03-15', excerpt: 'Ytterligare två fastigheter förses med solpaneler för grönare drift.' },
    { id: 3, title: 'Digital felanmälan', date: '2025-02-20', excerpt: 'Nu kan du enkelt registrera felanmälan via Mina Sidor – dygnet runt.' },
  ])

  useEffect(() => {
    // Här kan vi koppla backend senare om du vill ha riktiga nyheter
  }, [])

  return (
    <section id="nyheter" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl font-bold text-white">Nyheter</h2>
          <a href="#" className="text-sm text-sky-300 hover:text-sky-200">Visa alla</a>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {news.map(item => (
            <article key={item.id} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-xs text-slate-400 mb-2">{new Date(item.date).toLocaleDateString('sv-SE')}</p>
              <h3 className="text-white font-semibold mb-2">{item.title}</h3>
              <p className="text-slate-300 text-sm">{item.excerpt}</p>
              <a href="#" className="inline-block mt-4 text-sm text-sky-300 hover:text-sky-200">Läs mer →</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
