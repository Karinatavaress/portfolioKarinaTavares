import { useState } from 'react';

const Habilidades = () => {
  const [tabAtiva, setTabAtiva] = useState('frontend');

  const conteudos = {
    frontend: {
      titulo: "Construtora de Interfaces",
      subtitulo: "Front-End",
      descricao: "Transformo código em interfaces limpas, responsivas e acessíveis, sempre buscando usabilidade e boa experiência visual.",
      skills: [
        { name: "HTML5", icon: "devicon-html5-plain" },
        { name: "CSS3", icon: "devicon-css3-plain" },
        { name: "JS", icon: "devicon-javascript-plain" },
        { name: "REACT", icon: "devicon-react-original" },
        { name: "SASS", icon: "devicon-sass-original" },
        { name: "NODE.JS", icon: "devicon-nodejs-plain" }
      ]
    },
    softskills: {
      titulo: "Além do Código",
      subtitulo: "Colaboração & Estratégia",
      descricao: "Colaboro em equipe de forma organizada e clara, aplicando Git e metodologias ágeis para manter um fluxo eficiente. Prezo pela comunicação e resiliência.",
      skills: [
        { name: "GIT/GITHUB", icon: "devicon-git-plain" },
        { name: "SCRUM", icon: "devicon-jira-plain" },
        { name: "COMUNICAÇÃO", emoji: "🗣️" },
        { name: "RESILIÊNCIA", emoji: "💡" },
        { name: "KANBAN", emoji: "📋" },
        { name: "ADAPTABILIDADE", emoji: "🔄" }
      ]
    }
  };

  const atual = conteudos[tabAtiva];

  return (
    <section id="habilidades" className="relative z-10 py-32">
      <div className="max-w-4xl mx-auto px-8">
        <div className="relative group">
          <div className="bg-white/90 backdrop-blur-md rounded-[3.5rem] p-12 md:p-20 shadow-[0_30px_60px_rgba(255,182,193,0.2)] border border-white text-center min-h-[550px] flex flex-col justify-center transition-all duration-500">

            {/* Botões de Aba visíveis */}
            <div className="flex gap-3 justify-center mb-10">
              <button
                onClick={() => setTabAtiva('frontend')}
                className={`px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 ${
                  tabAtiva === 'frontend'
                    ? 'bg-pink-400 text-white shadow-lg shadow-pink-100'
                    : 'border-2 border-pink-200 text-pink-300 hover:border-pink-400 hover:text-pink-400'
                }`}
              >
                Front-End
              </button>
              <button
                onClick={() => setTabAtiva('softskills')}
                className={`px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 ${
                  tabAtiva === 'softskills'
                    ? 'bg-pink-400 text-white shadow-lg shadow-pink-100'
                    : 'border-2 border-pink-200 text-pink-300 hover:border-pink-400 hover:text-pink-400'
                }`}
              >
                Soft Skills
              </button>
            </div>

            {/* Conteúdo Dinâmico */}
            <div key={tabAtiva} className="animate-fadeIn">
              <h3 className="text-slate-800 text-4xl md:text-5xl font-bold mb-8">
                {atual.titulo}
              </h3>
              <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto mb-16 font-light leading-relaxed">
                {atual.descricao}
              </p>

              {/* Renderização de Skills */}
              <div className="flex flex-wrap justify-center gap-6 md:gap-10">
                {atual.skills.map((skill) => (
                  <div key={skill.name} className="flex flex-col items-center group/icon">
                    <div className="w-16 h-16 bg-pink-50 rounded-2xl flex items-center justify-center border border-pink-100 transition-all duration-300 group-hover/icon:bg-pink-400 group-hover/icon:-translate-y-2">
                      {skill.icon ? (
                        <i className={`${skill.icon} text-3xl text-pink-400 group-hover/icon:text-white transition-colors`}></i>
                      ) : (
                        <span className="text-2xl">{skill.emoji}</span>
                      )}
                    </div>
                    <span className="mt-2 text-[10px] font-bold text-pink-300 opacity-0 group-hover/icon:opacity-100 transition-opacity uppercase tracking-tighter">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Indicadores de ponto */}
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

      <style>{`
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