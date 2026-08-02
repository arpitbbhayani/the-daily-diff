---
authors:
- bagowix
comments: https://news.ycombinator.com/item?id=49115482
date: '2026-07-30'
depth_score: 8
hn_id: '49115482'
image: /infographics/117-github-49115482-interlock-circuit-breaker-unifies-sync-and-async-python.jpg
interest_score: 8
novelty_score: 8
section: systems
source: github
tags:
- asynchronous-programming
- catchup
- circuit-breaker
- github
- python
- sliding-window
- slow-call-detection
- synchronous-programming
- type-safety
title: Interlock circuit breaker unifies sync and async Python calls
url: https://github.com/bagowix/interlock
utility_score: 9
why_read: This describes Interlock, a modern Python circuit breaker. It explains how
  it handles both synchronous and asynchronous calls in a single class, implements
  sliding-window rate limits, and detects slow calls, offering unique features not
  found in other Python circuit breakers.
---

Traditional circuit breakers protect your services from cascading failures by tripping on errors. But what about services that are merely slow? Those can be just as damaging, tying up resources and degrading user experience.

A new Python library, Interlock, tackles this with an innovative slow-call detection feature. It treats calls exceeding a predefined latency threshold as failures, preventing your system from hammering a struggling dependency even if it is not explicitly throwing errors.

This is a critical upgrade for building truly resilient distributed systems. It supports both synchronous and asynchronous operations in a single class, uses sliding-window rate tracking, and offers a type-safe API, making it a powerful addition to any Python engineer's toolkit.