import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="hem" className="relative pt-32 pb-24 overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[1200px] rounded-full bg-sky-500/20 blur-3xl" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white">
              Tryggt boende i rätt tid – i rätt stad
            </motion.h1>
            <p className="mt-6 text-lg text-slate-300">
              Vi hjälper studenter och unga yrkesverksamma att hitta hållbara och prisvärda bostäder nära studier och arbete.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#sok" className="inline-flex items-center justify-center rounded-lg bg-sky-500 text-white font-semibold px-6 py-3 hover:bg-sky-600 transition">Sök lediga bostäder</a>
              <a href="#om" className="inline-flex items-center justify-center rounded-lg bg-white/10 text-white font-semibold px-6 py-3 hover:bg-white/20 transition">Läs mer om oss</a>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-6 text-slate-300">
              <div>
                <p className="text-3xl font-bold text-white">15+ år</p>
                <p className="text-sm">erfarenhet av förvaltning</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">1000+</p>
                <p className="text-sm">nöjda hyresgäster</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="rounded-2xl border border-white/10 bg-white/5 p-2">
              <img src="https://images.unsplash.com/photo-1681648113344-dd53951fe767?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNb2Rlcm5hJTIwYm9zdCVDMyVBNGRlcnxlbnwwfDB8fHwxNzYzNTc4NjA2fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Moderna bostäder" className="rounded-xl object-cover h-80 w-full" />
            </motion.div>
            <div className="absolute -bottom-6 -left-6 rounded-xl bg-slate-900/70 border border-white/10 p-4 text-sm text-white">
              Energieffektivt • Nära kollektivtrafik • Hållbart
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
