import React, { useState, useEffect } from 'react'
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
  className="cursor-follow hidden md:block"
  style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px` }}
/>

    <nav className="fixed top-0 left-0 w-full z-50 flex justify-center gap-4 py-3 bg-[#FFF0F5]/80 backdrop-blur-sm border-b border-pink-100">
  <a href="#sobre" className="font-montserrat text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-pink-300 hover:text-pink-500 transition-colors">Sobre</a>
  <a href="#habilidades" className="font-montserrat text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-pink-300 hover:text-pink-500 transition-colors">Habilidades</a>
  <a href="#projetos" className="font-montserrat text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-pink-300 hover:text-pink-500 transition-colors">Projetos</a>
  <a href="#contato" className="font-montserrat text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-pink-300 hover:text-pink-500 transition-colors">Contato</a>
    </nav>

      {/* 1. HEADER HERO */}
      <header className="relative min-h-screen flex flex-col items-center justify-center px-4 bg-white text-center overflow-visible">
        <div className="relative z-10 space-y-4">
          <div className="relative inline-block w-full text-center">
  <h1
  className="font-montserrat md:font-playfair text-3xl sm:text-5xl md:text-9xl tracking-tight uppercase text-transparent font-black leading-none px-8"
  style={{ WebkitTextStroke: '1px #f472b6' }}
>
  Portfolio
</h1>
</div>

<p className="font-playfair text-xl md:text-2xl text-slate-800 tracking-tight">
  by Karina Tavares<span className="text-pink-400 font-bold">.</span>
</p>

          <div className="text-lg md:text-xl font-light text-slate-500 max-w-2xl mx-auto pt-10 leading-relaxed space-y-2">
            <p>Eu sou uma <span className="font-semibold text-slate-800">estudante de Gestão de TI</span> do Rio de Janeiro.</p>
           <p className="text-center font-semibold text-pink-400 tracking-tight">
  <span className="digital-type">desenvolvedora front-end júnior</span>
</p>
          </div>
            </div>

        <div className="pt-10">
   <a
    href="#projetos"
    className="inline-block text-xs font-black uppercase tracking-[0.2em] bg-pink-400 text-white px-10 py-4 rounded-full hover:bg-pink-500 hover:scale-105 transition-all duration-300 shadow-lg shadow-pink-100"
  >
    Ver meus projetos ↓
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

  {/* 2. SEÇÃO SOBRE MIM */}
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
        Oi! Eu sou a Karina Tavares, desenvolvedora front-end em início de carreira, apaixonada por transformar código em interfaces limpas, responsivas e acessíveis. Estudo <span className="font-bold underline decoration-pink-200 text-slate-900">Gestão de Tecnologia da Informação</span> na Universidade Celso Lisboa no RJ e tenho experiência com HTML5, CSS3, JavaScript e React. Realizei a transição de carreira da área de comunicação e social media para a tecnologia e trago o olhar estético, a facilidade de comunicação e a organização para construir experiências digitais intuitivas e visualmente elegantes.
      </p>
    </div>
  </section>

  {/* 3. SEÇÃO HABILIDADES  */}
  <div className="mt-20">
    <Habilidades />
  </div>

  {/* TRANSIÇÃO DE BASE */}
  <div 
    className="absolute bottom-0 left-0 w-full h-48 bg-white" 
    style={{ clipPath: 'polygon(0 40%, 100% 0, 100% 100%, 0 100%)' }}
  ></div>
</div>

{/* 5. PROJETOS EM DESTAQUE - GRID */}
<section id="projetos" className="py-40 bg-white">
  <div className="max-w-6xl mx-auto px-8">
    <div className="text-center mb-24">
      <h3 className="font-playfair text-5xl md:text-6xl font-bold text-pink-400 mb-4">
  Meus Projetos
</h3>
      <p className="text-slate-400 text-lg font-light tracking-widest uppercase">Uma seleção de projetos que unem design e desenvolvimento</p>
    </div>

    {/* Grid de 3 Cards Reais */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      
      {/* PROJETO 1: MÃO NA RODA */}
<div className="group cursor-pointer">
  <div className="relative aspect-[4/5] bg-pink-50 rounded-[2.5rem] overflow-hidden mb-6 shadow-sm group-hover:shadow-2xl group-hover:-translate-y-2 transition-all duration-500 border border-pink-100 flex items-center justify-center p-4">
    <div className="w-full h-full bg-white rounded-xl shadow-inner overflow-hidden relative border border-pink-50 flex items-center justify-center">
      <img 
        src="/imgs/projeto1.png" 
        alt="Projeto Mão na Roda" 
        className="w-[95%] h-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity drop-shadow-md"/>
      
      <div className="absolute inset-0 bg-gradient-to-t from-pink-200/10 to-transparent pointer-events-none"></div>
    </div>
  </div>

  <div className="space-y-3 px-2">
    <h4 className="text-2xl font-bold text-slate-800 tracking-tight">Mão na Roda</h4>
    <p className="text-slate-500 font-light leading-snug">Landing page para serviço de aluguel de equipamentos. Foco em responsividade e UX.</p>
    <div className="flex gap-4 pt-2">
      <a href="https://sitemaonarodadealuguel.vercel.app" target="_blank" rel="noreferrer" className="text-[10px] font-black uppercase tracking-widest text-pink-400 hover:text-pink-600 transition-colors">Deploy ↗</a>
      <a href="https://github.com/Karinatavaress/sitemaonaroda" target="_blank" rel="noreferrer" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-colors flex items-center gap-1">
        GitHub <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
      </a>
    </div>
  </div>
</div>

      {/* PROJETO 2: NETFLIX CLONE */}
      <div className="group cursor-pointer">
        <div className="relative aspect-[4/5] bg-slate-50 rounded-[2.5rem] overflow-hidden mb-6 shadow-sm group-hover:shadow-2xl group-hover:-translate-y-2 transition-all duration-500 border border-slate-100 flex items-center justify-center p-6">
           <div className="w-full h-full bg-[#141414] rounded-xl shadow-inner overflow-hidden relative border border-slate-800">
             <img src="/imgs/projeto2.png" alt="Netflix Clone" className="w-full h-full object-cover opacity-60 group-hover:opacity-100" />
             <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-red-600 text-5xl font-black">NETFLIX</span>
             </div>
           </div>
        </div>
        <div className="space-y-3 px-2">
          <h4 className="text-2xl font-bold text-slate-800 tracking-tight">Netflix Clone</h4>
          <p className="text-slate-500 font-light leading-snug">Clone da interface da Netflix focado em estilização avançada e layout moderno.</p>
          <div className="flex gap-4 pt-2">
            <a href="https://github.com/Karinatavaress/projetonetflix" target="_blank" rel="noreferrer" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-colors flex items-center gap-1">
              GitHub <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
          </div>
        </div>
      </div>

      {/* PROJETO 3: BARBER SHOP */}
      <div className="group cursor-pointer">
        <div className="relative aspect-[4/5] bg-pink-50 rounded-[2.5rem] overflow-hidden mb-6 shadow-sm group-hover:shadow-2xl group-hover:-translate-y-2 transition-all duration-500 border border-pink-100 flex items-center justify-center p-6">
           <div className="w-full h-full bg-stone-100 rounded-xl shadow-inner overflow-hidden relative border border-stone-200">
             <img src="/imgs/projeto3.png" alt="Projeto Barber Shop" className="w-full h-full object-cover opacity-80" />
             <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-stone-900/40 to-transparent"></div>
           </div>
        </div>
        <div className="space-y-3 px-2">
          <h4 className="text-2xl font-bold text-slate-800 tracking-tight">Barber Shop</h4>
          <p className="text-slate-500 font-light leading-snug">Site institucional para barbearias com design vintage e foco em serviços.</p>
          <div className="flex gap-4 pt-2">
            <a href="https://github.com/Karinatavaress/barbershop" target="_blank" rel="noreferrer" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-colors flex items-center gap-1">
              GitHub <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
          </div>
        </div>
      </div>

    </div>

    {/* Botão de Veja Mais */}
    <div className="mt-32 text-center">
      <a href="https://github.com/Karinatavaress" target="_blank" rel="noreferrer" 
         className="inline-flex items-center gap-3 px-12 py-5 bg-pink-400 text-white font-bold rounded-full hover:bg-pink-500 hover:shadow-xl hover:shadow-pink-200 transition-all active:scale-95">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
        VEJA MAIS PROJETOS NO GITHUB
      </a>
    </div>
  </div>
</section>


{/* 6. CONTATO */}
<section id="contato" className="py-32 bg-[#FFF0F5] text-slate-900 border-t border-pink-100">
  <div className="max-w-5xl mx-auto px-8 text-center">
    <h2 className="font-playfair text-6xl md:text-7xl mb-12 text-pink-400 tracking-tight">
      Vamos criar algo?
    </h2>
    <div className="flex flex-col md:flex-row justify-center items-center gap-6">

      {/* BOTÃO LINKEDIN */}
      <a
        href="https://www.linkedin.com/in/karinatavaresdev/"
        target="_blank"
        rel="noreferrer"
        className="text-xs font-black uppercase tracking-[0.2em] border-2 border-pink-200 text-pink-400 px-10 py-5 rounded-full hover:bg-white/50 transition-all duration-300 w-full md:w-auto text-center"
      >
        LinkedIn
      </a>

      {/* BOTÃO E-MAIL */}
      <a
        href="mailto:karinasousatavares01@gmail.com"
        className="text-xs font-black uppercase tracking-[0.2em] bg-pink-400 text-white px-10 py-5 rounded-full hover:bg-pink-500 hover:scale-105 transition-all duration-300 shadow-lg shadow-pink-100 w-full md:w-auto text-center"
      >
        Enviar E-mail
      </a>

      {/* BOTÃO CURRÍCULO */}
<a
  href="https://www.canva.com/design/DAHEH_xqf48/agZirO3Li_1VAKokeSD1mQ/view?utm_content=DAHEH_xqf48&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hd39e245e83"
  target="_blank"
  rel="noreferrer"
  className="text-xs font-black uppercase tracking-[0.2em] border-2 border-pink-200 text-pink-400 px-10 py-5 rounded-full hover:bg-white/50 transition-all duration-300 w-full md:w-auto text-center"
>
  Currículo
</a>
  </div>
    </div>
</section>
      </div>
  );
};

export default App;