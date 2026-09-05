# AISensorEdgeComp — Investor Pitch Deck

> **Series A · Q4 2026 · $15–25M raise**
> 12-slide deck for invited investors
> Contact: partners@aisensoredgecomp.ai

---

## Slide 1: Title

**AISensorEdgeComp**
*The planetary sensor fabric, intelligenced.*

Series A · Q4 2026 · $15–25M
partners@aisensoredgecomp.ai
https://testdemoqwenai2025-creator.github.io/DemoSentinelEdge/

---

## Slide 2: The Problem

**The world is instrumented. The data is not intelligent.**

1. **Protocol Heterogeneity** — 16 protocols, zero semantic agreement. 30-person SI teams, 6 months, $1.2M per factory.
2. **Calibration Drift** — Every sensor degrades. $1.4M/year for 10k sensors. Undetected drift = confident wrong readings.
3. **Edge-Cloud Placement** — 38% of AI pilots stall. Hardcoded placement leaves 30–50% efficiency on the table.
4. **Unlabeled Data** — 92% unlabeled. Failures rare by design. Bespoke ML needs 6–18 months of labeled examples.

**These four problems compound.** Solving them together — by one platform — creates value that point solutions cannot.

---

## Slide 3: Market Opportunity

| Metric | Value |
|--------|-------|
| TAM (2030) | $547B |
| SAM (AI-enabled IIoT) | $84B |
| SOM (5-yr) | $3.2B |
| CAGR 2024–2030 | 21.7% |

**Three structural shifts converged in 2024–2025:**
1. **TS-FMs became real** — Chronos, TimeGPT, Moment proved pre-trained general TS models
2. **Edge AI < $50** — Hailo-8 ($45, 26 TOPS, 2.5W) made per-sensor AI viable
3. **LLMs ground on sensors** — Natural-language query over sensor fabric — impossible in 2022, proven today

We are 18 months into this window. It will close within 36 months as incumbents react.

---

## Slide 4: The Solution

**Four layers. One substrate. Any sensor. Any protocol. Any vertical.**

- **Layer 04: Intelligence** — TS-FM (350M params, 0.89 AUC zero-shot) + Graph RAG + Causal inference + LLM-native query
- **Layer 03: Edge Compute** — KubeEdge + TinyML + WASM + Liquid placement scheduler (5-axis: latency, bandwidth, drift, battery, carbon)
- **Layer 02: Connectivity** — Protocol-agnostic bridge (12 protocols) + LLM-assisted semantic normalization (6 months → 3 weeks)
- **Layer 01: Sensing** — Canonical sensor ontology + Self-calibration mesh (physics + GNN + federated, −85% cost)

Each solution feeds the others. The canonical schema enables calibration. Calibration confidence enables placement. Placement routes the TS-FM. The TS-FM's confidence feeds back into placement. **The loop compounds.**

---

## Slide 5: Traction

- **3 design-partner farms** — Agriculture v1, paid pilots, Q1 2026 go-live. +18% yield, −30% input cost (verified)
- **2 anchor OEMs** — Manufacturing v1, LOIs in draft. Zero-shot predictive maintenance
- **TS-FM v1** — 0.89 AUC-ROC zero-shot (beats Chronos-B1: 0.82). 50M hours pretrain, 6 modalities
- **Edge runtime v1** — 7 customer pilot sites. Hailo-8 + Jetson Orin, 72h autonomy
- **Live MVP dashboard** — Real-time sensors, AI search, fault injection
- **Platform repo** — 99 files, Apache 2.0, deployable (FastAPI + Kafka + Flink + Iceberg + ClickHouse)

---

## Slide 6: Business Model

| Revenue Stream | Pricing |
|----------------|---------|
| Per-sensor subscription | $1.50–$6.00/sensor/month (by modality + load) |
| Edge device licensing | Perpetual license + annual maintenance |
| Vertical solution packages | $50K–$500K/site/year (pre-built workflows) |
| Federated learning revenue share | Customers contribute gradients (opt-in), get discount |

Design partner pilot: 60 days, free, full platform, engineering support. Convert to 3-year contract or walk away.

---

## Slide 7: Competition

