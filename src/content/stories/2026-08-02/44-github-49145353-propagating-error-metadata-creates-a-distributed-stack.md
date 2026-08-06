---
authors:
- Leandro Moreira
comments: https://news.ycombinator.com/item?id=49145353
date: '2026-08-02'
depth_score: 8
hn_id: '49145353'
image: /infographics/44-github-49145353.jpg
interest_score: 8
novelty_score: 8
section: systems
source: github
tags:
- catchup
- distributed-stack-trace
- distributed-tracing-sampling
- error-propagation
- github
- http-headers
- microservices
title: Propagating error metadata creates a distributed stack trace
url: https://github.com/leandromoreira/distributed-stack-trace/tree/main
utility_score: 9
why_read: Read this to understand a novel approach for building distributed stack
  traces that ensures 100% error context capture without the overhead of traditional
  full distributed tracing.
---

Debugging errors in distributed systems can be a nightmare, especially when traditional distributed tracing relies on head-sampling and often misses the very failures you need to diagnose. This project offers an ingenious solution.

Instead of full tracing, it introduces a "distributed stack trace" that propagates error metadata up the call chain using a simple HTTP header (x-error-tree). This approach ensures you capture 100 percent of the failure context, providing a complete error tree without the significant overhead of collecting all trace data.

This is a game-changer for microservice fault diagnosis. You get immediate, comprehensive error context, making it far easier to pinpoint root causes and resolve issues in complex architectures.