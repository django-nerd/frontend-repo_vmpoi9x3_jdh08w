import React from 'react'

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/5 bg-slate-950/40 backdrop-blur supports-[backdrop-filter]:bg-slate-950/30">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <img src="/logo.svg" alt="Logo" className="h-7 w-7" />
          <span className="text-sm font-semibold tracking-wide text-white">Photoshoot 3D</span>
        </div>
        <nav className="hidden items-center gap-6 text-sm text-slate-300 sm:flex">
          <a href="#proof" className="hover:text-white">Avant/Après</a>
          <a href="#how" className="hover:text-white">Processus</a>
          <a href="#features" className="hover:text-white">Fonctionnalités</a>
          <a href="#use" className="hover:text-white">Cas d’usage</a>
        </nav>
        <a href="#demo" className="rounded-lg bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10">Essai gratuit</a>
      </div>
    </header>
  )
}
