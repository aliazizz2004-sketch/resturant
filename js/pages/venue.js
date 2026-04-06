// ============================================
//  ERBILEATS — Venue Detail Page
// ============================================
import { VENUES } from '../data/venues.js';
import { renderStars, renderRatingBars, animateRatingBars, initLazyImages, store, showToast, todayName } from '../utils.js';

export function renderVenue(id) {
  const venue = VENUES.find(v => v.id === parseInt(id));
  if (!venue) return `<div class="container" style="padding:8rem 0;text-align:center"><h2>شوێن نەدۆزرایەوە</h2><a href="#browse" class="btn btn-primary" style="margin-top:2rem">گەڕان بەدوای شوێنەکان</a></div>`;

  const allReviews = [...venue.reviews, ...(store(`reviews_${venue.id}`) || [])];
  const totalReviews = Object.values(venue.ratingBreakdown).reduce((a,b)=>a+b,0) + (store(`reviews_${venue.id}`)?.length || 0);
  const today = todayName();

  return `
  <div class="venue-page page-enter" id="venue-page">
    <!-- Hero Gallery -->
    <div class="venue-hero">
      <img id="venue-main-img" src="${venue.images[0]}"
           alt="${venue.name}"
           onerror="this.src='https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80'">
      <div class="venue-gallery-strip">
        ${venue.images.map((img, i) => `
          <img src="${img}" alt="${venue.name} photo ${i+1}"
               class="${i===0?'active':''}" data-img="${img}"
               loading="lazy"
               onerror="this.src='https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=200&q=80'">`).join('')}
      </div>
    </div>

    <div class="container">
      <div class="venue-body">
        <!-- Main Content -->
        <div>
          <!-- Breadcrumb -->
          <div class="venue-info__breadcrumb">
            <a href="#home">سەرەتا</a> › <a href="#browse">گەڕان</a> › <a href="#browse?cat=${venue.categorySlug}">${venue.category}</a> › ${venue.nameKu || venue.name}
          </div>

          <!-- Tags -->
          <div class="venue-info__tags">
            <span class="badge badge-green">${venue.category}</span>
            <span class="badge badge-sand">📍 ${venue.neighborhood}</span>
            ${venue.isOpen ? '<span class="badge badge-green">ئێستا کراوەیە</span>' : '<span class="badge" style="background:#ffeaea;color:var(--red-500)">داخراوە</span>'}
            ${venue.isTrending ? '<span class="badge badge-gold">🔥 باو (ترێند)</span>' : ''}
          </div>

          <h1 class="venue-info__name">${venue.nameKu || venue.name}</h1>

          <!-- Meta row -->
          <div class="venue-info__meta">
            <div class="venue-info__meta-item">
              ${renderStars(venue.rating, 'lg')}
              <strong>${venue.rating}</strong>
              <span style="color:var(--color-text-muted)">(${totalReviews} پێداچوونەوە)</span>
            </div>
            <div class="venue-info__meta-item">
              <span class="icon">💰</span>
              <strong>${venue.price}</strong>
              <span>بۆ هەر کەسێک</span>
            </div>
            <div class="venue-info__meta-item">
              <span class="icon">📍</span>
              <span>${venue.address}</span>
            </div>
          </div>

          <!-- Description -->
          <p style="color:var(--neutral-700);line-height:var(--leading-relaxed);margin-bottom:var(--space-8);font-size:var(--text-lg)">
            ${venue.description}
          </p>

          <!-- Rating Overview -->
          <div class="rating-overview reveal">
            <div class="rating-overview__score">
              <div class="rating-overview__number">${venue.rating}</div>
              ${renderStars(venue.rating, 'lg')}
              <div class="rating-overview__total">${totalReviews} پێداچوونەوە</div>
            </div>
            <div class="rating-overview__breakdown">
              ${renderRatingBars(venue.ratingBreakdown)}
            </div>
          </div>

          <!-- Menu Highlights -->
          <div class="menu-section reveal">
            <h2 class="menu-section__title">🍴 Menu Highlights</h2>
            <div class="menu-grid">
              ${venue.menu.map(item => `
                <div class="menu-item">
                  <img class="menu-item__img" src="${item.img}" alt="${item.name}"
                       onerror="this.src='https://images.unsplash.com/photo-1504713046561-6cffe29d5e96?w=200&q=80'" loading="lazy">
                  <div>
                    <div class="menu-item__name">${item.nameKu || item.name}</div>
                    ${item.nameKu ? '' : `<div style="font-size:0.7rem;color:var(--color-text-muted);font-style:italic">${item.name}</div>`}
                    <div class="menu-item__desc">${item.desc}</div>
                    <div class="menu-item__price">${item.price}</div>
                  </div>
                </div>`).join('')}
            </div>
          </div>

          <!-- Reviews -->
          <div class="reviews-section reveal">
            <div class="reviews-section__header">
              <h2 class="reviews-section__title">💬 پێداچوونەوەی میوانەکان</h2>
              <button class="btn btn-primary" id="open-review-modal-btn">✍️ پێداچوونەوە بنووسە</button>
            </div>
            <div id="reviews-list">
              ${allReviews.map(r => renderReviewCard(r)).join('')}
            </div>
          </div>
        </div>

        <!-- Sidebar -->
        <div>
          <div class="venue-sidebar-card">
            <div class="venue-sidebar__cta">
              <h3>ئامادەی بۆ سەردان؟</h3>
              <p style="color:rgba(255,255,255,0.75);font-size:0.9rem;margin-bottom:1rem">پلان دابنێ بۆ سەردانی ${venue.nameKu || venue.name}</p>
              <a href="tel:${venue.phone}" class="btn btn-gold btn-lg" style="width:100%;justify-content:center" id="call-btn">📞 پەیوەندی بکە</a>
            </div>
            <div class="venue-sidebar__details">
              <!-- Status -->
              <div class="venue-sidebar__row">
                <span class="venue-sidebar__row-icon">🕐</span>
                <div style="flex:1">
                  <div class="venue-sidebar__row-label">
                    ${venue.isOpen
                      ? '<span class="open-badge">ئێستا کراوەیە</span>'
                      : '<span style="color:var(--red-400);font-weight:600">● ئێستا داخراوە</span>'}
                  </div>
                  <div class="hours-list">
                    ${Object.entries(venue.hours).map(([day, hrs]) => `
                      <div class="hours-row ${day===today?'today':''}">
                        <span>${day}</span><span>${hrs}</span>
                      </div>`).join('')}
                  </div>
                </div>
              </div>
              <!-- Address -->
              <div class="venue-sidebar__row">
                <span class="venue-sidebar__row-icon">📍</span>
                <div>
                  <div class="venue-sidebar__row-label">ناونیشان</div>
                  <div class="venue-sidebar__row-value">${venue.address}</div>
                </div>
              </div>
              <!-- Phone -->
              <div class="venue-sidebar__row">
                <span class="venue-sidebar__row-icon">📞</span>
                <div>
                  <div class="venue-sidebar__row-label">ژمارە مۆبایل</div>
                  <div class="venue-sidebar__row-value"><a href="tel:${venue.phone}" style="color:var(--color-primary)">${venue.phone}</a></div>
                </div>
              </div>
              <!-- Price -->
              <div class="venue-sidebar__row">
                <span class="venue-sidebar__row-icon">💰</span>
                <div>
                  <div class="venue-sidebar__row-label">مەودای نرخ</div>
                  <div class="venue-sidebar__row-value">${venue.price} — ${getPriceLabel(venue.price)}</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Map -->
          <div class="venue-map reveal" style="margin-top:var(--space-6)">
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=${venue.lng-0.01}%2C${venue.lat-0.01}%2C${venue.lng+0.01}%2C${venue.lat+0.01}&layer=mapnik&marker=${venue.lat}%2C${venue.lng}"
              title="Map showing location of ${venue.name}"
              loading="lazy"
              style="border:none;border-radius:var(--radius-xl)">
            </iframe>
          </div>
          <a href="https://www.openstreetmap.org/?mlat=${venue.lat}&mlon=${venue.lng}&zoom=16"
             target="_blank" rel="noopener"
             class="btn btn-secondary" style="width:100%;justify-content:center;margin-top:var(--space-3)"
             id="get-directions-btn">
            🗺️ وەرگرتنی ڕێنمایی ڕێگا
          </a>
        </div>
      </div>
    </div>

    <!-- Review Modal -->
    <div class="modal-overlay" id="review-modal-overlay" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div class="modal">
        <div class="modal__header">
          <h2 class="modal__title" id="modal-title">Write a Review</h2>
          <button class="modal__close" id="close-review-modal-btn" aria-label="Close">✕</button>
        </div>
        <div class="modal__body">
          <p style="color:var(--color-text-secondary);margin-bottom:var(--space-5)">Share your experience at <strong>${venue.name}</strong></p>

          <div class="form-group">
            <label class="form-label" for="reviewer-name">Your Name</label>
            <input type="text" class="form-input" id="reviewer-name" placeholder="e.g. Sara K." maxlength="50">
          </div>

          <div class="form-group">
            <label class="form-label">Overall Rating</label>
            <div class="stars stars-xl star-interactive" id="overall-stars" role="radiogroup" aria-label="Overall rating">
              ${[1,2,3,4,5].map(i=>`<span class="star" data-val="${i}" role="radio" aria-label="${i} star" tabindex="0">★</span>`).join('')}
            </div>
            <input type="hidden" id="overall-rating-val" value="0">
          </div>

          <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:var(--space-4);margin-bottom:var(--space-5)">
            ${['food','vibe','service'].map(cat=>`
              <div>
                <label class="form-label" style="text-transform:capitalize">${cat}</label>
                <div class="stars star-interactive" id="${cat}-stars" role="radiogroup" aria-label="${cat} rating">
                  ${[1,2,3,4,5].map(i=>`<span class="star" data-val="${i}" tabindex="0">★</span>`).join('')}
                </div>
                <input type="hidden" id="${cat}-rating-val" value="0">
              </div>`).join('')}
          </div>

          <div class="form-group">
            <label class="form-label" for="review-text">Your Review</label>
            <textarea class="form-input form-textarea" id="review-text"
              placeholder="Tell others about your experience — the food, atmosphere, service…"
              maxlength="500" rows="4"></textarea>
            <div style="text-align:right;font-size:0.75rem;color:var(--color-text-muted);margin-top:4px">
              <span id="char-count">0</span>/500 characters
            </div>
          </div>
        </div>
        <div class="modal__footer">
          <button class="btn btn-ghost" id="cancel-review-btn">پاشگەزبوونەوە</button>
          <button class="btn btn-primary pulse" id="submit-review-btn">ناردنی پێداچوونەوە</button>
        </div>
      </div>
    </div>
  </div>`;
}

