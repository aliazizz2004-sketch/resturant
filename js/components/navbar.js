// ============================================
//  ERBILEATS — Navbar Component
// ============================================
export function renderNavbar(activePage = 'home') {
  return `
  <nav class="navbar transparent" id="navbar" role="navigation" aria-label="Main navigation">
    <div class="container">
      <a href="#home" class="navbar__logo" id="nav-logo" aria-label="ErbilEats home">
        <div class="navbar__logo-icon">🍽️</div>
        <span class="navbar__logo-text">Erbil<span>Eats</span></span>
      </a>

      <div class="navbar__nav" role="menubar">
        <a href="#home"   class="navbar__link ${activePage==='home'?'active':''}" role="menuitem" id="nav-home">سەرەتا</a>
        <a href="#browse" class="navbar__link ${activePage==='browse'?'active':''}" role="menuitem" id="nav-browse">گەڕان</a>
        <a href="#profile" class="navbar__link ${activePage==='profile'?'active':''}" role="menuitem" id="nav-profile">پڕۆفایل</a>
        <a href="#settings" class="navbar__link ${activePage==='settings'?'active':''}" role="menuitem" id="nav-settings">ڕێکخستنەکان</a>
      </div>

      <div class="navbar__actions">
        <!-- New Map Button -->
        <a href="map-feature/index.html" class="navbar__search-btn btn-icon" aria-label="نەخشە" title="نەخشەی شوێنەکان" style="text-decoration:none; color:inherit;">
          <i data-lucide="map-pinned"></i>
        </a>
        <button class="navbar__search-btn btn-icon" id="nav-dark-btn" aria-label="Dark mode" title="Dark mode" style="font-size: 1.2rem; cursor: pointer;">
          <i data-lucide="moon"></i>
        </button>
        <button class="navbar__search-btn btn-icon" id="nav-search-btn" aria-label="Search venues" title="Search">
          <i data-lucide="search"></i>
        </button>
        <a href="#browse" class="btn btn-primary btn-sm hide-mobile" id="nav-cta-btn">گەڕان بەدوای شوێنەکان</a>
        <button class="navbar__hamburger" id="hamburger-btn" aria-label="Open menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </nav>

  <!-- Mobile Drawer -->
  <div class="mobile-drawer" id="mobile-drawer" role="dialog" aria-modal="true" aria-label="Mobile navigation">
    <div class="mobile-drawer__overlay" id="drawer-overlay"></div>
    <div class="mobile-drawer__panel">
      <button class="modal__close mobile-drawer__close" id="drawer-close-btn" aria-label="Close menu">✕</button>
      <div style="margin-bottom:1.5rem; padding-bottom:1rem; border-bottom:1px solid var(--color-border-light);">
        <div style="font-family:var(--font-heading);font-size:1.5rem;font-weight:700;color:var(--neutral-900)">Erbil<span style="color:var(--green-500)">Eats</span></div>
        <div style="font-size:0.75rem;color:var(--color-text-muted)">باشترینەکانی هەولێر بدۆزەرەوە</div>
      </div>
      <a href="#home"   class="drawer-link" id="drawer-home" style="display:flex;align-items:center;gap:8px;"><i data-lucide="home" style="width:20px;height:20px;"></i> سەرەتا</a>
      <!-- New Mobile Map Link -->
      <a href="map-feature/index.html" class="drawer-link" id="drawer-map-mobile" style="display:flex;align-items:center;gap:8px;color:var(--green-500)"><i data-lucide="map-pinned" style="width:20px;height:20px;"></i> نەخشەی شوێنەکان</a>
      <a href="#browse" class="drawer-link" id="drawer-browse" style="display:flex;align-items:center;gap:8px;"><i data-lucide="layout-grid" style="width:20px;height:20px;"></i> گەڕان بەسەر هەموویان</a>
      <a href="#browse?cat=traditional" class="drawer-link" id="drawer-kurdish" style="display:flex;align-items:center;gap:8px;"><i data-lucide="utensils" style="width:20px;height:20px;"></i> خواردنی کوردی</a>
      <a href="#browse?cat=coffee" class="drawer-link" id="drawer-cafes" style="display:flex;align-items:center;gap:8px;"><i data-lucide="coffee" style="width:20px;height:20px;"></i> کافێیەکان</a>
      <a href="#profile" class="drawer-link" id="drawer-profile" style="display:flex;align-items:center;gap:8px;"><i data-lucide="user" style="width:20px;height:20px;"></i> پڕۆفایل</a>
      <a href="#settings" class="drawer-link" id="drawer-settings" style="display:flex;align-items:center;gap:8px;"><i data-lucide="settings" style="width:20px;height:20px;"></i> ڕێکخستنەکان</a>
    </div>
  </div>

  <!-- Global Search Overlay -->
  <div class="global-search-overlay" id="global-search-overlay" role="dialog" aria-modal="true">
    <div class="global-search-container">
      <button class="global-search-close modal__close" style="color:white" id="global-search-close">✕</button>
      <div class="search-box">
        <span class="search-box__icon"><i data-lucide="search"></i></span>
        <input type="search" class="search-box__input" id="global-search-input" placeholder="گەڕان بەدوای چێشتخانە و کافێ..." autocomplete="off">
        <button class="btn btn-primary btn-sm search-box__btn" id="global-search-submit">گەڕان</button>
      </div>
    </div>
  </div>`;
}

