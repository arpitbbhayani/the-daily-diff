---
authors:
- Renato Losio
comments: https://news.ycombinator.com/item?id=49095283
date: '2026-07-29'
depth_score: 8
hn_id: '49095283'
image: /infographics/40-hn-49095283.jpg
interest_score: 8
novelty_score: 7
section: systems
source: hn
tags:
- catchup
- client-side-load-balancing
- high-throughput-api
- hn
- in-process-load-balancing
- infrastructure-optimization
- latency-reduction
- microservices
title: Zalando improves latency with in-process client-side load balancer
url: https://www.infoq.com/news/2026/07/client-side-load-balancer/
utility_score: 8
why_read: Read this to understand how Zalando engineered an in-process client-side
  load balancer to improve API latency and reduce infrastructure costs for a high-throughput
  system. You will learn about a real-world solution to managing fan-out traffic in
  a large-scale microservice architecture.
---

Scaling an API to one million requests per second with deep fan-out is incredibly complex. Zalando's team faced this challenge, where a single batch request fanned out to 100 parallel calls, bottlenecking on the slowest link in infrastructure they did not own.

Their solution was not to optimize the external balancer but to move routing for high fan-out traffic in-process, directly into the client applications. This radical shift led to more predictable latency, significant infrastructure cost reductions, and clearer visibility into failure origins.

This is a masterclass in re-evaluating architectural assumptions for extreme scale. Sometimes, the most effective optimization is to take control of the load balancing logic yourself. You will find that external solutions are not always the answer for internal, specialized traffic patterns.