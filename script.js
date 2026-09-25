/* ==========================================================================
   HIDDEN MOROCCO — PLATFORM CORE ENGINE (script.js)
   Terracotta & Sahara Gold Theme, Wishlist, Language Switcher, Maps, Search
   ========================================================================== */

// ── Application State ──────────────────────────────────────────────────────
const AppState = {
  theme: localStorage.getItem('hm_theme') || 'light',
  lang: localStorage.getItem('hm_lang') || 'en',
  favorites: JSON.parse(localStorage.getItem('hm_favorites') || '[]'),
  mapInstance: null,
  mapMarkers: []
};

// ── Destination Database (Verified Image Paths) ──────────────────────────
const DESTINATIONS_DB = [
  {
    id: "marrakech",
    title: "Marrakech",
    region: "Marrakech-Safi",
    category: "medina",
    price: 180,
    currency: "EUR",
    rating: 4.9,
    reviewsCount: 340,
    img: "images/Marrakech/marrakech_11.jpg",
    badge: "Popular",
    desc: "Step into the heartbeat of Morocco. Explore bustling souks, hidden riads, Jemaa el-Fnaa square, and the Majorelle Garden.",
    lat: 31.6295,
    lng: -7.9811,
    highlights: ["Jemaa el-Fnaa Square", "Bahia Palace & Saadian Tombs", "Majorelle & YSL Museum", "Spice Souks Walking Tour"],
    itinerary: [
      { day: "Day 1", text: "Arrival & Rooftop Tea overlooking Jemaa el-Fnaa" },
      { day: "Day 2", text: "Guided Medina & Bahia Palace Architectural Tour" },
      { day: "Day 3", text: "Jardin Majorelle & Traditional Moroccan Spa/Hammam" }
    ]
  },
  {
    id: "merzouga",
    title: "Merzouga",
    region: "Draâ-Tafilalet",
    category: "desert",
    price: 290,
    currency: "EUR",
    rating: 5.0,
    reviewsCount: 420,
    img: "images/Merzouga/merzouga_1.jpg",
    badge: "Bucket List",
    desc: "Experience pure magic among golden dunes. Ride camels at sunset, sleep in a luxury Berber tent, and marvel at the Milky Way.",
    lat: 31.0992,
    lng: -4.0116,
    highlights: ["Sunset & Sunrise Camel Trek", "Luxury Desert Camp with Private Bathroom", "Berber Drumming & Campfire", "Erg Chebbi Sandboarding"],
    itinerary: [
      { day: "Day 1", text: "Drive through High Atlas & Dades Gorge" },
      { day: "Day 2", text: "Sunset Camel Ride into Erg Chebbi Dunes" },
      { day: "Day 3", text: "Stargazing & Traditional Gnawa Music" }
    ]
  },
  {
    id: "chefchaouen",
    title: "Chefchaouen",
    region: "Tanger-Tetouan-Al Hoceima",
    category: "mountain",
    price: 150,
    currency: "EUR",
    rating: 4.8,
    reviewsCount: 290,
    img: "images/Chfchaouen/chefchaoun.jpg",
    badge: "Photogenic",
    desc: "Wander through world-famous cobalt blue alleyways nestled in the Rif Mountains. Unwind in relaxed cafes and artisan shops.",
    lat: 35.1716,
    lng: -5.2697,
    highlights: ["Photogenic Blue Medina", "Spanish Mosque Sunset View", "Ras El-Maa Waterfalls", "Rif Mountain Trekking"],
    itinerary: [
      { day: "Day 1", text: "Arrival in Blue Pearl & Kasbah Exploration" },
      { day: "Day 2", text: "Hike to Spanish Mosque for Panoramic Views" }
    ]
  },
  {
    id: "essaouira",
    title: "Essaouira",
    region: "Marrakech-Safi",
    category: "coastal",
    price: 160,
    currency: "EUR",
    rating: 4.9,
    reviewsCount: 215,
    img: "images/Essaouira/essaouira_1.jpg",
    badge: "Relaxing",
    desc: "Breathe in Atlantic coastal ocean breezes, historic sea ramparts, fresh grilled seafood, and bohemian art galleries.",
    lat: 31.5125,
    lng: -9.7700,
    highlights: ["18th-century Skala Ramparts", "Fresh Port Seafood Grill", "Kitesurfing & Beach Walk", "Argan Oil Cooperative"],
    itinerary: [
      { day: "Day 1", text: "Ramparts Stroll & Sunset Port Dining" },
      { day: "Day 2", text: "Argan Forest & Beach Horse Riding" }
    ]
  },
  {
    id: "ouarzazate",
    title: "Ouarzazate",
    region: "Draâ-Tafilalet",
    category: "desert",
    price: 210,
    currency: "EUR",
    rating: 4.8,
    reviewsCount: 180,
    img: "images/Ouarzazat/ouarzazat1.jpeg",
    badge: "UNESCO",
    desc: "Explore Morocco's Hollywood. Visit ancient earthen Kasbahs, UNESCO World Heritage fortress walls, and desert film studios.",
    lat: 30.9189,
    lng: -6.8934,
    highlights: ["Ait Benhaddou UNESCO Kasbah", "Atlas Cinema Studios", "Taourirt Kasbah Palace", "Ounila Valley Scenic Drive"],
    itinerary: [
      { day: "Day 1", text: "Ait Benhaddou Guided Walk & Movie Set Tour" },
      { day: "Day 2", text: "Kasbah Taourirt & Oasis Exploration" }
    ]
  },
  {
    id: "fes",
    title: "Fes",
    region: "Fès-Meknès",
    category: "medina",
    price: 195,
    currency: "EUR",
    rating: 4.9,
    reviewsCount: 310,
    img: "images/Fes/fes_1.jpg",
    badge: "Heritage",
    desc: "Journey back in time in the world's largest car-free urban area. Discover Chouara Tanneries, Al-Qarawiyyin University, and intricate zellij tiles.",
    lat: 34.0333,
    lng: -5.0000,
    highlights: ["Chouara Leather Tanneries", "Al-Qarawiyyin Library", "Bou Inania Medersa", "Ceramic & Pottery Workshops"],
    itinerary: [
      { day: "Day 1", text: "Tanneries Tour & Ancient Souk Exploration" },
      { day: "Day 2", text: "Bab Boujeloud Gate & Pottery Crafting" }
    ]
  },
  {
    id: "casablanca",
    title: "Casablanca",
    region: "Casablanca-Settat",
    category: "coastal",
    price: 140,
    currency: "EUR",
    rating: 4.7,
    reviewsCount: 160,
    img: "images/Casablanca/casablanca.png",
    badge: "Modern Hub",
    desc: "Morocco's vibrant economic capital featuring the architectural masterpiece Hassan II Mosque perched directly over the Atlantic ocean.",
    lat: 33.5731,
    lng: -7.5898,
    highlights: ["Hassan II Mosque Ocean View", "Corniche Promenade", "Habous Quarter Architectural Tour", "Rick's Café Experience"],
    itinerary: [
      { day: "Day 1", text: "Hassan II Mosque Guided Visit & Corniche Walk" },
      { day: "Day 2", text: "Habous Craft Market & Culinary Tasting" }
    ]
  },
  {
    id: "zagora",
    title: "Zagora",
    region: "Draâ-Tafilalet",
    category: "desert",
    price: 220,
    currency: "EUR",
    rating: 4.8,
    reviewsCount: 190,
    img: "images/Zagora/zagora_hero.png",
    badge: "Sahara Gateway",
    desc: "Gateway to the Draa Valley. Palm groves, ancient earthen kasbahs, and authentic desert stargazing.",
    lat: 30.3336,
    lng: -5.8264,
    highlights: ["Draa Valley Palm Groves", "Tamegroute Ancient Library", "Sunset Camel Trek", "Traditional Berber Music"],
    itinerary: [
      { day: "Day 1", text: "Draa Oasis Drive & Sunset Desert Camp" },
      { day: "Day 2", text: "Tamegroute Underground Kasbah Visit" }
    ]
  },
  {
    id: "agadir",
    title: "Agadir",
    region: "Souss-Massa",
    category: "coastal",
    price: 130,
    currency: "EUR",
    rating: 4.7,
    reviewsCount: 140,
    img: "images/Agadir/agadir_hero.png",
    badge: "Ocean Resort",
    desc: "Coastal breeze, golden sandy beaches, year-round sunshine, sea promenade, and Atlantic waters.",
    lat: 30.4278,
    lng: -9.5981,
    highlights: ["Agadir Kasbah Panoramic View", "Souk El Had Shopping", "Marina Promenade Dining", "Taghazout Bay Surfing"],
    itinerary: [
      { day: "Day 1", text: "Kasbah Hill View & Beach Promenade Sunset" },
      { day: "Day 2", text: "Taghazout Coastal Trip & Argan Valley Tour" }
    ]
  }
];

// ── Multi-Language Translation Dictionary ─────────────────────────────────
const TRANSLATIONS = {
  en: {
    nav_home: "Home",
    nav_destinations: "Destinations",
    nav_map: "Interactive Map",
    nav_about: "About Us",
    nav_reviews: "Reviews",
    nav_contact: "Contact",
    nav_favorites: "Wishlist",
    nav_book: "Book Now",
    hero_title: "Morocco Is Not Just A Destination. It's A Feeling.",
    hero_sub: "Discover hidden kasbahs, silent desert mornings under starry skies, and ancient medinas crafted by local storytellers.",
    search_placeholder: "Where to? e.g. Sahara, Chefchaouen",
    search_btn: "Explore Destinations",
    stats_routes: "Custom Routes",
    stats_travelers: "Happy Travelers",
    stats_destinations: "Iconic Destinations",
    stats_satisfaction: "Satisfaction Rate",
    why_title: "Why Hidden Morocco?",
    why_sub: "Handcrafted boutique private journeys tailored to your rhythm."
  },
  fr: {
    nav_home: "Accueil",
    nav_destinations: "Destinations",
    nav_map: "Carte Interactive",
    nav_about: "À Propos",
    nav_reviews: "Avis Clients",
    nav_contact: "Contact",
    nav_favorites: "Favoris",
    nav_book: "Réserver",
    hero_title: "Le Maroc N'est Pas Une Destination. C'est Une Émotion.",
    hero_sub: "Découvrez des kasbahs secrètes, des matins du désert étoilés et des médinas séculaires guidés par nos passionnés.",
    search_placeholder: "Où souhaitez-vous aller ? ex: Sahara, Chefchaouen",
    search_btn: "Rechercher",
    stats_routes: "Itinéraires Sur-Mesure",
    stats_travelers: "Voyageurs Comblés",
    stats_destinations: "Destinations Emblématiques",
    stats_satisfaction: "Taux de Satisfaction",
    why_title: "Pourquoi Hidden Morocco ?",
    why_sub: "Voyages privés d'exception conçus sur-mesure selon vos envies."
  },
  es: {
    nav_home: "Inicio",
    nav_destinations: "Destinos",
    nav_map: "Mapa Interactivo",
    nav_about: "Sobre Nosotros",
    nav_reviews: "Opiniones",
    nav_contact: "Contacto",
    nav_favorites: "Deseos",
    nav_book: "Reservar Ahora",
    hero_title: "Marruecos No Es Solo Un Destino. Es Una Emoción.",
    hero_sub: "Descubre alcazabas ocultas, mañanas desérticas bajo las estrellas y medinas históricas de la mano de guías locales.",
    search_placeholder: "¿A dónde quieres ir? ej: Sahara, Chefchaouen",
    search_btn: "Buscar Destinos",
    stats_routes: "Rutas Personalizadas",
    stats_travelers: "Viajeros Felices",
    stats_destinations: "Destinos Icónicos",
    stats_satisfaction: "Tasa de Satisfacción",
    why_title: "¿Por Qué Hidden Morocco?",
    why_sub: "Viajes privados exclusivos diseñados a la medida de tus sueños."
  }
};

// ── DOM Content Loaded Initialization ─────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLanguage();
  initWishlistBadge();
  initBackToTop();
  initStickyNav();
  initSearchEngine();
  initCounters();

  if (document.getElementById('interactiveMap')) {
    initMapPage();
  }
  if (document.getElementById('homeMapPreview')) {
    initHomeMapPreview();
  }
  if (document.getElementById('destinationsGrid')) {
    renderDestinationsGrid();
  }
  if (document.getElementById('favoritesGrid')) {
    renderFavoritesGrid();
  }
});

// ── Theme Engine (Light / Dark Mode) ───────────────────────────────────────
function initTheme() {
  document.documentElement.setAttribute('data-theme', AppState.theme);
  if (document.body) document.body.setAttribute('data-theme', AppState.theme);
  updateThemeIcon();

  document.querySelectorAll('.theme-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      AppState.theme = AppState.theme === 'light' ? 'dark' : 'light';
      localStorage.setItem('hm_theme', AppState.theme);
      document.documentElement.setAttribute('data-theme', AppState.theme);
      if (document.body) document.body.setAttribute('data-theme', AppState.theme);
      updateThemeIcon();
      showToast(`Switched to ${AppState.theme.toUpperCase()} mode ✨`);
    });
  });
}

