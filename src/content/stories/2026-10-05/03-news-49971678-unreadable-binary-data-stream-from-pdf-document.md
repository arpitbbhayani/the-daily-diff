---
title: Unreadable binary data stream from pdf document
source: news
url: https://nivdayan.github.io/dostoevsky.pdf
date: '2026-10-05'
tags:
- binary-data
- catchup
- news
- pdf-stream
section: databases
is_news: true
interest_score: 8
depth_score: 9
utility_score: 8
novelty_score: 8
hn_id: '49971678'
comments: https://news.ycombinator.com/item?id=49971678
why_read: This document contains raw binary stream data that cannot be parsed into
  readable text.
authors:
- ibobev
image: /infographics/03-news-49971678.jpg
---

Log-structured merge (LSM) trees force storage engine designers to navigate an unforgiving trade-off between write amplification and query performance. Leveled compaction minimizes point and range lookup latencies at the cost of high write amplification, while tiered compaction saves disk writes but penalizes read throughput with multiple SSTables per level.

The Dostoevsky storage architecture removes this rigid choice by demonstrating how dynamic compaction policies can navigate the entire Pareto-optimal space between leveling and tiering. By selectively applying merge strategies across different levels and dynamically sizing Bloom filters per level, storage engines can achieve significant reductions in write traffic without degrading point lookup latencies.

For distributed database engineers building or tuning high-throughput storage engines, understanding these mathematical bounds is crucial. Tuning an LSM-tree is no longer about guessing leveling ratios; it is about formalizing the exact cost curve of your workload to optimize hardware utilization.

Careful compaction design turns storage bottlenecks into predictable throughput.
