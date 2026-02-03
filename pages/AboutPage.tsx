
import React from 'react';
import { Target, ShieldCheck, Heart, Users, Clock } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-24">
      {/* STORY SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=1200" 
                  alt="Notre équipe" 
                  className="rounded-[3rem] shadow-2xl relative z-10"
                />
                <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-emerald-100 rounded-[3rem] -z-0 hidden md:block"></div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <span className="text-emerald-700 font-bold uppercase tracking-widest text-sm mb-4 block">Notre Histoire</span>
              <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-8 leading-tight">L'expertise au service du vert</h1>
              <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                Depuis plus de 10 ans, Espaces Verts Pro accompagne les propriétaires exigeants dans la création et l'entretien de leurs espaces extérieurs au Maroc.
              </p>
              <p className="text-lg text-stone-600 mb-10 leading-relaxed">
                Notre mission est d'allier l'esthétisme architectural du jardin aux besoins biologiques de la nature. Nous intervenons sur tout type de terrain : de la petite villa urbaine aux grands domaines agricoles en périphérie.
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-emerald-50 rounded-2xl text-emerald-700"><Users /></div>
                  <div>
                    <h4 className="font-bold text-xl">15+</h4>
                    <p className="text-stone-500 text-sm">Experts dédiés</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-emerald-50 rounded-2xl text-emerald-700"><Target /></div>
                  <div>
                    <h4 className="font-bold text-xl">500+</h4>
                    <p className="text-stone-500 text-sm">Projets réussis</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">Nos Valeurs Fondamentales</h2>
            <div className="w-20 h-1.5 bg-emerald-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Qualité Premium", desc: "Des finitions irréprochables pour des espaces durables.", icon: <ShieldCheck /> },
              { title: "Sérieux & Rigueur", desc: "Une organisation carrée pour des résultats précis.", icon: <Target /> },
              { title: "Ponctualité", desc: "Respect strict des plannings et des délais fixés.", icon: <Clock /> },
              { title: "Passion Nature", desc: "Le respect des cycles biologiques avant tout.", icon: <Heart /> },
            ].map((value, idx) => (
              <div key={idx} className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-shadow border border-stone-100 text-center">
                <div className="inline-flex p-4 bg-emerald-50 text-emerald-700 rounded-2xl mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-stone-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* TEAM CTA */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-emerald-900">Une équipe qualifiée à votre écoute</h2>
          <p className="text-lg text-stone-600 mb-10 leading-relaxed">
            Chaque membre de notre équipe est formé aux dernières techniques d'élagage, de jardinage et d'irrigation intelligente. Nous travaillons avec le sourire et le sens du service.
          </p>
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200" 
            alt="Équipe au travail" 
            className="rounded-[3rem] shadow-xl w-full h-[400px] object-cover mb-12"
          />
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
