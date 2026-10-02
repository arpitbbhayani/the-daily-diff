---
title: Estimating AI filter latency using the roofline model
source: hn
url: https://fsdatalab.github.io/blog/ai-filter-cost-estimates/
date: '2026-10-01'
tags:
- ai-sql
- catchup
- hardware-limits
- hn
- latency-estimation
- query-optimization
- roofline-model
section: databases
interest_score: 8
depth_score: 9
utility_score: 8
novelty_score: 8
hn_id: '49925844'
comments: https://news.ycombinator.com/item?id=49925844
why_read: Learn how to derive hardware-level speed-of-light latency estimates for
  LLM operations without tedious profiling. It provides a principled framework for
  costing transformer forward passes and optimizing AI-powered filter ordering in
  SQL queries.
authors:
- Arnav Dhariya
- Shreya Shankar
---

Traditional query optimizers rely on cost models to order filter predicates by selectivity and CPU cost. When you introduce LLM-powered filter predicates into SQL queries, however, empirical profiling breaks down across varying GPU hardware, batch sizes, and model architectures.

The team building Quail tackled this problem by adapting the hardware roofline model directly into the query planner. Instead of maintaining fragile latency lookup tables, the optimizer computes the theoretical speed-of-light runtime based on transformer forward-pass arithmetic intensity and GPU memory bandwidth.

Evaluating a conjunction of AI filters requires calculating both the arithmetic flops and the memory traffic for each token transition. By modeling whether each stage is compute-bound or memory-bound on an H100 GPU, the engine can accurately predict latency and dynamically reorder filters to prune data with the least expensive LLM calls first.

Treating AI inference as a standard database cost-modeling problem rather than a black box is the right architectural mindset for production AI infrastructure.
