---
title: Unparseable Raw PDF Stream Data
source: hn
url: https://www.usenix.org/system/files/fast23-lu.pdf
date: '2026-10-06'
tags:
- binary-data
- catchup
- hn
- pdf
section: systems
is_news: false
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49982212'
comments: https://news.ycombinator.com/item?id=49982212
why_read: This file contains compressed binary PDF stream data with no readable text.
authors:
- ibobev
---

Fail-stop crashes are easy to detect, but fail-slow hardware faults are what quietly destroy tail latencies in cloud storage.

When a single solid-state drive or top-of-rack switch degrades by an order of magnitude without crashing, traditional heartbeat checks continue passing. The affected storage node remains in the active replica set, bottlenecking distributed consensus rounds and driving p99 latencies through the roof across the entire fleet.

Perseus addresses this by analyzing fine-grained latency distributions across peer nodes under similar load rather than relying on hardcoded static timeout thresholds. It isolates degraded components before localized performance drops cascade into cluster-wide outages.

Building resilient distributed systems requires treating performance degradation as a first-class failure state alongside outright process crashes.
