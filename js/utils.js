// ============================================
//  ERBILEATS — Utility Functions
// ============================================

/** Render N filled/half/empty stars HTML */
export function renderStars(rating, size = '', interactive = false) {
  const cls = `stars ${size ? 'stars-' + size : ''} ${interactive ? 'star-interactive' : ''}`;
  let html = `<span class="${cls}" aria-label="${rating} out of 5 stars">`;
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      html += `<span class="star filled" data-val="${i}"><i data-lucide="star" fill="currentColor" style="width:1em;height:1em;"></i></span>`;
    } else if (rating >= i - 0.5) {
      html += `<span class="star half" data-val="${i}"><i data-lucide="star-half" fill="currentColor" style="width:1em;height:1em;"></i></span>`;
    } else {
      html += `<span class="star" data-val="${i}"><i data-lucide="star" style="width:1em;height:1em;"></i></span>`;
    }
  }
  html += `</span>`;
  return html;
}

/** Format number with commas */
export function formatNumber(n) {
  return n.toLocaleString();
}

/** Get today's day name */
export function todayName() {
  return ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'][new Date().getDay()];
}

/** Show a toast message */
export function showToast(msg, type = '') {
  let toast = document.getElementById('global-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'global-toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.className = `toast ${type ? 'toast-' + type : ''}`;
  requestAnimationFrame(() => toast.classList.add('show'));
  setTimeout(() => toast.classList.remove('show'), 3000);
}

/** Lazy-load images using IntersectionObserver */
export function initLazyImages(root = document) {
  const imgs = root.querySelectorAll('img[data-src]');
  if (!imgs.length) return;
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const img = e.target;
        img.src = img.dataset.src;
        img.classList.add('lazy');
        img.onload = () => img.classList.add('loaded');
        obs.unobserve(img);
      }
    });
  }, { rootMargin: '200px' });
  imgs.forEach(img => obs.observe(img));
}

/** Scroll-reveal observer */
export function initReveal(root = document) {
  const els = root.querySelectorAll('.reveal');
  if (!els.length) return;
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  els.forEach(el => obs.observe(el));
}

/** Debounce */
export function debounce(fn, ms = 250) {
  let t;
  return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), ms); };
}

/** Get/set localStorage JSON */
export function store(key, val) {
  if (val === undefined) {
    try { return JSON.parse(localStorage.getItem(key)) || []; } catch { return []; }
  }
  localStorage.setItem(key, JSON.stringify(val));
}

/** Calculate average rating from breakdown object */
export function calcAvgRating(breakdown) {
  const total = Object.values(breakdown).reduce((a, b) => a + b, 0);
  const sum = Object.entries(breakdown).reduce((a, [k, v]) => a + Number(k) * v, 0);
  return total ? (sum / total).toFixed(1) : '0.0';
}

/** Render rating breakdown bars */
export function renderRatingBars(breakdown) {
  const total = Object.values(breakdown).reduce((a, b) => a + b, 0);
  let html = '<div class="rating-breakdown">';
  for (let s = 5; s >= 1; s--) {
    const count = breakdown[s] || 0;
    const pct = total ? Math.round((count / total) * 100) : 0;
    html += `
      <div class="rating-bar">
        <span class="rating-bar__label">★ ${s}</span>
        <div class="rating-bar__track">
          <div class="rating-bar__fill" style="width:0%" data-width="${pct}%"></div>
        </div>
        <span class="rating-bar__count">${count}</span>
      </div>`;
  }
  html += '</div>';
  return html;
}

/** Animate rating bars (call after inserting into DOM) */
export function animateRatingBars(container) {
  setTimeout(() => {
    container.querySelectorAll('.rating-bar__fill').forEach(el => {
      el.style.width = el.dataset.width;
    });
  }, 150);
}
