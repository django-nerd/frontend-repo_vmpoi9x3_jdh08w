import React from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Proof from './components/Proof'
import Process from './components/Process'
import Benefits from './components/Benefits'
import Features from './components/Features'
import UseCases from './components/UseCases'
import FooterCTA from './components/FooterCTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <main className="bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900">
        <div id="how"><Process /></div>
        <div id="proof"><Proof /></div>
        <Benefits />
        <div id="features"><Features /></div>
        <div id="use"><UseCases /></div>
        <FooterCTA />
      </main>
    </div>
  )
}

export default App
