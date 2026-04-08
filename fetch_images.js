const https = require('https');
const fs = require('fs');

function getWikiImage(query, cb) {
  const q = encodeURIComponent(query);
  const url = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=${q}&gsrnamespace=6&prop=imageinfo&iiprop=url&format=json`;
  
  https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
    let raw = '';
    res.on('data', d => raw += d);
    res.on('end', () => {
      try {
        const data = JSON.parse(raw);
        if (data.query && data.query.pages) {
          const pages = data.query.pages;
          const firstPageId = Object.keys(pages)[0];
          cb(pages[firstPageId].imageinfo[0].url);
        } else {
          cb(null);
        }
      } catch (e) {
        cb(null);
      }
    });
  });
}

function processAll() {
  const queries = ['Empire World Erbil', 'Ankawa Erbil', 'Erbil Citadel', 'Dream City Erbil', 'Erbil Market', 'Iskan Erbil'];
  let results = {};
  let count = 0;
  
  queries.forEach(q => {
    getWikiImage(q, url => {
      results[q] = url;
      count++;
      if (count === queries.length) {
        fs.writeFileSync('wiki_urls.json', JSON.stringify(results, null, 2));
      }
    });
  });
}

processAll();
