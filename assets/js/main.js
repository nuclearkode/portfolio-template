const I18N = {
  en: {
    title: 'A Project By Ahmed Badawy',
    brand: 'A Project By Ahmed Badawy',
    themeBtn: 'Theme',
    langBtn: 'FR',
    badge: 'PASSION',
    heroTitle: 'A PASSION',
    heroTagline: 'Ahmed Badawy — Mechatronics & Robotics',
    heroBody: 'Multidisciplinary engineer crafting robotics systems, interactive controls, and story-driven demos.',
    ctaProjects: 'View Projects',
    ctaResume: 'Resume',
    res: 'Resources',
    proj: 'Projects',
    abt: 'About',
    cv: 'Resume',
    projects: 'Projects',
    p1Title: 'Aerial Drone',
    p1Check: 'Check it out',
    p1Summary:
      'End-to-end aerial platform—from CAD frame iterations to control firmware—built for harsh weather mapping missions. The twin-tile layout contrasts runtime telemetry with briefing schematics.',
    p1Bullets: [
      'Composite frame with modular arms stress-tested for 20% overload scenarios.',
      'Flight stack integrates PX4 autopilot, lidar altimetry, and RTK corrections for sub-meter accuracy.',
      'Scenario-driven demos built in Unity to let stakeholders rehearse inspections before field trials.'
    ],
    pMarineTitle: 'Marine Vehicle — ROS 2 Jazzy',
    pMarineCheck: 'Check it out',
    pMarineSummary:
      'Autonomous hull-cleaning prototype combining machine vision with redundant inertial guidance. I led the sensor fusion pipeline and hardware bring-up across power-hungry payloads.',
    pMarineBullets: [
      'Designed brush tooling and sealed housings suitable for brackish water while staying under the thrust budget.',
      'Architected ROS 2 nodes for SLAM, optical tracking, and mission control with configurable recovery states.',
      'Captured validation runs, logged anomalies, and produced debriefs that informed iterative hull coverage gains.'
    ],
    pSTMTitle: 'STM32F411 4-Layer Controller',
    pSTMCheck: 'Check it out',
    pSTMSummary:
      'Compact sensor hub that mates inertial, magnetic, and absolute encoders over USB-C. Layout emphasises signal integrity while meeting strict fabrication tolerances.',
    pSTMBullets: [
      'Length-matched high-speed pairs and reference planes tuned for EMI resilience near brushed motors.',
      'Bench characterization suite automated via Python + PyVISA to profile drift and noise floors.',
      'Released fabrication pack with assembly drawings, BOM, test plan, and firmware bring-up scripts.'
    ],
    p8051Title: '8051 Motor Speed Controller',
    p8051Check: 'Check it out',
    p8051Summary:
      'Legacy 8051-based PWM driver retrofitted with closed-loop encoder feedback. Educational platform for debugging low-level timing constraints.',
    p8051Bullets: [
      'Dual 7-segment multiplexing renders telemetry without bloating instruction cycles.',
      'Scope-led tuning uncovered timer overflow edge cases later mitigated in documentation.',
      'Shared as a teaching kit with annotated schematics and a troubleshooting decision tree.'
    ],
    pLabviewTitle: 'Automated Widget Assembly',
    pLabviewCheck: 'Check it out',
    pLabviewSummary:
      'LabVIEW-driven cell orchestrating sensors, conveyors, and pneumatic tooling to demonstrate resilient small-batch automation.',
    pLabviewBullets: [
      'Fail-safe routines re-queue workpieces during brownouts while preserving traceability.',
      'Human-machine interface exposes diagnostics, manual overrides, and trend logging for audits.',
      'Documentation packaged for plant engineers to adapt sequence logic to new SKUs.'
    ],
    pSnowTitle: 'Custom Snow Plow Conversion',
    pSnowCheck: 'Check it out',
    pSnowSummary:
      'Ride-on mower transformation into a winter-ready plow. Fabrication sprint mixing TIG welding, drivetrain tuning, and ergonomic field testing.',
    pSnowBullets: [
      'Engineered hydraulic steering linkages to survive repetitive shocks without service downtime.',
      'Optimized blade geometry with CFD approximations to reduce clogging and throw snow cleanly.',
      'Produced step-by-step retrofit manual and maintenance schedule for owner adoption.'
    ],
    pDiagramTitle: 'Diagram Weaver (AI)',
    pDiagramCheck: 'Check it out',
    pDiagramSummary:
      'Research companion that blends AI-assisted ideation with semantic search for design teams under deadline pressure.',
    pDiagramBullets: [
      'Diagram Bot drafts multi-view schematics that engineers fine-tune instead of starting from scratch.',
      'Genie assistant curates research snippets, citations, and data provenance in a single brief.',
      'Responsive canvas supports live collaboration with latency-optimized WebSocket syncing.'
    ],
    resDesc: 'Curated tools and references I use regularly.',
    aboutP:
      'I build interactive robotics experiences and polished product websites. My work blends performance, accessibility, and delightful motion.',
    cvdesc: 'View or download my resume.',
    openPdf: 'Open PDF',
    download: 'Download',
    exp: 'Experience',
    heroCarouselCard1: 'Marine vehicle tool — Open project',
    heroCarouselCard2: 'STM32F411 board — See details',
    heroCarouselCard3: '8051 speed control — Learn more',
    heroCarouselCard4: 'Automation line — Visit project',
    heroCarouselCard5: 'Custom plow — Fabrication notes',
    heroCarouselCard6: 'Diagram Weaver — AI tool',
    copyright: '© 2025 Ahmed Badawy'
  },
  fr: {
    title: 'Un projet par Ahmed Badawy',
    brand: 'Un projet par Ahmed Badawy',
    themeBtn: 'Thème',
    langBtn: 'EN',
    badge: 'PASSION',
    heroTitle: 'UNE PASSION',
    heroTagline: 'Ahmed Badawy — Mécatronique & Robotique',
    heroBody:
      'Ingénieur pluridisciplinaire réalisant des systèmes robotiques, des contrôleurs interactifs et des démonstrations immersives.',
    ctaProjects: 'Voir les projets',
    ctaResume: 'CV',
    res: 'Ressources',
    proj: 'Projets',
    abt: 'À propos',
    cv: 'CV',
    projects: 'Projets',
    p1Title: 'Drone aérien',
    p1Check: 'Découvrir',
    p1Summary:
      'Plateforme aérienne de bout en bout—du châssis CAO au firmware—destinée à la cartographie par météo difficile. Les deux tuiles opposent télémétrie et schémas de briefing.',
    p1Bullets: [
      'Châssis composite modulaire testé en surcharge de 20 % pour sécuriser les missions critiques.',
      "Pile de vol PX4 intégrant lidar altimétrique et corrections RTK pour une précision submétrique.",
      'Démos scénarisées dans Unity pour préparer les inspections avant les essais terrain.'
    ],
    pMarineTitle: 'Véhicule marin — ROS 2 Jazzy',
    pMarineCheck: 'Découvrir',
    pMarineSummary:
      "Prototype de nettoyage de coque combinant vision et guidage inertiel redondant. J'ai dirigé la fusion de capteurs et la mise sous tension du matériel.",
    pMarineBullets: [
      'Conception des brosses et carters étanches compatibles eau saumâtre tout en respectant la poussée disponible.',
      'Architecture ROS 2 pour SLAM, suivi optique et contrôle mission avec états de reprise configurables.',
      'Analyse des essais, journalisation des anomalies et rapports pour améliorer la couverture de coque.'
    ],
    pSTMTitle: 'Contrôleur STM32F411 4 couches',
    pSTMCheck: 'Découvrir',
    pSTMSummary:
      'Concentrateur capteurs compact combinant inertiel, magnétique et encodeurs absolus via USB-C. Le routage privilégie l’intégrité du signal.',
    pSTMBullets: [
      'Paires haute vitesse appairées et plans de référence optimisés contre le bruit proche des moteurs.',
      'Banc de caractérisation automatisé (Python + PyVISA) pour profiler dérive et bruit.',
      'Pack de fabrication publié avec plans d\'assemblage, nomenclature et scripts de mise en route.'
    ],
    p8051Title: 'Contrôleur de vitesse 8051',
    p8051Check: 'Découvrir',
    p8051Summary:
      'Driver PWM 8051 modernisé avec boucle fermée. Support pédagogique pour diagnostiquer les contraintes de minutage bas niveau.',
    p8051Bullets: [
      'Double affichage 7 segments multiplié sans alourdir le cycle d’instruction.',
      'Analyse à l’oscilloscope des débordements minuteur et documentation des correctifs.',
      'Partagé comme kit d’apprentissage avec schémas annotés et arbre de diagnostic.'
    ],
    pLabviewTitle: 'Assemblage automatisé',
    pLabviewCheck: 'Découvrir',
    pLabviewSummary:
      "Cellule LabVIEW pilotant capteurs, convoyeurs et outillage pneumatique pour une automatisation résiliente.",
    pLabviewBullets: [
      'Routines de secours replanifiant les pièces lors des microcoupures tout en gardant la traçabilité.',
      'IHM offrant diagnostics, modes manuels et journalisation pour audit.',
      'Documentation prête pour l\'adaptation à de nouvelles références produit.'
    ],
    pSnowTitle: 'Conversion chasse-neige',
    pSnowCheck: 'Découvrir',
    pSnowSummary:
      'Transformation d’un tracteur tondeuse en chasse-neige robuste. Mélange de soudure TIG, réglage transmission et essais terrain.',
    pSnowBullets: [
      'Liaisons hydrauliques dimensionnées pour encaisser les chocs répétés sans maintenance.',
      'Géométrie de lame optimisée (approche CFD) pour limiter le colmatage et projeter efficacement.',
      'Guide de rétrofit et plan d’entretien livrés au propriétaire.'
    ],
    pDiagramTitle: 'Diagram Weaver (IA)',
    pDiagramCheck: 'Découvrir',
    pDiagramSummary:
      'Compagnon de recherche mêlant idéation assistée et recherche sémantique pour équipes pressées.',
    pDiagramBullets: [
      'Bot de diagrammes générant des vues multiples prêtes à être affinées.',
      'Assistant Genie rassemblant extraits, citations et provenance en un dossier.',
      'Canvas collaboratif optimisé pour une synchronisation en temps réel.'
    ],
    resDesc: 'Outils et références que j’utilise au quotidien.',
    aboutP:
      'Je conçois des expériences robotiques interactives et des sites produits soignés. Performance, accessibilité et motion design sont au cœur de mon travail.',
    cvdesc: 'Consultez ou téléchargez mon CV.',
    openPdf: 'Ouvrir le PDF',
    download: 'Télécharger',
    exp: 'Expérience',
    heroCarouselCard1: 'Outil marin — Ouvrir le projet',
    heroCarouselCard2: 'Carte STM32F411 — Voir détails',
    heroCarouselCard3: 'Contrôle 8051 — En savoir plus',
    heroCarouselCard4: 'Ligne automatisée — Visiter le projet',
    heroCarouselCard5: 'Chasse-neige — Notes de fabrication',
    heroCarouselCard6: 'Diagram Weaver — Outil IA',
    copyright: '© 2025 Ahmed Badawy'
  }
};

