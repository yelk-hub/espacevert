
import { Service } from './types';
import { PROJECTS } from './projects';

export const WHATSAPP_NUMBER = "212600000000"; // Remplacez par le vrai numéro
export const PHONE_NUMBER = "+212 6 00 00 00 00";

// Nous exportons les projets sous le nom REALISATIONS pour que le reste du site continue de fonctionner sans changement
export const REALISATIONS = PROJECTS;

export const SERVICES: Service[] = [
  {
    id: 'amenagement',
    title: 'Aménagement de jardins',
    description: 'Conception et création de jardins sur mesure pour villas et domaines.',
    image: 'https://images.unsplash.com/photo-1558904541-efa8c196b27d?q=80&w=800',
    icon: 'Leaf'
  },
  {
    id: 'entretien',
    title: 'Entretien des espaces verts',
    description: 'Maintenance complète pour assurer la beauté de vos jardins toute l\'année.',
    image: 'https://images.unsplash.com/photo-1592150621344-828ec9639a0c?q=80&w=800',
    icon: 'Scissors'
  },
  {
    id: 'gazon-naturel',
    title: 'Gazon Naturel',
    description: 'Pose de gazon en plaques ou semis pour un tapis vert dense et vigoureux.',
    image: 'https://images.unsplash.com/photo-1533460004989-cef01064af7c?q=80&w=800',
    icon: 'Sprout'
  },
  {
    id: 'gazon-synthetique',
    title: 'Gazon Synthétique',
    description: 'Solutions esthétiques sans entretien pour terrasses, jardins et aires de jeux.',
    image: 'https://images.unsplash.com/photo-1531846802986-4942a5c3dd08?q=80&w=800',
    icon: 'Shovel'
  },
  {
    id: 'plantation',
    title: 'Plantation d\'arbres',
    description: 'Sélection et plantation d\'arbres, arbustes et fleurs adaptés au climat.',
    image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=800',
    icon: 'TreePine'
  },
  {
    id: 'elagage',
    title: 'Taille et élagage',
    description: 'Taille ornementale et élagage de sécurité par des experts.',
    image: 'https://images.unsplash.com/photo-1589131649624-9b884968393e?q=80&w=800',
    icon: 'Scissors'
  },
  {
    id: 'irrigation',
    title: 'Arrosage automatique',
    description: 'Installation de systèmes d\'irrigation intelligents et économes en eau.',
    image: 'https://images.unsplash.com/photo-1563514223300-8805f7789178?q=80&w=800',
    icon: 'Droplets'
  },
  {
    id: 'maintenance',
    title: 'Maintenance Mensuelle',
    description: 'Contrats de suivi régulier pour résidences, entreprises et syndics.',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800',
    icon: 'CalendarCheck'
  },
  {
    id: 'exterieur',
    title: 'Aménagement Extérieur',
    description: 'Aménagement global des extérieurs pour villas et fermes de prestige.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800',
    icon: 'Home'
  }
];