function renderReviewCard(r) {
  return `
  <div class="review-card">
    <div class="review-card__header">
      <div class="review-card__avatar" style="background:${avatarColor(r.author)}">${r.avatar || r.author[0]}</div>
      <div>
        <div class="review-card__author">${r.author}</div>
        <div class="review-card__date">${r.date}</div>
      </div>
      <div style="margin-left:auto">${renderStars(r.overall)}</div>
    </div>
    <div class="review-card__ratings">
      <div class="review-card__rating-item">🍽️ خواردن: ${renderStars(r.foodRating)}</div>
      <div class="review-card__rating-item">✨ کەشوهەوا: ${renderStars(r.vibeRating)}</div>
      <div class="review-card__rating-item">🤝 خزمەتگوزاری: ${renderStars(r.serviceRating)}</div>
    </div>
    <p class="review-card__text">"${r.text}"</p>
    <div class="review-card__actions">
      <button class="review-card__action">👍 بەسوودە (${r.helpful||0})</button>
      <button class="review-card__action">👎 بەسوود نییە</button>
    </div>
  </div>`;
}

function avatarColor(name) {
  const colors = ['linear-gradient(135deg,#40916C,#1B4332)','linear-gradient(135deg,#D4A017,#8B6914)','linear-gradient(135deg,#C1121F,#7B0812)','linear-gradient(135deg,#2D6A4F,#40916C)','linear-gradient(135deg,#B5838D,#6D2B3D)'];
  return colors[name.charCodeAt(0) % colors.length];
}

