# AISensorEdgeComp — SentinelEdge

## Public Preview — Available 24/7, 365 Days — No NDA Required

**Live URL:** https://testdemoqwenai2025-creator.github.io/DemoSentinelEdge/

This is the public, investor-facing preview of the SentinelEdge platform. It is hosted on GitHub Pages and is accessible 24 hours a day, 7 days a week, 365 days a year. No NDA, no login, no signup required. Investors, startup funds, seed funds, enterprise clients, and design partners can explore the full platform preview at any time.

---

## What Is SentinelEdge?

SentinelEdge is a big-data IoT platform that ingests sensor data from harsh, safety-critical environments — offshore platforms, chemical plants, hospital ICUs, autonomous fleets, smart grids, mining sites, and water treatment facilities — and fuses it at the edge with a 350M-parameter time-series foundation model for zero-shot anomaly detection, predictive maintenance, and regulatory-grade audit trails.

The platform addresses 4 compounding problems in industrial IoT:
1. **Protocol Heterogeneity** — 12 industrial protocols normalized via LLM-assisted semantic mapping
2. **Calibration Drift** — self-calibration mesh reduces recalibration cost by 85%
3. **Edge-Cloud Placement** — 5-axis liquid workload scheduler, 72h edge autonomy
4. **Unlabeled Industrial Data** — 350M-param TS-FM, zero-shot 0.89 AUC-ROC on unseen asset classes

---

## Key Metrics

| Metric | Value |
|---|---|
| Total HTML pages | 72 |
| Live scenario deployments | 7 (640 assets, 2,354 sensors) |
| Edge cases addressed | 104 (× 7 sectors = 728 sector-specific responses) |
| Functional design items | 31 (ingestion, stream pipeline, rule engine) |
| Test plan tests | 37 (across 5 categories: functional, edge-case, chaos, simulation, safety) |
| MVP build plan | 5 phases, 28-36 weeks, 26 deliverables |
| Production stack components | 30 (edge → ingestion → streaming → storage → ML → observability) |
| Competitive comparison | 9 competitors × 27 dimensions + deep-dive modals |
| ROI calculators | 12 (1 general + 11 sector-specific) |
| Blog posts | 5 |
| API endpoints | 16 (Swagger UI) |

---

## How to Explore This Preview

### For Investors & VC Funds
1. **Start here:** https://testdemoqwenai2025-creator.github.io/DemoSentinelEdge/ — landing page with hero, problem, architecture, team, ROI
2. **Technical due diligence:** https://testdemoqwenai2025-creator.github.io/DemoSentinelEdge/architecture-deep.html — 4-layer architecture, protocol matrix, benchmarks, security model
3. **Competitive landscape:** https://testdemoqwenai2025-creator.github.io/DemoSentinelEdge/comparison.html — 9 competitors × 27 dimensions, click any competitor for deep-dive modal
4. **Financial model:** https://testdemoqwenai2025-creator.github.io/DemoSentinelEdge/roi-oil-gas.html (and 11 other sector ROI calculators)
5. **Build timeline:** https://testdemoqwenai2025-creator.github.io/DemoSentinelEdge/build-plan.html — 5-phase MVP plan, 28-36 weeks

### For Startup & Seed Funds
1. **Market opportunity:** https://testdemoqwenai2025-creator.github.io/DemoSentinelEdge/problem.html — $547B TAM, 4 compounding problems
2. **Differentiation:** https://testdemoqwenai2025-creator.github.io/DemoSentinelEdge/comparison.html — how we differ from AWS IoT, Azure, Cognite, Augury
3. **What we DON'T do:** https://testdemoqwenai2025-creator.github.io/DemoSentinelEdge/what-we-dont-do.html — focus discipline
4. **Ask the founders:** https://testdemoqwenai2025-creator.github.io/DemoSentinelEdge/ask-founders.html — FAQ

