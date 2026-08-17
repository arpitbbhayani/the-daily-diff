---
title: Random Access Parquet enables fast data lake point queries at Spotify
source: hn
url: https://engineering.atspotify.com/2026/7/indexing-the-data-lake-for-online-point-queries
date: '2026-08-15'
tags:
- catchup
- data-lake-indexing
- hn
- online-point-queries
- random-access-parquet
- spotify-data-architecture
section: databases
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49308973'
comments: https://news.ycombinator.com/item?id=49308973
why_read: This article explains how Spotify uses Random Access Parquet to enable fast
  online point queries over massive data lakes, overcoming the limitations of traditional
  distributed SQL engines for interactive access. Readers will learn about a practical
  solution for low-latency data access at petabyte scale.
authors:
- djdillon
---

Serving online point queries from exabyte-scale data lakes is a significant challenge for modern systems, especially with AI agents needing rapid access. Traditional key-value stores are too costly for this scale, while analytical engines introduce unacceptable latency for interactive requests.

Spotify engineered Random Access Parquet (RAP) to bridge this gap. Instead of moving data into expensive key-value stores or suffering slow analytical queries, RAP uses an external index mapping keys directly to file locations within Parquet files. This allows for precise, ranged reads fetching only the necessary bytes from cloud storage, drastically reducing I/O and latency.

This architecture enables interactive-speed lookups over vast datasets, using the same Parquet files already leveraged by ML pipelines and batch analytics. It demonstrates a clever approach to optimize data access patterns for speed and cost efficiency, fundamentally changing how you might think about data lake utility for online services.
