
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=Bonjour, je souhaiterais obtenir un devis pour mon jardin.`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center group overflow-hidden"
      aria-label="Contactez-nous sur WhatsApp"
    >
      <span className="max-w-0 group-hover:max-w-xs group-hover:mr-3 transition-all duration-300 ease-in-out whitespace-nowrap overflow-hidden font-bold">
        Devis WhatsApp
      </span>
      <MessageCircle size={28} />
      <div className="absolute top-0 right-0 h-3 w-3 bg-red-500 rounded-full animate-ping"></div>
    </a>
  );
};

export default WhatsAppButton;
