---
title: Amber is a fast array language like q/kdb+
source: github
url: https://github.com/BonucciAndrea/amber
date: '2026-08-11'
tags:
- array-language
- catchup
- columnar
- github
- in-memory
- low-latency
- q/kdb+
- vectorized
section: databases
interest_score: 8
depth_score: 9
utility_score: 8
novelty_score: 7
hn_id: '49257486'
comments: https://news.ycombinator.com/item?id=49257486
why_read: This describes Amber, a low-latency, columnar array language that provides
  the working vocabulary and functionality of q/kdb+ implemented in C, enabling high-performance
  data operations.
authors:
- BonucciAndrea
---

Ever wondered how ultra-low latency financial data systems like kdb+ achieve their blistering speeds? This open-source C99 project, Amber, provides an incredibly deep dive.

It implements a columnar, vectorised, in-memory array language with the full q/kdb+ vocabulary, including complex joins and qSQL-style queries. This is not just a toy; it is a full-fledged engine built for performance.

Understanding its C99 implementation can offer invaluable insights into core database internals, query optimization techniques, and the architectural trade-offs for extreme performance, especially for those interested in building their own high-performance data processing layers.
