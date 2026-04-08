// ============================================
//  ERBILEATS — Homepage
// ============================================
import { VENUES, CATEGORIES, NEIGHBORHOODS } from '../data/venues.js';
import { renderVenueCard, initCardListeners } from '../components/card.js';
import { renderStars, initLazyImages, initReveal, debounce } from '../utils.js';

export function renderHome() {
  const trending = VENUES.filter(v => v.isTrending).slice(0, 6);

  return `
  <!-- ── HERO ── -->
  <section class="hero" id="hero-section" aria-label="Hero">
    <div class="hero__bg">
      <img src="img/fa34428b7658a9924cd1c28cf146e052.jpg"
           alt="Erbil aerial view">
    </div>
    <div class="hero__content">
      <div class="hero__eyebrow">📍 هەولێر، هەرێمی کوردستان</div>
      <h1 class="hero__title">باشترینەکانی<br><span>هەولێر بدۆزەرەوە</span></h1>
      <p class="hero__subtitle">لە چایخانە دێرینەکانی قەڵاوە تا چێشتخانە مۆدێرنەکان —<br>باشترین ڕێبەرت بۆ خواردنەکانی هەولێر.</p>

      <div class="hero__search-wrap">
        <div class="search-box" id="hero-search-box">
          <span class="search-box__icon"><i data-lucide="search"></i></span>
          <input type="search" class="search-box__input" id="hero-search"
                 placeholder="گەڕان بۆ چێشتخانە، کافێ، گەڕەکەکان…"
                 aria-label="Search venues" autocomplete="off">
          <button class="btn btn-primary btn-sm search-box__btn" id="hero-search-btn">گەڕان</button>
          <div class="search-dropdown" id="search-dropdown" role="listbox" aria-label="Search suggestions"></div>
        </div>
      </div>

      <div class="hero__stats">
        <div class="hero__stat">
          <span class="hero__stat-value" id="stat-venues">120+</span>
          <span class="hero__stat-label">چێشتخانە و کافێ</span>
        </div>
        <div class="hero__stat-divider"></div>
        <div class="hero__stat">
          <span class="hero__stat-value">4,800+</span>
          <span class="hero__stat-label">پێداچوونەوەکان</span>
        </div>
        <div class="hero__stat-divider"></div>
        <div class="hero__stat">
          <span class="hero__stat-value">6</span>
          <span class="hero__stat-label">گەڕەکەکان</span>
        </div>
      </div>
    </div>
    <div class="hero__scroll" aria-hidden="true"><i data-lucide="arrow-down"></i><br><span>بۆ خوارەوە بڕۆ</span></div>
  </section>

  <!-- ── CATEGORIES ── -->
  <section class="section categories-section" id="categories-section">
    <div class="container">
      <div class="section-header reveal">
        <h2>بەپێی جۆر بگەڕێ</h2>
        <p>لە خواردنی کۆنی کوردییەوە تا قاوەی تایبەت — ئەوە بدۆزەرەوە کە ئارەزووی دەکەیت</p>
      </div>
      <div class="categories-grid">
        ${CATEGORIES.filter(c => c.slug !== 'all').map((cat, i) => `
          <div class="category-card reveal delay-${i+1}" data-cat="${cat.slug}" id="cat-${cat.slug}" role="button" tabindex="0" aria-label="Browse ${cat.name}">
            <div class="category-card__icon">${cat.icon}</div>
            <span class="category-card__name">${cat.name}</span>
            <span style="font-size:var(--text-xs);color:var(--color-text-muted)">${cat.count} شوێن</span>
          </div>`).join('')}
      </div>
    </div>
  </section>

  <!-- ── TRENDING ── -->
  <section class="section trending-section" id="trending-section">
    <div class="container">
      <div class="section-header reveal" style="display:flex;align-items:center;justify-content:space-between;text-align:left;margin-bottom:var(--space-8)">
        <div>
          <h2 style="margin-bottom:var(--space-2); display:flex; align-items:center; gap:0.5rem;"><i data-lucide="flame" style="color:var(--orange-500)"></i> باوەکانی ئەم هەفتەیە</h2>
          <p style="margin:0">ئەو شوێنانەی زۆرترین باسیان لێ دەکرێت لە هەولێر</p>
        </div>
        <a href="#browse" class="btn btn-secondary hide-mobile" id="see-all-trending-btn">بینینی هەموویان ←</a>
      </div>
      <div class="carousel-wrapper">
        <button class="carousel-nav prev" id="carousel-prev" aria-label="Previous">‹</button>
        <div class="carousel-track-outer">
          <div class="carousel-track" id="carousel-track">
            ${trending.map(v => renderVenueCard(v)).join('')}
          </div>
        </div>
        <button class="carousel-nav next" id="carousel-next" aria-label="Next">›</button>
      </div>
    </div>
  </section>

  <!-- ── NEIGHBORHOODS ── -->
  <section class="section neighborhoods-section" id="neighborhoods-section">
    <div class="container">
      <div class="section-header reveal">
        <h2>بەپێی گەڕەکەکان بگەڕێ</h2>
        <p>هەموو سوچێکی هەولێر تام و چێژی تایبەت بەخۆی هەیە</p>
      </div>
      <div class="neighborhoods-grid">
        ${NEIGHBORHOODS.map((n, i) => `
          <div class="neighborhood-card reveal delay-${(i%3)+1}" data-hood="${n.slug}" id="hood-${n.slug}" role="button" tabindex="0" aria-label="${n.name} neighborhood">
            <img src="${n.img}" alt="${n.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&q=80'">
            <div class="neighborhood-card__info">
              <div class="neighborhood-card__name">${n.name}</div>
              <div class="neighborhood-card__count">${n.count} شوێن · ${n.desc}</div>
            </div>
          </div>`).join('')}
      </div>
    </div>
  </section>

  <!-- ── CTA BANNER ── -->
  <section style="background:linear-gradient(135deg,var(--green-700),var(--green-800));padding:var(--space-16) 0;position:relative;overflow:hidden;">
    <div style="position:absolute;inset:0;opacity:0.06;background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cg fill='%23ffffff'%3E%3Cpath d='M30 0l7.5 13h-15L30 0zm0 60l-7.5-13h15L30 60zM0 30l13-7.5v15L0 30zm60 0l-13 7.5v-15L60 30z'/%3E%3C/g%3E%3C/svg%3E\");" aria-hidden="true"></div>
    <div class="container text-center" style="position:relative">
      <h2 style="color:white;font-family:var(--font-heading);margin-bottom:var(--space-4)">ئەزموونەکەت لەگەڵ ئێمە بەشداربە</h2>
      <p style="color:rgba(255,255,255,0.75);font-size:var(--text-lg);margin-bottom:var(--space-8);max-width:500px;margin-inline:auto">
        شوێنێکی ناوازە دەزانیت؟ سەردانی شوێنێکی تایبەتت کردووە؟ یارمەتی کۆمەڵگاکەمان بدە بە نووسینی پێداچوونەوەیەک.
      </p>
      <a href="#browse" class="btn btn-gold btn-lg" id="cta-write-review-btn">گەڕان و پێداچوونەوە</a>
    </div>
  </section>`;
}