function applyI18n(lang) {
  const dict = I18N[lang] || I18N.en;
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (!key) return;

    if (key === 'title') {
      document.title = dict[key];
      return;
    }

    if (Array.isArray(dict[key])) {
      if (el.dataset.targetList) {
        el.innerHTML = '';
        dict[key].forEach((item) => {
          const li = document.createElement('li');
          li.textContent = item;
          el.appendChild(li);
        });
      }
      return;
    }

    if (dict[key]) {
      el.textContent = dict[key];
    }
  });
}

const htmlEl = document.documentElement;
const themeToggle = document.getElementById('toggleTheme');

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const isDark = htmlEl.getAttribute('data-theme') === 'dark';
    const nextTheme = isDark ? 'light' : 'dark';
    htmlEl.setAttribute('data-theme', nextTheme);
    document.body.classList.toggle('dark', !isDark);
    localStorage.setItem('theme', nextTheme);
  });
}

const storedTheme = localStorage.getItem('theme');
if (storedTheme) {
  htmlEl.setAttribute('data-theme', storedTheme);
  document.body.classList.toggle('dark', storedTheme === 'dark');
}

(function initHeroTilt() {
  const stage = document.getElementById('drone3d');
  if (!stage) return;
  const inner = stage.querySelector('.media-inner');
  let rotX = -8;
  let rotY = 0;

  function update() {
    inner.style.transformOrigin = '50% 50%';
    inner.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
  }

  stage.addEventListener('mousemove', (event) => {
    const rect = stage.getBoundingClientRect();
    const nx = (event.clientX - rect.left) / rect.width - 0.5;
    rotY = nx * 22;
    update();
  });

  stage.addEventListener('wheel', (event) => {
    rotY += event.deltaY * 0.05;
    update();
  });

  update();
})();

