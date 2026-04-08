// ============================================================
//  ERBILEATS MAP FEATURE — map.js (Leaflet + OpenStreetMap)
//  100% Free — No API Key — No Account — Works Immediately
//  Dark CartoDB tiles | Custom HTML markers | RTL Kurdish UI
// ============================================================

'use strict';

// ── Category → Emoji ──────────────────────────────────────
const CAT_EMOJI = {
  'Traditional Kurdish': '🍢',
  'Fine Dining':         '🍷',
  'Specialty Coffee':    '☕',
  'Shisha Lounge':       '💨',
  'Fast Food':           '🍔',
};

const CAT_COLOR = {
  'Traditional Kurdish': '#6b3a2a',
  'Fine Dining':         '#2c2c4a',
  'Specialty Coffee':    '#4a3200',
  'Shisha Lounge':       '#1a3a2a',
  'Fast Food':           '#3a2a10',
};

// ── State ─────────────────────────────────────────────────
let mapInstance   = null;
let locations     = [];
let markers       = [];      // { location, leafletMarker, markerEl }
let activeIdx     = null;
let activeFilter  = 'all';

// ── DOM Helper ────────────────────────────────────────────
const $ = (id) => document.getElementById(id);

// ── BOOT ──────────────────────────────────────────────────
(async function boot() {
  try {
    const res = await fetch('./locations.json');
    locations = await res.json();
  } catch (e) {
    console.error('[ErbilEats] Failed to load locations.json', e);
    return;
  }

  initMap();
  renderSidebarList(locations);
  setupEvents();

  // Hide loading spinner
  const loading = $('map-loading');
  if (loading) {
    loading.classList.add('hidden');
    setTimeout(() => loading.remove(), 600);
  }
})();

// ── INIT MAP ──────────────────────────────────────────────
function initMap() {
  // Create Leaflet map — centered on Erbil Citadel
  mapInstance = L.map('google-map', {
    center: [36.1910, 44.0100],
    zoom: 14,
    minZoom: 11,
    maxZoom: 19,
    zoomControl: false,          // we'll add our own positioned control
    attributionControl: true,
  });

  // Add zoom control bottom-left (LTR position works fine)
  L.control.zoom({ position: 'bottomleft' }).addTo(mapInstance);

  // ── standard OSM tiles (Blazing fast!) ──
  L.tileLayer(
    'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 19
    }
  ).addTo(mapInstance);

  // Place all markers
  placeMarkers();

  // Click on map → close card
  mapInstance.on('click', closeCard);
}

// ── PLACE MARKERS ─────────────────────────────────────────
function placeMarkers() {
  locations.forEach((loc, idx) => {
    const markerEl = buildMarkerElement(loc, idx);

    // Leaflet DivIcon wraps our custom HTML
    const icon = L.divIcon({
      html: markerEl.outerHTML,
      className: '',         // remove default white box
      iconAnchor: [22, 48],  // tip of pin points to coords
      iconSize:   [44, 48],
      popupAnchor: [0, -50],
    });

    const leafletMarker = L.marker(
      [loc.coords.lat, loc.coords.lng],
      { icon, title: loc.name, alt: loc.nameKu, zIndexOffset: idx * 10 }
    ).addTo(mapInstance);

    // Click opens the card
    leafletMarker.on('click', (e) => {
      L.DomEvent.stopPropagation(e);
      openCard(idx);
    });

    markers.push({ location: loc, leafletMarker, markerEl: null });
  });
}

// ── BUILD MARKER HTML ELEMENT ─────────────────────────────
function buildMarkerElement(loc, idx) {
  const emoji = CAT_EMOJI[loc.category] || '📍';
  const color = CAT_COLOR[loc.category] || '#2d6a4f';

  const div = document.createElement('div');
  div.className = 'custom-marker';
  div.dataset.idx = idx;
  div.innerHTML = `
    <div class="marker-pin" style="background:${color}">
      <span class="marker-emoji">${emoji}</span>
    </div>
    <div class="marker-label">${loc.nameKu}</div>
  `;
  return div;
}

