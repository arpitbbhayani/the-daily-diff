---
title: Paganel provides crash-safe data migration with cryptographic verification
source: github
url: https://github.com/stanstork/paganel
date: '2026-10-06'
tags:
- catchup
- crash-safety
- cryptographic-verification
- data-migration
- github
- rust
- schema-migration
- wasm-plugins
section: databases
is_news: false
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49977297'
comments: https://news.ycombinator.com/item?id=49977297
why_read: Explore a declarative data migration engine built in Rust that guarantees
  correctness via cryptographic verification and crash recovery. It provides a clean
  model for moving and transforming database records across heterogenous systems using
  sandboxed WASM plugins.
authors:
- stanstork
---

Database migrations across heterogeneous systems often fail due to subtle type mismatches, incomplete batching, or silent data truncation. Paganel is an open source Rust migration engine designed to address this problem by producing cryptographic verification receipts for every transferred row.

The tool combines declarative configuration with parallel execution, in-flight transformations, and crash recovery across systems like MySQL, PostgreSQL, and CSV targets. By allowing sandboxed WebAssembly plugins as custom sources and sinks, it enables arbitrary transform logic without sacrificing crash safety or deterministic auditing.

Building verifiable guarantees into data pipeline tooling provides a dependable foundation when moving massive datasets across production stores.
