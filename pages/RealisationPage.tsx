
import React, { useState } from 'react';
import { REALISATIONS, WHATSAPP_NUMBER } from '../constants';
import { MessageCircle, ExternalLink, Camera } from 'lucide-react';

const RealisationPage: React.FC = () => {
  const [filter, setFilter] = useState('Tous');
  const categories = ['Tous', ...Array.from(new Set(REALISATIONS.map(r => r.category)))];

  const filteredProjects = filter === 'Tous' 
    ? REALISATIONS 
    : REALISATIONS.filter(r => r.category === filter);

  return (
    <div className="pt-24 pb-20">
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">Nos Réalisations</h1>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto">
              Découvrez en images le savoir-faire de nos équipes sur le terrain à travers tout le Maroc.
            </p>
          </div>

          {/* Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${
                  filter === cat 
                    ? 'bg-emerald-700 text-white shadow-lg' 
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {filteredProjects.map((project) => (
              <div key={project.id} className="group bg-white rounded-[2rem] overflow-hidden border border-stone-100 shadow-sm hover:shadow-2xl transition-all duration-500">
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-emerald-800 text-xs font-bold uppercase tracking-widest shadow-xl">
                    {project.category}
                  </div>
                </div>
                <div className="p-10">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-stone-900">{project.title}</h3>
                    <Camera className="text-emerald-500" size={24} />
                  </div>
                  <p className="text-stone-600 mb-8 leading-relaxed">
                    {project.description} Un projet d'envergure mené avec rigueur pour garantir un résultat pérenne et esthétique.
                  </p>
                  <div className="flex items-center justify-between pt-6 border-t border-stone-100">
                    <span className="text-sm font-medium text-emerald-700 flex items-center">
                      <CheckCircle className="mr-2" size={16} /> Client Satisfait
                    </span>
                    <a 
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=Je suis intéressé par votre réalisation : ${project.title}`}
                      className="text-stone-900 font-bold hover:text-emerald-700 flex items-center transition-colors"
                    >
                      Demander un projet similaire <ExternalLink size={16} className="ml-2" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-stone-900 py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Votre jardin pourrait être notre prochaine réussite</h2>
          <p className="text-stone-400 mb-10">Rejoignez nos clients qui nous font confiance pour l'entretien et l'aménagement de leurs villas de luxe.</p>
          <a 
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            className="inline-flex items-center bg-emerald-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-emerald-500 transition-all shadow-2xl shadow-emerald-950/40"
          >
            <MessageCircle className="mr-3" /> Lancer mon projet
          </a>
        </div>
      </section>
    </div>
  );
};

const CheckCircle: React.FC<{className?: string, size?: number}> = ({className, size}) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
);

export default RealisationPage;
