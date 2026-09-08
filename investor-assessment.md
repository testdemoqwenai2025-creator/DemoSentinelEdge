# Investor Assessment — AISensorEdgeComp / SentinelEdge
## For Investors, Startup Funds, Seed Funding, and Other Groups Seeking Opportunities

**Date:** September 2026
**Status:** Series A cycle open (Q4 2026)
**Public preview:** https://testdemoqwenai2025-creator.github.io/DemoSentinelEdge/ (24/7, no NDA)

---

## 1. Executive Summary

SentinelEdge is a planetary-scale IoT + Edge AI platform that addresses 4 compounding problems in industrial IoT: protocol heterogeneity, calibration drift, edge-cloud placement, and unlabeled industrial data. The platform is differentiated by a 350M-parameter time-series foundation model (TS-FM) with zero-shot anomaly detection, federated learning with differential privacy, and 72-hour edge autonomy for harsh, safety-critical environments.

The company is raising $15-25M Series A (Q4 2026 close) with an 18-month runway post-close. The go-to-market is vertical-first: 7 sectors with sector-specific configurations, each with its own live scenario demo, ROI calculator, and compliance dashboard.

---

## 2. Market Opportunity

| Metric | Value | Source |
|---|---|---|
| TAM (global IoT market by 2030) | $547B | IoT Analytics |
| SAM (AI-enabled IIoT + smart infrastructure) | $84B | IoT Analytics, internal analysis |
| SOM (5-year target across 7 wedges) | $3.2B | Internal model |
| CAGR | 21.7% | IoT Analytics |

### Why Now
- AWS and Azure are de-prioritizing first-party IoT (Google shut IoT Core 2022)
- Industrial AI is moving from bespoke models to foundation models (Chronos, TimeGPT, Moment)
- Edge AI silicon (Hailo-8, Nvidia Orin) now delivers 26 TOPS at 2.5W — makes edge inference viable
- ESG regulations (EPA OOOO-b, EU MRV) require audit-grade emissions reporting — SentinelEdge produces these automatically

---

## 3. Investor Types and Fit Assessment

### 3.1 Seed / Pre-Stage Investors
**Fit: HIGH** — if the company is still at pre-Series A stage.

| Criterion | Assessment |
|---|---|
| Technology risk | LOW — 350M-param TS-FM pre-trained, 0.89 AUC-ROC zero-shot |
| Market risk | MEDIUM — industrial buyers have long sales cycles (6-18 months) |
| Team risk | LOW — 4 founders, 60+ combined years (Cognite, Microsoft Azure IoT, Augury, Planet Labs) |
| Regulatory risk | LOW — platform is advisory-only, SIS is independent |
| Competitive risk | MEDIUM — Cognite ($4.2B), Augury ($1B+) are well-funded but lack foundation model |
| Capital efficiency | HIGH — 18-month runway on $15-25M, 50% engineering, 25% GTM |

### 3.2 Series A / Growth Investors
**Fit: HIGH** — company is entering Series A cycle.

| Criterion | Assessment |
|---|---|
| Revenue traction | PRE-REVENUE — seeking design partners (60-day free pilots) |
| Product-market fit | EARLY — 7 sector configs built, 0 paid deployments yet |
| Differentiation | STRONG — only platform with TS-FM + federated learning + edge autonomy + 9 protocols |
| Scalability | HIGH — same code base, only sector config differs (already proven across 7 sectors) |
| Exit potential | MEDIUM — strategic acquisition by ABB, Siemens, Schneider, Emerson, or Honeywell; or IPO at $500M+ ARR |

### 3.3 Strategic / Corporate Venture
**Fit: HIGH** — industrial conglomerates have IoT gaps.

| Strategic | Why they'd invest | What they'd want |
|---|---|---|
| ABB | Edge AI for their drives + robotics division | Exclusive sector config for discrete manufacturing |
| Siemens | Mindsphere underperforms; need AI-native replacement | White-label or acquisition |
| Schneider Electric | EcoStruxure needs edge AI + anomaly detection | Energy sector exclusivity |
| Emerson | DeltaV needs ML + federated learning | Process industry integration |
| Honeywell | Forge needs industrial IoT + safety-critical compliance | Aerospace + oil & gas integration |
| Caterpillar | Uptake partnership is limited to CAT ecosystem | Mining + construction exclusivity |