function updateThemeIcon() {
  document.querySelectorAll('.theme-toggle').forEach(btn => {
    btn.innerHTML = AppState.theme === 'dark'
      ? '<i class="fa-solid fa-sun" style="color: #F59E0B; transform: rotate(360deg); transition: all 0.4s ease;"></i>'
      : '<i class="fa-solid fa-moon" style="transition: all 0.4s ease;"></i>';
  });
}

// ── Language Switcher Engine ───────────────────────────────────────────────
function initLanguage() {
  const langSelect = document.getElementById('langSwitcher');
  if (langSelect) {
    langSelect.value = AppState.lang;
    langSelect.addEventListener('change', (e) => {
      setLanguage(e.target.value);
    });
  }
  applyTranslations();
}

function setLanguage(langKey) {
  if (!TRANSLATIONS[langKey]) return;
  AppState.lang = langKey;
  localStorage.setItem('hm_lang', langKey);
  applyTranslations();
  showToast(`Language set to ${langKey.toUpperCase()}`);
}

function applyTranslations() {
  const dict = TRANSLATIONS[AppState.lang] || TRANSLATIONS.en;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      if (el.tagName === 'INPUT' && el.type === 'text') {
        el.placeholder = dict[key];
      } else {
        el.textContent = dict[key];
      }
    }
  });
}

// ── Wishlist / Favorites Engine ────────────────────────────────────────────
function isFavorite(id) {
  return AppState.favorites.includes(id);
}

function toggleFavorite(id, e) {
  if (e) e.stopPropagation();
  const idx = AppState.favorites.indexOf(id);
  if (idx > -1) {
    AppState.favorites.splice(idx, 1);
    showToast("Removed from Wishlist");
  } else {
    AppState.favorites.push(id);
    showToast("Added to Wishlist! ✨");
  }
  localStorage.setItem('hm_favorites', JSON.stringify(AppState.favorites));
  initWishlistBadge();

  document.querySelectorAll(`.fav-btn[data-id="${id}"]`).forEach(btn => {
    btn.classList.toggle('is-active', isFavorite(id));
    btn.innerHTML = isFavorite(id) ? '<i class="fa-solid fa-heart"></i>' : '<i class="fa-regular fa-heart"></i>';
  });

  if (document.getElementById('favoritesGrid')) {
    renderFavoritesGrid();
  }
}

function initWishlistBadge() {
  const count = AppState.favorites.length;
  document.querySelectorAll('.fav-count-badge').forEach(badge => {
    badge.textContent = count;
    badge.style.display = count > 0 ? 'inline-flex' : 'none';
  });
}

// ── Floating Back-to-Top Button Engine ─────────────────────────────────────
function initBackToTop() {
  let btn = document.getElementById('backToTop');
  if (!btn) {
    btn = document.createElement('button');
    btn.id = 'backToTop';
    btn.setAttribute('aria-label', 'Back to Top');
    btn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
    document.body.appendChild(btn);
  }

  const toggleVisibility = () => {
    if (window.scrollY > 350) {
      btn.classList.add('is-visible');
    } else {
      btn.classList.remove('is-visible');
    }
  };

  window.addEventListener('scroll', toggleVisibility, { passive: true });
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ── Sticky Navigation Scroll Effect ─────────────────────────────────────────
function initStickyNav() {
  const nav = document.getElementById('siteNav');
  if (!nav) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      nav.classList.add('glass-nav');
    } else {
      nav.classList.remove('glass-nav');
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

window.toggleMobileMenu = function (e) {
  if (e && e.stopPropagation) e.stopPropagation();
  const menus = document.querySelectorAll('.hn-links, .nav-links, #premNavLinks, #navLinks');
  const hburgs = document.querySelectorAll('.hamburger, .hburg');
  const backdrops = document.querySelectorAll('.drawer-backdrop');

  let isOpen = false;
  menus.forEach(menu => {
    menu.classList.toggle('hn-links-open');
    menu.classList.toggle('open');
    menu.classList.toggle('active');
    if (menu.classList.contains('open') || menu.classList.contains('hn-links-open')) {
      isOpen = true;
    }
  });

  hburgs.forEach(btn => {
    if (isOpen) btn.classList.add('is-active');
    else btn.classList.remove('is-active');
  });

  backdrops.forEach(bd => {
    if (isOpen) bd.classList.add('drawer-backdrop-open');
    else bd.classList.remove('drawer-backdrop-open');
  });
};

document.addEventListener('click', (e) => {
  const isLinkClick = e.target.closest('a[href]');
  const isCloseBtn = e.target.closest('.mobile-menu-close');
  const isBackdrop = e.target.closest('.drawer-backdrop');
  const isNavClick = e.target.closest('.hn-links, .nav-links, #premNavLinks, #navLinks, .hamburger, .hburg');

  if (isLinkClick && !isCloseBtn) {
    return;
  }

  if (isCloseBtn || isBackdrop || !isNavClick) {
    document.querySelectorAll('.hn-links, .nav-links, #premNavLinks, #navLinks').forEach(m => {
      m.classList.remove('hn-links-open', 'open', 'active');
    });
    document.querySelectorAll('.hamburger, .hburg').forEach(btn => {
      btn.classList.remove('is-active');
    });
    document.querySelectorAll('.drawer-backdrop').forEach(bd => {
      bd.classList.remove('drawer-backdrop-open');
    });
  }
});

// ── Live Destination Search Engine ─────────────────────────────────────────
function initSearchEngine() {
  const input = document.getElementById('heroSearchInput');
  if (!input) return;

  input.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    if (query.length === 0) {
      renderDestinationsGrid();
      return;
    }
    const filtered = DESTINATIONS_DB.filter(d =>
      d.title.toLowerCase().includes(query) ||
      d.desc.toLowerCase().includes(query) ||
      d.region.toLowerCase().includes(query)
    );
    renderDestinationsGrid(filtered);
  });
}

// ── Animated Number Counters Engine ────────────────────────────────────────
function initCounters() {
  const statElements = document.querySelectorAll('.stat-num, .stat-number');
  if (statElements.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-target') || '0', 10);
        let start = 0;
        const duration = 1800;
        const stepTime = Math.abs(Math.floor(duration / target));

        const timer = setInterval(() => {
          start += Math.ceil(target / 40);
          if (start >= target) {
            el.textContent = target;
            clearInterval(timer);
          } else {
            el.textContent = start;
          }
        }, stepTime);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.4 });

  statElements.forEach(el => observer.observe(el));
}

// ── Dynamic Destinations Card Generator ────────────────────────────────────
function createCardHTML(dest) {
  const favActive = isFavorite(dest.id);
  return `
    <div class="card glass-panel hover-lift">
      <div class="card-img-wrapper">
        <img src="${dest.img}" alt="${dest.title}" loading="lazy">
        <span class="badge badge-gold card-badge">✦ ${dest.badge}</span>
        <button class="fav-btn card-fav-btn ${favActive ? 'is-active' : ''}" data-id="${dest.id}" onclick="toggleFavorite('${dest.id}', event)" aria-label="Add to Wishlist">
          <i class="fa-${favActive ? 'solid' : 'regular'} fa-heart"></i>
        </button>
      </div>

      <div class="card-content">
        <h3>${dest.title}</h3>
        <div class="card-meta-row">
          <span class="card-region"><i class="fa-solid fa-location-dot"></i> ${dest.region}</span>
          <div class="card-rating"><i class="fa-solid fa-star"></i> ${dest.rating} (${dest.reviewsCount || 100})</div>
        </div>

        <p>${dest.desc}</p>

        <div class="card-footer-row">
          <div>
            <span class="card-price-label">Pricing</span>
            <div class="card-price-val" style="font-size: 0.95rem; font-weight: 700;">Price on Request</div>
          </div>
          <div class="card-btns">
            <a href="destinations.html#${dest.id}" class="btn-primary">Explore <i class="fa-solid fa-arrow-right"></i></a>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderDestinationsGrid(list = DESTINATIONS_DB) {
  const container = document.getElementById('destinationsGrid');
  if (!container) return;
  container.innerHTML = list.map(createCardHTML).join('');
}

function renderFavoritesGrid() {
  const container = document.getElementById('favoritesGrid');
  if (!container) return;

  const saved = DESTINATIONS_DB.filter(d => isFavorite(d.id));
  if (saved.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 80px 20px;">
        <i class="fa-regular fa-heart" style="font-size: 3.5rem; color: var(--hm-text-muted); margin-bottom: 20px;"></i>
        <h3 style="font-family: var(--hm-font-serif); font-size: 1.8rem; margin-bottom: 12px;">Your Wishlist is Empty</h3>
        <p style="color: var(--hm-text-muted); margin-bottom: 28px;">Explore our handcrafted Moroccan expeditions and tap the heart icon to save your dream journeys.</p>
        <a href="destinations.html" class="btn-primary">Explore Destinations <i class="fa-solid fa-compass"></i></a>
      </div>
    `;
  } else {
    container.innerHTML = saved.map(createCardHTML).join('');
  }
}

// ── Toast Notification System ──────────────────────────────────────────────
function showToast(message) {
  let toastContainer = document.getElementById('toastContainer');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toastContainer';
    toastContainer.style.cssText = `
      position: fixed; bottom: 30px; right: 30px; z-index: 999999;
      display: flex; flex-direction: column; gap: 10px; pointer-events: none;
    `;
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  toast.style.cssText = `
    padding: 14px 22px; border-radius: 12px; font-weight: 600;
    font-size: 0.9rem; color: #0F172A; background: #FFFFFF; box-shadow: 0 12px 30px rgba(15,23,42,0.12);
    border-left: 4px solid #C85A32; pointer-events: auto; transition: all 0.35s ease;
    transform: translateY(20px); opacity: 0; display: flex; align-items: center; gap: 10px;
    border: 1px solid rgba(15,23,42,0.08);
  `;
  toast.innerHTML = `<i class="fa-solid fa-circle-check" style="color:#C85A32;"></i> <span>${message}</span>`;
  toastContainer.appendChild(toast);

  requestAnimationFrame(() => {
    toast.style.transform = 'translateY(0)';
    toast.style.opacity = '1';
  });

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 350);
  }, 3200);
}

// ── Global Interactive Quick Booking Modal Engine ────────────────────────
window.openQuickBooking = function (destId = 'marrakech') {
  const resolvedId = findDestinationId(destId) || 'marrakech';
  window.openCustomTourModal(resolvedId);
};

window.closeQuickBooking = function () {
  const modal = document.getElementById('globalQuickBookModal');
  if (modal) {
    modal.style.opacity = '0';
    modal.style.pointerEvents = 'none';
    setTimeout(() => { modal.style.display = 'none'; }, 300);
  }
  lockBodyScroll(false);
};

window.changeTravelers = function (delta) {
  const input = document.getElementById('qb-travelers');
  if (!input) return;
  let val = parseInt(input.value, 10) + delta;
  if (val < 1) val = 1;
  if (val > 20) val = 20;
  input.value = val;
  window.updateQuickBookPrice();
};

window.updateQuickBookPrice = function () {
  const destId = document.getElementById('qb-dest')?.value || 'marrakech';
  const count = parseInt(document.getElementById('qb-travelers')?.value || '2', 10);
  const dest = DESTINATIONS_DB.find(d => d.id === destId) || DESTINATIONS_DB[0];
  const priceDisplay = document.getElementById('qb-total-price');
  if (priceDisplay && dest) {
    priceDisplay.textContent = 'Price on Request';
  }
};

window.handleQuickBookSubmit = function (e) {
  if (e && e.preventDefault) e.preventDefault();
  const name = document.getElementById('qb-name')?.value || 'Valued Guest';
  const destId = document.getElementById('qb-dest')?.value || 'marrakech';
  const dest = DESTINATIONS_DB.find(d => d.id === destId) || DESTINATIONS_DB[0];

  window.closeQuickBooking();
  showToast(`Thank you ${name}! Your booking request for ${dest.title} has been submitted.`);
};

// Wire up all Book Expedition buttons automatically across all pages
document.addEventListener('click', function (e) {
  const bookBtn = e.target.closest('.book-btn-nav, .hn-nav-book, [data-i18n="nav_book"], a[href="booking.html"]');
  if (bookBtn && !window.location.pathname.endsWith('booking.html')) {
    e.preventDefault();
    window.openQuickBooking('marrakech');
  }
});

