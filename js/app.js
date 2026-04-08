// ============================================
//  ERBILEATS — Main App Router
// ============================================
import { renderNavbar, initNavbar } from './components/navbar.js';
import { renderFooter } from './components/footer.js';
import { renderHome, initHome } from './pages/home.js';
import { renderBrowse, initBrowse } from './pages/browse.js';
import { renderVenue, initVenue } from './pages/venue.js';
import { renderProfile, initProfile } from './pages/profile.js';
import { renderSettings, initSettings } from './pages/settings.js';
import { renderMenu, initMenu } from './pages/menu.js';

const app = document.getElementById('app');

function parseHash(hash) {
  const [path, qs] = hash.replace('#', '').split('?');
  const params = {};
  if (qs) qs.split('&').forEach(p => { const [k,v]=p.split('='); params[k]=decodeURIComponent(v||''); });
  return { path, params };
}

function setNavbarActive(page) {
  document.querySelectorAll('.navbar__link').forEach(link => {
    link.classList.remove('active');
    if ((page === 'home' && link.id === 'nav-home') ||
        (page === 'browse' && link.id === 'nav-browse') ||
        (page === 'profile' && link.id === 'nav-profile') ||
        (page === 'settings' && link.id === 'nav-settings')) {
      link.classList.add('active');
    }
  });
}

function setNavbarStyle(page) {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  if (page === 'home') {
    navbar.classList.add('transparent');
    navbar.classList.remove('scrolled');
  } else {
    navbar.classList.remove('transparent');
    navbar.classList.add('scrolled');
  }
}

let currentPage = '';

function route() {
  const raw = window.location.hash || '#home';
  const { path, params } = parseHash(raw);

  // Don't re-render same page for home (just scroll up)
  if (path === currentPage && path === 'home') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }

  window.scrollTo({ top: 0, behavior: 'instant' });

  // Navbar is always fixed — only update content area
  const content = document.getElementById('page-content');
  if (!content) return;

  currentPage = path;

  if (path === 'home' || path === '') {
    document.title = 'ErbilEats — Discover the Best Tastes of Erbil';
    content.innerHTML = renderHome();
    setNavbarActive('home');
    setNavbarStyle('home');
    initHome();

  } else if (path === 'browse') {
    document.title = 'Browse Restaurants & Cafés — ErbilEats';
    content.innerHTML = renderBrowse(params);
    setNavbarActive('browse');
    setNavbarStyle('browse');
    initBrowse(params);

  } else if (path.startsWith('venue/')) {
    const id = path.split('/')[1];
    const venue = window.__VENUES__?.find(v => v.id === parseInt(id));
    document.title = venue ? `${venue.nameKu} — ErbilEats` : 'شوێن — ErbilEats';
    content.innerHTML = renderVenue(id);
    setNavbarActive('');
    setNavbarStyle('venue');
    initVenue(id);

  } else if (path.startsWith('menu/')) {
    const id = path.split('/')[1];
    const venue = window.__VENUES__?.find(v => v.id === parseInt(id));
    document.title = venue ? `${venue.nameKu} - Menu` : 'مینیۆ — ErbilEats';
    content.innerHTML = renderMenu(id);
    setNavbarActive('');
    setNavbarStyle('venue'); // Menu shares the same solid top hero style
    initMenu(id);

  } else if (path === 'profile') {
    document.title = 'پڕۆفایل — ErbilEats';
    content.innerHTML = renderProfile();
    setNavbarActive('profile');
    setNavbarStyle('profile');
    initProfile();

  } else if (path === 'settings') {
    document.title = 'ڕێکخستنەکان — ErbilEats';
    content.innerHTML = renderSettings();
    setNavbarActive('settings');
    setNavbarStyle('settings');
    initSettings();

  } else {
    // Fallback
    content.innerHTML = `
      <div style="min-height:80vh;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:1rem;padding-top:5rem">
        <div style="font-size:5rem">🍽️</div>
        <h2 style="font-family:var(--font-heading)">پەڕە نەدۆزرایەوە</h2>
        <a href="#home" class="btn btn-primary">گەڕانەوە بۆ سەرەتا</a>
      </div>`;
  }

  // Re-init navbar scroll logic
  window.dispatchEvent(new Event('scroll'));

  // Init Lucide icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // 3D Tilt effect for all venue cards
  setTimeout(() => initCardTilt(), 100);
}

/** Premium 3D Tilt effect — subtle perspective shift on mouse move */
function initCardTilt() {
  document.querySelectorAll('.venue-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);
      const tiltX = dy * -5;   // max 5deg tilt
      const tiltY = dx * 5;
      card.style.transform = `translateY(-10px) scale(1.012) perspective(800px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}


function init() {
  // Import venues for title lookup
  import('./data/venues.js').then(({ VENUES }) => {
    window.__VENUES__ = VENUES;
  });

  // Inject structure
  app.innerHTML = `
    ${renderNavbar()}
    <div id="page-content"></div>
    ${renderFooter()}
  `;

  // Init navbar
  initNavbar();

  // Listen for route changes
  window.addEventListener('hashchange', route);
  route();
}

// Start
init();
