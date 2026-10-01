---
title: Measuring runtime costs of online repacking in PostgreSQL 19
source: hn
url: https://boringsql.com/posts/repack-concurrently-costs/
date: '2026-09-30'
tags:
- catchup
- hn
- pg-repack
- pg-squeeze
- repack-concurrently
- table-bloat
- vacuum-full
section: databases
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49912299'
comments: https://news.ycombinator.com/item?id=49912299
why_read: Read this to understand how PostgreSQL 19's native online repacking functions
  under the hood. You will learn the performance trade-offs, resource constraints,
  and behavioral differences compared to existing extensions like pg_repack.
authors:
- plaur782
---

PostgreSQL 19 introduces native REPACK (CONCURRENTLY), combining VACUUM FULL and CLUSTER into a core online command without requiring third-party extensions like pg_repack or pg_squeeze. While this simplifies table maintenance on managed cloud environments, running it online introduces non-trivial operational costs that engineers must plan for.

During an online rewrite, the storage engine records concurrent modifications while copying live rows into a new physical file. This mechanism holds back autovacuum truncation across the database, which can cause bloat in unrelated tables if the repack job runs for hours. Furthermore, capturing write deltas consumes memory up to a hard ceiling, and swapping the final files still requires an exclusive lock transition that can stall queued queries.

Benchmarking on high-throughput workloads shows that while native repacking eliminates external dependencies, its memory footprint under write-heavy loads demands careful monitoring.

Understanding these internal trade-offs ensures that you can reclaim disk space safely without causing database connection saturation or lock contention.
