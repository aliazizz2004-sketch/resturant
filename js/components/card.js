// ============================================
//  ERBILEATS — Venue Card Component
// ============================================
import { renderStars } from '../utils.js';

export function renderVenueCard(venue, opts = {}) {
  const { showBadge = true } = opts;
  const favorites = JSON.parse(localStorage.getItem('erbileats_favorites') || '[]');
  const isFav = favorites.includes(venue.id);

  return `
  <article class="venue-card reveal" data-id="${venue.id}" id="venue-card-${venue.id}" role="article" aria-label="${venue.nameKu || venue.name}">
    <div class="venue-card__image">
      <img data-src="${venue.image}" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 200'%3E%3Crect fill='%23F5E6D3' width='400' height='200'/%3E%3C/svg%3E"
           alt="${venue.nameKu || venue.name}" loading="lazy">
      <div class="venue-card__image-overlay">
        <span class="venue-card__image-overlay-cta">
          <i data-lucide="eye" style="width:14px;height:14px;"></i>
          سەرخستن &nbsp;&#x2192;
        </span>
      </div>
      ${showBadge && venue.isTrending ? '<span class="venue-card__badge" style="display:inline-flex;align-items:center;gap:4px;"><i data-lucide="flame" style="width:14px;height:14px;"></i> باو (ترێند)</span>' : ''}
      ${showBadge && venue.isFeatured && !venue.isTrending ? '<span class="venue-card__badge" style="display:inline-flex;align-items:center;gap:4px;"><i data-lucide="star" fill="currentColor" style="width:14px;height:14px;"></i> هەڵبژێردراو</span>' : ''}
      <button class="venue-card__favorite ${isFav ? 'active' : ''}"
              data-venue-id="${venue.id}" aria-label="${isFav ? 'Remove from' : 'Add to'} favorites"
              id="fav-btn-${venue.id}">
        ${isFav ? '<i data-lucide="heart" fill="var(--red-500)" color="var(--red-500)"></i>' : '<i data-lucide="heart"></i>'}
      </button>
    </div>
    <div class="venue-card__content">
      <div style="display:flex; align-items:center; gap:12px; margin-bottom:8px;">
        <img data-src="${venue.image}" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'%3E%3Crect fill='%23F5E6D3' width='40' height='40'/%3E%3C/svg%3E" 
             style="width:40px;height:40px;border-radius:50%;object-fit:cover;box-shadow:0 2px 8px rgba(0,0,0,0.1);" alt="${venue.name}" loading="lazy">
        <div>
          <div class="venue-card__category" style="margin-bottom:2px;">${venue.category}</div>
          <h3 class="venue-card__name" style="margin:0;">${venue.nameKu || venue.name}</h3>
        </div>
      </div>
      <div class="flex items-center gap-2" style="margin-bottom:var(--space-1)">
        ${renderStars(venue.rating)}
        <span class="rating-number" style="font-size:var(--text-base)">${venue.rating}</span>
        <span class="rating-count">(${venue.reviewCount})</span>
      </div>
      <div class="venue-card__meta">
        <span class="venue-card__meta-item">📍 ${venue.neighborhood}</span>
        <span class="venue-card__meta-item venue-card__price">${venue.price}</span>
        <span class="venue-card__meta-item" style="color:${venue.isOpen ? 'var(--green-500)' : 'var(--red-400)'}">
          ${venue.isOpen ? '● کراوەیە' : '● داخراوە'}
        </span>
      </div>
    </div>
  </article>`;
}

export function initCardListeners(container) {
  container.querySelectorAll('.venue-card').forEach(card => {
    const id = parseInt(card.dataset.id);
    card.addEventListener('click', (e) => {
      if (e.target.closest('.venue-card__favorite')) return;
      window.location.hash = `#venue/${id}`;
    });
  });

  container.querySelectorAll('.venue-card__favorite').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = parseInt(btn.dataset.venueId);
      let favs = JSON.parse(localStorage.getItem('erbileats_favorites') || '[]');
      if (favs.includes(id)) {
        favs = favs.filter(f => f !== id);
        btn.innerHTML = '<i data-lucide="heart"></i>';
        btn.classList.remove('active');
      } else {
        favs.push(id);
        btn.innerHTML = '<i data-lucide="heart" fill="var(--red-500)" color="var(--red-500)"></i>';
        btn.classList.add('active');
        btn.style.animation = 'starFill 0.3s ease';
        setTimeout(() => btn.style.animation = '', 300);
      }
      if (window.lucide) window.lucide.createIcons({ root: btn });
      localStorage.setItem('erbileats_favorites', JSON.stringify(favs));
    });
  });
}
