---
authors:
- mfiguiere
comments: https://news.ycombinator.com/item?id=49091462
date: '2026-07-28'
depth_score: 8
hn_id: '49091462'
image: /infographics/65-hn-49091462.jpg
interest_score: 8
novelty_score: 6
section: systems
source: hn
tags:
- catchup
- distributed-tracing
- hn
- opentelemetry
- span
- span-context
- trace
title: OpenTelemetry spans form trace trees in distributed tracing
url: https://krzysztofslusarski.github.io/2026/07/27/spans.html
utility_score: 8
why_read: This text clearly defines spans and traces within distributed tracing, using
  OpenTelemetry as an example. Readers will learn how span contexts create the hierarchical
  structure of a trace.
---

Pinpointing performance bottlenecks in distributed systems often feels like searching for a needle in a haystack. This article provides a powerful solution by showing how to integrate Async-Profiler with OpenTelemetry spans.

You can now correlate your low-level CPU flame graphs and thread dumps directly with high-level distributed traces. This means moving beyond guessing where latency comes from and instead seeing exactly which code paths consume CPU time within a specific trace segment.

For any senior engineer wrestling with microservice performance, this fusion of profiling and tracing offers an unparalleled level of observability. It is a highly actionable strategy to move from symptom to root cause with surgical precision.