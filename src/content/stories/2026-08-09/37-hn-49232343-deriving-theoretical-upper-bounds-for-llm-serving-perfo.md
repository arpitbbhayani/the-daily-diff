---
authors:
- Onur Solmaz
comments: https://news.ycombinator.com/item?id=49232343
date: '2026-08-09'
depth_score: 8
hn_id: '49232343'
image: /infographics/37-hn-49232343.jpg
interest_score: 8
novelty_score: 7
section: ai
source: hn
tags:
- catchup
- compute-throughput
- decode-bound
- hardware-performance
- hn
- llm-performance
- memory-bandwidth
- prefill-bound
- serving-throughput
- theoretical-bounds
title: Deriving Theoretical Upper Bounds for LLM Serving Performance
url: https://solmaz.io/llm-performance-upper-bounds
utility_score: 8
why_read: This post explains the mathematical first principles behind calculating
  the theoretical maximum throughput for serving large language models. Readers will
  understand how hardware limitations like memory bandwidth and compute throughput
  define the performance ceiling for both token generation and prompt processing.
---

Understanding LLM serving performance is critical, and this article breaks down the theoretical upper bounds using first principles. It details how hardware constraints like memory capacity, bandwidth, and compute throughput define the maximum tokens per second you can expect during both decode and prefill phases. 

This is not just a high-level overview; it provides the underlying math and a 'roofline' model to predict throughput. You will learn to make informed decisions about model deployment and hardware selection by reasoning from these fundamental limits. 

Stop guessing about LLM bottlenecks and start reasoning from first principles.