---
title: Correctly using metrics, logs, and traces avoids common observability mistakes
source: hn
url: https://skoredin.pro/blog/golang/observability-go
date: '2026-09-17'
tags:
- cardinality
- catchup
- hn
- logs
- loki
- metrics
- observability
- prometheus
- tempo
- traces
section: engineering
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49740336'
comments: https://news.ycombinator.com/item?id=49740336
why_read: Learn to differentiate metrics, logs, and traces to avoid common observability
  pitfalls. Understand the critical impact of cardinality on system performance and
  cost within tools like Prometheus, Loki, and Tempo.
authors:
- Serge Skoredin
---

Misplacing a single piece of observability data can have significant performance and cost implications. This deep dive into Go observability breaks down why putting a fact in the wrong category - metric, log, or trace - is a critical mistake, and how it impacts systems like Prometheus and Loki.

The article details the often-overlooked cost of high cardinality labels in Prometheus. For example, adding `user_id` to a counter can significantly increase memory usage across hundreds of thousands of users. It is a subtle trap, but one that can quickly spiral into infrastructure headaches.

You will learn how choices about what to measure and how to label it directly influence storage costs and query performance. The guide also covers how Loki's stream mechanism and Tempo's design offer different approaches to sidestep these cardinality issues. It is a must-read for anyone building scalable Go services.