// ── RENDER SIDEBAR ─────────────────────────────────────────
function renderSidebarList(locs) {
  const list = $('venue-list');
  list.innerHTML = '';

  locs.forEach((loc) => {
    const realIdx = locations.indexOf(loc);
    const li = document.createElement('li');
    li.className = 'venue-item';
    li.dataset.idx = realIdx;
    li.setAttribute('tabindex', '0');
    li.setAttribute('aria-label', loc.nameKu);
    li.innerHTML = `
      <img class="venue-item-img" src="${loc.imageURL}" alt="${loc.name}" loading="lazy">
      <div class="venue-item-info">
        <span class="venue-item-name-ku">${loc.nameKu}</span>
        <span class="venue-item-name-en">${loc.name}</span>
        <div class="venue-item-meta">
          <span class="venue-item-rating">${loc.rating.toFixed(1)}</span>
          <span class="venue-item-cat">${loc.category}</span>
          <span class="venue-item-open ${loc.isOpen ? 'open' : 'closed'}">
            ${loc.isOpen ? 'کراوەیە' : 'داخراوە'}
          </span>
        </div>
      </div>
    `;

    li.addEventListener('click', () => openCard(realIdx));
    li.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') openCard(realIdx); });
    list.appendChild(li);
  });

  updateCount(locs.length);
}

// ── OPEN INFO CARD ─────────────────────────────────────────
function openCard(idx) {
  // Deactivate previous
  if (activeIdx !== null && activeIdx !== idx) {
    deactivateSidebarItem(activeIdx);
  }

  activeIdx = idx;
  activateSidebarItem(idx);

  // Pan map to marker
  const loc = locations[idx];
  if (mapInstance) {
    mapInstance.flyTo([loc.coords.lat, loc.coords.lng], 15, {
      animate: true, duration: 0.6
    });
  }

  populateCard(loc);

  // Show overlay
  const overlay = $('card-overlay');
  overlay.classList.add('visible');
  overlay.setAttribute('aria-hidden', 'false');

  // Focus close button
  setTimeout(() => $('card-close')?.focus(), 380);
}

// ── POPULATE CARD ──────────────────────────────────────────
function populateCard(loc) {
  $('card-image').src        = loc.imageURL;
  $('card-image').alt        = loc.name;
  $('card-name-ku').textContent  = loc.nameKu;
  $('card-name-en').textContent  = loc.name;
  $('card-category').textContent = loc.category;
  $('card-address').textContent  = loc.address;
  $('card-neighborhood').textContent = loc.neighborhood;
  $('card-desc').textContent     = loc.description;

  // Open/price badges
  const openBadge = $('card-open-badge');
  openBadge.textContent = loc.isOpen ? 'کراوەیە' : 'داخراوە';
  openBadge.className   = `badge badge-open${loc.isOpen ? '' : ' closed-badge'}`;
  $('card-price-badge').textContent = loc.price;

  // Phone
  const phoneEl = $('card-phone');
  phoneEl.textContent = loc.phone;
  phoneEl.href = `tel:${loc.phone.replace(/\s/g, '')}`;

  // Stars
  renderStars($('card-stars'), loc.rating);
  $('card-rating-value').textContent = loc.rating.toFixed(1);
  $('card-rating-count').textContent = `(${toKu(loc.reviewCount)} هەڵسەنگاندن)`;

  // Tags
  $('card-tags').innerHTML = (loc.tags || [])
    .map(t => `<span class="tag-chip">${t}</span>`).join('');

  // Buttons
  $('card-menu-btn').href = loc.menuURL || '#';
  $('card-directions-btn').href =
    `https://www.google.com/maps/dir/?api=1&destination=${loc.coords.lat},${loc.coords.lng}`;
  $('card-phone-btn').onclick =
    () => window.location.href = `tel:${loc.phone.replace(/\s/g, '')}`;
}

