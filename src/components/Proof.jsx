import React, { useRef, useEffect, useState } from 'react'

// Simple before/after slider without external deps
export default function Proof() {
  const containerRef = useRef(null)
  const [pos, setPos] = useState(50) // percentage

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const onMove = (e) => {
      const rect = el.getBoundingClientRect()
      const x = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left
      const pct = Math.max(0, Math.min(100, (x / rect.width) * 100))
      setPos(pct)
    }
    const onDown = () => document.addEventListener('mousemove', onMove)
    const onUp = () => document.removeEventListener('mousemove', onMove)
    el.addEventListener('mousedown', onDown)
    el.addEventListener('touchstart', (e)=>{ onMove(e) })
    document.addEventListener('mouseup', onUp)
    document.addEventListener('touchmove', onMove)
    document.addEventListener('touchend', onUp)
    return () => {
      el.removeEventListener('mousedown', onDown)
      document.removeEventListener('mouseup', onUp)
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('touchmove', onMove)
      document.removeEventListener('touchend', onUp)
    }
  }, [])

  return (
    <section id="proof" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">La puissance de la photogrammétrie par IA.</h2>
        <p className="mt-2 text-slate-300">Glissez pour voir la transformation.</p>
      </div>

      <div ref={containerRef} className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-cyan-400/20 bg-slate-900 shadow-inner">
        {/* Before image */}
        <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1600&auto=format&fit=crop" alt="Avant" className="absolute inset-0 h-full w-full object-cover opacity-100" />

        {/* After image clipped by slider position */}
        <div className="absolute inset-0" style={{ width: pos + '%' }}>
          <img src="https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1600&auto=format&fit=crop" alt="Après" className="h-full w-full object-cover" />
        </div>

        {/* Handle */}
        <div className="absolute inset-y-0" style={{ left: `calc(${pos}% - 1px)` }}>
          <div className="h-full w-0.5 bg-cyan-400/70 shadow-[0_0_30px_rgba(34,211,238,0.5)]" />
          <div className="absolute top-1/2 -mt-5 -ml-5 flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/40 bg-slate-950/80 text-cyan-200 backdrop-blur">
            ⇆
          </div>
        </div>
      </div>

      {/* Thumbnails / examples note */}
      <p className="mt-4 text-center text-sm text-slate-400">Exemple: Basket — Photo originale vs. Modèle 3D texturé</p>
    </section>
  )
}