### 3.4 Angel Investors / Accelerators
**Fit: MEDIUM** — company is beyond angel stage (pre-Series A, 4 founders, 60+ years combined experience, 72-page preview site, 99-file platform repo).

---

## 4. Competitive Landscape

### Direct Competitors

| Company | Valuation | Funding | Strengths | Gaps vs SentinelEdge |
|---|---|---|---|---|
| Cognite | $4.2B | $440M (Series D) | Industrial data ops, SAP/Maximo, analyst UI | No ML, no edge, cloud-only, no federated learning |
| Augury | $1B+ | $250M+ (Series F) | Vibration models, turnkey hardware+SaaS | Single modality, no foundation model, vendor lock-in |
| Uptake | — | $200M+ (Series D) | CAT partnership, RUL models, Fortune 500 | Bespoke per asset, no zero-shot, CAT-only |
| Seeq | — | $350M (2022) | Process analytics, on-prem, PI connectors | Not a platform, no ML, analyst tool only |
| ThingsBoard | — | Bootstrap | Free open-source, air-gapped, community | No ML/AI, DIY, no compliance, limited protocols |
| PTC ThingWorx | NASDAQ:PTC ($2.2B rev) | — | Kepware 350+ drivers, Vuforia AR, Windchill | Dated stack, no TS-FM, high license cost |

### Cloud IoT Platforms (De-prioritizing)

| Platform | Status | Gap |
|---|---|---|
| AWS IoT Core | Active but de-prioritized | No intelligence layer, no industrial protocols |
| Azure IoT Hub | Active but de-prioritized | Same as AWS, Azure Sphere EOL 2027 |
| Google IoT Core | SHUT DOWN 2022 | — |

### SentinelEdge's Unique Position
Only platform combining ALL 4:
1. Foundation model (350M-param TS-FM, zero-shot)
2. Edge autonomy (72h WAN-loss, Hailo-8, liquid placement)
3. Federated learning (DP + SGX, cross-customer)
4. Industrial-native (9 protocols, 7 sectors, 104 edge cases)

---

## 5. Financial Model

### Revenue Model
- Per-sensor SaaS: $1.50-$6/sensor/month (tiered by sector + volume)
- Base platform fee: $500-$5,000/month (tiered by features)
- Professional services: $200-$300/hour (implementation, custom sector config)

### Cost Structure (Series A Use of Funds)
| Category | % | Description |
|---|---|---|
| Engineering | 50% | TS-FM team, edge runtime, vertical teams |
| GTM | 25% | Sales + design-partner support |
| Compute + data | 15% | GPU training, satellite bandwidth, data acquisition |
| G&A + runway | 10% | Legal, compliance, operations |

### Revenue Projections (Conservative)

| Year | Revenue | Key Milestone |
|---|---|---|
| 2026 (Q4) | $0 | Series A close, 3 design partners |
| 2027 | $500K-$2M | First paid deployments (3-5 partners convert) |
| 2028 | $5M-$15M | 20+ paying customers, SOC 2, IEC 62443 |
| 2029 | $30M-$80M | 100+ customers, international expansion |
| 2030 | $100M-$300M | IPO or strategic acquisition |

### Unit Economics
- CAC (Customer Acquisition Cost): $50K-$150K (enterprise sales, 6-18 month cycle)
- LTV (Lifetime Value): $500K-$2M (5-year contract, $100K-$400K/year)
- LTV/CAC ratio: 5-15x (healthy for enterprise SaaS)
- Gross margin: 75-85% (SaaS + cloud infrastructure)
- Payback period: 12-18 months

---