// ── Interactive Hero Search & URL Filtering ────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Hero Search Input handler
  const heroInput = document.getElementById('heroSearchInput');
  const heroBtn = document.querySelector('.hero-search-btn');

  if (heroInput && heroBtn) {
    const executeSearch = (e) => {
      e.preventDefault();
      const query = heroInput.value.trim();
      window.location.href = query ? `destinations.html?search=${encodeURIComponent(query)}` : 'destinations.html';
    };

    heroBtn.addEventListener('click', executeSearch);
    heroInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') executeSearch(e);
    });
  }

  // Handle ?search= query on destinations.html
  const urlParams = new URLSearchParams(window.location.search);
  const searchQuery = urlParams.get('search');
  if (searchQuery) {
    const destSearchInput = document.getElementById('destSearchInput');
    if (destSearchInput) {
      destSearchInput.value = searchQuery;
      if (typeof filterDestinations === 'function') {
        filterDestinations();
      }
    }
  }

  // Handle ?dest= or ?destination= query to auto-open Customize My Tour
  const destParam = urlParams.get('dest') || urlParams.get('destination') || urlParams.get('city');
  if (destParam && typeof window.openCustomTourModal === 'function') {
    const matched = findDestinationId(destParam);
    if (matched) {
      setTimeout(() => {
        window.openCustomTourModal(matched);
      }, 300);
    }
  }
});

// ── Interactive Leaflet Map Engine ─────────────────────────────────────────
function initMapPage() {
  const mapElement = document.getElementById('interactiveMap');
  if (!mapElement || typeof L === 'undefined') return;

  // Clear existing state if re-initialized
  AppState.mapMarkers = [];
  if (AppState.mapInstance) {
    AppState.mapInstance.remove();
    AppState.mapInstance = null;
  }

  // Create Map centered on Morocco
  AppState.mapInstance = L.map('interactiveMap', {
    zoomControl: false,
    maxZoom: 9,
    minZoom: 5
  }).setView([31.7917, -7.0926], 6);

  // Force Leaflet to recalculate map dimensions (critical for mobile)
  setTimeout(() => {
    AppState.mapInstance.invalidateSize();
  }, 150);

  // Re-invalidate on resize (orientation change, window resize)
  window.addEventListener('resize', () => {
    if (AppState.mapInstance) {
      AppState.mapInstance.invalidateSize();
    }
  });

  // Add zoom control at top-left
  L.control.zoom({ position: 'topleft' }).addTo(AppState.mapInstance);

  // ESRI World Imagery satellite tiles (matches reference design)
  L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP',
    maxZoom: 9,
    minZoom: 5
  }).addTo(AppState.mapInstance);

  // Teardrop-style orange pin icon matching reference design
  const createPinIcon = (isActive = false) => L.divIcon({
    className: 'custom-map-pin-icon',
    html: `<div class="map-pin-marker ${isActive ? 'is-active' : ''}">
      <div class="pin-inner"></div>
    </div>`,
    iconSize: [32, 40],
    iconAnchor: [16, 40],
    popupAnchor: [0, -40]
  });

  DESTINATIONS_DB.forEach(dest => {
    const marker = L.marker([dest.lat, dest.lng], { icon: createPinIcon(false) }).addTo(AppState.mapInstance);
    marker.destData = dest;

    // Click opens the premium side panel only (no duplicate popup)
    marker.on('click', (e) => {
      L.DomEvent.stopPropagation(e);
      // Close any open Leaflet popups
      AppState.mapInstance.closePopup();
      window.showMapDestCard(dest);
    });

    AppState.mapMarkers.push(marker);
  });

  // Polyline coordinates connecting major routes
  const routeCoords = [
    [35.1716, -5.2697],   // Chefchaouen
    [34.0333, -5.0000],   // Fes
    [33.5731, -7.5898],   // Casablanca
    [31.6295, -7.9811],   // Marrakech
    [31.5125, -9.7700],   // Essaouira
    [30.4278, -9.5981],   // Agadir
    [30.9189, -6.8934],   // Ouarzazate
    [30.3336, -5.8264],   // Zagora
    [31.0992, -4.0116],   // Merzouga
  ];

  AppState.routePolyline = L.polyline(routeCoords, {
    color: '#D4AF37',
    weight: 2,
    opacity: 0.85,
    dashArray: '8, 10',
    lineJoin: 'round'
  }).addTo(AppState.mapInstance);

  // Click on empty map area → close the side panel
  AppState.mapInstance.on('click', () => {
    window.closeMapDestCard();
  });
}

// ── Map Filtering Engine ───────────────────────────────────────────────────
window.filterMapCategory = function (category, btnElement) {
  if (!AppState.mapInstance || !AppState.mapMarkers) return;

  // Update active tab buttons
  const buttons = document.querySelectorAll('.map-filter-btn');
  buttons.forEach(b => b.classList.remove('active'));
  if (btnElement) btnElement.classList.add('active');

  const visibleMarkers = [];

  AppState.mapMarkers.forEach(marker => {
    const dest = marker.destData;
    const isMatch = (category === 'all' || dest.category === category);

    if (isMatch) {
      if (!AppState.mapInstance.hasLayer(marker)) {
        marker.addTo(AppState.mapInstance);
      }
      visibleMarkers.push(marker);
    } else {
      if (AppState.mapInstance.hasLayer(marker)) {
        AppState.mapInstance.removeLayer(marker);
      }
    }
  });

  // Fit bounds if specific category selected
  if (category !== 'all' && visibleMarkers.length > 0) {
    const group = L.featureGroup(visibleMarkers);
    AppState.mapInstance.fitBounds(group.getBounds().pad(0.25));
  } else {
    AppState.mapInstance.setView([31.7917, -7.0926], 6);
  }
};

// ── Search Map Function ────────────────────────────────────────────────────
window.searchMapQuery = function (query) {
  if (!AppState.mapInstance || !AppState.mapMarkers) return;
  const q = query.toLowerCase().trim();

  AppState.mapMarkers.forEach(marker => {
    const dest = marker.destData;
    const isMatch = !q || dest.title.toLowerCase().includes(q) || dest.region.toLowerCase().includes(q) || dest.id.toLowerCase().includes(q);

    if (isMatch) {
      if (!AppState.mapInstance.hasLayer(marker)) marker.addTo(AppState.mapInstance);
    } else {
      if (AppState.mapInstance.hasLayer(marker)) AppState.mapInstance.removeLayer(marker);
    }
  });
};

// ── Display Map Destination Card Panel ────────────────────────────────────
window.showMapDestCard = function (dest) {
  const panel = document.getElementById('mapDetailPanel');
  if (!panel) return;

  const isMobile = window.innerWidth <= 900;

  // Center map on marker location (keeps full regional Morocco overview)
  if (AppState.mapInstance) {
    AppState.mapInstance.flyTo([dest.lat, dest.lng], isMobile ? 6.5 : 7, { duration: 1.2 });
  }

  // Populate Panel Content
  panel.innerHTML = `
    <div class="map-side-card">
      <button class="map-card-close" onclick="window.closeMapDestCard()">&times;</button>
      <div class="map-side-img">
        <img src="${dest.img}" alt="${dest.title}">
        <span class="map-card-badge">${dest.badge || 'Featured'}</span>
      </div>
      <div class="map-side-content">
        <h3>${dest.title}</h3>
        <div class="map-card-meta">
          <span class="map-card-region"><i class="fa-solid fa-location-dot"></i> ${dest.region}</span>
          <span class="map-card-rating"><i class="fa-solid fa-star"></i> ${dest.rating} (${dest.reviewsCount || 100}+ reviews)</span>
        </div>
        <p>${dest.desc}</p>
        
        <div class="map-card-highlights">
          <h5><i class="fa-solid fa-sparkles"></i> Highlights</h5>
          <ul>
            ${(dest.highlights || []).slice(0, 3).map(h => `<li><i class="fa-solid fa-check"></i> ${h}</li>`).join('')}
          </ul>
        </div>

        <div class="map-card-footer">
          <div class="map-card-price-box">
            <span class="price-lbl">Pricing</span>
            <span class="price-val" style="font-size: 0.98rem; font-weight: 700; color: #E7A93C;">Price on Request</span>
          </div>
          <a href="destinations.html#${dest.id}" class="btn-primary map-card-action-btn">
            View Experience &nbsp;<i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  `;

  panel.classList.add('is-open');

  // Show backdrop on mobile
  const overlay = document.getElementById('mapSheetOverlay');
  if (overlay && isMobile) overlay.classList.add('is-visible');
};

window.closeMapDestCard = function () {
  const panel = document.getElementById('mapDetailPanel');
  if (panel) panel.classList.remove('is-open');

  // Hide backdrop
  const overlay = document.getElementById('mapSheetOverlay');
  if (overlay) overlay.classList.remove('is-visible');

  // Reset view to full Morocco map overview (Image 1 style)
  if (AppState.mapInstance) {
    AppState.mapInstance.flyTo([31.7917, -7.0926], 6, { duration: 1.2 });
  }
};

function initHomeMapPreview() {
  const mapElement = document.getElementById('homeMapPreview');
  if (!mapElement || typeof L === 'undefined') return;

  const miniMap = L.map('homeMapPreview', { zoomControl: false, dragging: false, scrollWheelZoom: false }).setView([31.7917, -7.0926], 6);

  // ESRI satellite tiles for home map preview
  L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri'
  }).addTo(miniMap);

  DESTINATIONS_DB.forEach(dest => {
    const pinIcon = L.divIcon({
      className: '',
      html: `<div style="
        width: 22px; height: 28px;
        background: linear-gradient(135deg, #C85A32 0%, #E7A93C 100%);
        border-radius: 50% 50% 50% 0;
        transform: rotate(-45deg);
        border: 2px solid #fff;
        box-shadow: 0 2px 8px rgba(200,90,50,0.6);
        position: relative;
      "><div style="
        position: absolute; top: 50%; left: 50%;
        transform: translate(-50%, -50%) rotate(45deg);
        width: 7px; height: 7px;
        background: #fff; border-radius: 50%;
      "></div></div>`,
      iconSize: [22, 28],
      iconAnchor: [11, 28]
    });
    L.marker([dest.lat, dest.lng], { icon: pinIcon }).addTo(miniMap);
  });

  // Dashed golden route lines
  const routeCoords = [
    [35.1716, -5.2697],
    [34.0333, -5.0000],
    [31.6295, -7.9811],
    [31.5125, -9.7700],
    [30.4278, -9.5981],
    [30.9189, -6.8934],
    [30.3336, -5.8264],
    [31.0992, -4.0116],
  ];
  L.polyline(routeCoords, {
    color: '#D4AF37',
    weight: 1.5,
    opacity: 0.8,
    dashArray: '6, 8'
  }).addTo(miniMap);
}

// ── Global Modal Engine & Helpers ─────────────────────────
function lockBodyScroll(lock) {
  document.body.style.overflow = lock ? 'hidden' : '';
}

window.openModal = function (city, scrollToBooking = false) {
  const modal = document.getElementById('modal-' + city);
  if (!modal) return;
  if (modal.parentElement !== document.body) {
    document.body.appendChild(modal);
  }

  modal.style.display = 'flex';
  modal.scrollTop = 0;
  const modalContent = modal.querySelector('.modal-content');
  if (modalContent) modalContent.scrollTop = 0;

  lockBodyScroll(true);

  modal.setAttribute('tabindex', '-1');
  modal.focus();

  if (scrollToBooking) {
    const bookingSection = document.getElementById('booking-' + city);
    if (bookingSection) {
      setTimeout(() => bookingSection.scrollIntoView({ behavior: 'smooth' }), 300);
    }
  }

  const selector = '#modal-' + city + ' .mySwiper-' + city;
  const swiperEl = document.querySelector(selector);
  if (swiperEl && typeof Swiper !== 'undefined') {
    if (!swiperEl.swiper) {
      new Swiper(selector, {
        loop: true,
        observer: true,
        observeParents: true,
        navigation: {
          nextEl: '#modal-' + city + ' .swiper-button-next',
          prevEl: '#modal-' + city + ' .swiper-button-prev'
        },
        pagination: {
          el: '#modal-' + city + ' .swiper-pagination',
          clickable: true
        }
      });
    } else {
      swiperEl.swiper.update();
    }
  }
};

window.closeModal = function (city) {
  const modal = document.getElementById('modal-' + city);
  if (!modal) return;
  modal.style.display = 'none';
  lockBodyScroll(false);
};

const DEST_IMAGES = {
  'Marrakech': 'images/Marrakech/Marrakech.jpg',
  'Ouarzazate': 'images/Ouarzazat/ouarzazat1.jpeg',
  'Merzouga': 'images/Merzouga/merzouga_1.jpg',
  'Chefchaouen': 'images/Chfchaouen/chefchaoun.jpg',
  'Essaouira': 'images/Essaouira/essaouira_1.jpg',
  'Fes': 'images/Fes/Fes.jpg',
  'Casablanca': 'images/Casablanca/casablanca.png',
  'Agadir': 'images/Agadir/agadir_hero.png',
  'Zagora': 'images/Zagora/zagora_hero.png'
};

