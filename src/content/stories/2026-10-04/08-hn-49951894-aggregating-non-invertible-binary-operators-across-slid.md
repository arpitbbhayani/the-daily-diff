---
title: Aggregating non-invertible binary operators across sliding windows
source: hn
url: https://orlp.net/blog/two-stack-sliding-window-aggregation/
date: '2026-10-04'
tags:
- aggregations
- catchup
- hn
- non-invertible-operators
- queue
- sliding-window
- two-stack-algorithm
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49951894'
comments: https://news.ycombinator.com/item?id=49951894
why_read: Understand how to maintain efficient sliding-window aggregations when operations
  lack inverses, such as finding minimums or handling floating-point sums. You will
  learn a versatile two-stack pattern that simplifies complex stream aggregations.
authors:
- fanf2
---

Calculating sliding window sums over a streaming dataset is trivial with a double-ended queue when the aggregation operator has an inverse. You add the incoming item and subtract the exiting item in constant time.

However, many critical aggregations lack an inverse. Minimums, maximums, quantiles, floating point sums with potential invalid values, and HyperLogLog counters cannot simply have elements subtracted out when they leave the sliding window.

The two-stack sliding window aggregation algorithm solves this problem neatly for any associative operator. By maintaining two stacks with running prefix aggregates, you can simulate a FIFO queue. One stack receives new elements while the other stack handles pops. When the pop stack is empty, you flip the push stack into the pop stack in bulk while computing cumulative aggregates along the way.

This yields an amortized constant time evaluation for sliding window summaries without needing complex tree structures. It is an essential pattern for stream processing engines and metrics pipelines that require high throughput with arbitrary associative aggregations.