export function initNavbar() {
  const navbar  = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger-btn');
  const drawer   = document.getElementById('mobile-drawer');
  const drawerClose = document.getElementById('drawer-close-btn');
  const overlay  = document.getElementById('drawer-overlay');

  // Scroll behavior
  function onScroll() {
    const isHomePage = window.location.hash === '' || window.location.hash.startsWith('#home');
    if (window.scrollY > 60) {
      navbar.classList.remove('transparent');
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
      if (isHomePage) {
        navbar.classList.add('transparent');
      } else {
        navbar.classList.remove('transparent');
      }
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Hamburger
  function openDrawer() {
    drawer.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }
  function closeDrawer() {
    drawer.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  hamburger?.addEventListener('click', openDrawer);
  drawerClose?.addEventListener('click', closeDrawer);
  overlay?.addEventListener('click', closeDrawer);

  // Close drawer on link click
  drawer?.querySelectorAll('.drawer-link').forEach(a => {
    a.addEventListener('click', closeDrawer);
  });

  // Search btn
  const globalSearchOverlay = document.getElementById('global-search-overlay');
  const globalSearchInput = document.getElementById('global-search-input');
  
  document.getElementById('nav-search-btn')?.addEventListener('click', () => {
    globalSearchOverlay.classList.add('open');
    setTimeout(() => globalSearchInput?.focus(), 100);
  });

  document.getElementById('global-search-close')?.addEventListener('click', () => {
    globalSearchOverlay.classList.remove('open');
  });

  document.getElementById('global-search-submit')?.addEventListener('click', () => {
    if (globalSearchInput?.value.trim()) {
      window.location.hash = `#browse?q=${encodeURIComponent(globalSearchInput.value.trim())}`;
      globalSearchOverlay.classList.remove('open');
    }
  });

  globalSearchInput?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && globalSearchInput.value.trim()) {
      window.location.hash = `#browse?q=${encodeURIComponent(globalSearchInput.value.trim())}`;
      globalSearchOverlay.classList.remove('open');
    }
    if (e.key === 'Escape') {
      globalSearchOverlay.classList.remove('open');
    }
  });

  // Dark Mode Toggle
  document.getElementById('nav-dark-btn')?.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    document.getElementById('nav-dark-btn').innerHTML = isDark ? '<i data-lucide="sun"></i>' : '<i data-lucide="moon"></i>';
    if(window.lucide) window.lucide.createIcons();
    const settingsToggle = document.getElementById('dark-mode-toggle');
    if(settingsToggle) settingsToggle.checked = isDark;
  });
}