window.openDestBooking = function (city) {
  const destId = findDestinationId(city) || 'marrakech';
  window.openCustomTourModal(destId);
};

window.closeDestBooking = function () {
  const modal = document.getElementById('destBookingModal');
  if (modal) modal.style.display = 'none';
  lockBodyScroll(false);
};

window.sendDestBookingWhatsApp = function () {
  const WHATSAPP_NUMBER = '212660082066';
  const cityTitle = document.getElementById('destBookingTitle')?.textContent || 'Morocco Tour';
  const name = document.getElementById('db-name')?.value || '';
  const date = document.getElementById('db-date')?.value || '';
  const adults = document.getElementById('db-adults')?.value || '1';
  const children = document.getElementById('db-children')?.value || '0';
  const message = document.getElementById('db-message')?.value || '';
  if (!name || !date) { alert('Please fill in your name and preferred date.'); return; }
  const text = `Hello 👋\nI am interested in booking:\n✅ Destination: ${cityTitle}\n👤 Name: ${name}\n📅 Date: ${date}\n👥 Adults: ${adults}\n🧒 Children: ${children}\n📝 Message: ${message || 'N/A'}\n\nThank you!`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
};

window.sendWhatsApp = function () {
  const WHATSAPP_NUMBER = '212660082066';
  const name = document.getElementById('fname')?.value || document.getElementById('c-name')?.value || '';
  const email = document.getElementById('femail')?.value || document.getElementById('c-email')?.value || '';
  const phone = document.getElementById('fphone')?.value || '';
  const date = document.getElementById('fdate')?.value || '';
  const adults = document.getElementById('fadults')?.value || '1';
  const children = document.getElementById('fchildren')?.value || '0';
  const message = document.getElementById('fmessage')?.value || document.getElementById('c-message')?.value || '';

  const destEls = document.querySelectorAll('input[name="destinations"]:checked');
  const dests = Array.from(destEls).map(el => el.value).join(', ');

  if (!name) { alert('Please enter your name.'); return; }

  const text = `Hello 👋 Discover Hidden Morocco!\nI would like to request a Tour Booking:\n\n👤 Name: ${name}\n📧 Email: ${email}\n📞 Phone: ${phone || 'N/A'}\n📅 Travel Date: ${date || 'N/A'}\n👥 Adults: ${adults}\n🧒 Children: ${children}\n📍 Destinations: ${dests || 'Not specified'}\n📝 Message: ${message || 'N/A'}\n\nThank you!`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
};

const EXPERIENCES = {
  ourika: {
    title: "Ourika Valley (Setti Fatma)",
    img: "images/Marrakech/ourika_1.png",
    desc: "Escape the city to the lush Ourika Valley, situated in the foothills of the High Atlas Mountains. Enjoy refreshing waterfalls, traditional Berber villages, and aromatic gardens. It's the perfect day trip for nature lovers seeking tranquility and a taste of authentic mountain life.",
    duration: "1 day",
    timing: "Departure 08:30 • Return ~18:00",
    price: "Price on Request",
    schedule: ["08:30 – Pick up in Marrakech", "10:00 – Scenic drive", "11:00 – Setti Fatma & waterfalls", "18:00 – Return"],
    activities: ["Berber villages", "Walk to waterfalls", "Panoramic photos"]
  },
  ouzoud: {
    title: "Ouzoud Waterfalls",
    img: "images/Ouzoud/ouzoud-falls.jpg",
    desc: "Discover the breathtaking Ouzoud Waterfalls, cascading over 100 meters down rugged cliffs. Enjoy a scenic hike through olive groves, spot wild Barbary macaques, and take a refreshing boat ride near the falls. This natural wonder is an unforgettable escape into Morocco's dramatic landscapes.",
    duration: "1 day",
    timing: "Departure 08:00 • Return ~19:00",
    price: "Price on Request",
    schedule: ["08:00 – Departure", "11:00 – Walk", "15:00 – Boat ride", "19:00 – Return"],
    activities: ["Easy hike", "Macaque monkeys observation", "Boat ride"]
  },
  agafay: {
    title: "Agafay Desert (Quad + Camel + Dinner)",
    img: "images/Marrakech/agafay.jpg",
    desc: "Experience the rugged beauty of the Agafay Desert, located just outside Marrakech. Characterized by its rocky dunes and vast barren landscapes, it offers thrilling quad biking, camel rides, and luxury desert camping. Enjoy a magical dinner under the stars with spectacular views of the Atlas Mountains.",
    duration: "≈ 6 hours",
    timing: "Departure 15:30 • Return ~21:30",
    price: "Price on Request",
    schedule: ["15:30 – Pick up", "17:30 – Camel ride", "18:15 – Quad biking", "20:00 – Dinner + show"],
    activities: ["Camel ride", "Quad biking", "Sunset", "Berber dinner"]
  },
  imlil: {
    title: "Imlil & Atlas Mountains",
    img: "images/Marrakech/imlil_1.jpg",
    desc: "Imlil serves as the primary base camp for trekkers aiming to conquer Mount Toubkal. Surrounded by stunning alpine scenery and terraced walnut groves, this peaceful Berber village offers an immersive cultural experience and breathtaking panoramic views of the Atlas peaks.",
    duration: "1 day",
    timing: "Departure 08:00 • Return ~18:00",
    price: "Price on Request",
    schedule: ["08:00 – Departure", "10:00 – Arrival in Imlil", "11:00 – Guided village hike", "18:00 – Return"],
    activities: ["Guided Hiking", "Amazigh villages", "Atlas Panoramas"]
  },
  takerkoust: {
    title: "Lalla Takerkoust Lake",
    img: "images/Marrakech/lac-lala-takerkoust.webp",
    desc: "Relaxing outing: lake, nature and outdoor activities depending on the package.",
    duration: "Half-day",
    timing: "Morning or afternoon departure",
    price: "Price on Request",
    schedule: ["Pick-up", "Scenic drive to Lake", "Free time & quad", "Tea break"],
    activities: ["Walk by the lake", "Relaxation", "Outdoor Activities"]
  },
  ballon: {
    title: "Sunrise Hot Air Balloon",
    img: "images/Marrakech/montgolfiere.webp",
    desc: "Experience the magic of Marrakech from the sky with a sunrise hot air balloon flight. Float gently over the Atlas Mountains and the surrounding desert plains as the morning light illuminates the landscape. Conclude your aerial adventure with a traditional Berber breakfast in a local village.",
    duration: "≈ 4–5 hours",
    timing: "Departure ~2h before sunrise",
    price: "Price on Request",
    schedule: ["Pick-up", "Balloon preparation", "Flight over Atlas", "Berber breakfast"],
    activities: ["Sunrise Flight", "Atlas Views", "Berber Breakfast"]
  }
};

window.openExp = function (key) {
  const exp = EXPERIENCES[key];
  if (!exp) return;

  let modal = document.getElementById('destModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'destModal';
    modal.style.cssText = `
      position: fixed; inset: 0; z-index: 9999999; display: flex; align-items: center; justify-content: center;
      padding: 20px; background: rgba(17, 17, 30, 0.85); backdrop-filter: blur(12px); opacity: 0; pointer-events: none; transition: opacity 0.3s ease;
    `;
    document.body.appendChild(modal);
  } else if (modal.parentElement !== document.body) {
    document.body.appendChild(modal);
  }

  modal.innerHTML = `
    <div class="glass-panel exp-inner-content" style="width: min(850px, 95vw); max-height: 90vh; border-radius: var(--hm-radius-lg); overflow-y: auto; position: relative; background: #FFFFFF; margin: auto;">
      <button onclick="closeDestinationModal()" style="position: absolute; top: 20px; right: 20px; z-index: 10; width: 40px; height: 40px; border-radius: 50%; border: none; background: rgba(0,0,0,0.5); color: #fff; cursor: pointer; font-size: 1.2rem;">
        <i class="fa-solid fa-xmark"></i>
      </button>

      <div style="position: relative; height: 320px;">
        <img src="${exp.img}" alt="${exp.title}" style="width: 100%; height: 100%; object-fit: cover;">
        <div style="position: absolute; inset: 0; background: linear-gradient(180deg, transparent 40%, rgba(26,26,46,0.85) 100%);"></div>
        <div style="position: absolute; bottom: 24px; left: 30px; right: 30px; color: #fff;">
          <span class="badge badge-terracotta" style="margin-bottom: 8px; background: var(--hm-terracotta); color: #fff;">${exp.duration}</span>
          <h2 style="font-size: 2.2rem; color: #fff; font-family: var(--hm-font-serif);">${exp.title}</h2>
          <p style="opacity: 0.9; font-size: 0.95rem;"><i class="fa-regular fa-clock"></i> ${exp.timing}</p>
        </div>
      </div>

      <div style="padding: 34px;">
        <p style="font-size: 1.05rem; line-height: 1.75; color: var(--hm-text-body); margin-bottom: 28px;">${exp.desc}</p>

        <h4 style="font-size: 1.15rem; margin-bottom: 14px; font-family: var(--hm-font-serif);">Schedule & Itinerary</h4>
        <div style="display: flex; flex-direction: column; gap: 10px; margin-bottom: 30px;">
          ${exp.schedule.map(step => `
            <div style="padding: 12px 16px; border-left: 3px solid var(--hm-terracotta); background: var(--hm-bg-main); border-radius: 0 var(--hm-radius-md) var(--hm-radius-md) 0; font-size: 0.95rem; font-weight: 600;">
              ${step}
            </div>
          `).join('')}
        </div>

        <h4 style="font-size: 1.15rem; margin-bottom: 14px; font-family: var(--hm-font-serif);">Included Activities</h4>
        <div style="display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 34px;">
          ${exp.activities.map(act => `
            <span class="badge badge-gold" style="font-size: 0.85rem;"><i class="fa-solid fa-check"></i> ${act}</span>
          `).join('')}
        </div>

        <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--hm-border); padding-top: 24px;">
          <div>
            <span style="font-size: 0.85rem; color: var(--hm-text-muted);">Price per person</span>
            <div style="font-size: 1.8rem; font-weight: 800; color: var(--hm-text-heading);">${exp.price}</div>
          </div>
          <button type="button" class="btn-primary" style="padding: 12px 30px;" onclick="openDestBooking('${exp.title || 'Marrakech'}')">Book this Experience</button>
        </div>
      </div>
    </div>
  `;

  modal.style.display = 'flex';
  modal.scrollTop = 0;
  const content = modal.querySelector('.exp-inner-content');
  if (content) content.scrollTop = 0;
  lockBodyScroll(true);

  requestAnimationFrame(() => {
    modal.style.opacity = '1';
    modal.style.pointerEvents = 'auto';
    modal.setAttribute('tabindex', '-1');
    modal.focus();
  });
};

window.closeDestinationModal = function () {
  const modal = document.getElementById('destModal');
  if (modal) {
    modal.style.opacity = '0';
    modal.style.pointerEvents = 'none';
    setTimeout(() => { modal.style.display = 'none'; }, 300);
  }
  lockBodyScroll(false);
};

window.closeExp = window.closeDestinationModal;

// Global Escape Key & Backdrop Click Listener for All Modals
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal, .dest-booking-modal-overlay, .exp-modal, #globalQuickBookModal, #destModal, #customTourModal').forEach(modal => {
      if (modal.style.display === 'flex' || modal.style.display === 'block' || modal.style.opacity === '1') {
        const id = modal.id;
        if (id.startsWith('modal-')) {
          const city = id.replace('modal-', '');
          closeModal(city);
        } else if (id === 'globalQuickBookModal') {
          closeQuickBooking();
        } else if (id === 'destBookingModal') {
          closeDestBooking();
        } else if (id === 'destModal' || id === 'expModal') {
          closeDestinationModal();
        } else if (id === 'customTourModal') {
          closeCustomTourModal();
        } else {
          modal.style.display = 'none';
          lockBodyScroll(false);
        }
      }
    });
  }
});

document.addEventListener('click', function (e) {
  if (e.target.classList.contains('modal') || e.target.classList.contains('dest-booking-modal-overlay') || e.target.classList.contains('exp-modal') || e.target.id === 'globalQuickBookModal' || e.target.id === 'destModal' || e.target.id === 'customTourModal') {
    const id = e.target.id;
    if (id.startsWith('modal-')) {
      closeModal(id.replace('modal-', ''));
    } else if (id === 'globalQuickBookModal') {
      closeQuickBooking();
    } else if (id === 'destBookingModal') {
      closeDestBooking();
    } else if (id === 'destModal' || id === 'expModal') {
      closeDestinationModal();
    } else if (id === 'customTourModal') {
      closeCustomTourModal();
    }
  }
});

