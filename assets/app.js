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
