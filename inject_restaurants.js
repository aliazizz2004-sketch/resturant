import fs from 'fs';

// Read venues
let content = fs.readFileSync('./js/data/venues.js', 'utf8');

// Use regex to get the VENUES array
const match = content.match(/export const VENUES = (\[(?:.|\n)*?\]);/);
if (!match) {
    console.error("Could not find VENUES array");
    process.exit(1);
}

let venues;
try {
  venues = eval(match[1]);
} catch (e) {
  console.error("Eval failed", e);
  process.exit(1);
}

let maxId = Math.max(...venues.map(v => v.id));

const newRestaurants = [
  {
    id: ++maxId,
    name: "Soma Restaurant",
    nameKu: "چێشتخانەی سۆما",
    category: "Traditional Kurdish",
    categorySlug: "traditional",
    neighborhood: "Gulan Street",
    address: "Gulan Street, Near English Village, Erbil",
    phone: "+964 750 120 5566",
    price: "$$",
    priceNum: 2,
    rating: 4.6,
    reviewCount: 342,
    isOpen: true,
    isTrending: true,
    isFeatured: true,
    tags: ["Kurdish", "Family Friendly", "Traditional"],
    hours: { Mon: "11:00 AM – 11:30 PM", Tue: "11:00 AM – 11:30 PM", Wed: "11:00 AM – 11:30 PM", Thu: "11:00 AM – 12:00 AM", Fri: "11:00 AM – 12:00 AM", Sat: "11:00 AM – 12:00 AM", Sun: "11:00 AM – 11:30 PM" },
    image: "https://images.unsplash.com/photo-1544148103-0773bf10d330?w=800&q=80",
    images: ["https://images.unsplash.com/photo-1544148103-0773bf10d330?w=800&q=80", "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=800&q=80"],
    description: "چێشتخانەیەکی نایاب بۆ خواردنە کوردەوارییەکان، بەکارهێنانی باشترین گۆشت و بەروبوومی ناوخۆیی. ناسراوە بە قۆزی و کەبابی بەتام.",
    lat: 36.2085, lng: 43.9920,
    ratingBreakdown: { 5: 200, 4: 100, 3: 30, 2: 7, 1: 5 },
    menu: [
      { name: "Kurdish Quzi", nameKu: "قۆزی کوردی", price: "18,000 IQD", desc: "خاوەن تامێکی تایبەت، گۆشتی مەڕ لەگەڵ برنج و شلە", img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&q=80" },
      { name: "Mixed Grill", nameKu: "گۆشتی برژاوی تێکەڵ", price: "22,000 IQD", desc: "تیکە و کەباب و باڵی مریشک لەسەر خەڵووز", img: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&q=80" },
      { name: "Yaprakh (Dolma)", nameKu: "یاپراخ (دۆڵمە)", price: "12,000 IQD", desc: "دۆڵمەی کوردی پڕکراو لە گۆشت و سەوزەوات", img: "https://images.unsplash.com/photo-1504541989496-2e07e6d09a1f?w=400&q=80" }
    ],
    reviews: []
  },
  {
    id: ++maxId,
    name: "Barista's Corner",
    nameKu: "کۆڕنەری باریستا",
    category: "Specialty Coffee",
    categorySlug: "coffee",
    neighborhood: "Dream City",
    address: "Dream City, Inside the complex, Erbil",
    phone: "+964 750 334 8899",
    price: "$$",
    priceNum: 2,
    rating: 4.8,
    reviewCount: 410,
    isOpen: true,
    isTrending: true,
    isFeatured: false,
    tags: ["Coffee", "Artisan", "Cozy"],
    hours: { Mon: "8:00 AM – 11:00 PM", Tue: "8:00 AM – 11:00 PM", Wed: "8:00 AM – 11:00 PM", Thu: "8:00 AM – 12:00 AM", Fri: "9:00 AM – 12:00 AM", Sat: "9:00 AM – 12:00 AM", Sun: "8:00 AM – 11:00 PM" },
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80",
    images: ["https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80", "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80"],
    description: "شوێنێکی ئارام و پڕ لە وزە بۆ خواردنەوەی باشترین قاوەی سپێشەڵتی. شوێنێکی گونجاوە بۆ خوێندنەوە و کارکردن.",
    lat: 36.1840, lng: 44.0435,
    ratingBreakdown: { 5: 350, 4: 50, 3: 5, 2: 3, 1: 2 },
    menu: [
      { name: "V60 Drip Coffee", nameKu: "قاوەی قەترەیی V60", price: "5,000 IQD", desc: "قاوەی دڵنیایی ڕوواندا بە تامی میوەیی", img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80" },
      { name: "Spanish Latte", nameKu: "سپانیش لاتێ", price: "6,500 IQD", desc: "ئێسپرێسۆ لەگەڵ شیری خەستکراو و سەهۆڵ", img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&q=80" },
      { name: "Pistachio Cake", nameKu: "کێکی فستق", price: "8,000 IQD", desc: "کێکی بەتامی فستق لەگەڵ سۆسی تایبەت", img: "https://images.unsplash.com/photo-1568471173242-461f0a730452?w=400&q=80" }
    ],
    reviews: []
  },
  {
    id: ++maxId,
    name: "Golden Steaks",
    nameKu: "ستێکی زێڕین",
    category: "Fine Dining",
    categorySlug: "finedining",
    neighborhood: "Empire World",
    address: "Empire World Towers, Erbil",
    phone: "+964 750 999 0000",
    price: "$$$$",
    priceNum: 4,
    rating: 4.9,
    reviewCount: 220,
    isOpen: true,
    isTrending: false,
    isFeatured: true,
    tags: ["Steakhouse", "Fine Dining", "Luxury"],
    hours: { Mon: "6:00 PM – 11:30 PM", Tue: "6:00 PM – 11:30 PM", Wed: "6:00 PM – 11:30 PM", Thu: "6:00 PM – 12:30 AM", Fri: "6:00 PM – 12:30 AM", Sat: "6:00 PM – 12:30 AM", Sun: "Closed" },
    image: "https://images.unsplash.com/photo-1558030006-450675393462?w=800&q=80",
    images: ["https://images.unsplash.com/photo-1558030006-450675393462?w=800&q=80", "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80"],
    description: "چێشتخانەیەکی لوکس بۆ ئاشقانی ستێک. بە باشترین جۆری گۆشتی واگیو و ئەنگس خزمەتتان دەکات.",
    lat: 36.2040, lng: 44.0060,
    ratingBreakdown: { 5: 190, 4: 20, 3: 5, 2: 2, 1: 3 },
    menu: [
      { name: "Tomahawk Steak", nameKu: "تۆماهاوک ستێک", price: "90,000 IQD", desc: "گۆشتی ئەنگسی بەناسک برژاو بۆ دوو کەس", img: "https://images.unsplash.com/photo-1558030006-450675393462?w=400&q=80" },
      { name: "Truffle Mash", nameKu: "پەتاتەی هارراو بە تڕاڤڵ", price: "12,000 IQD", desc: "پەتاتەی نەرم لەگەڵ کەرە و تڕاڤڵ", img: "https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?w=400&q=80" },
      { name: "Lobster Tail", nameKu: "کلکی لۆبستەر", price: "75,000 IQD", desc: "بە گەرمی پێشکەش دەکرێت لەگەڵ سۆسی لیمۆ", img: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&q=80" }
    ],
    reviews: []
  },
  {
    id: ++maxId,
    name: "Hawler Pizza & Pasta",
    nameKu: "پیتزا و پاستای هەولێر",
    category: "Fast Food",
    categorySlug: "fastfood",
    neighborhood: "Ankawa",
    address: "Ankawa Main Street, Erbil",
    phone: "+964 750 444 7788",
    price: "$",
    priceNum: 1,
    rating: 4.4,
    reviewCount: 520,
    isOpen: true,
    isTrending: true,
    isFeatured: false,
    tags: ["Pizza", "Pasta", "Quick Bites", "Italian"],
    hours: { Mon: "12:00 PM – 1:00 AM", Tue: "12:00 PM – 1:00 AM", Wed: "12:00 PM – 1:00 AM", Thu: "12:00 PM – 2:00 AM", Fri: "12:00 PM – 2:00 AM", Sat: "12:00 PM – 2:00 AM", Sun: "12:00 PM – 1:00 AM" },
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80",
    images: ["https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80", "https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?w=800&q=80"],
    description: "باشترین و خێراترین پیتزای ئیتاڵی لە هەولێر. ئامادەکراو بە شێوازی فڕنی دار.",
    lat: 36.2230, lng: 43.9910,
    ratingBreakdown: { 5: 350, 4: 120, 3: 30, 2: 10, 1: 10 },
    menu: [
      { name: "Margherita Pizza", nameKu: "پیتزا مارگرێتا", price: "9,000 IQD", desc: "پەنیر، تەماتە، جەرجیر و زەیتی زەیتوون", img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80" },
      { name: "Pepperoni Pizza", nameKu: "پیتزا پاپارۆنی", price: "12,000 IQD", desc: "گۆشتی پاپارۆنی حەڵاڵ لەگەڵ پەنیری مۆزارێلا", img: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&q=80" },
      { name: "Fettuccine Alfredo", nameKu: "فێتۆچینی ئەلفرێدۆ", price: "14,000 IQD", desc: "پاستا بە سۆسی سپی و سینگی مریشک", img: "https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?w=400&q=80" }
    ],
    reviews: []
  }
];

const allVenues = [...venues, ...newRestaurants];

content = content.replace(/export const VENUES = \[(?:.|\n)*?\];/, `export const VENUES = ${JSON.stringify(allVenues, null, 2)};`);

fs.writeFileSync('./js/data/venues.js', content, 'utf8');

// Also update locations.json in map-feature
const locations = allVenues.map(v => ({
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
  description: v.nameKu || v.description,
  tags: v.tags || [],
  coords: { lat: v.lat, lng: v.lng },
  imageURL: v.image || (v.images && v.images[0]) || "",
  menuURL: `#venue/${v.id}`
}));

try {
  fs.writeFileSync('./map-feature/locations.json', JSON.stringify(locations, null, 2));
} catch(e) {}
console.log("Successfully added 4 new heavily detailed restaurants");
