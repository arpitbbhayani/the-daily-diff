---
authors:
- shintoist
comments: https://news.ycombinator.com/item?id=49096954
date: '2026-07-29'
depth_score: 8
hn_id: '49096954'
image: /infographics/56-hn-49096954.jpg
interest_score: 8
novelty_score: 7
section: systems
source: hn
tags:
- catchup
- consistent-hashing
- distributed-rate-limiting
- elixir
- hn
- hrw-hashing
- state-synchronization
title: HRW algorithm enables distributed rate limiting without Redis
url: https://jola.dev/posts/distributed-ratelimiter-with-hrw
utility_score: 9
why_read: This article explains how to implement a distributed rate limiter in an
  Elixir cluster using HRW hashing, avoiding the need for external services like Redis.
  Readers will learn how HRW and consistent hashing enable efficient, mostly consistent
  state synchronization with minimal key re-assignments during node changes.
---

Implementing a distributed rate limiter often means reaching for Redis, but this article reveals how to build a robust one in Elixir without external services. It leverages Highest Random Weight (HRW), also known as rendezvous hashing, for consistent key-to-node assignment.

This approach ensures that rate limit lookups for a given IP or user ID always hit the same node in your cluster, maintaining consistency. The key insight is HRW's ability to minimize key re-assignments when cluster nodes change, making it resilient to auto-scaling or node failures.

For senior engineers, this is a masterclass in elegant distributed system design, showing how to achieve strong consistency and fault tolerance with clever algorithmic choices within a clustered environment. You will gain actionable patterns for managing shared state without the operational overhead of another database.