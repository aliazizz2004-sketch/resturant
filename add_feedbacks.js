import fs from 'fs';

let content = fs.readFileSync('./js/data/venues.js', 'utf8');

const match = content.match(/export const VENUES = (\[(?:.|\n)*?\]);/);
if (!match) process.exit(1);

let venues;
try { venues = eval(match[1]); } catch(e) { process.exit(1); }

const feedBacks = [
  "بەڕاستی شوێنێکی نایاب و دڵڕفێنە، خواردنەکان زۆر بەتامن و ستافەکەش ڕێزدارن.",
  "هەموو شتێک نایاب بوو، بە تایبەت جۆری کوالێتی خواردنەکان! بە دڵنیاییەوە سەردانی دەکەینەوە.",
  "کەشێکی زۆر ئارام و خاوێنی هەیە. نرخەکانیش زۆر گونجاون بەرامبەر بەو کوالێتییە بەرزە.",
  "یەکێک لە باشترین ئەزموونەکانم لە هەولێر. خواردنەکە کەمێک دواکەوت بەڵام تامەکەی قەرەبووی کردەوە.",
  "من زۆر حەزم بەم شوێنە کرد. دیزاینێکی زۆر جوان و دڵنشینی هەیە بۆ وێنەگرتنیش گونجاوە."
];

const authors = ["سارا عومەر", "بەرهەم نەوزاد", "لەنیا کامەران", "ڕێبین کارزان", "هانا ئەحمەد", "ژینۆ مەریوان"];

venues.forEach(v => {
  if (!v.reviews) v.reviews = [];
  if (v.reviews.length === 0) {
    // Add 2 feedbacks
    for(let i = 0; i < 2; i++) {
        v.reviews.push({
            id: Date.now() + i,
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
  
  // adding additional details
  if (!v.tags.includes("WiFi") && v.category === "Coffee") v.tags.push("WiFi");
  if (!v.tags.includes("Family")) v.tags.push("Family");
});

content = content.replace(/export const VENUES = \[(?:.|\n)*?\];/, \`export const VENUES = \${JSON.stringify(venues, null, 2)};\`);

fs.writeFileSync('./js/data/venues.js', content, 'utf8');

console.log("Successfully injected feedbacks and detailed tags to all venues.");
