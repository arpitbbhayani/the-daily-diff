---
title: Propagating error metadata creates a distributed stack trace
source: github
url: https://github.com/leandromoreira/distributed-stack-trace/tree/main
date: '2026-08-02'
tags:
- catchup
- distributed-stack-trace
- distributed-tracing-sampling
- error-propagation
- github
- http-headers
- microservices
section: systems
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49145353'
comments: https://news.ycombinator.com/item?id=49145353
why_read: Read this to understand a novel approach for building distributed stack
  traces that ensures 100% error context capture without the overhead of traditional
  full distributed tracing.
authors:
- Leandro Moreira
---

Debugging errors in distributed systems can be a nightmare, especially when traditional distributed tracing relies on head-sampling and often misses the very failures you need to diagnose. This project offers an ingenious solution.

Instead of full tracing, it introduces a "distributed stack trace" that propagates error metadata up the call chain using a simple HTTP header (x-error-tree). This approach ensures you capture 100 percent of the failure context, providing a complete error tree without the significant overhead of collecting all trace data.

This is a game-changer for microservice fault diagnosis. You get immediate, comprehensive error context, making it far easier to pinpoint root causes and resolve issues in complex architectures.