// ── CLOSE CARD ─────────────────────────────────────────────
function closeCard() {
  const overlay = $('card-overlay');
  if (!overlay.classList.contains('visible')) return;
  overlay.classList.remove('visible');
  overlay.setAttribute('aria-hidden', 'true');
  if (activeIdx !== null) { deactivateSidebarItem(activeIdx); activeIdx = null; }
}

// ── STAR RATING ────────────────────────────────────────────
function renderStars(container, rating) {
  container.innerHTML = '';
  for (let i = 1; i <= 5; i++) {
    const s = document.createElement('span');
    s.className = 'star';
    if (i <= Math.floor(rating))    { s.classList.add('filled'); s.textContent = '★'; }
    else if (i - rating < 1)        { s.classList.add('half');   s.textContent = '½'; }
    else                             { s.textContent = '☆'; }
    container.appendChild(s);
  }
}

// ── SIDEBAR ACTIVE STATES ──────────────────────────────────
function activateSidebarItem(idx) {
  document.querySelectorAll('.venue-item').forEach(el =>
    el.classList.toggle('active', parseInt(el.dataset.idx) === idx)
  );
  document.querySelector(`.venue-item[data-idx="${idx}"]`)
    ?.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
}

function deactivateSidebarItem(idx) {
  document.querySelector(`.venue-item[data-idx="${idx}"]`)?.classList.remove('active');
}

// ── FILTER ─────────────────────────────────────────────────
function applyFilter(category) {
  activeFilter = category;

  document.querySelectorAll('.filter-btn').forEach(btn =>
    btn.classList.toggle('active', btn.dataset.filter === category)
  );

  const filtered = category === 'all'
    ? locations
    : locations.filter(l => l.category === category);

  // Show/hide markers on map
  markers.forEach((m, i) => {
    const visible = filtered.includes(m.location);
    if (visible) {
      if (!mapInstance.hasLayer(m.leafletMarker)) m.leafletMarker.addTo(mapInstance);
    } else {
      if (mapInstance.hasLayer(m.leafletMarker)) m.leafletMarker.remove();
    }
  });

  renderSidebarList(filtered);

  // Close card if active marker is now hidden
  if (activeIdx !== null && !filtered.includes(locations[activeIdx])) closeCard();
}

// ── GEOLOCATION ─────────────────────────────────────────────
function locateUser() {
  if (!navigator.geolocation) return;
  navigator.geolocation.getCurrentPosition(
    ({ coords }) => mapInstance?.setView([coords.latitude, coords.longitude], 16),
    err => console.warn('[ErbilEats] Geolocation error:', err)
  );
}

// ── SIDEBAR TOGGLE ──────────────────────────────────────────
function toggleSidebar() {
  const sidebar = document.querySelector('.venue-sidebar');
  if (!sidebar) return;
  if (window.innerWidth < 768) sidebar.classList.toggle('mobile-open');
  else sidebar.classList.toggle('collapsed');
}

// ── ARABIC-INDIC NUMERALS (Kurdish) ────────────────────────
function toKu(n) {
  return String(n).replace(/[0-9]/g, d => '٠١٢٣٤٥٦٧٨٩'[d]);
}

function updateCount(n) {
  const el = $('sidebar-count');
  if (el) el.textContent = toKu(n) + ' شوێن';
}

// ── EVENTS ─────────────────────────────────────────────────
function setupEvents() {
  $('card-close')?.addEventListener('click', closeCard);

  $('card-overlay')?.addEventListener('click', e => {
    if (e.target === $('card-overlay')) closeCard();
  });

  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeCard(); });

  $('btn-list-toggle')?.addEventListener('click', toggleSidebar);
  $('btn-locate')?.addEventListener('click', locateUser);

  document.querySelectorAll('.filter-btn').forEach(btn =>
    btn.addEventListener('click', () => applyFilter(btn.dataset.filter))
  );
}

// ── RESIZE ─────────────────────────────────────────────────
window.addEventListener('resize', () => {
  if (window.innerWidth >= 768)
    document.querySelector('.venue-sidebar')?.classList.remove('mobile-open');
  mapInstance?.invalidateSize();
});
