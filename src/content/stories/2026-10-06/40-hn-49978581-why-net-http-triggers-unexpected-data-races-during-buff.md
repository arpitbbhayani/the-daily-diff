---
title: Why net http triggers unexpected data races during buffer reuse
source: hn
url: https://victoriametrics.com/blog/http-race-condition/index.html
date: '2026-10-06'
tags:
- buffer-reuse
- catchup
- data-race
- go
- hn
- net-http
- race-detector
section: systems
is_news: false
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 6
hn_id: '49978581'
comments: https://news.ycombinator.com/item?id=49978581
why_read: Learn why Go's race detector flags unexpected concurrency conflicts in net/http
  and how buffer reuse patterns trigger them.
authors:
- Vadim Alekseev
---

Reusing memory buffers is a standard technique for reducing garbage collection pressure in high-throughput Go services. However, pairing a shared bytes buffer with the Go net/http client can trigger unexpected data race warnings.

While profiling vmagent under the Go race detector, engineers observed a race between their code and an internal transport goroutine. When a server returns an error before consuming the full request body, net/http may continue draining the socket in the background while your client code attempts to reset and reuse the underlying buffer for a retry.

Understanding where goroutine lifecycles end is critical when writing high-performance network clients. If you pool buffers across HTTP retries, ensure the previous transport round-trip has completely released the stream before touching the memory again.
