---
title: Pulp reduces SIEM ingestion costs with high-throughput data precompression
source: github
url: https://github.com/superwired-labs/Pulp
date: '2026-08-11'
tags:
- catchup
- data-compression
- github
- lossless-compression
- siem
- structured-data
- windows-x64
section: systems
interest_score: 9
depth_score: 9
utility_score: 9
novelty_score: 8
hn_id: '49262726'
comments: https://news.ycombinator.com/item?id=49262726
why_read: This describes a native C library for Windows x64 that offers high-throughput,
  lossless precompression and anonymization of structured data at the source. Readers
  will learn how it can drastically reduce SIEM ingestion costs and provide deterministic
  memory usage.
authors:
- "Fran\xE7ois Gauthier"
---

Pushing 28 million logs per second to disk with zero allocations is not just a benchmark, it is a masterclass in systems engineering. Pulp, a C11 telemetry engine, demonstrates how to achieve this with a combination of intelligent techniques.

It leverages lossless semantic deduplication alongside LZ4 compression, shrinking data by three to six times. Furthermore, it integrates AVX-2 accelerated IP anonymization directly into the data path, ensuring privacy at line rate. The hot path maintains a completely deterministic memory footprint, which is critical for predictable performance in high-stress environments.

This is not just about raw speed; it is about significantly reducing SIEM ingestion costs for platforms like Splunk, Datadog, and Elastic. Understanding these low-level optimizations and architectural trade-offs can directly inform how you design and build scalable, cost-efficient infrastructure.

Every senior engineer should analyze such battle-hardened approaches to data processing.
