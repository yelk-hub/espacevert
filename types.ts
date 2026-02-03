
export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: string;
}

export interface Realisation {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

export enum PageView {
  Home = 'home',
  About = 'about',
  Services = 'services',
  Realisations = 'realisations',
  Contact = 'contact'
}
