// ============================================
//  ERBILEATS — Browse / Directory Page
// ============================================
import { VENUES, CATEGORIES, NEIGHBORHOODS } from '../data/venues.js';
import { renderVenueCard, initCardListeners } from '../components/card.js';
import { initLazyImages, initReveal } from '../utils.js';

export function renderBrowse(params = {}) {
  const { cat = 'all', hood = '', q = '' } = params;

  return `
  <div class="browse-page" id="browse-page">
    <!-- Header -->
    <div class="browse-header">
      <div class="container">
        <h1>چێشتخانە و کافێ لە هەولێر</h1>
        <p>گەڕان بەدوای زیاتر لە ${VENUES.length} باشترین شوێنەکانی خواردن لە گەڕەکاکانی هەولێر</p>
        <!-- Quick Category Pills -->
        <div style="display:flex;gap:var(--space-2);flex-wrap:wrap;margin-top:var(--space-4);overflow-x:auto;padding-bottom:4px;">
          ${CATEGORIES.map(c => `
            <button class="filter-pill ${(cat===c.slug||(!cat&&c.slug==='all'))?'active':''}"
                    data-cat="${c.slug}" id="pill-${c.slug}" aria-pressed="${cat===c.slug}">
              ${c.icon} ${c.name}
            </button>`).join('')}
        </div>
      </div>
    </div>

    <div class="container">
      <div class="browse-body" id="browse-body">
        <!-- Sidebar -->
        <aside class="filter-sidebar" id="filter-sidebar" aria-label="Filters">
          <div class="filter-sidebar__header">
            <h2 class="filter-sidebar__title">فلتەرەکان</h2>
            <button class="btn btn-ghost btn-sm" id="clear-filters-btn">سڕینەوەی هەمووی</button>
          </div>

          <!-- Sort -->
          <div class="filter-section">
            <div class="filter-section__title">ڕیزکردن بەپێی</div>
            <select class="sort-select" id="sort-select" aria-label="Sort venues">
              <option value="rating">بەرزترین هەڵسەنگاندن</option>
              <option value="reviews">زۆرترین پێداچوونەوە</option>
              <option value="price-asc">نرخ: کەم بۆ زۆر</option>
              <option value="price-desc">نرخ: زۆر بۆ کەم</option>
              <option value="name">ناو: ئەلفوبێ</option>
            </select>
          </div>

          <!-- Category -->
          <div class="filter-section">
            <div class="filter-section__title">جۆرەکان</div>
            <div class="filter-options">
              ${CATEGORIES.filter(c=>c.slug!=='all').map(c=>`
                <label class="filter-option" for="filter-cat-${c.slug}">
                  <input type="checkbox" id="filter-cat-${c.slug}" data-filter-cat="${c.slug}"
                         ${cat===c.slug?'checked':''}>
                  <span>${c.icon} ${c.name}</span>
                  <span class="filter-option__count">${c.count}</span>
                </label>`).join('')}
            </div>
          </div>

          <!-- Neighborhoods -->
          <div class="filter-section">
            <div class="filter-section__title">گەڕەک</div>
            <div class="filter-options">
              ${NEIGHBORHOODS.map(n=>`
                <label class="filter-option" for="filter-hood-${n.slug}">
                  <input type="checkbox" id="filter-hood-${n.slug}" data-filter-hood="${n.slug}"
                         ${hood===n.slug?'checked':''}>
                  <span>📍 ${n.name}</span>
                  <span class="filter-option__count">${n.count}</span>
                </label>`).join('')}
            </div>
          </div>

          <!-- Price -->
          <div class="filter-section">
            <div class="filter-section__title">مەودای نرخ</div>
            <div class="price-filter">
              ${['$','$$','$$$','$$$$'].map(p=>`
                <button class="price-btn" data-price="${p}" aria-label="Price ${p}">${p}</button>`).join('')}
            </div>
          </div>

          <!-- Min Rating -->
          <div class="filter-section">
            <div class="filter-section__title">کەمترین هەڵسەنگاندن</div>
            <div class="filter-options">
              ${[4.5,4.0,3.5,3.0].map(r=>`
                <label class="filter-option" for="filter-rating-${r}">
                  <input type="radio" name="min-rating" id="filter-rating-${r}" data-filter-rating="${r}" value="${r}">
                  <span>★ ${r}+</span>
                </label>`).join('')}
            </div>
          </div>

          <!-- Open Now -->
          <div class="filter-section">
            <div class="filter-section__title">بەردەستبوون</div>
            <label class="filter-option" for="filter-open">
              <input type="checkbox" id="filter-open" data-filter-open="true">
              <span>● ئێستا کراوەیە</span>
            </label>
          </div>
        </aside>

        <!-- Results -->
        <main id="results-main">
          <!-- Mobile filter toggle -->
          <div style="display:none;margin-bottom:var(--space-4)" id="mobile-filter-bar">
            <button class="btn btn-secondary btn-sm" id="toggle-filters-btn">⚙️ Filters</button>
          </div>
          <!-- Active Filters -->
          <div class="active-filters" id="active-filters"></div>
          <!-- Results Header -->
          <div class="results-header">
            <p class="results-count" id="results-count">دەردەکەوێت <strong>0</strong> شوێن</p>
          </div>
          <div class="results-grid" id="results-grid"></div>
          <div id="no-results" class="hidden" style="text-align:center;padding:var(--space-16) 0">
            <div style="font-size:4rem;margin-bottom:var(--space-4)">🍽️</div>
            <h3 style="font-family:var(--font-heading);margin-bottom:var(--space-3)">هیچ شوێنێک نەدۆزرایەوە</h3>
            <p style="color:var(--color-text-secondary)">هەوڵبدە فلتەرەکانت بگۆڕیت یان لە ناوچەیەکی تر بگەڕێ</p>
            <button class="btn btn-primary" style="margin-top:var(--space-5)" id="reset-all-btn">سڕینەوەی فلتەرەکان</button>
          </div>
        </main>
      </div>
    </div>
  </div>`;
}

