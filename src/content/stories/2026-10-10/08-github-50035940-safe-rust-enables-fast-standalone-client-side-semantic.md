---
title: Safe Rust enables fast standalone client-side semantic search
source: github
url: https://github.com/dropbox/witchcraft
date: '2026-10-10'
tags:
- catchup
- client-side-search
- github
- safe-rust
- semantic-search
- sqlite
- xtr-warp
section: databases
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '50035940'
comments: https://news.ycombinator.com/item?id=50035940
why_read: Learn how Witchcraft implements XTR-Warp in safe Rust using SQLite to deliver
  low-latency semantic search on local devices without dedicated vector databases.
authors:
- tosh
---

Most modern semantic search stacks require sprawling infrastructure with dedicated vector databases, bespoke chunking services, and remote API dependencies. Dropbox Witchcraft takes the opposite path by packaging Stanford XTR-Warp into a single safe Rust binary backed entirely by SQLite.

The architecture runs entirely on device with zero external network dependencies. On an Apple M4 Max running the NFCorpus benchmark, the system delivers a 95th percentile end-to-end search latency of 14 milliseconds while maintaining 34 percent NDCG at 10. That is more than twice as fast as the original XTR-Warp running on dedicated server hardware.

Ditching separate vector indexes for a plain SQLite file removes immense operational complexity for client-side search. Local desktop and edge applications can execute dense multi-vector retrieval directly over embedded storage without sacrificing retrieval quality or throughput.
