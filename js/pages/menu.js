import { VENUES } from '../data/venues.js';
import { initLazyImages, initReveal } from '../utils.js';

export function renderMenu(id) {
  const venue = VENUES.find(v => v.id === parseInt(id));
  if (!venue) return '<div class="container text-center" style="padding-top:100px;">Menu not found</div>';

  return `
  <!-- ── MENU HERO ── -->
  <section class="venue-hero" style="height: 380px;">
    <img src="${venue.image}" alt="${venue.nameKu}" style="width:100%; height:100%; object-fit:cover; filter: brightness(0.6);">
    <div class="container" style="position:absolute; top:50%; left:50%; transform:translate(-50%, -50%); text-align:center; z-index: 2; width: 100%;">
      <span class="badge badge-gold" style="margin-bottom:var(--space-3)">مینیۆی خواردن و خواردنەوەکان</span>
      <h1 style="font-family:var(--font-heading); color:white; font-size: 3.5rem; text-shadow: 0 4px 12px rgba(0,0,0,0.5);">${venue.nameKu}</h1>
      <p style="color:var(--sand-100); font-size:1.2rem; margin-top:var(--space-2)">${venue.name}</p>
    </div>
  </section>

  <div class="menu-page" style="background:var(--color-bg); padding:var(--space-10) 0; min-height:60vh;">
    <div class="container">
      
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:var(--space-8);">
        <a href="#venue/${venue.id}" class="btn btn-secondary">
          <i data-lucide="arrow-right"></i> گەڕانەوە بۆ شوێن
        </a>
        <h2 style="font-family:var(--font-heading); font-size:var(--text-3xl);">هەڵبژاردەکانی مینیۆ</h2>
      </div>

      <div class="menu-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: var(--space-6);">
        ${venue.menu.map((m, i) => `
          <div class="menu-item-lg reveal delay-${(i % 3) + 1}" style="background:var(--color-surface); border-radius:var(--radius-xl); overflow:hidden; border:1px solid var(--color-border-light); transition:all 0.4s ease; cursor:pointer;" onmouseover="this.style.boxShadow='var(--shadow-xl)'; this.style.borderColor='var(--green-400)';" onmouseout="this.style.boxShadow='none'; this.style.borderColor='var(--color-border-light)';">
            <div style="position:relative; height: 220px; overflow:hidden;">
              <img src="${m.img}" alt="${m.nameKu}" loading="lazy" style="width:100%; height:100%; object-fit:cover; transition:transform 0.6s ease;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'">
              <div style="position:absolute; top:12px; right:12px; background:rgba(0,0,0,0.7); backdrop-filter:blur(5px); color:var(--gold-400); padding:4px 12px; border-radius:var(--radius-full); font-weight:var(--weight-bold); font-size:var(--text-sm);">
                ${m.price}
              </div>
            </div>
            <div style="padding:var(--space-5);">
              <h3 style="font-weight:var(--weight-bold); font-size:var(--text-lg); margin-bottom:var(--space-1);">${m.nameKu}</h3>
              <div style="color:var(--color-primary); font-size:var(--text-xs); letter-spacing:0.05em; font-weight:var(--weight-medium); margin-bottom:var(--space-3); text-transform:uppercase;">${m.name}</div>
              <p style="color:var(--color-text-secondary); font-size:var(--text-sm); line-height:1.6;">${m.desc}</p>
              
              <div style="margin-top:var(--space-4); margin-bottom:var(--space-2); height:1px; background:var(--color-border-light);"></div>
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <button class="btn btn-primary btn-sm" style="width:100%; justify-content:center;">داواکردن</button>
              </div>
            </div>
          </div>
        `).join('')}
      </div>

    </div>
  </div>
  `;
}

export function initMenu(id) {
  initLazyImages(document);
  initReveal(document);
  if (window.lucide) {
    window.lucide.createIcons();
  }
}
