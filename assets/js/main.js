const I18N = {
  en: {
    title: 'A Project By Ahmed Badawy',
    brand: 'A Project By Ahmed Badawy',
    menuBtn: 'Menu',
    themeBtn: 'Theme',
    langBtn: 'FR',
    nav: 'Navigation',
    close: 'Close',
    works: 'Work',
    studio: 'About',
    resume: 'Resume',
    heroTitle: 'A PASSION',
    projects: 'Projects'
  },
  fr: {
    title: 'Un projet par Ahmed Badawy',
    brand: 'Un projet par Ahmed Badawy',
    menuBtn: 'Menu',
    themeBtn: 'Thème',
    langBtn: 'EN',
    nav: 'Navigation',
    close: 'Fermer',
    works: 'Travaux',
    studio: 'À propos',
    resume: 'CV',
    heroTitle: 'UNE PASSION',
    projects: 'Projets'
  }
};

function applyI18n(lang) {
  const dict = I18N[lang] || I18N.en;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (!key || !dict[key]) return;

    if (key === 'title') {
      document.title = dict[key];
    } else {
      el.textContent = dict[key];
    }
  });
}

const htmlEl = document.documentElement;
const themeToggle = document.getElementById('toggleTheme');

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const isDark = htmlEl.getAttribute('data-theme') === 'dark';
    htmlEl.setAttribute('data-theme', isDark ? 'light' : 'dark');
    document.body.classList.toggle('dark', !isDark);
  });
}

const overlay = document.getElementById('overlay');
const openMenu = document.getElementById('openMenu');
const closeMenu = document.getElementById('closeMenu');

if (openMenu && overlay) {
  openMenu.addEventListener('click', () => {
    overlay.classList.add('open');
    overlay.setAttribute('aria-hidden', 'false');
  });
}

if (closeMenu && overlay) {
  closeMenu.addEventListener('click', () => {
    overlay.classList.remove('open');
    overlay.setAttribute('aria-hidden', 'true');
  });
}

const dot = document.getElementById('cursor');
const big = document.getElementById('cursorLg');

window.addEventListener('mousemove', (event) => {
  if (!dot || !big) return;
  const { clientX: x, clientY: y } = event;
  dot.style.opacity = '1';
  big.style.opacity = '1';
  dot.style.transform = `translate(${x - 2}px, ${y - 2}px)`;
  big.style.transform = `translate(${x - 12}px, ${y - 12}px)`;
});

window.addEventListener('mouseout', () => {
  if (!dot || !big) return;
  dot.style.opacity = '0';
  big.style.opacity = '0';
});

(function () {
  const orbit = document.getElementById('armOrbit');
  const stage = document.getElementById('armStage');

  if (!orbit || !stage) return;

  const pBase = document.getElementById('pBase');
  const pUpper = document.getElementById('pUpper');
  const pFore = document.getElementById('pFore');
  const pWrist = document.getElementById('pWrist');
  const pClaw = document.getElementById('pClaw');

  let rotX = -12;
  let rotY = -20;
  let dragging = false;
  let lastX = 0;
  let lastY = 0;
  let target = { x: 0, y: 0 };

  stage.addEventListener('mousedown', (event) => {
    dragging = true;
    lastX = event.clientX;
    lastY = event.clientY;
  });

  window.addEventListener('mouseup', () => {
    dragging = false;
  });

  window.addEventListener('mousemove', (event) => {
    if (!dragging) return;
    const dx = event.clientX - lastX;
    const dy = event.clientY - lastY;
    lastX = event.clientX;
    lastY = event.clientY;
    rotY += dx * 0.2;
    rotX += dy * 0.2;
    orbit.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
  });

  stage.addEventListener('wheel', (event) => {
    rotY += event.deltaY * 0.05;
    orbit.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
  });

  stage.addEventListener('mousemove', (event) => {
    const rect = stage.getBoundingClientRect();
    target = {
      x: (event.clientX - rect.left) / rect.width,
      y: (event.clientY - rect.top) / rect.height
    };
  });

  function lerp(a, b, t) {
    return a + (b - a) * t;
  }

  let a0 = 0;
  let a1 = 10;
  let a2 = -8;
  let a3 = 6;
  let a4 = 8;

  function tick() {
    const tx = (target.x - 0.5) * 2;
    const ty = (target.y - 0.6) * 2;

    a0 = lerp(a0, tx * 25, 0.08);
    a1 = lerp(a1, (0.2 - ty) * 45, 0.08);
    a2 = lerp(a2, -ty * 35, 0.08);
    a3 = lerp(a3, ty * 25, 0.08);
    a4 = lerp(a4, Math.sin(performance.now() * 0.003) * 10, 0.12);

    if (pBase) pBase.style.transform = `translate3d(-80px, 120px, 0) rotateZ(${a0}deg)`;
    if (pUpper) pUpper.style.transform = `translate3d(180px, 0, 0) rotateZ(${a1}deg)`;
    if (pFore) pFore.style.transform = `translate3d(200px, 0, 0) rotateZ(${a2}deg)`;
    if (pWrist) pWrist.style.transform = `translate3d(200px, 0, 0) rotateZ(${a3}deg)`;
    if (pClaw) pClaw.style.transform = `translate3d(180px, -2px, 0) rotateZ(${a4}deg)`;

    requestAnimationFrame(tick);
  }

  tick();
})();

const langBtn = document.getElementById('toggleLang');
let currentLang = localStorage.getItem('lang') || 'en';
applyI18n(currentLang);

if (langBtn) {
  langBtn.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'fr' : 'en';
    localStorage.setItem('lang', currentLang);
    applyI18n(currentLang);
  });
}
