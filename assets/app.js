/* =====================================================================
   AISensorEdgeComp — Shared JS for all pages
   Theme toggle, modal helpers, scroll reveal, parallax, smooth nav,
   mock login, mock AI search, sidebar active link tracking.
   ===================================================================== */

// === Theme toggle with persistence ===
window.toggleTheme = function () {
  const html = document.documentElement;
  const newTheme = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', newTheme);
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', newTheme === 'dark' ? '#050810' : '#f8fafc');
  try { localStorage.setItem('theme', newTheme); } catch (e) {}
};

(function initTheme() {
  try {
    const saved = localStorage.getItem('theme');
    if (saved) document.documentElement.setAttribute('data-theme', saved);
  } catch (e) {}
})();

// === Modal helpers ===
window.openModal = function (id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.classList.add('open');
  document.body.style.overflow = 'hidden';
  if (id === 'searchModal') {
    setTimeout(() => {
      const input = document.getElementById('searchInput');
      if (input) input.focus();
    }, 100);
  }
};
window.closeModal = function (id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.classList.remove('open');
  document.body.style.overflow = '';
};
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-overlay.open').forEach(function (m) {
      m.classList.remove('open');
    });
    document.body.style.overflow = '';
  }
});

// === Mock login ===
window.handleLogin = function () {
  closeModal('loginModal');
  alert('Demo only — authentication is wired to the live MVP dashboard (https://preview-chat-beeb4b2b-e7e5-4b02-a2cd-72b95656e3a8.space-z.ai/). Email partners@aisensoredgecomp.ai for early access.');
};

