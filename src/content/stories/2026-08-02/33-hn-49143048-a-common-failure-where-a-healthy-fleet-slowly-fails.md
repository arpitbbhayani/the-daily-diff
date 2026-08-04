---
title: A common failure where a healthy fleet slowly fails
source: hn
url: https://sahansera.dev/no-healthy-upstream/
date: '2026-08-02'
tags:
- catchup
- cpu-throttling
- debugging-strategies
- hn
- intermittent-failure
- load-balancer-timeout
- no-healthy-upstream
- root-cause-analysis
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49143048'
comments: https://news.ycombinator.com/item?id=49143048
why_read: This post explains how a plausible root-cause analysis can be misleading
  and describes a specific failure mode in which healthy services slowly remove themselves
  from service.
authors:
- Sahan Serasinghe
---

Debugging "no healthy upstream" errors can be deceptively tricky. One team chasing intermittent failures in a search backend initially suspected CPU throttling, a common culprit, and even had a plausible one-line fix.

However, the evidence did not align. The P99 latency climbing sharply to the load balancer timeout and staying flat, then dropping, suggested a hard deadline rather than gradual slowdown. This revealed a different, subtle failure mode across the fleet that initial theories missed.

This is a fantastic lesson in distinguishing between plausible stories and actual system behavior. It underscores that deeper investigation beyond the obvious is crucial for resolving stubborn distributed system issues effectively.
