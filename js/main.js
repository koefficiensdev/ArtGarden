/* ============================================================
   ArtDesign – Main JS
   ============================================================ */

/* ---- SVG Icons (inline, no dependency) ---- */
const ICONS = {
  arrowRight: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`,
  chevronDown: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>`,
  menu: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>`,
  x: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`,
  phone: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 9.5a19.79 19.79 0 0 1-3-8.63A2 2 0 0 1 3.62 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
  mail: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
  mapPin: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
  clock: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  calendar: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>`,
  user: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  penLine: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>`,
  checkCircle: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>`,
  check: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>`,
};

/* ---- Inject SVG icons into placeholders ---- */
document.querySelectorAll('[data-icon]').forEach(el => {
  const name = el.getAttribute('data-icon');
  if (ICONS[name]) el.innerHTML = ICONS[name];
});

/* ---- Header: scroll + mobile menu ---- */
(function initHeader() {
  const header = document.querySelector('.site-header');
  const mobileBtn = document.querySelector('.mobile-menu-btn');
  const mobileNav = document.querySelector('.mobile-nav');
  const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
  const servicesToggle = document.querySelector('.mobile-services-toggle');
  const mobileSub = document.querySelector('.mobile-sub');
  const isHome = window.location.pathname === '/' || window.location.pathname === '/index.html';
  let mobileOpen = false;

  function updateHeaderBg() {
    if (!header) return;
    const scrolled = window.scrollY > 20;
    const isMobile = window.innerWidth < 1024;

    // Keep the home header fully transparent on mobile in all states.
    if (isHome && isMobile) {
      header.classList.remove('scrolled', 'bg-dark-80');
      header.classList.add('transparent');
      return;
    }

    header.classList.remove('scrolled', 'transparent', 'bg-dark-80');
    if (mobileOpen) {
      header.classList.add('scrolled');
    } else if (scrolled && !(isHome && isMobile)) {
      header.classList.add('scrolled');
    } else {
      header.classList.add('bg-dark-80');
    }
  }

  window.addEventListener('scroll', updateHeaderBg);
  window.addEventListener('resize', updateHeaderBg);
  updateHeaderBg();

  if (mobileBtn && mobileNav) {
    mobileBtn.addEventListener('click', () => {
      mobileOpen = !mobileOpen;
      mobileNav.classList.toggle('open', mobileOpen);
      header.classList.toggle('menu-open', mobileOpen);
      if (mobileMenuIcon) mobileMenuIcon.innerHTML = mobileOpen ? ICONS.x : ICONS.menu;
      updateHeaderBg();
    });
  }

  if (servicesToggle && mobileSub) {
    servicesToggle.addEventListener('click', () => {
      const open = mobileSub.classList.toggle('open');
      const chevron = servicesToggle.querySelector('[data-icon="chevronDown"]');
      if (chevron) chevron.style.transform = open ? 'rotate(180deg)' : '';
    });
  }

  // Close desktop dropdown on scroll or click outside
  const navItem = document.getElementById('nav-services');
  if (navItem) {
    document.addEventListener('click', (e) => {
      if (!navItem.contains(e.target)) {
        navItem.classList.remove('open');
      }
    });
    window.addEventListener('scroll', () => {
      navItem.classList.remove('open');
    }, { passive: true });
  }

  // Close mobile menu on click outside or scroll
  function closeMobileMenu() {
    if (!mobileOpen) return;
    mobileOpen = false;
    mobileNav.classList.remove('open');
    header.classList.remove('menu-open');
    if (mobileMenuIcon) mobileMenuIcon.innerHTML = ICONS.menu;
    updateHeaderBg();
  }

  document.addEventListener('click', (e) => {
    if (mobileOpen && !header.contains(e.target)) {
      closeMobileMenu();
    }
  });

  window.addEventListener('scroll', () => {
    if (mobileOpen) closeMobileMenu();
  }, { passive: true });

  // Mark active nav links
  const links = document.querySelectorAll('.nav-desktop a, .mobile-nav a');
  links.forEach(link => {
    const href = link.getAttribute('href');
    const path = window.location.pathname.replace(/\/index\.html$/, '/');
    if (href && (href === path || (href !== '/' && path.startsWith(href)))) {
      link.classList.add('active');
    }
  });
})();

/* ---- Scroll-triggered fade-in ---- */
(function initFadeIn() {
  const els = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right');
  if (!els.length) return;
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const delay = e.target.getAttribute('data-delay') || '0';
        setTimeout(() => e.target.classList.add('visible'), parseFloat(delay) * 550);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.02, rootMargin: '0px 0px -6% 0px' });
  els.forEach(el => obs.observe(el));
})();

