
import { Realisation } from './types';

/**
 * =========================================================================
 * GESTION DES RÉALISATIONS (VOS PROJETS)
 * =========================================================================
 * Pour ajouter un nouveau projet :
 * 1. Copiez un bloc de projet existant (entre les accolades { ... }).
 * 2. Changez l'id (mettez '7', '8', etc.).
 * 3. Modifiez le titre, la catégorie, l'image et la description.
 * 4. Enregistrez le fichier. Le site se mettra à jour tout seul !
 * =========================================================================
 */

export const PROJECTS: Realisation[] = [
  {
    id: '1',
    title: 'Villa Moderne - Casablanca California',
    category: 'Villa',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200',
    description: 'Aménagement paysager complet avec pose de gazon naturel de qualité supérieure, palmiers ornementaux et éclairage nocturne LED.'
  },
  {
    id: '2',
    title: 'Domaine Agricole - Bouskoura',
    category: 'Ferme',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200',
    description: 'Maintenance mensuelle du verger et création d\'un espace détente fleuri aux abords de la résidence principale.'
  },
  {
    id: '3',
    title: 'Résidence Prestige - Anfa',
    category: 'Résidence',
    image: 'https://images.unsplash.com/photo-1592150621344-828ec9639a0c?q=80&w=1200',
    description: 'Réhabilitation des jardins communs : élagage, tonte régulière et installation d\'un système d\'arrosage automatique intelligent.'
  },
  {
    id: '4',
    title: 'Espace Détente - Siège Social Entreprise',
    category: 'Entreprise',
    image: 'https://images.unsplash.com/photo-1531846802986-4942a5c3dd08?q=80&w=1200',
    description: 'Installation de gazon synthétique haut de gamme pour les espaces de pause extérieurs et plantation d\'arbres d\'ombrage.'
  },
  {
    id: '5',
    title: 'Jardin Zen Villa - Harhoura',
    category: 'Villa',
    image: 'https://images.unsplash.com/photo-1558904541-efa8c196b27d?q=80&w=1200',
    description: 'Conception d\'un jardin sec avec oliviers taillés, galets décoratifs et plantes grasses adaptées au climat côtier.'
  },
  {
    id: '6',
    title: 'Hôtel Resort - Marrakech Palmeraie',
    category: 'Hôtel',
    image: 'https://images.unsplash.com/photo-1563514223300-8805f7789178?q=80&w=1200',
    description: 'Aménagement des jardins de piscine et entretien quotidien des espaces verts pour une expérience client premium.'
  }
];
