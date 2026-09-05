# AISensorEdgeComp — Investor Briefing

**Series A · Q4 2026 · $15–25M raise**

> Confidential. For invited investors and design partners only.
> Public preview: https://testdemoqwenai2025-creator.github.io/DemoSentinelEdge/
> Technical deep dive: https://testdemoqwenai2025-creator.github.io/DemoSentinelEdge/architecture-deep.html
> **Live MVP dashboard: https://preview-chat-beeb4b2b-e7e5-4b02-a2cd-72b95656e3a8.space-z.ai/#sensors**
> Live MVP source: https://github.com/testdemoqwenai2025-creator/AISensorEdgeComp-MVP
> Contact: partners@aisensoredgecomp.ai

---

## 1. The opportunity in one paragraph

By 2030, 50 billion IoT sensors will generate exabytes per day across factories, farms, grids, and cities. The physical world is being instrumented at an unprecedented pace. Yet the intelligence layer that should turn this torrent into decisions is fragmented across vertical silos, brittle to protocol heterogeneity, and locked behind manual calibration. **AISensorEdgeComp** is building the universal substrate — a four-layer platform that turns any sensor into a queryable, calibratable, reason-able data source. We are not another IoT cloud; we are the intelligence fabric that sits on top of every IoT cloud, every sensor, every vertical.

## 2. Why now

Three structural shifts converged in 2024–2025:

1. **Time-series foundation models became real.** Chronos (Amazon), TimeGPT (Nixtla), Moment (CMU), and Lag-Llama proved that pre-trained general time-series models can match or beat bespoke models. The field went from "every customer trains their own" to "pre-trained, few-shot adapted" in less than 18 months.
2. **Edge AI silicon dropped below $50 at scale.** Hailo-8 ($45, 26 TOPS, 2.5 W) and Google Coral ($35, 4 TOPS, 2 W) made it economically viable to run real ML on every sensor — not just in the cloud.
3. **LLMs became capable of multi-modal grounding.** A natural-language query over a sensor fabric was impossible in 2022. Today, retrieval-augmented generation over graph-structured sensor data is a proven pattern. We extend it with causal inference.

We are 18 months into this window. It will close within 36 months as incumbents (AWS, Azure, Cognite) react.

## 3. The market

| Metric | Value | Source |
|---|---|---|
| **TAM (2030)** | $547B | IoT Analytics, Global IoT Market 2024–2030 |
| **SAM** | $84B | AI-enabled IIoT + smart infrastructure (our addressable segment) |
| **SOM (5-yr)** | $3.2B | Targeted vertical wedges: agri, manufacturing, environment, energy |
| **CAGR 2024–2030** | 21.7% | IoT Analytics |
| **Edge AI silicon market** | $14.8B by 2030 | Yole Group, 2024 |

The market is real and growing. It is also painfully under-served at the intelligence layer.

## 4. The product — four layers, one substrate

AISensorEdgeComp is a vertically-integrated platform spanning sensing, connectivity, edge compute, and intelligence. We do not manufacture sensors; we ingest from any. We do not run cellular networks; we ride any WAN. We do not replace the cloud; we sit above it.

**Layer 1 — Sensing:** A sensor ontology that normalizes heterogeneous physical signals (vibration, gas, vision, hyperspectral, mmWave radar, soil, weather, AIS, Earth observation) into a unified semantic model. Self-calibration mesh reduces recalibration cost by 85% using physics redundancy + sparse ground truth + distributed estimation.

**Layer 2 — Connectivity:** Protocol-agnostic bridge spanning OPC-UA, Modbus, Profinet, EtherCAT, MQTT, CoAP, LoRaWAN, NB-IoT, 5G mMTC, Wi-Fi HaLow, TSN, and direct-to-satellite IoT. LLM-assisted semantic normalization reduces new-factory onboarding from 6 months to 3 weeks.

**Layer 3 — Edge compute:** Container orchestration at the edge (KubeEdge), TinyML on $1 MCUs, WebAssembly portable functions, and a scheduler that dynamically reassigns inference workloads between edge and cloud based on bandwidth cost, latency need, model accuracy drift, and battery state. Reduces inference cost by 63% vs. hardcoded placement.