export function initBrowse(params = {}) {
  let state = {
    cats: params.cat && params.cat !== 'all' ? [params.cat] : [],
    hoods: params.hood ? [params.hood] : [],
    prices: [],
    minRating: 0,
    openOnly: false,
    sort: 'rating',
    query: params.q || ''
  };

  function getFiltered() {
    let results = [...VENUES];
    if (state.query) {
      const q = state.query.toLowerCase();
      results = results.filter(v =>
        v.name.toLowerCase().includes(q) ||
        v.category.toLowerCase().includes(q) ||
        v.neighborhood.toLowerCase().includes(q)
      );
    }
    if (state.cats.length)    results = results.filter(v => state.cats.includes(v.categorySlug));
    if (state.hoods.length)   results = results.filter(v => state.hoods.includes(v.neighborhood.toLowerCase().replace(/ /g,'-')));
    if (state.prices.length)  results = results.filter(v => state.prices.includes(v.price));
    if (state.minRating > 0)  results = results.filter(v => v.rating >= state.minRating);
    if (state.openOnly)       results = results.filter(v => v.isOpen);

    switch (state.sort) {
      case 'reviews':    results.sort((a,b) => b.reviewCount - a.reviewCount); break;
      case 'price-asc':  results.sort((a,b) => a.priceNum - b.priceNum); break;
      case 'price-desc': results.sort((a,b) => b.priceNum - a.priceNum); break;
      case 'name':       results.sort((a,b) => a.name.localeCompare(b.name)); break;
      default:           results.sort((a,b) => b.rating - a.rating);
    }
    return results;
  }

  function renderResults() {
    const results = getFiltered();
    const grid = document.getElementById('results-grid');
    const noResults = document.getElementById('no-results');
    const count = document.getElementById('results-count');

    count.innerHTML = `دەردەکەوێت <strong>${results.length}</strong> شوێن`;

    if (!results.length) {
      grid.innerHTML = '';
      grid.classList.add('hidden');
      noResults.classList.remove('hidden');
    } else {
      grid.classList.remove('hidden');
      noResults.classList.add('hidden');
      grid.innerHTML = results.map(v => renderVenueCard(v, { showBadge: true })).join('');
      initCardListeners(grid);
      initLazyImages(grid);
      initReveal(grid);
    }
    renderActivePills();
  }

  function renderActivePills() {
    const bar = document.getElementById('active-filters');
    let pills = [];
    state.cats.forEach(c => {
      const cat = ({ traditional:'Traditional Kurdish', finedining:'Fine Dining', coffee:'Specialty Coffee', shisha:'Shisha Lounges', fastfood:'Fast Food' })[c] || c;
      pills.push(`<button class="filter-pill active" data-remove-cat="${c}">${cat} ✕</button>`);
    });
    state.hoods.forEach(h => {
      pills.push(`<button class="filter-pill active" data-remove-hood="${h}">${h.replace(/-/g,' ')} ✕</button>`);
    });
    state.prices.forEach(p => pills.push(`<button class="filter-pill active" data-remove-price="${p}">${p} ✕</button>`));
    if (state.minRating) pills.push(`<button class="filter-pill active" data-remove-rating>★ ${state.minRating}+ ✕</button>`);
    if (state.openOnly)  pills.push(`<button class="filter-pill active" data-remove-open>Open Now ✕</button>`);
    if (state.query)     pills.push(`<button class="filter-pill active" data-remove-q>"${state.query}" ✕</button>`);

    bar.innerHTML = pills.length
      ? `<span class="active-filters__label">Active:</span>${pills.join('')}<button class="btn btn-ghost btn-sm" id="clear-all-pills">Clear All</button>`
      : '';

    bar.querySelectorAll('[data-remove-cat]').forEach(b => b.addEventListener('click', () => { state.cats = state.cats.filter(c=>c!==b.dataset.removeCat); syncCheckboxes(); renderResults(); }));
    bar.querySelectorAll('[data-remove-hood]').forEach(b => b.addEventListener('click', () => { state.hoods = state.hoods.filter(h=>h!==b.dataset.removeHood); syncCheckboxes(); renderResults(); }));
    bar.querySelectorAll('[data-remove-price]').forEach(b => b.addEventListener('click', () => { state.prices = state.prices.filter(p=>p!==b.dataset.removePrice); syncCheckboxes(); renderResults(); }));
    bar.querySelector('[data-remove-rating]')?.addEventListener('click', () => { state.minRating=0; syncCheckboxes(); renderResults(); });
    bar.querySelector('[data-remove-open]')?.addEventListener('click', () => { state.openOnly=false; syncCheckboxes(); renderResults(); });
    bar.querySelector('[data-remove-q]')?.addEventListener('click', () => { state.query=''; renderResults(); });
    bar.querySelector('#clear-all-pills')?.addEventListener('click', clearAllFilters);
  }

  function syncCheckboxes() {
    document.querySelectorAll('[data-filter-cat]').forEach(cb => { cb.checked = state.cats.includes(cb.dataset.filterCat); });
    document.querySelectorAll('[data-filter-hood]').forEach(cb => { cb.checked = state.hoods.includes(cb.dataset.filterHood); });
    document.querySelectorAll('[data-price]').forEach(b => b.classList.toggle('active', state.prices.includes(b.dataset.price)));
    document.querySelectorAll('[data-filter-rating]').forEach(r => { r.checked = Number(r.value) === state.minRating; });
    const openCb = document.getElementById('filter-open');
    if (openCb) openCb.checked = state.openOnly;
    document.querySelectorAll('.filter-pill[data-cat]').forEach(p => p.classList.toggle('active', state.cats.includes(p.dataset.cat)||(!state.cats.length&&p.dataset.cat==='all')));
  }

  function clearAllFilters() {
    state = { cats:[], hoods:[], prices:[], minRating:0, openOnly:false, sort:state.sort, query:'' };
    syncCheckboxes();
    renderResults();
  }

  // Wire category pills (top)
  document.querySelectorAll('.filter-pill[data-cat]').forEach(pill => {
    pill.addEventListener('click', () => {
      const c = pill.dataset.cat;
      if (c === 'all') { state.cats = []; }
      else {
        if (state.cats.includes(c)) state.cats = state.cats.filter(x=>x!==c);
        else state.cats = [c];
      }
      syncCheckboxes(); renderResults();
    });
  });

  // Wire checkboxes
  document.querySelectorAll('[data-filter-cat]').forEach(cb => {
    cb.addEventListener('change', () => {
      const c = cb.dataset.filterCat;
      if (cb.checked) { if (!state.cats.includes(c)) state.cats.push(c); }
      else { state.cats = state.cats.filter(x=>x!==c); }
      syncCheckboxes(); renderResults();
    });
  });

  document.querySelectorAll('[data-filter-hood]').forEach(cb => {
    cb.addEventListener('change', () => {
      const h = cb.dataset.filterHood;
      if (cb.checked) { if (!state.hoods.includes(h)) state.hoods.push(h); }
      else { state.hoods = state.hoods.filter(x=>x!==h); }
      renderResults();
    });
  });

  document.querySelectorAll('[data-price]').forEach(btn => {
    btn.addEventListener('click', () => {
      const p = btn.dataset.price;
      if (state.prices.includes(p)) state.prices = state.prices.filter(x=>x!==p);
      else state.prices.push(p);
      btn.classList.toggle('active', state.prices.includes(p));
      renderResults();
    });
  });

  document.querySelectorAll('[data-filter-rating]').forEach(r => {
    r.addEventListener('change', () => {
      state.minRating = Number(r.value);
      renderResults();
    });
  });

  document.getElementById('filter-open')?.addEventListener('change', (e) => {
    state.openOnly = e.target.checked;
    renderResults();
  });

  document.getElementById('sort-select')?.addEventListener('change', (e) => {
    state.sort = e.target.value;
    renderResults();
  });

  document.getElementById('clear-filters-btn')?.addEventListener('click', clearAllFilters);
  document.getElementById('reset-all-btn')?.addEventListener('click', clearAllFilters);

  // Mobile filter toggle
  const toggleBtn = document.getElementById('toggle-filters-btn');
  const mobileBar = document.getElementById('mobile-filter-bar');
  const sidebar = document.getElementById('filter-sidebar');
  if (window.innerWidth <= 768 && mobileBar) {
    mobileBar.style.display = 'block';
    toggleBtn?.addEventListener('click', () => {
      sidebar?.classList.toggle('open');
      toggleBtn.textContent = sidebar?.classList.contains('open') ? '✕ Close Filters' : '⚙️ Filters';
    });
  }

  // Sync initial state from params and render
  syncCheckboxes();
  renderResults();
}
