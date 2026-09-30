---
title: Splink five improves record linkage scalability and training speed
source: hn
url: https://moj-analytical-services.github.io/splink/blog/2026/09/28/splink-500-released.html
date: '2026-09-29'
tags:
- catchup
- chunking
- deduplication
- duckdb
- expectation-maximization
- hn
- record-linkage
section: databases
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49891072'
comments: https://news.ycombinator.com/item?id=49891072
why_read: Learn how Splink 5 optimizes large-scale record linkage and deduplication
  through chunked predictions and faster parameter estimation.
authors:
- RobinL
---

Probabilistic entity resolution at scale is notoriously expensive because pairwise comparison complexity grows quadratically with data volume. Splink 5.0 addresses this bottleneck by introducing chunked execution pipelines that execute directly against embedded analytical engines such as DuckDB.

In benchmark tests running against DuckDB 2.0, Splink completed a ten billion comparison linkage run across one billion records in under nine minutes on a single instance. The updated architecture partitions the prediction pipeline into discrete chunks, enabling horizontal execution across nodes while streaming progress updates and intermediate checkpoints.

Training workflows also receive major performance upgrades. Expectation-maximisation parameter estimation now applies explicit comparison caps to prevent explosive compute states, while sampling utilities incorporate early stopping once statistical thresholds are satisfied.

Deterministic and probabilistic record deduplication no longer requires dedicated, complex distributed clusters when vectorised analytical engines can handle billions of records locally.