// ==========================================================================
// CUSTOMIZE MY TOUR — INTERACTIVE 9-STEP WIZARD ENGINE
// ==========================================================================

const CUSTOM_TOUR_DESTINATIONS = [
  { id: 'marrakech', name: 'Marrakech', region: 'Marrakech-Safi', img: 'images/Marrakech/marrakech_11.jpg' },
  { id: 'fes', name: 'Fès', region: 'Fès-Meknès', img: 'images/Fes/fes_1.jpg' },
  { id: 'chefchaouen', name: 'Chefchaouen', region: 'Rif Mountains', img: 'images/Chfchaouen/chefchaoun.jpg' },
  { id: 'merzouga', name: 'Merzouga', region: 'Sahara Desert', img: 'images/Merzouga/merzouga_1.jpg' },
  { id: 'zagora', name: 'Zagora', region: 'Draâ Valley & Dunes', img: 'images/Zagora/zagora_hero.png' },
  { id: 'ouarzazate', name: 'Ouarzazate', region: 'Draâ-Tafilalet', img: 'images/Ouarzazat/ouarzazat1.jpeg' },
  { id: 'essaouira', name: 'Essaouira', region: 'Atlantic Coast', img: 'images/Essaouira/essaouira_1.jpg' },
  { id: 'agadir', name: 'Agadir', region: 'Souss-Massa', img: 'images/Agadir/agadir_hero.png' },
  { id: 'casablanca', name: 'Casablanca', region: 'Casablanca-Settat', img: 'images/Casablanca/casablanca.png' },
  { id: 'rabat', name: 'Rabat', region: 'Rabat-Salé-Kénitra', img: 'images/rabat.jpg' },
  { id: 'tangier', name: 'Tangier', region: 'Tanger-Tetouan', img: 'images/tangier.jpg' },
  { id: 'atlas', name: 'Atlas Mountains', region: 'High Atlas', img: 'images/Marrakech/imlil_1.jpg' },
  { id: 'sahara', name: 'Sahara Desert', region: 'Erg Chebbi & Dunes', img: 'images/Zagora/zagora_hero.png' }
];

const DESTINATION_CATEGORIES = {
  marrakech: ['medina', 'imperial', 'culture'],
  fes: ['medina', 'imperial', 'culture'],
  chefchaouen: ['mountain', 'medina'],
  merzouga: ['desert', 'dunes'],
  zagora: ['desert', 'dunes'],
  ouarzazate: ['desert', 'kasbah'],
  sahara: ['desert', 'dunes'],
  essaouira: ['coastal', 'ocean'],
  agadir: ['coastal', 'ocean'],
  casablanca: ['coastal', 'imperial'],
  rabat: ['coastal', 'imperial'],
  tangier: ['coastal'],
  atlas: ['mountain', 'hiking']
};

const CUSTOM_TOUR_DURATIONS = [
  { id: '2-3', title: '2–3 Days', desc: 'Short weekend getaway & city highlights' },
  { id: '4-5', title: '4–5 Days', desc: 'Express adventure & imperial tour' },
  { id: '6-7', title: '6–7 Days', desc: 'Classic Morocco journey & desert camel trek' },
  { id: '8-10', title: '8–10 Days', desc: 'Comprehensive expedition across cities & dunes' },
  { id: '10+', title: '10+ Days', desc: 'Grand Morocco complete experience' }
];

const CUSTOM_TOUR_STYLES = [
  { id: 'luxury', title: 'Luxury', icon: 'fa-crown', desc: '5-star private riads & fine dining' },
  { id: 'cultural', title: 'Cultural', icon: 'fa-landmark', desc: 'Ancient medinas & heritage storytellers' },
  { id: 'adventure', title: 'Adventure', icon: 'fa-compass', desc: 'Desert dunes, quad biking & mountain treks' },
  { id: 'relaxation', title: 'Relaxation', icon: 'fa-spa', desc: 'Traditional hammams & peaceful coastal stays' },
  { id: 'family', title: 'Family', icon: 'fa-people-roof', desc: 'Kid-friendly pace & authentic experiences' },
  { id: 'romantic', title: 'Romantic', icon: 'fa-sparkles', desc: 'Private dinners under desert starry skies' },
  { id: 'authentic', title: 'Authentic / Local', icon: 'fa-hand-holding-heart', desc: 'Immersive Berber hospitality & craft workshops' }
];

const CUSTOM_TOUR_ACTIVITIES = [
  { id: 'desert', title: 'Desert Experience & Stargazing', icon: 'fa-sun', reqCategory: 'desert' },
  { id: 'camping', title: 'Luxury Desert Camping', icon: 'fa-campground', reqCategory: 'desert' },
  { id: 'camel', title: 'Camel Trek & Sunset Ride', icon: 'fa-dharmachakra', reqCategory: 'desert' },
  { id: 'beach', title: 'Beach & Coastal Watersports', icon: 'fa-umbrella-beach', reqCategory: 'coastal' },
  { id: 'hiking', title: 'Mountain & Oasis Hiking', icon: 'fa-mountain', reqCategory: null },
  { id: 'souks', title: 'Medina & Souks Guided Tour', icon: 'fa-store', reqCategory: null },
  { id: 'cooking', title: 'Moroccan Cooking Masterclass', icon: 'fa-utensils', reqCategory: null },
  { id: 'food', title: 'Local Street Food & Tasting', icon: 'fa-mug-hot', reqCategory: null },
  { id: 'riad', title: 'Historic Riad Stay', icon: 'fa-hotel', reqCategory: null },
  { id: 'history', title: 'Historical Sites & Kasbahs', icon: 'fa-monument', reqCategory: null },
  { id: 'photo', title: 'Photography Tour & Viewpoints', icon: 'fa-camera', reqCategory: null },
  { id: 'wellness', title: 'Traditional Hammam & Spa', icon: 'fa-leaf', reqCategory: null }
];

const CUSTOM_TOUR_ACCOMMODATION = [
  { id: 'luxury_riad', title: 'Luxury Riad', desc: 'Palatial historic riads with private courtyard & plunge pool' },
  { id: 'boutique_hotel', title: 'Boutique Hotel', desc: 'Charming boutique stays with unique local character' },
  { id: 'luxury_hotel', title: 'Luxury Hotel', desc: '5-star luxury resorts with full amenities & spas' },
  { id: 'desert_camp', title: 'Desert Camp', desc: 'Private glamping tents in Erg Chebbi with ensuite bath' },
  { id: 'standard', title: 'Comfortable / Standard', desc: 'Handpicked quality 3-4 star hotels & guesthouses' }
];

const CUSTOM_TOUR_TRANSPORTATION = [
  { id: 'private_driver', title: 'Private Driver', desc: 'Dedicated air-conditioned 4x4 or Mercedes V-Class with professional driver' },
  { id: 'rental_car', title: 'Rental Car', desc: 'Self-drive SUV or sedan delivered to your arrival city' },
  { id: 'mixed', title: 'Mixed Transportation', desc: 'Combination of high-speed train, private transfers, and short flights' },
  { id: 'recommend', title: "I don't know / Recommend for me", desc: 'Let our travel specialists select the optimal routes' }
];

const CUSTOM_TOUR_BUDGET = [
  { id: 'comfortable', title: 'Comfortable', desc: 'Value-focused high quality comfort', tier: '€' },
  { id: 'premium', title: 'Premium', desc: 'High standard with handpicked luxury riads', tier: '€€' },
  { id: 'luxury', title: 'Luxury', desc: 'Ultra-exclusive 5-star private expeditions', tier: '€€€' }
];

const CustomTourState = {
  currentStep: 1,
  destinations: [],
  duration: '',
  travelStyles: [],
  activities: [],
  accommodation: '',
  transportation: '',
  budget: '',
  preferences: '',
  contact: { name: '', email: '', phone: '', dates: '' }
};

function findDestinationId(input) {
  if (!input) return null;
  const str = String(input).trim().toLowerCase();

  let found = CUSTOM_TOUR_DESTINATIONS.find(d => d.id.toLowerCase() === str);
  if (found) return found.id;

  found = CUSTOM_TOUR_DESTINATIONS.find(d => d.name.toLowerCase() === str);
  if (found) return found.id;

  const norm = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  found = CUSTOM_TOUR_DESTINATIONS.find(d => {
    const dNorm = d.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    return dNorm === norm || norm.includes(dNorm) || dNorm.includes(norm);
  });
  if (found) return found.id;

  if (str.includes('zagora')) return 'zagora';
  if (str.includes('merzouga')) return 'merzouga';
  if (str.includes('ouarzazat')) return 'ouarzazate';
  if (str.includes('marrakech')) return 'marrakech';
  if (str.includes('fes')) return 'fes';
  if (str.includes('chefchaouen')) return 'chefchaouen';
  if (str.includes('essaouira')) return 'essaouira';
  if (str.includes('agadir')) return 'agadir';
  if (str.includes('casablanca')) return 'casablanca';
  if (str.includes('rabat')) return 'rabat';
  if (str.includes('tangier')) return 'tangier';

  return null;
}

function getAvailableActivities() {
  const selectedDests = CustomTourState.destinations || [];

  let hasDesert = false;
  let hasCoastal = false;

  selectedDests.forEach(destId => {
    const cats = DESTINATION_CATEGORIES[destId] || [];
    if (cats.includes('desert')) hasDesert = true;
    if (cats.includes('coastal')) hasCoastal = true;
  });

  return CUSTOM_TOUR_ACTIVITIES.filter(act => {
    if (act.reqCategory === 'desert') {
      return hasDesert;
    }
    if (act.reqCategory === 'coastal') {
      return hasCoastal;
    }
    return true;
  });
}

function renderCustomTourStep4() {
  const step4El = document.getElementById('ctStep4');
  if (!step4El) return;

  const availableActs = getAvailableActivities();

  const availableIds = availableActs.map(a => a.id);
  CustomTourState.activities = CustomTourState.activities.filter(id => availableIds.includes(id));

  let subtitle = 'Select all activities you would like to experience during your journey.';
  if (CustomTourState.destinations.length > 0) {
    const destNames = CUSTOM_TOUR_DESTINATIONS
      .filter(d => CustomTourState.destinations.includes(d.id))
      .map(d => d.name)
      .join(', ');
    subtitle = `Activities available for <strong>${destNames}</strong>:`;
  }

  step4El.innerHTML = `
    <h3 class="ct-step-title">Step 4 — Activities & Experiences</h3>
    <p class="ct-step-subtitle">${subtitle}</p>
    <div class="ct-option-grid">
      ${availableActs.map(act => {
    const isSel = CustomTourState.activities.includes(act.id);
    return `
          <div class="ct-option-card ${isSel ? 'is-selected' : ''}" data-val="${act.id}" onclick="window.toggleCTActivity('${act.id}')">
            <div class="ct-option-radio"></div>
            <div class="ct-option-icon"><i class="fa-solid ${act.icon}"></i></div>
            <div class="ct-option-title">${act.title}</div>
          </div>
        `;
  }).join('')}
    </div>
  `;
}

window.openCustomTourModal = function (initialDestId) {
  document.querySelectorAll('.hn-links, .nav-links, #premNavLinks, #navLinks').forEach(m => {
    m.classList.remove('hn-links-open', 'open', 'active');
  });
  document.querySelectorAll('.hamburger, .hburg').forEach(btn => {
    btn.classList.remove('is-active');
  });
  document.querySelectorAll('.drawer-backdrop').forEach(bd => {
    bd.classList.remove('drawer-backdrop-open');
  });
  document.querySelectorAll('.modal, .dest-booking-modal-overlay, #globalQuickBookModal, #destModal').forEach(m => {
    m.style.display = 'none';
  });

  let modal = document.getElementById('customTourModal');
  if (!modal) {
    initCustomTourDOM();
    modal = document.getElementById('customTourModal');
  }
  if (modal.parentElement !== document.body) {
    document.body.appendChild(modal);
  }

  let destToSelect = null;
  if (initialDestId) {
    destToSelect = findDestinationId(initialDestId);
  } else {
    const urlParams = new URLSearchParams(window.location.search);
    const paramDest = urlParams.get('dest') || urlParams.get('destination') || urlParams.get('city');
    if (paramDest) {
      destToSelect = findDestinationId(paramDest);
    }
  }

  if (destToSelect) {
    CustomTourState.destinations = [destToSelect];
    try {
      localStorage.setItem('hm_selected_dest', destToSelect);
    } catch (e) { }
  } else if (CustomTourState.destinations.length === 0) {
    const saved = localStorage.getItem('hm_selected_dest');
    if (saved && findDestinationId(saved)) {
      CustomTourState.destinations = [findDestinationId(saved)];
    }
  }

  CustomTourState.currentStep = 1;
  renderCustomTourStep(1);

  modal.style.display = 'flex';
  modal.scrollTop = 0;
  const content = modal.querySelector('.ct-modal-content');
  if (content) content.scrollTop = 0;

  lockBodyScroll(true);

  requestAnimationFrame(() => {
    modal.style.opacity = '1';
    modal.style.pointerEvents = 'auto';
    modal.setAttribute('tabindex', '-1');
    modal.focus();
  });
};