export function initHome() {
  // Lazy images
  initLazyImages(document);
  // Scroll reveal
  initReveal(document);

  // Category clicks
  document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', () => {
      const cat = card.dataset.cat;
      window.location.hash = `#browse?cat=${cat}`;
    });
    card.addEventListener('keydown', e => { if (e.key === 'Enter') card.click(); });
  });

  // Neighborhood clicks
  document.querySelectorAll('.neighborhood-card').forEach(card => {
    card.addEventListener('click', () => {
      const hood = card.dataset.hood;
      window.location.hash = `#browse?hood=${hood}`;
    });
    card.addEventListener('keydown', e => { if (e.key === 'Enter') card.click(); });
  });

  // Carousel
  const track = document.getElementById('carousel-track');
  const prevBtn = document.getElementById('carousel-prev');
  const nextBtn = document.getElementById('carousel-next');
  if (track && prevBtn && nextBtn) {
    const scrollAmount = 340;
    prevBtn.addEventListener('click', () => track.scrollBy({ left: -scrollAmount, behavior: 'smooth' }));
    nextBtn.addEventListener('click', () => track.scrollBy({ left: scrollAmount, behavior: 'smooth' }));
  }

  // Card listeners (carousel)
  const carouselTrack = document.getElementById('carousel-track');
  if (carouselTrack) initCardListeners(carouselTrack);

  // Hero Scroll
  const heroScroll = document.querySelector('.hero__scroll');
  if (heroScroll) {
    heroScroll.style.cursor = 'pointer';
    heroScroll.addEventListener('click', () => {
      // Scroll down just 500px or to categories, not too much.
      const categories = document.getElementById('categories-section');
      if (categories) {
        categories.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.scrollBy({ top: 500, behavior: 'smooth' });
      }
    });
  }

  // Search functionality
  initHeroSearch();
}

