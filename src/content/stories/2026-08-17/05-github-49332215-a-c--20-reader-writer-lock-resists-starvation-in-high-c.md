---
title: A C++20 reader-writer lock resists starvation in high-concurrency
source: github
url: https://github.com/adanil-code/FairRWLock
date: '2026-08-17'
tags:
- c++20
- catchup
- github
- high-concurrency
- lock-free
- reader-writer-lock
- starvation-resistance
section: systems
interest_score: 9
depth_score: 9
utility_score: 9
novelty_score: 8
hn_id: '49332215'
comments: https://news.ycombinator.com/item?id=49332215
why_read: This documentation explains the design of a C++20 reader-writer lock that
  prevents thread starvation in high-concurrency environments while maintaining high
  throughput. You will learn about its innovative features like deterministic fairness
  and NUMA-aware scaling.
authors:
- adanil-code
---

For engineers working in high-concurrency environments, especially those dealing with HFT or critical infrastructure, `FairRWLock` is a game-changer. This C++20 reader-writer lock introduces true starvation resistance alongside high-throughput capabilities.

Its design incorporates a lock-free atomic fast path, zero-allocation wait queues, and deterministic fairness policies to prevent writer starvation. Crucially, it includes features like configurable fairness policies, logical baton handoff, and even NUMA-aware scaling to distribute reader counts across physical sockets, eliminating cache-line bouncing.

This project provides an excellent blueprint for implementing advanced concurrency primitives. It demonstrates how to achieve both extreme performance and predictable fairness in the most demanding system designs.
