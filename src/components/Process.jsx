import React from 'react'
import { Camera, Upload, Cube } from 'lucide-react'

export default function Process() {
  const steps = [
    {
      icon: Camera,
      title: 'Capturez',
      text: "Prenez quelques photos de votre objet sous différents angles avec votre smartphone.",
    },
    {
      icon: Upload,
      title: 'Importez',
      text: "Notre IA analyse la texture, la profondeur et l'éclairage en quelques secondes.",
    },
    {
      icon: Cube,
      title: 'Exportez',
      text: 'Récupérez votre fichier 3D (GLB, OBJ, USDZ) prêt à être intégré sur votre site.',
    },
  ]

  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="mb-10 text-center text-3xl font-bold text-white sm:text-4xl">Comment ça marche ?</h2>
      <div className="grid gap-6 sm:grid-cols-3">
        {steps.map(({ icon: Icon, title, text }) => (
          <div key={title} className="group rounded-2xl border border-cyan-400/20 bg-slate-900/60 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] transition hover:border-cyan-400/40">
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