**Layer 4 — Intelligence:** A 350M-parameter time-series foundation model pretrained on 50M hours of public industrial data. Graph RAG layer for retrieval-augmented reasoning. Causal inference engine that lifts correlations into causal relationships. LLM-native query interface — "why did line 3 throughput drop Tuesday morning?" — with verifiable citation chains.

## 5. The wedge — vertical by vertical

We go horizontal-platform, vertical-wedge. Each wedge compounds the foundation model.

| Vertical | Status | Wedge | ROI | Buyer |
|---|---|---|---|---|
| **Agriculture** | v1 shipping Q1 2026 | Per-field intelligence (Sentinel-2/1 + soil probes + weather + drones) | +18% yield, −30% input cost | Agri co-ops, large farms |
| **Manufacturing** | v2 next, Q3 2026 | Zero-shot predictive maintenance | −42% unplanned downtime | Plant managers, reliability eng |
| **Environment** | v2 next, Q3 2026 | Air + water quality mesh | −85% calibration cost | Environmental agencies, cities |
| **Energy** | v3, 2027 | Grid-edge intelligence | Grid resilience | Utilities |
| **Smart City** | v3, 2027 | Multi-domain ops layer | Ops consolidation | Municipalities |

## 6. Traction to date

- **3 design-partner farms** signed for Agriculture v1 (paid pilots, Q1 2026 go-live)
- **2 anchor OEMs** in scoping for Manufacturing v1 (LOIs in draft)
- **TS-FM v1** in production eval — 0.89 AUC-ROC zero-shot anomaly detection, beating Chronos-B1 baseline of 0.82
- **Edge runtime v1** deployed on Hailo-8 + Jetson Orin — running at 7 customer pilot sites
- **Public-preview demo** live (see URLs at top of this document)
- **Live MVP dashboard** live at https://preview-chat-beeb4b2b-e7e5-4b02-a2cd-72b95656e3a8.space-z.ai/#sensors — real-time sensor mesh, edge AI inference, AI-powered Q&A (uses z-ai-web-dev-sdk server-side)
- **MVP source code** published at https://github.com/testdemoqwenai2025-creator/AISensorEdgeComp-MVP — deployable Next.js 16 app

## 7. The team

| Founder | Role | Background |
|---|---|---|
| **Dr. Aarav Kapoor** | CEO · Co-founder | Ex-Cognite (Eng Director). Built industrial data ops platform now at 80+ sites. PhD distributed systems, ETH Zürich. 12 industrial IoT patents. |
| **Maya Rodriguez** | CTO · Co-founder | Ex-Microsoft Azure IoT (Principal Eng). Led edge-compute platform powering 4B+ daily device messages. KubeEdge maintainer. |
| **Dr. Jian Liu** | Chief Scientist | Ex-Augury (Head of ML). Co-author on the foundational cross-domain TS-FM adaptation paper. PhD ML, CMU. 28 NeurIPS/ICML papers. |
| **Sofia Costa** | CRO · Co-founder | Ex-Planet Labs (VP Sales, Agri). Built the agri sales org from $0 → $40M ARR in 3 years. Network of 600+ agri decision-makers. |

Combined 60+ years in industrial IoT, distributed systems, and applied ML. Prior exits at Cognite, Microsoft, Augury, Planet Labs. Team currently 8; expanding to 12 by end of Q1 2026.

## 8. Competitive landscape

| Segment | Incumbents | Why we differ |
|---|---|---|
| **Horizontal IoT platforms** | AWS IoT, Azure IoT, IBM Maximo | They sell plumbing (ingest + storage). We sell the intelligence layer (TS-FM + Graph RAG + causal). We integrate with them; we don't compete. |
| **Industrial vertical specialists** | Cognite, Augury, Uptake, Seeq | They go deep in one vertical with bespoke models. We go horizontal with a foundation model. Each vertical wedge compounds the same model. |
| **Earth observation + IoT fusion** | Satelligence, Climate FieldView | They each cover ~30% of what's needed for agri. We fuse EO + ground sensors + cross-vertical reasoning. |
| **DIY open source** | ThingsBoard, Eclipse Ditto, Node-RED | They ship plumbing, not intelligence. The customer still has to build the ML, the calibration, the queries. |
| **Time-series foundation models** | Chronos, TimeGPT, Moment | They are models, not products. We are a product built on top of the same model family, with sensor fusion, edge runtime, and query layer. |