// === Mock AI search (rule-based; live MVP uses z-ai-web-dev-sdk on the backend) ===
const QA_PAIRS = [
  { q: /tam|market.*size/i, a: "Our TAM is $547B by 2030 (global IoT market, IoT Analytics). Our SAM — AI-enabled IIoT + smart infrastructure — is $84B. Our SOM (5-year target across agriculture, manufacturing, and environment wedges) is $3.2B. CAGR is 21.7%." },
  { q: /zero.?shot|anomaly/i, a: "Our time-series foundation model is pre-trained on public industrial corpora (NASA bearings, Case Western Reserve, SECOM, ARPA-E) plus scraped OPC-UA streams. It achieves 0.89 AUC-ROC on unseen asset classes — no labeled failures required. The model is in the family of Chronos / TimeGPT / Moment, extended with sensor-fusion transformers." },
  { q: /vertical|wedge/i, a: "We go vertical-first. v1 (shipping Q1 2026): Agriculture — per-field intelligence, +18% yield / −30% input cost. v2 (Q3 2026): Manufacturing — zero-shot predictive maintenance, −42% unplanned downtime. v2 also: Environment — self-calibrating air/water mesh, −85% calibration cost. v3 (2027): Energy and Smart City." },
  { q: /series.*a|funding|use of funds/i, a: "We're raising $15–25M Series A, closing Q4 2026. Use of funds: 50% engineering (TS-FM team, edge runtime, vertical teams), 25% GTM (sales + design-partner support), 15% compute + data acquisition, 10% G&A + runway. 18-month runway post-close." },
  { q: /edge.*cloud|workload.*placement/i, a: "Our edge-cloud liquid placement scheduler watches bandwidth cost, latency need, model accuracy drift, and battery state across the device fleet. It dynamically reassigns inference jobs between edge and cloud. In simulations this reduces inference cost by 63% and end-to-end latency by 4× vs. hardcoded placements." },
  { q: /team|founder/i, a: "Four founders: Dr. Aarav Kapoor (CEO, ex-Cognite Eng Director), Maya Rodriguez (CTO, ex-Microsoft Azure IoT Principal Eng, KubeEdge maintainer), Dr. Jian Liu (Chief Scientist, ex-Augury Head of ML, 28 NeurIPS/ICML papers), Sofia Costa (CRO, ex-Planet Labs VP Sales Agri, $0→$40M ARR). Combined 60+ years in industrial IoT, distributed systems, applied ML." },
  { q: /roi|return/i, a: "Vertical-specific ROI: Agriculture — +18% yield, −30% input cost (verified across 3 design-partner farms). Manufacturing — −42% unplanned downtime (target, based on Augury's published benchmarks and our zero-shot model performance). Environment — −85% calibration cost via self-calibrating sensor mesh. Energy — grid resilience KPIs pending pilot." },
  { q: /architecture|stack/i, a: "Four layers, one substrate: (1) Sensing — multi-modal sensor ontology, (2) Connectivity — protocol-agnostic bridge (LoRaWAN/5G/OPC-UA/MQTT), (3) Edge Compute — KubeEdge + TinyML + WASM + liquid workload placement, (4) Intelligence — TS-FM + Graph RAG + causal inference + LLM-native query. See the Architecture page for protocols, data flow, and benchmarks." },
  { q: /contact|reach|email/i, a: "Investor relations: partners@aisensoredgecomp.ai · Design partners: design@aisensoredgecomp.ai · Press: press@aisensoredgecomp.ai. We respond within 24 hours. For technical deep-dives, mention your vertical and team size." },
  { q: /differ|competitor|why you/i, a: "Unlike horizontal platforms (AWS IoT, Azure IoT) we are vertical-first with pre-trained TS-FM. Unlike vertical specialists (Augury, Cognite, Satelligence) we are building the universal substrate — every wedge compounds the foundation model. Unlike DIY (ThingsBoard, Eclipse Ditto) we ship the intelligence layer, not just plumbing." },
  { q: /sensing|sensor|calibrat/i, a: "Layer 01 — Sensing: We ingest from any sensor (vibration, gas, vision, hyperspectral, mmWave, soil, weather, AIS, EO) and normalize to a canonical semantic schema. Self-calibration mesh uses physics redundancy + sparse ground truth + distributed estimation to cut recalibration cost by 85%. See the Sensing layer page for the full ontology." },
  { q: /connectivity|protocol|opc|modbus|mqtt/i, a: "Layer 02 — Connectivity: Protocol-agnostic bridge spanning OPC-UA, Modbus, Profinet, EtherCAT, MQTT, CoAP, LoRaWAN, NB-IoT, 5G mMTC, Wi-Fi HaLow, TSN, direct-to-satellite. LLM-assisted semantic normalization cuts new-factory onboarding from 6 months to 3 weeks. See the Connectivity layer page for the full protocol matrix." },
  { q: /edge.*compute|kubeedge|tinyml|wasm/i, a: "Layer 03 — Edge Compute: KubeEdge for orchestration, TinyML on $1 MCUs, WebAssembly for portable functions. Liquid workload placement scheduler runs every 30s, scoring each inference job across latency, bandwidth, accuracy drift, battery, carbon. Reduces inference cost 63% vs cloud-only. See the Edge Compute page for silicon support and scheduler internals." },
  { q: /ts.?fm|foundation.*model|graph.*rag|causal/i, a: "Layer 04 — Intelligence: 350M-parameter TS-FM pretrained on 50M hours of public industrial data. Graph RAG layer for retrieval-augmented reasoning. Causal inference (PC algorithm + do-calculus) lifts correlations into causal relationships. LLM-native query interface with verifiable citation chains. See the Intelligence page for benchmarks and worked examples." },
];

window.handleSearch = function () {
  const input = document.getElementById('searchInput');
  if (!input) return;
  const q = input.value.trim();
  if (!q) return;
  const match = QA_PAIRS.find(p => p.q.test(q));
  const answer = match ? match.a : "Good question. The live MVP (https://preview-chat-beeb4b2b-e7e5-4b02-a2cd-72b95656e3a8.space-z.ai/) answers this via a Retrieval-Augmented Generation pipeline grounded on our architecture docs, sensor streams, and ERP records. For the full answer, request a briefing at partners@aisensoredgecomp.ai.";
  const results = document.getElementById('searchResults');
  if (results) {
    results.innerHTML = '<div class="search-result"><div class="q">Q: ' + q + '</div><div class="a">' + answer + '</div></div>';
  }
};

// === Scroll reveal ===
(function initReveal() {
  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(function (el) {
    observer.observe(el);
  });
})();

// === Subtle parallax on hero glow ===
(function initParallax() {
  const glow = document.querySelector('.page-hero-glow, .hero-glow');
  if (!glow) return;
  document.addEventListener('mousemove', function (e) {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    glow.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
  });
})();

// === Smooth nav offset ===
(function initSmoothNav() {
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 70;
        const y = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    });
  });
})();

