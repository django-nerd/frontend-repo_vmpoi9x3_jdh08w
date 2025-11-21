import React from 'react'
import { Rocket, PiggyBank, Globe, Timer } from 'lucide-react'

export default function Benefits() {
  const items = [
    {
      icon: Rocket,
      title: 'Boostez vos ventes',
      text: 'Les produits en 3D augmentent le taux de conversion de +40%.',
    },
    {
      icon: PiggyBank,
      title: 'Réduction des coûts',
      text: "10x moins cher qu'un studio de shooting 3D traditionnel.",
    },
    {
      icon: Globe,
      title: 'Compatible partout',
      text: 'Exportations optimisées pour le Web, la RA et Unity/Unreal.',
    },
    {
      icon: Timer,
      title: 'Rendu Ultra-Rapide',
      text: 'Obtenez un résultat en moins de 5 minutes.',
    },
  ]

  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="mb-10 text-center text-3xl font-bold text-white sm:text-4xl">Pourquoi passer au Photoshoot 3D ?</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {items.map(({ icon: Icon, title, text }) => (
          <div key={title} className="rounded-2xl border border-cyan-400/20 bg-slate-900/60 p-6 transition hover:border-cyan-400/40">
            <div className="mb-4 inline-flex rounded-xl border border-cyan-400/20 bg-slate-800/60 p-3 text-cyan-300">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-white">{title}</h3>
            <p className="text-slate-300">{text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