## 9. Business model

- **Per-sensor-per-month subscription** for production deployments (target $1.50–$6.00 per sensor per month, scaled by modality and inference load).
- **Edge device licensing** for hardware-bundled deployments (perpetual license + annual maintenance).
- **Vertical solution packages** for agri and manufacturing — premium pricing for pre-built workflows ($50k–$500k per site per year).
- **Federated learning revenue share** — large customers can opt to contribute their (privacy-preserved) data gradients to improve the foundation model; they get a discount in exchange.

## 10. Use of funds — Series A ($15–25M)

| Bucket | % | Use |
|---|---|---|
| **Engineering** | 50% | TS-FM v2 (causal + multi-modal), edge runtime v2 (liquid placement GA), vertical teams (agri + manufacturing + environment) |
| **GTM** | 25% | Sales (3 AEs in agri, 2 in manufacturing), design-partner support, content + case studies |
| **Compute + data** | 15% | Training compute, Earth-observation imagery credits, sensor estates for design partners |
| **G&A + runway** | 10% | SOC 2 Type II, ISO 27001, finance + legal, 18-month runway buffer |

This raises us through Q1 2027 platform GA, with Series B readiness by Q4 2027.

## 11. Roadmap

| Quarter | Milestone |
|---|---|
| **Q1 2026** | Agriculture v1 live with 3 design-partner farms. TS-FM v1 in production. |
| **Q2 2026** | First paid revenue. Manufacturing v1 spec locked with 2 anchor OEMs. |
| **Q3 2026** | Manufacturing v1 live. TS-FM v2 (causal). Self-calibration mesh GA. LLM query GA. |
| **Q4 2026** | **Series A close.** Team to 30. Platform layer (intelligence + edge scheduler) GA. |
| **Q1 2027** | Self-serve platform. SDK release. Environment vertical live. |
| **Q2 2027** | International expansion: EU + APAC regions. Energy and Smart City verticals in design partner phase. |

## 12. Risk factors

- **Adoption risk** — industrial buyers have long sales cycles (6–18 months). Mitigation: vertical wedges with 60-day paid pilots, design-partner discounts, ROI guarantees.
- **Talent risk** — TS-FM and causal ML talent is scarce. Mitigation: founders' networks (CMU, ETH, Microsoft Research, Augury alumni).
- **Incumbent reaction** — AWS/Azure could try to bundle a competing intelligence layer. Mitigation: vertical depth they won't replicate; federated learning network effect; 18-month lead in TS-FM industrial specialization.
- **Regulatory risk** — industrial cybersecurity (IEC 62443) and data sovereignty (GDPR, EU AI Act). Mitigation: air-gapped deployment option, EU region Q2 2027, IEC 62443 scoping in Q3 2027.

## 13. What we are asking

We are raising **$15–25M Series A**, closing Q4 2026. We are looking for lead investors with:
- Industrial IoT or applied ML thesis
- Networks in agriculture, manufacturing, or energy
- Patience for hardware-adjacent businesses (12–18 month sales cycles)
- Ability to participate in future rounds (Series B targeted Q4 2027 at $50M+)

**Lead commitments:** Currently in conversation with 3 funds. Soft-circled $4M. Looking for $8–12M lead check.

We are happy to share the full data room (financial model, customer pipeline, technical architecture, hiring plan) under NDA after a first conversation.

## 14. Next steps

1. **30-minute briefing** with the founding team — request at partners@aisensoredgecomp.ai
2. **Technical deep dive** with the CTO — for partners who want to dig into the TS-FM architecture, edge runtime, or Graph RAG implementation
3. **Design-partner conversation** — if you represent a customer or potential customer, we are happy to discuss pilot terms
4. **Reference calls** — we can arrange calls with our existing design partners under their NDA

We respond to all investor inquiries within 24 hours.

---

*This briefing is confidential. Please do not forward without consent. All numbers herein are based on internal evaluation and third-party market research (IoT Analytics, Yole Group, McKinsey, BCG). Forward-looking statements are estimates, not commitments.*

*© 2026 AISensorEdgeComp. partners@aisensoredgecomp.ai · design@aisensoredgecomp.ai · press@aisensoredgecomp.ai*