## 6. Risk Assessment

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| Long enterprise sales cycles (6-18 months) | HIGH | MEDIUM | Design partner program (60-day free pilots), sector-specific ROI calculators |
| TS-FM model quality on real data | MEDIUM | HIGH | Zero-shot 0.89 AUC-ROC on public benchmarks; fine-tuning pipeline ready |
| Edge hardware supply chain (Hailo-8, Orin) | LOW | MEDIUM | Customer-supplied hardware supported; Hailo-8 in production at $800/module |
| Competitor with foundation model (Cognite + Augury could acquire ML startup) | MEDIUM | HIGH | Federated learning moat (cross-customer data advantage), first-mover in industrial TS-FM |
| Regulatory changes (EPA, BSEE, NERC) | LOW | LOW | Platform is advisory-only, SIS is independent, compliance reports auto-generated |
| Team departure (key founder) | LOW | HIGH | 4 founders, vesting schedules, 60+ combined years, deep domain expertise |

---

## 7. Due Diligence Checklist

### Technology
- [x] 350M-param TS-FM pre-trained on 50M hours of public industrial data
- [x] 0.89 AUC-ROC zero-shot on unseen asset classes
- [x] 99-file deployable platform repo (Apache 2.0, public)
- [x] 72-page public preview site (24/7, no NDA)
- [x] 104 edge cases addressed (× 7 sectors = 728 responses)
- [x] 37-test plan (functional + edge-case + chaos + simulation + safety)
- [x] 5-phase MVP build plan (28-36 weeks)
- [x] 30-component production stack with trade-off analysis
- [x] 9-competitor comparison × 27 dimensions

### Market
- [x] $547B TAM, $84B SAM, $3.2B SOM
- [x] 7 sector configurations (offshore, chemical, hospital, AV, grid, mining, water)
- [x] 12 ROI calculators (1 general + 11 sector-specific)
- [x] Sector-specific compliance (BSEE SEMS, OSHA PSM, EPA SDWA, NERC CIP, HIPAA, MSHA, ISO 26262)

### Team
- [x] 4 founders: CEO (ex-Cognite), CTO (ex-Microsoft Azure IoT), Chief Scientist (ex-Augury), CRO (ex-Planet Labs)
- [x] 60+ combined years in industrial IoT, distributed systems, applied ML
- [x] CTO is KubeEdge maintainer
- [x] Chief Scientist published 28 NeurIPS/ICML papers

### Traction
- [ ] Design partners: 0 signed (targeting 3 by Q4 2026)
- [x] 7 live scenario demos (synthetic data, streaming 24/7)
- [x] 60-day free pilot program (self-serve portal)
- [x] 99-file platform repo (public, Apache 2.0)

### Financial
- [x] Series A: $15-25M, Q4 2026 close
- [x] Use of funds: 50% eng, 25% GTM, 15% compute, 10% G&A
- [x] 18-month runway post-close
- [x] Revenue model: per-sensor SaaS + base platform fee + professional services
- [x] Unit economics: LTV/CAC 5-15x, 75-85% gross margin, 12-18 month payback

---

## 8. Recommendation

**For Series A investors:** SentinelEdge represents a high-conviction opportunity in the industrial IoT + Edge AI space. The platform is differentiated by its foundation model approach (zero-shot TS-FM), federated learning moat (cross-customer model improvement), and industrial-native design (9 protocols, 7 sectors, 104 edge cases). The team has deep domain expertise (Cognite, Microsoft Azure IoT, Augury, Planet Labs) and the market timing is favorable (AWS/Azure de-prioritizing IoT, foundation models gaining traction in industrial AI).

**Key risk to monitor:** Sales cycle length (6-18 months for enterprise industrial customers). Mitigation: design partner program with 60-day free pilots, sector-specific ROI calculators, and live scenario demos that reduce buyer uncertainty.

**Suggested investment size:** $15-25M Series A, with follow-on reserve for Series B at $50M+ ARR.

---

*This assessment is based on publicly available information in the DemoSentinelEdge preview site. No confidential information has been shared. For deeper due diligence, contact: partners@aisensoredgecomp.ai*