function initHeroSearch() {
  const input = document.getElementById('hero-search');
  const dropdown = document.getElementById('search-dropdown');
  const searchBtn = document.getElementById('hero-search-btn');
  if (!input || !dropdown) return;

  let highlighted = -1;

  const doSearch = debounce((query) => {
    if (!query.trim()) { dropdown.classList.remove('open'); return; }
    const q = query.toLowerCase();
    const results = VENUES.filter(v =>
      v.name.toLowerCase().includes(q) ||
      v.category.toLowerCase().includes(q) ||
      v.neighborhood.toLowerCase().includes(q)
    ).slice(0, 6);

    if (!results.length) { dropdown.classList.remove('open'); return; }

    dropdown.innerHTML = results.map(v => `
      <div class="search-dropdown__item" data-id="${v.id}" role="option">
        <img src="${v.image}" alt="${v.name}" loading="lazy"
             onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 40 40%22%3E%3Crect fill=%22%23F5E6D3%22 width=%2240%22 height=%2240%22/%3E%3C/svg%3E'">
        <div>
          <div style="font-weight:600;font-size:0.9rem">${v.nameKu || v.name}</div>
          <div style="font-size:0.75rem;color:var(--color-text-muted)">${v.category} · ${v.neighborhood}</div>
        </div>
        <div style="margin-inline-start:auto;font-size:0.8rem;color:var(--color-star);display:flex;align-items:center;gap:4px;">
          <i data-lucide="star" fill="currentColor" style="width:12px;height:12px;"></i> ${v.rating}
        </div>
      </div>`).join('');

    if (window.lucide) window.lucide.createIcons({ root: dropdown });

    dropdown.classList.add('open');
    highlighted = -1;

    dropdown.querySelectorAll('.search-dropdown__item').forEach(item => {
      item.addEventListener('click', () => {
        window.location.hash = `#venue/${item.dataset.id}`;
        dropdown.classList.remove('open');
        input.value = '';
      });
    });
  }, 200);

  input.addEventListener('input', (e) => doSearch(e.target.value));
  input.addEventListener('keydown', (e) => {
    const items = dropdown.querySelectorAll('.search-dropdown__item');
    if (e.key === 'ArrowDown') { highlighted = Math.min(highlighted + 1, items.length - 1); }
    else if (e.key === 'ArrowUp') { highlighted = Math.max(highlighted - 1, 0); }
    else if (e.key === 'Enter') {
      if (highlighted >= 0) { items[highlighted].click(); return; }
      window.location.hash = `#browse`;
      dropdown.classList.remove('open');
    } else if (e.key === 'Escape') { dropdown.classList.remove('open'); }
    items.forEach((item, i) => item.classList.toggle('highlighted', i === highlighted));
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('#hero-search-box')) dropdown.classList.remove('open');
  });

  searchBtn?.addEventListener('click', () => {
    if (input.value.trim()) {
      window.location.hash = `#browse?q=${encodeURIComponent(input.value.trim())}`;
    }
  });
}
