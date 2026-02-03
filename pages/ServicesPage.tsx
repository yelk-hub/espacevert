
import React from 'react';
import { SERVICES, WHATSAPP_NUMBER } from '../constants';
import IconWrapper from '../components/IconWrapper';
import { MessageCircle, CheckCircle } from 'lucide-react';

const ServicesPage: React.FC = () => {
  return (
    <div className="pt-24">
      {/* HEADER */}
      <section className="bg-emerald-900 py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1592150621344-828ec9639a0c?q=80&w=1600" 
            className="w-full h-full object-cover opacity-20"
            alt="Background"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Nos Services Experts</h1>
            <p className="text-xl text-emerald-100 leading-relaxed">
              Une gamme complète de solutions pour l'aménagement et l'entretien de vos espaces verts, réalisée par des professionnels qualifiés.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {SERVICES.map((service) => (
              <div key={service.id} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200 flex flex-col group hover:shadow-2xl transition-all duration-300">
                <div className="relative h-64">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-emerald-600 text-white p-3 rounded-2xl shadow-lg">
                    <IconWrapper name={service.icon} size={24} />
                  </div>
                </div>
                <div className="p-8 flex-grow">
                  <h3 className="text-2xl font-bold mb-4 text-emerald-900">{service.title}</h3>
                  <p className="text-stone-600 mb-8 leading-relaxed">
                    {service.description} Nous utilisons des techniques respectueuses de l'environnement et adaptées aux spécificités de votre terrain.
                  </p>
                  
                  <ul className="space-y-3 mb-10">
                    <li className="flex items-start text-sm text-stone-700">
                      <CheckCircle className="text-emerald-500 mr-2 shrink-0" size={18} />
                      Étude et devis gratuits
                    </li>
                    <li className="flex items-start text-sm text-stone-700">
                      <CheckCircle className="text-emerald-500 mr-2 shrink-0" size={18} />
                      Intervention rapide
                    </li>
                    <li className="flex items-start text-sm text-stone-700">
                      <CheckCircle className="text-emerald-500 mr-2 shrink-0" size={18} />
                      Garantie de qualité
                    </li>
                  </ul>

                  <a 
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=Je souhaite en savoir plus sur le service : ${service.title}`}
                    className="w-full bg-stone-900 text-white py-4 rounded-xl font-bold flex items-center justify-center hover:bg-emerald-800 transition-colors shadow-lg active:scale-95"
                  >
                    <MessageCircle className="mr-2" size={20} /> Devis via WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMITMENT SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-emerald-50 rounded-[40px] p-10 md:p-20 flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-6">Qualité et Ponctualité</h2>
              <p className="text-lg text-stone-700 mb-8 leading-relaxed">
                Notre engagement est simple : offrir le meilleur service au meilleur prix tout en respectant scrupuleusement les délais. Que vous soyez un particulier ou une entreprise, nous nous adaptons à vos besoins spécifiques.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="text-3xl font-bold text-emerald-700 mb-1">100%</h4>
                  <p className="text-sm font-semibold text-stone-500 uppercase tracking-widest">Satisfaction</p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-emerald-700 mb-1">24/7</h4>
                  <p className="text-sm font-semibold text-stone-500 uppercase tracking-widest">Support WhatsApp</p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1589131649624-9b884968393e?q=80&w=800" 
                alt="Engagement Qualité" 
                className="rounded-3xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
