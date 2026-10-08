---
title: Streaming large xlsx files in nodejs using constant memory
source: github
url: https://github.com/anzal1/sheetstream
date: '2026-10-07'
tags:
- catchup
- constant-memory
- github
- napi-rs
- nodejs
- rust
- xlsx
section: engineering
is_news: false
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49998431'
comments: https://news.ycombinator.com/item?id=49998431
why_read: Learn how to stream large XLSX and CSV files in Node.js without running
  out of memory by delegating parsing to a native Rust core.
authors:
- anzal1
---

Generating large XLSX files in Node.js has historically been a notorious memory trap. Libraries like ExcelJS construct extensive in-memory object graphs, easily exhausting default V8 heap limits on workloads with hundreds of thousands of rows.

Sheetstream works around this bottleneck by shifting the heavy lifting to a Rust core exposed via napi-rs. Instead of keeping the entire workbook in memory, it streams data in batches of 1,000 rows directly into an active zip stream on the fly.

The benchmark numbers are striking. A one-million-row XLSX export that would routinely crash standard Node.js processes runs reliably in roughly 82 megabytes of RAM.

Offloading memory-heavy transformations to zero-copy native extensions remains one of the cleanest patterns for scaling Node.js backend services without vertically oversizing container memory.
