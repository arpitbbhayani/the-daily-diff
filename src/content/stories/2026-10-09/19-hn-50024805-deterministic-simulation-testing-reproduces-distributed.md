---
title: Deterministic simulation testing reproduces distributed bugs through controlled
  event ordering
source: hn
url: https://celld.dev/docs/engineering/deterministic-simulation-testing/
date: '2026-10-09'
tags:
- catchup
- deterministic-simulation-testing
- distributed-systems
- event-ordering
- hn
- reproducibility
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '50024805'
comments: https://news.ycombinator.com/item?id=50024805
why_read: Read this to understand how deterministic simulation testing controls event
  execution orders to systematically reproduce and fix distributed system bugs.
authors:
- Yusuke Tanaka
---

Most distributed systems bugs are timing bugs that disappear the moment you attach a debugger. Running Cloudflare Workers and Durable Objects workloads across isolated SQLite nodes makes reproducing sequence-dependent race conditions exceptionally difficult.

Celld tackles this problem by applying deterministic simulation testing directly against production code. Instead of coupling event generation to operating system threads, the runtime completely decouples the code that selects the next event from the code that handles it.

The simulator steps in as an explicit discrete-event scheduler. It controls the delivery order of network messages, async promise resolutions, storage I/O completion, and timer ticks. Because every source of non-determinism is simulated under a single seed, any sequence of interleavings that triggers a bug can be replayed identically on demand.

Writing distributed software without deterministic simulation testing is like flying blind into production.
