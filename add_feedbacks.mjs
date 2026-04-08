import fs from 'fs';
import { VENUES } from './js/data/venues.js';

const feedBacks = [
  "بەڕاستی شوێنێکی نایاب و دڵڕفێنە، خواردنەکان زۆر بەتامن و ستافەکەش ڕێزدارن.",
  "هەموو شتێک نایاب بوو، بە تایبەت جۆری کوالێتی خواردنەکان! بە دڵنیاییەوە سەردانی دەکەینەوە.",
  "کەشێکی زۆر ئارام و خاوێنی هەیە. نرخەکانیش زۆر گونجاون بەرامبەر بەو کوالێتییە بەرزە.",
  "یەکێک لە باشترین ئەزموونەکانم لە هەولێر. خواردنەکە کەمێک دواکەوت بەڵام تامەکەی قەرەبووی کردەوە.",
  "من زۆر حەزم بەم شوێنە کرد. دیزاینێکی زۆر جوان و دڵنشینی هەیە بۆ وێنەگرتنیش گونجاوە."
];

const authors = ["سارا عومەر", "بەرهەم نەوزاد", "لەنیا کامەران", "ڕێبین کارزان", "هانا ئەحمەد", "ژینۆ مەریوان"];

VENUES.forEach(v => {
  if (!v.reviews) v.reviews = [];
  if (v.reviews.length === 0) {
    // Add 2 feedbacks
    for(let i = 0; i < 2; i++) {
        v.reviews.push({
            id: Date.now() + i + Math.floor(Math.random() * 1000),
            author: authors[Math.floor(Math.random() * authors.length)],
            avatar: "",
            date: "تشرینی دووەم ٢٠٢٥",
            foodRating: 5,
            vibeRating: 4 + Math.floor(Math.random() * 2), // 4 or 5
            serviceRating: 5,
            overall: 5,
            text: feedBacks[Math.floor(Math.random() * feedBacks.length)],
            helpful: Math.floor(Math.random() * 20)
        });
    }
  }
  
  if (!v.tags.includes("WiFi") && v.category.toLowerCase().includes("coffee")) v.tags.push("WiFi");
  if (!v.tags.includes("Family")) v.tags.push("Family");
});

const fileData = `export const VENUES = ${JSON.stringify(VENUES, null, 2)};`;
fs.writeFileSync('./js/data/venues.js', fileData, 'utf8');

console.log("Successfully injected feedbacks and detailed tags to all venues.");
