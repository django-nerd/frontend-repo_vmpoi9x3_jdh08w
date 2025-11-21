import React from 'react'
import { Twitter, Linkedin, Youtube } from 'lucide-react'

export default function FooterCTA() {
  return (
    <section className="bg-slate-950/80">
      <div className="mx-auto max-w-6xl px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Prêt à révolutionner vos visuels ?</h2>
        <div className="mt-6">
          <a href="#demo" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-fuchsia-600 px-6 py-3 text-base font-semibold text-white">
            Commencer l’essai gratuit
          </a>
        </div>
        <div className="mt-10 grid gap-6 text-left sm:grid-cols-4">
          <div className="sm:col-span-3 text-slate-300">
            <nav className="flex flex-wrap gap-4 text-sm">
              <a className="hover:text-white" href="#">Tarifs</a>
              <a className="hover:text-white" href="#">API</a>
              <a className="hover:text-white" href="#">Blog</a>
              <a className="hover:text-white" href="#">Contact</a>
              <a className="hover:text-white" href="#">Mentions légales</a>
            </nav>
          </div>
          <div className="flex items-center justify-center gap-4 text-slate-400">
            <a href="#" aria-label="Twitter" className="hover:text-white"><Twitter className="h-5 w-5" /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-white"><Linkedin className="h-5 w-5" /></a>
            <a href="#" aria-label="YouTube" className="hover:text-white"><Youtube className="h-5 w-5" /></a>
          </div>
        </div>
      </div>
    </section>
  )
}
