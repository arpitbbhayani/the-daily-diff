---
title: Warming up the Puma master reduces post-deploy request queues
source: hn
url: https://dev.37signals.com/warming-up-the-puma-master-before-it-forks/
date: '2026-10-07'
tags:
- catchup
- concurrency
- hn
- pre-forking
- puma
- rails
- request-queues
section: systems
is_news: false
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49997969'
comments: https://news.ycombinator.com/item?id=49997969
why_read: Learn how Basecamp reduced post-deploy queue spikes by warming up Rails
  in the Puma master process before forking workers. It provides concrete insights
  into benchmarking Ruby workloads and managing process-based concurrency.
authors:
- Lewis Buckley
---

Deploying a Ruby on Rails application across high-traffic servers often triggers a painful warmup spike. At 37signals, each Basecamp deployment left up to 2,000 requests waiting in queues while newly spawned Puma worker processes struggled to warm up their caches and internal runtime states.

Their architecture runs Puma in cluster mode using 63 single-threaded workers per 48-core host. Benchmarking proved that single-threaded processes consistently outperformed multithreaded configurations because Ruby threads spend substantial time waiting on the Global VM Lock. However, launching 63 cold workers simultaneously saturated the CPU and stalled inbound production traffic.

The team solved this by executing simulated, signed-in HTTP requests directly within the Puma master process before it forks the worker pool. Because Linux forks preserve memory pages through copy-on-write semantics, every child worker inherits pre-warmed database schemas, compiled templates, and populated memory structures right out of the gate.

Pre-fork warmup eliminates the stampede problem and ensures zero queue buildup during production rolling deploys.
