import fs from 'fs';
import { VENUES } from './js/data/venues.js';

const locations = VENUES.map(v => ({
  id: v.id,
  name: v.name,
  nameKu: v.nameKu,
  category: v.category,
  neighborhood: v.neighborhood,
  address: v.address,
  phone: v.phone,
  rating: v.rating,
  reviewCount: v.reviewCount,
  price: v.price,
  isOpen: v.isOpen,
  description: v.description,
  tags: v.tags || [],
  coords: { lat: v.lat, lng: v.lng },
  imageURL: v.image || (v.images && v.images[0]) || "",
  menuURL: `#venue/${v.id}`
}));

fs.writeFileSync('./map-feature/locations.json', JSON.stringify(locations, null, 2));
console.log('Successfully generated locations.json with', locations.length, 'venues.');
