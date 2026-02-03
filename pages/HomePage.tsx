
import React from 'react';
import { PageView } from '../types';
import { ArrowRight, Phone, MessageCircle, CheckCircle2, Star } from 'lucide-react';
import { SERVICES, REALISATIONS, PHONE_NUMBER, WHATSAPP_NUMBER } from '../constants';
import IconWrapper from '../components/IconWrapper';

interface HomePageProps {
  setView: (view: PageView) => void;
}

const HomePage: React.FC<HomePageProps> = ({ setView }) => {
  return (
    <div className="overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1558904541-efa8c196b27d?q=80&w=1600" 
            alt="Hero Jardin" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/90 to-stone-900/40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-white">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-emerald-600 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              Expertise & Passion Nature
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              Société d'aménagement et d'entretien des <span className="text-emerald-400">espaces verts</span>
            </h1>
            <p className="text-xl text-stone-200 mb-10 leading-relaxed max-w-2xl">
              Transformez votre extérieur en un jardin d'exception. Nous accompagnons les villas, fermes et résidences pour une nature sublimée.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center transition-all shadow-xl shadow-emerald-900/20 active:scale-95"
              >
                <MessageCircle className="mr-2" /> Demander un devis WhatsApp
              </a>
              <a 
                href={`tel:${PHONE_NUMBER}`}
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center transition-all active:scale-95"
              >
                <Phone className="mr-2" /> Appeler maintenant
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">Pourquoi nous faire confiance ?</h2>
            <div className="w-20 h-1.5 bg-emerald-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Expertise Terrain", desc: "Plus de 10 ans d'expérience dans l'aménagement de jardins prestigieux.", icon: <CheckCircle2 className="text-emerald-600" /> },
              { title: "Matériel Moderne", desc: "Équipements de pointe pour un travail précis, efficace et soigné.", icon: <CheckCircle2 className="text-emerald-600" /> },
              { title: "Suivi Personnalisé", desc: "Chaque projet est unique. Nous assurons un suivi mensuel rigoureux.", icon: <CheckCircle2 className="text-emerald-600" /> },
            ].map((item, idx) => (
              <div key={idx} className="bg-stone-50 p-8 rounded-2xl border border-stone-100 hover:shadow-xl transition-shadow group">
                <div className="mb-4 bg-emerald-100 w-12 h-12 flex items-center justify-center rounded-xl group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-stone-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">Nos services professionnels</h2>
              <p className="text-stone-600 text-lg">De la conception à l'entretien régulier, nous prenons soin de chaque détail de votre jardin.</p>
            </div>
            <button 
              onClick={() => setView(PageView.Services)}
              className="group flex items-center text-emerald-700 font-bold hover:text-emerald-800 transition-colors"
            >
              Voir tous les services <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.slice(0, 6).map((service) => (
              <div key={service.id} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200 hover:shadow-xl transition-all group flex flex-col h-full">
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur p-2 rounded-xl shadow-lg">
                    <IconWrapper name={service.icon} className="text-emerald-700" />
                  </div>
                </div>
                <div className="p-8 flex-grow">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-emerald-700 transition-colors">{service.title}</h3>
                  <p className="text-stone-600 mb-6 line-clamp-2">{service.description}</p>
                  <button 
                    onClick={() => setView(PageView.Services)}
                    className="mt-auto inline-flex items-center text-emerald-700 font-bold hover:underline"
                  >
                    En savoir plus
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REALISATIONS PREVIEW */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">Nos dernières réalisations</h2>
            <div className="w-20 h-1.5 bg-emerald-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {REALISATIONS.slice(0, 2).map((proj) => (
              <div key={proj.id} className="relative rounded-3xl overflow-hidden group h-[400px]">
                <img 
                  src={proj.image} 
                  alt={proj.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-950/20 to-transparent flex flex-col justify-end p-10 opacity-100 transition-opacity">
                  <span className="text-emerald-400 text-sm font-bold uppercase tracking-widest mb-2">{proj.category}</span>
                  <h3 className="text-white text-3xl font-bold mb-4">{proj.title}</h3>
                  <p className="text-stone-300 mb-6 max-w-md">{proj.description}</p>
                  <button 
                    onClick={() => setView(PageView.Realisations)}
                    className="w-fit bg-white text-emerald-900 px-6 py-3 rounded-xl font-bold hover:bg-emerald-50 transition-colors"
                  >
                    Voir le projet
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-emerald-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-emerald-800 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-emerald-700 rounded-full opacity-30 blur-3xl"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Prêt à transformer votre extérieur ?</h2>
          <p className="text-xl text-emerald-100 mb-12 max-w-2xl mx-auto">
            Contactez-nous aujourd'hui pour une étude gratuite de votre projet. Nos experts reviennent vers vous sous 24h.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              className="bg-white text-emerald-900 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-stone-100 transition-all shadow-2xl active:scale-95 flex items-center justify-center"
            >
              <MessageCircle className="mr-2" /> Demander un devis gratuit
            </a>
            <a 
              href={`tel:${PHONE_NUMBER}`}
              className="bg-emerald-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-emerald-500 transition-all border border-emerald-500 active:scale-95 flex items-center justify-center"
            >
              <Phone className="mr-2" /> Nous appeler directement
            </a>
          </div>
          
          <div className="mt-16 flex items-center justify-center space-x-2 text-emerald-200">
            <div className="flex -space-x-2">
              {[1,2,3,4].map(i => (
                <img key={i} src={`https://picsum.photos/seed/${i+10}/40/40`} className="w-10 h-10 rounded-full border-2 border-emerald-900" alt="Client" />
              ))}
            </div>
            <p className="text-sm font-medium ml-4">+500 clients satisfaits au Maroc</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