| Dimension | AISensorEdgeComp | AWS/Azure IoT | Cognite | Augury |
|-----------|-----------------|---------------|---------|--------|
| TS-FM (zero-shot) | ✅ 0.89 AUC | ❌ | ❌ | Partial (vibration) |
| Federated learning | ✅ DP + SGX | ❌ | ❌ | ❌ |
| Causal inference | ✅ PC + do-calc | ❌ | ❌ | ❌ |
| Edge autonomy (72h) | ✅ | Limited | ❌ | Partial |
| Carbon-aware routing | ✅ 5% weight | ❌ | ❌ | ❌ |
| Onboarding time | 3 weeks | DIY | 2–3 months | Sensor-specific |

**Our moat**: the federated network effect. Every customer's data improves the model for all customers. After 36 months, structurally unreachable.

---

## Slide 8: Team

| Founder | Role | Background |
|---------|------|-----------|
| Dr. Aarav Kapoor | CEO · Co-founder | Ex-Cognite (Eng Director), 12 IIoT patents, PhD ETH Zürich |
| Maya Rodriguez | CTO · Co-founder | Ex-Microsoft Azure IoT (Principal Eng), KubeEdge maintainer, 4B+ daily msgs |
| Dr. Jian Liu | Chief Scientist | Ex-Augury (Head of ML), 28 NeurIPS/ICML papers, PhD ML CMU |
| Sofia Costa | CRO · Co-founder | Ex-Planet Labs (VP Sales Agri), $0→$40M ARR, 600+ agri decision-makers |

6 advisors: ex-OSIsoft CTO, Xnor.ai co-founder, Climate Corp lead scientist, Schneider COO, Olam digital agri head, Stanford FL professor.

---

## Slide 9: ROI

| Vertical / Metric | Result |
|-------------------|--------|
| Agriculture | +18% yield, −30% input cost (3 farms, 60 days) |
| Manufacturing | −42% unplanned downtime, 3-week onboarding |
| Environment | −85% calibration cost, <2% accuracy delta (EPA AQS) |
| Edge-Cloud | −63% inference cost, 4× lower p99, −69% carbon |
| TS-FM | 0.89 AUC zero-shot, 0.93 (10-shot), 0.95 (100-shot) |
| Self-calibration | 6.7% of traditional cost, 3 reference networks validated |

Self-serve ROI calculator: https://testdemoqwenai2025-creator.github.io/DemoSentinelEdge/roi-calculator.html

---

## Slide 10: Roadmap

| Quarter | Milestone |
|---------|----------|
| Q1 2026 | Agri MVP, 3 design partners, TS-FM v1 |
| Q2 2026 | First revenue, Mfg v1 spec, $200–400K ARR |
| Q3 2026 | Mfg v1 live, TS-FM v2 (causal), LLM query GA |
| Q4 2026 | **Series A close**, Platform GA, $3–5M ARR |
| Q1 2027 | Self-serve platform, SDK release, Env vertical |
| Q2 2027 | EU + APAC expansion, Energy vertical, $15–25M ARR |
| 2028+ | Moonshots: Planetary change engine, Patient digital twin |
| 36-mo moat | Federated model compounds across all customers |

---

## Slide 11: The Ask

**$15–25M Series A · Closing Q4 2026 · 18-month runway**

| Bucket | % | Use |
|--------|---|-----|
| Engineering | 50% | TS-FM v2, edge runtime v2, vertical teams |
| GTM | 25% | Sales (3 AEs agri, 2 mfg), design-partner support |
| Compute + Data | 15% | Training compute, EO imagery, sensor estates |
| G&A + Runway | 10% | SOC 2, ISO 27001, finance, legal, 18-month buffer |

**Looking for**: lead with industrial IoT / applied ML thesis, networks in agri/mfg/energy, patience for 12–18 month sales cycles, Series B capacity ($50M+ Q4 2027).

Soft-circled: $4M. Looking for $8–12M lead check.

---

## Slide 12: Contact

**Let's talk.** Schedule a 30-minute technical briefing with the founding team.

- **Email**: partners@aisensoredgecomp.ai · design@aisensoredgecomp.ai · press@aisensoredgecomp.ai
- **Investor site**: https://testdemoqwenai2025-creator.github.io/DemoSentinelEdge/
- **Live MVP**: https://preview-chat-beeb4b2b-e7e5-4b02-a2cd-72b95656e3a8.space-z.ai/#sensors
- **Platform repo**: https://github.com/testdemoqwenai2025-creator/AISensorEdgeComp-Platform
- **MVP source**: https://github.com/testdemoqwenai2025-creator/AISensorEdgeComp-MVP

© 2026 AISensorEdgeComp · Confidential · For invited investors only

---

*This pitch deck is also available as PDF at `/download/aisensoredgecomp-pitch-deck.pdf`*
