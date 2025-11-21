import React from 'react'
import Spline from '@splinetool/react-spline'
import { Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-slate-950">
      <div className="absolute inset-0"> 
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Subtle gradient overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/40 to-slate-950/90" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-28 text-center sm:pt-36">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-xs font-medium text-cyan-300 shadow-[0_0_30px_rgba(34,211,238,0.25)]">
          <Sparkles className="h-3.5 w-3.5" />
          IA photogrammétrie de nouvelle génération
        </span>
        <h1 className="bg-gradient-to-br from-white via-cyan-100 to-cyan-300 bg-clip-text text-4xl font-extrabold leading-tight text-transparent drop-shadow sm:text-5xl md:text-6xl">
          Donnez vie à vos produits : De la Photo à la 3D en un clic.
        </h1>
        <p className="mt-5 max-w-2xl text-balance text-lg text-slate-200/90 sm:text-xl">
          Transformez de simples images en modèles 3D photoréalistes grâce à l’IA. Idéal pour l’e‑commerce, le marketing et le design.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
          <a href="#demo" className="group inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-fuchsia-600 px-6 py-3 text-base font-semibold text-white shadow-[0_10px_30px_-10px_rgba(59,130,246,0.6)] transition hover:scale-[1.02] hover:shadow-[0_12px_40px_-8px_rgba(168,85,247,0.7)]">
            Générer mon premier modèle 3D gratuitement
          </a>
          <a href="#proof" className="text-cyan-300/90 transition hover:text-cyan-200">
            Voir un avant / après
          </a>
        </div>
      </div>
    </section>
  )
}
