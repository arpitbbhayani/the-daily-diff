---
title: Calibrated judgment models outperform cross encoders in agent memory selection
source: hn
url: https://getunblocked.com/blog/jev-in-production-vs-cross-encoder/
date: '2026-09-24'
tags:
- agent-memory
- catchup
- cross-encoder
- hn
- production-evaluations
- reranking
- threshold-tuning
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49831937'
comments: https://news.ycombinator.com/item?id=49831937
why_read: Read this to understand how calibrated judgment models outperform traditional
  cross-encoders for agent memory selection. You will learn practical evaluation findings
  across precision, recall, cost, and threshold tuning in production.
authors:
- Morteza Milani
---

Replacing cross-encoders with specialized decision models can drastically improve memory selection in agent architectures. A benchmark across 12,927 labeled question-note pairs demonstrated that evaluating multiple candidate memories simultaneously delivers superior precision and recall at equivalent compute cost.

The benchmark revealed that prompt engineering produced negligible quality gains. Instead, sweeping numerical score thresholds accomplished what hours of prompt adjustments failed to achieve. This reinforces that calibration matters far more than phrasing when routing contextual memory.

Most agent latency and billing spikes stem not from final text generation, but from chains of intermediate binary routing decisions. Framing context selection as structured probability estimation rather than open-ended text completion creates a faster and more predictable harness.

Optimizing agent context requires treating memory selection as a calibrated classification problem rather than a generative one.
