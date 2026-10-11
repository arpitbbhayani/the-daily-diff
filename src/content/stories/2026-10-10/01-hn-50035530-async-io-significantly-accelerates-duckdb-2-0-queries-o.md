---
title: Async IO significantly accelerates DuckDB 2.0 queries over S3
source: hn
url: https://motherduck.com/blog/why-duckdb-20-is-faster/
date: '2026-10-10'
tags:
- async-io
- catchup
- database-engines
- duckdb
- hn
- parquet
- s3
section: databases
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '50035530'
comments: https://news.ycombinator.com/item?id=50035530
why_read: Read this to understand the concrete performance gains in DuckDB 2.0, particularly
  how asynchronous I/O reduces query latency when scanning Parquet files over S3.
authors:
- Mehdi Ouazza
image: /infographics/01-hn-50035530.jpg
---

Analytical query engines querying cloud object storage spend most of their execution time waiting on network round-trips rather than crunching data. DuckDB 2.0 tackles this bottleneck directly by decoupling file downloads from Parquet decoding through asynchronous I/O.

In real-world benchmarks scanning a 2.2 gigabyte Parquet table with 228 million rows stored across 2,268 row groups on Amazon S3, query time dropped from 18.8 seconds in DuckDB 1.5 to 7.7 seconds in DuckDB 2.0. This represents more than a two-fold latency reduction on identical hardware without altering a single line of SQL.

Previous versions blocked compute threads while waiting for individual row groups over high-latency networks. DuckDB 2.0 pipelines S3 byte-range fetches ahead of time, ensuring CPU cores remain saturated decoding Parquet pages and aggregating counts instead of idling on socket reads.

Optimizing modern data engines is no longer just about SIMD and vectorized loops, but about hiding distributed storage latency behind asynchronous pipelines.
