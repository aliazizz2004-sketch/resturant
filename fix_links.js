const fs = require('fs');
const content = fs.readFileSync('./map-feature/locations.json', 'utf8');
let data = JSON.parse(content);
data = data.map(item => {
  if (item.menuURL && !item.menuURL.startsWith('../index.html')) {
    item.menuURL = '../index.html' + item.menuURL;
  }
  return item;
});
fs.writeFileSync('./map-feature/locations.json', JSON.stringify(data, null, 2), 'utf8');
console.log('Fixed menu URLs to point to ../index.html');
