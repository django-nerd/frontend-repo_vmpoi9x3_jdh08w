import React from 'react'

export default function UseCases() {
  const cases = [
    {
      title: 'E‑commerçants',
      text: 'Offrez une vue à 360° de vos produits.',
    },
    {
      title: 'Immobilier',
      text: 'Créez des visites virtuelles à partir de photos.',
    },
    {
      title: 'Développeurs de jeux',
      text: 'Créez des assets 3D rapidement.',
    },
  ]

  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="mb-8 text-center text-3xl font-bold text-white sm:text-4xl">Créé pour les créateurs.</h2>
      <div className="grid gap-6 sm:grid-cols-3">
        {cases.map((c) => (
          <div key={c.title} className="rounded-2xl border border-cyan-400/20 bg-slate-900/60 p-6">
            <h3 className="mb-2 text-xl font-semibold text-white">{c.title}</h3>
            <p className="text-slate-300">{c.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