function initCarousel(ringId) {
  const ring = document.getElementById(ringId);
  if (!ring) return;

  let startX = 0;
  let dragging = false;
  let velocity = 0;
  let raf;
  ring._x = ring._x || 0;
  let rotY = ring._rotY || 0;

  function setX(x) {
    ring.style.transform = `translateX(${x}px) rotateY(${rotY}deg)`;
    ring._x = x;
  }

  function setRot(deg) {
    rotY = deg;
    ring.style.transform = `translateX(${ring._x || 0}px) rotateY(${rotY}deg)`;
    ring._rotY = rotY;
  }

  function centerXOf(element) {
    const { left, right } = element.getBoundingClientRect();
    return (left + right) / 2;
  }

  function updateCards(activeCard) {
    const cards = [...ring.querySelectorAll('.card')];
    const viewportCenter = window.innerWidth / 2;

    cards.forEach((card) => {
      const delta = centerXOf(card) - viewportCenter;
      const normalized = Math.max(-1, Math.min(1, -delta / viewportCenter));
      card.style.transform = `perspective(900px) rotateY(${normalized * 12}deg) translateZ(${(1 - Math.abs(normalized)) * 30}px)`;
      card.classList.toggle('is-center', activeCard ? card === activeCard : Math.abs(delta) < 20);
    });
  }

  function snapToCenter() {
    const cards = [...ring.querySelectorAll('.card')];
    if (!cards.length) return;

    const viewportCenter = window.innerWidth / 2;
    let bestCard = cards[0];
    let bestDelta = Infinity;

    cards.forEach((card) => {
      const delta = centerXOf(card) - viewportCenter;
      if (Math.abs(delta) < Math.abs(bestDelta)) {
        bestDelta = delta;
        bestCard = card;
      }
    });

    const targetX = (ring._x || 0) - bestDelta;
    const start = ring._x || 0;
    const duration = 400;
    const startTime = performance.now();

    function easeOutCubic(t) {
      return 1 - Math.pow(1 - t, 3);
    }

    function animate(now) {
      const progress = Math.min(1, (now - startTime) / duration);
      const value = start + (targetX - start) * easeOutCubic(progress);
      setX(value);
      updateCards(bestCard);
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  }

  function momentum() {
    velocity *= 0.95;
    setX((ring._x || 0) + velocity);
    updateCards();
    if (Math.abs(velocity) > 0.5) {
      raf = requestAnimationFrame(momentum);
    } else {
      snapToCenter();
    }
  }

  function onPointerDown(event) {
    dragging = true;
    startX = (event.touches ? event.touches[0].clientX : event.clientX) - (ring._x || 0);
    ring.style.cursor = 'grabbing';
    cancelAnimationFrame(raf);
  }

  function onPointerMove(event) {
    if (!dragging) return;
    const clientX = event.touches ? event.touches[0].clientX : event.clientX;
    const x = clientX - startX;
    velocity = x - (ring._x || 0);
    setX(x);
    updateCards();
  }

  function onPointerUp() {
    if (!dragging) return;
    dragging = false;
    ring.style.cursor = 'grab';
    momentum();
  }

  const scroller = ring.parentElement;
  if (scroller) {
    scroller.addEventListener(
      'wheel',
      (event) => {
        const delta = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY;
        setX((ring._x || 0) - delta);
        setRot((ring._rotY || 0) + delta * 0.02);
        updateCards();
        event.preventDefault();
      },
      { passive: false }
    );
  }

  ring.addEventListener('mousedown', onPointerDown);
  ring.addEventListener('touchstart', onPointerDown, { passive: true });
  window.addEventListener('mousemove', onPointerMove, { passive: false });
  window.addEventListener('touchmove', onPointerMove, { passive: true });
  window.addEventListener('mouseup', onPointerUp);
  window.addEventListener('touchend', onPointerUp);

  ring.addEventListener('click', (event) => {
    const link = event.target.closest('a.card');
    if (!link) return;
    const target = link.getAttribute('data-target');
    if (target) {
      document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
    }
  });

  setX(ring._x || 0);
  updateCards();
  snapToCenter();
}

initCarousel('ringTop');

(function initTimeline() {
  const timeline = document.getElementById('timeline');
  if (!timeline) return;
  const dots = [...timeline.querySelectorAll('.t-dot')];

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          dots.forEach((dot, index) => {
            setTimeout(() => {
              dot.classList.add('on');
            }, index * 420);
          });
          observer.disconnect();
        }
      });
    },
    { threshold: 0.2 }
  );

  observer.observe(timeline);
})();

const langToggle = document.getElementById('toggleLang');
let currentLang = localStorage.getItem('lang') || 'en';
applyI18n(currentLang);

if (langToggle) {
  langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'fr' : 'en';
    localStorage.setItem('lang', currentLang);
    applyI18n(currentLang);
  });
}
