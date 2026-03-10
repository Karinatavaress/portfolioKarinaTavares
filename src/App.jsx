import React, { useState, useEffect } from 'react'
// Importando o novo componente (certifique-se de que o arquivo existe em ./Habilidades.jsx)
import Habilidades from './Habilidades' 

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-white font-montserrat text-slate-700 scroll-smooth relative">
      
      {/* CURSOR SEGUIDOR */}
      <div 
        className="cursor-follow"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`
        }}
      />

      {/* 1. HEADER HERO */}
      <header className="relative min-h-screen flex flex-col items-center justify-center px-8 bg-white text-center overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="relative inline-block">
            <h1 className="font-playfair text-7xl md:text-9xl tracking-tighter uppercase text-transparent font-black leading-none"
                style={{ WebkitTextStroke: '1px #f472b6' }}>
              Portfolio
            </h1>
          </div>
          <p className="font-playfair text-xl md:text-2xl text-slate-800 tracking-tight">
            by Karina Tavares<span className="text-pink-400 font-bold">.</span>
          </p>

          <div className="text-lg md:text-xl font-light text-slate-500 max-w-2xl mx-auto pt-10 leading-relaxed space-y-2">
            <p>Eu sou uma <span className="font-semibold text-slate-800">graduanda em Gestão de TI</span> do Rio de Janeiro.</p>
            <div className="flex items-baseline justify-center gap-2 font-semibold text-pink-400 tracking-tight">
              <span className="font-light text-slate-500 shrink-0">atuação:</span>
              <span className="digital-type">desenvolvedora front-end júnior</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#sobre" className="text-pink-300 hover:text-pink-400 transition-colors">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </header>

      {/* BLOCO COLORIDO UNIFICADO */}
<div className="bg-[#FFF0F5] relative overflow-hidden"> 
  
  {/* TRANSIÇÃO DE TOPO */}
  <div 
    className="absolute top-0 left-0 w-full h-32 bg-white" 
    style={{ clipPath: 'polygon(0 0, 100% 0, 100% 60%, 0 100%)' }}
  ></div>

  {/* 2. SEÇÃO SOBRE MIM - Aumentei o pb-48 para afastar do próximo bloco */}
  <section id="sobre" className="relative z-10 pt-64 pb-48 max-w-6xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">
    <div className="flex justify-center">
      <div className="relative w-64 h-80 bg-white p-3 rounded-2xl shadow-2xl rotate-[-3deg] hover:rotate-0 transition-transform duration-500">
        <div className="w-full h-full rounded-xl overflow-hidden bg-slate-50">
          <img src="/imgs/img1.jpeg" alt="Karina" className="w-full h-full object-cover" />
        </div>
        <div className="absolute -bottom-3 -right-3 w-10 h-10 bg-pink-300 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
          <span className="text-white text-xs">✨</span>
        </div>
      </div>
    </div>
    
    <div className="text-slate-800 space-y-6 text-center md:text-left">
      <h3 className="text-6xl md:text-7xl font-bold tracking-tighter text-pink-400">Sobre mim</h3>
      <p className="text-xl md:text-2xl font-light leading-relaxed opacity-90">
        Oi! Eu sou a Karina, graduanda em <span className="font-bold underline decoration-pink-200 text-slate-900">Gestão de Tecnologia</span> no Rio de Janeiro. 
        Meu objetivo é unir a paixão por tecnologia com a visão estratégica da TI, criando soluções eficientes e com design atraente.
      </p>
    </div>
  </section>

  {/* 3. SEÇÃO HABILIDADES (IMPORTADA) - Adicionei mt-20 para reforçar o distanciamento */}
  <div className="mt-20">
    <Habilidades />
  </div>

  {/* TRANSIÇÃO DE BASE - Aumentei a altura para h-48 para um fechamento mais suave */}
  <div 
    className="absolute bottom-0 left-0 w-full h-48 bg-white" 
    style={{ clipPath: 'polygon(0 40%, 100% 0, 100% 100%, 0 100%)' }}
  ></div>
</div>

      {/* 5. PROJETOS EM DESTAQUE */}
      <section className="py-40 md:py-60 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <h3 className="font-serif text-3xl mb-24 border-l-4 border-pink-400 pl-6 uppercase tracking-widest text-slate-800">Projetos em Destaque</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div className="group space-y-8">
              <div className="aspect-video bg-pink-50 rounded-[3rem] overflow-hidden border border-pink-100 flex items-center justify-center text-pink-200 italic shadow-inner">
                [Preview do Projeto]
              </div>
              <div className="px-4">
                <h4 className="text-3xl font-bold text-slate-900 mb-4 uppercase tracking-tighter">Mão na Roda</h4>
                <p className="text-slate-500 text-lg font-light mb-6">Landing page para serviço de aluguel de equipamentos.</p>
                <a href="https://sitemaonarodadealuguel.vercel.app" target="_blank" rel="noreferrer" className="text-xs font-black uppercase tracking-[0.2em] text-pink-400 border-b border-pink-200 pb-1 hover:text-slate-900 hover:border-slate-900 transition-all">Ver projeto ↗</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CONTATO */}
      <section id="contato" className="py-40 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-8 text-center">
          <h2 className="font-serif text-6xl mb-12">Vamos criar algo?</h2>
          <div className="flex justify-center gap-8">
            <a href="#" className="text-sm font-bold uppercase tracking-widest border border-white/20 px-8 py-4 rounded-full hover:bg-white hover:text-slate-900 transition-all">LinkedIn</a>
            <a href="#" className="text-sm font-bold uppercase tracking-widest bg-pink-400 px-8 py-4 rounded-full hover:bg-pink-500 transition-all">E-mail</a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App;