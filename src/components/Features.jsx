import React from 'react'
import { Check } from 'lucide-react'

export default function Features() {
  const features = [
    'Texture 4K/8K : Détails ultra-précis (cuir, bois, métal).',
    'Auto-Retopologie : Maillage optimisé (Low Poly) pour le web.',
    'Suppression du fond : Détourage automatique par IA.',
    'Éclairage Studio : Modifiez la lumière après la capture.',
  ]

  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="mb-8 text-center text-3xl font-bold text-white sm:text-4xl">Une technologie de pointe à votre portée.</h2>
      <ul className="mx-auto max-w-3xl space-y-4">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-3 rounded-xl border border-cyan-400/20 bg-slate-900/60 p-4">
            <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-fuchsia-600 text-white">
              <Check className="h-4 w-4" />
            </span>
            <span className="text-slate-200">{f}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