// === Sidebar active link tracking (for sub-pages with sidebar TOC) ===
(function initSidebarTracking() {
  const sidebarLinks = document.querySelectorAll('.sidebar a');
  const sections = document.querySelectorAll('.doc-section');
  if (!sidebarLinks.length || !sections.length) return;
  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        sidebarLinks.forEach(function (l) { l.classList.remove('active'); });
        const active = document.querySelector('.sidebar a[href="#' + e.target.id + '"]');
        if (active) active.classList.add('active');
      }
    });
  }, { rootMargin: '-30% 0px -60% 0px' });
  sections.forEach(function (s) { observer.observe(s); });
})();

// === Set data-theme on click for theme toggle ===
window.addEventListener('DOMContentLoaded', function () {
  const themeBtn = document.querySelector('.theme-toggle');
  if (themeBtn) themeBtn.addEventListener('click', window.toggleTheme);
});

// =====================================================================
// MEGA-MENU NAV — injected on page load
// Enhances the existing <nav> with a 4-column mega-menu showing every
// page on the site, grouped by category. Also adds a floating "site
// map" button bottom-left that opens the same menu from anywhere.
// =====================================================================

(function initMegaMenu() {
  const PAGES = [
    {
      section: "Landing",
      items: [
        { href: "index.html", label: "Home", desc: "Overview + hero" },
      ]
    },
    {
      section: "Topical Deep Dives",
      items: [
        { href: "problem.html", label: "Problem & Market", desc: "4 problems, $547B TAM" },
        { href: "architecture.html", label: "Architecture", desc: "4-layer overview" },
        { href: "sensors.html", label: "Sensors Catalog", desc: "8 modalities" },
        { href: "sensor-types.html", label: "Sensor Types & Arch", desc: "12 types, 96 live" },
        { href: "ai-stack.html", label: "AI/ML Stack", desc: "TS-FM + Graph RAG" },
        { href: "verticals.html", label: "Verticals", desc: "5 wedges" },
        { href: "roadmap.html", label: "Roadmap", desc: "6 quarters" },
        { href: "team.html", label: "Team", desc: "4 founders" },
        { href: "contact.html", label: "Contact", desc: "Investor paths" },
      ]
    },
    {
      section: "Problem Deep Dives",
      items: [
        { href: "protocol-heterogeneity.html", label: "Protocol Heterogeneity", desc: "16 protocols → 3 weeks" },
        { href: "calibration-drift.html", label: "Calibration Drift", desc: "−85% recalibration cost" },
        { href: "edge-cloud-placement.html", label: "Edge-Cloud Placement", desc: "5-axis liquid scheduler" },
        { href: "unlabeled-industrial-data.html", label: "Unlabeled Data", desc: "Zero-shot TS-FM, 0.89 AUC" },
      ]
    },
    {
      section: "Layer Architecture",
      items: [
        { href: "layer-sensing.html", label: "Layer 01: Sensing", desc: "Ontology + calibration" },
        { href: "layer-connectivity.html", label: "Layer 02: Connectivity", desc: "12 protocols" },
        { href: "layer-edge.html", label: "Layer 03: Edge Compute", desc: "Liquid placement" },
        { href: "layer-intelligence.html", label: "Layer 04: Intelligence", desc: "TS-FM 350M" },
      ]
    },
    {
      section: "Engineering & Scenarios",
      items: [
        { href: "engineering.html", label: "Engineering Hub", desc: "87-file repo" },
        { href: "system-design.html", label: "System Design", desc: "10-section doc" },
        { href: "architecture-deep.html", label: "Technical Deep Dive", desc: "Engineering due-diligence" },
        { href: "architecture-interactive.html", label: "Interactive Architecture", desc: "Click + animate" },
        { href: "comparison.html", label: "Competitive Comparison", desc: "27 dimensions, 8 competitors" },
        { href: "sectors.html", label: "Sectors Hub", desc: "7 verticals" },
      ]
    },
    {
      section: "Live Scenarios",
      items: [
        { href: "scenario-offshore-oil-gas.html", label: "Oil & Gas Offshore", desc: "64 assets, 192 sensors" },
        { href: "scenario-hospital-icu.html", label: "Hospital ICU", desc: "104 assets, 428 sensors" },
        { href: "scenario-autonomous-vehicles.html", label: "Autonomous Vehicles", desc: "96 assets, 374 sensors" },
        { href: "scenario-chemical-plant.html", label: "Chemical Plant", desc: "85 assets, 274 sensors" },
        { href: "scenario-smart-grid.html", label: "Smart Grid", desc: "165 assets, 612 sensors" },
        { href: "scenario-mining.html", label: "Mining", desc: "66 assets, 236 sensors" },
        { href: "scenario-water-treatment.html", label: "Water Treatment", desc: "60 assets, 238 sensors" },
      ]
    },
    {
      section: "Tools & Engagement",
      items: [
        { href: "roi-calculator.html", label: "ROI Calculator (general)", desc: "Self-serve" },
        { href: "roi-oil-gas.html", label: "ROI: Oil & Gas", desc: "Sector-specific" },
        { href: "roi-manufacturing.html", label: "ROI: Manufacturing", desc: "Sector-specific" },
        { href: "roi-energy.html", label: "ROI: Energy", desc: "Sector-specific" },
        { href: "carbon-calculator.html", label: "Carbon Calculator", desc: "ESG differentiator" },
        { href: "federated-learning.html", label: "Federated Learning", desc: "The moat, visualized" },
        { href: "portal.html", label: "Design Partner Portal", desc: "Self-serve signup" },
        { href: "tenant-dashboard.html", label: "Tenant Dashboard", desc: "View sandbox" },
        { href: "aisensoredgecomp-pitch-deck.pdf", label: "Pitch Deck PDF", desc: "12 slides, downloadable" },
        { href: "https://preview-chat-beeb4b2b-e7e5-4b02-a2cd-72b95656e3a8.space-z.ai/#sensors", label: "Live MVP Dashboard", desc: "Real-time", external: true },
        { href: "https://github.com/testdemoqwenai2025-creator/AISensorEdgeComp-Platform", label: "Platform Source", desc: "99 files", external: true },
        { href: "https://github.com/testdemoqwenai2025-creator/AISensorEdgeComp-MVP", label: "MVP Source", desc: "Next.js", external: true },
      ]
    },
  ];

  function buildMegaMenu() {
    const menu = document.createElement("div");
    menu.className = "mega-menu";
    menu.id = "megaMenu";
    PAGES.forEach((group, idx) => {
      if (idx === 4) {
        // After the 4th group, start a new row visually for the Tools section
        // (grid is 4-column; we have 5 groups, so the 5th wraps — that's fine)
      }
      const col = document.createElement("div");
      col.className = "mega-menu-column";
      const h = document.createElement("h4");
      h.textContent = group.section;
      col.appendChild(h);
      group.items.forEach(item => {
        const a = document.createElement("a");
        a.href = item.href;
        if (item.external) a.target = "_blank", a.rel = "noopener";
        const label = document.createElement("span");
        label.className = "mega-link-label";
        label.textContent = (item.external ? "↗ " : "") + item.label;
        const desc = document.createElement("span");
        desc.className = "mega-link-desc";
        desc.textContent = item.desc;
        a.appendChild(label);
        a.appendChild(desc);
        col.appendChild(a);
      });
      menu.appendChild(col);
    });
    return menu;
  }

  function init() {
    // Find the existing <nav>
    const nav = document.querySelector("nav");
    if (!nav) return;

    // Build the mega menu
    const megaMenu = buildMegaMenu();
    nav.appendChild(megaMenu);

    // Add a "Pages" trigger button in the nav-links area
    const navLinks = nav.querySelector(".nav-links");
    if (navLinks) {
      const trigger = document.createElement("button");
      trigger.className = "nav-btn";
      trigger.style.cssText = "padding: 6px 12px; font-size: 13px; background: transparent; cursor: pointer; display: inline-flex; align-items: center; gap: 4px;";
      trigger.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg> Pages ▾';
      trigger.setAttribute("aria-label", "Open site menu");

      trigger.addEventListener("click", function(e) {
        e.stopPropagation();
        megaMenu.classList.toggle("open");
      });
      navLinks.insertBefore(trigger, navLinks.firstChild);
    }

    // Close mega-menu on outside click
    document.addEventListener("click", function(e) {
      if (!megaMenu.contains(e.target) && e.target !== trigger && !trigger.contains(e.target)) {
        megaMenu.classList.remove("open");
      }
    });

    // Close on Escape
    document.addEventListener("keydown", function(e) {
      if (e.key === "Escape") megaMenu.classList.remove("open");
    });

    // Add floating site-map button (bottom-left, mirrors the search button bottom-right)
    const fab = document.createElement("button");
    fab.className = "site-map-fab";
    fab.setAttribute("aria-label", "Open site menu");
    fab.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>';
    fab.addEventListener("click", function() {
      megaMenu.classList.add("open");
      // Scroll to top so the mega-menu (positioned under nav) is visible
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    document.body.appendChild(fab);
  }

  // Run after DOM ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
