---
title: Compiling type-safe queries to bytecode eliminates browser database bloat
source: hn
url: https://ahmad-moussawi.github.io/webdb/
date: '2026-09-24'
tags:
- catchup
- hn
- http-range-requests
- offline-first
- relational-database
- vector-search
- wasm-simd
- web-locks
section: databases
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49829944'
comments: https://news.ycombinator.com/item?id=49829944
why_read: Learn how WebDB provides a full-featured, lightweight relational database
  engine in the browser by bypassing traditional SQL parsing. It outlines practical
  architectures for offline-first apps, local AI vector search, and client-side data
  querying.
authors:
- amd__
---

Running relational databases inside the browser typically forces developers to pick between slow key-value abstractions and bloated WebAssembly ports of C engines like SQLite that exceed several megabytes.

WebDB takes a different architectural approach by eliminating the traditional SQL string parsing step entirely. Instead of compiling a massive C parser to Wasm and parsing strings at runtime, it compiles type-safe TypeScript query builders directly into engine bytecode. This shrinks the runtime engine footprint to under 50 kilobytes while maintaining full ACID guarantees and multi-tab coordination through Web Locks.

Beyond small footprints, the engine executes vector similarity search via 128-bit Wasm SIMD for client-side retrieval-augmented generation. It also allows developers to query remote multi-gigabyte files stored on object stores like Cloudflare R2 or S3 using selective HTTP range requests without downloading the entire database.

Eliminating runtime SQL parsing proves that client-side databases do not need heavy native ports to deliver high performance.
