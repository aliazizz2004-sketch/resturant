// ============================================
//  ERBILEATS — Venue Data (12 restaurants)
//  Uses Unsplash URLs for real web images
// ============================================

export const VENUES = [
  {
    id: 1,
    name: "Abu Shahab Kebab House",
    nameKu: "خانەی کەبابی ئەبو شەهاب",
    category: "Traditional Kurdish",
    categorySlug: "traditional",
    neighborhood: "Citadel",
    address: "Near the Grand Bazaar, Citadel District, Erbil",
    phone: "+964 750 123 4567",
    website: "",
    price: "$$",
    priceNum: 2,
    rating: 4.8,
    reviewCount: 312,
    isOpen: true,
    isTrending: true,
    isFeatured: true,
    tags: ["Kebab", "Grilled", "Family Friendly"],
    hours: {
      Mon: "10:00 AM – 11:00 PM",
      Tue: "10:00 AM – 11:00 PM",
      Wed: "10:00 AM – 11:00 PM",
      Thu: "10:00 AM – 11:00 PM",
      Fri: "10:00 AM – 12:00 AM",
      Sat: "10:00 AM – 12:00 AM",
      Sun: "11:00 AM – 11:00 PM"
    },
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80",
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80",
      "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=800&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
    ],
    description: "One of Erbil's most beloved kebab houses, Abu Shahab has been grilling the finest tikka and kebab since 1978. Located steps from the ancient Citadel, the smoky aroma of their charcoal grill draws locals and visitors alike. Their secret marinade recipe has been passed down through three generations.",
    lat: 36.1920, lng: 44.0090,
    ratingBreakdown: { 5: 195, 4: 78, 3: 25, 2: 10, 1: 4 },
    menu: [
      { name: "Mixed Kebab Platter", nameKu: "تەختەی کەبابی تێکەڵ", price: "8,000 IQD", desc: "Lamb & chicken kebabs with rice and salad", img: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&q=80" },
      { name: "Tikka Kurdistani", nameKu: "تیکای کوردستانی", price: "7,500 IQD", desc: "Marinated lamb cubes on charcoal fire", img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80" },
      { name: "Dolma Plate", nameKu: "دۆڵمەی تەختە", price: "5,000 IQD", desc: "Stuffed grape leaves & vegetables in tomato broth", img: "https://images.unsplash.com/photo-1504541989496-2e07e6d09a1f?w=400&q=80" },
      { name: "Kurdish Bread & Dips", nameKu: "نان و میوانەی کوردی", price: "2,500 IQD", desc: "Freshly baked tanoor bread with hummus & mast", img: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=400&q=80" }
    ],
    reviews: [
      { id: 1, author: "Sara K.", avatar: "S", date: "March 2024", foodRating: 5, vibeRating: 5, serviceRating: 4, overall: 5, text: "Absolutely the best kebab in Erbil! The meat is so tender and the bread is freshly baked. A must-visit every time I'm in the Citadel area.", helpful: 24 },
      { id: 2, author: "Mohammed A.", avatar: "M", date: "February 2024", foodRating: 5, vibeRating: 4, serviceRating: 5, overall: 5, text: "Authentic taste, generous portions, and the atmosphere near the Citadel is amazing. Been coming here for 10 years and it never disappoints.", helpful: 19 },
      { id: 3, author: "Layla R.", avatar: "L", date: "January 2024", foodRating: 4, vibeRating: 5, serviceRating: 4, overall: 4, text: "Great food and amazing location. The mixed grill platter is huge — easily shared between two people. Prices are very fair.", helpful: 11 }
    ]
  },

  {
    id: 2,
    name: "The Rooftop at Rotana",
    nameKu: "باندەی سەر بانی ڕۆتانا",
    category: "Fine Dining",
    categorySlug: "finedining",
    neighborhood: "Empire World",
    address: "Rotana Hotel, Empire World, Erbil",
    phone: "+964 750 234 5678",
    price: "$$$$",
    priceNum: 4,
    rating: 4.6,
    reviewCount: 187,
    isOpen: true,
    isTrending: true,
    isFeatured: false,
    tags: ["Rooftop", "City View", "Cocktails", "Fine Dining"],
    hours: { Mon: "6:00 PM – 1:00 AM", Tue: "6:00 PM – 1:00 AM", Wed: "6:00 PM – 1:00 AM", Thu: "6:00 PM – 2:00 AM", Fri: "6:00 PM – 2:00 AM", Sat: "6:00 PM – 2:00 AM", Sun: "Closed" },
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80",
      "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=800&q=80"
    ],
    description: "Perched atop the Rotana Hotel with sweeping panoramic views of Erbil's skyline, The Rooftop delivers an unforgettable fine dining experience. Executive Chef Karim crafts inspired menus blending international techniques with the finest local ingredients. The perfect setting for special occasions.",
    lat: 36.2026, lng: 44.0093,
    ratingBreakdown: { 5: 112, 4: 48, 3: 18, 2: 7, 1: 2 },
    menu: [
      { name: "Wagyu Tenderloin", nameKu: "پتکەی واگیو", price: "65,000 IQD", desc: "200g wagyu beef, truffle butter, asparagus", img: "https://images.unsplash.com/photo-1558030006-450675393462?w=400&q=80" },
      { name: "Grilled Seabass", nameKu: "ماسیی دەریا", price: "42,000 IQD", desc: "Mediterranean herbs, lemon butter, capers risotto", img: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&q=80" },
      { name: "Mezze Sharing Board", nameKu: "تەختەی مەزەی هاوبەش", price: "28,000 IQD", desc: "Assorted cold & hot mezze for two", img: "https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?w=400&q=80" },
      { name: "Citadel Sunset Cocktail", nameKu: "کۆکتێڵی ئۆڕمان قەڵا", price: "18,000 IQD", desc: "Non-alcoholic pomegranate, saffron & rose mocktail", img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400&q=80" }
    ],
    reviews: [
      { id: 1, author: "Dilan M.", avatar: "D", date: "March 2024", foodRating: 5, vibeRating: 5, serviceRating: 5, overall: 5, text: "Best dining experience in Kurdistan. The view of the Citadel at night is magical. Service is impeccable and the food quality rivals top restaurants in Dubai.", helpful: 31 },
      { id: 2, author: "Ahmed S.", avatar: "A", date: "February 2024", foodRating: 4, vibeRating: 5, serviceRating: 5, overall: 5, text: "Celebrated our anniversary here — the staff made it truly special. Wagyu was cooked perfectly. A bit pricey but absolutely worth every dinar for the experience.", helpful: 25 }
    ]
  },

  {
    id: 3,
    name: "Caffè Florian Erbil",
    nameKu: "کافی فلۆریان ئەربیل",
    category: "Specialty Coffee",
    categorySlug: "coffee",
    neighborhood: "Ankawa",
    address: "Italian Street, Ankawa, Erbil",
    phone: "+964 750 345 6789",
    price: "$$",
    priceNum: 2,
    rating: 4.7,
    reviewCount: 254,
    isOpen: true,
    isTrending: true,
    isFeatured: true,
    tags: ["Coffee", "Brunch", "Cozy", "WiFi"],
    hours: { Mon: "7:00 AM – 11:00 PM", Tue: "7:00 AM – 11:00 PM", Wed: "7:00 AM – 11:00 PM", Thu: "7:00 AM – 12:00 AM", Fri: "8:00 AM – 12:00 AM", Sat: "8:00 AM – 12:00 AM", Sun: "9:00 AM – 11:00 PM" },
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80",
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&q=80",
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80",
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80"
    ],
    description: "Ankawa's most beloved specialty coffee destination. Caffè Florian sources single-origin beans from Ethiopia and Colombia, roasted in-house weekly. With a warm, European-inspired interior and a menu of exquisite pastries, it's where Erbil's creatives and professionals gather for their morning ritual.",
    lat: 36.2248, lng: 43.9966,
    ratingBreakdown: { 5: 160, 4: 65, 3: 20, 2: 6, 1: 3 },
    menu: [
      { name: "Signature Pour Over", nameKu: "قاوەی پۆر ئۆڤەری تایبەت", price: "4,500 IQD", desc: "Ethiopian Yirgacheffe, floral & citrus notes", img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80" },
      { name: "Saffron Latte", nameKu: "لاتێی زەعفەران", price: "6,000 IQD", desc: "Espresso, steamed milk, Persian saffron & honey", img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&q=80" },
      { name: "Avocado Toast Deluxe", nameKu: "ئاڤۆکادۆ تۆست", price: "9,000 IQD", desc: "Sourdough, smashed avo, poached eggs, sumac", img: "https://images.unsplash.com/photo-1541519227354-08fa5d50c820?w=400&q=80" },
      { name: "Kurdish Chai Istikan", nameKu: "چای کوردی ئیستیکان", price: "2,000 IQD", desc: "Traditional black tea in crystal glass with cardamom", img: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&q=80" }
    ],
    reviews: [
      { id: 1, author: "Hana J.", avatar: "H", date: "March 2024", foodRating: 5, vibeRating: 5, serviceRating: 5, overall: 5, text: "The best coffee in Erbil, period. The saffron latte is absolutely divine — a taste of Kurdistan in every sip. The atmosphere is warm and welcoming.", helpful: 42 },
      { id: 2, author: "Baran T.", avatar: "B", date: "February 2024", foodRating: 5, vibeRating: 4, serviceRating: 4, overall: 4, text: "I come here every morning before work. Outstanding quality and baristas who actually know their craft. The pastries are always fresh.", helpful: 28 }
    ]
  },

  {
    id: 4,
    name: "Machko Chai Khana",
    nameKu: "چێخانەی ماچکۆ",
    category: "Traditional Kurdish",
    categorySlug: "traditional",
    neighborhood: "Citadel",
    address: "Mudhafaria Minaret Road, Citadel, Erbil",
    phone: "+964 750 456 7890",
    price: "$",
    priceNum: 1,
    rating: 4.9,
    reviewCount: 521,
    isOpen: true,
    isTrending: false,
    isFeatured: true,
    tags: ["Tea House", "Historic", "Backgammon", "Authentic"],
    hours: { Mon: "6:00 AM – 12:00 AM", Tue: "6:00 AM – 12:00 AM", Wed: "6:00 AM – 12:00 AM", Thu: "6:00 AM – 1:00 AM", Fri: "6:00 AM – 1:00 AM", Sat: "6:00 AM – 1:00 AM", Sun: "6:00 AM – 12:00 AM" },
    image: "https://images.unsplash.com/photo-1530695440407-21fef47230b1?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1530695440407-21fef47230b1?w=800&q=80",
      "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800&q=80",
      "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=800&q=80",
      "https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=800&q=80"
    ],
    description: "Erbil's most iconic tea house, Machko Chai Khana has stood within the walls of the Citadel for over 80 years. Old men play backgammon under the dappled shade of mulberry trees while the aroma of cardamom-spiced tea fills the air. This is authentic Kurdistan — living history in every cup.",
    lat: 36.1910, lng: 44.0112,
    ratingBreakdown: { 5: 380, 4: 98, 3: 30, 2: 8, 1: 5 },
    menu: [
      { name: "Kurdish Black Tea", nameKu: "چای ڕەشی کوردی", price: "500 IQD", desc: "Strong black tea with cardamom in istikan glass", img: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&q=80" },
      { name: "Kahwa (Spiced Coffee)", nameKu: "قاوەی عارەبی", price: "1,000 IQD", desc: "Traditional Arabic coffee with cardamom & rosewater", img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80" },
      { name: "Clip Sweets Plate", nameKu: "خوانی شیرینی", price: "2,000 IQD", desc: "Baklava, zlabia & lokum assortment", img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&q=80" }
    ],
    reviews: [
      { id: 1, author: "Karim F.", avatar: "K", date: "March 2024", foodRating: 5, vibeRating: 5, serviceRating: 5, overall: 5, text: "This place is a time capsule. Sitting here drinking chai while looking at the Citadel walls is a spiritual experience. Nothing has changed in 50 years and that is exactly the point.", helpful: 67 },
      { id: 2, author: "Nadia O.", avatar: "N", date: "February 2024", foodRating: 5, vibeRating: 5, serviceRating: 4, overall: 5, text: "A must-visit for anyone coming to Erbil. Proper Kurdish tea made the right way, at the right price. The old men playing towla (backgammon) add so much character.", helpful: 53 }
    ]
  },

  {
    id: 5,
    name: "Shisha Palace — Dream City",
    nameKu: "قەسری شیشە — دریم سیتی",
    category: "Shisha Lounge",
    categorySlug: "shisha",
    neighborhood: "Dream City",
    address: "Dream City Mall, Upper Level, Erbil",
    phone: "+964 750 567 8901",
    price: "$$$",
    priceNum: 3,
    rating: 4.4,
    reviewCount: 198,
    isOpen: true,
    isTrending: false,
    isFeatured: false,
    tags: ["Shisha", "Lounge", "Night Out", "Groups"],
    hours: { Mon: "4:00 PM – 2:00 AM", Tue: "4:00 PM – 2:00 AM", Wed: "4:00 PM – 2:00 AM", Thu: "4:00 PM – 3:00 AM", Fri: "2:00 PM – 3:00 AM", Sat: "2:00 PM – 3:00 AM", Sun: "4:00 PM – 2:00 AM" },
    image: "https://images.unsplash.com/photo-1524099163253-32b7f0256868?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1524099163253-32b7f0256868?w=800&q=80",
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80",
      "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=800&q=80"
    ],
    description: "Dream City's premier shisha destination with over 40 premium flavors sourced from Egypt, Turkey, and Jordan. Lavish Middle Eastern décor with arched corridors, ornate lanterns, and plush seating. The perfect place for a long evening with friends in the heart of Dream City.",
    lat: 36.1850, lng: 44.0420,
    ratingBreakdown: { 5: 95, 4: 62, 3: 28, 2: 9, 1: 4 },
    menu: [
      { name: "Premium Shisha", nameKu: "شیشەی پریمیەم", price: "15,000 IQD", desc: "Choice of 40+ flavors, Al Fakher & Adalya", img: "https://images.unsplash.com/photo-1524099163253-32b7f0256868?w=400&q=80" },
      { name: "Cold Mango Cocktail", nameKu: "کۆکتێڵی مانگۆی سارد", price: "7,000 IQD", desc: "Fresh mango, passion fruit, mint — non-alcoholic", img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400&q=80" },
      { name: "Kunafa", nameKu: "کنافە", price: "5,000 IQD", desc: "Warm cheese kunafa with sugar syrup & pistachios", img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&q=80" }
    ],
    reviews: [
      { id: 1, author: "Renas M.", avatar: "R", date: "March 2024", foodRating: 4, vibeRating: 5, serviceRating: 4, overall: 4, text: "Best shisha spot in Erbil. The vibe is immaculate — great music, great atmosphere, and the al-fakher quality is consistent. Bring a group of friends.", helpful: 18 }
    ]
  },

  {
    id: 6,
    name: "Burger Hub Bakhtiari",
    nameKu: "بەرگەر هەب بەختیاری",
    category: "Fast Food",
    categorySlug: "fastfood",
    neighborhood: "Bakhtiari",
    address: "Bakhtiari District, Main Street, Erbil",
    phone: "+964 750 678 9012",
    price: "$$",
    priceNum: 2,
    rating: 4.3,
    reviewCount: 143,
    isOpen: true,
    isTrending: true,
    isFeatured: false,
    tags: ["Burgers", "Fast Food", "Delivery", "Halal"],
    hours: { Mon: "11:00 AM – 1:00 AM", Tue: "11:00 AM – 1:00 AM", Wed: "11:00 AM – 1:00 AM", Thu: "11:00 AM – 2:00 AM", Fri: "11:00 AM – 2:00 AM", Sat: "11:00 AM – 2:00 AM", Sun: "12:00 PM – 1:00 AM" },
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80",
      "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=800&q=80",
      "https://images.unsplash.com/photo-1561758033-7e924f619b47?w=800&q=80"
    ],
    description: "Bakhtiari's go-to spot for premium smash burgers made with 100% halal local beef. Every burger is made to order, with homemade sauces, brioche buns, and fresh produce. Burger Hub has quietly become one of the best burger joints in Erbil with a loyal following.",
    lat: 36.1980, lng: 44.0230,
    ratingBreakdown: { 5: 72, 4: 42, 3: 18, 2: 8, 1: 3 },
    menu: [
      { name: "Double Smash Burger", nameKu: "دۆبڵ سماش بەرگەر", price: "10,000 IQD", desc: "2x beef patties, cheese, pickles, special sauce", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80" },
      { name: "Crispy Chicken Burger", nameKu: "بەرگەری مریشکی کریسپی", price: "9,000 IQD", desc: "Buttermilk fried chicken, slaw, honey mustard", img: "https://images.unsplash.com/photo-1561758033-7e924f619b47?w=400&q=80" },
      { name: "Loaded Fries", nameKu: "فرایزی تێریاو", price: "5,000 IQD", desc: "Crinkle fries, cheese sauce, jalapeños, bacon bits", img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&q=80" }
    ],
    reviews: [
      { id: 1, author: "Sherzad K.", avatar: "S", date: "March 2024", foodRating: 5, vibeRating: 4, serviceRating: 4, overall: 4, text: "The double smash burger is ridiculously good. Crispy edges, juicy center, and the sauce is addictive. Fast service too — order was ready in 8 minutes.", helpful: 22 }
    ]
  },

  {
    id: 7,
    name: "Iskan Garden Restaurant",
    nameKu: "چێشتخانەی باخچەی ئیسکان",
    category: "Traditional Kurdish",
    categorySlug: "traditional",
    neighborhood: "Iskan",
    address: "Iskan District, Garden Road, Erbil",
    phone: "+964 750 789 0123",
    price: "$$$",
    priceNum: 3,
    rating: 4.5,
    reviewCount: 231,
    isOpen: false,
    isTrending: false,
    isFeatured: true,
    tags: ["Garden Seating", "Family", "Kurdish Cuisine", "Events"],
    hours: { Mon: "Closed", Tue: "11:00 AM – 11:00 PM", Wed: "11:00 AM – 11:00 PM", Thu: "11:00 AM – 12:00 AM", Fri: "11:00 AM – 12:00 AM", Sat: "10:00 AM – 12:00 AM", Sun: "10:00 AM – 11:00 PM" },
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=800&q=80",
      "https://images.unsplash.com/photo-1504713046561-6cffe29d5e96?w=800&q=80",
      "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&q=80"
    ],
    description: "A sprawling garden restaurant in the heart of Iskan that transforms into a magical open-air dining experience in the evenings. Specializing in traditional Kurdish banquet dining, Iskan Garden is the top choice for family celebrations, weddings receptions, and group dinners.",
    lat: 36.2080, lng: 44.0180,
    ratingBreakdown: { 5: 130, 4: 65, 3: 25, 2: 7, 1: 4 },
    menu: [
      { name: "Kofteh Berenji", nameKu: "کۆفتەی بریژ", price: "12,000 IQD", desc: "Kurdish meatballs stuffed with rice & dried fruit", img: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&q=80" },
      { name: "Bamya Stew", nameKu: "یەخنی بامیە", price: "10,000 IQD", desc: "Slow-cooked okra with lamb in tomato sauce", img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&q=80" },
      { name: "Kurdish Biryani", nameKu: "بریانی کوردی", price: "15,000 IQD", desc: "Saffron rice with lamb, golden raisins & almonds", img: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400&q=80" },
      { name: "Fattoush Kurdish Style", nameKu: "فتووش بە شێوازی کوردی", price: "6,000 IQD", desc: "Fresh salad with pomegranate molasses & crispy bread", img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=80" }
    ],
    reviews: [
      { id: 1, author: "Zhiar A.", avatar: "Z", date: "February 2024", foodRating: 5, vibeRating: 5, serviceRating: 4, overall: 5, text: "Held my sister's engagement party here. The staff went above and beyond, the food was incredible, and the garden setting was a dream. Everyone was talking about the biryani.", helpful: 35 }
    ]
  },

  {
    id: 8,
    name: "Ankawa Coffee Roasters",
    nameKu: "قاوەی ئەنکاوا ڕۆسترز",
    category: "Specialty Coffee",
    categorySlug: "coffee",
    neighborhood: "Ankawa",
    address: "Christian Quarter, Ankawa, Erbil",
    phone: "+964 750 890 1234",
    price: "$$",
    priceNum: 2,
    rating: 4.6,
    reviewCount: 178,
    isOpen: true,
    isTrending: true,
    isFeatured: false,
    tags: ["Specialty Coffee", "Artisan", "Brunch", "Quiet"],
    hours: { Mon: "7:30 AM – 10:00 PM", Tue: "7:30 AM – 10:00 PM", Wed: "7:30 AM – 10:00 PM", Thu: "7:30 AM – 11:00 PM", Fri: "8:00 AM – 11:00 PM", Sat: "8:00 AM – 11:00 PM", Sun: "9:00 AM – 10:00 PM" },
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&q=80",
      "https://images.unsplash.com/photo-1459755486867-b55449bb39ff?w=800&q=80",
      "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800&q=80"
    ],
    description: "A beloved fixture in Ankawa's vibrant café scene, Ankawa Coffee Roasters has pioneered the specialty coffee movement in Erbil. Their on-site roastery produces micro-batches of exceptional single-origin coffees. The minimalist industrial interior and knowledgeable baristas make it a haven for true coffee lovers.",
    lat: 36.2260, lng: 43.9978,
    ratingBreakdown: { 5: 105, 4: 48, 3: 16, 2: 6, 1: 3 },
    menu: [
      { name: "AeroPress Specialty", nameKu: "ئەیرۆپرێسی تایبەت", price: "5,500 IQD", desc: "Colombia Huila washed, chocolate & berry notes", img: "https://images.unsplash.com/photo-1459755486867-b55449bb39ff?w=400&q=80" },
      { name: "Rose Cardamom Latte", nameKu: "لاتێی گوڵ و هیل", price: "6,500 IQD", desc: "Espresso, rosewater, cardamom, oat milk", img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&q=80" },
      { name: "Freshly Baked Croissant", nameKu: "کرواسان تازەپێژراو", price: "4,000 IQD", desc: "Butter croissant plain or with zaatar & cheese", img: "https://images.unsplash.com/photo-1568471173242-461f0a730452?w=400&q=80" }
    ],
    reviews: [
      { id: 1, author: "Pakhshan R.", avatar: "P", date: "March 2024", foodRating: 5, vibeRating: 4, serviceRating: 5, overall: 5, text: "Finally a proper specialty coffee shop in Erbil! The baristas actually know what they're doing. Ethiopia Yirgacheffe pour-over was absolutely stellar.", helpful: 30 }
    ]
  },

  {
    id: 9,
    name: "Empire Food Court",
    nameKu: "فوود کۆرتی ئیمپایەر",
    category: "Fast Food",
    categorySlug: "fastfood",
    neighborhood: "Empire World",
    address: "Empire World Mall, Ground Floor, Erbil",
    phone: "+964 750 901 2345",
    price: "$",
    priceNum: 1,
    rating: 4.1,
    reviewCount: 89,
    isOpen: true,
    isTrending: false,
    isFeatured: false,
    tags: ["Food Court", "Quick Bites", "Mall", "Family"],
    hours: { Mon: "10:00 AM – 11:00 PM", Tue: "10:00 AM – 11:00 PM", Wed: "10:00 AM – 11:00 PM", Thu: "10:00 AM – 12:00 AM", Fri: "10:00 AM – 12:00 AM", Sat: "10:00 AM – 12:00 AM", Sun: "11:00 AM – 11:00 PM" },
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&q=80",
    images: ["https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&q=80"],
    description: "Empire World's vibrant food court bringing together the best quick-service concepts under one roof. From crispy shawarma to gourmet wraps and fresh salads.",
    lat: 36.2020, lng: 44.0085,
    ratingBreakdown: { 5: 38, 4: 28, 3: 16, 2: 5, 1: 2 },
    menu: [
      { name: "Chicken Shawarma", nameKu: "شاورمای مریشک", price: "4,000 IQD", desc: "Marinated chicken, toum, pickles in fresh bread", img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&q=80" }
    ],
    reviews: [
      { id: 1, author: "Karwan S.", avatar: "K", date: "January 2024", foodRating: 4, vibeRating: 4, serviceRating: 4, overall: 4, text: "Great for a quick meal while shopping. Shawarma is consistently good and the price is fair. Can get busy on weekends but moves fast.", helpful: 12 }
    ]
  },

  {
    id: 10,
    name: "Al Diwan Fine Restaurant",
    nameKu: "چێشتخانەی ئەل دیوان",
    category: "Fine Dining",
    categorySlug: "finedining",
    neighborhood: "Bakhtiari",
    address: "Bakhtiari Tower, Erbil",
    phone: "+964 750 012 3456",
    price: "$$$$",
    priceNum: 4,
    rating: 4.5,
    reviewCount: 152,
    isOpen: true,
    isTrending: false,
    isFeatured: false,
    tags: ["Lebanese", "Fine Dining", "Mezze", "Events"],
    hours: { Mon: "1:00 PM – 12:00 AM", Tue: "1:00 PM – 12:00 AM", Wed: "1:00 PM – 12:00 AM", Thu: "1:00 PM – 1:00 AM", Fri: "1:00 PM – 1:00 AM", Sat: "1:00 PM – 1:00 AM", Sun: "2:00 PM – 12:00 AM" },
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    images: ["https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80", "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80"],
    description: "Lebanese-inspired fine dining elevated to its highest form. Al Diwan's opulent interior and masterful mezze spreads have made it the venue of choice for Erbil's discerning food lovers.",
    lat: 36.1970, lng: 44.0215,
    ratingBreakdown: { 5: 82, 4: 45, 3: 16, 2: 6, 1: 3 },
    menu: [
      { name: "Grand Mezze Spread", nameKu: "مەزەی گەورە", price: "35,000 IQD", desc: "20+ cold & hot mezze items for the table", img: "https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?w=400&q=80" },
      { name: "Mixed Grill Royal", nameKu: "گریلی شاهانە", price: "55,000 IQD", desc: "Premium lamb chops, kofta, chicken & shrimp", img: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&q=80" }
    ],
    reviews: [
      { id: 1, author: "Lana H.", avatar: "L", date: "February 2024", foodRating: 5, vibeRating: 5, serviceRating: 5, overall: 5, text: "The ultimate dining experience in Erbil. The mezze spread alone is worth the visit — 20 different dishes, all outstanding. Service is world-class.", helpful: 28 }
    ]
  },

  {
    id: 11,
    name: "Citadel View Lounge",
    nameKu: "لاونجی دیمەنی قەڵا",
    category: "Shisha Lounge",
    categorySlug: "shisha",
    neighborhood: "Citadel",
    address: "Historic Quarter, Citadel Gate, Erbil",
    phone: "+964 750 123 6789",
    price: "$$$",
    priceNum: 3,
    rating: 4.7,
    reviewCount: 265,
    isOpen: true,
    isTrending: true,
    isFeatured: true,
    tags: ["Rooftop", "Citadel View", "Shisha", "Scenic"],
    hours: { Mon: "5:00 PM – 1:00 AM", Tue: "5:00 PM – 1:00 AM", Wed: "5:00 PM – 1:00 AM", Thu: "5:00 PM – 2:00 AM", Fri: "3:00 PM – 2:00 AM", Sat: "3:00 PM – 2:00 AM", Sun: "5:00 PM – 1:00 AM" },
    image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=800&q=80",
    images: ["https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=800&q=80", "https://images.unsplash.com/photo-1524099163253-32b7f0256868?w=800&q=80"],
    description: "Perched directly opposite the ancient Erbil Citadel, this stunning open-air lounge offers the most dramatic views in the city. Warm lantern lighting, premium shisha, and exceptional service with the 6,000-year-old Citadel as your backdrop.",
    lat: 36.1915, lng: 44.0125,
    ratingBreakdown: { 5: 170, 4: 65, 3: 20, 2: 7, 1: 3 },
    menu: [
      { name: "Citadel Shisha Set", nameKu: "شیشەی قەڵا", price: "18,000 IQD", desc: "Premium shisha + 2 cold drinks + fruit plate", img: "https://images.unsplash.com/photo-1524099163253-32b7f0256868?w=400&q=80" },
      { name: "Fresh Lemonade", nameKu: "لیمۆو تازە", price: "4,500 IQD", desc: "Pressed lemon, mint, sugar, sparkling water", img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400&q=80" }
    ],
    reviews: [
      { id: 1, author: "Ranj P.", avatar: "R", date: "March 2024", foodRating: 4, vibeRating: 5, serviceRating: 5, overall: 5, text: "The view is absolutely unreal. Sitting here at night watching the Citadel lit up while enjoying shisha — there's nothing like it in Erbil. A perfect evening every time.", helpful: 48 }
    ]
  },

  {
    id: 12,
    name: "Naz Patisserie & Café",
    nameKu: "پاتیسیری و کافێی ناز",
    category: "Specialty Coffee",
    categorySlug: "coffee",
    neighborhood: "Dream City",
    address: "Dream City Boulevard, Erbil",
    phone: "+964 750 234 6789",
    price: "$$",
    priceNum: 2,
    rating: 4.4,
    reviewCount: 189,
    isOpen: true,
    isTrending: false,
    isFeatured: false,
    tags: ["Pastry", "Cakes", "Brunch", "Instagram-worthy"],
    hours: { Mon: "8:00 AM – 11:00 PM", Tue: "8:00 AM – 11:00 PM", Wed: "8:00 AM – 11:00 PM", Thu: "8:00 AM – 12:00 AM", Fri: "8:00 AM – 12:00 AM", Sat: "8:00 AM – 12:00 AM", Sun: "9:00 AM – 11:00 PM" },
    image: "https://images.unsplash.com/photo-1559305616-3f99cd43e353?w=800&q=80",
    images: ["https://images.unsplash.com/photo-1559305616-3f99cd43e353?w=800&q=80", "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80"],
    description: "Dream City's most photogenic café and patisserie. Naz creates exquisite French-inspired pastries fused with Middle Eastern flavors — think pistachio croissants, rosewater éclairs, and saffron choux. A feast for the eyes and the palate.",
    lat: 36.1845, lng: 44.0415,
    ratingBreakdown: { 5: 100, 4: 55, 3: 22, 2: 8, 1: 4 },
    menu: [
      { name: "Pistachio Croissant", nameKu: "کرواسانی فستق", price: "5,500 IQD", desc: "Buttery croissant with pistachio cream & praline", img: "https://images.unsplash.com/photo-1568471173242-461f0a730452?w=400&q=80" },
      { name: "Rosewater Éclair", nameKu: "ئێکلەری گوڵاو", price: "6,000 IQD", desc: "Choux pastry, vanilla cream, rose icing & petals", img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&q=80" },
      { name: "Iced Matcha", nameKu: "ماچای یەخبەستوو", price: "7,000 IQD", desc: "Japanese matcha, oat milk, vanilla cold foam", img: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&q=80" }
    ],
    reviews: [
      { id: 1, author: "Solin B.", avatar: "S", date: "March 2024", foodRating: 5, vibeRating: 5, serviceRating: 4, overall: 5, text: "The pistachio croissant is literally the best thing I've eaten in Erbil. Beautiful presentation, perfect flavors. The whole café looks like a scene from Paris.", helpful: 36 }
    ]
  },

  {
    id: 13,
    name: "Peshawa Restaurant",
    nameKu: "چێشتخانەی پێشەوا",
    category: "Traditional Kurdish",
    categorySlug: "traditional",
    neighborhood: "Ankawa",
    address: "Main Road, Ankawa, Erbil",
    phone: "+964 750 111 2233",
    price: "$$$",
    priceNum: 3,
    rating: 4.8,
    reviewCount: 305,
    isOpen: true,
    isTrending: true,
    isFeatured: true,
    tags: ["Kabab", "Family", "Authentic"],
    hours: { Mon: "11:00 AM – 11:00 PM", Tue: "11:00 AM – 11:00 PM", Wed: "11:00 AM – 11:00 PM", Thu: "11:00 AM – 12:00 AM", Fri: "11:00 AM – 12:00 AM", Sat: "11:00 AM – 12:00 AM", Sun: "11:00 AM – 11:00 PM" },
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80",
    images: ["https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80"],
    description: "Traditional Kurdish food with rich history and amazing taste located in Ankawa.",
    lat: 36.2230, lng: 43.9930,
    ratingBreakdown: { 5: 200, 4: 80, 3: 15, 2: 5, 1: 5 },
    menu: [],
    reviews: []
  },

  {
    id: 14,
    name: "Fink Cafe",
    nameKu: "کافێی فینک",
    category: "Specialty Coffee",
    categorySlug: "coffee",
    neighborhood: "Dream City",
    address: "Dream City, Erbil",
    phone: "+964 750 333 4455",
    price: "$$",
    priceNum: 2,
    rating: 4.5,
    reviewCount: 120,
    isOpen: true,
    isTrending: false,
    isFeatured: false,
    tags: ["Coffee", "Quiet", "Work"],
    hours: { Mon: "8:00 AM – 10:00 PM", Tue: "8:00 AM – 10:00 PM", Wed: "8:00 AM – 10:00 PM", Thu: "8:00 AM – 11:00 PM", Fri: "9:00 AM – 11:00 PM", Sat: "9:00 AM – 11:00 PM", Sun: "8:00 AM – 10:00 PM" },
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80",
    images: ["https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80"],
    description: "A very calm cafe in Dream City perfect for reading and studying.",
    lat: 36.1860, lng: 44.0430,
    ratingBreakdown: { 5: 60, 4: 40, 3: 15, 2: 3, 1: 2 },
    menu: [],
    reviews: []
  },

  {
    id: 15,
    name: "Tandoori Kurdish",
    nameKu: "تەندوری کوردی",
    category: "Traditional Kurdish",
    categorySlug: "traditional",
    neighborhood: "Citadel",
    address: "Citadel Base, Erbil",
    phone: "+964 750 555 6677",
    price: "$$",
    priceNum: 2,
    rating: 4.6,
    reviewCount: 210,
    isOpen: true,
    isTrending: true,
    isFeatured: false,
    tags: ["Bread", "Kurdish", "Breakfast"],
    hours: { Mon: "6:00 AM – 2:00 PM", Tue: "6:00 AM – 2:00 PM", Wed: "6:00 AM – 2:00 PM", Thu: "6:00 AM – 2:00 PM", Fri: "6:00 AM – 2:00 PM", Sat: "6:00 AM – 2:00 PM", Sun: "6:00 AM – 2:00 PM" },
    image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=800&q=80",
    images: ["https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=800&q=80"],
    description: "Fresh Kurdish bread and breakfast served right near the Citadel every morning.",
    lat: 36.1918, lng: 44.0100,
    ratingBreakdown: { 5: 150, 4: 50, 3: 5, 2: 3, 1: 2 },
    menu: [],
    reviews: []
  }
];

export const CATEGORIES = [
  { slug: "all",        name: "All Venues",      icon: "<i data-lucide='layout-grid'></i>", count: 15 },
  { slug: "traditional", name: "Traditional Kurdish", icon: "<i data-lucide='utensils'></i>", count: 5 },
  { slug: "finedining", name: "Fine Dining",     icon: "<i data-lucide='sparkles'></i>", count: 2 },
  { slug: "coffee",     name: "Specialty Coffee",icon: "<i data-lucide='coffee'></i>", count: 4 },
  { slug: "shisha",     name: "Shisha Lounges",  icon: "<i data-lucide='wind'></i>", count: 2 },
  { slug: "fastfood",   name: "Fast Food",       icon: "<i data-lucide='sandwich'></i>", count: 2 }
];

export const NEIGHBORHOODS = [
  { name: "Empire World",  slug: "empire-world",  count: 3, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Empire_World_Erbil.jpg/800px-Empire_World_Erbil.jpg", desc: "Erbil's modern business district" },
  { name: "Ankawa",        slug: "ankawa",         count: 2, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Ankawa%2C_in_Erbil_the_capital_of_the_Kurdistan_Region_of_Iraq_12.jpg/800px-Ankawa%2C_in_Erbil_the_capital_of_the_Kurdistan_Region_of_Iraq_12.jpg", desc: "Cosmopolitan café culture" },
  { name: "Citadel",       slug: "citadel",        count: 3, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Citadel_of_Erbil.jpg/800px-Citadel_of_Erbil.jpg", desc: "Ancient history & culture" },
  { name: "Dream City",    slug: "dream-city",     count: 2, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Erbil_city_in_the_Kurdistan_Region_of_Iraq_%2834%29.jpg/800px-Erbil_city_in_the_Kurdistan_Region_of_Iraq_%2834%29.jpg", desc: "Modern shopping & dining" },
  { name: "Bakhtiari",     slug: "bakhtiari",      count: 2, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/2012._Street_market.Erbil%2C_Iraqi_Kurdistan..jpg/800px-2012._Street_market.Erbil%2C_Iraqi_Kurdistan..jpg", desc: "Residential dining gems" },
  { name: "Iskan",         slug: "iskan",          count: 1, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Iskan_Erbil_Iraq.jpg/800px-Iskan_Erbil_Iraq.jpg", desc: "Garden restaurants & events" }
];
