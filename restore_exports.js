const fs = require('fs');

const oldContent = fs.readFileSync('old_venues.js', 'utf8');
const currentContent = fs.readFileSync('js/data/venues.js', 'utf8');

// The original file had export const VENUES = [...]; 
// Then export const CATEGORIES = [...];
// Then export const NEIGHBORHOODS = [...];

const match = oldContent.match(/export const CATEGORIES = (?:.|\n)*/);
if (match) {
   if (!currentContent.includes('export const CATEGORIES')) {
      const fixedContent = currentContent + '\n\n' + match[0];
      fs.writeFileSync('js/data/venues.js', fixedContent, 'utf8');
      console.log('Restored CATEGORIES and NEIGHBORHOODS');
   }
}
