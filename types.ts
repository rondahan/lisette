
export interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  imageUrl: string;
  description: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export type Language = 'en' | 'he';

export enum Page {
  Home = 'home',
  Collections = 'collections',
  About = 'about',
  Stylist = 'stylist',
  Contact = 'contact'
}