/* ---- Mobile hero fade gradient (dynamic) ---- */
(function initMobileFade() {
  const grid = document.querySelector('.mobile-services-grid');
  const fade = document.querySelector('.mobile-hero-fade');
  if (!grid || !fade) return;

  function update() {
    const vh = window.innerHeight;
    const rect = grid.getBoundingClientRect();
    const firstRow = grid.firstElementChild;
    const rowH = firstRow ? firstRow.getBoundingClientRect().height : 76;
    const fadeStart = (rect.top / vh) * 100;
    const fadeEnd = ((rect.top + rowH / 2) / vh) * 100;
    fade.style.background = `linear-gradient(to bottom, transparent ${fadeStart.toFixed(1)}%, var(--cream) ${fadeEnd.toFixed(1)}%)`;
  }
  requestAnimationFrame(update);
  window.addEventListener('resize', update);
})();

/* ---- Contact form ---- */
(function initContactForm() {
  const form = document.getElementById('contact-form-el');
  const formWrap = document.querySelector('.form-wrap');
  const successBox = document.querySelector('.success-box');
  if (!form) return;

  function showToast(msg, isError) {
    let toast = document.querySelector('.toast-msg');
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'toast-msg';
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.toggle('error', !!isError);
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3500);
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = form.querySelector('[name="name"]').value.trim();
    const email = form.querySelector('[name="email"]').value.trim();
    const message = form.querySelector('[name="message"]').value.trim();
    const consent = form.querySelector('[name="consent"]').checked;

    if (!name || !email || !message) {
      showToast('Kérjük töltse ki a kötelező mezőket!', true);
      return;
    }
    if (!consent) {
      showToast('Kérjük fogadja el az adatkezelési feltételeket!', true);
      return;
    }

    const submitBtn = form.querySelector('[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.textContent = 'KÜLDÉS...';

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone: form.querySelector('[name="phone"]').value, message }),
      });
      if (res.ok) {
        if (formWrap) formWrap.classList.add('hidden');
        if (successBox) successBox.classList.add('visible');
        showToast('Üzenet sikeresen elküldve!');
      } else {
        throw new Error('Server error');
      }
    } catch {
      showToast('Hiba történt. Kérjük próbálja újra.', true);
      submitBtn.disabled = false;
      submitBtn.textContent = 'ÜZENET KÜLDÉSE';
    }
  });
})();

/* ---- Footer: dynamic year ---- */
const yearEl = document.querySelector('.footer-year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ---- Mobile UX enhancements (index only) ---- */
(function initMobileUX() {
  if (window.innerWidth >= 1024) return;

  /* 1. Hero text staggered entrance */
  const heroText = document.querySelector('.mobile-hero-text');
  if (heroText) {
    const items = heroText.querySelectorAll('h1, .gold-sub, .desc, .btn');
    items.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(22px)';
      el.style.transition = 'opacity 0.5s ease, transform 0.5s cubic-bezier(0.22,1,0.36,1)';
    });
    let base = 180;
    items.forEach((el, i) => {
      setTimeout(() => {
        el.style.opacity = '';
        el.style.transform = '';
      }, base + i * 110);
    });
  }

  /* 2. Service card staggered bounce-in entrance */
  const cards = document.querySelectorAll('.mobile-service-card');
  cards.forEach((card, i) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px) scale(0.96)';
    card.style.transition = 'opacity 0.38s ease, transform 0.38s cubic-bezier(0.34,1.56,0.64,1)';
    setTimeout(() => {
      card.style.opacity = '';
      card.style.transform = '';
    }, 480 + i * 90);
  });

  /* 3. Gold ripple on card tap */
  cards.forEach(card => {
    card.addEventListener('pointerdown', function(e) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const ripple = document.createElement('span');
      ripple.style.cssText = [
        'position:absolute',
        'left:' + x + 'px',
        'top:' + y + 'px',
        'width:6px',
        'height:6px',
        'border-radius:50%',
        'background:rgba(197,165,114,.45)',
        'transform:translate(-50%,-50%) scale(0)',
        'pointer-events:none',
        'z-index:10',
        'animation:mobileRipple 0.55s cubic-bezier(0,0.4,0.6,1) forwards'
      ].join(';');
      card.appendChild(ripple);
      ripple.addEventListener('animationend', () => ripple.remove());
    });
  });

  /* 4. Parallax on hero background while scrolling */
  const bgImg = document.querySelector('.mobile-hero-bg-img');
  if (bgImg) {
    window.addEventListener('scroll', () => {
      const offset = window.scrollY * 0.22;
      bgImg.style.backgroundPositionY = 'calc(-12px + ' + offset + 'px)';
    }, { passive: true });
  }

  /* 5. Subtle logo breathing glow */
  const heroLogo = document.querySelector('.hero-logo');
  if (heroLogo) {
    heroLogo.style.animation = 'heroLogoBreathe 3.8s ease-in-out infinite';
  }
})();
