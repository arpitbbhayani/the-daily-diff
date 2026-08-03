---
authors:
- kalaracey
comments: https://news.ycombinator.com/item?id=49135383
date: '2026-08-01'
depth_score: 8
hn_id: '49135383'
image: /infographics/13-hn-49135383.jpg
interest_score: 8
novelty_score: 7
section: databases
source: hn
tags:
- ai-agents
- catchup
- data-lake
- distributed-sql-engines
- hn
- low-latency
- online-point-queries
- random-access-parquet
title: Indexing Data Lakes for Fast Online Point Queries with RAP
url: https://engineering.atspotify.com/2026/7/indexing-the-data-lake-for-online-point-queries
utility_score: 8
why_read: This article explains how Spotify enables fast online point queries over
  petabytes of data lake storage for services and AI agents. Readers will learn about
  Random Access Parquet (RAP) as a solution to bridge the gap between data lakes and
  low-latency access.
---

Performing low-latency point queries on petabyte-scale data lakes for online services and AI agents has always been a major architectural challenge, often forcing companies into costly data duplication. Spotify shares its solution.

They built Random Access Parquet (RAP) which allows direct, precise ranged reads on existing Parquet files in their data lake. This bypasses the seconds of overhead from traditional distributed SQL engines like Trino or BigQuery, which are optimized for throughput, not interactive lookups.

The genius lies in using an external index to map keys directly to file locations. This means they are not moving data, but enabling efficient access in situ, reducing the need for separate key-value stores for serving. This is a significant win for cost-efficiency and architectural simplicity, especially as AI agents increasingly demand real-time data access.

This approach shifts the bottleneck from the query engine back to storage, which is rapidly improving. Truly a smart trade-off for scalability.