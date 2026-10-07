---
title: How two hundred requests bypassed a rate limit threshold
source: hn
url: https://techinpencil.com/rate-limiter/
date: '2026-10-06'
tags:
- catchup
- concurrency
- distributed-systems
- hn
- rate-limiting
section: systems
is_news: false
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49977823'
comments: https://news.ycombinator.com/item?id=49977823
why_read: Understand the failure modes of rate-limiting implementations when concurrent
  requests bypass thresholds. You will learn how race conditions undermine traffic
  limits and how to fix them.
authors:
- rogo032
---

Fixed-window rate limiters come with a subtle design flaw that can double your traffic spikes. When you configure a hard limit of 100 requests per minute, a burst of 100 requests at minute 0:59 followed immediately by 100 requests at minute 1:01 allows 200 requests within a two-second window. The server absorbs twice the expected throughput across that rolling interval.

To eliminate this boundary vulnerability, backend systems typically shift toward sliding window counters or token bucket implementations. Sliding window algorithms split time intervals into smaller sub-windows or weight previous bucket counts to ensure steady throughput across arbitrary spans.

Understanding these algorithmic trade-offs helps backend engineers protect downstream services from unexpected traffic surges.
