
import { Product, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Collections', href: '#collections' },
  { label: 'The Studio', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const NAV_ITEMS_HE: NavItem[] = [
  { label: 'קולקציות', href: '#collections' },
  { label: 'הסטודיו', href: '#about' },
  { label: 'צור קשר', href: '#contact' },
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Silk Organza Gown',
    category: 'Bridal',
    price: '$4,200',
    imageUrl: 'https://images.unsplash.com/photo-1594463750939-ebb28c3f7f75?auto=format&fit=crop&q=80&w=800',
    description: 'A structural masterpiece in Italian silk organza, featuring a hand-draped bodice.'
  },
  {
    id: '2',
    name: 'Asymmetric Crepe Dress',
    category: 'Evening',
    price: '$2,850',
    imageUrl: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80&w=800',
    description: 'Modern minimalism meets evening elegance. Fluid crepe that moves with the body.'
  },
  {
    id: '3',
    name: 'Sculpted Linen Blazer',
    category: 'Ready-to-wear',
    price: '$1,400',
    imageUrl: 'https://images.unsplash.com/photo-1548624149-f9b1859aa700?auto=format&fit=crop&q=80&w=800',
    description: 'Precision tailoring in heavy-weight European linen. A staple for the modern muse.'
  },
  {
    id: '4',
    name: 'Velvet Ribbon Slip',
    category: 'Evening',
    price: '$1,900',
    imageUrl: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=800',
    description: 'The essence of Lisette. Delicate, sensual, and timelessly sophisticated.'
  },
  {
    id: '5',
    name: 'Pearl Embroidered Cape',
    category: 'Accessories',
    price: '$950',
    imageUrl: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800',
    description: 'Hand-sewn freshwater pearls on whisper-thin tulle.'
  },
  {
    id: '6',
    name: 'Minimalist Column Skirt',
    category: 'Ready-to-wear',
    price: '$1,100',
    imageUrl: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800',
    description: 'Sharp lines and perfect proportions define this essential silhouette.'
  }
];

export const PRODUCTS_HE: Product[] = [
  {
    id: '1',
    name: 'שמלת משי אורגנזה',
    category: 'כלה',
    price: '$4,200',
    imageUrl: 'https://images.unsplash.com/photo-1594463750939-ebb28c3f7f75?auto=format&fit=crop&q=80&w=800',
    description: 'יצירה אדריכלית במשי אורגנזה איטלקי, עם מחוך דרייפינג בעבודת יד.'
  },
  {
    id: '2',
    name: 'שמלת קרפ א-סימטרית',
    category: 'ערב',
    price: '$2,850',
    imageUrl: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80&w=800',
    description: 'מינימליזם מודרני שפוגש אלגנטיות לערב. קרפ זורם שנע יחד עם הגוף.'
  },
  {
    id: '3',
    name: 'בלייזר פשתן מפוסל',
    category: 'Ready-to-wear',
    price: '$1,400',
    imageUrl: 'https://images.unsplash.com/photo-1548624149-f9b1859aa700?auto=format&fit=crop&q=80&w=800',
    description: 'תפירה מדויקת מפשתן אירופאי כבד. פריט מפתח למוזה המודרנית.'
  },
  {
    id: '4',
    name: 'סליפ קטיפה עם סרט',
    category: 'ערב',
    price: '$1,900',
    imageUrl: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=800',
    description: 'תמצית Lisette. עדין, חושני ומתוחכם באופן על-זמני.'
  },
  {
    id: '5',
    name: 'קייפ רקום פנינים',
    category: 'אקססוריז',
    price: '$950',
    imageUrl: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800',
    description: 'פניני מים מתוקים תפורות ביד על טול דקיק ושקוף.'
  },
  {
    id: '6',
    name: 'חצאית קולום מינימליסטית',
    category: 'Ready-to-wear',
    price: '$1,100',
    imageUrl: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800',
    description: 'קווים חדים ופרופורציות מדויקות המגדירות סילואט חיוני.'
  }
];
