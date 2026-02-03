
import React from 'react';
import { Phone, MessageCircle, Mail, MapPin, Clock, Globe } from 'lucide-react';
import { PHONE_NUMBER, WHATSAPP_NUMBER } from '../constants';

const ContactPage: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-stone-50">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">Contactez-nous</h1>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto">
              Besoin d'un devis ou d'un conseil ? Nous sommes disponibles pour répondre à toutes vos questions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Cards */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-emerald-50 text-emerald-700 rounded-xl mr-4"><Phone /></div>
                  <div>
                    <h3 className="font-bold text-lg">Téléphone</h3>
                    <p className="text-stone-500 text-sm">Appel direct</p>
                  </div>
                </div>
                <a href={`tel:${PHONE_NUMBER}`} className="text-xl font-bold text-emerald-700 hover:underline">{PHONE_NUMBER}</a>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-[#25D366]/10 text-[#25D366] rounded-xl mr-4"><MessageCircle /></div>
                  <div>
                    <h3 className="font-bold text-lg">WhatsApp</h3>
                    <p className="text-stone-500 text-sm">Devis instantané</p>
                  </div>
                </div>
                <a 
                  href={`https://wa.me/${WHATSAPP_NUMBER}`} 
                  className="text-xl font-bold text-[#25D366] hover:underline"
                >
                  Envoyer un message
                </a>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-blue-50 text-blue-700 rounded-xl mr-4"><Mail /></div>
                  <div>
                    <h3 className="font-bold text-lg">Email</h3>
                    <p className="text-stone-500 text-sm">Demandes formelles</p>
                  </div>
                </div>
                <p className="text-xl font-bold text-stone-800">contact@espacesverts.ma</p>
              </div>
            </div>

            {/* Main Contact Area */}
            <div className="lg:col-span-2">
              <div className="bg-white p-10 md:p-16 rounded-[3rem] shadow-xl border border-stone-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-[5rem] -z-0"></div>
                
                <div className="relative z-10">
                  <h2 className="text-3xl font-bold text-emerald-900 mb-8">Demander un devis gratuit</h2>
                  <p className="text-lg text-stone-600 mb-12">
                    Pour une réponse ultra-rapide, nous vous recommandons d'utiliser WhatsApp. Envoyez-nous des photos de votre jardin actuel si possible !
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div className="space-y-6">
                      <div className="flex items-start">
                        <MapPin className="text-emerald-600 mr-4 mt-1" />
                        <div>
                          <h4 className="font-bold">Zone d'intervention</h4>
                          <p className="text-stone-500">Casablanca, Rabat, Marrakech et alentours.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Clock className="text-emerald-600 mr-4 mt-1" />
                        <div>
                          <h4 className="font-bold">Horaires</h4>
                          <p className="text-stone-500">Lundi - Samedi : 08:00 - 19:00</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-6">
                      <div className="flex items-start">
                        <Globe className="text-emerald-600 mr-4 mt-1" />
                        <div>
                          <h4 className="font-bold">Réponse garantie</h4>
                          <p className="text-stone-500">Sous moins de 2 heures par WhatsApp.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <a 
                      href={`https://wa.me/${WHATSAPP_NUMBER}`}
                      className="bg-[#25D366] text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-[#1fb355] transition-all flex items-center justify-center shadow-lg shadow-green-200 active:scale-95"
                    >
                      <MessageCircle className="mr-3" /> Devis WhatsApp
                    </a>
                    <a 
                      href={`tel:${PHONE_NUMBER}`}
                      className="bg-stone-900 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-stone-800 transition-all flex items-center justify-center shadow-lg active:scale-95"
                    >
                      <Phone className="mr-3" /> Appeler
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Dummy Map Placeholder */}
              <div className="mt-10 rounded-[2rem] overflow-hidden h-64 border border-stone-200 shadow-inner bg-stone-200 flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={48} className="text-stone-400 mx-auto mb-2" />
                  <p className="text-stone-500 font-bold uppercase tracking-widest text-sm">Zone Casablanca - Maroc</p>
                  <p className="text-stone-400 text-xs mt-1">Secteur technique et bureaux</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
