---
title: OpenObserve outperforms Prometheus and Mimir in metrics benchmark query speed
source: hn
url: https://openobserve.ai/blog/openobserve-vs-prometheus-mimir-metrics-benchmark/
date: '2026-08-17'
tags:
- catchup
- hn
- memory-efficiency
- metrics-benchmark
- mimir
- observability
- openobserve
- prometheus
- query-performance
section: systems
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49336220'
comments: https://news.ycombinator.com/item?id=49336220
why_read: Read this to understand the performance differences between OpenObserve,
  Prometheus, and Mimir for metrics observability. You will learn how OpenObserve
  significantly outperforms in query speed and memory efficiency for common use cases.
authors:
- Hengfei Yang
---

Choosing the right observability stack for large-scale systems is critical, and raw benchmarks cut through the marketing. This detailed comparison of Prometheus, Grafana Mimir, and OpenObserve on 1.09 million metrics series provides invaluable data. The findings are compelling, showing OpenObserve leading by an order of magnitude for everyday queries like 'irate' - answering in 507 ms compared to 7,589 ms for Prometheus and 8,324 ms for Mimir. This is a 15-16x speedup. 

Memory footprint is another major win, with OpenObserve maintaining a flat 1.5-2.1 GB RSS during ingestion versus Prometheus's 3.2-4.1 GB and Mimir's 4.5-5.5 GB. The benchmark also highlights the impact of storage formats, with OpenObserve's Vortex format outperforming Parquet and even Prometheus and Mimir on filtered histograms within certain memory constraints. 

This is not just another benchmark; it is a practical guide to system trade-offs. You learn how different design choices in these systems affect real-world performance and resource efficiency, which is essential for any engineer dealing with high-volume telemetry.