window.closeCustomTourModal = function () {
  const modal = document.getElementById('customTourModal');
  if (modal) {
    modal.style.opacity = '0';
    modal.style.pointerEvents = 'none';
    setTimeout(() => { modal.style.display = 'none'; }, 300);
  }
  lockBodyScroll(false);
};

function initCustomTourDOM() {
  if (document.getElementById('customTourModal')) return;

  const modal = document.createElement('div');
  modal.id = 'customTourModal';
  modal.innerHTML = `
    <div class="ct-modal-content">
      <button class="ct-close-btn" onclick="window.closeCustomTourModal()" aria-label="Close">&times;</button>

      <div class="ct-wizard-header">
        <div class="ct-progress-meta">
          <span class="ct-step-badge">Customize My Tour</span>
          <span class="ct-step-count" id="ctStepCount">Step 1 of 9</span>
        </div>
        <div class="ct-progress-track">
          <div class="ct-progress-fill" id="ctProgressFill" style="width: 11%;"></div>
        </div>
      </div>

      <!-- STEP 1: DESTINATIONS -->
      <div class="ct-step-content is-active" id="ctStep1">
        <h3 class="ct-step-title">Step 1 — Choose Destinations</h3>
        <p class="ct-step-subtitle">Select one or multiple Moroccan destinations you wish to include in your personalized trip.</p>
        <div class="ct-dest-grid">
          ${CUSTOM_TOUR_DESTINATIONS.map(d => `
            <div class="ct-dest-card" data-id="${d.id}" onclick="window.toggleCTDest('${d.id}')">
              <div class="ct-dest-card-img">
                <img src="${d.img}" alt="${d.name}" loading="lazy">
                <div class="ct-dest-card-overlay"></div>
                <div class="ct-dest-check"><i class="fa-solid fa-check"></i></div>
              </div>
              <div class="ct-dest-card-body">
                <div class="ct-dest-card-title">${d.name}</div>
                <div class="ct-dest-card-region"><i class="fa-solid fa-location-dot" style="color:#C85A32;"></i> ${d.region}</div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- STEP 2: DURATION -->
      <div class="ct-step-content" id="ctStep2">
        <h3 class="ct-step-title">Step 2 — Trip Duration</h3>
        <p class="ct-step-subtitle">Select the approximate duration for your customized journey.</p>
        <div class="ct-option-grid">
          ${CUSTOM_TOUR_DURATIONS.map(dur => `
            <div class="ct-option-card" data-val="${dur.id}" onclick="window.selectCTDuration('${dur.id}')">
              <div class="ct-option-radio"></div>
              <div class="ct-option-icon"><i class="fa-regular fa-calendar-days"></i></div>
              <div class="ct-option-title">${dur.title}</div>
              <div class="ct-option-desc">${dur.desc}</div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- STEP 3: TRAVEL STYLE -->
      <div class="ct-step-content" id="ctStep3">
        <h3 class="ct-step-title">Step 3 — Travel Style</h3>
        <p class="ct-step-subtitle">Choose one or more travel experiences that match your travel vision.</p>
        <div class="ct-option-grid">
          ${CUSTOM_TOUR_STYLES.map(style => `
            <div class="ct-option-card" data-val="${style.id}" onclick="window.toggleCTStyle('${style.id}')">
              <div class="ct-option-radio"></div>
              <div class="ct-option-icon"><i class="fa-solid ${style.icon}"></i></div>
              <div class="ct-option-title">${style.title}</div>
              <div class="ct-option-desc">${style.desc}</div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- STEP 4: ACTIVITIES -->
      <div class="ct-step-content" id="ctStep4">
        <h3 class="ct-step-title">Step 4 — Activities & Experiences</h3>
        <p class="ct-step-subtitle">Select all activities you would like to experience during your journey.</p>
        <div class="ct-option-grid">
          ${CUSTOM_TOUR_ACTIVITIES.map(act => `
            <div class="ct-option-card" data-val="${act.id}" onclick="window.toggleCTActivity('${act.id}')">
              <div class="ct-option-radio"></div>
              <div class="ct-option-icon"><i class="fa-solid ${act.icon}"></i></div>
              <div class="ct-option-title">${act.title}</div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- STEP 5: ACCOMMODATION -->
      <div class="ct-step-content" id="ctStep5">
        <h3 class="ct-step-title">Step 5 — Preferred Accommodation</h3>
        <p class="ct-step-subtitle">Select the style of accommodation you prefer throughout your tour.</p>
        <div class="ct-option-grid">
          ${CUSTOM_TOUR_ACCOMMODATION.map(acc => `
            <div class="ct-option-card" data-val="${acc.id}" onclick="window.selectCTAccom('${acc.id}')">
              <div class="ct-option-radio"></div>
              <div class="ct-option-icon"><i class="fa-solid fa-bed"></i></div>
              <div class="ct-option-title">${acc.title}</div>
              <div class="ct-option-desc">${acc.desc}</div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- STEP 6: TRANSPORTATION -->
      <div class="ct-step-content" id="ctStep6">
        <h3 class="ct-step-title">Step 6 — Preferred Transportation</h3>
        <p class="ct-step-subtitle">Choose your preferred mode of travel between destinations.</p>
        <div class="ct-option-grid">
          ${CUSTOM_TOUR_TRANSPORTATION.map(trans => `
            <div class="ct-option-card" data-val="${trans.id}" onclick="window.selectCTTrans('${trans.id}')">
              <div class="ct-option-radio"></div>
              <div class="ct-option-icon"><i class="fa-solid fa-car-side"></i></div>
              <div class="ct-option-title">${trans.title}</div>
              <div class="ct-option-desc">${trans.desc}</div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- STEP 7: BUDGET -->
      <div class="ct-step-content" id="ctStep7">
        <h3 class="ct-step-title">Step 7 — Budget Range</h3>
        <p class="ct-step-subtitle">Select your preferred travel budget tier.</p>
        <div class="ct-option-grid">
          ${CUSTOM_TOUR_BUDGET.map(b => `
            <div class="ct-option-card" data-val="${b.id}" onclick="window.selectCTBudget('${b.id}')">
              <div class="ct-option-radio"></div>
              <div class="ct-option-icon"><span style="font-weight:800; font-size:1.1rem;">${b.tier}</span></div>
              <div class="ct-option-title">${b.title}</div>
              <div class="ct-option-desc">${b.desc}</div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- STEP 8: PERSONAL PREFERENCES -->
      <div class="ct-step-content" id="ctStep8">
        <h3 class="ct-step-title">Step 8 — Personal Preferences</h3>
        <p class="ct-step-subtitle">Tell us anything else you would like for your trip (dietary requirements, celebratory events, travel pace, special requests...)</p>
        <div class="ct-textarea-group">
          <textarea id="ctPreferencesInput" class="ct-textarea" placeholder="Tell us anything else you would like for your trip... e.g. We are celebrating an anniversary, prefer vegetarian meals, and want a relaxed pace."></textarea>
        </div>
      </div>

      <!-- STEP 9: CONTACT DETAILS -->
      <div class="ct-step-content" id="ctStep9">
        <h3 class="ct-step-title">Step 9 — Contact Details</h3>
        <p class="ct-step-subtitle">Provide your contact details so our Moroccan travel designers can prepare your itinerary.</p>
        <div class="ct-form-grid">
          <div class="ct-input-group">
            <label class="ct-label">Full Name <span class="req">*</span></label>
            <input type="text" id="ctNameInput" class="ct-input" placeholder="e.g. Sarah Jenkins" required>
          </div>
          <div class="ct-input-group">
            <label class="ct-label">Email Address <span class="req">*</span></label>
            <input type="email" id="ctEmailInput" class="ct-input" placeholder="e.g. sarah@example.com" required>
          </div>
          <div class="ct-input-group">
            <label class="ct-label">Phone / WhatsApp <span class="req">*</span></label>
            <input type="tel" id="ctPhoneInput" class="ct-input" placeholder="e.g. +1 555 123 4567" required>
          </div>
          <div class="ct-input-group">
            <label class="ct-label">Preferred Travel Dates <span class="req">*</span></label>
            <input type="text" id="ctDatesInput" class="ct-input" placeholder="e.g. October 15–25, 2026 or Spring 2027" required>
          </div>
        </div>
      </div>

      <!-- STEP 10: SUMMARY REVIEW -->
      <div class="ct-step-content" id="ctStep10">
        <h3 class="ct-step-title" style="color:#C85A32;">Your Morocco Journey</h3>
        <p class="ct-step-subtitle">Review your custom tour selections below before submitting your request.</p>

        <div class="ct-summary-box" id="ctSummaryBox">
          <!-- Dynamic Summary Output -->
        </div>
      </div>

      <!-- STEP 11: SUCCESS CONFIRMATION -->
      <div class="ct-step-content" id="ctStep11">
        <div class="ct-success-card">
          <div class="ct-success-icon"><i class="fa-solid fa-check"></i></div>
          <h3 class="ct-step-title" style="text-align:center;">Request Received! 🎉</h3>
          <p class="ct-step-subtitle" style="text-align:center; max-width:600px; margin:0 auto 24px;">
            Thank you <strong id="ctSuccessName" style="color:#C85A32;">Traveler</strong>! Your custom Morocco tour request has been successfully submitted. Choose your preferred contact channel to connect directly with our travel designers:
          </p>

          <div style="display:flex; justify-content:center; gap:12px; flex-wrap:wrap; max-width:640px; margin:0 auto 20px;">
            <button onclick="window.sendCustomTourWhatsApp()" class="ct-btn-next" style="background:#25D366; box-shadow:0 6px 20px rgba(37,211,102,0.4); flex:1; min-width:130px;">
              WhatsApp &nbsp;<i class="fa-brands fa-whatsapp"></i>
            </button>
            <button onclick="window.sendCustomTourEmail()" class="ct-btn-next" style="background:#C85A32; box-shadow:0 6px 20px rgba(200,90,50,0.4); flex:1; min-width:130px;">
              Email Us &nbsp;<i class="fa-solid fa-envelope"></i>
            </button>
            <button onclick="window.sendCustomTourFacebook()" class="ct-btn-next" style="background:#1877F2; box-shadow:0 6px 20px rgba(24,119,242,0.4); flex:1; min-width:130px;">
              Facebook &nbsp;<i class="fa-brands fa-facebook-f"></i>
            </button>
            <button onclick="window.sendCustomTourInstagram()" class="ct-btn-next" style="background:linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%); box-shadow:0 6px 20px rgba(220,39,67,0.4); flex:1; min-width:130px;">
              Instagram &nbsp;<i class="fa-brands fa-instagram"></i>
            </button>
          </div>

          <div style="text-align:center;">
            <button onclick="window.closeCustomTourModal()" class="ct-btn-back">
              Done & Close
            </button>
          </div>
        </div>
      </div>

      <!-- NAV FOOTER -->
      <div class="ct-nav-footer" id="ctNavFooter">
        <button type="button" class="ct-btn-back" id="ctBackBtn" onclick="window.prevCTStep()">
          <i class="fa-solid fa-arrow-left"></i> Back
        </button>

        <button type="button" class="ct-btn-next" id="ctNextBtn" onclick="window.nextCTStep()">
          Continue &nbsp;<i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>

    </div>
  `;
  document.body.appendChild(modal);
}

window.toggleCTDest = function (id) {
  const idx = CustomTourState.destinations.indexOf(id);
  if (idx > -1) {
    CustomTourState.destinations.splice(idx, 1);
  } else {
    CustomTourState.destinations.push(id);
  }
  document.querySelectorAll('#ctStep1 .ct-dest-card').forEach(card => {
    const cardId = card.getAttribute('data-id');
    card.classList.toggle('is-selected', CustomTourState.destinations.includes(cardId));
  });

  const availableActs = getAvailableActivities();
  const availableIds = availableActs.map(a => a.id);
  CustomTourState.activities = CustomTourState.activities.filter(actId => availableIds.includes(actId));

  if (CustomTourState.currentStep === 4) {
    renderCustomTourStep4();
  }
};

window.selectCTDuration = function (val) {
  CustomTourState.duration = val;
  document.querySelectorAll('#ctStep2 .ct-option-card').forEach(card => {
    card.classList.toggle('is-selected', card.getAttribute('data-val') === val);
  });
};

window.toggleCTStyle = function (val) {
  const idx = CustomTourState.travelStyles.indexOf(val);
  if (idx > -1) {
    CustomTourState.travelStyles.splice(idx, 1);
  } else {
    CustomTourState.travelStyles.push(val);
  }
  document.querySelectorAll('#ctStep3 .ct-option-card').forEach(card => {
    const cVal = card.getAttribute('data-val');
    card.classList.toggle('is-selected', CustomTourState.travelStyles.includes(cVal));
  });
};

window.toggleCTActivity = function (val) {
  const idx = CustomTourState.activities.indexOf(val);
  if (idx > -1) {
    CustomTourState.activities.splice(idx, 1);
  } else {
    CustomTourState.activities.push(val);
  }
  document.querySelectorAll('#ctStep4 .ct-option-card').forEach(card => {
    const cVal = card.getAttribute('data-val');
    card.classList.toggle('is-selected', CustomTourState.activities.includes(cVal));
  });
};

window.selectCTAccom = function (val) {
  CustomTourState.accommodation = val;
  document.querySelectorAll('#ctStep5 .ct-option-card').forEach(card => {
    card.classList.toggle('is-selected', card.getAttribute('data-val') === val);
  });
};

window.selectCTTrans = function (val) {
  CustomTourState.transportation = val;
  document.querySelectorAll('#ctStep6 .ct-option-card').forEach(card => {
    card.classList.toggle('is-selected', card.getAttribute('data-val') === val);
  });
};

window.selectCTBudget = function (val) {
  CustomTourState.budget = val;
  document.querySelectorAll('#ctStep7 .ct-option-card').forEach(card => {
    card.classList.toggle('is-selected', card.getAttribute('data-val') === val);
  });
};

function renderCustomTourStep(step) {
  CustomTourState.currentStep = step;

  // Hide all steps
  for (let i = 1; i <= 11; i++) {
    const el = document.getElementById('ctStep' + i);
    if (el) el.classList.remove('is-active');
  }

  const currentEl = document.getElementById('ctStep' + step);
  if (currentEl) currentEl.classList.add('is-active');

  const stepCount = document.getElementById('ctStepCount');
  const progressFill = document.getElementById('ctProgressFill');
  const backBtn = document.getElementById('ctBackBtn');
  const nextBtn = document.getElementById('ctNextBtn');
  const navFooter = document.getElementById('ctNavFooter');

  if (step === 1) {
    document.querySelectorAll('#ctStep1 .ct-dest-card').forEach(card => {
      const cardId = card.getAttribute('data-id');
      card.classList.toggle('is-selected', CustomTourState.destinations.includes(cardId));
    });
  } else if (step === 4) {
    renderCustomTourStep4();
  }

  if (step <= 9) {
    if (navFooter) navFooter.style.display = 'flex';
    if (stepCount) stepCount.textContent = `Step ${step} of 9`;
    if (progressFill) progressFill.style.width = `${Math.round((step / 9) * 100)}%`;

    if (backBtn) backBtn.style.visibility = step === 1 ? 'hidden' : 'visible';
    if (nextBtn) {
      nextBtn.innerHTML = step === 9 ? 'Review My Journey &nbsp;<i class="fa-solid fa-eye"></i>' : 'Continue &nbsp;<i class="fa-solid fa-arrow-right"></i>';
    }
  } else if (step === 10) {
    if (navFooter) navFooter.style.display = 'flex';
    if (stepCount) stepCount.textContent = 'Summary Review';
    if (progressFill) progressFill.style.width = '100%';

    if (backBtn) backBtn.style.visibility = 'visible';
    if (nextBtn) {
      nextBtn.innerHTML = 'Request My Personalized Tour &nbsp;<i class="fa-solid fa-paper-plane"></i>';
    }
    renderCustomTourSummary();
  } else if (step === 11) {
    if (navFooter) navFooter.style.display = 'none';
  }

  const modal = document.getElementById('customTourModal');
  if (modal) {
    const content = modal.querySelector('.ct-modal-content');
    if (content) content.scrollTop = 0;
  }
}

window.nextCTStep = function () {
  const step = CustomTourState.currentStep;

  // Validation before progressing
  if (step === 1) {
    if (CustomTourState.destinations.length === 0) {
      showToast('Please select at least 1 destination');
      return;
    }
  } else if (step === 2) {
    if (!CustomTourState.duration) {
      showToast('Please select your approximate trip duration');
      return;
    }
  } else if (step === 3) {
    if (CustomTourState.travelStyles.length === 0) {
      showToast('Please select at least 1 travel style');
      return;
    }
  } else if (step === 4) {
    if (CustomTourState.activities.length === 0) {
      showToast('Please select at least 1 activity');
      return;
    }
  } else if (step === 5) {
    if (!CustomTourState.accommodation) {
      showToast('Please select your preferred accommodation style');
      return;
    }
  } else if (step === 6) {
    if (!CustomTourState.transportation) {
      showToast('Please select your transportation option');
      return;
    }
  } else if (step === 7) {
    if (!CustomTourState.budget) {
      showToast('Please select your budget range');
      return;
    }
  } else if (step === 8) {
    const prefEl = document.getElementById('ctPreferencesInput');
    if (prefEl) CustomTourState.preferences = prefEl.value.trim();
  } else if (step === 9) {
    const name = document.getElementById('ctNameInput')?.value.trim();
    const email = document.getElementById('ctEmailInput')?.value.trim();
    const phone = document.getElementById('ctPhoneInput')?.value.trim();
    const dates = document.getElementById('ctDatesInput')?.value.trim();

    if (!name || !email || !phone || !dates) {
      showToast('Please complete all required contact fields');
      return;
    }

    CustomTourState.contact = { name, email, phone, dates };
  } else if (step === 10) {
    // Final Submit Action
    window.submitCustomTour();
    return;
  }

  renderCustomTourStep(step + 1);
};

window.prevCTStep = function () {
  if (CustomTourState.currentStep > 1) {
    renderCustomTourStep(CustomTourState.currentStep - 1);
  }
};

function renderCustomTourSummary() {
  const box = document.getElementById('ctSummaryBox');
  if (!box) return;

  const destObjs = CUSTOM_TOUR_DESTINATIONS.filter(d => CustomTourState.destinations.includes(d.id));
  const durObj = CUSTOM_TOUR_DURATIONS.find(d => d.id === CustomTourState.duration);
  const styleObjs = CUSTOM_TOUR_STYLES.filter(s => CustomTourState.travelStyles.includes(s.id));
  const actObjs = CUSTOM_TOUR_ACTIVITIES.filter(a => CustomTourState.activities.includes(a.id));
  const accObj = CUSTOM_TOUR_ACCOMMODATION.find(a => a.id === CustomTourState.accommodation);
  const transObj = CUSTOM_TOUR_TRANSPORTATION.find(t => t.id === CustomTourState.transportation);
  const budObj = CUSTOM_TOUR_BUDGET.find(b => b.id === CustomTourState.budget);

  box.innerHTML = `
    <div class="ct-summary-grid">
      <div class="ct-summary-item" style="grid-column: 1 / -1;">
        <span class="ct-summary-label"><i class="fa-solid fa-map-location-dot" style="color:#C85A32;"></i> Selected Destinations</span>
        <div class="ct-summary-chips">
          ${destObjs.map(d => `<span class="ct-chip"><i class="fa-solid fa-location-pin"></i> ${d.name}</span>`).join('')}
        </div>
      </div>

      <div class="ct-summary-item">
        <span class="ct-summary-label"><i class="fa-regular fa-calendar-days"></i> Duration & Dates</span>
        <span class="ct-summary-val">${durObj ? durObj.title : 'N/A'} (${CustomTourState.contact.dates || 'TBD'})</span>
      </div>

      <div class="ct-summary-item">
        <span class="ct-summary-label"><i class="fa-solid fa-gem"></i> Travel Style</span>
        <div class="ct-summary-chips">
          ${styleObjs.map(s => `<span class="ct-chip">${s.title}</span>`).join('')}
        </div>
      </div>

      <div class="ct-summary-item" style="grid-column: 1 / -1;">
        <span class="ct-summary-label"><i class="fa-solid fa-compass"></i> Planned Activities</span>
        <div class="ct-summary-chips">
          ${actObjs.map(a => `<span class="ct-chip"><i class="fa-solid ${a.icon}"></i> ${a.title}</span>`).join('')}
        </div>
      </div>

      <div class="ct-summary-item">
        <span class="ct-summary-label"><i class="fa-solid fa-bed"></i> Accommodation</span>
        <span class="ct-summary-val">${accObj ? accObj.title : 'N/A'}</span>
      </div>

      <div class="ct-summary-item">
        <span class="ct-summary-label"><i class="fa-solid fa-car"></i> Transportation</span>
        <span class="ct-summary-val">${transObj ? transObj.title : 'N/A'}</span>
      </div>

      <div class="ct-summary-item">
        <span class="ct-summary-label"><i class="fa-solid fa-wallet"></i> Budget Tier</span>
        <span class="ct-summary-val" style="color:#C85A32;">${budObj ? budObj.title + ' (' + budObj.tier + ')' : 'N/A'}</span>
      </div>

      <div class="ct-summary-item">
        <span class="ct-summary-label"><i class="fa-solid fa-user"></i> Contact Traveler</span>
        <span class="ct-summary-val">${CustomTourState.contact.name} (${CustomTourState.contact.phone})</span>
      </div>

      ${CustomTourState.preferences ? `
        <div class="ct-summary-item" style="grid-column: 1 / -1;">
          <span class="ct-summary-label"><i class="fa-regular fa-comment-dots"></i> Additional Preferences</span>
          <p style="font-size:0.92rem; color:var(--hm-text-body); font-style:italic; background:rgba(200,90,50,0.05); padding:10px 14px; border-radius:12px; border:1px dashed rgba(200,90,50,0.2);">
            "${CustomTourState.preferences}"
          </p>
        </div>
      ` : ''}
    </div>
  `;
}

window.submitCustomTour = function () {
  const nameEl = document.getElementById('ctSuccessName');
  if (nameEl) nameEl.textContent = CustomTourState.contact.name || 'Traveler';

  renderCustomTourStep(11);
  showToast(`Custom Tour request submitted for ${CustomTourState.contact.name}! ✨`);
};

window.sendCustomTourWhatsApp = function () {
  const WHATSAPP_NUMBER = '212660082066';
  const destNames = CUSTOM_TOUR_DESTINATIONS.filter(d => CustomTourState.destinations.includes(d.id)).map(d => d.name).join(', ');
  const durObj = CUSTOM_TOUR_DURATIONS.find(d => d.id === CustomTourState.duration);
  const styles = CUSTOM_TOUR_STYLES.filter(s => CustomTourState.travelStyles.includes(s.id)).map(s => s.title).join(', ');

  const text = `Hello 👋 Discover Hidden Morocco!\nI would like to request a Personalized Custom Tour:\n\n📍 Destinations: ${destNames}\n⏱️ Duration: ${durObj ? durObj.title : ''}\n✨ Style: ${styles}\n📅 Dates: ${CustomTourState.contact.dates}\n👤 Name: ${CustomTourState.contact.name}\n📞 Phone: ${CustomTourState.contact.phone}\n📧 Email: ${CustomTourState.contact.email}\n📝 Notes: ${CustomTourState.preferences || 'N/A'}\n\nThank you!`;

  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
};

window.sendCustomTourEmail = function () {
  const destNames = CUSTOM_TOUR_DESTINATIONS.filter(d => CustomTourState.destinations.includes(d.id)).map(d => d.name).join(', ');
  const durObj = CUSTOM_TOUR_DURATIONS.find(d => d.id === CustomTourState.duration);
  const styles = CUSTOM_TOUR_STYLES.filter(s => CustomTourState.travelStyles.includes(s.id)).map(s => s.title).join(', ');

  const subject = `Custom Tour Request - ${CustomTourState.contact.name || 'Traveler'}`;
  const body = `Hello Discover Hidden Morocco Team,\n\nI would like to request a Tailor-Made Private Tour:\n\n📍 Selected Destinations: ${destNames}\n⏱️ Duration: ${durObj ? durObj.title : ''}\n✨ Travel Style: ${styles}\n📅 Preferred Dates: ${CustomTourState.contact.dates}\n👤 Traveler Name: ${CustomTourState.contact.name}\n📞 Phone / WhatsApp: ${CustomTourState.contact.phone}\n📧 Email: ${CustomTourState.contact.email}\n📝 Special Requests: ${CustomTourState.preferences || 'None'}\n\nLooking forward to your reply!`;

  window.location.href = `mailto:contact@discoverhiddenmorocco.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

window.sendCustomTourFacebook = function () {
  window.open('https://www.facebook.com/discoverhiddenmorocco', '_blank');
};

window.sendCustomTourInstagram = function () {
  window.open('https://www.instagram.com/discover_hidden_morocco/', '_blank');
};

// Wire up openCustomTourModal buttons globally across all pages
document.addEventListener('click', function (e) {
  const trigger = e.target.closest('.custom-tour-trigger, [data-action="custom-tour"]');
  if (trigger) {
    e.preventDefault();
    window.openCustomTourModal();
  }
});

/* ==========================================================================
   DYNAMIC REVIEWS & RATING ENGINE (Synchronized, Real-Time & Filterable)
   ========================================================================== */

const INITIAL_SEED_REVIEWS = [];

const ReviewState = {
  ratingFilter: 'all',
  destFilter: 'all'
};

function getReviewsDatabase() {
  const stored = localStorage.getItem('hm_reviews_dataset');
  if (stored !== null) {
    try {
      let parsed = JSON.parse(stored);
      if (Array.isArray(parsed)) {
        // Clean out legacy mock seed reviews (rev_1 through rev_6) if present from previous sessions
        const seedIds = ['rev_1', 'rev_2', 'rev_3', 'rev_4', 'rev_5', 'rev_6'];
        const cleaned = parsed.filter(r => !seedIds.includes(r.id));
        if (cleaned.length !== parsed.length) {
          localStorage.setItem('hm_reviews_dataset', JSON.stringify(cleaned));
        }
        return cleaned;
      }
    } catch (e) {
      console.error('Error parsing stored reviews:', e);
    }
  }
  localStorage.setItem('hm_reviews_dataset', JSON.stringify([]));
  return [];
}

function saveReviewsDatabase(reviews) {
  localStorage.setItem('hm_reviews_dataset', JSON.stringify(reviews));
}

// ── Rating Star Selector Engine ──────────────────────────────────────────────
let currentReviewRating = 5;

window.setReviewRating = function (rating) {
  currentReviewRating = rating;
  const ratingInput = document.getElementById('reviewRatingVal');
  if (ratingInput) ratingInput.value = rating;

  const starsContainer = document.getElementById('starRatingSelect');
  if (starsContainer) {
    const stars = starsContainer.querySelectorAll('.star-btn');
    stars.forEach((star, index) => {
      if (index < rating) {
        star.classList.remove('fa-regular');
        star.classList.add('fa-solid');
      } else {
        star.classList.remove('fa-solid');
        star.classList.add('fa-regular');
      }
    });
  }
};

// ── Calculate Real Statistics ────────────────────────────────────────────────
function calculateReviewStats(reviews) {
  const total = reviews.length;
  if (total === 0) {
    return {
      total: 0,
      avg: "0.0",
      starsHtml: "☆☆☆☆☆",
      counts: { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 },
      percents: { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 }
    };
  }

  const sum = reviews.reduce((acc, r) => acc + (r.rating || 5), 0);
  const avgNum = sum / total;
  const avg = avgNum.toFixed(1);

  const roundedAvg = Math.round(avgNum);
  const starsHtml = '★'.repeat(roundedAvg) + '☆'.repeat(5 - roundedAvg);

  const counts = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
  reviews.forEach(r => {
    const rVal = Math.min(5, Math.max(1, r.rating || 5));
    counts[rVal] = (counts[rVal] || 0) + 1;
  });

  const percents = {
    5: Math.round((counts[5] / total) * 100),
    4: Math.round((counts[4] / total) * 100),
    3: Math.round((counts[3] / total) * 100),
    2: Math.round((counts[2] / total) * 100),
    1: Math.round((counts[1] / total) * 100)
  };

  return { total, avg, starsHtml, counts, percents };
}

// ── Filter Functionality ─────────────────────────────────────────────────────
window.filterReviewsByRating = function (rating, btnEl) {
  ReviewState.ratingFilter = rating;
  if (btnEl) {
    const container = btnEl.closest('.star-filters');
    if (container) {
      container.querySelectorAll('.review-filter-btn').forEach(btn => btn.classList.remove('active'));
      btnEl.classList.add('active');
    }
  }
  refreshReviewsView();
};

window.filterReviewsByDestination = function (dest) {
  ReviewState.destFilter = dest;
  refreshReviewsView();
};

function getFilteredReviews() {
  const all = getReviewsDatabase();
  return all.filter(r => {
    // Rating Filter
    if (ReviewState.ratingFilter !== 'all' && r.rating != parseInt(ReviewState.ratingFilter, 10)) {
      return false;
    }
    // Destination Filter
    if (ReviewState.destFilter !== 'all') {
      const targetDest = ReviewState.destFilter.toLowerCase();
      const itemDest = (r.destination || '').toLowerCase();
      const itemCountry = (r.country || '').toLowerCase();
      const itemText = (r.text || '').toLowerCase();
      if (!itemDest.includes(targetDest) && !itemCountry.includes(targetDest) && !itemText.includes(targetDest)) {
        return false;
      }
    }
    return true;
  });
}

// ── Refresh Entire Reviews UI ────────────────────────────────────────────────
function refreshReviewsView() {
  const allReviews = getReviewsDatabase();
  const filtered = getFilteredReviews();
  const stats = calculateReviewStats(filtered);

  // Update Rating Summary Box
  const avgEl = document.getElementById('summaryAvgRating');
  const starsEl = document.getElementById('summaryAvgStars');
  const countEl = document.getElementById('summaryReviewCount');

  if (avgEl) avgEl.textContent = stats.total > 0 ? stats.avg : "0.0";
  if (starsEl) starsEl.textContent = stats.total > 0 ? stats.starsHtml : "☆☆☆☆☆";
  if (countEl) {
    countEl.textContent = stats.total > 0 
      ? `Based on ${stats.total} ${stats.total === 1 ? 'review' : 'reviews'}`
      : `0 reviews for this selection`;
  }

  // Update Progress Bars & Percentages
  for (let i = 1; i <= 5; i++) {
    const fillEl = document.getElementById(`barFill${i}`);
    const percentEl = document.getElementById(`barPercent${i}`);
    const pct = stats.percents[i] || 0;
    if (fillEl) fillEl.style.width = `${pct}%`;
    if (percentEl) percentEl.textContent = `${pct}%`;
  }

  // Update Page Subtitle
  const subtitleEl = document.getElementById('heroReviewSubtitle');
  if (subtitleEl) {
    subtitleEl.textContent = allReviews.length > 0 
      ? `Over ${allReviews.length} verified reviews shared by travelers exploring Morocco.`
      : `No reviews recorded yet. Be the first traveler to share your journey!`;
  }

  // Update Home Page Stats Strip
  const homeTotalEl = document.getElementById('homeTotalReviews');
  const homeTotalLabelEl = document.getElementById('homeTotalReviewsLabel');
  const homeAvgEl = document.getElementById('homeAvgRating');

  if (homeTotalEl) homeTotalEl.textContent = allReviews.length > 0 ? `${allReviews.length}` : '0';
  if (homeTotalLabelEl) homeTotalLabelEl.textContent = allReviews.length === 1 ? 'Verified Review' : 'Verified Reviews';
  if (homeAvgEl) {
    const overallStats = calculateReviewStats(allReviews);
    homeAvgEl.textContent = overallStats.total > 0 ? `${overallStats.avg}/5` : 'N/A';
  }

  // Render Cards in Reviews Grid (Testimonials Page)
  const gridContainer = document.getElementById('reviewsGridContainer');
  if (gridContainer) {
    renderCardsIntoGrid(gridContainer, filtered);
  }

  // Render Preview Cards in Home Page Reviews Grid
  const homeGridContainer = document.getElementById('homeReviewsGrid');
  if (homeGridContainer) {
    renderCardsIntoGrid(homeGridContainer, filtered.slice(0, 3));
  }
}

function renderCardsIntoGrid(container, reviews) {
  container.innerHTML = '';

  if (reviews.length === 0) {
    container.innerHTML = `
      <div class="empty-reviews-card" style="grid-column: 1 / -1; text-align: center; padding: 48px 24px; background: var(--hm-bg-card); border: 1px dashed var(--hm-border); border-radius: 24px; margin: 16px 0;">
        <div style="font-size: 2.8rem; margin-bottom: 12px; opacity: 0.8;">💬</div>
        <h3 style="font-family: var(--hm-font-serif, serif); font-size: 1.4rem; color: var(--hm-text-heading); margin-bottom: 8px;">No Reviews Found</h3>
        <p style="color: var(--hm-text-muted); font-size: 0.95rem; margin-bottom: 20px;">No traveler reviews match the selected filter. Be the first to share your experience!</p>
        <button class="btn-primary" onclick="scrollToReviewForm()" style="padding: 12px 28px; border-radius: 99px; border: none; font-weight: 600; cursor: pointer; background: linear-gradient(135deg, #C85A32 0%, #E7A93C 100%); color: #fff;">
          <i class="fa-solid fa-pen-to-square"></i> Leave a Review
        </button>
      </div>
    `;
    return;
  }

  reviews.forEach(r => {
    const card = document.createElement('div');
    card.className = 'review-card';
    const starsStr = '★'.repeat(r.rating || 5) + '☆'.repeat(5 - (r.rating || 5));
    const verifiedBadge = r.verified 
      ? `<div class="review-verified"><i class="fa-solid fa-circle-check"></i> Verified</div>`
      : '';

    card.innerHTML = `
      <div class="review-header">
        <div class="review-stars" style="color:#E7A93C;">${starsStr}</div>
        ${verifiedBadge}
      </div>
      <p class="review-text">"${escapeHtmlStr(r.text)}"</p>
      <div class="review-author">
        <div class="review-avatar" style="background: linear-gradient(135deg, #C85A32 0%, #E7A93C 100%); color: #fff;">${escapeHtmlStr(r.avatar || 'TR')}</div>
        <div class="review-author-info">
          <strong>${escapeHtmlStr(r.author)}</strong>
          <span>${escapeHtmlStr(r.country || 'Traveler')}</span>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

window.openReviewModal = function () {
  let modal = document.getElementById('reviewModal');
  if (!modal) {
    // If modal is not on this page, redirect to testimonials.html with query flag
    window.location.href = 'testimonials.html?openReviewModal=true';
    return;
  }
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
  setTimeout(() => {
    modal.classList.add('active');
  }, 10);
};

window.closeReviewModal = function () {
  let modal = document.getElementById('reviewModal');
  if (!modal) return;
  modal.classList.remove('active');
  setTimeout(() => {
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }, 250);
};

window.scrollToReviewForm = function () {
  window.openReviewModal();
};

// ── Submit New Review Handler ────────────────────────────────────────────────
window.handleReviewSubmit = function (event) {
  event.preventDefault();

  const authorInput = document.getElementById('reviewAuthor');
  const locationInput = document.getElementById('reviewLocation');
  const destSelect = document.getElementById('reviewDestSelect');
  const textInput = document.getElementById('reviewText');
  const ratingVal = parseInt(document.getElementById('reviewRatingVal')?.value || '5', 10);

  if (!authorInput || !textInput) return;

  const author = authorInput.value.trim();
  const rawLocation = locationInput ? locationInput.value.trim() : 'Traveler';
  const selectedDest = destSelect ? destSelect.value : 'general';
  const destName = destSelect && destSelect.options[destSelect.selectedIndex] ? destSelect.options[destSelect.selectedIndex].text : '';
  const text = textInput.value.trim();

  if (!author || !text) {
    if (window.showToast) window.showToast('Please fill in your name and comment!');
    return;
  }

  const initials = author.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase() || 'TR';
  const countryDisplay = selectedDest !== 'general' && destName ? `${rawLocation} · ${destName}` : rawLocation;

  const newReview = {
    id: 'rev_' + Date.now(),
    author: author,
    avatar: initials,
    country: countryDisplay,
    destination: selectedDest,
    destinationName: destName,
    rating: ratingVal,
    verified: true, // Actual traveler submission from site
    text: text,
    date: new Date().toISOString().split('T')[0]
  };

  // Add to database & save
  const db = getReviewsDatabase();
  db.unshift(newReview);
  saveReviewsDatabase(db);

  // Refresh view in real-time
  refreshReviewsView();

  // Reset Form
  authorInput.value = '';
  if (locationInput) locationInput.value = '';
  textInput.value = '';
  window.setReviewRating(5);

  // Close Modal
  window.closeReviewModal();

  if (window.showToast) {
    window.showToast('Thank you! Your review has been published ✨');
  } else {
    alert('Thank you! Your review has been published ✨');
  }
};

function escapeHtmlStr(str) {
  if (!str) return '';
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}

// ── Initialize Reviews System on DOM Load ────────────────────────────────────
document.addEventListener('DOMContentLoaded', function () {
  refreshReviewsView();
  if (window.location.search.includes('openReviewModal=true') || window.location.hash === '#addReviewForm') {
    setTimeout(function () {
      openReviewModal();
    }, 200);
  }
});

