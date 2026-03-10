import { useState } from 'react';

const Habilidades = () => {
  const [tabAtiva, setTabAtiva] = useState('frontend');

  const conteudos = {
    frontend: {
      titulo: "Construtora de Interfaces",
      subtitulo: "Front-End",
      descricao: "Transformo código em interfaces limpas, responsivas e acessíveis, sempre buscando usabilidade e boa experiência visual.",
      skills: ["HTML5", "CSS3", "JS", "REACT", "SASS", "NODE.JS"]
    },
    softskills: {
      titulo: "Além do Código",
      subtitulo: "Colaboração & Estratégia",
      descricao: "Colaboro em equipe de forma organizada e clara, aplicando Git e metodologias ágeis para manter um fluxo eficiente. Prezo pela comunicação e resiliência.",
      skills: ["GIT/GITHUB", "SCRUM", "COMUNICAÇÃO", "RESILIÊNCIA", "KANBAN", "ADAPTABILIDADE"]
    }
  };

  const atual = conteudos[tabAtiva];

  return (
    <section id="habilidades" className="relative z-10 py-32">
      <div className="max-w-4xl mx-auto px-8">
        
        {/* Título da Seção */}
        <h2 className="text-slate-400 font-medium text-xs uppercase tracking-[0.4em] text-center mb-12">Expertise</h2>

        <div className="relative group">
          {/* Card Principal */}
          <div className="bg-white/90 backdrop-blur-md rounded-[3.5rem] p-12 md:p-20 shadow-[0_30px_60px_rgba(255,182,193,0.2)] border border-white text-center min-h-[500px] flex flex-col justify-center transition-all duration-500">
            
            {/* Setas de Navegação (Simulando o clique para trocar) */}
            <button 
              onClick={() => setTabAtiva(tabAtiva === 'frontend' ? 'softskills' : 'frontend')}
              className="absolute left-6 top-1/2 -translate-y-1/2 p-4 text-pink-300 hover:text-pink-500 transition-colors hidden md:block"
            >
              <span className="text-4xl font-light">‹</span>
            </button>

            <button 
              onClick={() => setTabAtiva(tabAtiva === 'frontend' ? 'softskills' : 'frontend')}
              className="absolute right-6 top-1/2 -translate-y-1/2 p-4 text-pink-300 hover:text-pink-500 transition-colors hidden md:block"
            >
              <span className="text-4xl font-light">›</span>
            </button>

            {/* Conteúdo Dinâmico com Animação Simples */}
            <div key={tabAtiva} className="animate-fadeIn">
              <h4 className="text-pink-400 font-bold text-sm uppercase tracking-widest mb-4">
                {atual.subtitulo}
              </h4>
              <h3 className="text-slate-800 text-4xl md:text-5xl font-bold mb-8">
                {atual.titulo}
              </h3>
              
              <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto mb-16 font-light leading-relaxed">
                {atual.descricao}
              </p>

              {/* Badges de Skills */}
              <div className="flex flex-wrap justify-center gap-4">
                {atual.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-6 py-2 bg-pink-50 text-pink-400 text-[10px] font-bold rounded-full border border-pink-100 uppercase tracking-tighter"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Indicadores de Página (Bolinhas) */}
            <div className="flex justify-center gap-2 mt-12">
              <button 
                onClick={() => setTabAtiva('frontend')}
                className={`w-2 h-2 rounded-full transition-all ${tabAtiva === 'frontend' ? 'bg-pink-400 w-6' : 'bg-pink-100'}`}
              />
              <button 
                onClick={() => setTabAtiva('softskills')}
                className={`w-2 h-2 rounded-full transition-all ${tabAtiva === 'softskills' ? 'bg-pink-400 w-6' : 'bg-pink-100'}`}
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Habilidades;