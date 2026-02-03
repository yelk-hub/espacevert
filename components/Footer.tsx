
import React from 'react';
import { PageView } from '../types';
import { Phone, Mail, MapPin, Facebook, Instagram, MessageCircle } from 'lucide-react';
import { PHONE_NUMBER, WHATSAPP_NUMBER } from '../constants';

interface FooterProps {
  setView: (view: PageView) => void;
}

const Footer: React.FC<FooterProps> = ({ setView }) => {
  return (
    <footer className="bg-stone-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & Info */}
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="bg-emerald-600 p-2 rounded-lg mr-2">
                <span className="text-white font-bold text-xl">EV</span>
              </div>
              <span className="text-white font-bold text-xl tracking-tight">ESPACES VERTS</span>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed">
              Expert en aménagement et entretien des espaces verts au Maroc. Nous transformons vos jardins en véritables havres de paix.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-stone-800 rounded-full hover:bg-emerald-600 transition-colors"><Facebook size={18} /></a>
              <a href="#" className="p-2 bg-stone-800 rounded-full hover:bg-emerald-600 transition-colors"><Instagram size={18} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-emerald-500">Navigation</h4>
            <ul className="space-y-4 text-stone-400">
              <li><button onClick={() => setView(PageView.Home)} className="hover:text-emerald-500 transition-colors">Accueil</button></li>
              <li><button onClick={() => setView(PageView.About)} className="hover:text-emerald-500 transition-colors">À Propos</button></li>
              <li><button onClick={() => setView(PageView.Services)} className="hover:text-emerald-500 transition-colors">Nos Services</button></li>
              <li><button onClick={() => setView(PageView.Realisations)} className="hover:text-emerald-500 transition-colors">Réalisations</button></li>
              <li><button onClick={() => setView(PageView.Contact)} className="hover:text-emerald-500 transition-colors">Contact & Devis</button></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-emerald-500">Nos Services</h4>
            <ul className="space-y-4 text-stone-400">
              <li className="text-sm">Aménagement de jardins</li>
              <li className="text-sm">Entretien espaces verts</li>
              <li className="text-sm">Pose de gazon naturel</li>
              <li className="text-sm">Systèmes d'irrigation</li>
              <li className="text-sm">Élagage et taille</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-emerald-500">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start text-stone-400">
                <MapPin size={18} className="mr-3 text-emerald-500 shrink-0 mt-1" />
                <span className="text-sm">Secteur Industriel, Casablanca, Maroc</span>
              </li>
              <li className="flex items-center text-stone-400">
                <Phone size={18} className="mr-3 text-emerald-500 shrink-0" />
                <a href={`tel:${PHONE_NUMBER}`} className="text-sm hover:text-emerald-500">{PHONE_NUMBER}</a>
              </li>
              <li className="flex items-center text-stone-400">
                <MessageCircle size={18} className="mr-3 text-emerald-500 shrink-0" />
                <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="text-sm hover:text-emerald-500">WhatsApp Direct</a>
              </li>
              <li className="flex items-center text-stone-400">
                <Mail size={18} className="mr-3 text-emerald-500 shrink-0" />
                <span className="text-sm">contact@espacesvertspro.ma</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-stone-800 text-center text-stone-500 text-xs">
          <p>© {new Date().getFullYear()} Espaces Verts Pro. Tous droits réservés. Design Premium pour Professionnels.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
