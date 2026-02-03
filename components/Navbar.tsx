
import React, { useState } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { PageView } from '../types';
import { PHONE_NUMBER } from '../constants';

interface NavbarProps {
  currentView: PageView;
  setView: (view: PageView) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, setView }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Accueil', view: PageView.Home },
    { label: 'Services', view: PageView.Services },
    { label: 'Réalisations', view: PageView.Realisations },
    { label: 'À Propos', view: PageView.About },
    { label: 'Contact', view: PageView.Contact },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 border-b border-stone-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div 
            className="flex items-center cursor-pointer" 
            onClick={() => setView(PageView.Home)}
          >
            <div className="bg-emerald-700 p-2 rounded-lg mr-2">
              <span className="text-white font-bold text-xl">EV</span>
            </div>
            <div>
              <span className="text-emerald-900 font-bold text-xl tracking-tight leading-none block">ESPACES VERTS</span>
              <span className="text-stone-500 text-xs uppercase tracking-widest font-semibold">Aménagement & Entretien</span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.view}
                onClick={() => setView(item.view)}
                className={`text-sm font-semibold transition-colors uppercase tracking-wide ${
                  currentView === item.view ? 'text-emerald-700' : 'text-stone-600 hover:text-emerald-700'
                }`}
              >
                {item.label}
              </button>
            ))}
            <a 
              href={`tel:${PHONE_NUMBER}`} 
              className="bg-emerald-700 text-white px-5 py-2.5 rounded-full text-sm font-bold flex items-center hover:bg-emerald-800 transition-all shadow-md active:scale-95"
            >
              <Phone size={16} className="mr-2" />
              Appeler
            </a>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-stone-700 p-2 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full bg-white border-b border-stone-200 transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-4 py-6 space-y-4 shadow-xl">
          {navItems.map((item) => (
            <button
              key={item.view}
              onClick={() => {
                setView(item.view);
                setIsOpen(false);
              }}
              className={`block w-full text-left py-3 text-lg font-semibold border-b border-stone-100 ${
                currentView === item.view ? 'text-emerald-700 pl-2 border-l-4 border-l-emerald-700' : 'text-stone-600'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="grid grid-cols-1 gap-4 pt-4">
             <a 
              href={`tel:${PHONE_NUMBER}`} 
              className="bg-emerald-700 text-white w-full py-4 rounded-xl text-center font-bold flex items-center justify-center shadow-lg"
            >
              <Phone size={20} className="mr-2" />
              Appeler
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
