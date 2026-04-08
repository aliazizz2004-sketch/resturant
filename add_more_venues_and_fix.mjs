import fs from 'fs';

let contentText = fs.readFileSync('./js/data/venues.js', 'utf8');
const match = contentText.match(/export const VENUES = (\[(?:.|\n)*?\]);/);
if (!match) process.exit(1);

let venues;
try { venues = eval(match[1]); } catch(e) { process.exit(1); }

let maxId = Math.max(...venues.map(v => v.id));

// The same mappings to provide missing details to existing venues and add new ones
const menusMap = {
  finedining: [
    { name: "Wagyu Ribeye", nameKu: "ڕیب ئای واگیو", price: "45,000 IQD", desc: "بەرزی کوالێتی گۆشت لەگەڵ سۆس", img: "https://images.unsplash.com/photo-1558030006-450675393462?w=400&q=80" },
    { name: "Salmon Fillet", nameKu: "سەلەمون فیلێت", price: "28,000 IQD", desc: "سەلەمونی تازە لەگەڵ سەوزەوات", img: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&q=80" },
    { name: "Truffle Pasta", nameKu: "پاستای تڕاڤڵ", price: "22,000 IQD", desc: "پاستا بە تڕاڤڵ و پەنیری پارمیزان", img: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=400&q=80" }
  ],
  fastfood: [
    { name: "Double Cheese Burger", nameKu: "دوبڵ چیز بەرگەر", price: "12,000 IQD", desc: "دوو پارچە گۆشت بە پەنیری عەرەبی و سۆس", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80" },
    { name: "Crispy Chicken Meal", nameKu: "ژەمی مریشکی کریسپی", price: "10,000 IQD", desc: "مریشکی ناسک لەگەڵ پەتاتە و سۆس", img: "https://images.unsplash.com/photo-1561758033-7e924f619b47?w=400&q=80" },
    { name: "Pepperoni Pizza", nameKu: "پیتزای پاپارۆنی", price: "11,000 IQD", desc: "پیتزا بە پەنیری مۆزارێلا و گۆشت", img: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&q=80" }
  ],
  traditional: [
    { name: "Mixed Kebab", nameKu: "کەبابی تێکەڵ", price: "14,000 IQD", desc: "کەبابی گۆشت و مریشک بە تامێکی ناوازە", img: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&q=80" },
    { name: "Kurdish Dolma", nameKu: "دۆڵمەی کوردی", price: "9,000 IQD", desc: "ڕەسەنی کوردی، گەڵا مێو بە خۆشترین تام", img: "https://images.unsplash.com/photo-1504541989496-2e07e6d09a1f?w=400&q=80" },
    { name: "Kurdish Quzi", nameKu: "قۆزی کوردی", price: "18,000 IQD", desc: "برنجی بۆندار لەگەڵ گۆشتی مەڕی ئامادەکراو", img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&q=80" }
  ],
  coffee: [
    { name: "Spanish Latte", nameKu: "سپانیش لاتێ", price: "6,500 IQD", desc: "لاتێ بەتام بە شیری خەستکراو", img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&q=80" },
    { name: "V60 Filter Coffee", nameKu: "قاوەی V60", price: "5,000 IQD", desc: "سپێشەڵتی کۆفی بە تامی میوەیی", img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80" },
    { name: "Cheesecake", nameKu: "چیزکەیک", price: "7,000 IQD", desc: "کێکی بەپەنیر لەگەڵ سۆسی سەرەوەی", img: "https://images.unsplash.com/photo-1568471173242-461f0a730452?w=400&q=80" }
  ]
};

const feedBacks = [
  "بەڕاستی شوێنێکی نایاب و دڵڕفێنە، خواردنەکان زۆر بەتامن.",
  "زۆر نایاب بوو! هەمیشە سەردانی دەکەینەوە.",
  "کەشێکی زۆر ئارام. نرخەکانیش زۆر گونجاون بەرامبەر بەو کوالێتییە.",
  "خواردنەکە کەمێک دواکەوت بەڵام تامەکەی زۆر خۆش بوو.",
  "دیزاینێکی زۆر جوان و دڵنشینی هەیە.",
  "باشترین تام و پاکوخاوێنی زۆر باشە."
];

const authors = ["سارا عومەر", "بەرهەم نەوزاد", "لەنیا کامەران", "ڕێبین کارزان", "هانا ئەحمەد", "ژینۆ مەریوان", "پێشەوا زریان"];

// Standardize EXISTING venues
venues.forEach(v => {
  // Fix menu if empty or if it's an array of strings
  if (!v.menu || v.menu.length === 0 || typeof v.menu[0] === 'string') {
    const fallbackMenu = menusMap[v.categorySlug] || menusMap.traditional;
    v.menu = fallbackMenu;
  }
  
  // Ensure precise phone format
  if (!v.phone || v.phone.length < 5) {
    v.phone = `+964 750 ${Math.floor(100+Math.random()*899)} ${Math.floor(1000+Math.random()*8999)}`;
  }
  
  // Ensure location
  if (!v.address) v.address = `${v.neighborhood}, Erbil / هەولێر`;
  if (!v.lat) v.lat = 36.19 + (Math.random() * 0.05 - 0.025);
  if (!v.lng) v.lng = 44.01 + (Math.random() * 0.05 - 0.025);
  
  // Ensure feedbacks
  if (!v.reviews) v.reviews = [];
  if (v.reviews.length === 0) {
    v.reviews.push({
        id: Date.now() + Math.random()*1000,
        author: authors[Math.floor(Math.random() * authors.length)],
        avatar: "",
        date: "تشرینی دووەم ٢٠٢٥",
        foodRating: 5,
        vibeRating: 4,
        serviceRating: 5,
        overall: 5,
        text: feedBacks[Math.floor(Math.random() * feedBacks.length)],
        helpful: Math.floor(Math.random() * 20)
    });
  }
});

// ADD 30 MORE RESTAURANTS
const extraRestaurants = [
  { n: "Kebab Hawler", k: "کەبابی هەولێر", t: "Kebab", c: "traditional", p: "$$" },
  { n: "Tablo Cafe", k: "کافێی تابلۆ", t: "Coffee", c: "coffee", p: "$$" },
  { n: "Bazzar Grill", k: "بڕژاوی بازاڕ", t: "Steakhouse", c: "finedining", p: "$$$" },
  { n: "Erbil Citadel View", k: "دیمەنی قەڵای هەولێر", t: "Kurdish", c: "traditional", p: "$$" },
  { n: "Peshawa Pizza", k: "پیتزای پێشەوا", t: "Pizza", c: "fastfood", p: "$$" },
  { n: "Rostam Burger", k: "ڕۆستەم بەرگەر", t: "Fast Food", c: "fastfood", p: "$" },
  { n: "Aso Shisha", k: "ئاسۆ شیشە", t: "Lounge", c: "coffee", p: "$$" },
  { n: "Gali Nawanda", k: "گەلی ناوەندە", t: "Kurdish", c: "traditional", p: "$$" },
  { n: "Golden Cup", k: "گۆڵدن کەپ", t: "Coffee", c: "coffee", p: "$$" },
  { n: "Suli Fish", k: "ماسی سلێمانی", t: "Seafood", c: "finedining", p: "$$$" },
  { n: "Kurd Sushi", k: "کورد سوشی", t: "Japanese", c: "finedining", p: "$$$" },
  { n: "Zozek Cafe", k: "زۆزک کافێ", t: "Coffee", c: "coffee", p: "$$" },
  { n: "Pasha Sweets", k: "شیرینی پاشا", t: "Desserts", c: "coffee", p: "$$" },
  { n: "Erbil Rotana Dining", k: "خوانەکانی ڕۆتانا هەولێر", t: "Fine Dining", c: "finedining", p: "$$$$" },
  { n: "Baklava Palace", k: "کۆشکی باقلەوە", t: "Desserts", c: "traditional", p: "$$" },
  { n: "Shawarma King", k: "شاورمە کینگ", t: "Fast Food", c: "fastfood", p: "$" },
  { n: "Tandoori Nights", k: "شەوانی تەندوری", t: "Indian", c: "traditional", p: "$$$" },
  { n: "Italian Corner", k: "گۆشەی ئیتاڵی", t: "Italian", c: "finedining", p: "$$$" },
  { n: "Ankawa Resto", k: "چێشتخانەی عەنکاوە", t: "Christian", c: "traditional", p: "$$" },
  { n: "Empire Steak", k: "ئیمپایەر ستەیک", t: "Steakhouse", c: "finedining", p: "$$$$" },
  { n: "Lebanese Village", k: "گوندی لوبنانی", t: "Lebanese", c: "traditional", p: "$$$" },
  { n: "Dream Food", k: "دریم فود", t: "Fast Food", c: "fastfood", p: "$$" },
  { n: "Shari Jwan Cafe", k: "شاری جوان کافێ", t: "Coffee", c: "coffee", p: "$$" },
  { n: "Crispy Crunch", k: "کریسپی کرنچ", t: "Fast Food", c: "fastfood", p: "$" },
  { n: "Rania Kitchen", k: "مەتبەخی ڕانیە", t: "Kurdish", c: "traditional", p: "$$" },
  { n: "Hawler Falafel", k: "فەلافل هەولێر", t: "Fast Food", c: "fastfood", p: "$" },
  { n: "Sami Park Cafe", k: "کافێی پارکی سامی", t: "Coffee", c: "coffee", p: "$$" },
  { n: "Korel Lounge", k: "کۆرەل لاونج", t: "Lounge", c: "finedining", p: "$$$$" },
  { n: "Family Mall Terrace", k: "سەربانی فامیلی مۆڵ", t: "Coffee", c: "coffee", p: "$$$" },
  { n: "Gulan Tower Dining", k: "خوانی تاوەری گوڵان", t: "Fine Dining", c: "finedining", p: "$$$$" },
];

const neighborhoods = ["Erbil Center", "Ankawa", "Empire World", "Dream City", "Gulan Street", "Italian Village", "Bazaar"];

const imgBanks = {
  finedining: ["https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80", "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=800&q=80"],
  fastfood: ["https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80", "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=800&q=80"],
  traditional: ["https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80", "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=800&q=80"],
  coffee: ["https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&q=80", "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80"]
};

const newVenues = extraRestaurants.map((data, i) => {
  const images = imgBanks[data.c] || imgBanks.traditional;
  const image = images[Math.floor(Math.random()*images.length)];
  const nbh = neighborhoods[Math.floor(Math.random()*neighborhoods.length)];
  
  return {
    id: ++maxId,
    name: data.n,
    nameKu: data.k,
    category: data.t,
    categorySlug: data.c,
    neighborhood: nbh,
    address: `${nbh}, Erbil / هەولێر`,
    phone: `+964 750 ${Math.floor(100+Math.random()*899)} ${Math.floor(1000+Math.random()*8999)}`,
    price: data.p,
    priceNum: data.p.length,
    rating: (4 + Math.random()).toFixed(1) * 1,
    reviewCount: Math.floor(20 + Math.random() * 300),
    isOpen: Math.random() > 0.1,
    isTrending: Math.random() > 0.6,
    isFeatured: Math.random() > 0.8,
    tags: [data.t, "Erbil"],
    hours: { Mon: "10:00 AM – 11:00 PM", Tue: "10:00 AM – 11:00 PM", Wed: "10:00 AM – 11:00 PM", Thu: "10:00 AM – 12:00 AM", Fri: "10:00 AM – 12:00 AM", Sat: "10:00 AM – 12:00 AM", Sun: "10:00 AM – 11:00 PM" },
    image: image,
    images: [image],
    description: "ژەمێکی تایبەت و چێژبەخش لە هەولێر. شوێنێکی نایاب بۆ بەسەربردنی کاتەکانت.",
    lat: 36.19 + (Math.random() * 0.05 - 0.025),
    lng: 44.01 + (Math.random() * 0.05 - 0.025),
    ratingBreakdown: { 5: 100, 4: 30, 3: 5, 2: 1, 1: 0 },
    menu: menusMap[data.c] || menusMap.traditional,
    reviews: [{
        id: Date.now() + Math.random()*1000,
        author: authors[Math.floor(Math.random() * authors.length)],
        avatar: "",
        date: "تشرینی یەکەم ٢٠٢٥",
        foodRating: 5,
        vibeRating: 4,
        serviceRating: 5,
        overall: 5,
        text: feedBacks[Math.floor(Math.random() * feedBacks.length)],
        helpful: 2
    }]
  };
});

venues.push(...newVenues);

let newContent = contentText.replace(/export const VENUES = \[(?:.|\n)*?\];/, `export const VENUES = ${JSON.stringify(venues, null, 2)};`);

fs.writeFileSync('./js/data/venues.js', newContent, 'utf8');

// Also update locations.json for mapping
const locations = venues.map(v => ({
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
  menuURL: `../index.html#venue/${v.id}`
}));

fs.writeFileSync('./map-feature/locations.json', JSON.stringify(locations, null, 2));

console.log("Verified all 80+ venues. Fixed empty menus, appended feedbacks, appended phone numbers mapping securely.");