function getPriceLabel(p) {
  return ({$:'Very affordable',$$:'Moderate',$$$ :'Upscale',$$$$:'Fine dining'})[p]||'';
}

export function initVenue(id) {
  initLazyImages(document);

  // Gallery strip
  document.querySelectorAll('.venue-gallery-strip img').forEach(thumb => {
    thumb.addEventListener('click', () => {
      const mainImg = document.getElementById('venue-main-img');
      if (mainImg) { mainImg.src = thumb.dataset.img; mainImg.style.opacity=0; setTimeout(()=>mainImg.style.opacity=1,50); mainImg.style.transition='opacity 0.3s ease'; }
      document.querySelectorAll('.venue-gallery-strip img').forEach(t=>t.classList.remove('active'));
      thumb.classList.add('active');
    });
  });

  // Animate rating bars
  const container = document.querySelector('.rating-overview__breakdown');
  if (container) animateRatingBars(container);

  // Review Modal
  const overlay = document.getElementById('review-modal-overlay');
  const openBtn  = document.getElementById('open-review-modal-btn');
  const closeBtn = document.getElementById('close-review-modal-btn');
  const cancelBtn= document.getElementById('cancel-review-btn');
  const submitBtn= document.getElementById('submit-review-btn');

  openBtn?.addEventListener('click', () => overlay?.classList.add('open'));
  closeBtn?.addEventListener('click', () => overlay?.classList.remove('open'));
  cancelBtn?.addEventListener('click', () => overlay?.classList.remove('open'));
  overlay?.addEventListener('click', (e) => { if (e.target===overlay) overlay.classList.remove('open'); });

  // Char counter
  document.getElementById('review-text')?.addEventListener('input', function() {
    document.getElementById('char-count').textContent = this.value.length;
  });

  // Star pickers
  ['overall','food','vibe','service'].forEach(cat => {
    const group = document.getElementById(`${cat}-stars`);
    const input = document.getElementById(`${cat}-rating-val`);
    if (!group) return;
    group.querySelectorAll('.star').forEach(star => {
      star.addEventListener('click', () => {
        const val = parseInt(star.dataset.val);
        input.value = val;
        group.querySelectorAll('.star').forEach((s,i) => s.classList.toggle('filled', i<val));
      });
      star.addEventListener('mouseenter', () => {
        const val = parseInt(star.dataset.val);
        group.querySelectorAll('.star').forEach((s,i) => s.classList.toggle('filled', i<val));
      });
      star.addEventListener('keydown', e => { if(e.key==='Enter') star.click(); });
    });
    group.addEventListener('mouseleave', () => {
      const val = parseInt(input.value)||0;
      group.querySelectorAll('.star').forEach((s,i)=>s.classList.toggle('filled',i<val));
    });
  });

  // Submit review
  submitBtn?.addEventListener('click', () => {
    const name = document.getElementById('reviewer-name').value.trim();
    const text = document.getElementById('review-text').value.trim();
    const overall = parseInt(document.getElementById('overall-rating-val').value)||0;
    const food    = parseInt(document.getElementById('food-rating-val').value)||0;
    const vibe    = parseInt(document.getElementById('vibe-rating-val').value)||0;
    const service = parseInt(document.getElementById('service-rating-val').value)||0;

    if (!name)    { showToast('Please enter your name', ''); return; }
    if (!overall) { showToast('Please select an overall rating', ''); return; }
    if (!text)    { showToast('Please write a review', ''); return; }

    const review = {
      id: Date.now(),
      author: name,
      avatar: name[0].toUpperCase(),
      date: new Date().toLocaleDateString('en-US', { month:'long', year:'numeric' }),
      foodRating: food||overall,
      vibeRating: vibe||overall,
      serviceRating: service||overall,
      overall,
      text,
      helpful: 0
    };

    const existing = store(`reviews_${id}`) || [];
    store(`reviews_${id}`, [...existing, review]);

    const list = document.getElementById('reviews-list');
    if (list) {
      const div = document.createElement('div');
      div.innerHTML = renderReviewCard(review);
      div.firstElementChild.style.animation = 'slideUp 0.4s ease';
      list.prepend(div.firstElementChild);
    }

    overlay?.classList.remove('open');
    showToast('✅ Review submitted — thank you!', 'success');

    // Reset form
    ['reviewer-name','review-text'].forEach(id=>{ const el=document.getElementById(id); if(el) el.value=''; });
    ['overall','food','vibe','service'].forEach(cat=>{
      document.getElementById(`${cat}-rating-val`).value=0;
      document.getElementById(`${cat}-stars`)?.querySelectorAll('.star').forEach(s=>s.classList.remove('filled'));
    });
    document.getElementById('char-count').textContent='0';
  });
}