### For Enterprise Clients & Design Partners
1. **Live scenarios:** https://testdemoqwenai2025-creator.github.io/DemoSentinelEdge/scenario-demo.html — 7 interactive deployments
2. **Edge cases:** https://testdemoqwenai2025-creator.github.io/DemoSentinelEdge/edge-cases.html — 104 edge cases × 7 sectors
3. **Production stack:** https://testdemoqwenai2025-creator.github.io/DemoSentinelEdge/production-stack.html — 30 components with trade-off analysis
4. **Test plan:** https://testdemoqwenai2025-creator.github.io/DemoSentinelEdge/test-plan.html — 37 tests across 5 categories
5. **Sign up:** https://testdemoqwenai2025-creator.github.io/DemoSentinelEdge/portal.html — 60-day free design partner pilot

### For Engineers
1. **Platform source code:** https://github.com/testdemoqwenai2025-creator/AISensorEdgeComp-Platform — 99 files, Apache 2.0
2. **MVP source (Next.js):** https://github.com/testdemoqwenai2025-creator/AISensorEdgeComp-MVP — live dashboard
3. **API reference:** https://testdemoqwenai2025-creator.github.io/DemoSentinelEdge/api-reference.html — Swagger UI, 16 endpoints
4. **System design:** https://testdemoqwenai2025-creator.github.io/DemoSentinelEdge/system-design.html — 10-section document

---

## Repository Architecture

```
sentinel-edge (PRIVATE)                    DemoSentinelEdge (PUBLIC)
├── preview/                               ├── *.html (72 pages)
│   ├── *.html (72 pages)      ──sync──>   ├── assets/
│   ├── assets/ (styles.css, app.js)       │   ├── styles.css
│   └── docs/, blog/                       │   └── app.js
├── .github/workflows/                     ├── docs/ (9 pages)
│   └── sync-preview.yml (auto-sync)       ├── blog/ (5 posts)
├── next-sprints.md                        ├── README.md (this file)
└── prospective-clients-investors.md       ├── investor-assessment.md
                                           ├── investment-challenges.md
                                           └── client-email-templates.md
```

- **Private repo** (`sentinel-edge`): Development workspace, auto-sync workflow, internal docs
- **Public repo** (`DemoSentinelEdge`): Auto-synced from private repo's `preview/` folder via GitHub Actions
- **Platform repo** (`AISensorEdgeComp-Platform`): 99-file deployable platform scaffold (Apache 2.0)
- **MVP repo** (`AISensorEdgeComp-MVP`): Next.js MVP dashboard source

The public repo contains ONLY preview HTML/CSS/JS — no source code. All code lives in the public platform repo.

---

## Public Repositories

| Repo | URL | Content |
|---|---|---|
| DemoSentinelEdge | https://github.com/testdemoqwenai2025-creator/DemoSentinelEdge | This preview site (72 HTML pages) |
| AISensorEdgeComp-Platform | https://github.com/testdemoqwenai2025-creator/AISensorEdgeComp-Platform | 99-file deployable platform (Apache 2.0) |
| AISensorEdgeComp-MVP | https://github.com/testdemoqwenai2025-creator/AISensorEdgeComp-MVP | Next.js MVP dashboard |

---

## Contact

| Audience | Email |
|---|---|
| Investor Relations | partners@aisensoredgecomp.ai |
| Design Partners | testdemoqwenai2025@gmail.com |
| Press | press@aisensoredgecomp.ai |

We respond within 24 hours.

---

## License

- **Preview site (this repo):** All HTML/CSS/JS is viewable publicly. No license granted for commercial use.
- **Platform source code:** Apache 2.0 (see AISensorEdgeComp-Platform repo)
- **MVP source code:** MIT (see AISensorEdgeComp-MVP repo)

---

*This README is auto-synced from the private `sentinel-edge` repository. Any changes to `preview/README.md` in the private repo will appear here within ~60 seconds.*
